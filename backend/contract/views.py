from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from .models import Contract
from proposal.models import Proposal
from .serializers import ContractSerializer
from rest_framework.views import APIView
from user.models import User  
import logging
logger = logging.getLogger(__name__)

class ContractListCreateView(generics.ListCreateAPIView):
    queryset = Contract.objects.all()
    serializer_class = ContractSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        proposal_id = request.data.get('proposal')
        
        # Log request data
        logger.info("Received contract creation request data: %s", request.data)

        # Check if proposal ID is provided
        if not proposal_id:
            logger.error("Proposal ID is missing.")
            return Response({"detail": "Proposal ID is required."}, status=status.HTTP_400_BAD_REQUEST)
        
        # Check if proposal exists
        try:
            proposal = Proposal.objects.get(id=proposal_id)
            logger.info("Proposal found: %s", proposal)
        except Proposal.DoesNotExist:
            logger.error("Proposal with ID %s not found.", proposal_id)
            return Response({"detail": "Proposal not found."}, status=status.HTTP_404_NOT_FOUND)
        
        # Check if user is authorized to create contract for this project
        if proposal.project.client != request.user:
            logger.warning("Unauthorized access attempt by user %s to create contract.", request.user)
            return Response(
                {"detail": "You are not authorized to create a contract for this project."},
                status=status.HTTP_403_FORBIDDEN
            )
        
        # Prepare contract data based on proposal details
        contract_data = {
            'project': proposal.project.id,
            'proposal': proposal.id,
            'freelancer': proposal.freelancer.id,
            'client': request.user.id,
            'contract_amount': proposal.proposed_rate,
            'start_date': request.data.get('start_date'),
            'end_date': request.data.get('end_date'),
            'terms': request.data.get('terms')
        }

        # Log constructed contract data
        logger.info("Constructed contract data: %s", contract_data)

        # Initialize serializer with contract data
        serializer = self.get_serializer(data=contract_data)

        # Validate serializer data and log validation errors
        try:
            serializer.is_valid(raise_exception=True)
        except ValidationError as e:
            logger.error("Validation error in contract data: %s", serializer.errors)
            return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

        # Save the contract if valid
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        logger.info("Contract created successfully: %s", serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    

class ContractDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contract.objects.all()
    serializer_class = ContractSerializer
    permission_classes = [IsAuthenticated]

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        
        if instance.client != request.user:
            return Response({"detail": "You are not authorized to update this contract."}, status=status.HTTP_403_FORBIDDEN)
        
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
           
        if instance.client != request.user:
            return Response({"detail": "You are not authorized to delete this contract."}, status=status.HTTP_403_FORBIDDEN)
        
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserContractsView(generics.ListAPIView):
    serializer_class = ContractSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return Contract.objects.filter(client_id=user_id)
    
    

class ClientContractsView(APIView):
    def get(self, request, user_id):
        try:
            contracts = Contract.objects.filter(client_id=user_id)
            serializer = ContractSerializer(contracts, many=True)
            return Response(serializer.data)
        except Contract.DoesNotExist:
            return Response({"error": "Contracts not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    
    def patch(self, request, user_id, pk):
        try:
            contract = Contract.objects.get(pk=pk)
            if contract.client.id != user_id:
                return Response({"detail": "You are not authorized to update this contract."}, status=status.HTTP_403_FORBIDDEN)
            
            serializer = ContractSerializer(contract, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()

            return Response(serializer.data, status=status.HTTP_200_OK)
        except Contract.DoesNotExist:
            return Response({"error": "Contract not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

class FreelancerContractsView(APIView):
    def get(self, request, user_id):
        try:
            contracts = Contract.objects.filter(freelancer_id=user_id)
            serializer = ContractSerializer(contracts, many=True)
            return Response(serializer.data)
        except Contract.DoesNotExist:
            return Response({"error": "Contracts not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class FreelancerContractsListView(generics.ListAPIView):
    serializer_class = ContractSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        freelancer_id = self.request.user.id
        return Contract.objects.filter(freelancer_id=freelancer_id)


class UserContractsCountView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, user_id):
        completed = Contract.objects.filter(freelancer_id=user_id, status='completed').count()
        active = Contract.objects.filter(freelancer_id=user_id, status='active').count()
        pending = Contract.objects.filter(freelancer_id=user_id, status='pending').count()
        return Response({
            'completed': completed,
            'active': active,
            'pending': pending
        })


class ClientBalanceView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, client_id):
        try:
            client = User.objects.get(id=client_id)
            user_balance = UserBalance.objects.get(user=client)
            return Response({'credit_balance': float(user_balance.balance)}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({'error': 'Client not found'}, status=status.HTTP_404_NOT_FOUND)
        except UserBalance.DoesNotExist:
            return Response({'credit_balance': 0.00}, status=status.HTTP_200_OK)

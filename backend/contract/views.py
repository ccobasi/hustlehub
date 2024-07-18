from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Contract
from proposal.models import Proposal
from .serializers import ContractSerializer
from rest_framework.views import APIView

class ContractListCreateView(generics.ListCreateAPIView):
    queryset = Contract.objects.all()
    serializer_class = ContractSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        proposal_id = request.data.get('proposal')
        if not proposal_id:
            return Response({"detail": "Proposal ID is required."}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            proposal = Proposal.objects.get(id=proposal_id)
        except Proposal.DoesNotExist:
            return Response({"detail": "Proposal not found."}, status=status.HTTP_404_NOT_FOUND)
        
        # Ensure the client initiating the contract is the owner of the project
        if proposal.project.client != request.user:
            return Response({"detail": "You are not authorized to create a contract for this project."}, status=status.HTTP_403_FORBIDDEN)
        
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

        serializer = self.get_serializer(data=contract_data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
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
        
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()

        # Ensure the client is authorized to update this contract
        if instance.client != request.user:
            return Response({"detail": "You are not authorized to update this contract."}, status=status.HTTP_403_FORBIDDEN)
        
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(serializer.data)
    

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









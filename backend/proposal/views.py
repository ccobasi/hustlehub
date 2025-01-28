from rest_framework.views import APIView
from django.shortcuts import get_object_or_404, render
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Proposal
from .serializers import ProposalSerializer
from project.models import Project
from contract.models import Contract
from django.db.models import Count


class ProposalCreateView(generics.CreateAPIView):
    queryset = Proposal.objects.all()
    serializer_class = ProposalSerializer
    permission_classes = [IsAuthenticated]


    def perform_create(self, serializer):
        project_id = self.request.data.get('project')
        print(f"Received project_id: {project_id}")  # Debugging line
        project = get_object_or_404(Project, id=project_id)
        serializer.save(freelancer=self.request.user, project=project)


class ProjectProposalsListView(generics.ListAPIView):
    serializer_class = ProposalSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        project_id = self.kwargs['project_pk']
        return Proposal.objects.filter(project__id=project_id)
    

class ProposalDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Proposal.objects.all()
    serializer_class = ProposalSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        project_pk = self.kwargs['project_pk']
        proposal_pk = self.kwargs['proposal_pk']
        return get_object_or_404(self.queryset, pk=proposal_pk, project_id=project_pk)

    def put(self, request, project_pk, proposal_pk):
        print("Incoming data:", request.data)  # Debugging line
        proposal = self.get_object()
        serializer = ProposalSerializer(proposal, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        print("Errors:", serializer.errors)  # Debugging line
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserProposalsCountView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, user_id):
        count = Proposal.objects.filter(freelancer_id=user_id).count()
        return Response({'count': count})
    

class FreelancerRecentProposalsView(APIView):
    permission_classes = [IsAuthenticated]

    # def get(self, request):
    #     recent_proposals = Proposal.objects.filter(freelancer=request.user).order_by('-created_at')[:3]
    #     serializer = ProposalSerializer(recent_proposals, many=True)
    #     return Response(serializer.data, status=status.HTTP_200_OK)
    
    def get(self, request):
        proposals = Proposal.objects.filter(freelancer=request.user).order_by('-submitted_at')[:3]
        serializer = ProposalSerializer(proposals, many=True)
        return Response(serializer.data)

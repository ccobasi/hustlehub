from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Proposal
from .serializers import ProposalSerializer


class ProposalCreateView(generics.CreateAPIView):
    queryset = Proposal.objects.all()
    serializer_class = ProposalSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(freelancer=self.request.user)

class ProjectProposalsListView(generics.ListAPIView):
    serializer_class = ProposalSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        project_id = self.kwargs['project_pk']
        return Proposal.objects.filter(project__id=project_id)
    

class ProposalDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Proposal.objects.all()
    serializer_class = ProposalSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        project_pk = self.kwargs['project_pk']
        proposal_pk = self.kwargs['proposal_pk']
        return generics.get_object_or_404(self.queryset, pk=proposal_pk, project_id=project_pk)
    
    def perform_update(self, serializer):
        instance = self.get_object()
        serializer.save(freelancer=instance.freelancer)
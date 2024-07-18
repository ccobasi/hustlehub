from django.shortcuts import get_object_or_404, render
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Proposal
from .serializers import ProposalSerializer
from project.models import Project


class ProposalCreateView(generics.CreateAPIView):
    queryset = Proposal.objects.all()
    serializer_class = ProposalSerializer
    permission_classes = [IsAuthenticated]

    # def perform_create(self, serializer):
    #     serializer.save(freelancer=self.request.user)

    def perform_create(self, serializer):
        project_id = self.request.data.get('project_id')
        project = get_object_or_404(Project, id=project_id)
        serializer.save(freelancer=self.request.user, project=project)

class ProjectProposalsListView(generics.ListAPIView):
    serializer_class = ProposalSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        project_id = self.kwargs['project_pk']
        return Proposal.objects.filter(project__id=project_id)
    

# class ProposalDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Proposal.objects.all()
#     serializer_class = ProposalSerializer
#     permission_classes = [IsAuthenticated]
    

#     def get_object(self):
#         project_pk = self.kwargs['project_pk']
#         proposal_pk = self.kwargs['proposal_pk']
#         return generics.get_object_or_404(self.queryset, pk=proposal_pk, project_id=project_pk)
    
#     def get(self, request, project_pk, proposal_pk):
#         proposal = self.get_object(proposal_pk)
#         if not isinstance(proposal, Proposal):
#             return proposal
#         serializer = ProposalSerializer(proposal)
#         return Response(serializer.data)
    
#     def put(self, request, project_pk, proposal_pk):
#         proposal = self.get_object(proposal_pk)
#         if not isinstance(proposal, Proposal):
#             return proposal
#         serializer = ProposalSerializer(proposal, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#     def delete(self, request, project_pk, proposal_pk):
#         proposal = self.get_object(proposal_pk)
#         if not isinstance(proposal, Proposal):
#             return proposal
#         proposal.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
    
#     def perform_update(self, serializer):
#         instance = self.get_object()
#         serializer.save(freelancer=instance.freelancer)
class ProposalDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Proposal.objects.all()
    serializer_class = ProposalSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        project_pk = self.kwargs['project_pk']
        proposal_pk = self.kwargs['proposal_pk']
        return get_object_or_404(self.queryset, pk=proposal_pk, project_id=project_pk)

    def get(self, request, project_pk, proposal_pk):
        proposal = self.get_object()
        serializer = ProposalSerializer(proposal)
        return Response(serializer.data)

    def put(self, request, project_pk, proposal_pk):
        proposal = self.get_object()
        serializer = ProposalSerializer(proposal, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, project_pk, proposal_pk):
        proposal = self.get_object()
        proposal.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_update(self, serializer):
        instance = self.get_object()
        serializer.save(freelancer=instance.freelancer)
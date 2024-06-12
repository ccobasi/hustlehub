from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Project
from proposal.models import Proposal
from .serializers import ProjectSerializer
from contract.serializers import ContractSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

class ProjectListCreateView(APIView):
  permission_classes = [IsAuthenticated]
  authentication_classes = [JWTAuthentication]
  
  def get(self, request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

  def post(self, request):
    serializer = ProjectSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      print(serializer.errors)
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  

class ProjectDetailView(APIView):
  permission_classes = [IsAuthenticated]
  authentication_classes = [JWTAuthentication]
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer
  
  def get_object(self, pk):
    try:
      return Project.objects.get(pk=pk)
    except Project.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)
    
  def get_serializer_context(self):
        context = super().get_serializer_context()
        context['include_proposals'] = True
        return context
  
  def get(self, request, pk):
        project = self.get_object(pk)
        if not isinstance(project, Project):
            return project  # If project is a Response, it means 404 error
        serializer = ProjectSerializer(project)
        return Response(serializer.data)

  def put(self, request, pk):
        project = self.get_object(pk)
        if not isinstance(project, Project):
            return project  
        serializer = ProjectSerializer(project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  def delete(self, request, pk):
        project = self.get_object(pk)
        if not isinstance(project, Project):
            return project  
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
  
  def patch(self, request, pk):
        project = self.get_object(pk)
        if not isinstance(project, Project):
            return project

        proposal_id = request.data.get("selected_proposal")
        if proposal_id:
            try:
                proposal = Proposal.objects.get(id=proposal_id, project=project)
            except Proposal.DoesNotExist:
                return Response({"detail": "Proposal not found."}, status=status.HTTP_404_NOT_FOUND)
            
            # Create a contract
            contract_data = {
                "project": project.id,
                "proposal": proposal.id,
                "freelancer": proposal.freelancer.id,
                "client": project.client.id,
                "contract_amount": proposal.proposed_rate,
                "start_date": request.data.get("start_date"),
                "end_date": request.data.get("end_date"),
                "terms": request.data.get("terms"),
            }
            contract_serializer = ContractSerializer(data=contract_data)
            if contract_serializer.is_valid():
                contract_serializer.save()
                project.selected_proposal = proposal
                project.save()
                return Response(ProjectSerializer(project).data)
            return Response(contract_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({"detail": "No proposal selected."}, status=status.HTTP_400_BAD_REQUEST)


class UserProjectList(APIView):
  permission_classes = [IsAuthenticated]
  authentication_classes = [JWTAuthentication]

  def get_object(self, pk):
        try:
            return Project.objects.get(pk=pk)
        except Project.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    
  def get(self, request, user_pk, project_pk=None):
    if project_pk:
        project = self.get_object(project_pk)
        if project.client != request.user:
            return Response(status=status.HTTP_403_FORBIDDEN)
        serializer = ProjectSerializer(project)
        return Response(serializer.data)
    else:
        projects = Project.objects.filter(client=user_pk)
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)
  
    
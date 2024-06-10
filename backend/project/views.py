from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Project
from .serializers import ProjectSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

class ProjectListCreateView(APIView):
  permission_classes = [IsAuthenticated]
  authentication_classes = [JWTAuthentication]
  """
  API endpoint for listing and creating projects
  """
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
  
  def get_object(self, pk):
    try:
      return Project.objects.get(pk=pk)
    except Project.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)

  # def get(self, request, pk):
  #   project = self.get_object(pk)
  #   serializer = ProjectSerializer(project)
  #   return Response(serializer.data)
  
  def get(self, request, pk):
        project = self.get_object(pk)
        if not isinstance(project, Project):
            return project  # If project is a Response, it means 404 error
        serializer = ProjectSerializer(project)
        return Response(serializer.data)

  # def put(self, request, pk):
  #   project = self.get_object(pk)
  #   serializer = ProjectSerializer(project, data=request.data)
  #   if serializer.is_valid():
  #     serializer.save()
  #     return Response(serializer.data)
  #   return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
  def put(self, request, pk):
        project = self.get_object(pk)
        if not isinstance(project, Project):
            return project  
        serializer = ProjectSerializer(project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  # def delete(self, request, pk):
  #   project = self.get_object(pk)
  #   project.delete()
  #   return Response(status=status.HTTP_204_NO_CONTENT)
  
  def delete(self, request, pk):
        project = self.get_object(pk)
        if not isinstance(project, Project):
            return project  
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



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
  


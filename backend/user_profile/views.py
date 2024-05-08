from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from.models import *
from.serializers import *
from rest_framework import status

class ClientProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            client = ClientProfile.objects.get(user=request.user)
            serializer = ClientProfileSerializer(client)
            return Response(serializer.data)
        except ClientProfile.DoesNotExist:
            return Response({'error': 'Client profile not found'}, status=status.HTTP_404_NOT_FOUND)


    def post(self, request):
        serializer = ClientProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        return Response(serializer.errors)
    

class FreelancerProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            client = FreelancerProfile.objects.get(user=request.user)
            serializer = FreelancerProfileSerializer(client)
            return Response(serializer.data)
        except FreelancerProfile.DoesNotExist:
            return Response({'error': 'Freelancer profile not found'}, status=status.HTTP_404_NOT_FOUND)


    def post(self, request):
        serializer = FreelancerProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        return Response(serializer.errors)
    


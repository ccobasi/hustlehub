from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import authentication, permissions
from.models import *
from.serializers import *
from rest_framework import status
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from django.contrib.auth import get_user_model


User = get_user_model()

class ClientProfileView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, pk):
        try:
            client_profile = ClientProfile.objects.get(pk=pk, user=request.user)
        except ClientProfile.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ClientProfileSerializer(client_profile)
        return Response(serializer.data)

    # def get(self, request):
    #     try:
    #         client = ClientProfile.objects.get(user=request.user)
    #         serializer = ClientProfileSerializer(client)
    #         return Response(serializer.data)
    #     except ClientProfile.DoesNotExist:
    #         return Response({'error': 'Client profile not found'}, status=status.HTTP_404_NOT_FOUND)
        
    # def get(self, request, pk):
    #     try:
    #         client_profile = ClientProfile.objects.get(pk=pk, user=request.user)
    #         serializer = ClientProfileSerializer(client_profile)
    #         return Response(serializer.data)
    #     except  ClientProfile.DoesNotExist:
    #         return Response({'error': 'Client profile not found'},status=status.HTTP_404_NOT_FOUND )

    
    def put(self, request, pk):
        client_profile = get_object_or_404(ClientProfile, pk=pk, user=request.user)
        serializer = ClientProfileSerializer(client_profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def post(self, request):
        serializer = ClientProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        return Response(serializer.errors)
    
        
class CreateClientProfileView(APIView):
    def get(self, request, id, created_str):
        return create_client_profile(request, id, created_str)
        
    def create_client_profile(request, user):
        created = False
        client_profile, _ = ClientProfile.objects.get_or_create(user=user)
        if not client_profile:
            created = True
        if created:
            return HttpResponse(status=201)
        else:
            return HttpResponse(status=200)
        
    


        

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
    


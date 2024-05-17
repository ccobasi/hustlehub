from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import authentication, permissions
from .models import *
from .serializers import *
from rest_framework import status
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from django.contrib.auth import get_user_model
from .serializers import ClientProfileSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.parsers import MultiPartParser, FormParser

User = get_user_model()



class ClientProfileView(APIView):
    permission_classes = [IsAuthenticated]
    #authentication_classes = [authentication.TokenAuthentication]
    authentication_classes = [JWTAuthentication]
    #permission_classes = [permissions.IsAuthenticated]

    def get(self, request, pk):
        
        
        try:
            client_profile = ClientProfile.objects.get(pk=pk, user=request.user)
        except ClientProfile.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ClientProfileSerializer(client_profile)
        return Response(serializer.data)

    
    def put(self, request, pk):
        client_profile = get_object_or_404(ClientProfile, pk=pk, user=request.user)
        serializer = ClientProfileSerializer(client_profile, data=request.data)
        parser_classes = (MultiPartParser, FormParser)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def post(self, request):
        serializer = ClientProfileSerializer(data=request.data)
        parser_classes = (MultiPartParser, FormParser)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        return Response(serializer.errors)
    


class ClientProfileCreateView(APIView):
    # permission_classes = [IsAuthenticated] 

    def get_object(self, pk):
        try:
            return ClientProfile.objects.get(pk=pk)
        except ClientProfile.DoesNotExist:
            return None

    def get(self, request, pk):
        profile = self.get_object(pk)
        if not profile:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = ClientProfileSerializer(profile)
        return Response(serializer.data)

    def put(self, request, pk):
        profile = self.get_object(pk)
        if not profile:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = ClientProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ChangeImageAPIView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [FormParser, MultiPartParser]

    def post(self, request, format=None):
        user = request.user
        serializer = AvatarSerializer(instance=user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class FreelancerProfileView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get(self, request, pk):
        
        
        try:
            freelancer_profile = FreelancerProfile.objects.get(pk=pk, user=request.user)
        except FreelancerProfile.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = FreelancerProfileSerializer(freelancer_profile)
        return Response(serializer.data)

    
    def put(self, request, pk):
        freelancer_profile = get_object_or_404(FreelancerProfile, pk=pk, user=request.user)
        serializer = FreelancerProfileSerializer(freelancer_profile, data=request.data)
        parser_classes = (MultiPartParser, FormParser)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def post(self, request):
        serializer = FreelancerProfileSerializer(data=request.data)
        parser_classes = (MultiPartParser, FormParser)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        return Response(serializer.errors)
    
    
    
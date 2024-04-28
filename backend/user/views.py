from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from .serializers import UserRegisterSerializer
from rest_framework.response import Response
from rest_framework import status
from .utils import send_code_to_user
from django.db import IntegrityError
# from django.contrib.auth.models import User
# from rest_framework import generics
# from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny


# class RegisterUserView(GenericAPIView):
#     permission_classes = [AllowAny]
#     serializer_class=UserRegisterSerializer

#     def post(self, request):
#         user_data=request.data
#         serializer=self.serializer_class(data=user_data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             user=serializer.data
#             send_code_to_user(user['email'])
#             #send email function user['email']
#             print(user)
#             return Response({
#                 'data': user,
#                 'message': f"hi thanks  for registering!"
#             }, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class RegisterUserView(GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserRegisterSerializer

    def post(self, request):
        user_data = request.data
        serializer = self.serializer_class(data=user_data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()

            user = serializer.data
            send_code_to_user(user['email'])
            #send email function user['email']
            print(user)
            return Response({
                'data': user,
                'message': f"Hi, thanks for registering!"
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def post(self, request):
    #     user_data = request.data
    #     serializer = self.serializer_class(data=user_data)

    #     if serializer.is_valid(raise_exception=True):
    #         try:
    #             serializer.save()
    #         except IntegrityError:
    #             # Email already exists, handle the error
    #             return Response({
    #                 'error': 'A user with this email address already exists.'
    #             }, status=status.HTTP_400_BAD_REQUEST)

    #         user = serializer.data
    #         send_code_to_user(user['email'])
    #         #send email function user['email']
    #         print(user)
    #         return Response({
    #             'data': user,
    #             'message': f"Hi, thanks for registering!"
    #         }, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class CreateUserView(generics.CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = [AllowAny]

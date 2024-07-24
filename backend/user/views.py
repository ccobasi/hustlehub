from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from .serializers import *
from rest_framework.response import Response
from rest_framework import status
from django.db import IntegrityError
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.utils.http import urlsafe_base64_decode
from django.utils.encoding import smart_str, DjangoUnicodeDecodeError
from django.contrib.auth.tokens import  PasswordResetTokenGenerator
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.core.mail import send_mail
from django.utils import timezone
from .models import User
from .otp_models import EmailOTP
from .utils import send_verification_email
import logging
from .serializers import UserRegisterSerializer
from django.core.mail import send_mail
logger = logging.getLogger(__name__)
from django.contrib import messages


def activateEmail(request, user, to_email):
    messages.success(request, f'Dear <b>{user}</b>, please go to you email <b>{to_email}</b> inbox and click on \
        received activation link to confirm and complete the registration. <b>Note:</b> Check your spam folder.')


# class RegisterUserView(GenericAPIView):
#     permission_classes = [AllowAny]
#     serializer_class = UserRegisterSerializer

#     def post(self, request):
#         user_data = request.data
#         serializer = self.serializer_class(data=user_data)

#         if serializer.is_valid(raise_exception=True):
#             serializer.save()

#             user = serializer.data
#             send_code_to_user(user['email'])
#             #send email function user['email']
#             print(user)
#             return Response({
#                 'data': user,
#                 'message': f"Hi, thanks for registering!"
#             }, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RegisterUserView(GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserRegisterSerializer

    def post(self, request):
        user_data = request.data
        serializer = self.serializer_class(data=user_data)

        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            verification_token = user.verification_token  
            send_verification_email(user.email, verification_token)

            return Response({
                'data': serializer.data,
                'verification_token': verification_token,  
                'message': "Hi, thanks for registering! Please check your email to verify your account."
            }, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# class VerifyUserEmail(APIView):
#     permission_classes = [AllowAny]

#     def get(self, request, token):
#         try:
#             user = User.objects.get(verification_token=token)
#             if user.is_verified:
#                 return Response({'message': 'Email is already verified.'}, status=status.HTTP_200_OK)

#             user.is_verified = True
#             user.verification_token = None
#             user.save()

#             return Response({'message': 'Email verified successfully!'}, status=status.HTTP_200_OK)
#         except User.DoesNotExist:
#             return Response({'error': 'Invalid verification token'}, status=status.HTTP_400_BAD_REQUEST)
        
class VerifyUserEmail(APIView):
    def post(self, request):
        token = request.data.get('token')
        try:
            user = User.objects.get(verification_token=token)
            if user.is_verified:
                return Response({'message': 'Email is already verified.'}, status=status.HTTP_200_OK)
            user.is_verified = True
            user.verification_token = None
            user.save()
            return Response({'message': 'Email verified successfully!'}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({'error': 'Invalid verification token'}, status=status.HTTP_400_BAD_REQUEST)
# class VerifyUserEmail(GenericAPIView):
#     permission_classes = [AllowAny]
#     def post(self, request):
#         otpcode=request.data.get('otp')
#         try:
#             user_code_obj=OneTimePassword.objects.get(code=otpcode)
#             user=user_code_obj.user
#             if not user.is_verified:
#                 user.is_verified=True
#                 user.save()
#                 return Response({
#                     "message":'Your email account has been verified successfully!'
#                 }, status=status.HTTP_200_OK)
#             return Response({
#                 'message': 'Code is invalid user already verified.'
#             }, status=status.HTTP_204_NO_CONTENT)
#         except  OneTimePassword.DoesNotExist:
#             return Response({'message': 'passcode not provided'}, status=status.HTTP_404_NOT_FOUND)

class LoginUserView(GenericAPIView):
    serializer_class=LoginSerializer
    def post(self, request):
        serializer=self.serializer_class(data=request.data, context={'request':request})
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    

class TestAuthenticationView(GenericAPIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        data={
            'msg': 'it works'
        }
        return Response(data, status=status.HTTP_200_OK)
    

class PasswordResetRequestView(GenericAPIView):
    serializer_class=PasswordResetRequestSerializer
    def post(self, request):
        serializer=self.serializer_class(data=request.data, context={'request':request})
        serializer.is_valid(raise_exception=True)
        return Response({'message': 'a link has been sent to your email to reset your password'}, status=status.HTTP_200_OK)


class PasswordResetConfirm(GenericAPIView):
    def get(self, request, uidb64, token):
        try:
            user_id=smart_str(urlsafe_base64_decode(uidb64))
            user=User.objects.get(id=user_id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                return Response({'message':'token is invalid or has expired'}, status=status.HTTP_401_UNAUTHORIZED)
            return Response({'success':True, 'message':'credentials is valid', 'uidb64':uidb64, 'token':token}, status=status.HTTP_200_OK)


        except DjangoUnicodeDecodeError:
            return Response({'message':'token is invalid or has expired'}, status=status.HTTP_401_UNAUTHORIZED)
        

class SetNewPassword(GenericAPIView):
    serializer_class=SetNewPasswordSerializer
    def patch(self, request):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'message':'password reset successful'}, status=status.HTTP_200_OK)
    

class LogoutUserView(GenericAPIView):
    serializer_class=LogoutUserSerializer
    permission_classes=[IsAuthenticated]

    def post(self, request):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_200_OK)
    


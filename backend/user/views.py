from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from .serializers import *
from rest_framework.response import Response
from rest_framework import status
from .utils import send_code_to_user
from django.db import IntegrityError
from rest_framework.permissions import IsAuthenticated, AllowAny
from .onetimepassword import OneTimePassword
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
import logging

logger = logging.getLogger(__name__)



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


class VerifyUserEmail(GenericAPIView):
    permission_classes = [AllowAny]
    def post(self, request):
        otpcode=request.data.get('otp')
        try:
            user_code_obj=OneTimePassword.objects.get(code=otpcode)
            user=user_code_obj.user
            if not user.is_verified:
                user.is_verified=True
                user.save()
                return Response({
                    "message":'Your email account has been verified successfully!'
                }, status=status.HTTP_200_OK)
            return Response({
                'message': 'Code is invalid user already verified.'
            }, status=status.HTTP_204_NO_CONTENT)
        except  OneTimePassword.DoesNotExist:
            return Response({'message': 'passcode not provided'}, status=status.HTTP_404_NOT_FOUND)
        

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
    

def generate_otp(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        user, created = User.objects.get_or_create(email=email)
        if created:
            user.username = email
            user.is_active = False
            user.set_unusable_password()
            user.save()
        otp = EmailOTP.objects.create(user=user)
        send_mail(
            'Your OTP',
            f'Your OTP is {otp.otp}',
            'from@example.com',
            [email],
            fail_silently=False,
        )
        logger.info(f'OTP generated for {email}')
        return JsonResponse({'message': 'OTP sent to your email.'}, status=200)

def verify_otp(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        otp_input = request.POST.get('otp')
        user = get_object_or_404(User, email=email)
        otp = EmailOTP.objects.filter(user=user).order_by('-created_at').first()
        if otp and otp.is_valid() and otp.otp == otp_input:
            user.is_active = True
            user.save()
            otp.delete()
            logger.info(f'OTP verified for {email}')
            return JsonResponse({'message': 'OTP verified successfully.'}, status=200)
        else:
            logger.warning(f'OTP verification failed for {email}')
            return JsonResponse({'message': 'Invalid or expired OTP.'}, status=400)

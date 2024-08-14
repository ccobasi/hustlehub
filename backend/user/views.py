from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from .serializers import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.utils.http import urlsafe_base64_decode
from django.utils.encoding import smart_str, DjangoUnicodeDecodeError
from django.contrib.auth.tokens import  PasswordResetTokenGenerator
from rest_framework.views import APIView
from django.core.mail import send_mail
from .models import User
import logging
from .serializers import UserRegisterSerializer
from django.core.mail import send_mail
logger = logging.getLogger(__name__)
from django.contrib import messages
from django.conf import settings
from django.http import HttpResponse
from .utils import send_verification_email
from django.views import View
import os
import django
from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()



def activateEmail(request, user, to_email):
    messages.success(request, f'Dear <b>{user}</b>, please go to you email <b>{to_email}</b> inbox and click on \
        received activation link to confirm and complete the registration. <b>Note:</b> Check your spam folder.')


class RegisterUserView(GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserRegisterSerializer

    def post(self, request):
        user_data = request.data
        serializer = self.serializer_class(data=user_data)

        if serializer.is_valid(raise_exception=True):
            user = serializer.save()

            try:
                # Send verification email
                send_verification_email(user.email, user.verification_token)
                return Response({
                    'data': serializer.data,
                    'verification_token': user.verification_token,
                    'message': "Hi, thanks for registering! Please check your email to verify your account."
                }, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({
                    'data': serializer.data,
                    'message': "User registered, but failed to send verification email.",
                    'error': str(e)
                }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def send_verification_email(self, email, token):
        verification_link = f"{settings.FRONTEND_URL}/verify-email/{token}/"
        email_subject = 'Verify your email'
        email_body = f'Hi,\n\nPlease use the following link to verify your email:\n{verification_link}\n\nThank you!'

        send_mail(
            subject=email_subject,
            message=email_body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[email],
        )
        
# class VerifyUserEmail(APIView):
#     def post(self, request):
#         token = request.data.get('token')
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

class VerifyUserEmail(View):
    def get(self, request, token):
        try:
            user = User.objects.get(verification_token=token)
            if user.is_verified:
                return JsonResponse({'message': 'Email is already verified.'}, status=200)

            user.is_verified = True
            user.verification_token = ""  # Clear the token after successful verification
            user.save()
            return JsonResponse({'message': 'Email successfully verified!'}, status=200)
        except User.DoesNotExist:
            return JsonResponse({'error': 'Invalid or expired token.'}, status=400)
        except Exception as e:
            # Log the error message for debugging
            print(f"Error verifying email: {e}")
            return JsonResponse({'error': 'An unexpected error occurred. Please try again later.'}, status=500)


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
    

def send_test_email(request):
    subject = 'Test Email'
    message = 'This is a test email sent from Django using Gmail SMTP.'
    email_from = 'ccobasi8@gmail.com'
    recipient_list = ['obasichuma@gmail.com']
    
    try:
        send_mail(subject, message, email_from, recipient_list)
        return HttpResponse("Test email sent successfully!")
    except Exception as e:
        return HttpResponse(f"Failed to send test email: {e}")

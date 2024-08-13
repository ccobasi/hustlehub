# utils.py
from django.core.mail import EmailMessage, send_mail
from .models import User
from backend import settings


def send_verification_email(email, token):
    verification_link = f"{settings.FRONTEND_URL}/verify-email/{token}"
    email_subject = 'Verify your email address'
    email_body = f'Hi,\n\nPlease use the following link to verify your email:\n{verification_link}\n\nThank you!'
    send_mail(
        subject=email_subject,
        message=email_body,
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[email],
        fail_silently=False,
    )

def send_normal_email(data):
    email=EmailMessage(
        subject=data['email_subject'],  
        body=data['email_body'], 
        from_email=settings.EMAIL_HOST_USER,
        to=[data["to_email"]]
    )
    email.send()


def send_code_to_user(email):
    Subject = "Your One Time Password for Email verification"
    # otp_code=generateOtp()
    print(otp_code)
    user=User.objects.get(email=email)
    current_site="husslinghub.com"
 
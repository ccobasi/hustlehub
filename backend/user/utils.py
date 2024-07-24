# import random
# from django.core.mail import EmailMessage
# from .models import User
# from .onetimepassword import OneTimePassword
# from backend import settings

# def generateOtp():
#     otp=""
#     for i in range(6):
#         otp += str(random.randint(1,9))
#     return otp

# def send_code_to_user(email):
#     Subject = "Your One Time Password for Email verification"
#     otp_code=generateOtp()
#     print(otp_code)
#     user=User.objects.get(email=email)
#     current_site="husslinghub.com"
#     email_body=f"Hi {user.first_name} thanks for signing up on {current_site} please verify your email with the \n one time passcode {otp_code}"
#     from_email=settings.DEFAULT_FROM_EMAIL

#     OneTimePassword.objects.create(user=user, code=otp_code)

#     d_email =EmailMessage(subject=Subject, body=email_body, from_email=from_email, to=[email])
#     d_email.send(fail_silently=True)


# def send_normal_email(data):
#     email=EmailMessage(
#         subject=data['email_subject'],  
#         body=data['email_body'], 
#         from_email=settings.EMAIL_HOST_USER,
#         to=[data["to_email"]]
#     )
#     email.send()
# utils.py
from django.core.mail import EmailMessage
from .models import User
from backend import settings
from django.core.mail import send_mail

# def send_verification_email(email, token):
#     subject = "Verify your email address"
#     current_site = "husslinghub.com"
#     verification_url = f"http://{current_site}/verify-email/{token}/"
#     email_body = f"Hi, please verify your email by clicking the link: {verification_url}"
#     from_email = settings.DEFAULT_FROM_EMAIL

#     email = EmailMessage(subject=subject, body=email_body, from_email=from_email, to=[email])
#     email.send(fail_silently=True)

def send_verification_email(email, token):
    verification_link = f"{settings.FRONTEND_URL}/verify-email/{token}"
    send_mail(
        'Verify your email address',
        f'Please click the following link to verify your email address: {verification_link}',
        settings.DEFAULT_FROM_EMAIL,
        [email],
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
    # email_body=f"Hi {user.first_name} thanks for signing up on {current_site} please verify your email with the \n one time passcode {otp_code}"
    # from_email=settings.DEFAULT_FROM_EMAIL

    # OneTimePassword.objects.create(user=user, code=otp_code)

    # d_email =EmailMessage(subject=Subject, body=email_body, from_email=from_email, to=[email])
    # d_email.send(fail_silently=True)
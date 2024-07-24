import smtplib
from email.mime.text import MIMEText

# Replace with your actual values
smtp_server = 'smtp.gmail.com'  
smtp_port = 587  
smtp_user = 'ccobasi8@gmail.com'  
smtp_password = 'ichhpspneutltdza' 

from_email = smtp_user
to_email = 'obasichuma@gmail.com'  
subject = 'Test Email'
body = 'This is a test email.'

msg = MIMEText(body)
msg['Subject'] = subject
msg['From'] = from_email
msg['To'] = to_email

try:
    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()  
    server.login(smtp_user, smtp_password)
    server.sendmail(from_email, to_email, msg.as_string())
    server.quit()
    print("Email sent successfully")
except Exception as e:
    print(f"Failed to send email: {e}")

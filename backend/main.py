import smtplib
from email.mime.text import MIMEText

subject = "Email Subject"
body = "This is the body of the text message"
sender = "ccobasi8@gmail.com"
recipients = ["obasichuma@gmail.com", "obasichukwuma6@gmail.com"]
password = "ichhpspneutltdza"  

def send_email(subject, body, sender, recipients, password):
    try:
        msg = MIMEText(body)
        msg['Subject'] = subject
        msg['From'] = sender
        msg['To'] = ', '.join(recipients)
        
        with smtplib.SMTP_SSL('smtp.gmail.com', 465, timeout=30) as smtp_server:
            smtp_server.login(sender, password)
            smtp_server.sendmail(sender, recipients, msg.as_string())
        
        print("Message sent!")
    
    except smtplib.SMTPAuthenticationError:
        print("Failed to authenticate. Please check your email and password.")
    
    except smtplib.SMTPException as e:
        print(f"Failed to send email: {e}")
    
    except Exception as e:
        print(f"An error occurred: {e}")

send_email(subject, body, sender, recipients, password)


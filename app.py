from flask import Flask, request, render_template_string
from flask_mail import Mail, Message

app = Flask(__name__)

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.example.com'  # Replace with your SMTP server
app.config['MAIL_PORT'] = 587  # Typically 587 for TLS
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your-email@example.com'  # Your email
app.config['MAIL_PASSWORD'] = 'your-email-password'  # Your email password
app.config['MAIL_DEFAULT_SENDER'] = 'your-email@example.com'  # Your email

mail = Mail(app)

# HTML form template
form_html = '''
<form id="contact-form" method="post">
    <div class="form-group">
        <input type="text" name="Name" placeholder="Your Name" required class="form-control">
    </div>
    <div class="form-group">
        <input type="email" name="Email" placeholder="Your Email" required class="form-control">
    </div>
    <div class="form-group">
        <textarea name="Message" rows="5" placeholder="Your Message" required class="form-control"></textarea>
    </div>
    <button type="submit" class="submit-button">Send Message</button>
</form>
'''

@app.route('/', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['Name']
        email = request.form['Email']
        message = request.form['Message']

        # Create email message
        msg = Message(subject="New Message from Contact Form",
                      recipients=["shatanurhan@mail.ru"],  # Email address to send to
                      body=f"Name: {name}\nEmail: {email}\nMessage:\n{message}")

        # Send email
        mail.send(msg)

        return "Message sent successfully."

    return render_template_string(form_html)

if __name__ == '__main__':
    app.run(debug=True)
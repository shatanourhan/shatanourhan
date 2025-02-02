from flask import Flask, request, render_template_string
from flask_mail import Mail, Message

app = Flask(__name__)


app.config['MAIL_SERVER'] = 'smtp.example.com' 
app.config['MAIL_PORT'] = 587  
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your-email@example.com'  
app.config['MAIL_PASSWORD'] = 'your-email-password'  
app.config['MAIL_DEFAULT_SENDER'] = 'your-email@example.com'  

mail = Mail(app)


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

        
        msg = Message(subject="New Message from Contact Form",
                      recipients=["shatanurhan@outlook.com"],  
                      body=f"Name: {name}\nEmail: {email}\nMessage:\n{message}")

        
        mail.send(msg)

        return "Message sent successfully."

    return render_template_string(form_html)

if __name__ == '__main__':
    app.run(debug=True)
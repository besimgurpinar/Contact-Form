# Contact Form

A Pen created on CodePen.io. Original URL: [https://codepen.io/besimgurpinarr/pen/BaqjMqR](https://codepen.io/besimgurpinarr/pen/BaqjMqR).

Contact Form Application
This is a web application that allows users to submit a contact form to the site owner. The application is built using HTML, CSS, and JavaScript on the front-end, and a server-side language like PHP to handle form submissions.

Features
User-friendly interface with input validation
Customizable fields (name, email, subject, message, etc.)
Email notifications when a new form submission is received
Ability to store form submissions in a database for later reference
Mobile responsive design
Requirements
Web server (e.g. Apache) with PHP support
SMTP server for sending email notifications
Database server (e.g. MySQL) for storing form submissions (optional)
Installation
Clone the repository to your local machine:
bash

git clone https://github.com/your-username/contact-form.git
Navigate to the project directory:
bash

cd contact-form
Edit the configuration file (config.php) to set your email and database credentials:
php

// Email configuration
define('MAIL_FROM', 'your-email@example.com');
define('MAIL_TO', 'your-email@example.com');
define('SMTP_HOST', 'smtp.example.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'your-email@example.com');
define('SMTP_PASSWORD', 'your-email-password');

// Database configuration (optional)
define('DB_HOST', 'localhost');
define('DB_NAME', 'contact_form');
define('DB_USER', 'root');
define('DB_PASS', '');
Upload the files to your web server.

Navigate to the application URL in your web browser.

Usage
Fill out the contact form with your name, email, subject, and message.

Click the "Send" button to submit the form.

If the form submission is successful, you will see a confirmation message.

If the form submission fails, you will see an error message indicating the issue.

Check your email for a notification of the new form submission.

Credits
This application was built using the following open-source tools and libraries:

Bootstrap (https://getbootstrap.com/)
jQuery (https://jquery.com/)
PHPMailer (https://github.com/PHPMailer/PHPMailer)
PDO (https://www.php.net/manual/en/book.pdo.php)
License
This project is licensed under the MIT License.

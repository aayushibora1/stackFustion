const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  // Handle form submission here
});

app.listen(3000, () => console.log('Server started'));
const nodemailer = require('nodemailer');

app.post('/submit-form', (req, res) => {
  // Save form data to database or file system
  const formData = req.body;

  // Send email to form submitter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: formData.email,
    subject: 'Thank you for submitting the form',
    text: 'Thank you for submitting the form!'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.send('Form submitted');
});

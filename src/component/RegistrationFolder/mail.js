const nodemailer = require('nodemailer');

// Create a transporter for sending email
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

// Generate the HTML ticket (replace this with your ticket generation logic)
const ticketHTML = `
  <html>
    <head></head>
    <body>
      <h1>Your Event Ticket</h1>
      <p>Event Name: Event XYZ</p>
      <!-- Add more ticket details here -->
    </body>
  </html>
`;

// Define email data
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'user-email@example.com', // Replace with the user's email
  subject: 'Your Event Ticket',
  html: ticketHTML, // Attach the HTML ticket
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

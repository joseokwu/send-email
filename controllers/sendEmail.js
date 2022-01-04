const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'h5fk3wq7x6tc75kl@ethereal.email',
      pass: 'uQ1ADrjaf84D4d77d9',
    },
  });
  let info = await transporter.sendMail({
    from: '"Joey" <ifeokwuosa@gmail.com>', // sender address
    to: 'bar@example.com', // list of receivers
    subject: 'Hello', // Subject line
    html: '<h2>Hello world?</h2>', // html body
  });
  console.log(info);

  res.json(info);
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'blahblahblah@gmail.com', // Change to your recipient
    from: process.env.FROM, // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  const info = await sgMail.send(msg);
  res.json(info);
};

module.exports = sendEmail;

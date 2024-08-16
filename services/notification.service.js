const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password'
  }
});

exports.sendNotification = async (task, user) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: user.email,
    subject: `Task Assigned: ${task.title}`,
    text: `You have been assigned to task ${task.title}`
  };
  await transporter.sendMail(mailOptions);
};
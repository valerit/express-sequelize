const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT || 587,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const fromEmail = process.env.SMTP_FROM_EMAIL;

module.exports.send = async (to, subject, text, html = '') => {
	const message = {
		from: `BeingEnergy <${to}>`,
		to,
		subject,
		text,
		html,
	};

	await transport.sendMail(message);
};

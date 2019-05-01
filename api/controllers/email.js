const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const fromEmail = process.env.SMTP_FROM_EMAIL;

module.exports.send = async (to, subject, text, html = '') => {
	const message = {
		from: `BeingEnergy <${fromEmail}>`,
		to,
		subject,
		text,
		html,
	};

	console.info('Send Email:', message);

	await transport.sendMail(message);
};

const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const emailTemplate = (text) => `
    <div style="
        border: 1px solid black;
        padding: 20px;
        ">
        <h1>Welcome</h1>
        <p>please verify your account by clicking
        on this url : ${text}
    </div>
`;

exports.transport = transport;
exports.emailTemplate = emailTemplate;

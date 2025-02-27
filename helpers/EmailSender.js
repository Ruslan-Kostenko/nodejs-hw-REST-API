const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD, META_LOGIN } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465, // 25, 465, 2525
  secure: true,
  auth: {
    user: META_LOGIN,
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const EmailSender = async (data) => {
  const email = { ...data, from: META_LOGIN };
  await transport.sendMail(email);
  return true;
};

module.exports = EmailSender;
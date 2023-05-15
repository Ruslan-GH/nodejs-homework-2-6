const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  auth: {
    user: "ruslan.kulyk@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   to: "ruslan.kulyk@meta.ua",
//   from: "ruslan.kulyk@meta.ua",
//   subject: "Test email",
//   html: "<p>test email</p>",
// };

// transport
//   .sendMail(email)
//   .then(() => console.log("Success. Email sent"))
//   .catch((error) => console.log(error.message));

const sendEMail = async (data) => {
  const email = { ...data, from: "ruslan.kulyk@meta.ua" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEMail;

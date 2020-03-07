const nodemailer = require("nodemailer");
const Email = require("email-templates");
const { email, password } = require("../config.js");

const toEmail = "emersonc.dev@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password
  }
});

const sendResetPassword = async (toEmail, firstName, lastName) => {
  const myEmail = new Email({
    transport: transporter,
    send: true,
    preview: false
  });

  myEmail
    .send({
      template: "singleImage",
      message: {
        from: "Patricia Qualls Gallery <no-reply@patriciaqualls.com>",
        to: toEmail
      },
      locals: {
        fname: firstName,
        lname: lastName
      }
    })
    .then(() => console.log("email has been sent!"));
};

module.exports = {
  sendResetPassword
};

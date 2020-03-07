const { sendResetPassword } = require("./mailer");

const toEmail = "emersonc.dev@gmail.com";
const firstName = "Emerson";
const lastName = "Christie";

sendResetPassword(toEmail, firstName, lastName);

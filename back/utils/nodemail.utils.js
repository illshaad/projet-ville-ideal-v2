const nodemailer = require("nodemailer");

const sendConfirmationEmail = (newUser) => {
  const { email, pseudo } = newUser;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_APPLICATION,
      pass: process.env.PASS_APPLICATION,
    },
  });

  transporter
    .sendMail({
      from: process.env.USER_APPLICATION,
      to: email,
      subject: "Veuillez confirmer votre compte",
      html: `<h1>Confirmation de l'email</h1>
            <h2>Bonjour ${pseudo}</h2>
            <p>Merci de vous être abonné. Veuillez confirmer votre email en cliquant sur le lien suivant</p>
            <a href=http://localhost:3000/authentification?email=${email}> Cliquez ici</a>
            </div>`,
    })
    .catch((err) => console.log(err));
};

module.exports = { sendConfirmationEmail };

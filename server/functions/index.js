const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

var transporter = nodemailer.createTransport({
  host,
});

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "pavankumar789012@gmail.com",
    pass: "kumarpavankumar12",
  },
});

exports.sendMail = (reciever) => {
  const mailOptions = {
    from: `pavankumar789012@gmail.com`,
    to: reciever,
    subject: "<h3>Congratulations! You are now Admin",
    html: `<h1> You are now Admin</h1>
            <p> You are now granted admin previllages in eLearning Project.</p>
            <p> Please login using <code>${password}</code> as password.</p>
            `,
  };
  return transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      console.log("Firebase-function-error->>>" + error);
      return;
    }
    console.log("sent!!!!");
  });
};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

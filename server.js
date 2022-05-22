var nodemailer = require("nodemailer");

// var transporter = nodemailer.createTransport({
//   host: "mail.adityatawade.com",
//   port: 465,
//   service: "smtp",
//   auth: {
//     user: "freshservice@adityatawade.com",
//     pass: "Iconnect@123",
//   },
// });

var transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  service: "smtp",
  auth: {
    user: "execuliacompany@gmail.com",
    pass: "xsmtpsib-ddcb1f0c42d7834a05255716a8f836f60530c4799305b5276c4242b8510b03b6-Lpcyn2fSNXWzxQbV",
  },
});

var mailOptions = {
  from: "jaideep@iconnectsolutions.com ",
  to: "adityat@iconnectsolutions.com",
  subject: "Hathway Project Presentation",
  text: "Hello Prashant, <br> <br> Kindly work on Hathway Project Presentation. Make a small PPT with workflow diagram",
};

exports.sendMail = function (mailOptions) {
  return new Promise(function (resolve, reject) {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("error: ", err);
        reject(err);
      } else {
        console.log(`Mail sent successfully!`);
        resolve(info);
      }
    });
  });
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

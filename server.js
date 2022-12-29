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
    user: "pradyuta@iconnectsolutions.com",
    pass: "xsmtpsib-3af2176b4a47bc49f50c65d219fbba667b6f7bfb80e74c5ced2b1a5203e2c27d-J60fK2pBUnT9vQDb",
  },
});

var mailOptions = {
  from: "Vishal Gavankar <vishalg@iconnectsolutions.com>",
  to: "prathmeshk@iconnectsolutions.com",
  subject: "Hathway Project Presentation",
  text: "Tomorrow your leave is cancel",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
    console.log("Mail Send Successfully");
  }
});

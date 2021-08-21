// const { text } = require("body-parser");
const path = require("path");
const express = require("express");
var compression = require("compression");
const cors = require("cors");

const app = express();
app.use(compression());

const nodemailer = require("nodemailer");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post("/", async (req, res) => {
  console.log(req.body);

  const transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
    debug: false,
    logger: true,
  });

  const mailOptions = {
    from: req.body.email,
    to: "rob@robperez.net",
    subject: `message from ${req.body.name} - ${req.body.email}`,
    text: req.body.message,
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

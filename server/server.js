const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cron = require("node-cron");
const moment = require("moment");

const app = express();
app.use(bodyParser.json());

const sendCompletionEmail = (
  email,
  projectName,
  organisationName,
  assignedTo
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "zorothewss@gmail.com",
      pass: "djhc vtpi jzwa yvsm",
    },
  });

  const mailOptions = {
    from: "zorothewss@gmail.com",
    to: email,
    subject: "Project Completion Alert",
    text: `Project "${projectName}" of "${organisationName}" is completed by ${assignedTo}.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Email sent to " + email + ": " + info.response);
  });
};

app.post("/acknowledge", (req, res) => {
  const data = req.body;

  const {
    donation_amt,
    project_name,
    manager_email,
    organisation_name,
    director_email,
  } = data;

  if (
    !donation_amt ||
    !project_name ||
    !manager_email ||
    !organisation_name ||
    !director_email
  ) {
    return res.status(400).send("Invalid request body");
  }

  // Schedule the completion email to be sent after 2 minutes
  const completionTime = moment().add(2, "minutes").format("m H D M *");

  cron.schedule(completionTime, () => {
    sendCompletionEmail(
      director_email,
      project_name,
      organisation_name,
      manager_email
    );
  });

  res.send("Email scheduling successful");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

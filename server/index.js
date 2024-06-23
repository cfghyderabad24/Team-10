const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const accountSid = "ACb0483c614a3ace8197aa31b0285f7439";
const authToken = "cdec37d41c008314c13173f83320220f";
const client = require("twilio")(accountSid, authToken);
const cron = require("node-cron");
const moment = require("moment");

const app = express();
app.use(bodyParser.json());

// const app = express();

// app.post("/")
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

  // Send acknowledgment email to the director
  sendAcknowledgmentEmail(director_email, project_name, organisation_name, donation_amt, manager_email);

  const scheduleTime = moment()
    .add(3, "days")
    .set({ hour: 0, minute: 0 })
    .format("m H D M *");

  cron.schedule(scheduleTime, () => {
    sendCompletionEmail(
      manager_email,
      project_name,
      organisation_name,
      manager_email
    );
  });

  res.send("Email scheduling successful");
});



// Endpoint to send SMS
app.get("/send-sms", (req, res) => {
  client.messages
    .create({
      body: "This is how receiving test SMS from Twilio feels like. Init?",
      from: "+14325357148", // Replace with your Twilio phone number including the country code.
      to: "+919390788674", // The phone number you verified your account with.
    })
    .then((message) => {
      console.log("Message sent:", message.sid);
      res.send("SMS sent successfully!");
    })
    .catch((error) => {
      console.error("Error sending SMS:", error);
      res.status(500).send("Failed to send SMS");
    });
});

// Endpoint to schedule email
app.post("/schedule-email", (req, res) => {
  const data = req.body;

  if (
    !data ||
    !data["Assigned To"] ||
    !data["Action Items"] ||
    !Array.isArray(data["Action Items"])
  ) {
    return res.status(400).send("Invalid request body");
  }

  const email = data["Assigned To"];
  const actionItems = data["Action Items"];

  const daysPrior = [30, 21, 14, 7, 3];

  actionItems.forEach(({ "Action Data": actionData, "Due Date": dueDate }) => {
    if (!actionData || !dueDate) {
      return res.status(400).send("Action Data and Due Date are required");
    }

    daysPrior.forEach((days) => {
      const scheduleTime = moment(dueDate)
        .subtract(days, "days")
        .set({ hour: 0, minute: 0 })
        .format("m H D M *");

      cron.schedule(scheduleTime, () => {
        sendAlertEmail(email, actionItems);
      });
    });
  });

  res.send("Email scheduling successful");
});

// Function to send alert email
const sendAlertEmail = (email, actionItems) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "zorothewss@gmail.com",
      pass: "djhc vtpi jzwa yvsm",
    },
  });

  const actionItemsText = actionItems
    .map((item) => `${item["Action Data"]} (Due: ${item["Due Date"]})`)
    .join("\n");

  const mailOptions = {
    from: "zorothewss@gmail.com",
    to: email,
    subject: "Pending Action Items Alert",
    text: `You have the following pending action items:\n\n${actionItemsText}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Email sent to " + email + ": " + info.response);
  });
};


// app.get("/send-sms", (req, res) => {
//   client.messages
//     .create({
//       body: "This is how receving test SMS from Twilio feels like. Init?",
//       from: "+14325357148", // Replace with your Twilio phone number inclding the country code.
//       to: "+919390788674", // the phone number you verified your account with.
//     })
//     .then((message) => {
//       console.log("Message sent:", message.sid);
//       res.send("SMS sent successfully!");
//     })
//     .catch((error) => {
//       console.error("Error sending SMS:", error);
//       res.status(500).send("Failed to send SMS");
//     });
// });


app.post("/task-success", (req, res) => {
  const data = req.body;

  const {
    cycle,
    action_name,
    project_name,
    manager_email,
    organisation_name,
    assigned_to,
  } = data;

  if (
    !cycle ||
    !action_name ||
    !project_name ||
    !manager_email ||
    !organisation_name ||
    !assigned_to
  ) {
    return res.status(400).send("Invalid request body");
  }

  const scheduleTime = moment()
    .add(3, "days")
    .set({ hour: 0, minute: 0 })
    .format("m H D M *");

  cron.schedule(scheduleTime, () => {
    sendCompletionEmail(
      manager_email,
      project_name,
      organisation_name,
      assigned_to
    );
  });

  res.send("Email scheduling successful");
});

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



// app.post("/schedule-email", (req, res) => {
//   const data = req.body;

//   if (
//     !data ||
//     !data["Assigned To"] ||
//     !data["Action Items"] ||
//     !Array.isArray(data["Action Items"])
//   ) {
//     return res.status(400).send("Invalid request body");
//   }

//   const email = data["Assigned To"];
//   const actionItems = data["Action Items"];

//   const daysPrior = [30, 21, 14, 7, 3];

//   actionItems.forEach(({ "Action Data": actionData, "Due Date": dueDate }) => {
//     if (!actionData || !dueDate) {
//       return res.status(400).send("Action Data and Due Date are required");
//     }

//     daysPrior.forEach((days) => {
//       const scheduleTime = moment(dueDate)
//         .subtract(days, "days")
//         .set({ hour: 0, minute: 0 })
//         .format("m H D M *");

//       cron.schedule(scheduleTime, () => {
//         sendAlertEmail(email, actionItems);
//       });
//     });
//   });

//   res.send("Email scheduling successful");
// });

// const sendAlertEmail = (email, actionItems) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "zorothewss@gmail.com",
//       pass: "djhc vtpi jzwa yvsm",
//     },
//   });

//   const actionItemsText = actionItems
//     .map((item) => `${item["Action Data"]} (Due: ${item["Due Date"]})`)
//     .join("\n");

//   const mailOptions = {
//     from: "zorothewss@gmail.com",
//     to: email,
//     subject: "Pending Action Items Alert",
//     text: `You have the following pending action items:\n\n${actionItemsText}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log("Email sent to " + email + ": " + info.response);
//   });
// };

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

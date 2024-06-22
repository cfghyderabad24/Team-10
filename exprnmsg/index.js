const express = require('express');

const accountSid = "ACb0483c614a3ace8197aa31b0285f7439"
const authToken = "cdec37d41c008314c13173f83320220f";
const client = require('twilio')(accountSid, authToken);
const app = express()

app.get('/send-sms', (req, res) => {
    

    client.messages
        .create({
            body: 'This is how receving test SMS from Twilio feels like. Init?',
            from: '+14325357148', // Replace with your Twilio phone number inclding the country code.
            to: '+919390788674'    // the phone number you verified your account with.
        })
        .then(message => {
            console.log('Message sent:', message.sid);
            res.send('SMS sent successfully!');
        })
        .catch(error => {
            console.error('Error sending SMS:', error);
            res.status(500).send('Failed to send SMS');
        });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
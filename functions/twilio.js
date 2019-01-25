const twilio = require('twilio');

const accountSid = require('./twilio_config').accountSid;
const authToken = require('./twilio_config').authToken;

module.exports = new twilio.Twilio(accountSid, authToken);

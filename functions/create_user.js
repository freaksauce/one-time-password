const admin = require('firebase-admin');

module.exports = function(req, res) {
  // verify user provided phone number
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input' });
  }

  // Format the phone number to remove dashes and parens
  // const phone = 

  // Create a new user account using the phone number

  // Respond to the user request, saying the account was made
}

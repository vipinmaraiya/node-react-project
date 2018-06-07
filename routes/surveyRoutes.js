const requireLogin = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');
const mongoose = require('mongoose');

const Survey = mongoose.model('surveys');
const mailer = require('../services/mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = (app) => {
  app.post('/api/surveys', async (req, res) => {
    const {
      title, subject, body, recipients,
    } = req.body;
    console.log(req.body)
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // Send an email
    await mailer(survey, surveyTemplate(survey));
    await survey.save();
    req.user.credits -= 1;
    const user = await req.user.save();
    res.send(user);
  });
};

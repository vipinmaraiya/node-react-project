const sendgrid = require('@sendgrid/mail');
const keys = require('../config/keys');

sendgrid.setApiKey(keys.sendGridKey);

module.exports = ({ subject, recipients }, content) => {
  sendgrid.send({
    from: 'no-reply@vipin.com',
    subject,
    bcc: 'vipinsharmaec@hotmail.com',
    to: recipients,
    html: content,
  });
};


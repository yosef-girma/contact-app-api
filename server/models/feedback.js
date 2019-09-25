'use strict';

module.exports = function(Feedback) {

    Feedback.remoteMethod("sendFeedback", {
      http: { path: "/:id", verb: "post" },
      accepts: {
        arg: "id",
        type: "string",
        required: true,
        http: { source: "path" }
      },
      returns: { root: true, type: "object" },
      description: "Send Feedback."
    });

    Feedback.sendFeedback = function(cb) {
    Feedback.app.models.Email.send({
      to: 'foo@bar.com',
      from: 'zanonyomouscity@gmail.com',
      subject: 'Contact App Feedback',
      text: 'my text'
    }, function(err, mail) {
      console.log('email sent!');
      cb(err);
    });
  }
};

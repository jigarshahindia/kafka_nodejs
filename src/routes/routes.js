'use strict';
module.exports = function(app) {
  var controller = require('../controller/controller');

  // Sentiments Routes
  app.route('/sendMessage')
    .post(controller.post_message);
};
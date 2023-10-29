const express = require('express');
const newMessage = express();

newMessage.get('/', function(req, res, next) {
  res.render('messageForm', { title: 'New Message' });
});

module.exports = newMessage;
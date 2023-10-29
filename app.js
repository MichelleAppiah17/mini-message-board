const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); 

const messages= [
  {
    user: "Roise",
    message: 'Hey there!',
    added: new Date()
  },
  {
    user: 'Mimi',
    message: 'What\'s up?',
    added: new Date()
  },
]

app.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

app.post('/new', function(req, res, next) {
  const userName = req.body.messageUser;
  const message = req.body.messageMessage;
  messages.push({ message: message, user: userName, added: new Date() });
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
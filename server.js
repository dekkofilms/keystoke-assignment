const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cookieSession = require('cookie-session');

const app = express();

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}));

mongoose.connect('mongodb://localhost/keystoke');

const db = mongoose.connection;

db.on('error', console.error);
db.once('open', function () {
  console.log('Connection succeeded');
});

//DB Schemas
const User = require('./models/user');

app.get('/api/users', (req, res) => {
  // console.log('hit server');
  // res.json({boom: 'booyah', diggity: 'booyah'});

  User.find({}, function (err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log(users);
    }
  });

});

app.post('/api/signup', (req, res) => {
  console.log(req.body);
  User.find({username: req.body.username}, function (err, user) {
    if (user.length === 0) {
      bcrypt.hash(req.body.password, 10, function(err, hashed_pw) {
        var user = new User({
          username: req.body.username,
          password: hashed_pw
        });

        user.save();
        console.log('success!');

        req.session.user = user;

        res.json({user: user});
      });
    } else {
      console.log('user exists');
    }
  })
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cookieSession = require('cookie-session');

if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}

const mongoose = require('mongoose');
const uri = 'mongodb://dekkofilms:' + process.env.PASSWORD + '@ds139949.mlab.com:39949/keystoke'

const cloudinary = require('cloudinary');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

const app = express();


cloudinary.config({
  cloud_name: 'dvutqs7zs',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

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

mongoose.Promise = global.Promise;

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error);
db.once('open', function () {
  console.log('Connection succeeded');
});

//DB Schemas
const User = require('./models/user');

app.get('/api/users', (req, res) => {

  User.find({}, function (err, users) {
    if (err) {
      console.log(err);
    } else {
      res.json({users: users});
    }
  });

});

app.post('/api/getuser', (req, res) => {

  User.find({_id: req.body.id}, function (err, user) {
    if (err) {
      console.log(err);
    } else {
      res.json({users: user[0]});
    }
  });

});

app.patch('/api/user', (req, res) => {

  User.findOneAndUpdate({_id: req.body.id}, {$set: {firstname: req.body.firstname, lastname: req.body.lastname, description: req.body.description}}, {new: true}, function (err, user) {
    if (err) {
      console.log(err);
    } else {
      res.json({user: user});
    }
  });

});

app.patch('/api/userphoto', upload.single('image'), (req, res) => {

  cloudinary.uploader.upload(req.file.path, function (result) {
    console.log(result)

    User.findOneAndUpdate({_id: req.body.id}, {$set: {picture: result.url}}, {new: true}, function (err, user) {
      if (err) {

        console.log(err);

      } else {
        res.json({user: user});
      }
    });

  });


});

app.post('/api/dashboard', (req, res) => {

  User.find({_id: req.body.id}, function (err, user) {
    if (err) {
      console.log(err);
    } else {
      res.json({user: user});
    }
  });

});

app.post('/api/login', (req, res) => {

  User.find({username: req.body.username}, function (err, user) {

    if (user.length === 0) {

      console.log('no user');

    } else {

      let password = user[0].password

      bcrypt.compare(req.body.password, password, function (err, response) {

        if (response) {

          res.json({user: user[0]});

        } else {

          console.log('try again');

        }

      });

    }
  });

});

app.post('/api/signup', upload.single('image'), (req, res) => {

  User.find({username: req.body.username}, function (err, user) {

    //checking if user is existing already
    if (user.length === 0) {

      //sending image off to cloudinary
      cloudinary.uploader.upload(req.file.path, function (result) {

        bcrypt.hash(req.body.password, 10, function(err, hashed_pw) {
          var user = new User({
            username: req.body.username,
            password: hashed_pw,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            picture: result.url,
            description: req.body.description
          });

          user.save();

          res.json({user: user});
        });

      });

    } else {
      console.log('user exists');
    }
  })
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});

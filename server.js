const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/keystoke');

const app = express();

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//DB Schemas
const User = require('./models/user');

app.get('/api/users', (req, res) => {

});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});

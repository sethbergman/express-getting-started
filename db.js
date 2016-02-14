var express  = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),

userSchema = new mongoose.Schema({
  username: String,
  gender: String,
  name: {
    title: String,
    first: String,
    last: String
  },
  location: {
    street: String,
    city: String,
    state: String,
    zip: Number
  }
});

userSchema.virtual('name.full').get(function () {
  return _.startCase(this.name.first + ' ' + this.name.last);
});

userSchema.virtual('name.full').set(function (value) {
  var bits = value.split(' ');
  this.name.first = bits[0];
  this.name.last = bits[1];
});

exports.User = mongoose.model('User', userSchema);


/*
 * I’m sharing my credentials here.
 * Feel free to use it while you’re learning.
 * After that, create and use your own credentials.
 * Thanks.
 *
 * MONGOLAB_URI=mongodb://express-mongo:65fe67162433087bca93aaa832e3bf56@dokku-mongo-express-mongo:27017/express-mongo
 * 'mongodb://example:example@ds053312.mongolab.com:53312/todolist'
 */

mongoose.connect(process.env.MONGOLAB_URI, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

function makeDefaultConnection() {
  var uri = process.env.MONGOLAB_URI;

  mongoose.connect(uri, {}, function(err, db){
    if(err){
      console.log('Connection Error ::: ', err);
    } else {
      console.log('Successfully Connected!');
    }
  });
}

module.exports.defaultConnection = makeDefaultConnection();
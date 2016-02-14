/*
var express = require('express');
var app = express();
var fs = require('fs');
var engines = require('consolidate');
var JSONStream = require('JSONStream');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var mongoose  = require('mongoose');

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

},

module.exports.expressSetup = function(app){
  app.set('port', process.env.PORT || 3000);
  app.use(session({
    store: new MongoStore({
      url: process.env.MONGOLAB_URI
    }),
    resave: true,
    saveUninitialized: true
  }));
}

*/
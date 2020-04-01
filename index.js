const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const AuthTokenStrategy = require('passport-auth-token').Strategy;
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);



//passport.use('authtoken', new AuthTokenStrategy(
//  function(token, done) {
//    AccessToken.findOne({
//      id: token
//    }, function(error, accessToken) {
//      if (error) {
//        return done(error);
//      }
//
//      if (accessToken) {
//        if (!token.isValid(accessToken)) {
//          return done(null, false);
//        }
//
//        User.findOne({
//          id: accessToken.userId
//        }, function(error, user) {
//          if (error) {
//            return done(error);
//          }
//
//          if (!user) {
//            return done(null, false);
//          }
//
//          return done(null, user);
//        });
//      } else {
//        return done(null);
//      }
//    });
//  }
//));
//
//app.get('/auth/vend',
//  passport.authenticate(
//    'authtoken',
//    {
//      session: false,
//      optional: false
//    }
//  ),
//  function(req, res) {
//    res.redirect('/auth/vend/callback');
//  }
//);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

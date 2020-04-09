const mongoose = require('mongoose');

const Product = mongoose.model('products');

//passport.use(new GoogleStrategy({
//    clientID: keys.googleClientID,
//    clientSecret: keys.googleClientSecret,
//    callbackURL: '/auth/google/callback'
//        },
//        (accessToken, refreshToken, profile, done) => {
//            new User({ googleId: profile.id, googleName: profile.displayName }).save();
//        }
//   )
//);
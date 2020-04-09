const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./models/Product');
require('./models/Customer');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(express.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/vendRoutes')(app);

app.get('/auth/google', passport.authenticate ('google', {
    scope: ['profile', 'email']
    })
);


const PORT = process.env.PORT || 5000;
app.listen(PORT);

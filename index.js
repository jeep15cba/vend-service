const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./models/Product');
require('./models/Customer');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const vendRouter = require('./routes/vend-router')
app.use(express.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use('/api', vendRouter);

require('./routes/authRoutes')(app);
require('./routes/vendRoutes')(app);
require('./routes/billingRoutes')(app);


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('new-client/build'));
    app.use('/api', vendRouter);
    
    const path = require('path');
    app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, 'new-client', 'build', 'index.html')); 
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => { 
      const token = await req.body.token.id;
      const amount = await req.body.amount;
      const description = await req.body.description;
      const jobs = await req.body.jobs;
      
      const charge = await stripe.charges.create({
                amount: amount,
                currency: 'aud',
                description: description,
                source: token
            }).catch(error => console.error(error));
            
      req.user.credits += jobs;
      const user = await req.user.save();
      res.send(user);

  });
};
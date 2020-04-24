const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Job = mongoose.model('jobs');

module.exports = app => {
    app.post('/api/jobs', requireLogin, requireCredits, (req, res) => {
        const { id, firstName, lastName, email, startDate, dueDate, body, salePrice, products } = req.body;
        
        const job = new Schema({
            id, 
            firstName, 
            lastName, 
            email, 
            startDate, 
            dueDate, 
            body, 
            salePrice,
            products: products.map(productName => ({ productName })),
            _user: req.user.id,
            startDate: Date.now(),
        });
    });
};

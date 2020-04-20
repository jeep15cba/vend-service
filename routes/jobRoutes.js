const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

module.exports = app => {
    app.post('/api/jobs', requireLogin, requireCredits, (req, res) => {
        
    });
};
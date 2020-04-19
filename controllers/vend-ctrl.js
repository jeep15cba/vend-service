const mongoose = require('mongoose');
const Product = mongoose.model('products');
const Customer = mongoose.model('customers');

getProducts = async (req, res) => {
    await Product.find({}, (err, products) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!products.length) {
            return res
                .status(404)
                .json({ success: false, error: `Product not found` })
        }
        return res.status(200).json({ success: true, data: products })
        console.log(data);
    }).catch(err => console.log(err))
}

getCustomers = async (req, res) => {
    await Customer.find({}, (err, customers) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!customers.length) {
            return res
                .status(404)
                .json({ success: false, error: `Customer not found` })
        }
        return res.status(200).json({ success: true, data: customers })
        console.log(data);
    }).catch(err => console.log(err))
}

module.exports = { getProducts, getCustomers }
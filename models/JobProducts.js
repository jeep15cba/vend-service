const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobProductsSchema = new Schema({
    productName: String,
    productQty: Number,
    productSKU: String
});

module.exports = jobProductsSchema;
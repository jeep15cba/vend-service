const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
    customerId: String,
    customerFirstName: String,
    customerLastName: String,
    customerEmail: String,
    customerMobile: String
});

mongoose.model('customers', customerSchema);
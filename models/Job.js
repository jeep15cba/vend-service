const mongoose = require('mongoose');
const { Schema } = mongoose;
const JobProductsSchema = require('./JobProducts');

const jobSchema = new Schema({
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    startDate: Date,
    dueDate: Date,
    body: String,
    salePrice: Number,
    products: [JobProductsSchema],
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('jobs', jobSchema);
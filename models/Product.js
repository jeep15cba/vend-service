const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema(
    {
        productId: String,
        productName: String,
        productHandle: String,
        productImage: String,
        productQty: Number,
        productSKU: String
    },
    { timestamps: true }
);

mongoose.model('products', productSchema);
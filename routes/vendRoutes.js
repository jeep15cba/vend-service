var request = require('request-promise');
const mongoose = require('mongoose');

const Product = mongoose.model('products');
const Customer = mongoose.model('customers');

module.exports = (app) => {
    
    const Key = 'Bearer '+ '5T7BNkaF1jMbDKSOlc0jl_K0ThdvvZot6SPAToPj';
    const customerAPIUrl = "https://adamyoungtest.vendhq.com/api/customers";
    const productAPIUrl = "https://adamyoungtest.vendhq.com/api/products";
    
    app.get('/api/customers', function(req, res, next) {
        request({
          url: customerAPIUrl,
          method: 'GET',
          json: true,
          headers: {
            'Authorization': Key
          }
        })
        .then(resp => {            
            var data = resp.customers;
            for (var i in data) {
                var query = { customerId: data[i].id }, 
                    update = { $set: { customerId: data[i].id, customerFirstName: data[i].first_name, customerLastName:         data[i].last_name, customerEmail: data[i].email, customerMobile: data[i].mobile } },
                    options = { upsert: true, new: true };
                Customer.findOneAndUpdate(query, update, options, function(error, result) {
                    if (error) return;
                });
                
            };
            
             res.send(resp);
        });
    });

    app.get('/api/products', (req, res) => {
        request({
          url: productAPIUrl,
          method: 'GET',
          json: true,
          headers: {
            'Authorization': Key
          }
        })
        .then(resp => {            
            var data = resp.products;
            for (var i in data) {
                var query = { productId: data[i].id }, 
                    update = { $set: { productId: data[i].id, productName: data[i].name, productHandle: data[i].handle,
                                productImage: data[i].image, productSKU: data[i].sku } }, //productQty: data[i].inventory[0].count
                    options = { upsert: true, new: true };
                Product.findOneAndUpdate(query, update, options, function(error, result) {
                    if (error) return;
                });
                
            };
            
            res.send(resp);
        
        })
        .catch(function(error){
            console.log(error)
        });
    });
};
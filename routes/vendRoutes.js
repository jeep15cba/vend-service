var request = require('request-promise');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Product = mongoose.model('products');
const Customer = mongoose.model('customers');

module.exports = (app) => {
    
    const Key = 'Bearer '+ '5T7BNkaF1jMbDKSOlc0jl_K0ThdvvZot6SPAToPj';
    const customerAPIUrl = "https://adamyoungtest.vendhq.com/api/customers";
    const productAPIUrl = "https://adamyoungtest.vendhq.com/api/products";
    
    app.get('/api/customers', requireLogin, function(req, res, next) {
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

    app.get('/api/products', requireLogin, (req, res) => {
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
    
    app.get('/api/getproducts', requireLogin, async (req, res) => {
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
    });
    
    app.get('/api/getcustomers', requireLogin, async (req, res) => {
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
    });
    
};
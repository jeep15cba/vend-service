const express = require('express')

const VendCtrl = require('../controllers/vend-ctrl')

const router = express.Router()

router.get('/getproducts', VendCtrl.getProducts)
router.get('/getcustomers', VendCtrl.getCustomers)

module.exports = router
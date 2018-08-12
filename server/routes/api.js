const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const Product = require('../model/product');
var fs = require('fs');
var glob = require("glob")
var dir = './server/assets';

var db_url = 'mongodb://localhost/test';
if (process.env.MONGODB_URI) {
    db_url = process.env.MONGODB_URI;
}
mongoose.connect(db_url);
/* GET api listing. */
router.get('/product/list', (req, res) => {
    Product.find({}, function(err, products) {
        products.map(product => {
            product.image_path = req.protocol + '://' + req.headers.host + "/assets/" + product._id + "/" + product.image_path;
        })
        res.send(products);
    });
});
router.get('/product/detail/:id', (req, res) => {
    Product.find({ _id: req.params.id }, function(err, product) {
        product[0].image_path = req.protocol + '://' + req.headers.host + "/assets/" + product[0]._id + "/" + product[0].image_path
        console.log(product[0])
        res.send(product[0]);
    });
});
router.post('/product/create', (req, res) => {
    var product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image_path: req.body.image
    });
    product.save();

    res.send(true)
});

router.post('/product/create/move', (req, res) => {
    Product.find({}, function(err, products) {
        products.map(product => {
            if (!fs.existsSync(dir + "/" + product._id)) {
                fs.mkdirSync(dir + "/" + product._id);
            }
            // glob('./server/assets/*', {}, function(er, files) {
            fs.rename('./server/assets/' + product.image_path, './server/assets/' + product._id + '/' + product.image_path, function(err) {
                if (err) console.log('ERROR: ' + err);
            });
            // })

        });
        res.send(products);
    });
});

module.exports = router;
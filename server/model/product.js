// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var productSchema = new Schema({
    name: String,
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image_path: String,
    created_at: Date,
    updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var product = mongoose.model('product', productSchema);

// make this available to our products in our Node applications
module.exports = product;
const mongoose = require('mongoose');

const product_schema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a product title"]
    },
    image: {
        type: String,
        required: false // Or true, if every product MUST have an image
    },
    description: {
        type: String,
        required: [true, "Please enter a product description"]
    },
    price: {
        type: Number,
        required: true
    },
    sellerName: {
        type: String,
        required: [true, "Please enter the seller's name"]
    },
    phoneNumber: {
        type: String,
        required: [true, "Please enter the seller's phone number"]
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', product_schema);

module.exports = Product;

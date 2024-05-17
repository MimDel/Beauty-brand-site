const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    reviewText: {
        type: String,
        required: true
    }
}, { timestamps: true }) //tracks creation and update date

const productSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    images: [{
        url: String
    }],
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    descriptionLong: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    bestseller: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    reviews: [reviewSchema]
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
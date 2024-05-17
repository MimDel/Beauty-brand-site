const Product = require('../models/ProductModel')

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        console.error('Error fetching products: ', error)
        res.status(500).send('Failed to fetch products')
    }
}

const addReviewToProduct = async (req, res) => {
    const { productId } = req.params
    const { user, rating, reviewText } = req.body

    try {
        const product = await Product.filterById(productId)
        const review = { user, rating, reviewText}
        product.reviews.push(review)
        await product.save()
        res.status(201).json(review)
    } catch (error) {
        res.status(500).send('Failed to add review')
    }
}

const getReviewsForProduct = async (req, res) => {
    const { productId } = req.params
    
    try {
        const product = await Product.findById(productId).populate('reviews.user')
        res.json(product.reviews)
    } catch (error) {
        res.status(500).send('Failed to get reviews')
    }
}

module.exports = {getAllProducts , addReviewToProduct, getReviewsForProduct}
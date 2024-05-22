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
    const productId = Number(req.params.productId);
    
    const { rating, reviewText } = req.body;
    const user = req.user || req.session.user; // Use user from JWT token or session

    try {
        const product = await Product.findOne({id: productId});

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const review = {
            user: user._id, // Or any other user identifier
            rating,
            reviewText,
            date: new Date(),
        };

        product.reviews.push(review);

        await product.save();

        res.status(201).json(review);
    } catch (error) {
        console.error('Error adding review:', error);
        res.status(500).send('Failed to add review');
    }
};

const getReviewsForProduct = async (req, res) => {
    const productId = Number(req.params.productId)
    
    try {
        const product = await Product.findOne({id: productId}).populate('reviews.user')
        console.log("Product", product)
        res.json(product.reviews)
    } catch (error) {
        res.status(500).send('Failed to get reviews')
    }
}

module.exports = { getAllProducts, addReviewToProduct, getReviewsForProduct }
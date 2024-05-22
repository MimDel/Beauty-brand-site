const express = require('express')
const router = express.Router()
const {getAllProducts, addReviewToProduct, getReviewsForProduct} = require('../services/productService')
const authenticate = require('../middleware/authenticate');

router.get('/', getAllProducts)

//review routes
router.post('/:productId/reviews', authenticate, addReviewToProduct) //add review
router.get('/:productId/reviews', getReviewsForProduct) //get all reviews

module.exports = router
const express = require('express');
const router = express.Router();
const reviewController = require('../controller/reviewController');

router.post('/', reviewController.createReview);
router.put('/:id', reviewController.updateReview);
router.post('/:id', reviewController.deleteReview);

module.exports = router;
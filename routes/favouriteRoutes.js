const express = require('express');
const router = express.Router();
const favouriteController = require('../controller/favouriteController');

router.post('/', favouriteController.addToFavourite);
router.post('/:id', favouriteController.removeFromFavourite);

module.exports = router;
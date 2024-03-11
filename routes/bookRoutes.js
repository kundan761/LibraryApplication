const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');

router.get('/', bookController.getAllBooks);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.post('/:id', bookController.deleteBook);

module.exports = router;
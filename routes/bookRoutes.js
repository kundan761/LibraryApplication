const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');
const auth = require('../middleware/auth');

router.get('/', bookController.getAllBooks);
router.post('/', auth, bookController.createBook);
router.put('/:id',auth, bookController.updateBook);
router.post('/:id',auth, bookController.deleteBook);

module.exports = router;

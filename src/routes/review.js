const express = require('express');
const router = express.Router();
const ReviewController = require('../app/controllers/ReviewController'); // Nhập ReviewController

router.get('/', ReviewController.index); // Sử dụng phương thức index từ ReviewController
router.post('/submit', ReviewController.submit); // Sử dụng phương thức submit từ ReviewController

module.exports = router;

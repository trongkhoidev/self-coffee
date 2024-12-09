const express = require('express');
const router = express.Router();
const PaymentController = require('../app/controllers/PaymentController'); // Nhập PaymentController

router.get('/', PaymentController.index); // Sử dụng phương thức index từ PaymentController
router.post('/submit', PaymentController.submit); // Sử dụng phương thức submit từ PaymentController

module.exports = router;

const express = require('express');
const router = express.Router();
const StaffController = require('../app/controllers/StaffController'); // Nhập StaffController

router.get('/', StaffController.index); // Sử dụng phương thức index từ StaffController
router.post('/request', StaffController.request); // Sử dụng phương thức request từ StaffController

module.exports = router;

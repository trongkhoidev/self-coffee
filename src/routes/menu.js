const express = require('express');
const router = express.Router();
const MenuController = require('../app/controllers/MenuController'); // Nhập MenuController

router.get('/', MenuController.index); // Sử dụng phương thức index từ MenuController
router.get('/:slug', MenuController.show); // Sử dụng phương thức show từ MenuController

module.exports = router;

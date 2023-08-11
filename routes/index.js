const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

//Redirecting to API
router.use('/products',require('./products_api'));
router.get('/',homeController.home);

// Exporting the router
module.exports = router;
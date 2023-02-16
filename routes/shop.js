const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getShops);
router.post('/', shopController.saveShop);


module.exports = router;

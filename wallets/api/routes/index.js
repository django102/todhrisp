const express = require('express');
const router = express.Router();

const { WalletController } = require('../controllers');

router

.post("/wallet/create", WalletController.create)

module.exports = router;
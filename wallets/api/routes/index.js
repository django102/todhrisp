const express = require('express');
const router = express.Router();


const { WalletController } = require('../controllers');


router
    .post("/wallet/create", WalletController.create)
    .post("/wallet/fund", WalletController.fund)
    .get("/wallet/balance/:account", WalletController.getBalance)


module.exports = router;
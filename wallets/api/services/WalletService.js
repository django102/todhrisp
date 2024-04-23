const { Wallet } = require('../models');
const LoggerService = require('./LoggerService');


module.exports = {
    async create(walletData) {
        const wallet = await Wallet.create(walletData);

        return wallet;
    },
}
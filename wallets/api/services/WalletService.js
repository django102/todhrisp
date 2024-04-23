const { Wallet, Ledger } = require('../models');
const LoggerService = require('./LoggerService');

const moment = require("moment");


module.exports = {
    async create(walletData) {
        const wallet = await Wallet.create(walletData);

        return wallet;
    },

    async fund(fundWalletData) {
        const reference = moment().format("yyyyMMddHHmmss");
        const credit = fundWalletData.amount;
        const transaction_type = "wallet_topup";
        const account = fundWalletData.account;

        const transaction = await Ledger.create({ reference, credit, transaction_type, account });
        return transaction;
    },

    async getBalance(account) {
        const options = {
            account,
        };

        const balances = await Ledger.findOne({
            raw: true,
            where: options,
            attributes: [
                [sequelize.fn('SUM', sequelize.col('debit')), 'totalDebit'],
                [sequelize.fn('SUM', sequelize.col('credit')), 'totalCredit'],
            ],
        });

        const { totalCredit, totalDebit } = balances;
        const balance = (parseInt(totalCredit) || 0) - (parseInt(totalDebit) || 0);
        return {
            available: balance,
        };
    }
}
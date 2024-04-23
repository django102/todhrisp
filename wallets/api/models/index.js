const dbModels = require('../data').sequelize.models;

const Wallet = dbModels.wallet;
const Ledger = dbModels.ledger;

module.exports = {
    Wallet,
    Ledger
}
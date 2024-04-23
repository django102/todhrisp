const { WalletService, ResponseService, LoggerService } = require("../services");
const ResponseStatus = require("../enums/ResponseStatus")


module.exports = {
    async create(req, res) {
        if (!req.body || Object.keys(req.body).length < 1)
            return ResponseService.json(ResponseStatus.BAD_REQUEST, res, 'Wallet details are required');

        try {
            const user = await WalletService.create(req.body);
            return ResponseService.json(ResponseStatus.CREATED, res, 'Wallet created successfully', user);
        } catch (err) {
            LoggerService.error(err);
            return ResponseService.json(ResponseStatus.INTERNAL_SERVER_ERROR, res, `${err.message}`);
        }
    },

    async fund(req, res) {
        if (!req.body || Object.keys(req.body).length < 1)
            return ResponseService.json(ResponseStatus.BAD_REQUEST, res, 'Wallet details are required');

        try {
            const transaction = await WalletService.fund(req.body); transaction
            return ResponseService.json(ResponseStatus.OK, res, 'Wallet funded successfully', user);
        } catch (err) {
            LoggerService.error(err);
            return ResponseService.json(ResponseStatus.INTERNAL_SERVER_ERROR, res, `${err.message}`);
        }
    },

    async getBalance(req, res) {
        const account = req.params.account;
        if(!account) {
            return ResponseService.json(ResponseStatus.BAD_REQUEST, res, 'Wallet account is required');
        }

        try {
            const balance = await WalletService.getBalance(account);
            return ResponseService.json(ResponseStatus.OK, res, 'Wallet balance retrieved successfully', balance);
        } catch (err) {
            LoggerService.error(err);
            return ResponseService.json(ResponseStatus.INTERNAL_SERVER_ERROR, res, `${err.message}`);
        }
    }
}
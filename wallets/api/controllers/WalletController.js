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
}
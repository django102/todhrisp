const { UserService, ResponseService, LoggerService } = require("../services");
const ResponseStatus = require("../enums/ResponseStatus")


module.exports = {
    async create(req, res) {
        if (!req.body || Object.keys(req.body).length < 1)
            return ResponseService.json(ResponseStatus.BAD_REQUEST, res, 'User details are required');

        try {
            const user = await UserService.create(req.body);
            return ResponseService.json(ResponseStatus.CREATED, res, 'User created successfully', user);
        } catch (err) {
            LoggerService.error(err);
            return ResponseService.json(ResponseStatus.INTERNAL_SERVER_ERROR, res, `${err.message}`);
        }
    },

    async login(req, res) {
        if (!req.body || Object.keys(req.body).length < 1)
        return ResponseService.json(ResponseStatus.BAD_REQUEST, res, 'Login details are required');

        try {
            const loginDetails = await UserService.login(req.email, req.password);
            return ResponseService.json(ResponseStatus.OK, res, 'User login successful', user);
        } catch (err) {
            LoggerService.error(err);
            return ResponseService.json(ResponseStatus.INTERNAL_SERVER_ERROR, res, `${err.message}`);
        }
    }
}
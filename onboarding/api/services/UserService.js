const AuthService = require('./AuthService');
const { User } = require('../models');
const LoggerService = require('./LoggerService');

module.exports = {
    async login(email, password) {
        var expiresIn = '14d';
        const user = await User.findOne({
            where: {
                email,
            }
        });

        if (!user) {
            throw new Error('Invalid email or password');
        }
        const isPasswordValid = User.validPassword(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid email or password');
        }

        var returnData = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            code: user.code,
            isAdmin: user.isAdmin,
            createdAt: user.createdAt,
            merchant: user.merchant,
        };
        const token = AuthService.createToken(returnData, expiresIn);

        return {
            user: returnData,
            token,
        };
    },

    async create(userData) {
        userData.password = User.generateHash(userData.password)
        const user = await User.create(userData);

        return user;
    },

    async findOne(query) {
        const user = await User.findOne({ where: query });

        if (!user) return null;
        var this_user = { ...user.toJSON() };
        delete this_user.password;
        return this_user;
    },

    async updateUser(userData, query) {
        try {
            if (Object.prototype.hasOwnProperty.call(userData, 'email')) throw new Error('Email cannot be changed');
            const updatedUser = await User.update(userData, { where: query });

            return updatedUser;
        } catch (err) {
            LoggerService.error(err);
            throw new Error(err);
        }
    },
};

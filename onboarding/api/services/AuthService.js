const jwt = require('jsonwebtoken');
const ConfigService = require('./ConfigService');

const { settings } = ConfigService;

const AuthService = {
    createToken: (data) => {
        if (!data) return null;
  
        return jwt.sign(data, settings.JWT_SECRET, { expiresIn: '14d' });
     },
}

module.exports = AuthService;
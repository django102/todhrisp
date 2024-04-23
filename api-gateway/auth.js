const jwt = require('jsonwebtoken');
const ResponseService = require('./response');

const Auth = {
    authenticateToken: async (req, res, next) => {
        // Get the token from the request headers
        try {
            const { authorization, jwt_auth } = req.headers;

            if (!authorization) {
                return ResponseService.json(401, res, 'No Authorization Header');
            }

            const [bearer, token] = authorization.split(' ');

            if (!bearer) {
                return ResponseService.json(401, res, 'Authorization Header should start with "Bearer"');
            }

            if (!token) {
                return ResponseService.json(401, res, 'Invalid Authorization');
            }

            if (jwt_auth) {
                // User is probably attempting to connect via a dashboard or a web application of some sort
                const decoded = jwt.verify(token, settings.JWT_SECRET);
                const user_id = decoded.id;

                if (!decoded.id || !decoded.merchant.id) {
                    return ResponseService.json(403, res, 'Bad Request.');
                }

                req.user = decoded;
            }

            // User is probably attempting to connect using a secret key

            // Proceed with the next middleware or route handler
            next();
        } catch (error) {
            console.log(error);
            return ResponseService.json(500, res, `Authentication Error. ${error.message}`);
        }
    },

    noAuth: async (req, res, next) => next(),
}


module.exports = Auth;
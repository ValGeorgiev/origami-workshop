const jwt = require('./jwt');
const config = require('../config/config');
const models = require('../models');

module.exports = (redirectAuthenticated = true) => {

    return function (req, res, next) {
        const token = req.headers.authorization || '';

        jwt.verifyToken(token).then(data => {
          models.User.findById(data.id)
            .then((user) => {
                req.user = user;
                next();
            }).catch(err => {
              next(err)
            });
        })
    }

};
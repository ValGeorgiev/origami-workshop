const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        models.User.findById(req.query.id)
            .then((user) => res.send(user))
            .catch((err) => res.status(500).send("Error"))
    },

    post: {
        register: (req, res, next) => {
            const { username, password } = req.body;
            models.User.create({ username, password })
                .then((createdUser) => {
                  const token = utils.jwt.createToken({ id: createdUser._id });
                  res.header("Authorization", token).send(createdUser);
                })
                .catch((err) => {

                  console.log(err)
                })
        },

        verifyLogin: (req, res, next) => {
          const token = req.headers.authorization || '';

          Promise.all([
              utils.jwt.verifyToken(token),
              models.TokenBlacklist.findOne({ token })
          ])
              .then(([data, blacklistToken]) => {
                  if (blacklistToken) { return Promise.reject(new Error('blacklisted token')) }

                  models.User.findById(data.id)
                      .then((user) => {
                          return res.send({
                            status: true,
                            user
                          })
                      });
              })
              .catch(err => {
                  if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                      res.status(401).send('UNAUTHORIZED!');
                      return;
                  }

                  res.send({
                    status: false
                  })
              })
        },

        login: (req, res, next) => {
            const { username, password } = req.body;
            models.User.findOne({ username })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    res.header("Authorization", token).send(user);
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successfully!');
                })
                .catch(next);
        }
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { username, password } = req.body;
        models.User.update({ _id: id }, { username, password })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};
const LocalStrategy = require('passport-local').Strategy;

const controller = require('../../controller');

const loginStrategy = new LocalStrategy(
    {
        usernameField: 'email',
        passReqToCallback: true,
    },
    function (req, email, password, done) {
        controller.userController.getUserByEmail(req.body.email).then(function (userFound) {
            if (userFound.checkPassword(req.body.password)) {
                return done(null, userFound);
            } else {
                done(null, false);
            }
        }).catch(function (err) {
            done(err);
        });
    }
);

module.exports = {
    loginStrategy
};

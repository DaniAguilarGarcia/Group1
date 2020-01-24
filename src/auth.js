const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Session = require('express-session');
const uuid = require('uuid/v4');
const FileStore = require('session-file-store')(Session);

const Users = require('./services/users');

// Session
const session = Session({
    cookie: { maxAge: 2 * (24 * 60 * 60 * 1000) }, // 2 days
    genid: () => uuid(),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: new FileStore(),
});

// Auth strategy
passport.use(new LocalStrategy(
    { usernameField: 'username' },
    async (username, password, done) => {
        const Password = require('./utils/password');

        console.log('Inside local strategy callback', {username, password});
        try {
            const user = await Users.findByUsername(username);

            if (!user) {
                console.log('no user');
                return done('no user by that username');
            }

            console.log('found user', user);

            if (!Password.compare(password, user.password)) {
                console.log('invalid password');
                return done('invalid password');
            }

            return done(null, user);
        } catch (error) {
            console.error(error);
            return done('user lookup error');
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((_id, done) => {
    Users.findById(_id).then(done);
});

module.exports = (app) => {
    app.use(session);
    app.use(passport.initialize());
    app.use(passport.session());
};

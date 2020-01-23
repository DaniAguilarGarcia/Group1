before((done) => {
    require('dotenv').config({
        path: '.env.testing'
    });

    const DB = require('../src/database');
    DB.once('open', () => {
        done();
    });
});
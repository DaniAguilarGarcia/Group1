after(function(done) {
    const DB = require('../src/database');
    DB.db.dropDatabase(() => {
        DB.close(done);
    })
});
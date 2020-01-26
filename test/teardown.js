after(function(done) {
    const DB = require('../src/database');
    DB.db.dropDatabase(() => {
        console.debug('Dropped test DB');
        DB.close(done);
    })
});
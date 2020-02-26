const chai = require('chai');
const assert = chai.assert;

const Password = require('../src/utils/password');

describe('Passwords', async function () {
    describe('validate()', () => {
        it('should validate against various scores', function(done) {
            assert.ok(Password.validate('password', 0));
            assert.ok(Password.validate('DankMeme$54321!!', 3));
            assert.notOk(Password.validate('password', 3));
            done();
        });
    });
    describe('hash()', () => {
        it('should salt before hashing', function(done) {
            const hash1 = Password.hash('password');
            const hash2 = Password.hash('password');
            assert.notEqual(hash1, hash2, 'hashes should not match');
            done();
        });
    });
    describe('compare()', () => {
        it('should compare passwords and hashes', function(done) {
            const password = 'password';
            const hash = Password.hash(password);
            assert.ok(Password.compare(password, hash));
            assert.notOk(Password.compare('im_guessing', hash));
            done();
        });
    });
});
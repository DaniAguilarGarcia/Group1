const assert = require('assert');
const faker = require('faker');

const Users = require('../src/services/users');

describe('UsersService', () => {
    /**
     * @type {import('../src/models/user').User}
     */
    let test_user;
    
    describe('create()', () => {
        it('Should create users', (done) => {
            Users.create({
                username: faker.hacker.noun(),
                name: faker.name.findName(),
                nickname: faker.name.firstName(),
                email: faker.internet.email(),
                password: 'S4uc3B4ws!',
            }).then((user) => {
                assert.notEqual(user._id, null);
                test_user = user;
                done();
            });
        });
    });

    describe('findById()', () => {
        it('Should find users by ID', (done) => {
            Users.findById(test_user._id)
                .then((user) => {
                    assert.notEqual(user._id, null);
                    done();
                });
        });
    });

    describe('findByEmail()', () => {
        it('Should find users by email', (done) => {
            Users.findByEmail(test_user.email)
                .then((user) => {
                    assert.notEqual(user._id, null);
                    done();
                });
        });
    });

    describe('findByUsername()', () => {
        it('Should find users by username', (done) => {
            Users.findByUsername(test_user.username)
                .then((user) => {
                    assert.notEqual(user._id, null);
                    done();
                });
        });
    });

    describe('update()', () => {
        it('Should update users', (done) => {
            nickname = faker.hacker.verb();
            Users.update(test_user._id, { nickname })
            .then((result) => {
                assert.equal(result.n, 1);
                assert.equal(result.nModified, 1);
                done();
            });
        });
    });

    describe('deleteOne()', () => {
        it('Should delete users', (done) => {
            Users.delete(test_user._id)
            .then((result) => {
                assert.equal(result.ok, 1);
                assert.equal(result.deletedCount, 1);
                done();
            });
        });
    });
});
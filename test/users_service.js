const assert = require('chai').assert;
const faker = require('faker');

const Users = require('../src/services/users');

describe('UsersService', function() {
    /**
     * @type {import('../src/models/user').User}
     */
    let test_user;
    
    describe('create()', function() {
        it('Should create users', function() {
            return Users.create({
                username: faker.hacker.noun(),
                name: faker.name.findName(),
                nickname: faker.name.firstName(),
                email: faker.internet.email(),
                password: 'S4uc3B4ws!',
                address: {
                    street: '1234 test street',
                    city: 'test town',
                    state: 'fl',
                    postal: '33012',
                    country: 'usa',
                },
            }).then((user) => {
                assert.notEqual(user._id, null);
                test_user = user;
            });
        });
    });

    describe('findById()', function() {
        it('Should find users by ID', function() {
            return Users.findById(test_user._id)
                .then((user) => {
                    assert.isOk(user._id, 'user should have an ID');
                });
        });
    });

    describe('findByEmail()', function() {
        it('Should find users by email', function() {
            return Users.findByEmail(test_user.email)
                .then((user) => {
                    assert.isOk(user._id, 'user should have an ID');
                });
        });
    });

    describe('findByUsername()', function() {
        it('Should find users by username', function() {
            return Users.findByUsername(test_user.username)
                .then((user) => {
                    assert.isOk(user._id, 'user should have an ID');
                });
        });
    });

    describe('update()', function() {
        it('Should update users', function() {
            nickname = faker.hacker.verb();
            return Users.update(test_user._id, { nickname })
                .then((result) => {
                    assert.equal(result.n, 1, 'should have one record match')
                    assert.equal(result.n, 1, 'should have updated one record')
                });
        });
    });

    describe('deleteOne()', function() {
        it('Should delete users', function() {
            return Users.delete(test_user._id)
                .then((result) => {
                    assert.equal(result.ok, 1);
                    assert.equal(result.deletedCount, 1);
                });
        });
    });
});
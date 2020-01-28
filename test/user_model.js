const chai = require('chai');
const assert = chai.assert;

const User = require('../src/models/user');

describe('User Model', async function () {
    describe('Validates usernames', () => {
        it('usernames are required', function(done) {
            const user = new User({
                username: null,
            });

            const { errors } = user.validateSync();

            assert.ok(errors.username, 'usernames cant be null');

            done();
        });

        it('usernames must be strings', function(done) {
            const user = new User({
                username: 1,
            });

            const { errors } = user.validateSync();

            assert.ok(errors.username, 'usernames cant be numbers');

            done();
        });

        const maxLength = 32;
        it(`usernames cannot be more than ${maxLength} characters`, function(done) {
            const user = new User({
                username: ''.padStart(maxLength + 1, 'X'),
            });

            const { errors } = user.validateSync();

            assert.ok(errors.username, `usernames cant be more than ${maxLength} characters`);

            done();
        });

        const minLength = 3;
        it(`usernames cannot be less than ${minLength} characters`, function(done) {
            const user = new User({
                username: ''.padStart(minLength - 1, 'X'),
            });

            const { errors } = user.validateSync();

            assert.ok(errors.username, `usernames cant be less than ${minLength} characters`);

            done();
        });

        it(`usernames must be unique`, async () => {
            const username = 'test_unique';
            const user_data = {
                username,
                name: username,
                nickname: username,
                password: 'AwesomePassword1234!',
                email: `${username}@example.com`,
                phone: '9543334444',
                address: {
                    street: '1234 test street',
                    city: 'test town',
                    state: 'fl',
                    postal: '33012',
                    country: 'usa',
                },
            };

            // create first user
            await new User(user_data)
                .save();

            // try to make a user with the same username
            return new User(user_data).save((error) => {
                assert.ok(error.message.indexOf('duplicate key error') !== -1, `usernames should be unique`);
            });
        });

        it('accepts valid usernames', function(done) {
            const user = new User({
                username: 'test_username',
            });

            const { errors } = user.validateSync();

            assert.notOk(errors.username, 'should accept valid usernames');

            done();
        });
    });

    describe('Validates names', () => {
        it('names are required', function(done) {
            const user = new User({
                name: null,
            });

            const { errors } = user.validateSync();

            assert.ok(errors.name, 'names cant be null');

            done();
        });

        it('names must be strings', function(done) {
            const user = new User({
                name: 1,
            });

            const { errors } = user.validateSync();

            assert.ok(errors.name, 'names cant be numbers');

            done();
        });

        const maxLength = 32;
        it(`names cannot be more than ${maxLength} characters`, function(done) {
            const user = new User({
                name: ''.padStart(maxLength + 1, 'X'),
            });

            const { errors } = user.validateSync();

            assert.ok(errors.name, `names cant be more than ${maxLength} characters`);

            done();
        });

        const minLength = 3;
        it(`names cannot be less than ${minLength} characters`, function(done) {
            const user = new User({
                name: ''.padStart(minLength - 1, 'X'),
            });

            const { errors } = user.validateSync();

            assert.ok(errors.name, `names cant be less than ${minLength} characters`);

            done();
        });

        it('accepts valid names', function(done) {
            const user = new User({
                name: 'test_name',
            });

            const { errors } = user.validateSync();

            assert.notOk(errors.name, 'should accept valid names');

            done();
        });
    });

    describe('Validates nicknames', () => {
        it('nicknames are required', function(done) {
            const user = new User({
                nickname: null,
            });

            const { errors } = user.validateSync();

            assert.ok(errors.nickname, 'nicknames cant be null');

            done();
        });

        it('nicknames must be strings', function(done) {
            const user = new User({
                nickname: 1,
            });

            const { errors } = user.validateSync();

            assert.ok(errors.nickname, 'nicknames cant be numbers');

            done();
        });

        const maxLength = 32;
        it(`nicknames cannot be more than ${maxLength} characters`, function(done) {
            const user = new User({
                nickname: ''.padStart(maxLength + 1, 'X'),
            });

            const { errors } = user.validateSync();

            assert.ok(errors.nickname, `nicknames cant be more than ${maxLength} characters`);

            done();
        });

        const minLength = 3;
        it(`nicknames cannot be less than ${minLength} characters`, function(done) {
            const user = new User({
                nickname: ''.padStart(minLength - 1, 'X'),
            });

            const { errors } = user.validateSync();

            assert.ok(errors.nickname, `nicknames cant be less than ${minLength} characters`);

            done();
        });

        it('accepts valid nicknames', function(done) {
            const user = new User({
                nickname: 'test_username',
            });

            const { errors } = user.validateSync();

            assert.notOk(errors.nickname, 'should accept valid nicknames');

            done();
        });
    });

    describe('Validates emails', () => {
        it('emails are required', function(done) {
            const user = new User({
                email: null,
            });

            const { errors } = user.validateSync();

            assert.ok(errors.email, 'emails cant be null');

            done();
        });

        it('emails must be strings', function(done) {
            const user = new User({
                email: 1,
            });

            const { errors } = user.validateSync();

            assert.ok(errors.email, 'emails cant be numbers');

            done();
        });

        it('emails must be look like emails', function(done) {
            const user = new User({
                email: 'total_nonsense',
            });

            const { errors } = user.validateSync();

            assert.ok(errors.email, 'emails should look like emails');

            done();
        });

        it(`emails must be unique`, async function() {
            const username = 'test_email';
            const user_data = {
                username,
                name: username,
                nickname: username,
                password: 'AwesomePassword1234!',
                email: `${username}@example.com`,
                phone: '9543334444',
                address: {
                    street: '1234 test street',
                    city: 'test town',
                    state: 'fl',
                    postal: '33012',
                    country: 'usa',
                },
            };

            // create first user
            await new User(Object.assign({}, user_data, {username: `${username}1`}))
                .save();

            // try to make a user with the same email
            return new User(Object.assign({}, user_data, {username: `${username}2`}))
                .save((error) => {
                assert.ok(error.message.indexOf('duplicate key error') !== -1, `emails should be unique`);
            });
        });

        it('accepts valid emails', function(done) {
            const user = new User({
                email: 'test@example.com',
            });

            const { errors } = user.validateSync();

            assert.notOk(errors.email, 'should accept valid emails');

            done();
        });
    });

    describe('Validates passwords', () => {
        it('passwords are required', function(done) {
            const user = new User({
                password: null,
            });

            const { errors } = user.validateSync();

            assert.ok(errors.password, 'passwords cant be null');

            done();
        });

        it('passwords must be strings', function(done) {
            const user = new User({
                password: 1,
            });

            const { errors } = user.validateSync();

            assert.ok(errors.password, 'passwords cant be numbers');

            done();
        });

        it('passwords must be strong', function(done) {
            const user = new User({
                password: 'password',
            });

            const { errors } = user.validateSync();

            assert.ok(errors.password, 'passwords should be strong');

            done();
        });

        it('accepts valid passwords', function(done) {
            const user = new User({
                password: 'ExtraStrongBoiz5#1!!',
            });

            const { errors } = user.validateSync();

            assert.notOk(errors.password, 'should accept valid passwords');

            done();
        });
    });

    describe('Validates addresses', () => {
        it('addresses are required', function(done) {
            const user = new User({
                address: null,
            });

            const { errors } = user.validateSync();

            assert.ok(errors.address, 'addresses cant be null');

            done();
        });

        it('accepts valid addresses', function(done) {
            const user = new User({
                address: {
                    street: '1234 test street',
                    city: 'test town',
                    state: 'fl',
                    postal: '33012',
                    country: 'usa',
                },
            });

            const { errors } = user.validateSync();

            assert.notOk(errors.address, 'should accept valid addresses');

            done();
        });
    });
});
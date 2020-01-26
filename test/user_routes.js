const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const faker = require('faker');

const Users = require('../src/services/users');
const app = require('../src/index');

describe('/user', async function() {
    const username = 'user_routes';
    const password = 'S4uc3B4ws!';

    const user = await Users.create({
        username,
        name: faker.name.findName(),
        nickname: faker.name.firstName(),
        email: faker.internet.email(),
        password,
    });

    describe('/user/login', function() {
        it('Should lookup by username', function() {
            return chai.request(app)
                .post('/backend/user/login')
                .send({ username: 'i_dont_exist', password })
                .then((res) => {
                    assert.equal(res.status, 401, 'should return status 401');
                });
        });

        it('Should validate passwords', function() {
            return chai.request(app)
                .post('/backend/user/login')
                .send({ username, password : 'total nonsense' })
                .then((res) => {
                    assert.equal(res.status, 401, 'should return status 401');
                });
        });

        it('Should log users in', function() {
            return chai.request(app)
                .post('/backend/user/login')
                .send({ username, password })
                .then((res) => {
                    assert.equal(res.status, 200, 'should return status 200');
                });
        });
    });

    describe('/user/me', function() {
        it('Should require user to be logged in', function() {
            return chai.request(app)
                .get('/backend/user/me')
                .then((res) => {
                    assert.equal(res.status, 401, 'should return status 401');
                });
        });

        it('Should return current user', function() {
            return chai.request(app)
                .post('/backend/user/login')
                .send({ username, password })
                .then((res) => {
                    // Assuming session cookie is first
                    const cookie_header = res.header['set-cookie'][0];
                    const cookie = cookie_header.substring(0, cookie_header.indexOf(';'));
                    return chai.request(app).get('/backend/user/me')
                        .set('Cookie', cookie)
                        .then((res) => {
                            assert.equal(res.status, 200, 'should return status 200');
                            assert.equal(res.body.username, user.username);
                        });
                });
        });
    });
});
const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const faker = require('faker');

const Users = require('../src/services/users');
const app = require('../src/index');


describe('/user', function() {

    const username = 'user_routes';
    const password = 'S4uc3B4ws!';
    let user;
    
    before(function(done) {
        Users.create({
            username,
            name: faker.name.findName(),
            nickname: faker.name.firstName(),
            email: faker.internet.email(),
            password,
            address: {
                street: '1234 test street',
                city: 'test town',
                state: 'fl',
                postal: '33012',
                country: 'usa',
            },
        }).then((u) => {
            user = u;
            done();
        });
    });

    describe('/user/login', function() {
        it('Should lookup by username', async function() {
            return chai.request(app)
                .post('/backend/user/login')
                .send({ username: 'i_dont_exist', password })
                .then((res) => {
                    assert.equal(res.status, 401, 'should return status 401');
                });
        });

        it('Should validate passwords', async function() {
            return chai.request(app)
                .post('/backend/user/login')
                .send({ username, password : 'total nonsense' })
                .then((res) => {
                    assert.equal(res.status, 401, 'should return status 401');
                });
        });

        it('Should log users in', async function() {
            return chai.request(app)
                .post('/backend/user/login')
                .send({ username, password })
                .then((res) => {
                    assert.equal(res.status, 200, 'should return status 200');
                });
        });
    });

    describe('/user/me', function() {
        it('Should require user to be logged in', async function() {
            return chai.request(app)
                .get('/backend/user/me')
                .then((res) => {
                    assert.equal(res.status, 401, 'should return status 401');
                });
        });

        it('Should return current user', async function() {
            const agent = chai.request.agent(app);

            await agent.post('/backend/user/login')
                .send({ username, password });

            return agent.get('/backend/user/me')
                .then((res) => {
                    assert.equal(res.status, 200, 'should return status 200');
                    assert.equal(res.body.username, user.username);
                });
        });
    });
});
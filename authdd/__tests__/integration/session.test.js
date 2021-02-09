const request = require('supertest');

const app = require('../../src/app');
const truncate = require('../utils/truncate');
const factory = require('../factories');

//describe = plenty of it's functions but it could be alone 
//expect = I expect "-- something --" to happen"
//toBe = "="
//beforeAll() = runs before every other test
//beforeEach() = runs before each test
//afterEach() = runs after each test
//afterAll() = runs after every other test

describe('Authentication', () => {
  beforeEach(async () => {
    await truncate();
  })

  it('should autheticate with valid credentials', async () => {
    const user = await factory.create('User', {
      password: '9229328948'
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '9229328948'
      })

    expect(response.status).toBe(200);
  });

  it('should not authenticate with invalid credentials', async () => {
    const user = await factory.create('User', {
      password: '9229328948'
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '9229328948'
      })

    expect(response.status).toBe(401);
  });

  it('should return jwt token when authenticated', async () => {
    const user = await factory.create('User', {
      password: '9229328948'
    })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '9229328948'
      })

    expect(response.body).toHaveProperty("token");
  });

  it('should be able to access private routes when authenticated', async () => {
    const user = await factory.create('User', {
      password: '9229328948'
    })

    const response = await request(app)
      .get('/dashboard')
      .set('Authorization', `Bearer ${user.generateToken()}`);

    expect(response.status).toBe(200)
  });

  it('should not be able to access private routes without autheticated', async () => {
    const user = await factory.create('User', {
      password: '9229328948'
    })

    const response = await request(app)
      .get('/dashboard')

    expect(response.status).toBe(401)
  });

  it('should not be able to access private routes with invalid jwt token', async () => {
    const user = await factory.create('User', {
      password: '9229328948'
    })

    const response = await request(app)
      .get('/dashboard')
      .set('Authorization', `Bearer 11111`);

    expect(response.status).toBe(401)
  })
});
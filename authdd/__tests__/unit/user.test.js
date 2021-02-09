const bcrypt = require('bcryptjs');

const { User } = require('../../rc/app/models');
const truncate = require('../utils/truncate');

//describe = plenty of it's functions but it could be alone 
//expect = I expect "-- something --" to happen"
//toBe = "="
//beforeAll() = runs before every other test
//beforeEach() = runs before each test
//afterEach() = runs after each test
//afterAll() = runs after every other test

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  })

  it('should encrypt user password', async () => {
    const user = await User.create({
      name: 'Gabriel',
      email: "gabr.jesus001@gmail.com",
      password: "ewefewfwu9229328948",
    })

    const compareHash = await bcrypt.compare('ewefewfwu9229328948', user.password_hash);

    expect(compareHash).toBe(true)
  })
})
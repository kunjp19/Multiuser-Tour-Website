const app = require('../src/app');
const assert = require('chai').assert;
const request = require('supertest');
const cookie = require('cookie');

describe('Delete a new tour',function(){
  let agent,response1,response2,response3;
  before(async function(){
    //db();
  });
it("Admin trying to delete tour",async function(){
    agent=request.agent(app);
    response1 = await agent.post('/login').send({"email": "sided1830@outlook.com", "password": "C}m8\"L,F"});
    assert.equal(response1.status,200);
    response1 =await agent.delete('/tours/W0WI3e4zoPmI6C30');
    assert.equal(response1.status,200);
    await agent.get('/logout');
  });
  it("Customer trying to delete tour",async function(){
    agent=request.agent(app);
    response2 = await agent.post('/login').send({"email": "sylvan2059@live.com", "password": "1wQX_lYt"});
    assert.equal(response2.status,200);
    response1 =await agent.delete('/tours/W0WI3e4zoPmI6C30');
    assert.equal(response1.status,401);
    await agent.get('/logout');
  });
  it("Guest trying to add tour",async function(){
    response1 =await agent.delete('/tours/W0WI3e4zoPmI6C30');
    assert.equal(response1.status,401);
  })
});

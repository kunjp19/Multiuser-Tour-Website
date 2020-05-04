const app = require('./tourServer');
const assert = require('chai').assert;
const request = require('supertest');
const cookie = require('cookie');

describe('Add a new tour',function(){
  let agent,response1,response2,response3;
  before(async function(){
  });
  it("Admin trying to add tour",async function(){
      agent=request.agent(app);
      response1 = await agent.post('/login').send({"email": "sided1830@outlook.com", "password": "C}m8\"L,F"});
      console.log(response1.text);
      assert.equal(response1.status,200);
      response1 =await agent.post('/tours/add').send({"name":"Baga Beach","date":"May 2019"});
      console.log(response1.text);
      assert.equal(response1.status,200);
      await agent.get('/logout');
    });
    it("Customer trying to add tour",async function(){
      agent=request.agent(app);
      response2 = await agent.post('/login').send({"email": "sylvan2059@live.com", "password": "1wQX_lYt"});
      console.log(response2.text);
      assert.equal(response2.status,200);
      response2 =await agent.post('/tours/add').send({"Name":"Baga beach","Date":"May 2019"});
      assert.equal(response2.status,401);
      await agent.get('/logout');
    });
    it("Guest trying to add tour",async function(){
      response2 =await agent.post('/tours/add').send({"Name":"Baga Beach","Date":" May 2019"});
      assert(response2.status,401);
    })
  });

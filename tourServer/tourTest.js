const app = require('./tourServer');
const assert = require('chai').assert;
const request = require('supertest');
const cookie = require('cookie');

describe('Get Tour Tests', function () {
    var response;
    var tours = null;
    before(async function(){
        response = await request(app).get('/tours');
    })
    it('Everything is OK', async function(){
        assert.equal(response.status, 200);
    });
    it('Returns an array', function(){
        tours = JSON.parse(response.text);
        assert.isArray(tours);
    });
    it('All tour elements have name and date', function(){
        tours.forEach(function(tours){
            assert.containsAllKeys(tours, ['name', 'date']);
        });
    });
    it('Cookie with appropriate name is returned', function(){
        let cookies = response.header['set-cookie'].map(cookie.parse);
        let mycookie = cookies.filter(c => c.hasOwnProperty('bu4986'));
        assert.notEmpty(mycookie);
    });
})

  describe('Get an individual Tour', function(){
    before(async function(){
      response1 = await request(app).get('/tours/0bOSma7YmU6KRmkW')
      response2 = await request(app).get('/tours/FQDLuyhHx3bgJRtN')
        response3 = await request(app).get('/tours/bu4986')
    })
    it('Get an Existing Tour',function (){
        assert.equal(response1.status, 200);
      })
        it('Get another Existing Tour' , function(){
            assert.equal(response2.status , 200);
          })
          it('Get wrong Existing Tour' , function(){
                assert.equal(response3.status , 404);
    })
})

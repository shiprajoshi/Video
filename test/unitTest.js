let app = require('../server/routes/users.js');
var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);

let expect = chai.expect();

describe('File upload', function(){
it('should be able to get the files', function(done) {
  chai.request(app)
    .get('/upload')
      done();
    });

it('should be able to find all files', function(done) { 
  chai.request('app')
  .get('/upload')
  .end(function(err, res) {
    expect(res).to.have.status(200);
                                
  });
  done();
}) ;

it('it should be able to return array', (done) => {
    chai.request('app')
.post('/add')
.end((err, res) => {
expect(res).to.be.an.instanceof(Array);
           
            });
      done();
      });
});



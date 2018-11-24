var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../routes/questions');
var should = chai.should();
var request = require('request');


chai.use(chaiHttp);

describe('Answers API', function () {
    it('Get all Answers', function () {
        chai.request('http://localhost:8080/answers', function (error, response, body) {

            respons.should.have.status(200);
            done()
        });
    });


    it('Get all Answers By UserID', function () {
        chai.request('http://localhost:8080/answers/:UserID', function (error, response, body) {

            respons.should.have.status(200);
             done()
            });
        });

     it('Get questions that user answered By UserID', function () {
        chai.request('http://localhost:8080/answered/:UserID', function (error, response, body) {
    
            respons.should.have.status(200);
            done()
            
        });
            });
    
    
     it('postanswer', function () {
        let question= {
                QuestionsType: "1",
                QuestionsContent:"How do you do today?"
            }
            chai.request('http://localhost:8080/answers', function (error, response, body){

                respons.should.have.status(200);
                respons.body.should.be.a('object');
                resonse.should.have.affectedRows(1);
                done()
            }).post('/answers').send(question);
        });







    });


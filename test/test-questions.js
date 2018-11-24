var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../routes/questions');
var should = chai.should();
var request = require('request');


chai.use(chaiHttp);


describe('Questions API', function () {
    it('Get all  Questions', function () {
        chai.request('http://localhost:8080/questions', function (error, response, body) {

            respons.should.have.status(200);
            done()
        });
    });


            it('Get all  Questions By UserID', function () {
            chai.request('http://localhost:8080/questions/:questionID', function (error, response, body) {

                respons.should.have.status(200);
                done()
            });
        });


        it('Post New Questions', function () {
            let question= {
                
                QuestionsType: "1",
                QuestionsContent:"How do you do today?"
            }
            chai.request('http://localhost:8080/questions', function (error, response, body){

                respons.should.have.status(400);
                respons.body.should.be.a('object');
                resonse.should.have.affectedRows(1);
                done()
           }).post('/').send({ "QuestionsType": 1, "QuestionsContent": 123 })
        });










    });


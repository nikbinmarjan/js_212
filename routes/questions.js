var express = require('express');
var mysql = require('mysql');
var router = express.Router();
con = require('./connect')
//@@@@@@@@@@@@@@************GetQuestion**********@@@@@@@@@@@@@@
function getquestions(connection) {
  return new Promise(function (resolve, reject) {
    con.query(`SELECT * FROM Questions`, function (err, result, fields) {
      if (err) { console.log(err); err.status = 500; reject(err) }
      else
        result = [{ status: 200 }, ...result]
      resolve(result);

      console.log(result);

    });
  });

};
router.get('/', (req, res, next) => {
  getquestions(con).then((result) => {
    res.json(result);
  }).catch((error) => {
    console.log(error);

    res.json(error);

  });
});
//@@@@@@@@@@@@@@************PostQuestion**********@@@@@@@@@@@@@@
function postquestions(connection, body) {
  return new Promise(function (resolve, reject) {
    result=[];
    con.query(`INSERT INTO questions (QuestionsType,QuestionsContent) values('${body.QuestionsType}','${body.QuestionsContent}') `, function (err, result, fields) {
      console.log(body);
      if (err) { console.log(err); err.status = 500; reject(err) }
      else {
      result.status = 200 ;
        resolve(result);
        console.log(result);
      }
    });
  });

};
router.post('/', (req, res, next) => {
  console.log(req.body.Questions)
  postquestions(con, req.body).then((result) => {
    res.json(result);
  }).catch((error) => {
    console.log(error);
    res.json(error);

  });

});

//@@@@@@@@@@@@@@************GetQuestionByID**********@@@@@@@@@@@@@@
function getquestionsbyid(connection,req) {
  return new Promise(function (resolve, reject) {
    con.query(`SELECT * FROM Questions where QuestionID = ${req.params.questionID} `, function (err, result, fields) {

      if (err) { console.log(err); err.status = 500; reject(err) }
      else
        result = [{ status: 200 }, ...result]
      resolve(result);

      console.log(result);

    });
  });
};
  router.get('/:questionID', (req, res, next) => {
    getquestionsbyid(con,req).then((result) => {
      res.json(result);
    }).catch((error) => {
      console.log(error);
      res.json(error);

    });
  });


module.exports = router;
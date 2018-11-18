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
function postquestions(connection, req) {
  return new Promise(function (resolve, reject) {
    con.query(`INSERT INTO Questions (QuestionsType,QuestionsContent) values('${req.body.QuestionsType}','${req.body.QuestionsContent}') `, function (err, result, fields) {
      if (err) { console.log(err); err.status = 500; reject(err) }
      else {
        result = [{ status: 200 }, ...result]
        resolve(result);
        console.log(result);
      }
    });
  });

};
router.post('/', (req, res, next) => {
  postquestions(con, req).then((result) => {
    res.json(result);
  }).catch((error) => {
    console.log(error);
    res.json(error);

  });

});

//@@@@@@@@@@@@@@************GetQuestionByID**********@@@@@@@@@@@@@@
function getquestionsbyid(connection) {
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
    getquestionsbyid(con).then((result) => {
      res.json(result);
    }).catch((error) => {
      console.log(error);
      res.json(error);

    });
  });


module.exports = router;
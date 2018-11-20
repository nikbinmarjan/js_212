var express = require('express');
var mysql = require('mysql');
var router = express.Router();
con = require('./connect')

router.get('/', (req, res, next) => {
  console.log(req.params.questionID);

  con.query(`SELECT * FROM Answers `, function (err, result, fields) {
    if (err) { console.log(err); err.status = 500; res.send(err) }
    else
      result = [{ status: 200 }, ...result]
    res.json(result);
    console.log(result);

  });
});

//*********************************** */
function answersbyuserid(connection, req) {
  return new Promise(function (resolve, reject) {

    con.query(`SELECT * FROM Answers where UserID = ${req.params.UserID} `, function (err, result, fields) {

      if (err) { console.log(err); err.status = 500; reject(err) }
      else
        result = [{ status: 200 }, ...result]
      resolve(result);

      console.log(result);

    });
  });
};

router.get('/:UserID', (req, res, next) => {
  answersbyuserid(con, req).then((result) => {
    res.json(result);
  }).catch((error) => {
    console.log(error);
    res.json(error);

  });
});





// con.query(`SELECT * FROM Answers where UserID = ${req.params.UserID} `, function (err, result, fields) {
//   if (err) { console.log(err); res.send(err) }
//   else
//     result = [{ status: 200 }, ...result]
//   res.json(result);
//   console.log(result);

// });
  
      
//   });

router.get('/answered/:UserID', (req, res, next) => {
  console.log(req.params.UserID);

  con.query(`SELECT QuestionID FROM Answers where UserID=${req.params.UserID}`, function (err, result, fields) {
    if (err) { console.log(err); err.status = 500; res.send(err) }
    else
      var arr = result.map(el => el.QuestionID)
    result = [{ status: 200 }, ...result]
    res.json(arr);
    console.log(result);

  });
});


router.post('/', (req, res, next) => {

  con.query(`INSERT INTO Answers (QuestionID,UserID,Answers) values('${req.body.QuestionID}','${req.body.UserID}','${req.body.Answers}') `, function (err, result, fields) {
    if (err) { console.log(err); err.status = 500; res.send(err) }
    else
      req.body = [{ status: 200 }, ...req.body]
    res.json(req.body);

  });

});

module.exports = router;





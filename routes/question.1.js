var express = require('express');
var mysql = require('mysql');
var router = express.Router();
 con = require('./connect')


router.get('/:questionID',(req,res,next)=>{
  console.log(req.params.questionID);
  //con.connect(function(err){



    //if (err) {console.log(err);res.send(err)};
    con.query(`SELECT * FROM QuestionOption where QuestionID = ${req.params.questionID} `, function (err, result, fields) {
      if (err) {console.log(err);res.send(err) }
      else
      res.json(result);
      console.log(result);
      
    });
  });



/* GET users listing. */


module.exports = router;





var express = require('express');
var mysql = require('mysql');
var router = express.Router();
 con = require('./connect')

 router.get('/',(req,res,next)=>{
    console.log(req.params.questionID);
    //con.connect(function(err){
  
      //if (err) {console.log(err);res.send(err)};
      con.query(`SELECT * FROM Answers `, function (err, result, fields) {
        if (err) {console.log(err);res.send(err) }
        else
        res.json(result);
        console.log(result);
        
      });
    });


router.get('/:UserID',(req,res,next)=>{
  console.log(req.params.questionID);
  //con.connect(function(err){

    //if (err) {console.log(err);res.send(err)};
    con.query(`SELECT * FROM Answers where UserID = ${req.params.UserID} `, function (err, result, fields) {
      if (err) {console.log(err);res.send(err) }
      else
      res.json(result);
      console.log(result);
      
    });
  
    
  
  
  
  
  
  });

  router.get('/answered/:UserID',(req,res,next)=>{
    console.log(req.params.UserID);
    //con.connect(function(err){
  
  
  
      //if (err) {console.log(err);res.send(err)};
      con.query(`SELECT QuestionID FROM Answers where UserID=${req.params.UserID}`, function (err, result, fields) {
        if (err) {console.log(err);res.send(err) }
        else
        var arr = result.map(el=>el.QuestionID)
        res.json(arr);
        console.log(result);
        
      });
  });




  router.post('/',(req,res,next)=>{
    
    con.query(`INSERT INTO Answers (QuestionID,UserID,Answers) values('${req.body.QuestionID}','${req.body.UserID}','${req.body.Answers}') `, function (err, result, fields) {
      if (err) {console.log(err);res.send(err) }
      else
        res.json(req.body);
    
  });

 });

module.exports = router;





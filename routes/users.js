
var express = require('express');
var mysql = require('mysql');
var router = express.Router();
con = require('./connect')
//@@@@@@@@@@@@@@************GetUsersInfo**********@@@@@@@@@@@@@@
function getusersinfo(connection) {
  return new Promise(function (resolve, reject) {
    con.query(`SELECT * FROM user`, function (err, result, fields) {
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

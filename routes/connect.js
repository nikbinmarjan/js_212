var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Nikbin@9697",
  database: "js212",
  multipleStatements: true
});
module.exports = con;
/** 
  This file to test the database connection and the retrivals of documents in the car collection
  -test that  by change the directory from the cmd to the /webtask/server-side/database
  -type node testMongo.js
 */

var MongoClient = require('mongodb').MongoClient;
var config= require('./config');

MongoClient.connect(config.url, function(err, db) {
  db.collection("cars").find({}).toArray(function(err,result){
 console.log(result);
  })});
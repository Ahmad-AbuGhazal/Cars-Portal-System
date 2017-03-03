var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var config = require('../database/config');
// Connect using MongoClient
module.exports = {
    // select all the cars documents in the cars collection
    findAllCars: function () {
        return MongoClient.connect(config.url).then(dbResult).catch(connectDBError)
            .then(getCars).catch(carRetriveError);
        function dbResult(db) {
            var collection = db.collection("cars");
            return collection.find({}).toArray();
        function getCars(cars) {
            return cars;
        }

    },
     // select single car document in the cars collection by id
    findOneCar: function (id) {
        return MongoClient.connect(config.url).then(getData).catch(connectDBError)
            .then(getCar).catch(carRetriveError);
        function getData(db) {
            var collection = db.collection("cars").findOne({"_id": new ObjectId(id)});
            return collection;
        }
        function getCar(car) {
            return car;
        }
    }
};
/* this function to show error if the database connection fail or something happend while 
retriving the data
*/

function connectDBError(error) {
    return {
        message: "Cant connect to DB, Please try again"
    };
}
function carRetriveError(error) {
    return {
        message: "Cant retrives cars data"
    };
}
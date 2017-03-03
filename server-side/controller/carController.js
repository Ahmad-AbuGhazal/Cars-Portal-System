var carService = require('../service/carService');
module.exports={
findCars:function (req, res, next) {
  carService.findAll().then(function (result) {
    var carData={};
    carData.cars=result;
    res.send(carData);
  });
},
findOneCars:function (req, res, next) {
  var id = req.params.id;
  carService.findOne(id).then(function (result) {
    res.send(result);
  });
}
};
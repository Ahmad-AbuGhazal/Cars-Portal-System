var express = require('express');
var carRouter = express.Router();
var carController=require('../controller/carController');

/* GET all cars. */
carRouter.get('/', carController.findCars);

/* GET a single car details by id. */
carRouter.get('/:id', carController.findOneCars);

module.exports = carRouter;

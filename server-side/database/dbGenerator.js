"use strict";
/**
   this file to insert initalization data into mongoDB
   - Use this file by changing the directiory in the console cmd to /webtask/server-side/database
   - Type node dbGenerator.js
 */
var mongoose = require('mongoose');
var config = require('../database/config');
var Car = require('../model/Car');
mongoose.connect(config.url);
  /*  create a car document*/
  var car = new Car({
    type: 'Ford Foucs', year: 2012,
    priceRange: '8500$ - 9000$', mileage: 200000,
    itemNumber: '#1395B', vin: '4G4LEW3LWOSRO3', views: 0, saves: 0,
    shares: 0, cylinders: 'L4', cityMpg: 20, highwayMpg: 24, engine: 1.3,
    urls: ['https://static5.cargurus.com/images/forsale/2016/12/04/08/36/2012_ford_focus-pic-370005744518496639-1024x768.jpeg',
      'https://static5.cargurus.com/images/forsale/2016/12/04/08/36/2012_ford_focus-pic-4426346180859581748-1024x768.jpeg',
      'https://static5.cargurus.com/images/forsale/2016/12/04/08/36/2012_ford_focus-pic-4175262476396854938-1024x768.jpeg',
      'https://static5.cargurus.com/images/forsale/2016/12/04/08/36/2012_ford_focus-pic-7433832258072857511-1024x768.jpeg',
      'https://static5.cargurus.com/images/forsale/2016/12/04/08/36/2012_ford_focus-pic-370005744518496639-1024x768.jpeg',
      'https://static5.cargurus.com/images/forsale/2016/12/04/08/36/2012_ford_focus-pic-8937227363737312915-1024x768.jpeg']
  });
  // save the car document
  car.save(getError);
function getError(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('successfully completed');
    }
  }
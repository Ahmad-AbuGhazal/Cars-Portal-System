/**
Car model represent the Schema cars in mongoDB
 */

"use strict";
var mongoose = require('mongoose');
var promise=require('bluebird');
mongoose.Promise= promise;
var Schema = mongoose.Schema;
var carSchema = new Schema({
  type:  { type: String, required: true},
        year: Number,
        priceRange: String,
        mileage: Number,
        itemNumber: {type:String, required:true},
        vin: {type:String, required:true},
        views: {type:Number,default:0},
        saves: {type:Number,default:0},
        shares: {type:Number,default:0},
        cylinders: String,
        cityMpg: Number,
        highwayMpg: Number,
        engine: Number,
        urls: Array
});
var Car = mongoose.model('Car', carSchema,'cars');
module.exports=Car;

/**
this class for future use represent Car model description

 */
var schemas = require("./schemas.js");

var Car = function (data) {
    this.data = this.sanitize(data);
};
Car.prototype.data = {};

Car.prototype.sanitize = function (data) {
    data = data || {};
    schema = schemas.car;
    return _.pick(_.defaults(data, schema), _.keys(schema)); 
}
Car.prototype.getType= function () {
    return this.data[type];
};
Car.prototype.setType= function () {
    this.data[type]=type;
};
Car.prototype.getId= function () {
    return this.data[id];
};
Car.prototype.getYear= function () {
    return this.data[year];
};
Car.prototype.setYear= function (year) {
     this.data[year]=year;
};
Car.prototype.setItemNumber= function (itemNumber) {
     this.data[itemNumber]=itemNumber;
};
Car.prototype.getId= function () {
    return this.data[id];
};
Car.prototype.getVin= function () {
    return this.data[vin];
};
Car.prototype.setVin= function (vin) {
     this.data[vin]=vin;
};
Car.prototype.getViews= function () {
    return this.data[views];
};
Car.prototype.incViewsByOne= function () {
     this.data[views]=this.data[views]+1;
};
Car.prototype.getSaves= function () {
    return this.data[saves];
};
Car.prototype.incSavesByOne= function () {
     this.data[saves]=this.data[saves]+1;
};
Car.prototype.getShares= function () {
    return this.data[shares];
};
Car.prototype.incSharesByOne= function () {
     this.data[shares]=this.data[shares]+1;
};

Car.prototype.getPriceRange= function () {
    return this.data[priceRange];
};
Car.prototype.setPriceRange= function (priceRange) {
     this.data[priceRange]=priceRange;
};

Car.prototype.getCylinders= function () {
    return this.data[cylinders];
};
Car.prototype.setCylinders= function (cylinders) {
     this.data[cylinders]=cylinders;
};
Car.prototype.getCityMpg= function () {
    return this.data[cityMpg];
};
Car.prototype.setCityMpg= function (cityMpg) {
     this.data[cityMpg]=cityMpg;
};
Car.prototype.getHighWayMpg= function () {
    return this.data[highwayMpg];
};
Car.prototype.setHighWayMpg= function (highwayMpg) {
     this.data[highwayMpg]=highwayMpg;
};
Car.prototype.setCityMpg= function (cityMpg) {
     this.data[cityMpg]=cityMpg;
};
Car.prototype.getHighWayMpg= function () {
    return this.data[highwayMpg];
};
Car.prototype.setHighWayMpg= function (highwayMpg) {
     this.data[highwayMpg]=highwayMpg;
};
Car.prototype.getEngine= function () {
    return this.data[engine];
};
Car.prototype.setEngine= function (engine) {
     this.data[engine]=engine;
};
module.exports=Car;
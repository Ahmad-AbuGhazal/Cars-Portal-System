var mongoose = require('mongoose');
var promise=require('bluebird');
mongoose.Promise= promise;
var Schema = mongoose.Schema;
var imgUrlsSchema = new Schema({
  id:  { type: String, required: true},
  urls:Array
});
var ImgUrls = mongoose.model('ImgUrls', imgUrlsSchema, 'imgUrls');
module.exports=ImgUrls;
var carRepository=require('../repository/carRepository');
module.exports={
findAll:function(){
  return carRepository.findAllCars();
},
findOne:function(id){
 return carRepository.findOneCar(id);
}
};
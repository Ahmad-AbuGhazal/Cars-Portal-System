import React, { PropTypes, Component } from 'react';
import Header from './Header';
import axios from 'axios';
import Car from './Car';
import Footer from './Footer';
class CarApp extends Component{ 
constructor(props) {
  super(props)
		this.state = {cars:[]}
  }
  componentDidMount() {
    /** use axios service to connect to the api, I assume the main app render all cars so I call 
    http://localhost:3000/api/webtask/cars for single car you can call the link below, make sure the yourId have the 
    same value in mongodb it will equal the value _id in the database
    http://localhost:3000/api/webtask/cars/{yourId} 
     */
    var _this = this;
    this.serverRequest = 
      axios.get("http://localhost:3000/api/webtask/cars")
        .then(function(result) {    
          _this.setState({
            cars: result.data.cars
          });
        })
  };
render(){
  return (
    <div id="parent">
      <Header></Header>
      {this.renderCars()}
      <Footer></Footer>
      </div>
      
  );
}
/**
this function render all cars, Note: for future work I need to render single car only 
 */
renderCars() {
        return this.state.cars.map(
          function(car) { 
                return  <Car car={car}></Car>
});
}
}
CarApp.propTypes = { className: PropTypes.string };
export default CarApp;

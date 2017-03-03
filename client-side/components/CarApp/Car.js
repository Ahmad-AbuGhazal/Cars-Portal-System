import React,{ Component } from 'react';
import MediaQuery from 'react-responsive';
import stl from './Car.css';
import CarImages from './CarImages';
import CarDetails from './CarDetails';
import ReactDOM from 'react-dom';
class Car extends Component{ 
   constructor(props) {
        super(props)
        console.log( "initialise car"+ this.props.car)
         this.state = {selectedImage: this.props.car.urls[0],circleStyle:{background:''}}
   } 
  previewImage(image) {
    this.setState({ selectedImage: image })
  }
  getNext(n){
    this.setState({selectedImage:this.props.car.urls[n],
     circleStyle:{background:''}});
  }
  render() {
      const car= this.props.car
      const circleStl={background:'#FFFFFF'};
      return(
        <div>
         <MediaQuery minWidth={780}>
         <div className={stl.carBody}>
           <div className={stl.imageDiv}>
              <img className={stl.mainImage} src ={this.state.selectedImage}/>
           </div>
           <div className={stl.carInfoDesk}>
              <h4 className={stl.carType}>{car.type}</h4>
              <h4 className={stl.captionHeader+" "+stl.pullLeft}>Year</h4>
              <h4 className={stl.captionValue+ " "+stl.pullLeft}>{car.year}</h4>
              <h4 className={stl.captionHeader+" "+stl.pullLeft}>Price Range</h4>
              <h4 className={stl.captionValue+ " "+stl.pullLeft}>{car.priceRange}</h4>
              <h4 className={stl.captionHeader+" "+stl.pullLeft}>Mileage</h4>
              <h4 className={stl.captionValueMile+ " "+stl.pullLeft}> {car.mileage} miles</h4>
              <h4 className={stl.captionHeader+" "+stl.pullLeft}>Item Number : {car.itemNumber}</h4>
              <h4 className={stl.captionHeaderVin+" "+stl.pullLeft}>VIN : {car.vin} </h4>
              <h4 className={stl.share+" "+stl.pullLeft}>Share this car <i className="
                glyphicon glyphicon-envelope"></i></h4>
              <div className={stl.sotialReviews}>
                <div className={stl.social+" "+ stl.pullLeft}>
                  <h4 className={stl.captionHeader}>Views</h4>
                  <h4 className={stl.socialColor}>{car.views}</h4>
                </div>
                <div className={stl.social}>
                  <h4 className={stl.captionHeader}>Saves</h4>
                  <h4 className={stl.socialColor}>{car.saves}</h4>
                </div>
                <div className={stl.social}>
                  <h4 className={stl.captionHeader}>Shares</h4>
                  <h4 className={stl.socialColor}>{car.shares}</h4>
                </div>
              </div> 
         </div>
         </div>
             <CarImages urls={this.props.car.urls}  onImgSelect={selectedImage => this.previewImage(selectedImage)}></CarImages>
             <CarDetails data={this.props.car}></CarDetails>
          </MediaQuery>
          <MediaQuery maxWidth={780}>
           
           <div className={stl.carDetailMobile}>
           <img className={stl.imageMobileContainer} src={this.state.selectedImage}/>
             <div className={stl.slideContainer}>

              <div  className={stl.slideCircle} onClick={() => {this.getNext(0);
              this.setState({circleStyle:circleStl})}} style={this.state.circleStyle}></div>

              <div className={stl.slideCircle} onClick={() => {this.getNext(1);
              this.setState({circleStyle:{}})}}></div>
              <div className={stl.slideCircle} onClick={() =>{ this.getNext(2);
              this.setState({circleStyle:{}})}}></div>
              <div className={stl.slideCircle} onClick={() => {this.getNext(3);
              this.setState({circleStyle:{}})}}></div>
              <div className={stl.slideCircle} onClick={() => {this.getNext(4);
              this.setState({circleStyle:{}})}}></div>
              <div className={stl.slideCircle} onClick={() => {this.getNext(5);
              this.setState({circleStyle:{}})}}></div>
            </div>
            <div className={stl.imageWrapMobile}>
              <div className={stl.carLeft}>
                <h4 className={stl.carTypeMobile}>{car.type}</h4>
                <h4 className={stl.captionHeader+" "+stl.pullLeft}>Year</h4>
                <h4 className={stl.captionValue+" "+stl.pullLeft}>{car.year}</h4>
                <h4 className={stl.captionHeader+" "+stl.pullLeft}>Price Range</h4>
                <h4 className={stl.captionValue+" "+stl.pullLeft}>{car.priceRange}</h4>
                <h4 className={stl.captionHeader+" "+stl.pullLeft}>Mileage</h4>
                <h4 className={stl.captionValue+" "+stl.pullLeft}>{car.mileage} miles</h4>
              </div>
              <div className={stl.carRight}>
                <h4 className={stl.captionHeader+" "+stl.pullLeft}>Item Number : {car.itemNumber}</h4>
                <h4 className={stl.captionHeader+" "+stl.pullLeft}>VIN : {car.vin}</h4>
                <h4 className={stl.share+" "+stl.pullLeft}>Share this car <i className="
                glyphicon glyphicon-envelope"></i></h4>
              <div className={stl.sotialReviews}>
                <div className={stl.social+" "+ stl.pullLeft}>
                  <h4 className={stl.captionHeader}>Views</h4>
                  <h4 className={stl.socialColor}>{car.views}</h4>
                </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={stl.btnDiv}>
            <h4 className={stl.btnCall}>CALL US</h4>
          </div>
           <CarDetails data={this.props.car}></CarDetails>
          </MediaQuery>
          </div>
    );    
  }
}
export default Car;
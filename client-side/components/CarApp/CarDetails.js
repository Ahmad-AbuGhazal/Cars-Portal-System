import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import stl from './CarDetails.css';

class CarDetails extends Component {

  renderData(car){
return <ul className={stl.ulD}>
        <li className={stl.line}>
                   <div className={stl.divLeft}>
                    <h4 className={stl.detailName}>Cylinders</h4>
                   </div>
                   <div className={stl.divRight}>
                     <h4 className={stl.detailValue}>{car.cylinders}</h4>
          </div>
      </li>

      <li className={stl.line}>
                   <div className={stl.divLeft}>
                    <h4 className={stl.detailName}>City MPG</h4>
                   </div>
                   <div className={stl.divRight}>
                     <h4 className={stl.detailValue}>{car.cityMpg+" "}MPG</h4>
          </div>
      </li>

      <li className={stl.line}>
                   <div className={stl.divLeft}>
                    <h4 className={stl.detailName}>Highway MPG</h4>
                   </div>
                   <div className={stl.divRight}>
                     <h4 className={stl.detailValue}>{car.highwayMpg+" "}MPG</h4>
          </div>
      </li>

      <li className={stl.line}>
                   <div className={stl.divLeft}>
                    <h4 className={stl.detailName}>Engine</h4>
                   </div>
                   <div className={stl.divRight}>
                     <h4 className={stl.detailValue}>{car.engine}</h4>
          </div>
      </li>
            </ul>
  }
  renderMobileData(car){
return <ul className={stl.ulD}>
        <li className={stl.line}>
                   <div className={stl.divLeft}>
                    <h4 className={stl.detailName}>Cylinders</h4>
                   </div>
                   <div className={stl.divRightMobile}>
                     <h4 className={stl.detailValue}>{car.cylinders}</h4>
          </div>
      </li>

      <li className={stl.line}>
                   <div className={stl.divLeft}>
                    <h4 className={stl.detailName}>City MPG</h4>
                   </div>
                   <div className={stl.divRightMobile}>
                     <h4 className={stl.detailValue}>{car.cityMpg}</h4>
          </div>
      </li>

      <li className={stl.line}>
                   <div className={stl.divLeft}>
                    <h4 className={stl.detailName}>Highway MPG</h4>
                   </div>
                   <div className={stl.divRightMobile}>
                     <h4 className={stl.detailValue}>{car.highwayMpg}</h4>
          </div>
      </li>

      <li className={stl.line}>
                   <div className={stl.divLeft}>
                    <h4 className={stl.detailName}>Engine</h4>
                   </div>
                   <div className={stl.divRightMobile}>
                     <h4 className={stl.detailValue}>{car.engine}</h4>
          </div>
      </li>
            </ul>
  }
  render() {
    const car = this.props.data
    return (
      <div>
        <MediaQuery minWidth={780}>
           <div className={stl.CarDetailsContainer}>
           
                <div className={stl.thumbnailBoxLeft}>
                     <h4 className={stl.title}>EXTERIOR</h4>
                     {this.renderData(car)}
                        </div>
                <div className={stl.thumbnailBoxRight}>
                    <h4 className={stl.title}>PERFORMANCE</h4>
                     {this.renderData(car)}
                          </div>
               
               </div>
     </MediaQuery>
      <MediaQuery maxWidth={780}>
           <div className={stl.CarDetailsContainerMobile}>
           
                <div className={stl.carDetailWrapperMobile}>
                     <h4 className={stl.titleMobile}>EXTERIOR</h4>
                     {this.renderMobileData(car)}
                        </div>
                        <div className={stl.barDiv}>
                        </div>
                <div className={stl.carDetailWrapperMobile}>
                    <h4 className={stl.titleMobile}>PERFORMANCE</h4>
                     {this.renderMobileData(car)}
                          </div>
               
               </div>
     </MediaQuery>
     </div>
    )
  }
}

export default CarDetails
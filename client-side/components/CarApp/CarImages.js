import React,{ Component } from 'react';
import stl from './CarImages.css';
class CarImages extends Component{ 
  constructor(props) {
    super(props)
    this.renderImages = this.renderImages.bind(this)
  }
  renderImages(imagesUrls) {
    return <div className={stl.imageBar}>
    <img key={imagesUrls} src={imagesUrls}
     onClick={() => this.props.onImgSelect(imagesUrls)}/>
    </div>
  }
  render() {
    const imagesUrls = this.props.urls
    return(
      <div className={stl.imageBarRow}>
        {imagesUrls.map(this.renderImages)}
      </div>
    )
  }
}

export default CarImages;
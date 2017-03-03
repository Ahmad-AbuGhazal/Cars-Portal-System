import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSwiper from '../dist/react-swiper';

class Page extends Component {
  constructor(props) {
    super(props);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  next() {
    this.refs.reactSwiper.next();
  }

  prev() {
    this.refs.reactSwiper.prev();
  }

  render() {
    const style = {
      height: '600px',
      width: '100%',
    };
    return (
      <div>
        <p className="info">
          Demo of react-swiper(nolimits4web's Swiper as a react component).
        </p>
        <ReactSwiper
          ref="reactSwiper"
          swipeOptions={{
            pagination: '.swiper-pagination',
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
            scrollbar: '.swiper-scrollbar',
            lazyLoading: true,
            mousewheelControl: true,
          }}
        >
          <div style={style}>
            <div className="swiper-lazy bg" data-background="./largeNature1.jpg" />
            <div className="swiper-lazy-preloader"></div>
          </div>
          <div style={style}>
            <div className="swiper-lazy bg" data-background="./largeNature2.jpg" />
            <div className="swiper-lazy-preloader"></div>
          </div>
          <div style={style}>
            <div className="swiper-lazy bg" data-background="./largeNature3.jpg" />
            <div className="swiper-lazy-preloader"></div>
          </div>
        </ReactSwiper>
        <div>
          <button type="button" onClick={this.prev}>Prev</button>
          <button type="button" onClick={this.next}>Next</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('app')
);

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _swiper = require('swiper');

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function pagination(argPagination) {
  if (argPagination) {
    return _react2.default.createElement('div', { className: 'swiper-pagination' });
  }
  return null;
}

function navigationButton(argPrev, argNext) {
  if (argPrev && argNext) {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('div', { className: 'swiper-button-prev' }),
      _react2.default.createElement('div', { className: 'swiper-button-next' })
    );
  }
  return null;
}

function scrollBar(argBar) {
  if (argBar) {
    return _react2.default.createElement('div', { className: 'swiper-scrollbar' });
  }
  return null;
}

var ReactSwiper = function (_React$Component) {
  _inherits(ReactSwiper, _React$Component);

  function ReactSwiper() {
    _classCallCheck(this, ReactSwiper);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactSwiper).apply(this, arguments));
  }

  _createClass(ReactSwiper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var swipeOptions = this.props.swipeOptions;

      this.swipe = new _swiper2.default(this.refs.container, swipeOptions);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.swipe.destroy(true, true);
      this.swipe = void 0;
    }
  }, {
    key: 'onResize',
    value: function onResize() {
      this.swipe.onResize();
    }
  }, {
    key: 'getWrapperTranslate',
    value: function getWrapperTranslate() {
      var axis = arguments.length <= 0 || arguments[0] === undefined ? 'x' : arguments[0];

      return this.swipe.getWrapperTranslate(axis);
    }
  }, {
    key: 'setWrapperTranslate',
    value: function setWrapperTranslate(translate) {
      this.swipe.setWrapperTranslate(translate);
    }
  }, {
    key: 'disableMousewheelControl',
    value: function disableMousewheelControl() {
      this.swipe.disableMousewheelControl();
    }
  }, {
    key: 'enableMousewheelControl',
    value: function enableMousewheelControl() {
      this.swipe.enableMousewheelControl();
    }
  }, {
    key: 'disableKeyboardControl',
    value: function disableKeyboardControl() {
      this.swipe.disableKeyboardControl();
    }
  }, {
    key: 'enableKeyboardControl',
    value: function enableKeyboardControl() {
      this.swipe.enableKeyboardControl();
    }
  }, {
    key: 'slideTo',
    value: function slideTo(index) {
      var speed = arguments.length <= 1 || arguments[1] === undefined ? 1000 : arguments[1];
      var runCallbacks = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

      this.swipe.slideTo(index, speed, runCallbacks);
    }
  }, {
    key: 'startAutoplay',
    value: function startAutoplay() {
      this.swipe.startAutoplay();
    }
  }, {
    key: 'stopAutoplay',
    value: function stopAutoplay() {
      this.swipe.stopAutoplay();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var deleteInstance = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
      var cleanupStyles = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      this.swipe.destroy(deleteInstance, cleanupStyles);
    }
  }, {
    key: 'prev',
    value: function prev() {
      var runCallbacks = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
      var speed = arguments.length <= 1 || arguments[1] === undefined ? 1000 : arguments[1];

      this.swipe.slidePrev(runCallbacks, speed);
    }
  }, {
    key: 'next',
    value: function next() {
      var runCallbacks = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
      var speed = arguments.length <= 1 || arguments[1] === undefined ? 1000 : arguments[1];

      this.swipe.slideNext(runCallbacks, speed);
    }
  }, {
    key: 'removeSlide',
    value: function removeSlide(index) {
      this.swipe.removeSlide(index);
    }
  }, {
    key: 'removeAllSlides',
    value: function removeAllSlides() {
      this.swipe.removeAllSlides();
    }
  }, {
    key: 'updateContainerSize',
    value: function updateContainerSize() {
      this.swipe.updateContainerSize();
    }
  }, {
    key: 'updateSlidesSize',
    value: function updateSlidesSize() {
      this.swipe.updateSlidesSize();
    }
  }, {
    key: 'updateProgress',
    value: function updateProgress() {
      this.swipe.updateProgress();
    }
  }, {
    key: 'updatePagination',
    value: function updatePagination() {
      this.swipe.updatePagination();
    }
  }, {
    key: 'updateClasses',
    value: function updateClasses() {
      this.swipe.updateClasses();
    }
  }, {
    key: 'update',
    value: function update() {
      var updateTranslate = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

      this.swipe.update(updateTranslate);
    }
  }, {
    key: 'lockSwipes',
    value: function lockSwipes() {
      this.swipe.lockSwipes();
    }
  }, {
    key: 'unlockSwipes',
    value: function unlockSwipes() {
      this.swipe.unlockSwipes();
    }
  }, {
    key: 'lockSwipeToNext',
    value: function lockSwipeToNext() {
      this.swipe.lockSwipeToNext();
    }
  }, {
    key: 'lockSwipeToPrev',
    value: function lockSwipeToPrev() {
      this.swipe.lockSwipeToPrev();
    }
  }, {
    key: 'width',
    value: function width() {
      return this.swipe.width;
    }
  }, {
    key: 'activeIndex',
    value: function activeIndex() {
      return this.swipe.activeIndex;
    }
  }, {
    key: 'previousIndex',
    value: function previousIndex() {
      return this.swipe.previousIndex;
    }
  }, {
    key: 'height',
    value: function height() {
      return this.swipe.height;
    }
  }, {
    key: 'touches',
    value: function touches() {
      return this.swipe.touches;
    }
  }, {
    key: 'params',
    value: function params() {
      return this.swipe.params;
    }
  }, {
    key: 'container',
    value: function container() {
      return this.swipe.container;
    }
  }, {
    key: 'wrapper',
    value: function wrapper() {
      return this.swipe.wrapper;
    }
  }, {
    key: 'slides',
    value: function slides() {
      return this.swipe.slides;
    }
  }, {
    key: 'bullets',
    value: function bullets() {
      return this.swipe.bullets;
    }
  }, {
    key: 'translate',
    value: function translate() {
      return this.swipe.translate;
    }
  }, {
    key: 'progress',
    value: function progress() {
      return this.swipe.progress;
    }
  }, {
    key: 'isBeginning',
    value: function isBeginning() {
      return this.swipe.isBeginning;
    }
  }, {
    key: 'autoplaying',
    value: function autoplaying() {
      return this.swipe.autoplaying;
    }
  }, {
    key: 'animating',
    value: function animating() {
      return this.swipe.animating;
    }
  }, {
    key: 'clickedIndex',
    value: function clickedIndex() {
      return this.swipe.clickedIndex;
    }
  }, {
    key: 'clickedSlide',
    value: function clickedSlide() {
      return this.swipe.clickedSlide;
    }
  }, {
    key: 'prevButton',
    value: function prevButton() {
      return this.swipe.prevButton;
    }
  }, {
    key: 'nextButton',
    value: function nextButton() {
      return this.swipe.nextButton;
    }
  }, {
    key: 'isEnd',
    value: function isEnd() {
      return this.swipe.isEnd;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var swipeOptions = _props.swipeOptions;
      var style = _props.style;
      var className = _props.className;

      var containerStyle = style || {};
      var containerClassName = className ? className + ' swiper-container' : 'swiper-container';
      return _react2.default.createElement(
        'div',
        { className: containerClassName, style: containerStyle, ref: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'swiper-wrapper' },
          _react2.default.Children.map(children, function (child) {
            var childClassName = child.props.className ? child.props.className + ' swiper-slide' : ' swiper-slide';
            var childStyle = child.props.style || {};
            return _react2.default.cloneElement(child, { className: childClassName, style: childStyle });
          })
        ),
        pagination(swipeOptions.pagination),
        navigationButton(swipeOptions.prevButton, swipeOptions.nextButton),
        scrollBar(swipeOptions.scrollbar)
      );
    }
  }]);

  return ReactSwiper;
}(_react2.default.Component);

if (process.env.NODE_ENV !== 'production') {
  ReactSwiper.propTypes = {
    children: _react2.default.PropTypes.any.isRequired,
    swipeOptions: _react2.default.PropTypes.object,
    style: _react2.default.PropTypes.object,
    className: _react2.default.PropTypes.string
  };
}

exports.default = ReactSwiper;

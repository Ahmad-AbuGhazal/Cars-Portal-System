(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("swiper"));
	else if(typeof define === 'function' && define.amd)
		define("ReactSwiper", ["react", "swiper"], factory);
	else if(typeof exports === 'object')
		exports["ReactSwiper"] = factory(require("react"), require("swiper"));
	else
		root["ReactSwiper"] = factory(root["React"], root["Swiper"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _swiper = __webpack_require__(3);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }
/******/ ])
});
;
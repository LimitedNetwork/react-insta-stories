(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("Stories", ["React"], factory);
	else if(typeof exports === 'object')
		exports["Stories"] = factory(require("react"));
	else
		root["Stories"] = factory(root["React"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__156__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 60:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["styles"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    width: "44",
    height: "44",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#fff"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    strokeWidth: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "22",
    cy: "22",
    r: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "0s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "22",
    cy: "22",
    r: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "r",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  }))));
});

/***/ }),

/***/ 723:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importStar(__webpack_require__(156));
var Global_1 = __importDefault(__webpack_require__(606));
var Stories_1 = __importDefault(__webpack_require__(848));
var Progress_1 = __importDefault(__webpack_require__(66));
var Story_1 = __importDefault(__webpack_require__(353));
var ProgressArray_1 = __importDefault(__webpack_require__(658));
var use_is_mounted_1 = __importDefault(__webpack_require__(645));
var usePreLoader_1 = __webpack_require__(43);
function default_1() {
  var _ref = (0, react_1.useState)(0),
    _ref2 = _slicedToArray(_ref, 2),
    currentId = _ref2[0],
    setCurrentId = _ref2[1];
  var _ref3 = (0, react_1.useState)(true),
    _ref4 = _slicedToArray(_ref3, 2),
    pause = _ref4[0],
    setPause = _ref4[1];
  var _ref5 = (0, react_1.useState)(true),
    _ref6 = _slicedToArray(_ref5, 2),
    bufferAction = _ref6[0],
    setBufferAction = _ref6[1];
  var _ref7 = (0, react_1.useState)(0),
    _ref8 = _slicedToArray(_ref7, 2),
    videoDuration = _ref8[0],
    setVideoDuration = _ref8[1];
  var isMounted = (0, use_is_mounted_1["default"])();
  var mousedownId = (0, react_1.useRef)();
  var _ref9 = (0, react_1.useContext)(Global_1["default"]),
    width = _ref9.width,
    height = _ref9.height,
    loop = _ref9.loop,
    currentIndex = _ref9.currentIndex,
    isPaused = _ref9.isPaused,
    keyboardNavigation = _ref9.keyboardNavigation,
    preventDefault = _ref9.preventDefault,
    _ref9$storyContainerS = _ref9.storyContainerStyles,
    storyContainerStyles = _ref9$storyContainerS === void 0 ? {} : _ref9$storyContainerS,
    onAllStoriesEnd = _ref9.onAllStoriesEnd,
    onPrevious = _ref9.onPrevious,
    onNext = _ref9.onNext,
    preloadCount = _ref9.preloadCount;
  var _ref10 = (0, react_1.useContext)(Stories_1["default"]),
    stories = _ref10.stories;
  (0, usePreLoader_1.usePreLoader)(stories, currentId, preloadCount);
  (0, react_1.useEffect)(function () {
    if (typeof currentIndex === "number") {
      if (currentIndex >= 0 && currentIndex < stories.length) {
        setCurrentIdWrapper(function () {
          return currentIndex;
        });
      } else {
        console.error("Index out of bounds. Current index was set to value more than the length of stories array.", currentIndex);
      }
    }
  }, [currentIndex]);
  (0, react_1.useEffect)(function () {
    if (typeof isPaused === "boolean") {
      setPause(isPaused);
    }
  }, [isPaused]);
  (0, react_1.useEffect)(function () {
    var isClient = typeof window !== "undefined" && window.document;
    if (isClient && typeof keyboardNavigation === "boolean" && keyboardNavigation) {
      document.addEventListener("keydown", handleKeyDown);
      return function () {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [keyboardNavigation]);
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === "ArrowLeft") {
      previous();
    } else if (e.key === "ArrowRight") {
      next({
        isSkippedByUser: true
      });
    }
  };
  var toggleState = function toggleState(action, bufferAction) {
    setPause(action === "pause");
    setBufferAction(!!bufferAction);
  };
  var setCurrentIdWrapper = function setCurrentIdWrapper(callback) {
    setCurrentId(callback);
    toggleState("pause", true);
  };
  var previous = function previous() {
    if (onPrevious != undefined) {
      onPrevious();
    }
    setCurrentIdWrapper(function (prev) {
      return prev > 0 ? prev - 1 : prev;
    });
  };
  var next = function next(options) {
    if (onNext != undefined && (options === null || options === void 0 ? void 0 : options.isSkippedByUser)) {
      onNext();
    }
    // Check if component is mounted - for issue #130 (https://github.com/mohitk05/react-insta-stories/issues/130)
    if (isMounted()) {
      if (loop) {
        updateNextStoryIdForLoop();
      } else {
        updateNextStoryId();
      }
    }
  };
  var updateNextStoryIdForLoop = function updateNextStoryIdForLoop() {
    setCurrentIdWrapper(function (prev) {
      if (prev >= stories.length - 1) {
        onAllStoriesEnd && onAllStoriesEnd(currentId, stories);
      }
      return (prev + 1) % stories.length;
    });
  };
  var updateNextStoryId = function updateNextStoryId() {
    setCurrentIdWrapper(function (prev) {
      if (prev < stories.length - 1) return prev + 1;
      onAllStoriesEnd && onAllStoriesEnd(currentId, stories);
      return prev;
    });
  };
  var debouncePause = function debouncePause(e) {
    e.preventDefault();
    mousedownId.current = setTimeout(function () {
      toggleState("pause");
    }, 200);
  };
  var mouseUp = function mouseUp(type) {
    return function (e) {
      e.preventDefault();
      mousedownId.current && clearTimeout(mousedownId.current);
      if (pause) {
        toggleState("play");
      } else {
        type === "next" ? next({
          isSkippedByUser: true
        }) : previous();
      }
    };
  };
  var getVideoDuration = function getVideoDuration(duration) {
    setVideoDuration(duration * 1000);
  };
  var divRef = (0, react_1.useRef)(null);
  var handleClick = function handleClick(event) {
    var divWidth = divRef.current.getBoundingClientRect().width;
    var halfDivWidth = divWidth / 2;
    var mouseXPos = event.nativeEvent.offsetX;
    if (mouseXPos <= halfDivWidth) {
      mouseUp("previous")(event);
    } else {
      mouseUp("next")(event);
    }
  };
  return react_1["default"].createElement("div", Object.assign({
    style: Object.assign(Object.assign(Object.assign({}, styles.container), storyContainerStyles), {
      width: width,
      height: height
    })
  }, !preventDefault && {
    onTouchStart: debouncePause,
    onTouchEnd: function onTouchEnd(event) {
      return handleClick(event);
    },
    onMouseDown: debouncePause,
    onMouseUp: function onMouseUp(event) {
      return handleClick(event);
    }
  }, {
    ref: divRef
  }), react_1["default"].createElement(Progress_1["default"].Provider, {
    value: {
      bufferAction: bufferAction,
      videoDuration: videoDuration,
      currentId: currentId,
      pause: pause,
      next: next
    }
  }, react_1["default"].createElement(ProgressArray_1["default"], null)), react_1["default"].createElement(Story_1["default"], {
    action: toggleState,
    bufferAction: bufferAction,
    playState: pause,
    story: stories[currentId],
    getVideoDuration: getVideoDuration
  }));
}
exports["default"] = default_1;
var styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    background: "#111",
    position: "relative",
    WebkitUserSelect: 'none'
  },
  overlay: {
    position: "absolute",
    height: "inherit",
    width: "inherit",
    display: "flex"
  }
};

/***/ }),

/***/ 483:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(156));
var Header = function Header(_ref) {
  var profileImage = _ref.profileImage,
    heading = _ref.heading,
    subheading = _ref.subheading;
  return react_1["default"].createElement("div", {
    style: styles.main
  }, profileImage && react_1["default"].createElement("img", {
    style: styles.img,
    src: profileImage
  }), react_1["default"].createElement("span", {
    style: styles.text
  }, react_1["default"].createElement("p", {
    style: styles.heading
  }, heading), react_1["default"].createElement("p", {
    style: styles.subheading
  }, subheading)));
};
var styles = {
  main: {
    display: "flex",
    alignItems: "center"
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
    filter: "drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))",
    border: "2px solid rgba(255, 255, 255, 0.8)"
  },
  text: {
    display: "flex",
    flexDirection: "column",
    filter: "drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))"
  },
  heading: {
    fontSize: "1rem",
    color: "rgba(255, 255, 255, 0.9)",
    margin: 0,
    marginBottom: 2
  },
  subheading: {
    fontSize: "0.6rem",
    color: "rgba(255, 255, 255, 0.8)",
    margin: 0
  }
};
exports["default"] = Header;

/***/ }),

/***/ 525:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importStar(__webpack_require__(156));
var ProgressWrapper_1 = __importDefault(__webpack_require__(976));
var Global_1 = __importDefault(__webpack_require__(606));
var Progress_1 = __importDefault(__webpack_require__(66));
exports["default"] = function (props) {
  var _ref = (0, react_1.useContext)(Global_1["default"]),
    progressStyles = _ref.progressStyles;
  var _ref2 = (0, react_1.useContext)(Progress_1["default"]),
    bufferAction = _ref2.bufferAction,
    pause = _ref2.pause;
  var getProgressStyle = function getProgressStyle(_ref3) {
    var active = _ref3.active;
    switch (active) {
      case 2:
        return {
          width: '100%'
        };
      case 1:
        return {
          transform: "scaleX(".concat(props.count / 100, ")")
        };
      case 0:
        return {
          width: 0
        };
      default:
        return {
          width: 0
        };
    }
  };
  var width = props.width,
    active = props.active;
  return react_1["default"].createElement(ProgressWrapper_1["default"], {
    width: width,
    pause: pause,
    bufferAction: bufferAction
  }, react_1["default"].createElement("div", {
    style: Object.assign(Object.assign(Object.assign({}, styles.inner), progressStyles), getProgressStyle({
      active: active
    }))
  }));
};
var styles = {
  inner: {
    background: '#fff',
    height: '100%',
    maxWidth: '100%',
    borderRadius: 2,
    transformOrigin: 'center left',
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    msBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    WebkitPerspective: 1000,
    MozPerspective: 1000,
    msPerspective: 1000,
    perspective: 1000
  }
};

/***/ }),

/***/ 658:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importStar(__webpack_require__(156));
var Progress_1 = __importDefault(__webpack_require__(525));
var Progress_2 = __importDefault(__webpack_require__(66));
var Global_1 = __importDefault(__webpack_require__(606));
var Stories_1 = __importDefault(__webpack_require__(848));
var time_1 = __webpack_require__(381);
exports["default"] = function () {
  var _ref = (0, react_1.useState)(0),
    _ref2 = _slicedToArray(_ref, 2),
    count = _ref2[0],
    setCount = _ref2[1];
  var lastTime = (0, react_1.useRef)();
  var _ref3 = (0, react_1.useContext)(Progress_2["default"]),
    currentId = _ref3.currentId,
    next = _ref3.next,
    videoDuration = _ref3.videoDuration,
    pause = _ref3.pause,
    bufferAction = _ref3.bufferAction;
  var _ref4 = (0, react_1.useContext)(Global_1["default"]),
    defaultInterval = _ref4.defaultInterval,
    onStoryEnd = _ref4.onStoryEnd,
    onStoryStart = _ref4.onStoryStart,
    progressContainerStyles = _ref4.progressContainerStyles;
  var _ref5 = (0, react_1.useContext)(Stories_1["default"]),
    stories = _ref5.stories;
  (0, react_1.useEffect)(function () {
    setCount(0);
  }, [currentId, stories]);
  (0, react_1.useEffect)(function () {
    if (!pause) {
      animationFrameId.current = requestAnimationFrame(_incrementCount);
      lastTime.current = (0, time_1.timestamp)();
    }
    return function () {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [currentId, pause]);
  var animationFrameId = (0, react_1.useRef)();
  var countCopy = count;
  var _incrementCount = function incrementCount() {
    if (countCopy === 0) storyStartCallback();
    if (lastTime.current == undefined) lastTime.current = (0, time_1.timestamp)();
    var t = (0, time_1.timestamp)();
    var dt = t - lastTime.current;
    lastTime.current = t;
    setCount(function (count) {
      var interval = getCurrentInterval();
      countCopy = count + dt * 100 / interval;
      return countCopy;
    });
    if (countCopy < 100) {
      animationFrameId.current = requestAnimationFrame(_incrementCount);
    } else {
      storyEndCallback();
      cancelAnimationFrame(animationFrameId.current);
      next();
    }
  };
  var storyStartCallback = function storyStartCallback() {
    onStoryStart && onStoryStart(currentId, stories[currentId]);
  };
  var storyEndCallback = function storyEndCallback() {
    onStoryEnd && onStoryEnd(currentId, stories[currentId]);
  };
  var getCurrentInterval = function getCurrentInterval() {
    if (stories[currentId].type === "video" && typeof stories[currentId].duration !== "number") return videoDuration;
    if (typeof stories[currentId].duration === "number") return stories[currentId].duration;
    return defaultInterval;
  };
  var opacityStyles = {
    opacity: pause && !bufferAction ? 0 : 1
  };
  return react_1["default"].createElement("div", {
    style: Object.assign(Object.assign(Object.assign({}, styles.progressArr), progressContainerStyles), opacityStyles)
  }, stories.map(function (_, i) {
    return react_1["default"].createElement(Progress_1["default"], {
      key: i,
      count: count,
      width: 1 / stories.length,
      active: i === currentId ? 1 : i < currentId ? 2 : 0
    });
  }));
};
var styles = {
  progressArr: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",
    flexWrap: "nowrap",
    position: "absolute",
    width: "98%",
    padding: 5,
    paddingTop: 7,
    alignSelf: "center",
    zIndex: 1001,
    filter: "drop-shadow(0 1px 8px #222)",
    transition: "opacity 400ms ease-in-out"
  }
};

/***/ }),

/***/ 976:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importStar(__webpack_require__(156));
var Global_1 = __importDefault(__webpack_require__(606));
var ProgressWrapper = function ProgressWrapper(props) {
  var _ref = (0, react_1.useContext)(Global_1["default"]),
    progressWrapperStyles = _ref.progressWrapperStyles;
  return react_1["default"].createElement("div", {
    style: Object.assign(Object.assign(Object.assign({}, styles.progress), progressWrapperStyles), getProgressWrapperStyle(props))
  }, props.children);
};
var getProgressWrapperStyle = function getProgressWrapperStyle(_ref2) {
  var width = _ref2.width;
  return {
    width: "".concat(width * 100, "%")
  };
};
var styles = {
  progress: {
    height: 2,
    maxWidth: '100%',
    background: '#555',
    margin: 2,
    borderRadius: 2,
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    msBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden'
  }
};
exports["default"] = ProgressWrapper;

/***/ }),

/***/ 624:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importStar(__webpack_require__(156));
var Global_1 = __importDefault(__webpack_require__(606));
function seeMore(props) {
  var SeeMoreContent = props.seeMoreContent;
  var CustomCollapsed = props.customCollapsed;
  var _ref = (0, react_1.useContext)(Global_1["default"]),
    keyboardNavigation = _ref.keyboardNavigation;
  (0, react_1.useEffect)(function () {
    var isClient = typeof window !== 'undefined' && window.document;
    if (isClient && typeof keyboardNavigation === 'boolean' && keyboardNavigation) {
      document.addEventListener("keydown", handleKeyDown);
      return function () {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [keyboardNavigation]);
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      props.toggleMore(true);
    } else if (e.key === 'ArrowDown' || e.key === 'Escape') {
      e.preventDefault();
      props.toggleMore(false);
    }
  };
  return props.showContent ? react_1["default"].createElement("div", {
    style: styles.seeMoreExpanded
  }, react_1["default"].createElement(SeeMoreContent, {
    close: function close() {
      return props.toggleMore(false);
    }
  })) : CustomCollapsed ? react_1["default"].createElement(CustomCollapsed, {
    action: props.action,
    toggleMore: props.toggleMore
  }) : react_1["default"].createElement("div", {
    style: styles.seeMore,
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      props.toggleMore(true);
    }
  }, react_1["default"].createElement("span", {
    style: styles.seeMoreIcon
  }, "\u2303"), react_1["default"].createElement("span", {
    style: styles.seeMoreText
  }, "See more"));
}
exports["default"] = seeMore;
var styles = {
  seeMore: {
    height: "10vh",
    background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2))",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    bottom: 0
  },
  seeMoreExpanded: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    zIndex: 99999
  },
  seeMoreText: {
    color: "white",
    textAlign: "center",
    letterSpacing: "0.1em",
    marginBottom: "2.2vh",
    textTransform: "capitalize",
    opacity: "1",
    fontSize: "0.8em",
    transition: "opacity 300ms ease-in-out"
  },
  seeMoreIcon: {
    color: "white",
    textAlign: "center",
    letterSpacing: "0.2em",
    marginBottom: "0.4vh",
    opacity: "1",
    filter: "drop-shadow(0 0 5px black)",
    textTransform: "capitalize",
    transition: "opacity 300ms ease-in-out"
  },
  seeMoreClose: {
    position: "absolute",
    filter: "drop-shadow(0 3px 2px #ccc)",
    right: "0.5rem",
    top: "0.5rem",
    fontSize: "1.5rem",
    opacity: "0.7",
    padding: "1rem"
  }
};

/***/ }),

/***/ 557:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(156));
var puff_svg_1 = __importDefault(__webpack_require__(60));
var Spinner = function Spinner() {
  return react_1["default"].createElement(puff_svg_1["default"], null);
};
exports["default"] = Spinner;

/***/ }),

/***/ 353:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importStar(__webpack_require__(156));
var Global_1 = __importDefault(__webpack_require__(606));
var Story = function Story(props) {
  var globalContext = (0, react_1.useContext)(Global_1["default"]);
  var width = globalContext.width,
    height = globalContext.height,
    loader = globalContext.loader,
    header = globalContext.header,
    storyStyles = globalContext.storyStyles,
    _globalContext$storyI = globalContext.storyInnerContainerStyles,
    storyInnerContainerStyles = _globalContext$storyI === void 0 ? {} : _globalContext$storyI;
  var rendererMessageHandler = function rendererMessageHandler(type, data) {
    switch (type) {
      case "UPDATE_VIDEO_DURATION":
        props.getVideoDuration(data.duration);
        return {
          ack: "OK"
        };
    }
  };
  var getStoryContent = function getStoryContent() {
    var InnerContent = props.story.content;
    var config = {
      width: width,
      height: height,
      loader: loader,
      header: header,
      storyStyles: storyStyles
    };
    return react_1["default"].createElement(InnerContent, {
      action: props.action,
      isPaused: props.playState,
      story: props.story,
      config: config,
      messageHandler: rendererMessageHandler
    });
  };
  return react_1["default"].createElement("div", {
    style: Object.assign(Object.assign(Object.assign({}, styles.story), storyInnerContainerStyles), {
      width: width,
      height: height
    })
  }, getStoryContent());
};
var styles = {
  story: {
    display: "flex",
    position: "relative",
    overflow: "hidden",
    alignItems: "center"
  },
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto"
  }
};
exports["default"] = Story;

/***/ }),

/***/ 606:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialContext = void 0;
var react_1 = __importDefault(__webpack_require__(156));
exports.initialContext = {
  defaultInterval: 4000,
  width: 360,
  height: 640
};
var GlobalContext = react_1["default"].createContext(exports.initialContext);
exports["default"] = GlobalContext;

/***/ }),

/***/ 66:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(156));
exports["default"] = react_1["default"].createContext({
  currentId: 0,
  videoDuration: 0,
  bufferAction: false,
  pause: false,
  next: function next() {}
});

/***/ }),

/***/ 848:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialContext = void 0;
var react_1 = __importDefault(__webpack_require__(156));
exports.initialContext = {
  stories: []
};
var StoriesContext = react_1["default"].createContext(exports.initialContext);
exports["default"] = StoriesContext;

/***/ }),

/***/ 363:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WithSeeMore = exports.WithHeader = void 0;
var react_1 = __importStar(__webpack_require__(156));
var Container_1 = __importDefault(__webpack_require__(723));
var Global_1 = __importDefault(__webpack_require__(606));
var Stories_1 = __importDefault(__webpack_require__(848));
var renderers_1 = __webpack_require__(26);
var index_1 = __webpack_require__(778);
var withHeader_1 = __importDefault(__webpack_require__(214));
var withSeeMore_1 = __importDefault(__webpack_require__(827));
var ReactInstaStories = function ReactInstaStories(_a) {
  var _a$width = _a.width,
    width = _a$width === void 0 ? 360 : _a$width,
    _a$height = _a.height,
    height = _a$height === void 0 ? 640 : _a$height,
    _a$defaultInterval = _a.defaultInterval,
    defaultInterval = _a$defaultInterval === void 0 ? 4000 : _a$defaultInterval,
    _a$preloadCount = _a.preloadCount,
    preloadCount = _a$preloadCount === void 0 ? 1 : _a$preloadCount,
    props = __rest(_a, ["width", "height", "defaultInterval", "preloadCount"]);
  var renderers = props.renderers ? props.renderers.concat(index_1.renderers) : index_1.renderers;
  var context = {
    width: width,
    height: height,
    loader: props.loader,
    header: props.header,
    storyContainerStyles: props.storyContainerStyles,
    storyInnerContainerStyles: props.storyInnerContainerStyles,
    storyStyles: props.storyStyles,
    progressContainerStyles: props.progressContainerStyles,
    progressWrapperStyles: props.progressWrapperStyles,
    progressStyles: props.progressStyles,
    loop: props.loop,
    defaultInterval: defaultInterval,
    isPaused: props.isPaused,
    currentIndex: props.currentIndex,
    onStoryStart: props.onStoryStart,
    onStoryEnd: props.onStoryEnd,
    onAllStoriesEnd: props.onAllStoriesEnd,
    onNext: props.onNext,
    onPrevious: props.onPrevious,
    keyboardNavigation: props.keyboardNavigation,
    preventDefault: props.preventDefault,
    preloadCount: preloadCount
  };
  var _ref = (0, react_1.useState)({
      stories: generateStories(props.stories, renderers)
    }),
    _ref2 = _slicedToArray(_ref, 2),
    stories = _ref2[0],
    setStories = _ref2[1];
  (0, react_1.useEffect)(function () {
    setStories({
      stories: generateStories(props.stories, renderers)
    });
  }, [props.stories, props.renderers]);
  return react_1["default"].createElement(Global_1["default"].Provider, {
    value: context
  }, react_1["default"].createElement(Stories_1["default"].Provider, {
    value: stories
  }, react_1["default"].createElement(Container_1["default"], null)));
};
var generateStories = function generateStories(stories, renderers) {
  return stories.map(function (s) {
    var story = {};
    if (typeof s === 'string') {
      story.url = s;
      story.type = 'image';
    } else if (_typeof(s) === 'object') {
      story = Object.assign(story, s);
    }
    var renderer = (0, renderers_1.getRenderer)(story, renderers);
    story.originalContent = story.content;
    story.content = renderer;
    return story;
  });
};
exports.WithHeader = withHeader_1["default"];
exports.WithSeeMore = withSeeMore_1["default"];
exports["default"] = ReactInstaStories;

/***/ }),

/***/ 588:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.tester = exports.renderer = void 0;
var React = __importStar(__webpack_require__(156));
var renderer = function renderer(props) {
  React.useEffect(function () {
    props.action('play');
  }, [props.story]);
  var Content = props.story.originalContent;
  return React.createElement(Content, Object.assign({}, props));
};
exports.renderer = renderer;
var tester = function tester(story) {
  return {
    condition: !!story.content,
    priority: 2
  };
};
exports.tester = tester;
exports["default"] = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ 397:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.tester = exports.renderer = void 0;
var React = __importStar(__webpack_require__(156));
var renderer = function renderer(_ref) {
  var story = _ref.story,
    action = _ref.action;
  React.useEffect(function () {
    action("play");
  }, [story]);
  return React.createElement("div", {
    style: styles.storyContent
  }, React.createElement("p", {
    style: styles.text
  }, "This story could not be loaded."));
};
exports.renderer = renderer;
var styles = {
  storyContent: {
    width: "100%",
    maxHeight: "100%",
    margin: "auto"
  },
  text: {
    textAlign: "center",
    color: "white",
    width: "90%",
    margin: "auto"
  }
};
var tester = function tester() {
  return {
    condition: true,
    priority: 1
  };
};
exports.tester = tester;
exports["default"] = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ 137:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.tester = exports.renderer = void 0;
var React = __importStar(__webpack_require__(156));
var Spinner_1 = __importDefault(__webpack_require__(557));
var withHeader_1 = __importDefault(__webpack_require__(214));
var withSeeMore_1 = __importDefault(__webpack_require__(827));
var renderer = function renderer(_ref) {
  var story = _ref.story,
    action = _ref.action,
    isPaused = _ref.isPaused,
    config = _ref.config;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    loaded = _React$useState2[0],
    setLoaded = _React$useState2[1];
  var width = config.width,
    height = config.height,
    loader = config.loader,
    storyStyles = config.storyStyles;
  var computedStyles = Object.assign(Object.assign({}, styles.storyContent), storyStyles || {});
  var imageLoaded = function imageLoaded() {
    setLoaded(true);
    action("play");
  };
  return React.createElement(withHeader_1["default"], Object.assign({}, {
    story: story,
    globalHeader: config.header
  }), React.createElement(withSeeMore_1["default"], Object.assign({}, {
    story: story,
    action: action
  }), React.createElement("div", null, React.createElement("img", {
    style: computedStyles,
    src: story.url,
    onLoad: imageLoaded
  }), !loaded && React.createElement("div", {
    style: {
      width: width,
      height: height,
      position: "absolute",
      left: 0,
      top: 0,
      background: "rgba(0, 0, 0, 0.9)",
      zIndex: 9,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ccc"
    }
  }, loader || React.createElement(Spinner_1["default"], null)))));
};
exports.renderer = renderer;
var styles = {
  story: {
    display: "flex",
    position: "relative",
    overflow: "hidden"
  },
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto"
  }
};
var tester = function tester(story) {
  return {
    condition: !story.content && (!story.type || story.type === "image"),
    priority: 2
  };
};
exports.tester = tester;
exports["default"] = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.tester = exports.renderer = void 0;
var React = __importStar(__webpack_require__(156));
var Spinner_1 = __importDefault(__webpack_require__(557));
var withHeader_1 = __importDefault(__webpack_require__(214));
var withSeeMore_1 = __importDefault(__webpack_require__(827));
var renderer = function renderer(_ref) {
  var story = _ref.story,
    action = _ref.action,
    isPaused = _ref.isPaused,
    config = _ref.config,
    messageHandler = _ref.messageHandler;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    loaded = _React$useState2[0],
    setLoaded = _React$useState2[1];
  var _React$useState3 = React.useState(story.muted || false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    muted = _React$useState4[0],
    setMuted = _React$useState4[1];
  var width = config.width,
    height = config.height,
    loader = config.loader,
    storyStyles = config.storyStyles;
  var computedStyles = Object.assign(Object.assign({}, styles.storyContent), storyStyles || {});
  var vid = React.useRef(null);
  React.useEffect(function () {
    if (vid.current) {
      if (isPaused) {
        vid.current.pause();
      } else {
        vid.current.play()["catch"](function () {});
      }
    }
  }, [isPaused]);
  var _onEnded = function onEnded(storyDuration) {
    var _a;
    if (vid.current && typeof storyDuration === "number") {
      vid.current.currentTime = 0;
      (_a = vid.current) === null || _a === void 0 ? void 0 : _a.play().then(function () {
        action("play", true);
      })["catch"](function () {
        var _a;
        setMuted(true);
        (_a = vid.current) === null || _a === void 0 ? void 0 : _a.play()["finally"](function () {
          action("play", true);
        });
      });
    }
  };
  var onWaiting = function onWaiting() {
    var _a, _b;
    if (((_a = vid.current) === null || _a === void 0 ? void 0 : _a.currentTime) === ((_b = vid.current) === null || _b === void 0 ? void 0 : _b.duration)) {
      action("pause", true);
    }
  };
  var onPlaying = function onPlaying() {
    action("play", true);
  };
  var videoLoaded = function videoLoaded() {
    messageHandler("UPDATE_VIDEO_DURATION", {
      duration: vid.current.duration
    });
    setLoaded(true);
    vid.current.play().then(function () {
      action("play");
    })["catch"](function () {
      setMuted(true);
      vid.current.play()["finally"](function () {
        action("play");
      });
    });
  };
  return React.createElement(withHeader_1["default"], Object.assign({}, {
    story: story,
    globalHeader: config.header
  }), React.createElement(withSeeMore_1["default"], Object.assign({}, {
    story: story,
    action: action
  }), React.createElement("div", {
    style: styles.videoContainer
  }, React.createElement("video", {
    ref: vid,
    style: computedStyles,
    src: story.url,
    controls: false,
    onLoadedData: videoLoaded,
    playsInline: true,
    onWaiting: onWaiting,
    onPlaying: onPlaying,
    onEnded: function onEnded() {
      return _onEnded(story.duration);
    },
    muted: muted,
    autoPlay: true,
    "webkit-playsinline": "true"
  }), !loaded && React.createElement("div", {
    style: {
      width: width,
      height: height,
      position: "absolute",
      left: 0,
      top: 0,
      background: "rgba(0, 0, 0, 0.9)",
      zIndex: 9,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ccc"
    }
  }, loader || React.createElement(Spinner_1["default"], null)))));
};
exports.renderer = renderer;
var styles = {
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto"
  },
  videoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};
var tester = function tester(story) {
  return {
    condition: story.type === "video",
    priority: 2
  };
};
exports.tester = tester;
exports["default"] = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ 778:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.renderers = void 0;
var Image_1 = __importDefault(__webpack_require__(137));
var Video_1 = __importDefault(__webpack_require__(879));
var Default_1 = __importDefault(__webpack_require__(397));
var AutoPlayContent_1 = __importDefault(__webpack_require__(588));
exports.renderers = [Image_1["default"], Video_1["default"], AutoPlayContent_1["default"], Default_1["default"]];

/***/ }),

/***/ 214:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(156));
var Header_1 = __importDefault(__webpack_require__(483));
var withHeader = function withHeader(_ref) {
  var story = _ref.story,
    globalHeader = _ref.globalHeader,
    children = _ref.children;
  return react_1["default"].createElement(react_1["default"].Fragment, null, children, story.header && react_1["default"].createElement("div", {
    style: {
      position: "absolute",
      zIndex: 1000
    }
  }, _typeof(story) === "object" ? globalHeader ? globalHeader(story.header) : react_1["default"].createElement(Header_1["default"], {
    heading: story.header.heading,
    subheading: story.header.subheading,
    profileImage: story.header.profileImage
  }) : null));
};
exports["default"] = withHeader;

/***/ }),

/***/ 827:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importStar(__webpack_require__(156));
var SeeMore_1 = __importDefault(__webpack_require__(624));
var withSeeMore = function withSeeMore(_ref) {
  var story = _ref.story,
    action = _ref.action,
    customCollapsed = _ref.customCollapsed,
    children = _ref.children;
  var _ref2 = (0, react_1.useState)(false),
    _ref3 = _slicedToArray(_ref2, 2),
    showMore = _ref3[0],
    setShowMore = _ref3[1];
  var toggleMore = function toggleMore(show) {
    action(show ? "pause" : "play");
    setShowMore(show);
  };
  var CollapsedComponent = SeeMore_1["default"];
  return react_1["default"].createElement(react_1["default"].Fragment, null, children, story.seeMore && react_1["default"].createElement("div", {
    style: {
      position: "absolute",
      margin: "auto",
      bottom: showMore ? "unset" : 0,
      zIndex: 9999,
      width: "100%",
      height: showMore ? "100%" : "auto"
    }
  }, react_1["default"].createElement(CollapsedComponent, {
    action: action,
    toggleMore: toggleMore,
    showContent: showMore,
    seeMoreContent: story.seeMore,
    customCollapsed: customCollapsed || story.seeMoreCollapsed
  })));
};
exports["default"] = withSeeMore;

/***/ }),

/***/ 26:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getRenderer = void 0;
var getRenderer = function getRenderer(story, renderers) {
  var probable = renderers.map(function (r) {
    return Object.assign(Object.assign({}, r), {
      testerResult: r.tester(story)
    });
  }).filter(function (r) {
    return r.testerResult.condition;
  });
  probable.sort(function (a, b) {
    return b.testerResult.priority - a.testerResult.priority;
  });
  return probable[0].renderer;
};
exports.getRenderer = getRenderer;

/***/ }),

/***/ 381:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.timestamp = void 0;
function timestamp() {
  return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}
exports.timestamp = timestamp;

/***/ }),

/***/ 645:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __webpack_require__(156);
function useIsMounted() {
  var isMounted = (0, react_1.useRef)(false);
  (0, react_1.useEffect)(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);
  return (0, react_1.useCallback)(function () {
    return isMounted.current;
  }, []);
}
exports["default"] = useIsMounted;

/***/ }),

/***/ 43:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.usePreLoader = void 0;
var react_1 = __webpack_require__(156);
// Caches given Story[] using HTMLImageElement and HTMLVideoElement
var cacheContent = function cacheContent(contents) {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var promises;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          promises = contents.map(function (content) {
            return new Promise(function (resolve, reject) {
              if (!content.url) return;
              if (content.type === 'video') {
                var video = document.createElement('video');
                video.src = content.url;
                video.onloadeddata = resolve;
                video.onerror = reject;
                return;
              }
              var img = new Image();
              img.src = content.url;
              img.onload = resolve;
              img.onerror = reject;
            });
          });
          _context.next = 3;
          return Promise.all(promises);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
};
// Keeps track of urls that have been loaded
var urlsLoaded = new Set();
// Pushes urls to urlsLoaded
var markUrlsLoaded = function markUrlsLoaded(contents) {
  contents.forEach(function (content) {
    urlsLoaded.add(content.url);
  });
};
// Returns true if given Story should be preloaded
var shouldPreload = function shouldPreload(content) {
  if (!content.url) return false;
  if (urlsLoaded.has(content.url)) return false;
  if (content.preloadResource !== undefined) return content.preloadResource;
  if (content.type === 'video') return false;
  return true;
};
// Preloads images and videos from given Story[] using a cursor and preloadCount
// Preload count is the number of images/videos to preload after the cursor
// Cursor is the current index to start preloading from
var usePreLoader = function usePreLoader(contents, cursor, preloadCount) {
  (0, react_1.useEffect)(function () {
    var start = cursor + 1;
    var end = cursor + preloadCount + 1;
    var toPreload = contents.slice(start, end).filter(shouldPreload);
    markUrlsLoaded(toPreload);
    cacheContent(toPreload);
  }, [cursor, preloadCount, contents]);
};
exports.usePreLoader = usePreLoader;

/***/ }),

/***/ 156:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__156__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(363);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
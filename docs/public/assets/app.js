/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				function onScriptComplete(event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "public/assets/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/front/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/front/Root.js":
/*!***************************!*\
  !*** ./src/front/Root.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/styles */ "./node_modules/material-ui/styles/index.js");
/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hoc_withMainLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hoc/withMainLayout */ "./src/front/hoc/withMainLayout/index.js");
/* harmony import */ var _routes_MainRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/MainRoutes */ "./src/front/routes/MainRoutes.js");
/* harmony import */ var _style_animations_fadeIn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/animations/fadeIn */ "./src/front/style/animations/fadeIn.js");
/* harmony import */ var _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./redux/store/configureStore */ "./src/front/redux/store/configureStore.js");
/* harmony import */ var _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_redux_store_configureStore__WEBPACK_IMPORTED_MODULE_8__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports










// #endregion

// #region style (global styles)
var styles = function styles(theme) {
  return {
    '@global': _extends({
      html: {
        background: theme.palette.background.default,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      },
      body: {
        margin: 0
      }
    }, _style_animations_fadeIn__WEBPACK_IMPORTED_MODULE_7__["default"])
  };
};
// #endregion

// #region constants
var App = recompose_compose__WEBPACK_IMPORTED_MODULE_3___default()(Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles), Object(_hoc_withMainLayout__WEBPACK_IMPORTED_MODULE_5__["default"])())(_routes_MainRoutes__WEBPACK_IMPORTED_MODULE_6__["default"]);
var store = _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_8___default()();
// #endregion

var Root = function (_Component) {
  _inherits(Root, _Component);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  _createClass(Root, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"],
        { store: store },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_router_redux__WEBPACK_IMPORTED_MODULE_1__["ConnectedRouter"],
          { history: _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_8__["history"] },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null)
        )
      );
    }
  }]);

  return Root;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./src/front/config/appConfig.js":
/*!***************************************!*\
  !*** ./src/front/config/appConfig.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// #endregion

// #region appConfig
var appConfig = {
  APP_NAME: 'reactMaterialNextStarter',

  // App Drawer:
  drawer: {
    width: 240,
    menus: [{ id: 1, title: 'Home', routeName: '/' }, { id: 2, title: 'About', routeName: 'about' }]
  },

  // sw path
  sw: {
    path: 'public/assets/sw.js'
  }
};
// #endregion

// #region flow types
/* harmony default export */ __webpack_exports__["default"] = (appConfig);

/***/ }),

/***/ "./src/front/hoc/withMainLayout/index.js":
/*!***********************************************!*\
  !*** ./src/front/hoc/withMainLayout/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withMainLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withMainLayout */ "./src/front/hoc/withMainLayout/withMainLayout.js");


// #region imports

// #endregion

/* harmony default export */ __webpack_exports__["default"] = (_withMainLayout__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/front/hoc/withMainLayout/styles.js":
/*!************************************************!*\
  !*** ./src/front/hoc/withMainLayout/styles.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/appConfig */ "./src/front/config/appConfig.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region imports

// #endregion

// #region constants
var drawerWidth = _config_appConfig__WEBPACK_IMPORTED_MODULE_0__["default"].drawer.width;
// #endregion

// #region styles

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      height: '100vh',
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: 'calc(100% - ' + drawerWidth + 'px)',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36
    },
    hide: {
      display: 'none'
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaperClose: _defineProperty({
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing.unit * 7
    }, theme.breakpoints.up('sm'), {
      width: theme.spacing.unit * 9
    }),
    toolbar: _extends({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px'
    }, theme.mixins.toolbar),
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3
    }
  };
};
// #endregion

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/front/hoc/withMainLayout/withMainLayout.js":
/*!********************************************************!*\
  !*** ./src/front/hoc/withMainLayout/withMainLayout.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose/wrapDisplayName */ "./node_modules/recompose/wrapDisplayName.js");
/* harmony import */ var recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Toolbar */ "./node_modules/material-ui/Toolbar/index.js");
/* harmony import */ var material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui/AppBar */ "./node_modules/material-ui/AppBar/index.js");
/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_AppBar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var material_ui_Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/Drawer */ "./node_modules/material-ui/Drawer/index.js");
/* harmony import */ var material_ui_Drawer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_Drawer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! material-ui/Typography */ "./node_modules/material-ui/Typography/index.js");
/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var material_ui_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! material-ui/Divider */ "./node_modules/material-ui/Divider/index.js");
/* harmony import */ var material_ui_Divider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_ui_Divider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! material-ui/IconButton */ "./node_modules/material-ui/IconButton/index.js");
/* harmony import */ var material_ui_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(material_ui_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! material-ui/styles */ "./node_modules/material-ui/styles/index.js");
/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../config/appConfig */ "./src/front/config/appConfig.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styles */ "./src/front/hoc/withMainLayout/styles.js");
/* harmony import */ var _utils_sw_registerServiceWorker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/sw/registerServiceWorker */ "./src/front/utils/sw/registerServiceWorker.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports







// import List from 'material-ui/List';








// import { withTheme } from 'material-ui/styles';




// #endregion

// #region flow types

// #endregion

// #region constants
var menus = _config_appConfig__WEBPACK_IMPORTED_MODULE_14__["default"].drawer.menus;
var APP_NAME = _config_appConfig__WEBPACK_IMPORTED_MODULE_14__["default"].APP_NAME;
// #endregion

// #region withMainLayout HOC

function withMainLayout() {
  return function (BaseComponent) {
    // #region returned Component
    var WithMainLayout = function (_Component) {
      _inherits(WithMainLayout, _Component);

      function WithMainLayout() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WithMainLayout);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WithMainLayout.__proto__ || Object.getPrototypeOf(WithMainLayout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          appName: APP_NAME,
          drawerOpened: false,
          drawerMenus: menus
        }, _this.toggleDrawer = function () {
          return _this.setState(function (_ref2) {
            var prevDrawerOpened = _ref2.drawerOpened;
            return {
              drawerOpened: !prevDrawerOpened
            };
          });
        }, _this.handleDrawerOpen = function () {
          _this.setState({ drawerOpened: true });
        }, _this.handleDrawerClose = function () {
          _this.setState({ drawerOpened: false });
        }, _this.routeTo = function (routeName) {
          return function (event) {
            if (event) {
              event.preventDefault();
            }
            var history = _this.props.history;

            history.push({ pathname: routeName });
          };
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(WithMainLayout, [{
        key: 'componentDidMount',


        // #region lifecycle
        value: function componentDidMount() {
          // register service worker (no worry about multiple attempts to register, browser will ignore when already registered)
          Object(_utils_sw_registerServiceWorker__WEBPACK_IMPORTED_MODULE_16__["default"])();
        }
      }, {
        key: 'render',

        // #endregion
        value: function render() {
          var _state = this.state,
              drawerOpened = _state.drawerOpened,
              appName = _state.appName;
          /* eslint-disable no-unused-vars */

          var _props = this.props,
              classes = _props.classes,
              history = _props.history,
              location = _props.location,
              match = _props.match,
              passProps = _objectWithoutProperties(_props, ['classes', 'history', 'location', 'match']);
          /* eslint-enable no-unused-vars */

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: classes.root },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              material_ui_AppBar__WEBPACK_IMPORTED_MODULE_6___default.a,
              {
                position: 'absolute',
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.appBar, this.state.open && classes.appBarShift)
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                material_ui_Toolbar__WEBPACK_IMPORTED_MODULE_5___default.a,
                { disableGutters: !drawerOpened },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  material_ui_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a,
                  {
                    color: 'inherit',
                    'aria-label': 'open drawer',
                    onClick: this.handleDrawerOpen,
                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.menuButton, this.state.open && classes.hide)
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, null)
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  material_ui_Typography__WEBPACK_IMPORTED_MODULE_8___default.a,
                  { variant: 'title', color: 'inherit', noWrap: true },
                  appName
                )
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              material_ui_Drawer__WEBPACK_IMPORTED_MODULE_7___default.a,
              {
                variant: 'permanent',
                classes: {
                  paper: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
                },
                open: this.state.open
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: classes.toolbar },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  material_ui_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a,
                  { onClick: this.handleDrawerClose },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_12___default.a, null)
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Divider__WEBPACK_IMPORTED_MODULE_9___default.a, null),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Divider__WEBPACK_IMPORTED_MODULE_9___default.a, null)
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'main',
              { className: classes.content },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: classes.toolbar }),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseComponent, passProps)
            )
          );
        }
        // #endregion

        // #region drawer toggle

        // #endregion

        // #region route to click

      }]);

      return WithMainLayout;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
    // #endregion

    // #region add static displayName for dev
    /* eslint-disable no-process-env */


    if (true) {
      // HOC would obfuscate component name, this trick is helpful for dev (we don't care in production)
      WithMainLayout.displayName = recompose_wrapDisplayName__WEBPACK_IMPORTED_MODULE_1___default()(BaseComponent, 'withMainLayout');
    }
    /* eslint-enable no-process-env */
    // #endregion

    return recompose_compose__WEBPACK_IMPORTED_MODULE_3___default()(react_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"], Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_13__["withStyles"])(_styles__WEBPACK_IMPORTED_MODULE_15__["default"]))(WithMainLayout);
  };
}
// #endregion

/* harmony default export */ __webpack_exports__["default"] = (withMainLayout);

/***/ }),

/***/ "./src/front/index.js":
/*!****************************!*\
  !*** ./src/front/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tap-event-plugin */ "./node_modules/react-tap-event-plugin/src/injectTapEventPlugin.js");
/* harmony import */ var react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/styles */ "./node_modules/material-ui/styles/index.js");
/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/theme */ "./src/front/style/theme/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Root */ "./src/front/Root.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_8__);


// #region imports









// #endregion

// #region smoothscroll polyfill
smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3___default.a.polyfill();
// force polyfill (even if browser partially implements it)
window.__forceSmoothScrollPolyfill__ = true;
// #endregion

var ELEMENT_TO_BOOTSTRAP = 'root';
var bootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);

react_tap_event_plugin__WEBPACK_IMPORTED_MODULE_2___default()();

var renderApp = function renderApp(RootComponent) {
  var Application = function Application() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_hot_loader__WEBPACK_IMPORTED_MODULE_6__["AppContainer"],
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["MuiThemeProvider"],
        { theme: _style_theme__WEBPACK_IMPORTED_MODULE_5__["default"] },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RootComponent, null)
      )
    );
  };

  if (bootstrapedElement.hasChildNodes()) {
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["hydrate"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Application, null), bootstrapedElement);
  } else {
    Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Application, null), bootstrapedElement);
  }
};

renderApp(_Root__WEBPACK_IMPORTED_MODULE_7__["default"]);

if (false) {}

/***/ }),

/***/ "./src/front/redux/modules/reducers.js":
/*!*********************************************!*\
  !*** ./src/front/redux/modules/reducers.js ***!
  \*********************************************/
/*! exports provided: reducers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var reducers = {
  // reducers here
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(_extends({}, reducers, {
  routing: react_router_redux__WEBPACK_IMPORTED_MODULE_0__["routerReducer"]
})));

/***/ }),

/***/ "./src/front/redux/store/configureStore.dev.js":
/*!*****************************************************!*\
  !*** ./src/front/redux/store/configureStore.dev.js ***!
  \*****************************************************/
/*! exports provided: history, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history/createBrowserHistory */ "./node_modules/history/createBrowserHistory.js");
/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/reducers */ "./src/front/redux/modules/reducers.js");


// #region imports




// #region import createHistory from hashHistory or BrowserHistory:
// import createHistory from 'history/createHashHistory';

// #endregion


// #endregion

// #region constants
var history = history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_4___default()();
// #endregion

// #region createStore : enhancer

// #region logger middleware (dev only)
var loggerMiddleware = Object(redux_logger__WEBPACK_IMPORTED_MODULE_1__["createLogger"])({
  level: 'info',
  collapsed: true
});
// #endregion

var enhancer = Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_5___default.a, Object(react_router_redux__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history), loggerMiddleware // logger at the end
));
// #endregion

function configureStore(initialState) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_modules_reducers__WEBPACK_IMPORTED_MODULE_6__["default"], initialState, enhancer);
  if (false) {}
  return store;
}

/***/ }),

/***/ "./src/front/redux/store/configureStore.js":
/*!*************************************************!*\
  !*** ./src/front/redux/store/configureStore.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {



/* eslint no-process-env:0 */
if (false) {} else {
  module.exports = __webpack_require__(/*! ./configureStore.dev */ "./src/front/redux/store/configureStore.dev.js");
}

/***/ }),

/***/ "./src/front/routes/MainRoutes.js":
/*!****************************************!*\
  !*** ./src/front/routes/MainRoutes.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/front/routes/routes.js");


// #region imports



// #endregion

console.log('');

var MainRoutes = function MainRoutes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"],
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: '/', component: _routes__WEBPACK_IMPORTED_MODULE_2__["Home"] }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: '/about', component: _routes__WEBPACK_IMPORTED_MODULE_2__["About"] }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], { component: _routes__WEBPACK_IMPORTED_MODULE_2__["PageNotFound"] })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (MainRoutes);

/***/ }),

/***/ "./src/front/routes/routes.js":
/*!************************************!*\
  !*** ./src/front/routes/routes.js ***!
  \************************************/
/*! exports provided: Home, About, PageNotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFound", function() { return PageNotFound; });
/* harmony import */ var loadable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loadable-components */ "./node_modules/loadable-components/dist/loadable-components.es.js");


// #region imports

// #endregion

var Home = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ../pages/home */ "./src/front/pages/home/index.js"));
}, {
  modules: ['../pages/home']
});
var About = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../pages/about */ "./src/front/pages/about/index.js"));
}, {
  modules: ['../pages/about']
});
var PageNotFound = Object(loadable_components__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors"), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ../pages/pageNotFound */ "./src/front/pages/pageNotFound/index.js"));
}, {
  modules: ['../pages/pageNotFound']
});

/***/ }),

/***/ "./src/front/style/animations/fadeIn.js":
/*!**********************************************!*\
  !*** ./src/front/style/animations/fadeIn.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


// #region constants
var DEFAULT_DURATION = '1s';
var DEFAULT_TIMING_FUNCTION = 'easeOut';
// #endregion

var fadeIn = {
  '@keyframes fadeIn': {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  fadeIn: {
    animation: {
      name: 'fadeIn',
      duration: DEFAULT_DURATION,
      timingFunction: DEFAULT_TIMING_FUNCTION
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (fadeIn);

/***/ }),

/***/ "./src/front/style/theme/index.js":
/*!****************************************!*\
  !*** ./src/front/style/theme/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! material-ui/styles */ "./node_modules/material-ui/styles/index.js");
/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var material_ui_colors_cyan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui/colors/cyan */ "./node_modules/material-ui/colors/cyan.js");
/* harmony import */ var material_ui_colors_cyan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_colors_cyan__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var material_ui_colors_pink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui/colors/pink */ "./node_modules/material-ui/colors/pink.js");
/* harmony import */ var material_ui_colors_pink__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_colors_pink__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var material_ui_colors_grey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/colors/grey */ "./node_modules/material-ui/colors/grey.js");
/* harmony import */ var material_ui_colors_grey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_colors_grey__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_ui_styles_spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/styles/spacing */ "./node_modules/material-ui/styles/spacing.js");
/* harmony import */ var material_ui_styles_spacing__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles_spacing__WEBPACK_IMPORTED_MODULE_4__);


// #region imports





// #endregion

// #region constants
var white = '#FFFFFF';
var darkBlack = '#222222';
var fullBlack = '#4A4A4A';
// #endregion

var theme = Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  spacing: material_ui_styles_spacing__WEBPACK_IMPORTED_MODULE_4___default.a,
  fontFamily: 'Roboto, sans-serif',
  direction: 'ltr',
  palette: {
    primary1Color: material_ui_colors_cyan__WEBPACK_IMPORTED_MODULE_1___default.a[500],
    primary2Color: material_ui_colors_cyan__WEBPACK_IMPORTED_MODULE_1___default.a[700],
    primary3Color: material_ui_colors_grey__WEBPACK_IMPORTED_MODULE_3___default.a[400],
    accent1Color: material_ui_colors_pink__WEBPACK_IMPORTED_MODULE_2___default.a.A200,
    accent2Color: material_ui_colors_grey__WEBPACK_IMPORTED_MODULE_3___default.a[100],
    accent3Color: material_ui_colors_grey__WEBPACK_IMPORTED_MODULE_3___default.a[500],
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: material_ui_colors_grey__WEBPACK_IMPORTED_MODULE_3___default.a[300],
    shadowColor: fullBlack
  }
  // appBar: {
  //   color: indigo[900],
  // },
  // zIndex: {
  //   appBar: 1300,
  //   leftNavOverlay: 1100,
  //   leftNav: 1200,
  // },
});

/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/front/utils/sw/registerServiceWorker.js":
/*!*****************************************************!*\
  !*** ./src/front/utils/sw/registerServiceWorker.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/appConfig */ "./src/front/config/appConfig.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// #region  imports

// #endregion

// #region constants
var swPath = _config_appConfig__WEBPACK_IMPORTED_MODULE_0__["default"].sw.path;
// #endregion

function registerServiceWorker() {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined) {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        // $FlowIgnore
        navigator.serviceWorker.register(swPath).then(function (registration) {
          console.log('SW registered: ', registration);
        }).catch(function (registrationError) {
          console.log('SW registration failed: ', registrationError);
        });
      });
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (registerServiceWorker);

/***/ })

/******/ });
//# sourceMappingURL=app.js.map
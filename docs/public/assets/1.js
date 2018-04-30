(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/front/pages/about/About.js":
/*!****************************************!*\
  !*** ./src/front/pages/about/About.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/styles */ "./node_modules/material-ui/styles/index.js");
/* harmony import */ var material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_ui_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui/Grid */ "./node_modules/material-ui/Grid/index.js");
/* harmony import */ var material_ui_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui/Card */ "./node_modules/material-ui/Card/index.js");
/* harmony import */ var material_ui_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_ui_Card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui/Typography */ "./node_modules/material-ui/Typography/index.js");
/* harmony import */ var material_ui_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_ui_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui/Button */ "./node_modules/material-ui/Button/index.js");
/* harmony import */ var material_ui_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_ui_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "./src/front/pages/about/styles.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports









// #endregion

// #region flow types

// #endregion

var About = function (_PureComponent) {
  _inherits(About, _PureComponent);

  function About() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, About);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = About.__proto__ || Object.getPrototypeOf(About)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      animated: true
    }, _this.routeToHome = function (event) {
      if (event) {
        event.preventDefault();
      }

      var history = _this.props.history;

      history.push({ pathname: '/' });
    }, _this.goPreviousRoute = function (event) {
      if (event) {
        event.preventDefault();
      }

      var history = _this.props.history;

      history.goBack();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var animated = this.state.animated;


      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'section',
        {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.pageContainer, classes.flexible, {
            fadeIn: animated
          })
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          material_ui_Grid__WEBPACK_IMPORTED_MODULE_4___default.a,
          { container: true, spacing: 24 },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            material_ui_Grid__WEBPACK_IMPORTED_MODULE_4___default.a,
            { item: true, xs: 12 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              material_ui_Card__WEBPACK_IMPORTED_MODULE_5___default.a,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_ui_Card__WEBPACK_IMPORTED_MODULE_5__["CardHeader"], { title: 'About' }),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                material_ui_Card__WEBPACK_IMPORTED_MODULE_5__["CardContent"],
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  material_ui_Typography__WEBPACK_IMPORTED_MODULE_6___default.a,
                  { variant: 'title', gutterBottom: true },
                  'About Page'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  material_ui_Typography__WEBPACK_IMPORTED_MODULE_6___default.a,
                  { variant: 'body2', gutterBottom: true },
                  'Just to POC routing'
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                material_ui_Card__WEBPACK_IMPORTED_MODULE_5__["CardActions"],
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  material_ui_Button__WEBPACK_IMPORTED_MODULE_7___default.a,
                  { onClick: this.goPreviousRoute },
                  'go previous'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(_styles__WEBPACK_IMPORTED_MODULE_8__["default"])(About));

/***/ }),

/***/ "./src/front/pages/about/index.js":
/*!****************************************!*\
  !*** ./src/front/pages/about/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About */ "./src/front/pages/about/About.js");


// #region imports

// #endregion

/* harmony default export */ __webpack_exports__["default"] = (_About__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/front/pages/about/styles.js":
/*!*****************************************!*\
  !*** ./src/front/pages/about/styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


// #region styles
var styles = {
  flexible: {
    flexGrow: 1
  },
  pageContainer: {
    margin: {
      top: '40px'
    }
  }
};
// #endregion

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ })

}]);
//# sourceMappingURL=1.js.map
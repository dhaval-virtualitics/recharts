"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartesianGrid = void 0;
var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));
var _react = _interopRequireWildcard(require("react"));
var _DataUtils = require("../util/DataUtils");
var _types = require("../util/types");
var _excluded = ["x1", "y1", "x2", "y2", "key"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CartesianGrid = /*#__PURE__*/function (_PureComponent) {
  _inherits(CartesianGrid, _PureComponent);
  var _super = _createSuper(CartesianGrid);
  function CartesianGrid() {
    _classCallCheck(this, CartesianGrid);
    return _super.apply(this, arguments);
  }
  _createClass(CartesianGrid, [{
    key: "renderHorizontal",
    value:
    /**
     * Draw the horizontal grid lines
     * @param {Array} horizontalPoints either passed in as props or generated from function
     * @return {Group} Horizontal lines
     */
    function renderHorizontal(horizontalPoints) {
      var _this = this;
      var _this$props = this.props,
        x = _this$props.x,
        width = _this$props.width,
        horizontal = _this$props.horizontal;
      if (!horizontalPoints || !horizontalPoints.length) {
        return null;
      }
      var items = horizontalPoints.map(function (entry, i) {
        var props = _objectSpread(_objectSpread({}, _this.props), {}, {
          x1: x,
          y1: entry,
          x2: x + width,
          y2: entry,
          key: "line-".concat(i),
          index: i
        });
        return CartesianGrid.renderLineItem(horizontal, props);
      });
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, items);
    }

    /**
     * Draw vertical grid lines
     * @param {Array} verticalPoints either passed in as props or generated from function
     * @return {Group} Vertical lines
     */
  }, {
    key: "renderVertical",
    value: function renderVertical(verticalPoints) {
      var _this2 = this;
      var _this$props2 = this.props,
        y = _this$props2.y,
        height = _this$props2.height,
        vertical = _this$props2.vertical;
      if (!verticalPoints || !verticalPoints.length) {
        return null;
      }
      var items = verticalPoints.map(function (entry, i) {
        var props = _objectSpread(_objectSpread({}, _this2.props), {}, {
          x1: entry,
          y1: y,
          x2: entry,
          y2: y + height,
          key: "line-".concat(i),
          index: i
        });
        return CartesianGrid.renderLineItem(vertical, props);
      });
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, items);
    }

    /**
     * Draw vertical grid stripes filled by colors
     * @param {Array} verticalPoints either passed in as props or generated from function
     * @return {Group} Vertical stripes
     */
  }, {
    key: "renderVerticalStripes",
    value: function renderVerticalStripes(verticalPoints) {
      var verticalFill = this.props.verticalFill;
      if (!verticalFill || !verticalFill.length) {
        return null;
      }
      var _this$props3 = this.props,
        fillOpacity = _this$props3.fillOpacity,
        x = _this$props3.x,
        y = _this$props3.y,
        width = _this$props3.width,
        height = _this$props3.height;
      var roundedSortedVerticalPoints = verticalPoints.map(function (e) {
        return Math.round(e + x - x);
      }).sort(function (a, b) {
        return a - b;
      });
      if (x !== roundedSortedVerticalPoints[0]) {
        roundedSortedVerticalPoints.unshift(0);
      }
      var items = roundedSortedVerticalPoints.map(function (entry, i) {
        var lastStripe = !roundedSortedVerticalPoints[i + 1];
        var lineWidth = lastStripe ? x + width - entry : roundedSortedVerticalPoints[i + 1] - entry;
        if (lineWidth <= 0) {
          return null;
        }
        var colorIndex = i % verticalFill.length;
        return /*#__PURE__*/_react["default"].createElement("rect", {
          key: "react-".concat(i) // eslint-disable-line react/no-array-index-key
          ,
          x: entry,
          y: y,
          width: lineWidth,
          height: height,
          stroke: "none",
          fill: verticalFill[colorIndex],
          fillOpacity: fillOpacity,
          className: "recharts-cartesian-grid-bg"
        });
      });
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, items);
    }

    /**
     * Draw horizontal grid stripes filled by colors
     * @param {Array} horizontalPoints either passed in as props or generated from function
     * @return {Group} Horizontal stripes
     */
  }, {
    key: "renderHorizontalStripes",
    value: function renderHorizontalStripes(horizontalPoints) {
      var horizontalFill = this.props.horizontalFill;
      if (!horizontalFill || !horizontalFill.length) {
        return null;
      }
      var _this$props4 = this.props,
        fillOpacity = _this$props4.fillOpacity,
        x = _this$props4.x,
        y = _this$props4.y,
        width = _this$props4.width,
        height = _this$props4.height;
      var roundedSortedHorizontalPoints = horizontalPoints.map(function (e) {
        return Math.round(e + y - y);
      }).sort(function (a, b) {
        return a - b;
      });
      if (y !== roundedSortedHorizontalPoints[0]) {
        roundedSortedHorizontalPoints.unshift(0);
      }
      var items = roundedSortedHorizontalPoints.map(function (entry, i) {
        var lastStripe = !roundedSortedHorizontalPoints[i + 1];
        var lineHeight = lastStripe ? y + height - entry : roundedSortedHorizontalPoints[i + 1] - entry;
        if (lineHeight <= 0) {
          return null;
        }
        var colorIndex = i % horizontalFill.length;
        return /*#__PURE__*/_react["default"].createElement("rect", {
          key: "react-".concat(i) // eslint-disable-line react/no-array-index-key
          ,
          y: entry,
          x: x,
          height: lineHeight,
          width: width,
          stroke: "none",
          fill: horizontalFill[colorIndex],
          fillOpacity: fillOpacity,
          className: "recharts-cartesian-grid-bg"
        });
      });
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, items);
    }
  }, {
    key: "renderBackground",
    value: function renderBackground() {
      var fill = this.props.fill;
      if (!fill || fill === 'none') {
        return null;
      }
      var _this$props5 = this.props,
        fillOpacity = _this$props5.fillOpacity,
        x = _this$props5.x,
        y = _this$props5.y,
        width = _this$props5.width,
        height = _this$props5.height;
      return /*#__PURE__*/_react["default"].createElement("rect", {
        x: x,
        y: y,
        width: width,
        height: height,
        stroke: "none",
        fill: fill,
        fillOpacity: fillOpacity,
        className: "recharts-cartesian-grid-bg"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
        x = _this$props6.x,
        y = _this$props6.y,
        width = _this$props6.width,
        height = _this$props6.height,
        horizontal = _this$props6.horizontal,
        vertical = _this$props6.vertical,
        horizontalCoordinatesGenerator = _this$props6.horizontalCoordinatesGenerator,
        verticalCoordinatesGenerator = _this$props6.verticalCoordinatesGenerator,
        xAxis = _this$props6.xAxis,
        yAxis = _this$props6.yAxis,
        offset = _this$props6.offset,
        chartWidth = _this$props6.chartWidth,
        chartHeight = _this$props6.chartHeight;
      if (!(0, _DataUtils.isNumber)(width) || width <= 0 || !(0, _DataUtils.isNumber)(height) || height <= 0 || !(0, _DataUtils.isNumber)(x) || x !== +x || !(0, _DataUtils.isNumber)(y) || y !== +y) {
        return null;
      }
      var _this$props7 = this.props,
        horizontalPoints = _this$props7.horizontalPoints,
        verticalPoints = _this$props7.verticalPoints;

      // No horizontal points are specified
      if ((!horizontalPoints || !horizontalPoints.length) && (0, _isFunction2["default"])(horizontalCoordinatesGenerator)) {
        horizontalPoints = horizontalCoordinatesGenerator({
          yAxis: yAxis,
          width: chartWidth,
          height: chartHeight,
          offset: offset
        });
      }

      // No vertical points are specified
      if ((!verticalPoints || !verticalPoints.length) && (0, _isFunction2["default"])(verticalCoordinatesGenerator)) {
        verticalPoints = verticalCoordinatesGenerator({
          xAxis: xAxis,
          width: chartWidth,
          height: chartHeight,
          offset: offset
        });
      }
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: "recharts-cartesian-grid"
      }, this.renderBackground(), horizontal && this.renderHorizontal(horizontalPoints), vertical && this.renderVertical(verticalPoints), horizontal && this.renderHorizontalStripes(horizontalPoints), vertical && this.renderVerticalStripes(verticalPoints));
    }
  }], [{
    key: "renderLineItem",
    value: function renderLineItem(option, props) {
      var lineItem;
      if ( /*#__PURE__*/_react["default"].isValidElement(option)) {
        lineItem = /*#__PURE__*/_react["default"].cloneElement(option, props);
      } else if ((0, _isFunction2["default"])(option)) {
        lineItem = option(props);
      } else {
        var x1 = props.x1,
          y1 = props.y1,
          x2 = props.x2,
          y2 = props.y2,
          key = props.key,
          others = _objectWithoutProperties(props, _excluded);
        lineItem = /*#__PURE__*/_react["default"].createElement("line", _extends({}, (0, _types.filterProps)(others), {
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2,
          fill: "none",
          key: key
        }));
      }
      return lineItem;
    }
  }]);
  return CartesianGrid;
}(_react.PureComponent);
exports.CartesianGrid = CartesianGrid;
_defineProperty(CartesianGrid, "displayName", 'CartesianGrid');
_defineProperty(CartesianGrid, "defaultProps", {
  horizontal: true,
  vertical: true,
  // The ordinates of horizontal grid lines
  horizontalPoints: [],
  // The abscissas of vertical grid lines
  verticalPoints: [],
  stroke: '#ccc',
  fill: 'none',
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
});
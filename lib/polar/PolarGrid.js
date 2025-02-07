"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolarGrid = void 0;
var _react = _interopRequireWildcard(require("react"));
var _PolarUtils = require("../util/PolarUtils");
var _types = require("../util/types");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var PolarGrid = /*#__PURE__*/function (_PureComponent) {
  _inherits(PolarGrid, _PureComponent);
  var _super = _createSuper(PolarGrid);
  function PolarGrid() {
    _classCallCheck(this, PolarGrid);
    return _super.apply(this, arguments);
  }
  _createClass(PolarGrid, [{
    key: "getPolygonPath",
    value: function getPolygonPath(radius) {
      var _this$props = this.props,
        cx = _this$props.cx,
        cy = _this$props.cy,
        polarAngles = _this$props.polarAngles;
      var path = '';
      polarAngles.forEach(function (angle, i) {
        var point = (0, _PolarUtils.polarToCartesian)(cx, cy, radius, angle);
        if (i) {
          path += "L ".concat(point.x, ",").concat(point.y);
        } else {
          path += "M ".concat(point.x, ",").concat(point.y);
        }
      });
      path += 'Z';
      return path;
    }

    /**
     * Draw axis of radial line
     * @return {[type]} The lines
     */
  }, {
    key: "renderPolarAngles",
    value: function renderPolarAngles() {
      var _this$props2 = this.props,
        cx = _this$props2.cx,
        cy = _this$props2.cy,
        innerRadius = _this$props2.innerRadius,
        outerRadius = _this$props2.outerRadius,
        polarAngles = _this$props2.polarAngles,
        radialLines = _this$props2.radialLines;
      if (!polarAngles || !polarAngles.length || !radialLines) {
        return null;
      }
      var props = _objectSpread({
        stroke: '#ccc'
      }, (0, _types.filterProps)(this.props));
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: "recharts-polar-grid-angle"
      }, polarAngles.map(function (entry, i) {
        var start = (0, _PolarUtils.polarToCartesian)(cx, cy, innerRadius, entry);
        var end = (0, _PolarUtils.polarToCartesian)(cx, cy, outerRadius, entry);
        return /*#__PURE__*/_react["default"].createElement("line", _extends({}, props, {
          key: "line-".concat(i) // eslint-disable-line react/no-array-index-key
          ,
          x1: start.x,
          y1: start.y,
          x2: end.x,
          y2: end.y
        }));
      }));
    }

    /**
     * Draw concentric circles
     * @param {Number} radius The radius of circle
     * @param {Number} index  The index of circle
     * @param {Object} extraProps Extra props
     * @return {ReactElement} circle
     */
  }, {
    key: "renderConcentricCircle",
    value: function renderConcentricCircle(radius, index, extraProps) {
      var _this$props3 = this.props,
        cx = _this$props3.cx,
        cy = _this$props3.cy;
      var props = _objectSpread(_objectSpread({
        stroke: '#ccc'
      }, (0, _types.filterProps)(this.props)), {}, {
        fill: 'none'
      }, extraProps);
      return /*#__PURE__*/_react["default"].createElement("circle", _extends({}, props, {
        className: "recharts-polar-grid-concentric-circle",
        key: "circle-".concat(index),
        cx: cx,
        cy: cy,
        r: radius
      }));
    }

    /**
     * Draw concentric polygons
     * @param {Number} radius     The radius of polygon
     * @param {Number} index      The index of polygon
     * @param {Object} extraProps Extra props
     * @return {ReactElement} polygon
     */
  }, {
    key: "renderConcentricPolygon",
    value: function renderConcentricPolygon(radius, index, extraProps) {
      var props = _objectSpread(_objectSpread({
        stroke: '#ccc'
      }, (0, _types.filterProps)(this.props)), {}, {
        fill: 'none'
      }, extraProps);
      return /*#__PURE__*/_react["default"].createElement("path", _extends({}, props, {
        className: "recharts-polar-grid-concentric-polygon",
        key: "path-".concat(index),
        d: this.getPolygonPath(radius)
      }));
    }

    /**
     * Draw concentric axis
     * @return {ReactElement} Concentric axis
     * @todo Optimize the name
     */
  }, {
    key: "renderConcentricPath",
    value: function renderConcentricPath() {
      var _this = this;
      var _this$props4 = this.props,
        polarRadius = _this$props4.polarRadius,
        gridType = _this$props4.gridType;
      if (!polarRadius || !polarRadius.length) {
        return null;
      }
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: "recharts-polar-grid-concentric"
      }, polarRadius.map(function (entry, i) {
        return gridType === 'circle' ? _this.renderConcentricCircle(entry, i) : _this.renderConcentricPolygon(entry, i);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var outerRadius = this.props.outerRadius;
      if (outerRadius <= 0) {
        return null;
      }
      return /*#__PURE__*/_react["default"].createElement("g", {
        className: "recharts-polar-grid"
      }, this.renderPolarAngles(), this.renderConcentricPath());
    }
  }]);
  return PolarGrid;
}(_react.PureComponent);
exports.PolarGrid = PolarGrid;
_defineProperty(PolarGrid, "displayName", 'PolarGrid');
_defineProperty(PolarGrid, "defaultProps", {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  gridType: 'polygon',
  radialLines: true
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pie = void 0;
var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));
var _get2 = _interopRequireDefault(require("lodash/get"));
var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));
var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));
var _isNil2 = _interopRequireDefault(require("lodash/isNil"));
var _react = _interopRequireWildcard(require("react"));
var _reactSmooth = _interopRequireDefault(require("react-smooth"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Layer = require("../container/Layer");
var _Sector = require("../shape/Sector");
var _Curve = require("../shape/Curve");
var _Text = require("../component/Text");
var _Label = require("../component/Label");
var _LabelList = require("../component/LabelList");
var _Cell = require("../component/Cell");
var _ReactUtils = require("../util/ReactUtils");
var _Global = require("../util/Global");
var _PolarUtils = require("../util/PolarUtils");
var _DataUtils = require("../util/DataUtils");
var _ChartUtils = require("../util/ChartUtils");
var _LogUtils = require("../util/LogUtils");
var _types = require("../util/types");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var Pie = /*#__PURE__*/function (_PureComponent) {
  _inherits(Pie, _PureComponent);
  var _super = _createSuper(Pie);
  function Pie(props) {
    var _this;
    _classCallCheck(this, Pie);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "pieRef", null);
    _defineProperty(_assertThisInitialized(_this), "sectorRefs", []);
    _defineProperty(_assertThisInitialized(_this), "id", (0, _DataUtils.uniqueId)('recharts-pie-'));
    _defineProperty(_assertThisInitialized(_this), "handleAnimationEnd", function () {
      var onAnimationEnd = _this.props.onAnimationEnd;
      _this.setState({
        isAnimationFinished: true
      });
      if ((0, _isFunction2["default"])(onAnimationEnd)) {
        onAnimationEnd();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleAnimationStart", function () {
      var onAnimationStart = _this.props.onAnimationStart;
      _this.setState({
        isAnimationFinished: false
      });
      if ((0, _isFunction2["default"])(onAnimationStart)) {
        onAnimationStart();
      }
    });
    _this.state = {
      isAnimationFinished: !props.isAnimationActive,
      prevIsAnimationActive: props.isAnimationActive,
      prevAnimationId: props.animationId,
      sectorToFocus: 0
    };
    return _this;
  }
  _createClass(Pie, [{
    key: "isActiveIndex",
    value: function isActiveIndex(i) {
      var activeIndex = this.props.activeIndex;
      if (Array.isArray(activeIndex)) {
        return activeIndex.indexOf(i) !== -1;
      }
      return i === activeIndex;
    }
  }, {
    key: "hasActiveIndex",
    value: function hasActiveIndex() {
      var activeIndex = this.props.activeIndex;
      return Array.isArray(activeIndex) ? activeIndex.length !== 0 : activeIndex || activeIndex === 0;
    }
  }, {
    key: "renderLabels",
    value: function renderLabels(sectors) {
      var isAnimationActive = this.props.isAnimationActive;
      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _this$props = this.props,
        label = _this$props.label,
        labelLine = _this$props.labelLine,
        dataKey = _this$props.dataKey,
        valueKey = _this$props.valueKey;
      var pieProps = (0, _types.filterProps)(this.props);
      var customLabelProps = (0, _types.filterProps)(label);
      var customLabelLineProps = (0, _types.filterProps)(labelLine);
      var offsetRadius = label && label.offsetRadius || 20;
      var labels = sectors.map(function (entry, i) {
        var midAngle = (entry.startAngle + entry.endAngle) / 2;
        var endPoint = (0, _PolarUtils.polarToCartesian)(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
        var labelProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, pieProps), entry), {}, {
          stroke: 'none'
        }, customLabelProps), {}, {
          index: i,
          textAnchor: Pie.getTextAnchor(endPoint.x, entry.cx)
        }, endPoint);
        var lineProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, pieProps), entry), {}, {
          fill: 'none',
          stroke: entry.fill
        }, customLabelLineProps), {}, {
          index: i,
          points: [(0, _PolarUtils.polarToCartesian)(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint],
          key: 'line'
        });
        var realDataKey = dataKey;
        // TODO: compatible to lower versions
        if ((0, _isNil2["default"])(dataKey) && (0, _isNil2["default"])(valueKey)) {
          realDataKey = 'value';
        } else if ((0, _isNil2["default"])(dataKey)) {
          realDataKey = valueKey;
        }
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          _react["default"].createElement(_Layer.Layer, {
            key: "label-".concat(i)
          }, labelLine && Pie.renderLabelLineItem(labelLine, lineProps), Pie.renderLabelItem(label, labelProps, (0, _ChartUtils.getValueByDataKey)(entry, realDataKey)))
        );
      });
      return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
        className: "recharts-pie-labels"
      }, labels);
    }
  }, {
    key: "renderSectorsStatically",
    value: function renderSectorsStatically(sectors) {
      var _this2 = this;
      var _this$props2 = this.props,
        activeShape = _this$props2.activeShape,
        blendStroke = _this$props2.blendStroke,
        inactiveShapeProp = _this$props2.inactiveShape;
      return sectors.map(function (entry, i) {
        var inactiveShape = inactiveShapeProp && _this2.hasActiveIndex() ? inactiveShapeProp : null;
        var sectorOptions = _this2.isActiveIndex(i) ? activeShape : inactiveShape;
        var sectorProps = _objectSpread(_objectSpread({}, entry), {}, {
          stroke: blendStroke ? entry.fill : entry.stroke
        });
        return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, _extends({
          ref: function ref(_ref) {
            if (_ref && !_this2.sectorRefs.includes(_ref)) {
              _this2.sectorRefs.push(_ref);
            }
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, (0, _types.adaptEventsOfChild)(_this2.props, entry, i), {
          key: "sector-".concat(i) // eslint-disable-line react/no-array-index-key
        }), Pie.renderSectorItem(sectorOptions, sectorProps));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function renderSectorsWithAnimation() {
      var _this3 = this;
      var _this$props3 = this.props,
        sectors = _this$props3.sectors,
        isAnimationActive = _this$props3.isAnimationActive,
        animationBegin = _this$props3.animationBegin,
        animationDuration = _this$props3.animationDuration,
        animationEasing = _this$props3.animationEasing,
        animationId = _this$props3.animationId;
      var _this$state = this.state,
        prevSectors = _this$state.prevSectors,
        prevIsAnimationActive = _this$state.prevIsAnimationActive;
      return /*#__PURE__*/_react["default"].createElement(_reactSmooth["default"], {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(animationId, "-").concat(prevIsAnimationActive),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function (_ref2) {
        var t = _ref2.t;
        var stepData = [];
        var first = sectors && sectors[0];
        var curAngle = first.startAngle;
        sectors.forEach(function (entry, index) {
          var prev = prevSectors && prevSectors[index];
          var paddingAngle = index > 0 ? (0, _get2["default"])(entry, 'paddingAngle', 0) : 0;
          if (prev) {
            var angleIp = (0, _DataUtils.interpolateNumber)(prev.endAngle - prev.startAngle, entry.endAngle - entry.startAngle);
            var latest = _objectSpread(_objectSpread({}, entry), {}, {
              startAngle: curAngle + paddingAngle,
              endAngle: curAngle + angleIp(t) + paddingAngle
            });
            stepData.push(latest);
            curAngle = latest.endAngle;
          } else {
            var endAngle = entry.endAngle,
              startAngle = entry.startAngle;
            var interpolatorAngle = (0, _DataUtils.interpolateNumber)(0, endAngle - startAngle);
            var deltaAngle = interpolatorAngle(t);
            var _latest = _objectSpread(_objectSpread({}, entry), {}, {
              startAngle: curAngle + paddingAngle,
              endAngle: curAngle + deltaAngle + paddingAngle
            });
            stepData.push(_latest);
            curAngle = _latest.endAngle;
          }
        });
        return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, null, _this3.renderSectorsStatically(stepData));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function attachKeyboardHandlers(pieRef) {
      var _this4 = this;
      // eslint-disable-next-line no-param-reassign
      pieRef.onkeydown = function (e) {
        if (!e.altKey) {
          switch (e.key) {
            case 'ArrowLeft':
              {
                var next = ++_this4.state.sectorToFocus % _this4.sectorRefs.length;
                _this4.sectorRefs[next].focus();
                _this4.setState({
                  sectorToFocus: next
                });
                break;
              }
            case 'ArrowRight':
              {
                var _next = --_this4.state.sectorToFocus < 0 ? _this4.sectorRefs.length - 1 : _this4.state.sectorToFocus % _this4.sectorRefs.length;
                _this4.sectorRefs[_next].focus();
                _this4.setState({
                  sectorToFocus: _next
                });
                break;
              }
            case 'Escape':
              {
                _this4.sectorRefs[_this4.state.sectorToFocus].blur();
                _this4.setState({
                  sectorToFocus: 0
                });
                break;
              }
            default:
              {
                // There is nothing to do here
              }
          }
        }
      };
    }
  }, {
    key: "renderSectors",
    value: function renderSectors() {
      var _this$props4 = this.props,
        sectors = _this$props4.sectors,
        isAnimationActive = _this$props4.isAnimationActive;
      var prevSectors = this.state.prevSectors;
      if (isAnimationActive && sectors && sectors.length && (!prevSectors || !(0, _isEqual2["default"])(prevSectors, sectors))) {
        return this.renderSectorsWithAnimation();
      }
      return this.renderSectorsStatically(sectors);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.pieRef) {
        this.attachKeyboardHandlers(this.pieRef);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var _this$props5 = this.props,
        hide = _this$props5.hide,
        sectors = _this$props5.sectors,
        className = _this$props5.className,
        label = _this$props5.label,
        cx = _this$props5.cx,
        cy = _this$props5.cy,
        innerRadius = _this$props5.innerRadius,
        outerRadius = _this$props5.outerRadius,
        isAnimationActive = _this$props5.isAnimationActive;
      var isAnimationFinished = this.state.isAnimationFinished;
      if (hide || !sectors || !sectors.length || !(0, _DataUtils.isNumber)(cx) || !(0, _DataUtils.isNumber)(cy) || !(0, _DataUtils.isNumber)(innerRadius) || !(0, _DataUtils.isNumber)(outerRadius)) {
        return null;
      }
      var layerClass = (0, _classnames["default"])('recharts-pie', className);
      return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
        tabIndex: 0,
        className: layerClass,
        ref: function ref(_ref3) {
          _this5.pieRef = _ref3;
        }
      }, this.renderSectors(), label && this.renderLabels(sectors), _Label.Label.renderCallByParent(this.props, null, false), (!isAnimationActive || isAnimationFinished) && _LabelList.LabelList.renderCallByParent(this.props, sectors, false));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.prevIsAnimationActive !== nextProps.isAnimationActive) {
        return {
          prevIsAnimationActive: nextProps.isAnimationActive,
          prevAnimationId: nextProps.animationId,
          curSectors: nextProps.sectors,
          prevSectors: [],
          isAnimationFinished: true
        };
      }
      if (nextProps.isAnimationActive && nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curSectors: nextProps.sectors,
          prevSectors: prevState.curSectors,
          isAnimationFinished: true
        };
      }
      if (nextProps.sectors !== prevState.curSectors) {
        return {
          curSectors: nextProps.sectors,
          isAnimationFinished: true
        };
      }
      return null;
    }
  }, {
    key: "getTextAnchor",
    value: function getTextAnchor(x, cx) {
      if (x > cx) {
        return 'start';
      }
      if (x < cx) {
        return 'end';
      }
      return 'middle';
    }
  }, {
    key: "renderLabelLineItem",
    value: function renderLabelLineItem(option, props) {
      if ( /*#__PURE__*/_react["default"].isValidElement(option)) {
        return /*#__PURE__*/_react["default"].cloneElement(option, props);
      }
      if ((0, _isFunction2["default"])(option)) {
        return option(props);
      }
      return /*#__PURE__*/_react["default"].createElement(_Curve.Curve, _extends({}, props, {
        type: "linear",
        className: "recharts-pie-label-line"
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function renderLabelItem(option, props, value) {
      if ( /*#__PURE__*/_react["default"].isValidElement(option)) {
        return /*#__PURE__*/_react["default"].cloneElement(option, props);
      }
      var label = value;
      if ((0, _isFunction2["default"])(option)) {
        label = option(props);
        if ( /*#__PURE__*/_react["default"].isValidElement(label)) {
          return label;
        }
      }
      return /*#__PURE__*/_react["default"].createElement(_Text.Text, _extends({}, props, {
        alignmentBaseline: "middle",
        className: "recharts-pie-label-text"
      }), label);
    }
  }, {
    key: "renderSectorItem",
    value: function renderSectorItem(option, props) {
      if ( /*#__PURE__*/_react["default"].isValidElement(option)) {
        return /*#__PURE__*/_react["default"].cloneElement(option, props);
      }
      if ((0, _isFunction2["default"])(option)) {
        return option(props);
      }
      if ((0, _isPlainObject2["default"])(option)) {
        return /*#__PURE__*/_react["default"].createElement(_Sector.Sector, _extends({
          tabIndex: -1
        }, props, option));
      }
      return /*#__PURE__*/_react["default"].createElement(_Sector.Sector, _extends({
        tabIndex: -1
      }, props));
    }
  }]);
  return Pie;
}(_react.PureComponent);
exports.Pie = Pie;
_defineProperty(Pie, "displayName", 'Pie');
_defineProperty(Pie, "defaultProps", {
  stroke: '#fff',
  fill: '#808080',
  legendType: 'rect',
  cx: '50%',
  cy: '50%',
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: '80%',
  paddingAngle: 0,
  labelLine: true,
  hide: false,
  minAngle: 0,
  isAnimationActive: !_Global.Global.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: 'ease',
  nameKey: 'name',
  blendStroke: false
});
_defineProperty(Pie, "parseDeltaAngle", function (startAngle, endAngle) {
  var sign = (0, _DataUtils.mathSign)(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
  return sign * deltaAngle;
});
_defineProperty(Pie, "getRealPieData", function (item) {
  var _item$props = item.props,
    data = _item$props.data,
    children = _item$props.children;
  var presentationProps = (0, _types.filterProps)(item.props);
  var cells = (0, _ReactUtils.findAllByType)(children, _Cell.Cell.displayName);
  if (data && data.length) {
    return data.map(function (entry, index) {
      return _objectSpread(_objectSpread(_objectSpread({
        payload: entry
      }, presentationProps), entry), cells && cells[index] && cells[index].props);
    });
  }
  if (cells && cells.length) {
    return cells.map(function (cell) {
      return _objectSpread(_objectSpread({}, presentationProps), cell.props);
    });
  }
  return [];
});
_defineProperty(Pie, "parseCoordinateOfPie", function (item, offset) {
  var top = offset.top,
    left = offset.left,
    width = offset.width,
    height = offset.height;
  var maxPieRadius = (0, _PolarUtils.getMaxRadius)(width, height);
  var cx = left + (0, _DataUtils.getPercentValue)(item.props.cx, width, width / 2);
  var cy = top + (0, _DataUtils.getPercentValue)(item.props.cy, height, height / 2);
  var innerRadius = (0, _DataUtils.getPercentValue)(item.props.innerRadius, maxPieRadius, 0);
  var outerRadius = (0, _DataUtils.getPercentValue)(item.props.outerRadius, maxPieRadius, maxPieRadius * 0.8);
  var maxRadius = item.props.maxRadius || Math.sqrt(width * width + height * height) / 2;
  return {
    cx: cx,
    cy: cy,
    innerRadius: innerRadius,
    outerRadius: outerRadius,
    maxRadius: maxRadius
  };
});
_defineProperty(Pie, "getComposedData", function (_ref4) {
  var item = _ref4.item,
    offset = _ref4.offset;
  var pieData = Pie.getRealPieData(item);
  if (!pieData || !pieData.length) {
    return null;
  }
  var _item$props2 = item.props,
    cornerRadius = _item$props2.cornerRadius,
    startAngle = _item$props2.startAngle,
    endAngle = _item$props2.endAngle,
    paddingAngle = _item$props2.paddingAngle,
    dataKey = _item$props2.dataKey,
    nameKey = _item$props2.nameKey,
    valueKey = _item$props2.valueKey,
    tooltipType = _item$props2.tooltipType;
  var minAngle = Math.abs(item.props.minAngle);
  var coordinate = Pie.parseCoordinateOfPie(item, offset);
  var deltaAngle = Pie.parseDeltaAngle(startAngle, endAngle);
  var absDeltaAngle = Math.abs(deltaAngle);
  var realDataKey = dataKey;
  if ((0, _isNil2["default"])(dataKey) && (0, _isNil2["default"])(valueKey)) {
    (0, _LogUtils.warn)(false, "Use \"dataKey\" to specify the value of pie,\n      the props \"valueKey\" will be deprecated in 1.1.0");
    realDataKey = 'value';
  } else if ((0, _isNil2["default"])(dataKey)) {
    (0, _LogUtils.warn)(false, "Use \"dataKey\" to specify the value of pie,\n      the props \"valueKey\" will be deprecated in 1.1.0");
    realDataKey = valueKey;
  }
  var notZeroItemCount = pieData.filter(function (entry) {
    return (0, _ChartUtils.getValueByDataKey)(entry, realDataKey, 0) !== 0;
  }).length;
  var totalPadingAngle = (absDeltaAngle >= 360 ? notZeroItemCount : notZeroItemCount - 1) * paddingAngle;
  var realTotalAngle = absDeltaAngle - notZeroItemCount * minAngle - totalPadingAngle;
  var sum = pieData.reduce(function (result, entry) {
    var val = (0, _ChartUtils.getValueByDataKey)(entry, realDataKey, 0);
    return result + ((0, _DataUtils.isNumber)(val) ? val : 0);
  }, 0);
  var sectors;
  if (sum > 0) {
    var prev;
    sectors = pieData.map(function (entry, i) {
      var val = (0, _ChartUtils.getValueByDataKey)(entry, realDataKey, 0);
      var name = (0, _ChartUtils.getValueByDataKey)(entry, nameKey, i);
      var percent = ((0, _DataUtils.isNumber)(val) ? val : 0) / sum;
      var tempStartAngle;
      if (i) {
        tempStartAngle = prev.endAngle + (0, _DataUtils.mathSign)(deltaAngle) * paddingAngle * (val !== 0 ? 1 : 0);
      } else {
        tempStartAngle = startAngle;
      }
      var tempEndAngle = tempStartAngle + (0, _DataUtils.mathSign)(deltaAngle) * ((val !== 0 ? minAngle : 0) + percent * realTotalAngle);
      var midAngle = (tempStartAngle + tempEndAngle) / 2;
      var middleRadius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
      var tooltipPayload = [{
        name: name,
        value: val,
        payload: entry,
        dataKey: realDataKey,
        type: tooltipType
      }];
      var tooltipPosition = (0, _PolarUtils.polarToCartesian)(coordinate.cx, coordinate.cy, middleRadius, midAngle);
      prev = _objectSpread(_objectSpread(_objectSpread({
        percent: percent,
        cornerRadius: cornerRadius,
        name: name,
        tooltipPayload: tooltipPayload,
        midAngle: midAngle,
        middleRadius: middleRadius,
        tooltipPosition: tooltipPosition
      }, entry), coordinate), {}, {
        value: (0, _ChartUtils.getValueByDataKey)(entry, realDataKey),
        startAngle: tempStartAngle,
        endAngle: tempEndAngle,
        payload: entry,
        paddingAngle: (0, _DataUtils.mathSign)(deltaAngle) * paddingAngle
      });
      return prev;
    });
  }
  return _objectSpread(_objectSpread({}, coordinate), {}, {
    sectors: sectors,
    data: pieData
  });
});
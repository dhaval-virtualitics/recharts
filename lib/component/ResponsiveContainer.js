"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponsiveContainer = void 0;
var _debounce2 = _interopRequireDefault(require("lodash/debounce"));
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _reactResizeDetector = _interopRequireDefault(require("react-resize-detector"));
var _DataUtils = require("../util/DataUtils");
var _LogUtils = require("../util/LogUtils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ResponsiveContainer = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var aspect = _ref.aspect,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '100%' : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? '100%' : _ref$height,
    minWidth = _ref.minWidth,
    minHeight = _ref.minHeight,
    maxHeight = _ref.maxHeight,
    children = _ref.children,
    _ref$debounce = _ref.debounce,
    debounce = _ref$debounce === void 0 ? 0 : _ref$debounce,
    id = _ref.id,
    className = _ref.className;
  var _useState = (0, _react.useState)({
      containerWidth: -1,
      containerHeight: -1
    }),
    _useState2 = _slicedToArray(_useState, 2),
    sizes = _useState2[0],
    setSizes = _useState2[1];
  var containerRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, function () {
    return containerRef;
  }, [containerRef]);
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    mounted = _useState4[0],
    setMounted = _useState4[1];
  var getContainerSize = function getContainerSize() {
    if (!containerRef.current) {
      return null;
    }
    return {
      containerWidth: containerRef.current.clientWidth,
      containerHeight: containerRef.current.clientHeight
    };
  };
  var updateDimensionsImmediate = function updateDimensionsImmediate() {
    if (!mounted) {
      return;
    }
    var newSize = getContainerSize();
    if (newSize) {
      var oldWidth = sizes.containerWidth,
        oldHeight = sizes.containerHeight;
      var containerWidth = newSize.containerWidth,
        containerHeight = newSize.containerHeight;
      if (containerWidth !== oldWidth || containerHeight !== oldHeight) {
        setSizes({
          containerWidth: containerWidth,
          containerHeight: containerHeight
        });
      }
    }
  };
  var handleResize = debounce > 0 ? (0, _debounce2["default"])(updateDimensionsImmediate, debounce) : updateDimensionsImmediate;
  var renderChart = function renderChart() {
    var containerWidth = sizes.containerWidth,
      containerHeight = sizes.containerHeight;
    if (containerWidth < 0 || containerHeight < 0) {
      return null;
    }
    (0, _LogUtils.warn)((0, _DataUtils.isPercent)(width) || (0, _DataUtils.isPercent)(height), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", width, height);
    (0, _LogUtils.warn)(!aspect || aspect > 0, 'The aspect(%s) must be greater than zero.', aspect);
    var calculatedWidth = (0, _DataUtils.isPercent)(width) ? containerWidth : width;
    var calculatedHeight = (0, _DataUtils.isPercent)(height) ? containerHeight : height;
    if (aspect && aspect > 0) {
      // Preserve the desired aspect ratio
      if (calculatedWidth) {
        // Will default to using width for aspect ratio
        calculatedHeight = calculatedWidth / aspect;
      } else if (calculatedHeight) {
        // But we should also take height into consideration
        calculatedWidth = calculatedHeight * aspect;
      }

      // if maxHeight is set, overwrite if calculatedHeight is greater than maxHeight
      if (maxHeight && calculatedHeight > maxHeight) {
        calculatedHeight = maxHeight;
      }
    }
    (0, _LogUtils.warn)(calculatedWidth > 0 || calculatedHeight > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", calculatedWidth, calculatedHeight, width, height, minWidth, minHeight, aspect);
    return /*#__PURE__*/(0, _react.cloneElement)(children, {
      width: calculatedWidth,
      height: calculatedHeight
    });
  };
  (0, _react.useEffect)(function () {
    if (mounted) {
      var size = getContainerSize();
      if (size) {
        setSizes(size);
      }
    }
  }, [mounted]);
  (0, _react.useEffect)(function () {
    setMounted(true);
  }, []);
  var style = {
    width: width,
    height: height,
    minWidth: minWidth,
    minHeight: minHeight,
    maxHeight: maxHeight
  };
  return /*#__PURE__*/_react["default"].createElement(_reactResizeDetector["default"], {
    handleWidth: true,
    handleHeight: true,
    onResize: handleResize,
    targetRef: containerRef
  }, /*#__PURE__*/_react["default"].createElement("div", _extends({}, id != null ? {
    id: "".concat(id)
  } : {}, {
    className: (0, _classnames["default"])('recharts-responsive-container', className),
    style: style,
    ref: containerRef
  }), renderChart()));
});
exports.ResponsiveContainer = ResponsiveContainer;
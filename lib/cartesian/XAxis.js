"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XAxis = void 0;
/**
 * @fileOverview X Axis
 */

/** Define of XAxis props */

var XAxis = function XAxis() {
  return null;
};
exports.XAxis = XAxis;
XAxis.displayName = 'XAxis';
XAxis.defaultProps = {
  allowDecimals: true,
  hide: false,
  orientation: 'bottom',
  width: 0,
  height: 30,
  mirror: false,
  xAxisId: 0,
  tickCount: 5,
  type: 'category',
  domain: [0, 'auto'],
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: false,
  scale: 'auto',
  reversed: false,
  allowDuplicatedCategory: true
};
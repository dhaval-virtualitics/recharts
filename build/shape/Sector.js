"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sector = void 0;
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var types_1 = require("../util/types");
var PolarUtils_1 = require("../util/PolarUtils");
var DataUtils_1 = require("../util/DataUtils");
var getDeltaAngle = function (startAngle, endAngle) {
    var sign = (0, DataUtils_1.mathSign)(endAngle - startAngle);
    var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.999);
    return sign * deltaAngle;
};
var getTangentCircle = function (_a) {
    var cx = _a.cx, cy = _a.cy, radius = _a.radius, angle = _a.angle, sign = _a.sign, isExternal = _a.isExternal, cornerRadius = _a.cornerRadius, cornerIsExternal = _a.cornerIsExternal;
    var centerRadius = cornerRadius * (isExternal ? 1 : -1) + radius;
    var theta = Math.asin(cornerRadius / centerRadius) / PolarUtils_1.RADIAN;
    var centerAngle = cornerIsExternal ? angle : angle + sign * theta;
    var center = (0, PolarUtils_1.polarToCartesian)(cx, cy, centerRadius, centerAngle);
    var circleTangency = (0, PolarUtils_1.polarToCartesian)(cx, cy, radius, centerAngle);
    var lineTangencyAngle = cornerIsExternal ? angle - sign * theta : angle;
    var lineTangency = (0, PolarUtils_1.polarToCartesian)(cx, cy, centerRadius * Math.cos(theta * PolarUtils_1.RADIAN), lineTangencyAngle);
    return { center: center, circleTangency: circleTangency, lineTangency: lineTangency, theta: theta };
};
var getSectorPath = function (_a) {
    var cx = _a.cx, cy = _a.cy, innerRadius = _a.innerRadius, outerRadius = _a.outerRadius, startAngle = _a.startAngle, endAngle = _a.endAngle;
    var angle = getDeltaAngle(startAngle, endAngle);
    var tempEndAngle = startAngle + angle;
    var outerStartPoint = (0, PolarUtils_1.polarToCartesian)(cx, cy, outerRadius, startAngle);
    var outerEndPoint = (0, PolarUtils_1.polarToCartesian)(cx, cy, outerRadius, tempEndAngle);
    var path = "M ".concat(outerStartPoint.x, ",").concat(outerStartPoint.y, "\n    A ").concat(outerRadius, ",").concat(outerRadius, ",0,\n    ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle > tempEndAngle), ",\n    ").concat(outerEndPoint.x, ",").concat(outerEndPoint.y, "\n  ");
    if (innerRadius > 0) {
        var innerStartPoint = (0, PolarUtils_1.polarToCartesian)(cx, cy, innerRadius, startAngle);
        var innerEndPoint = (0, PolarUtils_1.polarToCartesian)(cx, cy, innerRadius, tempEndAngle);
        path += "L ".concat(innerEndPoint.x, ",").concat(innerEndPoint.y, "\n            A ").concat(innerRadius, ",").concat(innerRadius, ",0,\n            ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle <= tempEndAngle), ",\n            ").concat(innerStartPoint.x, ",").concat(innerStartPoint.y, " Z");
    }
    else {
        path += "L ".concat(cx, ",").concat(cy, " Z");
    }
    return path;
};
var getSectorWithCorner = function (_a) {
    var cx = _a.cx, cy = _a.cy, innerRadius = _a.innerRadius, outerRadius = _a.outerRadius, cornerRadius = _a.cornerRadius, forceCornerRadius = _a.forceCornerRadius, cornerIsExternal = _a.cornerIsExternal, startAngle = _a.startAngle, endAngle = _a.endAngle;
    var sign = (0, DataUtils_1.mathSign)(endAngle - startAngle);
    var _b = getTangentCircle({
        cx: cx,
        cy: cy,
        radius: outerRadius,
        angle: startAngle,
        sign: sign,
        cornerRadius: cornerRadius,
        cornerIsExternal: cornerIsExternal,
    }), soct = _b.circleTangency, solt = _b.lineTangency, sot = _b.theta;
    var _c = getTangentCircle({
        cx: cx,
        cy: cy,
        radius: outerRadius,
        angle: endAngle,
        sign: -sign,
        cornerRadius: cornerRadius,
        cornerIsExternal: cornerIsExternal,
    }), eoct = _c.circleTangency, eolt = _c.lineTangency, eot = _c.theta;
    var outerArcAngle = cornerIsExternal
        ? Math.abs(startAngle - endAngle)
        : Math.abs(startAngle - endAngle) - sot - eot;
    if (outerArcAngle < 0) {
        if (forceCornerRadius) {
            return "M ".concat(solt.x, ",").concat(solt.y, "\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(cornerRadius * 2, ",0\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(-cornerRadius * 2, ",0\n      ");
        }
        return getSectorPath({
            cx: cx,
            cy: cy,
            innerRadius: innerRadius,
            outerRadius: outerRadius,
            startAngle: startAngle,
            endAngle: endAngle,
        });
    }
    var path = "M ".concat(solt.x, ",").concat(solt.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(soct.x, ",").concat(soct.y, "\n    A").concat(outerRadius, ",").concat(outerRadius, ",0,").concat(+(outerArcAngle > 180), ",").concat(+(sign < 0), ",").concat(eoct.x, ",").concat(eoct.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(eolt.x, ",").concat(eolt.y, "\n  ");
    if (innerRadius > 0) {
        var _d = getTangentCircle({
            cx: cx,
            cy: cy,
            radius: innerRadius,
            angle: startAngle,
            sign: sign,
            isExternal: true,
            cornerRadius: cornerRadius,
            cornerIsExternal: cornerIsExternal,
        }), sict = _d.circleTangency, silt = _d.lineTangency, sit = _d.theta;
        var _e = getTangentCircle({
            cx: cx,
            cy: cy,
            radius: innerRadius,
            angle: endAngle,
            sign: -sign,
            isExternal: true,
            cornerRadius: cornerRadius,
            cornerIsExternal: cornerIsExternal,
        }), eict = _e.circleTangency, eilt = _e.lineTangency, eit = _e.theta;
        var innerArcAngle = cornerIsExternal
            ? Math.abs(startAngle - endAngle)
            : Math.abs(startAngle - endAngle) - sit - eit;
        if (innerArcAngle < 0 && cornerRadius === 0) {
            return "".concat(path, "L").concat(cx, ",").concat(cy, "Z");
        }
        path += "L".concat(eilt.x, ",").concat(eilt.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(eict.x, ",").concat(eict.y, "\n      A").concat(innerRadius, ",").concat(innerRadius, ",0,").concat(+(innerArcAngle > 180), ",").concat(+(sign > 0), ",").concat(sict.x, ",").concat(sict.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(silt.x, ",").concat(silt.y, "Z");
    }
    else {
        path += "L".concat(cx, ",").concat(cy, "Z");
    }
    return path;
};
var Sector = (function (_super) {
    __extends(Sector, _super);
    function Sector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sector.prototype.render = function () {
        var _a = this.props, cx = _a.cx, cy = _a.cy, innerRadius = _a.innerRadius, outerRadius = _a.outerRadius, cornerRadius = _a.cornerRadius, forceCornerRadius = _a.forceCornerRadius, cornerIsExternal = _a.cornerIsExternal, startAngle = _a.startAngle, endAngle = _a.endAngle, className = _a.className;
        if (outerRadius < innerRadius || startAngle === endAngle) {
            return null;
        }
        var layerClass = (0, classnames_1.default)('recharts-sector', className);
        var deltaRadius = outerRadius - innerRadius;
        var cr = (0, DataUtils_1.getPercentValue)(cornerRadius, deltaRadius, 0, true);
        var path;
        if (cr > 0 && Math.abs(startAngle - endAngle) < 360) {
            path = getSectorWithCorner({
                cx: cx,
                cy: cy,
                innerRadius: innerRadius,
                outerRadius: outerRadius,
                cornerRadius: Math.min(cr, deltaRadius / 2),
                forceCornerRadius: forceCornerRadius,
                cornerIsExternal: cornerIsExternal,
                startAngle: startAngle,
                endAngle: endAngle,
            });
        }
        else {
            path = getSectorPath({ cx: cx, cy: cy, innerRadius: innerRadius, outerRadius: outerRadius, startAngle: startAngle, endAngle: endAngle });
        }
        return react_1.default.createElement("path", __assign({}, (0, types_1.filterProps)(this.props, true), { className: layerClass, d: path, role: "img" }));
    };
    Sector.defaultProps = {
        cx: 0,
        cy: 0,
        innerRadius: 0,
        outerRadius: 0,
        startAngle: 0,
        endAngle: 0,
        cornerRadius: 0,
        forceCornerRadius: false,
        cornerIsExternal: false,
    };
    return Sector;
}(react_1.PureComponent));
exports.Sector = Sector;
//# sourceMappingURL=Sector.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setStyles = void 0;
var setStyles = function (_a) {
    var _b;
    var _c = _a.label, label = _c === void 0 ? 'input' : _c, color = _a.color, width = _a.width, style = _a.style, radius = _a.radius;
    return _b = {},
        _b["--".concat(label, "-field-border-color")] = color,
        _b["--".concat(label, "-field-border-width")] = width,
        _b["--".concat(label, "-field-border-style")] = style,
        _b["--".concat(label, "-field-border-radius")] = radius,
        _b;
};
exports.setStyles = setStyles;
//# sourceMappingURL=styleVars.js.map
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBemify = void 0;
var react_1 = require("react");
var bemify = function (block) {
    return function (element) {
        var classes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            classes[_i - 1] = arguments[_i];
        }
        var combined = element ? "".concat(block, "__").concat(element) : block;
        var formedClasses = classes && classes.length
            ? classes
                .map(function (c) {
                if (!c) {
                    return '';
                }
                var className = c;
                if (className && Array.isArray(className)) {
                    var condition = c[0], activeClass = c[1], fallbackClass = c[2];
                    if (condition) {
                        className =
                            activeClass ||
                                (typeof condition === 'string' ? condition : '');
                    }
                    else {
                        className =
                            fallbackClass ||
                                (typeof fallbackClass === 'string' ? fallbackClass : '');
                    }
                }
                if (typeof className !== 'string')
                    className = '';
                if (className.startsWith('--'))
                    className = combined + className;
                return className;
            })
                .filter(function (c) { return !!c; })
            : [];
        return __spreadArray([combined], formedClasses, true).join(' ');
    };
};
var useBemify = function (block) {
    return (0, react_1.useMemo)(function () { return bemify(block); }, []);
};
exports.useBemify = useBemify;
//# sourceMappingURL=useBemify.js.map
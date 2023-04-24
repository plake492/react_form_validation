"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toKebabCase = exports.forceArray = void 0;
var forceArray = function (v) { return (Array.isArray(v) ? v : [v]); };
exports.forceArray = forceArray;
var toKebabCase = function (str) {
    return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, function ($, ofs) { return (ofs ? '-' : '') + $.toLowerCase(); });
};
exports.toKebabCase = toKebabCase;
//# sourceMappingURL=helpers.js.map
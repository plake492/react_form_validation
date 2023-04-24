"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var detectReactComponents_1 = require("../../utils/detectReactComponents");
var helpers_1 = require("../../utils/helpers");
function FieldLabel(props) {
    var children = props.children, el = props.el, isRequired = props.isRequired, rest = __rest(props, ["children", "el", "isRequired"]);
    var Component = el !== null && el !== void 0 ? el : 'label';
    var childrenAsArray = (0, helpers_1.forceArray)(children);
    return (React.createElement(React.Fragment, null, childrenAsArray.map(function (child, index) { return (React.createElement(React.Fragment, { key: index }, (0, detectReactComponents_1.checkIfAnyReactComponentType)(child) ? (child) : (React.createElement(Component, __assign({}, rest),
        isRequired && React.createElement("span", null, "*"),
        child)))); })));
}
exports.default = FieldLabel;
//# sourceMappingURL=FieldLabel.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfAnyReactComponentType = exports.isCompositeTypeElement = exports.isDOMTypeElement = exports.isElement = exports.isReactComponent = exports.isFunctionComponent = exports.isClassComponent = void 0;
var React = require("react");
var isClassComponent = function (component) {
    return (typeof component === 'function' && !!component.prototype.isReactComponent);
};
exports.isClassComponent = isClassComponent;
var isFunctionComponent = function (component) {
    return (typeof component === 'function' &&
        React.isValidElement(component()));
};
exports.isFunctionComponent = isFunctionComponent;
var isReactComponent = function (component) {
    return (0, exports.isClassComponent)(component) || (0, exports.isFunctionComponent)(component);
};
exports.isReactComponent = isReactComponent;
var isElement = function (element) {
    return React.isValidElement(element);
};
exports.isElement = isElement;
var isDOMTypeElement = function (element) {
    return (0, exports.isElement)(element) && typeof element.type === 'string';
};
exports.isDOMTypeElement = isDOMTypeElement;
var isCompositeTypeElement = function (element) {
    return (0, exports.isElement)(element) && typeof element.type === 'function';
};
exports.isCompositeTypeElement = isCompositeTypeElement;
var checkIfAnyReactComponentType = function (value) {
    return ((0, exports.isClassComponent)(value) ||
        (0, exports.isFunctionComponent)(value) ||
        (0, exports.isReactComponent)(value) ||
        (0, exports.isElement)(value) ||
        (0, exports.isDOMTypeElement)(value) ||
        (0, exports.isCompositeTypeElement)(value));
};
exports.checkIfAnyReactComponentType = checkIfAnyReactComponentType;
//# sourceMappingURL=detectReactComponents.js.map
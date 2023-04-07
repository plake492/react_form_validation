import * as React from 'react';
export var isClassComponent = function (component) {
    return (typeof component === 'function' && !!component.prototype.isReactComponent);
};
export var isFunctionComponent = function (component) {
    return (typeof component === 'function' &&
        React.isValidElement(component()));
};
export var isReactComponent = function (component) {
    return isClassComponent(component) || isFunctionComponent(component);
};
export var isElement = function (element) {
    return React.isValidElement(element);
};
export var isDOMTypeElement = function (element) {
    return isElement(element) && typeof element.type === 'string';
};
export var isCompositeTypeElement = function (element) {
    return isElement(element) && typeof element.type === 'function';
};
export var checkIfAnyReactComponentType = function (value) {
    return (isClassComponent(value) ||
        isFunctionComponent(value) ||
        isReactComponent(value) ||
        isElement(value) ||
        isDOMTypeElement(value) ||
        isCompositeTypeElement(value));
};
//# sourceMappingURL=detectReactComponents.js.map
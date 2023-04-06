import * as React from 'react';
import { checkIfAnyReactComponentType } from '../../utils/detectReactComponents';
var MessageWrapper = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "status-message error" },
        React.createElement("svg", { id: "error", width: "16", height: "16", viewBox: "0 0 25 25", fill: "none" },
            React.createElement("circle", { cx: "12.5001", cy: "12.5", r: "11.75", stroke: "currentColor", "stroke-width": "1.5" }),
            React.createElement("line", { x1: "20.6777", y1: "4.23744", x2: "4.23744", y2: "20.6777", stroke: "currentColor", "stroke-width": "1.75", "stroke-linecap": "round" })),
        children));
};
export var IsIvalidErrorMessage = function (_a) {
    var label = _a.label;
    return (React.createElement(MessageWrapper, null,
        React.createElement("i", null, checkIfAnyReactComponentType(label)
            ? 'Invalid input'
            : "".concat(label, " is invalid"))));
};
export var RequiredFieldErrorMessage = function (_a) {
    var label = _a.label;
    return (React.createElement(MessageWrapper, null,
        React.createElement("i", null, checkIfAnyReactComponentType(label)
            ? 'Field is required '
            : "".concat(label, " is required"))));
};
export var PasswordMatchErrorMessage = function () {
    return (React.createElement(MessageWrapper, null,
        React.createElement("i", null, "Passwords do not match")));
};
//# sourceMappingURL=FormMessages.js.map
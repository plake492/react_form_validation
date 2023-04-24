"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordMatchErrorMessage = exports.RequiredFieldErrorMessage = exports.IsIvalidErrorMessage = void 0;
var React = require("react");
var detectReactComponents_1 = require("../../utils/detectReactComponents");
var MessageWrapper = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "status-message error" },
        React.createElement("svg", { id: "error", width: "16", height: "16", viewBox: "0 0 25 25", fill: "none" },
            React.createElement("circle", { cx: "12.5001", cy: "12.5", r: "11.75", stroke: "currentColor", "stroke-width": "1.5" }),
            React.createElement("line", { x1: "20.6777", y1: "4.23744", x2: "4.23744", y2: "20.6777", stroke: "currentColor", "stroke-width": "1.75", "stroke-linecap": "round" })),
        children));
};
var IsIvalidErrorMessage = function (_a) {
    var label = _a.label;
    return (React.createElement(MessageWrapper, null,
        React.createElement("i", null, (0, detectReactComponents_1.checkIfAnyReactComponentType)(label)
            ? 'Invalid input'
            : "".concat(label, " is invalid"))));
};
exports.IsIvalidErrorMessage = IsIvalidErrorMessage;
var RequiredFieldErrorMessage = function (_a) {
    var label = _a.label;
    return (React.createElement(MessageWrapper, null,
        React.createElement("i", null, (0, detectReactComponents_1.checkIfAnyReactComponentType)(label)
            ? 'Field is required '
            : "".concat(label, " is required"))));
};
exports.RequiredFieldErrorMessage = RequiredFieldErrorMessage;
var PasswordMatchErrorMessage = function () {
    return (React.createElement(MessageWrapper, null,
        React.createElement("i", null, "Passwords do not match")));
};
exports.PasswordMatchErrorMessage = PasswordMatchErrorMessage;
//# sourceMappingURL=FormMessages.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_transition_group_1 = require("react-transition-group");
function FadeInComponent(_a) {
    var trigger = _a.trigger, _b = _a.timeout, timeout = _b === void 0 ? 300 : _b, children = _a.children;
    return (React.createElement(react_transition_group_1.CSSTransition, { in: trigger, classNames: "fade-transition", unmountOnExit: true, timeout: timeout }, children));
}
exports.default = FadeInComponent;
//# sourceMappingURL=FadeInComponent.js.map
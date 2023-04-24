"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormFieldMessages = void 0;
var React = require("react");
var FadeInComponent_1 = require("../components/BaseComponents/FadeInComponent");
var detectReactComponents_1 = require("../utils/detectReactComponents");
var useFormFieldMessages = function (_a) {
    var message = _a.message, children = _a.children, bem = _a.bem, forceMessageClass = _a.forceMessageClass;
    var hasValidChildren = Array.isArray(children) && children.some(function (child) { return !!child; });
    var _b = React.useState(false), showChildMessage = _b[0], setShowChildMessage = _b[1];
    React.useEffect(function () { return setShowChildMessage(hasValidChildren); }, [hasValidChildren]);
    return !!message || hasValidChildren ? (React.createElement("div", { className: !(0, detectReactComponents_1.checkIfAnyReactComponentType)(message) || forceMessageClass
            ? bem('message')
            : null },
        message && (0, detectReactComponents_1.checkIfAnyReactComponentType)(message) ? (message) : Array.isArray(message) ? (message.map(function (text, index) { return React.createElement("div", { key: text + index }, text); })) : (React.createElement("span", null, message)),
        React.createElement(FadeInComponent_1.default, { trigger: showChildMessage },
            React.createElement("span", null, children)))) : null;
};
exports.useFormFieldMessages = useFormFieldMessages;
//# sourceMappingURL=useFormFieldMessages.js.map
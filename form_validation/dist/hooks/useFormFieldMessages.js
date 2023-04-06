import * as React from 'react';
import FadeInComponent from '../components/BaseComponents/FadeInComponent';
import { checkIfAnyReactComponentType } from '../utils/detectReactComponents';
export var useFormFieldMessages = function (_a) {
    var message = _a.message, children = _a.children, bem = _a.bem, forceMessageClass = _a.forceMessageClass;
    var hasValidChildren = Array.isArray(children) && children.some(function (child) { return !!child; });
    var _b = React.useState(false), showChildMessage = _b[0], setShowChildMessage = _b[1];
    React.useEffect(function () { return setShowChildMessage(hasValidChildren); }, [hasValidChildren]);
    return !!message || hasValidChildren ? (React.createElement("div", { className: !checkIfAnyReactComponentType(message) || forceMessageClass
            ? bem('message')
            : null },
        message && checkIfAnyReactComponentType(message) ? (message) : Array.isArray(message) ? (message.map(function (text, index) { return React.createElement("div", { key: text + index }, text); })) : (React.createElement("span", null, message)),
        React.createElement(FadeInComponent, { trigger: showChildMessage },
            React.createElement("span", null, children)))) : null;
};
//# sourceMappingURL=useFormFieldMessages.js.map
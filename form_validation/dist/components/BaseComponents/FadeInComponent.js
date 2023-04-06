import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
export default function FadeInComponent(_a) {
    var trigger = _a.trigger, _b = _a.timeout, timeout = _b === void 0 ? 300 : _b, children = _a.children;
    return (React.createElement(CSSTransition, { in: trigger, classNames: "fade-transition", unmountOnExit: true, timeout: timeout }, children));
}
//# sourceMappingURL=FadeInComponent.js.map
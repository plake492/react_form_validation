import { useEffect } from 'react';
export var useOnClickOutside = function (_a) {
    var handler = _a.handler, reference = _a.reference, exception = _a.exception;
    useEffect(function () {
        var listener = function (event) {
            // Do nothing if clicking reference's element or descendent elements
            var _a, _b;
            if (!reference.current ||
                ((_a = reference.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)) ||
                (exception && ((_b = exception.current) === null || _b === void 0 ? void 0 : _b.contains(event.target)))) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return function () {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [reference, handler, exception]);
};
//# sourceMappingURL=useOnClickOutside.js.map
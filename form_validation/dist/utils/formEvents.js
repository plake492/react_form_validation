"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formEvents = void 0;
var formEvents = function (_a) {
    var onChange = _a.onChange, onClick = _a.onClick, onBlur = _a.onBlur;
    var handleOnClick = function (event) {
        return onClick && onClick(event.target.value, event);
    };
    var handleOnChange = function (event) {
        return onChange && onChange(event.target.value, event);
    };
    return {
        onChange: handleOnChange,
        onClick: handleOnClick,
        onBlur: onBlur,
    };
};
exports.formEvents = formEvents;
//# sourceMappingURL=formEvents.js.map
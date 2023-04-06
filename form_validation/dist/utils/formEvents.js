export var formEvents = function (_a) {
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
//# sourceMappingURL=formEvents.js.map
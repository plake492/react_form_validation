"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var useBemify_1 = require("../../../hooks/useBemify");
var FieldLabel_1 = require("../../BaseComponents/FieldLabel");
var SuccessIcon_1 = require("../../BaseComponents/SuccessIcon");
var useFormFieldMessages_1 = require("../../../hooks/useFormFieldMessages");
var formEvents_1 = require("../../../utils/formEvents");
function Textarea(_a) {
    var label = _a.label, value = _a.value, placeholder = _a.placeholder, ariaLabel = _a.ariaLabel, wrapperClasses = _a.wrapperClasses, message = _a.message, autocomplete = _a.autocomplete, width = _a.width, isRequired = _a.isRequired, isBlock = _a.isBlock, isReadOnly = _a.isReadOnly, isDisabled = _a.isDisabled, isSuccess = _a.isSuccess, hasError = _a.hasError, onClick = _a.onClick, onChange = _a.onChange, onBlur = _a.onBlur, shouldAutoFocus = _a.shouldAutoFocus, shouldHideStatus = _a.shouldHideStatus, isValid = _a.isValid, children = _a.children, _b = _a.rows, rows = _b === void 0 ? 6 : _b, columnClass = _a.columnClass, fieldId = _a.fieldId, styles = _a.styles;
    var bem = (0, useBemify_1.useBemify)('textarea');
    var messages = (0, useFormFieldMessages_1.useFormFieldMessages)({
        children: children,
        message: message,
        bem: bem,
    });
    var events = (0, formEvents_1.formEvents)({
        onChange: onChange,
        onClick: onClick,
        onBlur: onBlur,
    });
    return (React.createElement("div", { className: bem('', wrapperClasses, columnClass, [isBlock, 'block'], [isDisabled, 'disabled'], [isReadOnly, 'readonly'], [!shouldHideStatus && (hasError || !isValid), 'error'], [!shouldHideStatus && isSuccess, 'success']), style: __assign(__assign({}, (width ? { '--input-width': width } : {})), (!!styles ? styles : {})) },
        React.createElement("div", { className: bem('label-wrapper') },
            React.createElement(FieldLabel_1.default, { className: bem('label'), htmlFor: fieldId, isRequired: isRequired }, label),
            React.createElement(SuccessIcon_1.default, { className: bem('success'), isSuccess: isSuccess })),
        React.createElement("div", { className: bem('container', [isReadOnly, 'readonly'], [hasError || !isValid, 'error']) },
            React.createElement("textarea", __assign({ className: bem('field'), id: fieldId, "aria-label": ariaLabel || placeholder, placeholder: placeholder, readOnly: isReadOnly, disabled: isDisabled, value: value, required: isRequired, autoFocus: shouldAutoFocus, autoComplete: autocomplete, rows: rows }, events))),
        React.createElement("div", { className: bem('message-wrapper') }, messages)));
}
exports.default = Textarea;
//# sourceMappingURL=index.js.map
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
import * as React from 'react';
import FieldLabel from '../../BaseComponents/FieldLabel';
import { useBemify } from '../../../hooks/useBemify';
import { useFormFieldMessages } from '../../../hooks/useFormFieldMessages';
import { formEvents } from '../../../utils/formEvents';
export default function Checkbox(_a) {
    var _b = _a.type, type = _b === void 0 ? 'checkbox' : _b, label = _a.label, value = _a.value, placeholder = _a.placeholder, ariaLabel = _a.ariaLabel, wrapperClasses = _a.wrapperClasses, message = _a.message, isRequired = _a.isRequired, isBlock = _a.isBlock, isReadOnly = _a.isReadOnly, isDisabled = _a.isDisabled, isSuccess = _a.isSuccess, hasError = _a.hasError, shouldAutoFocus = _a.shouldAutoFocus, shouldHideStatus = _a.shouldHideStatus, onClick = _a.onClick, onChange = _a.onChange, onBlur = _a.onBlur, children = _a.children, columnClass = _a.columnClass, fieldId = _a.fieldId, styles = _a.styles;
    var bem = useBemify('checkbox');
    var messages = useFormFieldMessages({
        message: message,
        children: children,
        bem: bem,
        forceMessageClass: true,
    });
    var events = formEvents({ onChange: onChange, onClick: onClick, onBlur: onBlur });
    return (React.createElement("div", { className: bem('', wrapperClasses, columnClass, [isBlock, 'block'], [isDisabled, 'disabled'], [isReadOnly, 'readonly'], [isSuccess, 'success'], [!shouldHideStatus && hasError, 'error']), style: __assign({}, (!!styles ? styles : {})) },
        React.createElement("div", { className: bem('field-wrapper') },
            React.createElement("input", __assign({ type: type, id: fieldId, className: bem('field'), "aria-label": ariaLabel || placeholder, placeholder: placeholder, disabled: isDisabled, checked: value, required: isRequired, autoFocus: shouldAutoFocus }, events)),
            React.createElement("div", { className: bem('box') })),
        React.createElement("div", { className: bem('label') },
            React.createElement(FieldLabel, { htmlFor: fieldId, isRequired: isRequired }, label),
            React.createElement("div", { className: bem('message-wrapper') }, messages))));
}
//# sourceMappingURL=index.js.map
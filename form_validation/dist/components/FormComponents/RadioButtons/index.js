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
import { useBemify } from '../../../hooks/useBemify';
import FieldLabel from '../../BaseComponents/FieldLabel';
import { useFormFieldMessages } from '../../../hooks/useFormFieldMessages';
import { formEvents } from '../../../utils/formEvents';
var Radio = function (_a) {
    var name = _a.name, id = _a.id, label = _a.label, value = _a.value, checked = _a.checked, formGroupId = _a.formGroupId, isDisabled = _a.isDisabled, events = _a.events, _b = _a.type, type = _b === void 0 ? 'radio' : _b;
    var radioValue = value !== null && value !== void 0 ? value : label;
    var radioButtonId = formGroupId ? "".concat(formGroupId, "__").concat(id) : id;
    var bem = useBemify('radio');
    return (React.createElement("div", { className: bem('') },
        React.createElement("div", { className: bem('field-wrapper') },
            React.createElement("input", __assign({ className: bem('field'), type: type, id: radioButtonId, name: name, value: radioValue, defaultChecked: checked === radioValue, disabled: isDisabled }, events)),
            React.createElement("div", { className: bem('circle') })),
        React.createElement("label", { className: bem('label'), htmlFor: radioButtonId }, label)));
};
export default function RadioButtons(_a) {
    var label = _a.label, value = _a.value, options = _a.options, wrapperClasses = _a.wrapperClasses, formGroupId = _a.formGroupId, message = _a.message, isRequired = _a.isRequired, isDisabled = _a.isDisabled, isSuccess = _a.isSuccess, isReadOnly = _a.isReadOnly, hasError = _a.hasError, shouldHideStatus = _a.shouldHideStatus, isVertical = _a.isVertical, onChange = _a.onChange, onClick = _a.onClick, onBlur = _a.onBlur, fieldId = _a.fieldId, styles = _a.styles, children = _a.children, columnClass = _a.columnClass;
    var bem = useBemify('radio-buttons');
    var messages = useFormFieldMessages({
        message: message,
        children: children,
        bem: bem,
        forceMessageClass: true,
    });
    var checked = value;
    var events = formEvents({
        onChange: onChange,
        onClick: onClick,
        onBlur: onBlur,
    });
    return (React.createElement("fieldset", { className: bem('', wrapperClasses, columnClass, [isDisabled, 'disabled'], [isSuccess, 'success'], [isReadOnly, 'readonly'], [!shouldHideStatus && hasError, 'error']), style: __assign({}, (!!styles ? styles : {})) },
        React.createElement(FieldLabel, { className: bem('label'), isRequired: isRequired, el: "legend" }, label),
        React.createElement("div", { className: bem('radios', [isVertical, '--vertical']) }, options.map(function (_a) {
            var id = _a.id, label = _a.label, value = _a.value;
            return (React.createElement(Radio, { key: id, id: id, label: label, value: value, name: fieldId, checked: checked, formGroupId: formGroupId, isDisabled: isDisabled, events: events }));
        })),
        React.createElement("div", { className: bem('message-wrapper') }, messages)));
}
//# sourceMappingURL=index.js.map
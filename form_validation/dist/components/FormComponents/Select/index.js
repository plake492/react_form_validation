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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from 'react';
import { useBemify } from '../../../hooks/useBemify';
import FieldLabel from '../../BaseComponents/FieldLabel';
import SuccessIcon from '../../BaseComponents/SuccessIcon';
import { useFormFieldMessages } from '../../../hooks/useFormFieldMessages';
import { formEvents } from '../../../utils/formEvents';
var Option = function (_a) {
    var value = _a.value, label = _a.label, disabled = _a.disabled, selected = _a.selected;
    return (React.createElement("option", { disabled: disabled, value: value !== null && value !== void 0 ? value : label, selected: selected }, label));
};
export default function Select(_a) {
    var label = _a.label, value = _a.value, placeholder = _a.placeholder, wrapperClasses = _a.wrapperClasses, message = _a.message, name = _a.name, width = _a.width, isBlock = _a.isBlock, isDisabled = _a.isDisabled, isReadOnly = _a.isReadOnly, isSuccess = _a.isSuccess, isRequired = _a.isRequired, shouldHideStatus = _a.shouldHideStatus, hasError = _a.hasError, onChange = _a.onChange, onClick = _a.onClick, onBlur = _a.onBlur, children = _a.children, options = _a.options, removePlaceholder = _a.removePlaceholder, fieldId = _a.fieldId, columnClass = _a.columnClass, forDatePicker = _a.forDatePicker, hideLabel = _a.hideLabel;
    var formatPlaceholder = placeholder !== null && placeholder !== void 0 ? placeholder : '--select--';
    var optionsList = !removePlaceholder
        ? __spreadArray([{ label: formatPlaceholder, value: '', isPlaceholder: true }], options, true) : options;
    var handleOnClick = function (v) {
        if (removePlaceholder && onChange) {
            onChange(v);
        }
        if (onClick) {
            onClick(v);
        }
    };
    var bem = useBemify('select');
    var messages = useFormFieldMessages({
        children: children,
        message: message,
        bem: bem,
    });
    var events = formEvents({
        onClick: handleOnClick,
        onChange: onChange,
        onBlur: onBlur,
    });
    return (React.createElement("fieldset", { className: bem('', columnClass, wrapperClasses, [isBlock, 'block'], [isDisabled, 'disabled'], [isReadOnly, 'readonly'], [!shouldHideStatus && hasError, 'error'], [!shouldHideStatus && isSuccess, 'success'], [forDatePicker, '--date-picker']), style: __assign({}, (width ? { '--input-width': width } : {})) },
        React.createElement("div", { className: bem('label-wrapper', [hideLabel, '--hidden']) },
            React.createElement(FieldLabel, { className: bem('label'), isRequired: isRequired, el: "legend" }, label),
            React.createElement(SuccessIcon, { className: bem('success'), isSuccess: isSuccess })),
        React.createElement("div", { className: bem('container', [isReadOnly, 'readonly'], [hasError, 'error']) },
            React.createElement("select", __assign({ id: fieldId, name: name !== null && name !== void 0 ? name : fieldId, className: bem('field', [!value, '--unselected']) }, events), optionsList.map(function (option, index) { return (React.createElement(Option, __assign({ key: option.label + index, disabled: option.isPlaceholder && !!value }, option))); }))),
        React.createElement("div", { className: bem('message-wrapper') }, messages)));
}
//# sourceMappingURL=index.js.map
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
import FadeInComponent from '../../BaseComponents/FadeInComponent';
import { useBemify } from '../../../hooks/useBemify';
import { useFormFieldMessages } from '../../../hooks/useFormFieldMessages';
import { formEvents } from '../../../utils/formEvents';
import SuccessIcon from '../../BaseComponents/SuccessIcon';
import FieldLabel from '../../BaseComponents/FieldLabel';
import CalendarWrapper from './CalendarWrapper';
export default function DatePicker(_a) {
    var _b = _a.startDate, startDate = _b === void 0 ? new Date() : _b, showTwoMonths = _a.showTwoMonths, onChange = _a.onChange, label = _a.label, value = _a.value, placeholder = _a.placeholder, ariaLabel = _a.ariaLabel, wrapperClasses = _a.wrapperClasses, message = _a.message, autocomplete = _a.autocomplete, isRequired = _a.isRequired, isReadOnly = _a.isReadOnly, isDisabled = _a.isDisabled, isSuccess = _a.isSuccess, hasError = _a.hasError, shouldAutoFocus = _a.shouldAutoFocus, shouldHideStatus = _a.shouldHideStatus, isValid = _a.isValid, onClick = _a.onClick, onBlur = _a.onBlur, _c = _a.appendedIconSize, appendedIconSize = _c === void 0 ? { width: '20', height: '20' } : _c, columnClass = _a.columnClass, fieldId = _a.fieldId, forwardRef = _a.forwardRef, children = _a.children, styles = _a.styles, monthAndYearAreSelectable = _a.monthAndYearAreSelectable, hideLabel = _a.hideLabel;
    var _d = React.useState(false), showDatePicker = _d[0], setShowDatePicker = _d[1];
    var bem = useBemify('datepicker');
    var iconRef = React.useRef();
    var handleKeydown = function (e) {
        if (document.activeElement === iconRef.current && e.key === 'Enter') {
            setShowDatePicker(true);
        }
        if (e.key === 'Escape') {
            setShowDatePicker(false);
        }
    };
    React.useEffect(function () {
        window.addEventListener('keydown', handleKeydown);
        return function () { return window.removeEventListener('keydown', handleKeydown); };
    }, []);
    // Get messages as needed
    var messages = useFormFieldMessages({
        children: children,
        message: message,
        bem: bem,
    });
    var events = formEvents({
        onChange: onChange,
        onClick: onClick,
        onBlur: onBlur,
    });
    return (React.createElement("div", { className: bem('', columnClass, wrapperClasses, [showDatePicker, 'z-2'], [isDisabled, 'disabled'], [isReadOnly, 'readonly'], [!shouldHideStatus && (hasError || !isValid), 'error'], [!shouldHideStatus && isSuccess, 'success']), style: __assign({}, (!!styles ? styles : {})) },
        React.createElement("div", { className: bem('label-wrapper', [hideLabel, '--hidden']) },
            React.createElement(FieldLabel, { className: bem('label'), htmlFor: fieldId, isRequired: isRequired }, label),
            React.createElement(SuccessIcon, { className: bem('success'), isSuccess: isSuccess })),
        React.createElement("div", { className: bem('container', 'position-relative', [isReadOnly, 'readonly'], [hasError || !isValid, 'error']) },
            React.createElement("input", __assign({ ref: forwardRef, className: bem('field'), type: "text", id: fieldId, "aria-label": ariaLabel !== null && ariaLabel !== void 0 ? ariaLabel : placeholder, placeholder: placeholder, readOnly: isReadOnly, disabled: isDisabled, value: value, required: isRequired, autoFocus: shouldAutoFocus, autoComplete: autocomplete }, events)),
            React.createElement("div", { className: bem('appended-icon-wrapper'), ref: iconRef, tabIndex: 0 },
                React.createElement("svg", __assign({ className: bem('appended-icon', '--clickable'), id: "calendar", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", onClick: function () { return setShowDatePicker(function (prev) { return !prev; }); } }, appendedIconSize),
                    React.createElement("path", { d: "M5 4.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5zM11 4.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5z" }),
                    React.createElement("path", { d: "M13 14.5H3c-.827 0-1.5-.673-1.5-1.5V4c0-.827.673-1.5 1.5-1.5h10c.827 0 1.5.673 1.5 1.5v9c0 .827-.673 1.5-1.5 1.5zM3 3.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H3z" }),
                    React.createElement("path", { d: "M14 6.5H2a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1zM5.5 7.5h1v1h-1zM7.5 7.5h1v1h-1zM9.5 7.5h1v1h-1zM11.5 7.5h1v1h-1zM3.5 9.5h1v1h-1zM5.5 9.5h1v1h-1zM7.5 9.5h1v1h-1zM9.5 9.5h1v1h-1zM11.5 9.5h1v1h-1zM3.5 11.5h1v1h-1zM5.5 11.5h1v1h-1zM7.5 11.5h1v1h-1z" }))),
            React.createElement(FadeInComponent, { trigger: showDatePicker, timeout: 200 },
                React.createElement(CalendarWrapper, { showDatePicker: showDatePicker, setShowDatePicker: setShowDatePicker, iconRef: iconRef, showTwoMonths: showTwoMonths, startDate: startDate, value: value, onChange: onChange, monthAndYearAreSelectable: monthAndYearAreSelectable }))),
        React.createElement("div", { className: bem('message-wrapper') }, messages)));
}
//# sourceMappingURL=index.js.map
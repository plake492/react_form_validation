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
var detectReactComponents_1 = require("../../../utils/detectReactComponents");
var FieldLabel_1 = require("../../BaseComponents/FieldLabel");
var SuccessIcon_1 = require("../../BaseComponents/SuccessIcon");
var useFormFieldMessages_1 = require("../../../hooks/useFormFieldMessages");
var formEvents_1 = require("../../../utils/formEvents");
function EyeOpened() {
    return (React.createElement("svg", { id: "eye-opened", width: "20px", height: "20px", viewBox: "0 0 26 23", fill: "none", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M24.567 8.066c-.251 0-.522-.072-.821-.221l-.09-.045-.066-.076c-2.788-3.32-6.625-5.15-10.802-5.15S4.853 4.457 1.98 7.735l-.062.07-.086.043c-.148.074-.433.197-.66.197-.175 0-.496 0-.786-.287C-.09 7.287-.07 6.605.15 6.173l.027-.05.035-.043C3.553 2.16 8.022 0 12.791 0c4.767 0 9.224 2.154 12.566 6.066.218.225.498.72.074 1.565l-.036.069-.055.055a1.074 1.074 0 0 1-.773.308v.003ZM12.939 22C8.175 22 3.713 19.846.372 15.934c-.438-.451-.371-1.159.163-1.688a1.07 1.07 0 0 1 .773-.312c.251 0 .522.072.82.221l.092.045.064.076c2.789 3.32 6.626 5.15 10.803 5.15 4.177 0 7.937-1.88 10.81-5.157l.021-.024c.235-.232.541-.36.86-.36.318 0 .624.128.859.36.479.476.481 1.216.012 1.696-3.54 3.967-7.935 6.064-12.713 6.064L12.94 22Z", fill: "currentColor" }),
        React.createElement("path", { d: "M16.811 9.818a2.502 2.502 0 0 1-2.532-2.512c0-.592.3-1.183.596-1.625-.596-.147-1.192-.297-1.936-.297-3.129 0-5.81 2.513-5.81 5.764 0 3.252 2.533 5.765 5.81 5.765 3.276 0 5.809-2.513 5.809-5.765 0-.59-.148-1.182-.3-1.624-.444.147-1.04.297-1.637.297v-.003Z", fill: "currentColor" })));
}
function EyeClosed() {
    return (React.createElement("svg", { id: "eye-closed", width: "20px", height: "20px", viewBox: "0 0 26 13", fill: "none", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M1.002 4.273 2.401 3.2c-.323-.536-.645-1.073-.86-1.718-.217-.537 0-1.18.537-1.396.537-.216 1.182 0 1.398.537C5.09 4.487 8.854 6.956 13.05 6.956A10.24 10.24 0 0 0 22.514.73c.215-.537.86-.753 1.399-.537.537.216.753.86.537 1.396-.216.536-.537 1.073-.753 1.61l1.398 1.073c.43.322.538.966.216 1.503-.216.322-.538.43-.86.43-.217 0-.431-.108-.646-.216l-1.398-1.074c-.43.43-.753.86-1.29 1.287l1.076 1.396c.323.43.216 1.18-.216 1.503-.216.107-.43.216-.645.216-.323 0-.645-.107-.86-.43l-1.076-1.396a7.445 7.445 0 0 1-1.613.753l.645 1.718c.216.537-.107 1.18-.645 1.396h-.323c-.43 0-.86-.323-1.075-.752l-.538-1.719c-.537.107-1.182.216-1.721.323v1.718c0 .644-.43 1.073-1.075 1.073s-1.076-.43-1.076-1.073V9.21c-.537 0-1.182-.107-1.721-.216l-.538 1.719c-.107.43-.537.752-1.075.752h-.323c-.538-.216-.861-.752-.645-1.396l.538-1.718c-.538-.216-1.076-.537-1.613-.753L5.523 8.994c-.216.323-.538.43-.861.43-.216 0-.43-.107-.645-.216-.43-.323-.537-1.073-.216-1.503L4.876 6.31c-.43-.43-.86-.752-1.29-1.287L2.189 6.095c-.216.107-.43.216-.644.216-.324 0-.645-.107-.861-.43-.322-.536-.215-1.18.325-1.61l-.006.002Z", fill: "currentColor" })));
}
function Input(_a) {
    var label = _a.label, value = _a.value, placeholder = _a.placeholder, ariaLabel = _a.ariaLabel, wrapperClasses = _a.wrapperClasses, message = _a.message, autocomplete = _a.autocomplete, isRequired = _a.isRequired, isBlock = _a.isBlock, isReadOnly = _a.isReadOnly, isDisabled = _a.isDisabled, isSuccess = _a.isSuccess, hasError = _a.hasError, shouldAutoFocus = _a.shouldAutoFocus, shouldHideStatus = _a.shouldHideStatus, isValid = _a.isValid, onClick = _a.onClick, onChange = _a.onChange, onBlur = _a.onBlur, children = _a.children, type = _a.type, maxlength = _a.maxlength, min = _a.min, max = _a.max, pattern = _a.pattern, prependedIcon = _a.prependedIcon, prependedOnClick = _a.prependedOnClick, appendedIcon = _a.appendedIcon, appendedOnClick = _a.appendedOnClick, columnClass = _a.columnClass, fieldId = _a.fieldId, forwardRef = _a.forwardRef, styles = _a.styles, hideLabel = _a.hideLabel;
    var _b = React.useState(false), showPassword = _b[0], setShowPassword = _b[1];
    var bem = (0, useBemify_1.useBemify)('input');
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
    var inputType = type === 'password' && showPassword ? 'text' : type;
    return (React.createElement("div", { className: bem('', columnClass, wrapperClasses, [isBlock, 'block'], [isDisabled, 'disabled'], [isReadOnly, 'readonly'], [!shouldHideStatus && (hasError || !isValid), 'error'], [!shouldHideStatus && isSuccess, 'success']), style: __assign({}, (!!styles ? styles : {})) },
        React.createElement("div", { className: bem('label-wrapper', [hideLabel, '--hidden']) },
            React.createElement(FieldLabel_1.default, { className: bem('label'), htmlFor: fieldId, isRequired: isRequired }, label),
            React.createElement(SuccessIcon_1.default, { className: bem('success'), isSuccess: isSuccess })),
        React.createElement("div", { className: bem('container', [isReadOnly, 'readonly'], [hasError || !isValid, 'error']) },
            prependedIcon ? ((0, detectReactComponents_1.checkIfAnyReactComponentType)(prependedIcon) ? (React.createElement("span", { className: bem('prepended-icon', [
                    !!prependedOnClick,
                    '--clickable',
                ]), onClick: prependedOnClick }, prependedIcon)) : null) : (prependedIcon),
            React.createElement("input", __assign({ ref: forwardRef, className: bem('field'), type: inputType, id: fieldId, "aria-label": ariaLabel !== null && ariaLabel !== void 0 ? ariaLabel : placeholder, placeholder: placeholder, readOnly: isReadOnly, disabled: isDisabled, value: value, maxLength: maxlength, min: min, max: max, pattern: pattern, required: isRequired, autoFocus: shouldAutoFocus, autoComplete: autocomplete }, events)),
            type === 'password' ? (showPassword ? (React.createElement("span", { className: bem('appended-icon', '--clickable'), onClick: function () { return setShowPassword(false); } },
                React.createElement(EyeOpened, null))) : (React.createElement("span", { className: bem('appended-icon', '--clickable'), onClick: function () { return setShowPassword(true); } },
                React.createElement(EyeClosed, null)))) : appendedIcon ? ((0, detectReactComponents_1.checkIfAnyReactComponentType)(appendedIcon) ? (React.createElement("span", { className: bem('appended-icon', [
                    !!appendedOnClick,
                    '--clickable',
                ]), onClick: appendedOnClick }, appendedIcon)) : null) : (appendedIcon)),
        React.createElement("div", { className: bem('message-wrapper') }, messages)));
}
exports.default = Input;
//# sourceMappingURL=index.js.map
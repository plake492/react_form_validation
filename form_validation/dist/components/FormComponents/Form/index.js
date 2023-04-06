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
import { isDOMTypeElement } from '../../../utils/detectReactComponents';
import { forceArray } from '../../../utils/helpers';
import FieldLabel from '../../BaseComponents/FieldLabel';
import { IsIvalidErrorMessage, PasswordMatchErrorMessage, RequiredFieldErrorMessage, } from '../../BaseComponents/FormMessages';
import { useConfirmPasswordMatch } from '../../../hooks/useConfirmPasswordMatch';
import { useFormFieldsValidation } from '../../../hooks/useFormFieldsValidation';
import { useStyleForm } from '../../../hooks/useStyleForm';
import { validFormComponentChildren } from '../../../utils/validFormComponentChildren';
import { setStyles } from '../../../utils/styleVars';
export default function Form(_a) {
    var children = _a.children, onSubmit = _a.onSubmit, noValidate = _a.noValidate, excludeFieldFromConfirmPassword = _a.excludeFieldFromConfirmPassword, wrapperClasses = _a.wrapperClasses, disableBtnError = _a.disableBtnError, disableSuccessIndicators = _a.disableSuccessIndicators, formId = _a.formId, formLabel = _a.formLabel, _b = _a.autoComplete, autoComplete = _b === void 0 ? 'off' : _b, _c = _a.gap, gap = _c === void 0 ? 'md' : _c, rowGap = _a.rowGap, colGap = _a.colGap, _d = _a.colorTheme, colorTheme = _d === void 0 ? 'dark' : _d, styleOptions = _a.styleOptions;
    // Handles password matching
    var _e = useConfirmPasswordMatch({ children: children, excludeFieldFromConfirmPassword: excludeFieldFromConfirmPassword }), passwordMatchError = _e.passwordMatchError, handlePasswordMatchOnBlur = _e.handlePasswordMatchOnBlur, checkIfPasswordMatchIsNeeded = _e.checkIfPasswordMatchIsNeeded, updatePasswordValue = _e.updatePasswordValue, handlePasswordsMatch = _e.handlePasswordsMatch, passwordIDs = _e.passwordIDs;
    // Handles input and form validation
    var _f = useFormFieldsValidation({ children: children }), missingRequiredValue = _f.missingRequiredValue, updateRequiredFieldValue = _f.updateRequiredFieldValue, containesValidationError = _f.containesValidationError, checkFieldValidation = _f.checkFieldValidation, formItemValues = _f.formItemValues;
    var formRef = React.useRef();
    useStyleForm({ formRef: formRef, styleOptions: styleOptions });
    // Set up function for handling styles
    var bem = useBemify('form');
    var _g = React.useState(false), formError = _g[0], setFormError = _g[1];
    var _h = React.useState(false), formSubmissionAttempted = _h[0], setFormSubmitionAttemp = _h[1];
    React.useEffect(function () {
        if (formError) {
            setFormError(missingRequiredValue || containesValidationError || passwordMatchError);
        }
    }, [containesValidationError, passwordMatchError]);
    // Add a unique id that can be common to all form fields
    var reactId = React.useId();
    var formGroupId = formId ? formId + reactId : reactId;
    /**
     * Validate the child prop requiremnts.
     * Run the onSubmit function prop
     */
    var handleSubmit = function (event) {
        event.preventDefault();
        // Set attempted submit flag on
        setFormSubmitionAttemp(true);
        var formIsInvalid = missingRequiredValue || containesValidationError || passwordMatchError;
        // Set the error state
        setFormError(formIsInvalid);
        // Call the submit callback and pass the event, and the validation state
        onSubmit(event, !formIsInvalid);
    };
    // Force children to be an array
    var elements = forceArray(children);
    var gapClass = rowGap && colGap
        ? "g-col-".concat(colGap, " g-row-").concat(rowGap)
        : gap && rowGap && !colGap
            ? "g-row-".concat(rowGap, " g-col-").concat(gap)
            : gap && !rowGap && colGap
                ? "g-col-".concat(colGap, " g-row-").concat(gap)
                : "g-".concat(gap);
    return (React.createElement("form", { onSubmit: handleSubmit, noValidate: noValidate, id: formGroupId, autoComplete: autoComplete, className: bem('', "--".concat(colorTheme)), ref: formRef },
        formLabel ? React.createElement(FieldLabel, { el: "legend" }, formLabel) : null,
        React.createElement("div", { className: bem('field-wrapper', wrapperClasses, 'row', gapClass) }, elements.map(function (el, index) {
            var _a = el.props, id = _a.id, value = _a.value, label = _a.label, type = _a.type, isRequired = _a.isRequired, shouldValidate = _a.shouldValidate, hasError = _a.hasError, onChange = _a.onChange, onBlur = _a.onBlur, validationType = _a.validationType, _b = _a.col, col = _b === void 0 ? 12 : _b, breakpoint = _a.breakpoint, styleConfig = _a.styleConfig;
            /**
             * If child is not a react component,
             * or if it's not on the list of
             * approved form child components,
             * simply return a clone of the child as is
             */
            if (isDOMTypeElement(el) ||
                !validFormComponentChildren.includes(el.type.name)) {
                return (React.createElement(React.Fragment, { key: index }, React.cloneElement(el)));
            }
            // Track if input has been selected and then unselected
            var _c = React.useState(false), isTouched = _c[0], setIsTouched = _c[1];
            // If needed, update the value of the password validation object
            if (checkIfPasswordMatchIsNeeded({ id: id })) {
                updatePasswordValue({ id: id, value: value });
            }
            // ************** VALIDATON **************//
            var isValid = true;
            if (isRequired || shouldValidate) {
                updateRequiredFieldValue({ id: id, value: value });
                isValid = checkFieldValidation({
                    id: id,
                    value: value,
                    validationType: validationType,
                    isTouched: isTouched,
                    shouldValidate: shouldValidate,
                    isRequired: isRequired,
                    type: type,
                });
            }
            var requiredFieldError = formSubmissionAttempted &&
                isRequired &&
                !!formItemValues[id] &&
                !formItemValues[id].value;
            // ************** ADDITIONAL PROPS ************* //
            // Add additional logic to onBlur
            var onBlurProp = function (e) {
                e.stopPropagation();
                setIsTouched(true);
                // Check if password match vaidation is needed
                if (checkIfPasswordMatchIsNeeded({ id: id })) {
                    handlePasswordMatchOnBlur({ id: id, value: value });
                }
                onBlur && onBlur(e);
            };
            // Add additional logic to onChange
            var onChangeProp = function (value, e) {
                // Check if password match vaidation is needed
                if (checkIfPasswordMatchIsNeeded({ id: id })) {
                    handlePasswordsMatch({ id: id, value: value });
                }
                return onChange && onChange(value, e);
            };
            // For required fields with no value, pass an error state
            var isSuccessProp = !disableSuccessIndicators &&
                isTouched && //! This does not allow success to appear when using autocomplete
                !!value &&
                isValid;
            var isRequiredProp = __assign({}, (isRequired && !value ? { hasError: formError } : {}));
            // * PASSWORD MATCH PROPS * //
            // Pasword error
            var passwordMatchHasError = hasError || passwordMatchError || (!value && formError);
            // Password is valide
            var passwordMatchIsValid = isValid && !passwordMatchError;
            // Password match is successful
            var passwordMatchIsSucces = !disableSuccessIndicators &&
                isTouched &&
                !!value &&
                isValid &&
                !passwordMatchError;
            // Handle Password specific props
            var passwordMatchProps = __assign({}, (checkIfPasswordMatchIsNeeded({ id: id })
                ? {
                    hasError: passwordMatchHasError,
                    isValid: passwordMatchIsValid,
                    isSuccess: passwordMatchIsSucces,
                }
                : {}));
            // Set up id with reference to form
            var fieldId = formGroupId ? "".concat(formGroupId, "__").concat(id) : id;
            var columnClass = !!breakpoint
                ? "col-".concat(breakpoint, "-").concat(col, " col-12")
                : "col-".concat(col);
            var styles = !!styleConfig && setStyles(styleConfig);
            var props = __assign(__assign({ columnClass: columnClass, fieldId: fieldId, formGroupId: formGroupId, isValid: isValid, styles: styles, isSuccess: isSuccessProp, onBlur: onBlurProp, onChange: onChangeProp }, isRequiredProp), passwordMatchProps);
            // * Additional Children * //
            // This will avoid using long labels for the error messages
            var messageLabel = !type || type === 'checkbox' || type === 'radio' ? 'Field' : label;
            var newChildren = [
                !isValid ? React.createElement(IsIvalidErrorMessage, { label: messageLabel }) : null,
                requiredFieldError ? (React.createElement(RequiredFieldErrorMessage, { label: messageLabel })) : null,
                /**
                 * This assumes that the confirm password field
                 * will be the last password field present
                 */
                passwordMatchError && id === passwordIDs[1] ? (React.createElement(PasswordMatchErrorMessage, null)) : null,
            ];
            return (React.createElement(React.Fragment, { key: id }, React.cloneElement.apply(React, __spreadArray([el, props], newChildren, false))));
        })),
        React.createElement("div", { className: bem('btn-wrapper') },
            React.createElement("button", { className: bem('submit-btn', [
                    formError && !disableBtnError,
                    'error',
                ]), type: "submit" }, "Submit"))));
}
//# sourceMappingURL=index.js.map
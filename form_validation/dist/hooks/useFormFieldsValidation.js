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
import { forceArray } from '../utils/helpers';
import { formValidation } from '../utils/formValidation';
export var useFormFieldsValidation = function (_a) {
    var children = _a.children;
    var elements = forceArray(children);
    // Find the required children of the form
    var requiredElements = React.useMemo(function () {
        return elements.filter(function (el) { return el.props.isRequired || el.props.shouldValidate; });
    }, []);
    var _b = React.useState({}), formItemValues = _b[0], setFormItemValues = _b[1];
    React.useEffect(function () {
        if (requiredElements && requiredElements.length > 0) {
            setFormItemValues(requiredElements.reduce(function (acc, cur) {
                var _a;
                return (__assign(__assign({}, acc), (_a = {}, _a[cur.props.id] = {
                    value: cur.props.value,
                    isValid: true,
                    isRequired: !!cur.props.isRequired,
                }, _a)));
            }, {}));
        }
    }, [requiredElements]);
    var elementsTracked = Object.values(formItemValues);
    var missingRequiredValue = elementsTracked
        .filter(function (_a) {
        var isRequired = _a.isRequired;
        return isRequired;
    })
        .some(function (_a) {
        var value = _a.value;
        return !value;
    });
    var containesValidationError = elementsTracked.some(function (_a) {
        var isValid = _a.isValid;
        return !isValid;
    });
    var updateRequiredFieldValue = function (_a) {
        var id = _a.id, value = _a.value;
        if (!!formItemValues[id] &&
            /* Prevent infinite loop by comparing incoming value to stored value */
            value !== formItemValues[id].value) {
            // Update the value prop
            setFormItemValues(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[id] = __assign(__assign({}, prev[id]), { value: value }), _a)));
            });
        }
    };
    var checkFieldValidation = function (_a) {
        var id = _a.id, value = _a.value, validationType = _a.validationType, isTouched = _a.isTouched, shouldValidate = _a.shouldValidate, isRequired = _a.isRequired, type = _a.type;
        // Avoid loading a form in an error state by setting isValid to defualt to true
        var isValid = true;
        var validation = validationType || (type in formValidation && type) || 'text';
        if (isTouched && (shouldValidate || isRequired)) {
            // Run a validation check on the input
            var validationTest = void 0;
            if (validation instanceof Function) {
                // If validation passed to input is a function, set the test to that function
                validationTest = validation;
            }
            else {
                // If the validation is a string, then find the matching test from the
                // formValidation obj
                validationTest =
                    formValidation[validation];
            }
            if (validationTest instanceof RegExp) {
                // Run a regex test
                isValid = validationTest.test(value === null || value === void 0 ? void 0 : value.toString());
            }
            if (validationTest instanceof Function) {
                isValid = validationTest(value);
            }
            // If non required field is being validated, the field can be empty
            if (!isRequired && shouldValidate && !value) {
                isValid = true;
            }
            // Update the valid status on the specific formItemValue prop
            if (!!formItemValues[id] && !!formItemValues[id].isValid !== isValid) {
                setFormItemValues(function (prev) {
                    var _a;
                    return (__assign(__assign({}, prev), (_a = {}, _a[id] = __assign(__assign({}, prev[id]), { isValid: isValid }), _a)));
                });
            }
            // This will prevent both the isRequired and isInvalid error
            // from showing at the same time if a required input is empty after touch
            return isRequired && !value ? true : isValid;
        }
        return true;
    };
    return {
        missingRequiredValue: missingRequiredValue,
        updateRequiredFieldValue: updateRequiredFieldValue,
        formItemValues: formItemValues,
        setFormItemValues: setFormItemValues,
        containesValidationError: containesValidationError,
        checkFieldValidation: checkFieldValidation,
    };
};
//# sourceMappingURL=useFormFieldsValidation.js.map
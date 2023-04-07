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
            value !== formItemValues[id].value) {
            setFormItemValues(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[id] = __assign(__assign({}, prev[id]), { value: value }), _a)));
            });
        }
    };
    var checkFieldValidation = function (_a) {
        var id = _a.id, value = _a.value, validationType = _a.validationType, isTouched = _a.isTouched, shouldValidate = _a.shouldValidate, isRequired = _a.isRequired, type = _a.type;
        var isValid = true;
        var validation = validationType || (type in formValidation && type) || 'text';
        if (isTouched && (shouldValidate || isRequired)) {
            var validationTest = void 0;
            if (validation instanceof Function) {
                validationTest = validation;
            }
            else {
                validationTest =
                    formValidation[validation];
            }
            if (validationTest instanceof RegExp) {
                isValid = validationTest.test(value === null || value === void 0 ? void 0 : value.toString());
            }
            if (validationTest instanceof Function) {
                isValid = validationTest(value);
            }
            if (!isRequired && shouldValidate && !value) {
                isValid = true;
            }
            if (!!formItemValues[id] && !!formItemValues[id].isValid !== isValid) {
                setFormItemValues(function (prev) {
                    var _a;
                    return (__assign(__assign({}, prev), (_a = {}, _a[id] = __assign(__assign({}, prev[id]), { isValid: isValid }), _a)));
                });
            }
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
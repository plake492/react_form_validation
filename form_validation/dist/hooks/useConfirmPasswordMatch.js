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
export var useConfirmPasswordMatch = function (_a) {
    var children = _a.children, excludeFieldFromConfirmPassword = _a.excludeFieldFromConfirmPassword;
    var elements = forceArray(children);
    // ****************************** STATE ****************************** //
    /**  Memoizing this prevents any type change to
     * text (common for show password options)
     *from changing this value
     */
    var passwordElements = React.useMemo(function () {
        return elements.filter(function (el) {
            return el.props.type === 'password' &&
                el.props.id !== excludeFieldFromConfirmPassword;
        });
    }, []);
    // Track the mathing state of the password and password confirm
    var _b = React.useState(false), passwordMatchError = _b[0], setPasswordMatchError = _b[1];
    /**
     * Track password and passwordConfirm fields
     * tracking if they've been touched, and their values
     * */
    var _c = React.useState({}), passwordCheckObject = _c[0], setPasswordCheckObj = _c[1];
    /**
     * Store the password field IDs
     */
    var passwordIDs = React.useMemo(function () { return Object.keys(passwordCheckObject); }, [passwordCheckObject]);
    /**
     * Initialize the password check state with the password and confirmPassword
     * as keys containing an obj with 'value', and 'isTouched' properties
     */
    React.useEffect(function () {
        if (passwordElements && passwordElements.length === 2) {
            // Create the password check object
            setPasswordCheckObj(passwordElements.reduce(function (acc, cur) {
                var _a;
                return (__assign(__assign({}, acc), (_a = {}, _a[cur.props.id] = { value: cur.props.value, isTouched: false }, _a)));
            }, {}));
        }
    }, [passwordElements]);
    // ****************************** FUNCTIONS ****************************** //
    // Handle setState logic for the passwordCheckObject
    var updatePasswordConfirmObj = function (_a) {
        var id = _a.id, key = _a.key, value = _a.value;
        return function (prev) {
            var _a, _b;
            return (__assign(__assign({}, prev), (_a = {}, _a[id] = __assign(__assign({}, prev[id]), (_b = {}, _b[key] = value, _b)), _a)));
        };
    };
    var checkIfPasswordMatchIsNeeded = function (_a) {
        var id = _a.id;
        return passwordIDs.length > 0 && passwordIDs.includes(id);
    };
    var updatePasswordValue = function (_a) {
        var id = _a.id, value = _a.value;
        if (!!passwordCheckObject[id] &&
            /* Prevent infinite loop by comparing incoming value to stored value */
            value !== passwordCheckObject[id].value) {
            // Update the value prop
            setPasswordCheckObj(updatePasswordConfirmObj({ id: id, key: 'value', value: value }));
        }
    };
    var handlePasswordsMatch = function (_a) {
        var _b, _c;
        var id = _a.id, value = _a.value, overRideCurrentIsTouched = _a.overRideCurrentIsTouched;
        var otherID = passwordIDs.find(function (idKey) { return idKey !== id; });
        if (!!passwordCheckObject[id] &&
            ((_b = passwordCheckObject[otherID]) === null || _b === void 0 ? void 0 : _b.isTouched) &&
            (((_c = passwordCheckObject[id]) === null || _c === void 0 ? void 0 : _c.isTouched) || overRideCurrentIsTouched)) {
            // If both fields have been touched, then we run the test
            setPasswordMatchError(passwordCheckObject[otherID].value !== value);
        }
    };
    var handlePasswordMatchOnBlur = function (_a) {
        var _b;
        var id = _a.id, value = _a.value;
        if (!((_b = passwordCheckObject[id]) === null || _b === void 0 ? void 0 : _b.isTouched)) {
            // Update the isTouched prop
            setPasswordCheckObj(updatePasswordConfirmObj({ id: id, key: 'isTouched', value: true }));
            handlePasswordsMatch({ id: id, value: value, overRideCurrentIsTouched: true });
        }
    };
    return {
        passwordMatchError: passwordMatchError,
        passwordIDs: passwordIDs,
        handlePasswordMatchOnBlur: handlePasswordMatchOnBlur,
        checkIfPasswordMatchIsNeeded: checkIfPasswordMatchIsNeeded,
        updatePasswordValue: updatePasswordValue,
        handlePasswordsMatch: handlePasswordsMatch,
    };
};
//# sourceMappingURL=useConfirmPasswordMatch.js.map
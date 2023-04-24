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
exports.useConfirmPasswordMatch = void 0;
var React = require("react");
var helpers_1 = require("../utils/helpers");
var useConfirmPasswordMatch = function (_a) {
    var children = _a.children, excludeFieldFromConfirmPassword = _a.excludeFieldFromConfirmPassword;
    var elements = (0, helpers_1.forceArray)(children);
    var passwordElements = React.useMemo(function () {
        return elements.filter(function (el) {
            return el.props.type === 'password' &&
                el.props.id !== excludeFieldFromConfirmPassword;
        });
    }, []);
    var _b = React.useState(false), passwordMatchError = _b[0], setPasswordMatchError = _b[1];
    var _c = React.useState({}), passwordCheckObject = _c[0], setPasswordCheckObj = _c[1];
    var passwordIDs = React.useMemo(function () { return Object.keys(passwordCheckObject); }, [passwordCheckObject]);
    React.useEffect(function () {
        if (passwordElements && passwordElements.length === 2) {
            setPasswordCheckObj(passwordElements.reduce(function (acc, cur) {
                var _a;
                return (__assign(__assign({}, acc), (_a = {}, _a[cur.props.id] = { value: cur.props.value, isTouched: false }, _a)));
            }, {}));
        }
    }, [passwordElements]);
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
            value !== passwordCheckObject[id].value) {
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
            setPasswordMatchError(passwordCheckObject[otherID].value !== value);
        }
    };
    var handlePasswordMatchOnBlur = function (_a) {
        var _b;
        var id = _a.id, value = _a.value;
        if (!((_b = passwordCheckObject[id]) === null || _b === void 0 ? void 0 : _b.isTouched)) {
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
exports.useConfirmPasswordMatch = useConfirmPasswordMatch;
//# sourceMappingURL=useConfirmPasswordMatch.js.map
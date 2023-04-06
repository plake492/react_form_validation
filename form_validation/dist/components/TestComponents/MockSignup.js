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
import Checkbox from '../FormComponents/Checkbox';
import DatePicker from '../FormComponents/DatePicker';
import Form from '../FormComponents/Form';
import Input from '../FormComponents/Input';
import RadioButtons from '../FormComponents/RadioButtons';
import Select from '../FormComponents/Select';
export default function MockSignup() {
    var formStyles = {
        shadowColor: 'grey',
        fieldBackgroundColor: 'blueviolet',
        fieldTextColor: 'darkblue',
        fieldPlaceholderTextColor: 'cornflower',
        fieldBorderColor: 'indego',
        fieldBorderColorFocus: 'orange',
        labelTextColor: 'lime',
        errorColor: 'red',
        successColor: 'orange',
    };
    var _a = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        passwordConfirm: '',
        address: '',
        addressTwo: '',
        zipcode: '',
        dob: '',
        gender: '',
        food: '',
        tos: false,
    }), user = _a[0], setUser = _a[1];
    return (React.createElement("div", { className: "row", style: { padding: '4rem' } },
        React.createElement("div", { className: "col-4", style: {
                top: 16,
                borderRadius: '40px',
                position: 'sticky',
                height: '100%',
            } },
            React.createElement(React.Fragment, null, "{",
                Object.entries(user).map(function (_a) {
                    var key = _a[0], value = _a[1];
                    return (React.createElement("p", { className: " text-md pl-md mb-sm", key: key }, "".concat(key, ": \"").concat(value, "\",")));
                }), "}")),
        React.createElement("div", { className: "col-8" },
            React.createElement(Form, { onSubmit: function (_, status) {
                    return status ? alert('SINGUP SUBMITTED') : alert('signup error');
                }, formId: "signup-form", noValidate: true, autoComplete: "on", formLabel: "Signup form", colorTheme: "light" },
                React.createElement(Input, { type: "text", value: user.firstName, onChange: function (v) {
                        return setUser(function (prev) {
                            var _a;
                            return (__assign(__assign({}, prev), (_a = {}, _a['firstName'] = v, _a)));
                        });
                    }, label: "First Name", id: "first-name", isRequired: true, col: 6 }),
                React.createElement(Input, { type: "text", value: user.lastName, onChange: function (v) {
                        return setUser(function (prev) {
                            var _a;
                            return (__assign(__assign({}, prev), (_a = {}, _a['lastName'] = v, _a)));
                        });
                    }, label: "Last Name", id: "last-name", isRequired: true, col: 6, styleConfig: formStyles }),
                React.createElement(Input, { type: "email", value: user.email, onChange: function (v) { return setUser(function (prev) {
                        var _a;
                        return (__assign(__assign({}, prev), (_a = {}, _a['email'] = v, _a)));
                    }); }, label: "email", id: "email", isRequired: true }),
                React.createElement(Input, { type: "tel", value: user.phone, onChange: function (v) { return setUser(function (prev) {
                        var _a;
                        return (__assign(__assign({}, prev), (_a = {}, _a['phone'] = v, _a)));
                    }); }, label: "phone", id: "phone", shouldValidate: true, validationType: function (v) {
                        return /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(v);
                    } }),
                React.createElement(Input, { label: "Address", type: "text", id: "address", placeholder: "1234 Park Place", value: user.address, isRequired: true, onChange: function (v) {
                        return setUser(function (prev) {
                            var _a;
                            return (__assign(__assign({}, prev), (_a = {}, _a['address'] = v, _a)));
                        });
                    }, message: 'This would be an address' }),
                React.createElement(Input, { label: "Address Line 2", type: "text", id: "address-line-two", placeholder: "APT 2", value: user.addressTwo, onChange: function (v) {
                        return setUser(function (prev) {
                            var _a;
                            return (__assign(__assign({}, prev), (_a = {}, _a['addressTwo'] = v, _a)));
                        });
                    }, col: 6 }),
                React.createElement(Input, { label: "Postal Code", type: "text", id: "postal-code", placeholder: "12345", isRequired: true, value: user.zipcode, onChange: function (v) {
                        return setUser(function (prev) {
                            var _a;
                            return (__assign(__assign({}, prev), (_a = {}, _a['zipcode'] = v, _a)));
                        });
                    }, validationType: function (v) { return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(v); }, col: 6, autocomplete: "on" }),
                React.createElement(DatePicker, { startDate: new Date('01/01/1990'), label: "Date of birth", id: "dob", onChange: function (v) { return setUser(function (prev) {
                        var _a;
                        return (__assign(__assign({}, prev), (_a = {}, _a['dob'] = v, _a)));
                    }); }, value: user.dob, isRequired: true, autocomplete: "on", placeholder: "04/04/1992", col: 6, monthAndYearAreSelectable: true }),
                React.createElement(Select, { label: "Gender", id: "gender", value: user.gender, onChange: function (v) {
                        return setUser(function (prev) {
                            var _a;
                            return (__assign(__assign({}, prev), (_a = {}, _a['gender'] = v, _a)));
                        });
                    }, options: [
                        { label: 'Male' },
                        { label: 'Female' },
                        { label: 'other' },
                    ], col: 6, isRequired: true }),
                React.createElement(Input, { type: "password", value: user.password, onChange: function (v) {
                        return setUser(function (prev) {
                            var _a;
                            return (__assign(__assign({}, prev), (_a = {}, _a['password'] = v, _a)));
                        });
                    }, label: "Password", id: "password", isRequired: true }),
                React.createElement(Input, { type: "password", value: user.passwordConfirm, onChange: function (v) {
                        return setUser(function (prev) {
                            var _a;
                            return (__assign(__assign({}, prev), (_a = {}, _a['passwordConfirm'] = v, _a)));
                        });
                    }, label: "Confirm Password", id: "confirm-password", isRequired: true }),
                React.createElement(RadioButtons, { label: "What is your favorite food?", id: "food", options: [
                        { id: 'food1', label: 'Steak', value: 'steak' },
                        { id: 'food2', label: 'Lobster', value: 'lobster' },
                        { id: 'food3', label: 'Sushi', value: 'sushi' },
                    ], onChange: function (v) {
                        return setUser(function (prev) {
                            var _a;
                            return (__assign(__assign({}, prev), (_a = {}, _a['food'] = v, _a)));
                        });
                    } }),
                React.createElement(Checkbox, { label: 
                    // TODO Allow custom labels and, Ensure that htmlFor is applied propery
                    React.createElement("label", { htmlFor: "tos" },
                        "Please confirm that you have read the",
                        ' ',
                        React.createElement("a", { href: "#" }, "Terms of Service")), id: "tos", isRequired: true, value: user.tos, onChange: function () {
                        return setUser(function (prev) {
                            var _a;
                            return (__assign(__assign({}, prev), (_a = {}, _a['tos'] = !prev['tos'], _a)));
                        });
                    } })))));
}
//# sourceMappingURL=MockSignup.js.map
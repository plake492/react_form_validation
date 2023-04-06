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
var formStyles = {
    shadowColor: 'grey',
    fieldFontSize: '16px',
    fieldBackgroundColor: 'blueviolet',
    disabledTextColor: 'whitesmoke',
    fieldTextColor: 'darkblue',
    fieldPlaceholderTextColor: 'cornflower',
    fieldBorderColor: 'indego',
    fieldBorderColorFocus: 'orange',
    fieldBorderRadius: '40px',
    fieldPaddingX: '20px',
    fieldPaddingY: '10px',
    labelHeight: '40px',
    messageBackgroundColor: '#0000',
    messageBorderRadius: '50px',
    labelTextColor: 'lime',
    errorColor: '#829efd',
    successColor: 'orange',
    fieldMarginBottom: '2px',
};
import Form from '../FormComponents/Form';
import Input from '../FormComponents/Input';
import Checkbox from '../FormComponents/Checkbox';
import Textarea from '../FormComponents/Textarea';
import RadioButtons from '../FormComponents/RadioButtons';
import Select from '../FormComponents/Select';
var radioGroup = [{ label: 'red' }, { label: 'blue' }, { label: 'green' }];
var radioGroupTwo = [
    { id: 'value-1', label: 'Blade Runner' },
    { id: 'value-2', label: 'The Matrix' },
    { id: 'value-3', label: 'Equilibrium' },
];
export default function TestForm() {
    var _a = React.useState(false), showPassword = _a[0], setShowPassword = _a[1];
    var _b = React.useState(false), showPasswordConfirm = _b[0], setShowPasswordConfirm = _b[1];
    var _c = React.useState(''), test = _c[0], setTest = _c[1];
    var _d = React.useState(null), favoriteColor = _d[0], setFavoriteColor = _d[1];
    var _e = React.useState(null), movies = _e[0], setGf = _e[1];
    var _f = React.useState(''), message = _f[0], setMessage = _f[1];
    var _g = React.useState(false), openModal = _g[0], setOpenModal = _g[1];
    var _h = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        address: '',
        addressTwo: '',
        zipcode: '',
        dob: '',
        checked: false,
    }), formFields = _h[0], setFormFields = _h[1];
    var onSubmit = function (_, success) {
        console.log('success ==>', success);
        alert(success ? 'Form success submitted!' : 'Error on form');
    };
    var updateFormItem = function (key, value) { return setFormFields(function (prev) {
        var _a;
        return (__assign(__assign({}, prev), (_a = {}, _a[key] = value, _a)));
    }); };
    return (React.createElement("div", { className: "border-rounded p-lg" },
        React.createElement(Form, { noValidate: true, excludeFieldFromConfirmPassword: "old-password", formId: "test-form", formLabel: React.createElement("h4", null, "FORM TIME"), gap: "md", onSubmit: function (event, success) {
                return onSubmit(event, success);
            }, colorTheme: "dark", styleOptions: formStyles },
            React.createElement(Select, { id: "select", label: "Color", options: radioGroup, placeholder: "color", onChange: function (v) { return setFavoriteColor(v); }, value: favoriteColor, col: 2, isDisabled: true }),
            React.createElement(Input, { label: "First Name", type: "text", id: "first-name", placeholder: "John", value: formFields.firstName, isRequired: true, onChange: function (v) { return updateFormItem('firstName', v); }, col: 5, isDisabled: true }),
            React.createElement(Input, { label: "Last Name", type: "text", id: "last-name", placeholder: "Snow", value: formFields.lastName, isRequired: true, onChange: function (v) { return updateFormItem('lastName', v); }, col: 5 }),
            React.createElement(Input, { label: "Address", type: "text", id: "address", placeholder: "1234 Park Place", value: formFields.address, isRequired: true, onChange: function (v) { return updateFormItem('address', v); }, message: 'This would be an address', col: 7 }),
            React.createElement(Input, { label: "Address Line 2", type: "text", id: "address-line2", placeholder: "APT 2", value: formFields.addressTwo, onChange: function (v) { return updateFormItem('addressTwo', v); } }),
            React.createElement(Input, { label: "Postal Code", type: "text", id: "postal-code", placeholder: "12345", isRequired: true, value: formFields.zipcode, onChange: function (v) { return updateFormItem('zipcode', v); }, validationType: function (v) { return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(v); } }),
            React.createElement(Input, { label: "Password", type: showPassword ? 'text' : 'password', id: "password", value: formFields.password, placeholder: "**********", appendedIcon: "eye-".concat(showPassword ? 'open' : 'closed'), appendedOnClick: function () { return setShowPassword(function (p) { return !p; }); }, isBlock: true, message: [
                    "Password should 4 characters long, it's gonna be really secure!",
                ], isRequired: true, validationType: "password", onChange: function (v) { return updateFormItem('password', v); } }),
            React.createElement(Input, { label: "Confirm Password", type: showPasswordConfirm ? 'text' : 'password', id: "confirm-password", value: formFields.passwordConfirm, placeholder: "**********", appendedIcon: "eye-".concat(showPasswordConfirm ? 'open' : 'closed'), appendedOnClick: function () { return setShowPasswordConfirm(function (p) { return !p; }); }, isBlock: true, isRequired: true, validationType: "password", onChange: function (v) { return updateFormItem('passwordConfirm', v); } }),
            React.createElement(Input, { type: "text", id: "test", placeholder: "Some Text Here", value: test, isBlock: true, label: React.createElement("p", { className: "bg-blue-30 mb-none p-md border-tl-rounded border-tr-rounded mt-md mnb-sm pb-sm text-xs" }, "Custom Label"), onChange: function (v) { return setTest(v); }, shouldValidate: true, validationType: function (v) { return v === 'TEST'; }, message: [
                    "This inputs validation is set to 'value === \"TEST\"'",
                    'This input is not required, but will be validated if there is an input',
                ] }),
            React.createElement(Textarea, { label: "Big Text", id: "text-area", placeholder: "A Message", shouldValidate: true, validationType: function (v) { return v.length > 100; }, value: message, onChange: function (v) { return setMessage(v); }, isRequired: true, message: [
                    'Must container at least 100 characters',
                    "Number of characters: ".concat(message.length.toString()),
                ] }),
            React.createElement(RadioButtons, { label: "Select the best movie", options: radioGroupTwo, value: movies, isRequired: true, onChange: function (v) { return setGf(v); }, id: "movies" }),
            React.createElement(Checkbox, { id: "checkbox", label: "Check me or else this form will not work. You don't want to check me? Well then find a different form", value: formFields.checked, onChange: function () { return updateFormItem('checked', !formFields.checked); }, isRequired: true }))));
}
//# sourceMappingURL=TestForm.js.map
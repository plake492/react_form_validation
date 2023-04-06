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
import Form from '../FormComponents/Form';
import Input from '../FormComponents/Input';
import DatePicker from '../FormComponents/DatePicker';
import RadioButtons from '../FormComponents/RadioButtons';
var eventType = [
    { label: 'Kids', value: 'kids', id: 'kids' },
    { label: 'Adults', value: 'adults', id: 'adults' },
    { label: 'Family', value: 'family', id: 'family' },
];
var eventInitValue = {
    title: '',
    date: '',
    time: '',
    type: '',
};
export default function EventForm() {
    var _a = React.useState(eventInitValue), event = _a[0], setEvent = _a[1];
    var _b = React.useState([]), events = _b[0], setEvetns = _b[1];
    var updateEvent = function (v, prop) {
        setEvent(function (e) {
            var _a;
            return (__assign(__assign({}, e), (_a = {}, _a[prop] = v, _a)));
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Form, { formId: "event", onSubmit: function (_, isValid) {
                isValid && setEvetns(function (prev) { return __spreadArray(__spreadArray([], prev, true), [event], false); });
                setEvent(eventInitValue);
            }, styleOptions: {
                fieldBorderRadius: '8px',
                fieldPlaceholderTextColor: '#eee',
            }, rowGap: "sm", noValidate: true },
            React.createElement(Input, { hideLabel: true, label: "Event title", placeholder: "Event Title", id: "event-title", type: "text", isRequired: true, value: event.title, onChange: function (v) { return updateEvent(v, 'title'); } }),
            React.createElement(DatePicker, { hideLabel: true, label: "Event Date", placeholder: "Event Date", id: "event-date", isRequired: true, value: event.date, onChange: function (v) { return updateEvent(v, 'date'); }, col: 6, showTwoMonths: true }),
            React.createElement(Input, { hideLabel: true, label: "Event Time", placeholder: "Event Time", id: "event-time", type: "text", isRequired: true, value: event.time, onChange: function (v) { return updateEvent(v, 'time'); }, col: 6, validationType: function (v) {
                    return /^([0-1]?[0-9]|2[0-3]):([0-5][0-9][AaPp][Mm])$/.test(v);
                } }),
            React.createElement(RadioButtons, { label: "Event Type", id: "event-type", options: eventType, onChange: function (v) { return updateEvent(v, 'type'); } })),
        events.length ? (React.createElement("div", { className: "py-xxxl" }, events.map(function (event) { return (React.createElement("div", { key: event.title },
            React.createElement("p", null, event.title))); }))) : null));
}
//# sourceMappingURL=EventForm.js.map
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var React = require("react");
var useBemify_1 = require("../../../hooks/useBemify");
var useOnClickOutside_1 = require("../../../hooks/useOnClickOutside");
var Calender_1 = require("./Calender");
function ArrowRight() {
    return (React.createElement("svg", { id: "arrow-right", viewBox: "0 0 20 14", fill: "currentColor", width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M19 7L0.999969 7M19 7L13 1M19 7L13 13", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
}
function ArrowLeft() {
    return (React.createElement("svg", { id: "arrow-left", viewBox: "0 0 20 14", fill: "currentColor", width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M1 7h18M1 7l6 6M1 7l6-6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
}
function CalendarWrapper(_a) {
    var showDatePicker = _a.showDatePicker, setShowDatePicker = _a.setShowDatePicker, iconRef = _a.iconRef, showTwoMonths = _a.showTwoMonths, startDate = _a.startDate, value = _a.value, onChange = _a.onChange, monthAndYearAreSelectable = _a.monthAndYearAreSelectable;
    var _b = React.useState(startDate), currentFocusedDate = _b[0], setCurrentFocusedDate = _b[1];
    var _c = React.useState('bottom'), calendarPosition = _c[0], setCalendarPosition = _c[1];
    var calendarRef = React.useRef();
    React.useEffect(function () {
        var _a;
        if (((_a = calendarRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().bottom) > window.outerHeight) {
            setCalendarPosition('top');
        }
    }, [showDatePicker]);
    (0, useOnClickOutside_1.useOnClickOutside)({
        handler: function () {
            if (showDatePicker) {
                setShowDatePicker(false);
            }
        },
        reference: calendarRef,
        exception: iconRef,
    });
    var bem = (0, useBemify_1.useBemify)('datepicker');
    var numCalendarsToDisplay = showTwoMonths ? 2 : 1;
    return (React.createElement("div", { className: bem('wrapper', calendarPosition), style: {
            '--num-of-months-displayed': numCalendarsToDisplay,
        }, ref: calendarRef },
        React.createElement("div", { className: bem('calendar-arrow-wrapper') }, [
            { id: 1, Component: ArrowLeft, func: date_fns_1.subMonths },
            { id: 2, Component: ArrowRight, func: date_fns_1.addMonths },
        ].map(function (_a) {
            var id = _a.id, Component = _a.Component, func = _a.func;
            return (React.createElement("button", { type: "button", key: id, onClick: function () { return setCurrentFocusedDate(function (prev) { return func(prev, 1); }); } },
                React.createElement(Component, null)));
        })),
        React.createElement("div", { className: bem('calendar-wrapper') }, __spreadArray([], Array(numCalendarsToDisplay), true).map(function (_, index) { return (React.createElement(Calender_1.default, { key: index, date: (0, date_fns_1.addMonths)(currentFocusedDate, index), onChange: function (v) { return onChange((0, date_fns_1.format)(v, 'MM/dd/yyyy')); }, selectedDay: value, setCurrentFocusedDate: setCurrentFocusedDate, monthAndYearAreSelectable: monthAndYearAreSelectable })); }))));
}
exports.default = CalendarWrapper;
//# sourceMappingURL=CalendarWrapper.js.map
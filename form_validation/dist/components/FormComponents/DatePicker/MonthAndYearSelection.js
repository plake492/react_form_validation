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
var React = require("react");
var Select_1 = require("../Select");
var date_fns_1 = require("date-fns");
var dateHelpers_1 = require("../../../utils/dateHelpers");
function MonthAndYearSelection(_a) {
    var date = _a.date, setCurrentFocusedDate = _a.setCurrentFocusedDate;
    return (React.createElement(React.Fragment, null,
        React.createElement("span", null,
            React.createElement(Select_1.default, { label: "month", id: "date-picker-month", value: (0, date_fns_1.format)(date, 'MMM'), options: __spreadArray([], Array(12), true).map(function (_, i) { return ({
                    label: dateHelpers_1.monthsShort[i],
                    value: i.toString(),
                }); }), onChange: function (v) {
                    setCurrentFocusedDate(new Date(parseInt((0, date_fns_1.format)(date, 'yyyy')), parseInt(v)));
                }, forDatePicker: true, hideLabel: true })),
        ' ',
        React.createElement("span", null,
            React.createElement(Select_1.default, { label: "Year", id: "date-picker-year", value: (0, date_fns_1.format)(date, 'yyyy'), options: __spreadArray([], Array(124), true).map(function (_, i) {
                    var year = (i + 1900).toString();
                    return {
                        label: year,
                        selected: year === (0, date_fns_1.format)(date, 'yyyy'),
                    };
                }), onChange: function (v) {
                    setCurrentFocusedDate(new Date(parseInt(v), parseInt((0, date_fns_1.format)(date, 'MM')) - 1));
                }, forDatePicker: true, hideLabel: true }))));
}
exports.default = MonthAndYearSelection;
//# sourceMappingURL=MonthAndYearSelection.js.map
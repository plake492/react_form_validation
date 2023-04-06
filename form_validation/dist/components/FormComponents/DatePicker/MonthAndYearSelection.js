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
import Select from '../Select';
import { format } from 'date-fns';
import { monthsShort } from '../../../utils/dateHelpers';
export default function MonthAndYearSelection(_a) {
    var date = _a.date, setCurrentFocusedDate = _a.setCurrentFocusedDate;
    return (React.createElement(React.Fragment, null,
        React.createElement("span", null,
            React.createElement(Select, { label: "month", id: "date-picker-month", value: format(date, 'MMM'), options: __spreadArray([], Array(12), true).map(function (_, i) { return ({
                    label: monthsShort[i],
                    value: i.toString(),
                }); }), onChange: function (v) {
                    setCurrentFocusedDate(new Date(parseInt(format(date, 'yyyy')), parseInt(v)));
                }, forDatePicker: true, hideLabel: true })),
        ' ',
        React.createElement("span", null,
            React.createElement(Select, { label: "Year", id: "date-picker-year", value: format(date, 'yyyy'), options: __spreadArray([], Array(124), true).map(function (_, i) {
                    var year = (i + 1900).toString();
                    return {
                        label: year,
                        selected: year === format(date, 'yyyy'),
                    };
                }), onChange: function (v) {
                    setCurrentFocusedDate(new Date(parseInt(v), parseInt(format(date, 'MM')) - 1));
                }, forDatePicker: true, hideLabel: true }))));
}
//# sourceMappingURL=MonthAndYearSelection.js.map
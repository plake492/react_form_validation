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
import { format, getDaysInMonth, getMonth, getDate, getYear, startOfMonth, endOfMonth, } from 'date-fns';
import { dayNamesLetter } from '../../../utils/dateHelpers';
import { useBemify } from '../../../hooks/useBemify';
import MonthAndYearSelection from './MonthAndYearSelection';
export default function Calender(_a) {
    var date = _a.date, selectedDay = _a.selectedDay, onChange = _a.onChange, setCurrentFocusedDate = _a.setCurrentFocusedDate, monthAndYearAreSelectable = _a.monthAndYearAreSelectable;
    var _b = React.useState(null), firstDayOfMonth = _b[0], setFirstDayOfMonth = _b[1];
    var _c = React.useState(null), lastOfMonth = _c[0], setLastOfMonth = _c[1];
    var _d = React.useState(0), numberOfDaysInMonth = _d[0], setNumberOfDaysInMonth = _d[1];
    var _e = React.useState(getMonth(date)), month = _e[0], setMonth = _e[1];
    var _f = React.useState(getDate(date)), year = _f[0], setYear = _f[1];
    var _g = React.useState({
        year: null,
        month: null,
        dayOfMonth: null,
    }), selectedDate = _g[0], setSelectedDate = _g[1];
    var bem = useBemify('calendar');
    React.useEffect(function () {
        setSelectedDate({
            year: getYear(new Date(selectedDay)),
            month: getMonth(new Date(selectedDay)),
            dayOfMonth: getDate(new Date(selectedDay)),
        });
    }, [selectedDay]);
    React.useEffect(function () {
        var firstOfMonth = parseInt(format(startOfMonth(date), 'i'));
        setFirstDayOfMonth(firstOfMonth === 7 ? 0 : firstOfMonth);
        var lastOfMonth = parseInt(format(endOfMonth(date), 'i'));
        setLastOfMonth(lastOfMonth === 7 ? 0 : lastOfMonth);
        setNumberOfDaysInMonth(getDaysInMonth(date));
        setMonth(getMonth(date));
        setYear(getYear(date));
    }, [date]);
    var isMonthAndYear = selectedDate.year === year && selectedDate.month == month;
    return (React.createElement("section", { className: bem(), style: {
            '--first-day-of-month': firstDayOfMonth,
            '--last-day-of-month': lastOfMonth,
        } },
        React.createElement("div", { className: bem('month-year-display') }, monthAndYearAreSelectable ? (React.createElement(MonthAndYearSelection, { date: date, setCurrentFocusedDate: setCurrentFocusedDate })) : (React.createElement(React.Fragment, null, "".concat(format(date, 'MMM'), " ").concat(format(date, 'yyyy'))))),
        React.createElement("div", { className: bem('day-name-wrapper') }, dayNamesLetter.map(function (day, index) { return (React.createElement("p", { key: day + index, className: bem('day-name') }, day)); })),
        React.createElement("div", { className: bem('days-wrapper') }, numberOfDaysInMonth &&
            __spreadArray([], Array(numberOfDaysInMonth), true).map(function (_, index) {
                var date = new Date(year, month, index + 1);
                var isSelectedDate = isMonthAndYear && index + 1 === selectedDate.dayOfMonth;
                return (React.createElement("span", { tabIndex: 0, onClick: function () { return onChange(date); }, onKeyDown: function (e) {
                        return e.key === 'Enter' && onChange(date);
                    }, className: bem('day', [isSelectedDate, 'selected']) }, index + 1));
            }))));
}
//# sourceMappingURL=Calender.js.map
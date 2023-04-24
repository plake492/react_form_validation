"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCalendarDate = exports.monthsShort = exports.monthsLong = exports.dayNamesLetter = exports.dayNames = void 0;
exports.dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
exports.dayNamesLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
exports.monthsLong = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
exports.monthsShort = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
];
var formatCalendarDate = function (m, d, y) { return "".concat((typeof m === 'string' ? parseInt(m) : m) + 1, "/").concat(d, "/").concat(y); };
exports.formatCalendarDate = formatCalendarDate;
//# sourceMappingURL=dateHelpers.js.map
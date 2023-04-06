export var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export var dayNamesLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
export var monthsLong = [
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
export var monthsShort = [
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
export var formatCalendarDate = function (m, d, y) { return "".concat((typeof m === 'string' ? parseInt(m) : m) + 1, "/").concat(d, "/").concat(y); };
//# sourceMappingURL=dateHelpers.js.map
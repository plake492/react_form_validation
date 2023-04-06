/**
 * Enforce a value to be an array
 * @param v
 * @returns Array of
 */
export var forceArray = function (v) { return (Array.isArray(v) ? v : [v]); };
export var toKebabCase = function (str) {
    return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, function ($, ofs) { return (ofs ? '-' : '') + $.toLowerCase(); });
};
//# sourceMappingURL=helpers.js.map
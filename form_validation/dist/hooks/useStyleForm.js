"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyleForm = void 0;
var React = require("react");
var helpers_1 = require("../utils/helpers");
var useStyleForm = function (_a) {
    var formRef = _a.formRef, styleOptions = _a.styleOptions;
    React.useEffect(function () {
        if (styleOptions && formRef.current)
            Object.entries(styleOptions).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                var formatKey = (0, helpers_1.toKebabCase)(key);
                formRef.current.style.setProperty("--form-".concat(formatKey), value);
            });
    }, []);
};
exports.useStyleForm = useStyleForm;
//# sourceMappingURL=useStyleForm.js.map
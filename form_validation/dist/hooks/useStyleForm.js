import * as React from 'react';
import { toKebabCase } from '../utils/helpers';
export var useStyleForm = function (_a) {
    var formRef = _a.formRef, styleOptions = _a.styleOptions;
    React.useEffect(function () {
        if (styleOptions && formRef.current)
            Object.entries(styleOptions).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                var formatKey = toKebabCase(key);
                formRef.current.style.setProperty("--form-".concat(formatKey), value);
            });
    }, []);
};
//# sourceMappingURL=useStyleForm.js.map
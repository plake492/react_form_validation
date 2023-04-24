"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formValidation = void 0;
exports.formValidation = {
    email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    'date-mm/dd/yyyy': /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/,
    text: function (v) { return !!v; },
};
//# sourceMappingURL=formValidation.js.map
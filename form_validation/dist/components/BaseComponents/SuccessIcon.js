"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FadeInComponent_1 = require("./FadeInComponent");
function SuccessIcon(_a) {
    var className = _a.className, isSuccess = _a.isSuccess;
    return (React.createElement(FadeInComponent_1.default, { trigger: isSuccess, timeout: 200 },
        React.createElement("div", { className: className },
            React.createElement("svg", { id: "success", viewBox: "0 0 25 25", fill: "none", width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("circle", { cx: "12.5001", cy: "12.5", r: "11.75", stroke: "currentColor", strokeWidth: "1.5" }),
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.8551 8.13998C18.049 8.32598 18.0482 8.62683 17.8534 8.81195L10.8042 16.8616C10.61 17.0461 10.2961 17.0461 10.1019 16.8616L7.14663 14.0539C6.95178 13.8688 6.95103 13.5679 7.14494 13.3819C7.33885 13.1959 7.654 13.1952 7.84885 13.3803L10.4531 15.8545L17.1512 8.13837C17.346 7.95325 17.6611 7.95397 17.8551 8.13998Z", fill: "currentColor", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })))));
}
exports.default = SuccessIcon;
//# sourceMappingURL=SuccessIcon.js.map
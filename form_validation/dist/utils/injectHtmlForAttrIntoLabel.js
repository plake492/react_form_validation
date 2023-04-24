"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLabelHtmlForAttr = void 0;
var React = require("react");
var detectReactComponents_1 = require("./detectReactComponents");
var searchForLabel = function (_a) {
    var _b, _c;
    var _d;
    var el = _a.el, _e = _a.level, level = _e === void 0 ? 0 : _e, _f = _a.trackEls, trackEls = _f === void 0 ? {} : _f, id = _a.id;
    var nextLevel = level + 1;
    if (el.type === 'label') {
        return __assign(__assign({}, trackEls), (_b = {}, _b[nextLevel] = { type: el.type, props: __assign(__assign({}, el.props), { htmlFor: id }) }, _b));
    }
    else {
        if ((_d = el.props) === null || _d === void 0 ? void 0 : _d.children) {
            if (Array.isArray(el.props.children)) {
                console.warn('sibling elements inside component tree are currently not supported \n element returned with label element wrapping element');
                return null;
            }
            else if ((0, detectReactComponents_1.checkIfAnyReactComponentType)(el.props.children)) {
                return searchForLabel({
                    el: el.props.children,
                    level: nextLevel,
                    id: id,
                    trackEls: __assign(__assign({}, trackEls), (_c = {}, _c[nextLevel] = { type: el.type, props: el.props }, _c)),
                });
            }
            else if (typeof el.props.children === 'string') {
                return console.warn('!!!THERE IS NO LABEL!!!');
            }
        }
    }
};
var generateReactComponentStruture = function (_a) {
    var componentStructure = _a.componentStructure, endingPoint = _a.endingPoint, _b = _a.currentPoint, currentPoint = _b === void 0 ? 0 : _b;
    if (currentPoint !== endingPoint) {
        return React.createElement(componentStructure[currentPoint].type, componentStructure[currentPoint].props, generateReactComponentStruture({
            componentStructure: componentStructure,
            endingPoint: endingPoint,
            currentPoint: (currentPoint += 1),
        }));
    }
    if (currentPoint === endingPoint) {
        return React.createElement(componentStructure[currentPoint].type, componentStructure[currentPoint].props);
    }
};
var setLabelHtmlForAttr = function (_a) {
    var _b, _c;
    var el = _a.el, id = _a.id;
    if (el.type === 'label') {
        return React.cloneElement(el, { htmlFor: id });
    }
    if ((_b = el.props) === null || _b === void 0 ? void 0 : _b.children) {
        if (!(0, detectReactComponents_1.checkIfAnyReactComponentType)((_c = el.props) === null || _c === void 0 ? void 0 : _c.children)) {
            return React.createElement('label', { htmlFor: id, children: el });
        }
        else {
            var compObj = { 0: { type: el.type, props: el.props } };
            var componentStructure = searchForLabel({
                el: el.props.children,
                id: id,
                trackEls: compObj,
            });
            if (!!componentStructure) {
                var componentLevels = Object.keys(componentStructure);
                return generateReactComponentStruture({
                    componentStructure: componentStructure,
                    endingPoint: componentLevels.length - 1,
                });
            }
            else {
                return React.createElement('label', { htmlFor: id, children: el });
            }
        }
    }
    else {
        console.warn('Invalid Label. Label must containe children');
    }
    return el;
};
exports.setLabelHtmlForAttr = setLabelHtmlForAttr;
//# sourceMappingURL=injectHtmlForAttrIntoLabel.js.map
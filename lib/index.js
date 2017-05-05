"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_class_component_1 = require("vue-class-component");
exports.fromEvent = function (selector, eventName, fn) { return vue_class_component_1.createDecorator(function (options, key) {
    var _a = options.subscriptions, subscriptions = _a === void 0 ? function () { } : _a;
    options.subscriptions = function () {
        return __assign((_a = {}, _a[key] = fn(this.$fromDOMEvent(selector, eventName)), _a), subscriptions.bind(this)());
        var _a;
    };
}); };

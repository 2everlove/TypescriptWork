"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePerson = void 0;
var MakeRandomNumber_1 = require("../utils/MakeRandomNumber");
var Person = /** @class */ (function () {
    function Person(name, age) {
        if (age === void 0) { age = MakeRandomNumber_1.makeRandomNumber(); }
        this.name = name;
        this.age = age;
    }
    return Person;
}());
exports.default = Person;
var makePerson = function (name, age) {
    if (age === void 0) { age = MakeRandomNumber_1.makeRandomNumber(); }
    return ({ name: name, age: age });
};
exports.makePerson = makePerson;
//# sourceMappingURL=Person.js.map
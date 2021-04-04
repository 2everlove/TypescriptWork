var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractPerson5 = /** @class */ (function () {
    function AbstractPerson5(age) {
        this.age = age;
    }
    return AbstractPerson5;
}());
var Person5 = /** @class */ (function (_super) {
    __extends(Person5, _super);
    function Person5(name, age) {
        var _this = _super.call(this, age) || this;
        _this.name = name;
        return _this;
    }
    return Person5;
}(AbstractPerson5));
var jack5 = new Person5('Jack', 32);
console.log(jack5); // Person5{name: 'Jack', age:32}

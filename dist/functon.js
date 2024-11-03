"use strict";
// learning function
// 1. normal function
// 2. arrow function
// normal function
function add(num1, num2) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
add(20, 40);
// arrow function
var addArrow = function (num1, num2) { return num1 + num2; };
// object --> function --> method
var poorUser = {
    name: "monjur",
    balance: 0,
    addBalance: function (balance) {
        return "My new balance: ".concat(this.balance + balance);
    }
};
var arr = [2, 4, 7];
var newArray = arr.map(function (elem) { return elem * elem; });

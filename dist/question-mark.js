"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish
    var age = 19;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    // ternary operator
    var isAdult = age >= 18 ? "adult" : "not adult";
    console.log({ isAdult: isAdult });
    // nullish coalescing operator
    // null / undefined --> decision making
    var inAuthenticated1 = null;
    var inAuthenticated2 = undefined;
    var inAuthenticated3 = "";
    var result1 = inAuthenticated1 !== null && inAuthenticated1 !== void 0 ? inAuthenticated1 : "Guest";
    var result2 = inAuthenticated2 !== null && inAuthenticated2 !== void 0 ? inAuthenticated2 : "Guest";
    var result3 = inAuthenticated3 !== null && inAuthenticated3 !== void 0 ? inAuthenticated3 : "Guest";
    console.log({ result1: result1 });
    console.log({ result2: result2 });
    console.log({ result3: result3 });
    var user = {
        name: "monjur",
        address: {
            city: "dhaka",
            road: "12",
            presentAddress: "dhaka"
        }
    };
    var permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address";
    console.log(permanentAddress);
}

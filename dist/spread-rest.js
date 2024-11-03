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
{
    // spread operator
    // rest operator
    // learn spread operator
    var bros1 = ['a', 'b', 'c', 'd', 'e'];
    var bros2 = ['f', 'g', 'h', 'i'];
    bros1.push.apply(bros1, bros2);
    var mentors1 = {
        typeScript: 'a',
        redux: 'b',
        dbms: 'c',
    };
    var mentors2 = {
        prisma: 'r',
        next: 'e',
    };
    var mentors = __assign(__assign({}, mentors1), mentors2);
    // learn spread operator
    var greetFriend = function () {
        var friends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friends[_i] = arguments[_i];
        }
        friends.forEach(function (friend) {
            return console.log("hi ".concat(friend));
        });
    };
    greetFriend('a', 'b', 'c', 'd', 'e');
}

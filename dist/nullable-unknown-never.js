"use strict";
{
    // nullable types
    var searchName = function (value) {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("there is nothing to search");
        }
    };
    searchName(null);
    // unknown types
    var getSpeedMeterPerSecond = function (value) {
        if (typeof value === "number") {
            var convertedSpeed = (value * 1000) / 3600;
            console.log("the converted speed is ".concat(convertedSpeed, " ms^-1"));
        }
        else if (typeof value === "string") {
            var _a = value.split(" "), result = _a[0], unit = _a[1];
            var convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log("the converted speed is ".concat(convertedSpeed, " ms^-1"));
        }
        else {
            console.log("Wrong Input");
        }
    };
    getSpeedMeterPerSecond(1000);
    getSpeedMeterPerSecond("1000 kmh^-1");
    getSpeedMeterPerSecond(null);
    // never type
    var throwError = function (msg) {
        throw new Error(msg);
    };
    throwError('muskil se error hogaya');
}

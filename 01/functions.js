"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
addTwo(5);
// set return type of function
function addTwoNNumbers(num) {
    return num + 2;
}
function consoleMsg(msg) {
    console.log(msg);
}
function throwError(msg) {
    throw new Error(msg);
}
addTwo(2); // return type is not defined can return string also
addTwoNNumbers(45);
consoleMsg('Hello');
throwError('Error occured');

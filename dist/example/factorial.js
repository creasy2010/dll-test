"use strict";
/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/11/26
 **/
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
var ffi = require('ffi');
var libfactorial = ffi.Library(path_1.join(__dirname, './libfactorial'), {
    factorial: ['uint64', ['int']],
});
var output = libfactorial.factorial(parseInt(process.argv[2]));
console.log('Your output: ' + output);
function factorial(len) {
    var output = libfactorial.factorial(len);
    return output;
}
exports.factorial = factorial;

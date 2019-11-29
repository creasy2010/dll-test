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
const util_1 = require("../util");
var ffi = require('ffi');
var libfactorial = ffi.Library(util_1.getDllAbsPath("./example/libfactorial-hu-32"), {
    factorial: ['uint64', ['int']],
});
var output = libfactorial.factorial(parseInt(process.argv[2]));
console.log('Your output: ' + output);
function factorial(len) {
    var output = libfactorial.factorial(len);
    return output;
}
exports.factorial = factorial;

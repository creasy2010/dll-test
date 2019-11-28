/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/11/26
 **/

import {getDllAbsPath} from "../util";
var ffi = require('ffi');


var libfactorial = ffi.Library(getDllAbsPath("./example/libfactorial"), {
  factorial: ['uint64', ['int']],
});


var output = libfactorial.factorial(parseInt(process.argv[2]));

console.log('Your output: ' + output);

export function factorial(len: number): number {
  var output = libfactorial.factorial(len);
  return output;
}

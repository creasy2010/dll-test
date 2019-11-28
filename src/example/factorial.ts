/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/11/26
 **/

import {join} from 'path';
var ffi = require('ffi');

var libfactorial = ffi.Library(join(__dirname,'./libfactorial'), {
  factorial: ['uint64', ['int']],
});


var output = libfactorial.factorial(parseInt(process.argv[2]));

console.log('Your output: ' + output);

export function factorial(len: number): number {
  var output = libfactorial.factorial(len);
  return output;
}

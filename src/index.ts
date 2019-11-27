/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/11/21
 **/

import {join} from  'path';

var ffi = require('ffi');

var libpath = join(__dirname, 'YzfDrTwains');
var testLib = ffi.Library(libpath, {
  'OpenDev': ['bool', []],
  'DevIsOpen': ['bool', []],
  'Scan': ['bool', []],
  'GetImageCounts': ['int', []],
  'GetStatus': ['int', []],
  'CloseDev': ['bool', []]
});

console.log("Scan方法返回值::",testLib.Scan());
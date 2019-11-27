"use strict";
/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/11/21
 **/
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
var ffi = require('ffi');
// import ffi from  'ffi';
var libpath = path_1.join(__dirname, 'YzfDrTwains');
var testLib = ffi.Library(libpath, {
    'OpenDev': ['void', ['bool']],
    'DevIsOpen': ['void', ['bool']],
    'Scan': ['void', ['bool']],
    'GetImageCounts': ['void', ['int']],
    'GetStatus': ['void', ['int']],
    'CloseDev': ['void', ['bool']]
});
console.log("Scan方法返回值::", testLib.Scan());

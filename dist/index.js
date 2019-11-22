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
var libpath = path_1.join(__dirname, '../YzfDrTicketsScan(1).dll');
var testLib = ffi.Library(libpath, {
    'OpenDev': [[], ['bool']],
    'DevIsOpen': [[], ['bool']],
    'Scan': [[], ['bool']],
    'GetImageCounts': [[], ['bool']],
    'GetStatus': [[], ['bool']],
    'CloseDev': [[], ['bool']]
});
console.log(testLib.OpenDev());

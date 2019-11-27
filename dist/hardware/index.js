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
var libpath = path_1.join(__dirname, 'YzfDrTwains');
var testLib = ffi.Library(libpath, {
    'OpenDev': ['bool', []],
    'DevIsOpen': ['bool', []],
    'Scan': ['bool', []],
    'GetImageCounts': ['int', []],
    'GetStatus': ['int', []],
    'CloseDev': ['bool', []]
});
class Scan {
    constructor() {
    }
    static openDev() {
        return testLib.OpenDev();
    }
    static devIsOpen() {
        return testLib.DevIsOpen();
    }
    static getImageCounts() {
        return testLib.GetImageCounts();
    }
    static getStatus() {
        return testLib.GetStatus();
    }
    static closeDev() {
        return testLib.CloseDev();
    }
}
exports.Scan = Scan;

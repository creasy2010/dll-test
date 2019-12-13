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
const util_1 = require("../util");
const fs = require("fs");
const path_1 = require("path");
var ffi = require('ffi');
var libpath = util_1.getDllAbsPath('./hardware/YzfDrTwains-32');
var testLib = ffi.Library(libpath, {
    OpenDev: ['bool', []],
    DevIsOpen: ['bool', []],
    Scan: ['string', []],
    GetImageCounts: ['int', []],
    GetStatus: ['int', []],
    CloseDev: ['bool', []],
});
class Scan {
    /**
     * 扫描后返回,图片路径;
     * @returns {string}
     */
    static scan() {
        console.log('执行 scan');
        let outputDir = testLib.Scan();
        console.log('执行 scan return', outputDir);
        if (outputDir && fs.existsSync(outputDir)) {
            let files = fs.readdirSync(outputDir);
            return files.map(fileName => util_1.getImageContent(path_1.join(outputDir, fileName)));
        }
        else {
            return [];
        }
    }
    static openDev() {
        console.log('执行 openDev');
        return testLib.OpenDev();
    }
    static devIsOpen() {
        console.log('执行 devIsOpen');
        return testLib.DevIsOpen();
    }
    static getImageCounts() {
        console.log('执行 getImageCounts');
        return testLib.GetImageCounts();
    }
    static getStatus() {
        console.log('执行 getStatus');
        return testLib.GetStatus();
    }
    static closeDev() {
        console.log('执行 closeDev');
        return testLib.CloseDev();
    }
}
exports.Scan = Scan;

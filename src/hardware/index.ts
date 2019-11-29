/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/11/21
 **/

import {getDllAbsPath} from "../util";

var ffi = require('ffi');
var libpath = getDllAbsPath("./hardware/YzfDrTwains-32");


var testLib = ffi.Library(libpath, {
  OpenDev: ['bool', []],
  DevIsOpen: ['bool', []],
  Scan: ['bool', []],
  GetImageCounts: ['int', []],
  GetStatus: ['int', []],
  CloseDev: ['bool', []],
});

export class Scan {

  static scan(): boolean {
    console.log('执行 scan');
    return testLib.Scan();
  }

  static openDev(): boolean {
    console.log('执行 openDev');
    return testLib.OpenDev();
  }

  static devIsOpen(): boolean {
    console.log('执行 devIsOpen');
    return testLib.DevIsOpen();
  }

  static getImageCounts(): number {
    console.log('执行 getImageCounts');
    return testLib.GetImageCounts();
  }

  static getStatus(): number {
    console.log('执行 getStatus');
    return testLib.GetStatus();
  }

  static closeDev(): boolean {
    console.log('执行 closeDev');
    return testLib.CloseDev();
  }
}

(async () => {
  if (Scan.openDev()) {
    console.log('打开设备成功');
    Scan.scan();
  } else {
    console.log('打开设备失败');
  }
})();

/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/11/21
 **/

import {getDllAbsPath} from '../util';
import * as fs from 'fs';

var ffi = require('ffi');
var libpath = getDllAbsPath('./hardware/YzfDrTwains-32');

var testLib = ffi.Library(libpath, {
  OpenDev: ['bool', []],
  DevIsOpen: ['bool', []],
  Scan: ['string', []],
  GetImageCounts: ['int', []],
  GetStatus: ['int', []],
  CloseDev: ['bool', []],
});

export class Scan {
  /**
   * 扫描后返回,图片路径;
   * @returns {string}
   */
  static scan(): string[] {
    console.log('执行 scan');
    let outputDir = testLib.Scan();
    let files =  fs.readdirSync(outputDir);
    console.log('执行 scan return',files);
    return files;
    // return new Promise((resolve, reject) => {
    //   testLib.Scan.async((err, outputDir:string) => {
    //     console.log('scan返回', err, outputDir);
    //    let files =  fs.readdirSync(outputDir);
    //     if (err) {
    //       reject(err);
    //     } else {
    //       resolve(files);
    //     }
    //   });
    // });
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

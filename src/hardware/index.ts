/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/11/21
 **/

import {getDllAbsPath, getImageContent, saveConfig} from '../util';
import * as fs from 'fs';
import {join} from 'path';

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

  static set(config:{
    [key:string]:string
  }):void {
    saveConfig(config);
    return ;
  }

  /**
   * 扫描后返回,图片路径;
   * @returns {string}
   */
  static scan(): string[] {
    console.log('执行 scan');
    let outputDir = testLib.Scan();
    console.log('执行 scan return', outputDir);
    if (outputDir && fs.existsSync(outputDir)) {
      let files = fs.readdirSync(outputDir);
      return files
        .map(fileName => getImageContent(join(outputDir, fileName)))
        .filter(item => !!item);
    } else {
      return [];
    }
  }

  // static scanAsync(): Promise<string[]> {
  //   return new Promise((resolve, reject) => {
  //     testLib.Scan.async(function(err, res) {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         let outputDir = res;
  //         console.log('执行 scan return', outputDir);
  //         if (outputDir && fs.existsSync(outputDir)) {
  //           let files = fs.readdirSync(outputDir);
  //           resolve(
  //             files
  //               .map(fileName => getImageContent(join(outputDir, fileName)))
  //               .filter(item => !!item),
  //           );
  //         } else {
  //           resolve( []);
  //         }
  //       }
  //     });
  //   });
  // }

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

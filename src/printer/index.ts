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
import * as fse from 'fs-extra';
import {join} from 'path';

var ffi = require('ffi');
var libpath = getDllAbsPath('./hardware/PRTPDF.dll');

var testLib = ffi.Library(libpath, {
  GetPrinters: ['string', []],
  SetParams: ['bool', ['string']],
  PrintFile: ['bool', ['string']],
});

export class Printer {

  /**
   * 获取所有打印机
   * @param {{}} config
   * @returns {string[]}
   */
  static getPrinters():string[] {
    let printers  = testLib.GetPrinters();
    console.log('执行 getPrinters 返回值:',printers);
    return printers.split(',');
  }

  /**
   * 设置打印参数;
   * @param {{[p: string]: string}} config
   * @returns {boolean}
   */
  static setParams(config:{
    [key:string]:string
  }): boolean {
    let configFilePath =  saveConfig(config,"hardware/config.json");
    let retult  = testLib.SetParams(configFilePath);
    console.log('执行 SetParams 返回值:',retult);
    return retult;
  }

  /**
   * 打印文件
   * @returns {boolean}
   * @constructor
   */
  static PrintFile(url:string): boolean {
    let result =  testLib.PrintFile(url);
    console.log('执行 PrintFile 返回值:',result);
    return result;
  }
}

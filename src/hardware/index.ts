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

export  class Scan {

  constructor(){

  }

  static openDev():boolean{
    return testLib.OpenDev();
  }



  static devIsOpen():boolean{
    return testLib.DevIsOpen();
  }



  static getImageCounts():number{
    return testLib.GetImageCounts();
  }



  static getStatus():number{
    return testLib.GetStatus();
  }


  static closeDev():boolean{
    return testLib.CloseDev();
  }
}

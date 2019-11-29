/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/11/28
 **/

import {join} from 'path';
import {pathExistsSync} from  'fs-extra';

let possiableDirs = [
  //window电脑处理
  join( process.cwd(),'/resources/dist'),
  //本地运行时.
  join( process.cwd(),'/dist'),
  join( process.cwd(),'/dist/dist')
]

let format  = process.platform==='win32'?".dll":".dylib";

/**
 * 动态判断dll路径
 * 因为测试时, 安装时路径 目前不能保证一致;
 * @param {string} relPath
 * @returns {string}
 */
export function getDllAbsPath(relPath:string):string{
  for (let i = 0, iLen = possiableDirs.length; i < iLen; i++) {
    let relPathElement = join(possiableDirs[i],relPath+format);
    if(pathExistsSync(relPathElement)){
      return relPathElement;
    }
  }
}
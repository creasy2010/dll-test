"use strict";
/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/11/28
 **/
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
let possiableDirs = [
    //window电脑处理
    path_1.join(process.cwd(), '/resources/dist'),
    //本地运行时.
    path_1.join(process.cwd(), '/dist/dist')
];
let format = process.platform === 'win32' ? ".dll" : ".dylib";
/**
 * 动态判断dll路径
 * 因为测试时, 安装时路径 目前不能保证一致;
 * @param {string} relPath
 * @returns {string}
 */
function getDllAbsPath(relPath) {
    for (let i = 0, iLen = possiableDirs.length; i < iLen; i++) {
        let relPathElement = path_1.join(possiableDirs[i], relPath + format);
        if (fs_extra_1.pathExistsSync(relPathElement)) {
            return relPathElement;
        }
    }
}
exports.getDllAbsPath = getDllAbsPath;

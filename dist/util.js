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
const fs = require("fs");
const mimeType = require('mime-types');
let possiableDirs = [
    //window电脑处理
    path_1.join(process.cwd(), '/resources/dist'),
    //本地运行时.
    path_1.join(process.cwd(), '/dist'),
    path_1.join(process.cwd(), '/dist/dist'),
];
let format = process.platform === 'win32' ? '.dll' : '.dylib';
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
    throw new Error('not found dll ' + relPath);
}
exports.getDllAbsPath = getDllAbsPath;
/**
 * 加载图片内容 base64;;
 * @param {string} file
 * @returns {string}
 */
function getImageContent(file) {
    let filePath = path_1.resolve(file); // 原始文件地址
    // let fileName = filePath
    //   .split('\\')
    //   .slice(-1)[0]
    //   .split('.'); // 提取文件名
    let fileMimeType = mimeType.lookup(filePath); // 获取文件的 memeType
    // 如果不是图片文件，则退出
    if (!fileMimeType.toString().includes('image')) {
        return;
    }
    // 读取文件数据
    let data = fs.readFileSync(filePath);
    // 转换为 data:image/jpeg;base64,***** 格式的字符串
    let base64 = 'data:' + fileMimeType + ';base64,' + new Buffer(data).toString('base64');
    return base64;
}
exports.getImageContent = getImageContent;

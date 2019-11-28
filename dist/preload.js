"use strict";
/**
 * @desc
 *
 * @使用场景
 *
 * @company yangxiaodong
 * @Date    2019/6/2
 **/
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
// import {Scan} from './hardware';
const factorial_1 = require("./example/factorial");
const fse = require("fs-extra");
console.log(electron_1.ipcRenderer.sendSync('synchronous-message', 'ping'));
electron_1.ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(arg); // prints "pong"
});
electron_1.ipcRenderer.send('asynchronous-message', 'ping');
process.once('loaded', () => {
    const _setImmediate = setImmediate;
    const _clearImmediate = clearImmediate;
    global.setImmediate = _setImmediate;
    global.clearImmediate = _clearImmediate;
});
//@ts-ignore
window.readConfig = function () {
    electron_1.ipcRenderer.send('asynchronous-message', 'ping');
};
// @ts-ignore
window.__dev__ = {
    fse,
    paths: [
        __dirname,
        process.cwd()
    ],
    // scan: Scan,
    factorial: factorial_1.factorial,
};

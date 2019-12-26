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
const hardware_1 = require("./hardware");
const printer_1 = require("./printer");
// import {factorial} from './example/factorial';
const fse = require("fs-extra");
//console.log(ipcRenderer.sendSync('synchronous-message', 'ping'));
//ipcRenderer.on('asynchronous-reply', (event, arg) => {
//  console.log(arg); // prints "pong"
//});
//ipcRenderer.send('asynchronous-message', 'ping');
process.once('loaded', () => {
    const _setImmediate = setImmediate;
    const _clearImmediate = clearImmediate;
    global.setImmediate = _setImmediate;
    global.clearImmediate = _clearImmediate;
});
//@ts-ignore
window.readConfig = function () {
    // ipcRenderer.send('asynchronous-message', 'ping');
};
// @ts-ignore
window.__dev__ = {
    fse,
    paths: [
        __dirname,
        process.cwd()
    ],
    scan: hardware_1.Scan,
    printer: printer_1.Printer,
};

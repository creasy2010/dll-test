/**
 * @desc
 *
 * @使用场景
 *
 * @company yangxiaodong
 * @Date    2019/6/2
 **/

import {ipcRenderer} from 'electron';
import {Scan} from './hardware';
import * as urllib from 'urllib';
import * as path from 'path';
import * as fse from 'fs-extra';

console.log(ipcRenderer.sendSync('synchronous-message', 'ping'));
ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg); // prints "pong"
});
ipcRenderer.send('asynchronous-message', 'ping');

process.once('loaded', () => {
  const _setImmediate = setImmediate;
  const _clearImmediate = clearImmediate;

  global.setImmediate = _setImmediate;
  global.clearImmediate = _clearImmediate;
});

//@ts-ignore
window.readConfig = function() {
  ipcRenderer.send('asynchronous-message', 'ping');
};

// @ts-ignore
window.__dev__ = {
  fse,
  scan: Scan,
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const electron_1 = require("electron");
let mainWindow;
// In main process.
electron_1.ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg); // prints "ping"
    event.sender.send('asynchronous-reply', 'pong');
});
electron_1.ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg); // prints "ping"
    event.returnValue = 'pong';
});
// Modify the user agent for all requests to the following urls.
const filter = {
    urls: [
        // 'https://*.github.com/*',
        // '*://electron.github.io',
        '*/employee/login*'
    ]
};
// session.defaultSession.webRequest.onBeforeSendHeaders(filter, (details, callback) => {
//   details.requestHeaders['User-Agent'] = 'MyAgent'
//   callback({ requestHeaders: details.requestHeaders })
// })
function createWindow() {
    // Create the browser window.
    mainWindow = new electron_1.BrowserWindow({
        fullscreen: false,
        // height: 600,
        webPreferences: {
            devTools: true,
            contextIsolation: false,
            preload: path_1.join(__dirname, './preload.js'),
            nodeIntegration: true,
        }
        // width: 800,
    });
    // mainWindow.setAlwaysOnTop(true,'');normal, floating, torn-off-menu, modal-panel, main-menu, status, pop-up-menu, screen-saver,
    // mainWindow.loadURL("http://fpcy.yunzhangfang.com/");
    mainWindow.loadURL("http://172.24.142.1:8888");
    mainWindow.webContents.openDevTools();
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on("ready", createWindow);
// Quit when all windows are closed.
electron_1.app.on("window-all-closed", () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", () => {
    // On OS X it"s common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

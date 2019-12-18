import {join} from 'path';
import { app, BrowserWindow,ipcMain,session } from "electron";

let mainWindow: Electron.BrowserWindow;

// In main process.
ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg)  // prints "ping"
  event.sender.send('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg)  // prints "ping"
  event.returnValue = 'pong'
})


// Modify the user agent for all requests to the following urls.
const filter = {
  urls: [
    // 'https://*.github.com/*',
    // '*://electron.github.io',
    '*/employee/login*']
}

// session.defaultSession.webRequest.onBeforeSendHeaders(filter, (details, callback) => {
//   details.requestHeaders['User-Agent'] = 'MyAgent'
//   callback({ requestHeaders: details.requestHeaders })
// })

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    fullscreen:true,
    icon:"./logo.png",
    title:"专票查验工具",
    webPreferences: {
      devTools:false,
      contextIsolation: false,
      preload: join(__dirname,'./preload.js'),
      nodeIntegration: true,
      // webSecurity: false
    }
    // width: 800,
  });
  // mainWindow.setAlwaysOnTop(true,'');normal, floating, torn-off-menu, modal-panel, main-menu, status, pop-up-menu, screen-saver,

  mainWindow.loadURL("http://fpcy.yunzhangfang.com/");
  // mainWindow.loadURL("http://172.24.142.1:8888");
  mainWindow.webContents.openDevTools();
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

"use strict";
const electron = require('electron');
const elc_app = electron.app;
const elc_BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;
var mainWindow = null;
var subWindow = null;
let loginWindow;
let isLoginWindow = false;

// ログイン要求時に発火するイベント
elc_app.on("login", (event, webContents, request, authInfo, callback)=>{

    // プロキシサーバーからの要求だったら続行
    if(authInfo.isProxy){

        // 重複発火対策
        if(!isLoginWindow){
            isLoginWindow = true;
        }
        else{
            return;
        }

        // 認証情報が送信されるまで待機
        event.preventDefault();
        loginWindow = new electron.BrowserWindow({
            width: 300,
            height: 180,
            resizable: false
        });
        loginWindow.setAlwaysOnTop(true);
        // 入力ウィンドウをロード
        loginWindow.setMenu(null);
        loginWindow.loadURL('file://' + __dirname + '/login.html');

        // IPCチャネル"proxy-auth"で受信待機
        ipcMain.on("proxy-auth", (event, username, password)=>{

            // 受信した認証情報をプロキシサーバーへ転送
            callback(username, password);
            isLoginWindow = false;
        });
    }
});

elc_app.on('ready', function () {
    var size = electron.screen.getPrimaryDisplay().size;
    mainWindow = new elc_BrowserWindow({
        left: 0,
        top: 0,
        width: size.width,
        height: size.height,
        frame: false,
        show: true,
        transparent: true,
        resizable: true,
        webPreferences: {nodeIntegration: false}
    });
    var dt = new Date()
    mainWindow.setIgnoreMouseEvents(true);
    mainWindow.maximize();
    mainWindow.setAlwaysOnTop(true);
    mainWindow.loadURL("https://nico-chat.herokuapp.com/display");
//    mainWindow.openDevTools();
    mainWindow.on('closed', function () {
      mainWindow = null;
      });

/*
      subWindow = new elc_BrowserWindow({
        left: 0,
        top: 0,
        width: 400,
        height: size.height,
        frame: true,
        show: true,
        transparent: false,
        resizable: true,
        webPreferences: {nodeIntegration: false}
      });
//      subWindow.setIgnoreMouseEvents(true);
//      subWindow.maximize();
//      subWindow.setAlwaysOnTop(true);
      subWindow.loadURL("https://nico-chat.herokuapp.com/controller");
//    subWindow.openDevTools();
      subWindow.on('closed', function () {
        subWindow = null;
        });
        */
});

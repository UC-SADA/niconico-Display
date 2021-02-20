"use strict";
const electron = require('electron');
const elc_app = electron.app;
const elc_BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;
let inputWindow;
let loginWindow;
let displayWindow;
let controllerWindow;
let isLoginWindow = false;

var appURL = 'https://nico-chat.herokuapp.com'

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
            resizable: false,
            webPreferences: {
              nodeIntegration: false,
              contextIsolation: true,
              preload: __dirname + '/preload.js'
            }
        });
        loginWindow.setAlwaysOnTop(true);
        // 入力ウィンドウをロード
        loginWindow.setMenu(null);
        loginWindow.loadURL('file://' + __dirname + '/login.html');

        // IPCチャネル"proxy-auth"で受信待機
        ipcMain.once("proxy-auth", (event, username, password)=>{

            // 受信した認証情報をプロキシサーバーへ転送
            callback(username, password);
            isLoginWindow = false;
            // ログインウィンドウを閉じる
            loginWindow.close();
        });
    }
});


elc_app.on('ready', function (event) {
  inputWindow = new electron.BrowserWindow({
      width: 300,
      height: 180,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        preload: __dirname + '/preload.js'
      }
  });
  inputWindow.setAlwaysOnTop(true);
//  inputWindow.setMenu(null);
//  inputWindow.openDevTools();
    inputWindow.loadURL('file://' + __dirname + '/start.html');
//  inputWindow.loadURL(appURL + '/start');
  console.log("inputWindow")
});


// ルーム名が送信されたら発火
ipcMain.on("room-name", (event, roomname)=>{
  console.log(roomname);
  
  //接続先のURLを設定
  var displayUrl = appURL + '/display/' + roomname;
  var controllerUrl = appURL +'/controller/' + roomname;

  // メインディスプレイのサイズ取得
  var size = electron.screen.getPrimaryDisplay().size;
        
  // ディスプレイ用の透明なウィンドウを作成
  displayWindow = new electron.BrowserWindow({

    width: size.width,
    height: size.height,
    frame: false,
    show: true,
    transparent: true,
    resizable: false,
    webPreferences: {nodeIntegration: false}
  });
  displayWindow.setIgnoreMouseEvents(true);
  displayWindow.maximize();
  displayWindow.setAlwaysOnTop(true);
        
//  displayWindow.openDevTools(); 
     //ディスプレイURLのロード
  displayWindow.loadURL(displayUrl);
        
    //コントローラ用のウィンドウを作成
  controllerWindow = new electron.BrowserWindow({
    center: true,
    width: 400,
    height: 800,
    frame: true,
    show: true,
    transparent: false,
    resizable: true,
    webPreferences: {nodeIntegration: false}
  });
        
  //コントローラURLのロード
  controllerWindow.loadURL(controllerUrl);
});


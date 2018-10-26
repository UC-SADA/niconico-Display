"use strict";
const electron = require('electron');
const elc_app = electron.app;
const elc_BrowserWindow = electron.BrowserWindow;

var mainWindow = null;
var subWindow = null;
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

});

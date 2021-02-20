 /**
 * preload.js
 * ContextBridgeを利用してレンダラプロセスでIPC送信を使う
 */
const { contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld(
    "api", {
        // Fromレンダラ Toメインでプロキシ認証のログイン情報を送信する
        sendProxyAuth: (username, password) => {
            ipcRenderer.send("proxy-auth", username, password);
        }
    }
);


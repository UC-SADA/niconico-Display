# niconico-Display

[NicoNico SPEENYA](https://github.com/chimerast/niconico-speenya)を参考に作成した[herokuアプリ](https://nico-chat.herokuapp.com/controller/)を作ったので、それをelectronの透明スクリーンを使ってデスクトップ上に表示させるソースを書いてみました。

### 動作環境
とりあえず、どんなもんか試してみたい方は
* [windows 64bit用　パッケージファイル](https://github.com/UC-SADA/niconico-Display_win64/archive/master.zip)
* [mac用　パッケージファイル](https://github.com/UC-SADA/niconico-Display_win64/archive/master.zip)
### 動作環境

* windows 7 64bit
* node.js v12.1.0
* electron 5.0.1

### 動かし方

node.js　と　electronをPCにインストール。

本ソースコードを保存したディレクトリまで移動し下記コマンドを実行。

```bash
$ electron .
```

好きな「ルーム名」を入力。

「透明ディスプレー」と「コントローラー」が表示されます。

「コントローラー」上の「いいね」等を押すとスタンプ表示、コメントを記入する弾幕が流れます。

また、QR-codeを読み取ればスマホからでもアクセス可能です。

閉じるときは開いているファイルを閉じればOK。

WEB会議や、プレゼンテーションで使うと今までとは一味違ったコミュニケーションを楽しめますよ。


### 参考にしたサイトは

[ニコニコメソッドプレゼンを全社会議に取り入れてみたら会議が面白くなった](http://tech.uzabase.com/entry/2015/06/01/143202)

[社内プレゼン大会にニコニコメソッドを取り入れてみた話](http://atoms.loftwork.jp/20170925_nicomethod/)


### 続き

ローカルサーバーで試したいという方は、[niconico-Display2](https://github.com/UC-SADA/niconico-Display2)をご利用ください。

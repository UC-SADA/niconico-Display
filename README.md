# niconico-Display

[NicoNico SPEENYA](https://github.com/chimerast/niconico-speenya)を参考に作成した[herokuアプリ](https://nico-chat.herokuapp.com/controller/)を作ったので、それをelectronの透明スクリーンを使ってデスクトップ上に表示させるソースを書いてみました。

### 動かし方

node.js　と　electronをPCにインストールしてダウンロード。

本ソースコードを保存したディレクトリまで移動し下記コマンドを実行。

```bash
$ electron .
```

そうすると「透明ディスプレー」と「コントローラー」が表示されます。

「コントローラー」上のスタンプを押したり、コメントを記入すると使えます。

また、QR-codeを読み取ればスマホからでもアクセス可能です。

閉じるときはコマンドプロンプト上でCnt+C を行うか、electronを閉じるかしてください。

WEB会議や、プレゼンテーションで使うと今までとは一味違ったコミュニケーションを楽しめますよ。


### 参考にしたサイトは

[ニコニコメソッドプレゼンを全社会議に取り入れてみたら会議が面白くなった](http://tech.uzabase.com/entry/2015/06/01/143202)

[社内プレゼン大会にニコニコメソッドを取り入れてみた話](http://atoms.loftwork.jp/20170925_nicomethod/)


### 続き

ローカルサーバーで試したいという方は、[niconico-Display2](https://github.com/UC-SADA/niconico-Display2)をご利用ください。

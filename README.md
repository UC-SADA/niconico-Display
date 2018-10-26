# niconico-Display

[NicoNico SPEENYA](https://github.com/chimerast/niconico-speenya)を参考に作成した[herokuアプリ](https://nico-chat.herokuapp.com/controller/)を作ったので、それをelectronの透明スクリーンを使ってデスクトップ上に表示させるソースを書いてみました。

### 動かし方

node.js　と　electronをPCにインストールしてダウンロード。

本ソースコードを保存したディレクトリ上で下記コマンドを実行。

```bash
$ electron .
```

閉じるときはコマンドプロンプト上でCnt+C を行うか、electronを閉じるかしてください。

WEB会議や、プレゼンテーションで使うと今までとは一味違ったコミュニケーションを楽しめますよ。

### 環境構築がめんどくさいという方はこちら

ファイルサイズは重くなりますが、パッケージ化しましたので、下記ZIPファイルをダウンロードして解凍しnicoG.exeファイルを実行すれば起動します。

* [windows_64bit](app/nicoG-win32-x64.zip)
* [windows_32bit](app/nicoG-win32-ia32.zip)
* [mac_64bit](app/nicoG-darwin-x64.zip)
* [linux_x86_64bit](app/nicoG-linux-x64.zip)

アプリの終了の仕方が上手くいっておらず。残存ファイルが残ってしまったので終了後タスクマネージャーでnicoG.exeのタスクを終了させてください。

### 参考にしたサイトは

[ニコニコメソッドプレゼンを全社会議に取り入れてみたら会議が面白くなった](http://tech.uzabase.com/entry/2015/06/01/143202)

[社内プレゼン大会にニコニコメソッドを取り入れてみた話](http://atoms.loftwork.jp/20170925_nicomethod/)

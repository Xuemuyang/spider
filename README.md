# spider

A crawler made by Node.js

用Node.js实现一个命令行小爬虫，使用Puppeteer模拟用户操作获取网页快照，以及实现图片搜索功能。

## 使用方法

```js
node src/index.js -a www.baidu.com # 获取网页快照

node src/index.js -c 提莫 # 获取提莫的若干张图片，存放在mn目录下
```
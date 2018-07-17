/**
 * Created by september on 2018/7/17.
 */

/*eslint-disable*/

var fs = require('fs');
var path = require('path');
// 数组 directory 为 []时，打包所有文件
var directory = [];
var entry = {};
// 要打包的文件目录
var filePath = path.resolve(__dirname) + '/views/';
console.log('filePath:',filePath);
if (directory.length === 0) {
  fs.readdirSync(filePath).reduce(function (entries, dir) {
    if (fs.statSync(path.join(filePath, dir)).isDirectory())
      entries[dir] = path.join(filePath, dir, 'index.js');
    return entries
  }, entry);//遍历根目录第一层所有文件夹下的index.js文件
}
else {
  fs.readdirSync(filePath).reduce(function (entries, dir) {
    if (directory.indexOf(dir) > -1 && fs.statSync(path.join(filePath, dir)).isDirectory())
      entries[dir] = path.join(filePath, dir, 'index.js');
    return entries
  }, entry);//遍历根目录第一层所有文件夹下的index.js文件
}

module.exports = entry;
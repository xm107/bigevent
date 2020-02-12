// 引入msg.js中的方法，对messages.json数据操作
const msg = require("./mudole");

console.log(msg.add('管理员', '自定义模块就是66666'))
console.log(msg.del(2))
console.log(msg.get())
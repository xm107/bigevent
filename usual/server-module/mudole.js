
// 引入核心模块
const fs = require("fs");
//路径模块
const path = require("path");

/*  
封装对messages.json的操作，并导出 
*/
const DATA_FILE = "message.json";//消除魔术数，便于理解
// 拼接一个绝对路径
let filePath = path.join(__dirname, DATA_FILE);

// 获取json文件内容，导出
const get = () => {
    // 使用同步的方法读
    let rs = fs.readFileSync(filePath, "utf8");//------>此时rs为json格式的string
    let arr = JSON.parse(rs);//--------->将string转换为JS所需求的数组格式
    return arr;
};

/**
 * 添加留言
 * 直接传入用户名和留言就可以，id自动增长，
 * @param {*} name 用户名
 * @param {*} content 内容
 */

const add = (name, content) => {
    // 分析：如何向json字符串中添加数据？
    // 1.读出文件内容，转成数组
    let arr = get();
    // 2. 用数组的append方法，添加一条记录
    // 要在数组最后一个元素的id基础上加1--->获取数组最后一个 语元素id+1；切 现在数组中有元素，则length肯定是大于0
    let id = arr.length ? (arr[arr.length - 1]["id"] + 1) : 1
    // 
    let obj = {
        id,
        // id: arr.length+1,// 它是跟着数组长度变化而增长的
        name,
        content,
        dt: Date.now() // 时间戳
    };
    arr.push(obj);//--->推入数组尾部
    // 3. 把当前的数组写回到json文件中去
    // 采用同步写文件 并 数组转换字符串  写入文件中去
    fs.writeFileSync(filePath, JSON.stringify(arr));
    return arr;
}

/**
 * 删除
 * @param {*} id 要删除数据的id
 */
const del = id => {
    // 1.获取数据--->数组
    let arr = get();
    // 2.在数组找出id值为指定参数的那条记录，然后删除
    let idx = arr.findIndex(item => item.id == id);
    console.log(idx);
    // 调用splice，在数组中删除下标为idx 的 元素
    arr.splice(idx, 1);
    // 把删除之后的数据写回到文件中
    // 采用同步写文件 并 数组转换字符串  写入文件中去
    fs.writeFileSync(filePath, JSON.stringify(arr));
    return arr;
}

/**
 * 修改messages
 */
const update = () => {

}

// 使用模块导出
module.exports = {
    "get": get,
    "add": add,
    "del": del
}

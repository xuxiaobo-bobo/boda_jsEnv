//
/*

别删除!!!!!!!!!!!!!!!!!!!!!!!!!!!1
别删除!!!!!!!!!!!!!!!!!!!!!!!!!!!1
别删除!!!!!!!!!!!!!!!!!!!!!!!!!!!1
别删除!!!!!!!!!!!!!!!!!!!!!!!!!!!1
别删除!!!!!!!!!!!!!!!!!!!!!!!!!!!1
别删除!!!!!!!!!!!!!!!!!!!!!!!!!!!1
别删除!!!!!!!!!!!!!!!!!!!!!!!!!!!1
别删除!!!!!!!!!!!!!!!!!!!!!!!!!!!1

 */
//babel库及文件模块导入
const fs = require('fs');

//babel库相关，解析，转换，构建，生产
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;
//读取文件
let encode_file = "D:\\My_Dir\\env_xbb_lastest_jsdom\\tools\\globalThis.js", decode_file = "./result.js"; //自己可以调整路径
const path = require('path');



//
let jscode = fs.readFileSync(encode_file, {encoding: "utf-8"});
//转换为ast树
let ast = parser.parse(jscode);
traverse(ast, {
  ObjectExpression(path) {
    path.node.properties.forEach(prop => {
      if (prop.key.name === 'value' && types.isFunctionExpression(prop.value)) {
        prop.value = types.callExpression(prop.value, []);
      }
    });
  }
});
// traverse(ast, test, opt = {});
console.log('message部分完成！！！')
let {code} = generator(ast)



console.log(code)
//
fs.writeFile(decode_file, code, (err) => {
});

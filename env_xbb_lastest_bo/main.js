// debugger
const { VM, VMScript } = require("vm2")
const fs = require("fs");

// const util=require('util')

// const jssoup = require('@aghajari/jssoup'); 

// const documentparse= jssoup.load(bohtml)// or .findFirst('title');
// const doc = await jssoup.loadFromURL("https://www.google.com/search?q=someone+like+you+lyrics", options())
// title.getElementById('s_strpx_span1')
// debugger


const path = require("path");
// const { createCanvas, loadImage } = require('canvas')// const jsdom = require('jsdom');
// const cheerio = require('cheerio')
// const bodomparse = require('xmldom').DOMParser
var {
    Canvas
} = require('canvas');

//配置路径
let config_path = path.resolve(__dirname, './config/');
let user_path=path.resolve(__dirname, './user/');
let tools_path=path.resolve(__dirname, './tools/');

const user=require(`${config_path}/user.config`)
const tools=require(`${config_path}/tools.config`)
const env=require(`${config_path}/env.config`)

//名称
const name = "run"
// 清空;
fs.writeFileSync(`${user_path}/${name}/log.txt`,"")



//创建沙盒实例
const vm = new VM(
);
//沙盒创建全局
vm.setGlobal('fs', fs)
vm.setGlobal('_name_', name)
// debugger

// vm.setGlobal('util',util)
// vm.setGlobal('documentparse',documentparse)
// vm.setGlobal('createCanvas',createCanvas)
// vm.setGlobal('loadImage',loadImage)
// vm.setGlobal('cheerio', cheerio)
// vm.setGlobal('clearTimeout', clearTimeout)

// vm.setGlobal('CryptoJS',CryptoJS)
// vm.setGlobal('parse',parse)

const configCode=fs.readFileSync(`${config_path}/config.js`)
//导入功能插件相关函数
const toolsCode =tools.getCode();
//导入浏览器环境相关
const envCode = env.getCode();
//导入全局初始化
const globalInit = tools.getFile("globalInit");
//导入用户初始化代码
const userInit = user.getCode(name, "userInit");
//导入设置代理对象
const proxyObj =  tools.getFile("proxyObj");
//导入需要调试的代码
const jscode = user.getCode(name, "jscode");
//导入异步执行的代码
const asyncCode = user.getCode(name, "async");

// const myHTML=user.get
//导入网页变化的dom
//整合代码
// const code = `${configCode}${toolsCode}${envCode}${globalInit}${userInit}${proxyObj}${jscode}${asyncCode}`+"\r\n";
//导入日志代码
const log_code=fs.readFileSync(`${tools_path}/printLog.js`)
//测试
const globadlThis=fs.readFileSync(`${tools_path}/globalThis.js`)
// const codeTest=`${configCode}${log_code}${toolsCode}${envCode}${globalInit}${userInit}${changeDom}${proxyObj}${jscode}${asyncCode}`+"\r\n"+"debugger";
const last_deal=fs.readFileSync(`D:\\My_Dir\\env_xbb_lastest_bo\\user\\run\\lastDeal.js`)
const codeTest=`${configCode}${log_code}${toolsCode}${envCode}${globadlThis}${globalInit}${userInit}${proxyObj};;${jscode}${asyncCode};console.table(myloglist);debugger;${last_deal};`;
// const codeTest=`${configCode}${log_code}${toolsCode}${envCode}${globadlThis}${globalInit}${userInit}${proxyObj}${jscode}${asyncCode};console.table(myloglist);`+"\r\n"+"debugger";

// console.log(code)
//创建执行脚本


const script = new VMScript(codeTest, "./debugJS.js")


const result = vm.run(script);

//输出结果
debugger
console.log(result)

//
fs.writeFileSync(`${user_path}/${name}/output.js`,codeTest)


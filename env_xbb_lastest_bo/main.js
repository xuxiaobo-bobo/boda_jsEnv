// debugger
let firsttime = +new Date()

const { VM, VMScript } = require("vm2")
const fs = require("fs");
// const {createCanvas}=require('canvas')
const path = require("path");
const parse5=require("parse5")
// const { createCanvas, loadImage } = require('canvas')// const jsdom = require('jsdom');
//配置路径
let config_path = path.resolve(__dirname, './config/');
let user_path = path.resolve(__dirname, './run/');
let tools_path = path.resolve(__dirname, './tools/');

const user = require(`${config_path}/user.config`)
const tools = require(`${config_path}/tools.config`)
const env = require(`${config_path}/env.config`)

//名称
// const name = "run"
// 清空;
fs.writeFileSync(`${user_path}//log.txt`, "")

// debugger
// cancelAnimationFrame=()=>{

// }
// debugger
//创建沙盒实例
const vm = new VM(
);
//沙盒创建全局
vm.setGlobal('bofs', fs)
// vm.setGlobal('_name_', name)
// debugger
// vm.setGlobal('bocreateCanvas',createCanvas)
// vm.setGlobal('util',util)
// vm.setGlobal('documentparse',documentparse)
// vm.setGlobal('createCanvas',createCanvas)
// vm.setGlobal('loadImage',loadImage)
// vm.setGlobal('clearTimeout', clearTimeout)

// vm.setGlobal('CryptoJS',CryptoJS)
// vm.setGlobal('parse',parse)

const configCode = fs.readFileSync(`${config_path}/config.js`)
//导入功能插件相关函数
const toolsCode = tools.getCode();
//导入浏览器环境相关
const envCode = env.getCode();
//导入全局初始化
const globalInit = tools.getFile("globalInit");
//导入用户初始化代码
const userInit = user.getCode("userInit");
//导入设置代理对象
const proxyObj = tools.getFile("proxyObj");
//导入需要调试的代码
const jscode = user.getCode("run");
//导入异步执行的代码
const asyncCode = user.getCode("async");

//导入日志代码
const log_code = fs.readFileSync(`${tools_path}/printLog.js`)
//测试
const scriptDom=fs.readFileSync(`${tools_path}/scriptDomExec.js`)
const globadlThis = fs.readFileSync(`${tools_path}/globalThis.js`)
// const codeTest=`${configCode}${log_code}${toolsCode}${envCode}${globalInit}${userInit}${changeDom}${proxyObj}${jscode}${asyncCode}`+"\r\n"+"debugger";
const last_deal = fs.readFileSync(`${user_path}\\lastDeal.js`)
const codeTest = `${configCode}${toolsCode}${log_code}${envCode}${globadlThis}${globalInit}${userInit}${proxyObj};${scriptDom};${jscode}${asyncCode};console.table(myloglist);debugger;${last_deal};`;
// const codeTest=`${configCode}${log_code}${toolsCode}${envCode}${globadlThis}${globalInit}${userInit}${proxyObj}${jscode}${asyncCode};console.table(myloglist);`+"\r\n"+"debugger";

// console.log(code)
//创建执行脚本

bohtml = fs.readFileSync(`${user_path}\\run.html`).toString()

const glboalDom = parse5.parse(bohtml);

var scriptDomList = parse5.defaultTreeAdapter.mylist

vm.setGlobal('bodaDom',[scriptDomList,glboalDom] )
// debugger
const script = new VMScript(codeTest + ';get_cookie', "./debugJS.js")


let result = vm.run(script);
// getcookie = vm.run(new VMScript(code))
// debugger
// let cookie_url=getcookie()
//输出结果
debugger
console.log(result())
let lastime = +new Date()
console.log('花费时间:', lastime - firsttime)
//
fs.writeFileSync(`${user_path}/output.js`, codeTest)


// debugger
const { VM, VMScript } = require("vm2")
const fs = require("fs");
const { JSDOM } = require('jsdom')
const path = require("path");
// const cheerio = require('cheerio')
// const bodomparse = require('xmldom').DOMParser
const {createCanvas}=require('canvas')
// const CryptoJS = require("crypto-js");  // npm install crypto-js

let run_path=path.resolve(__dirname, './run/');
let config_path = path.resolve(__dirname, './config/');
let tools_path=path.resolve(__dirname, './tools/');

const tools=require(`${config_path}/tools.config`)
const env=require(`${config_path}/env.config`)

fs.writeFileSync(`${run_path}/log.txt`,"")

let bohtml_=fs.readFileSync('D:\\My_Dir\\env_xbb_lastest_jsdom\\run\\run.html').toString('utf-8')
const dom = new JSDOM(bohtml_, 
    {
        url: "http://sthjt.hubei.gov.cn/site/sthjt/search.html?searchWord=%E7%A2%B3%E6%8E%92%E6%94%BE&siteId=41&pageSize=10",
        referrer: "http://sthjt.hubei.gov.cn/site/sthjt/search.html?searchWord=%E7%A2%B3%E6%8E%92%E6%94%BE&siteId=41&pageSize=10",
        contentType: "text/html",
        includeNodeLocations: true,
        pretendToBeVisual: true,

    });

//创建沙盒实例
const vm = new VM(
);

const configCode=fs.readFileSync(`${config_path}/config.js`)
//导入功能插件相关函数
const toolsCode =tools.getCode();
//导入浏览器环境相关
const envCode = env.getCode();
//导入全局初始化
const globalInit = tools.getFile("globalInit");
//导入用户初始化代码
const userInit = tools.getFile( "userInit");
//导入设置代理对象
const proxyObj =  tools.getFile("proxyObj");
//导入需要调试的代码
const jscode = fs.readFileSync(`${run_path}/run.js`)
//导入异步执行的代码
const asyncCode = tools.getFile("async");


// bodavm.memory.tag[0].__proto__=HTMLDocument.prototype
//整合代码
//导入日志代码
const log_code=fs.readFileSync(`${tools_path}/printLog.js`)
//测试
const globadlThis=fs.readFileSync(`${tools_path}/globalThis.js`)
// const codeTest=`${configCode}${log_code}${toolsCode}${envCode}${globalInit}${userInit}${changeDom}${proxyObj}${jscode}${asyncCode}`+"\r\n"+"debugger";
const last_deal=fs.readFileSync(`${run_path}/lastDeal.js`)
const codeTest=`${configCode}${log_code}${toolsCode}${envCode}${globadlThis}${globalInit}${userInit}${proxyObj};;try{;;${jscode}${asyncCode};console.table(myloglist);debugger;;}catch{${last_deal}};;`;
// const codeTest=`${configCode}${log_code}${toolsCode}${envCode}${globadlThis}${globalInit}${userInit}${proxyObj}${jscode}${asyncCode};console.table(myloglist);`+"\r\n"+"debugger";


bodaobj={
    window:dom.window,
    document:dom.window.document,
    location:dom.window.location,
    navigator:dom.window.navigator,
    navigation:dom.window.navigation
}
var boallundefined=  new xtd;


//沙盒创建全局
vm.setGlobal('bofs', fs)
// vm.setGlobal('bobo$',bobo$)
// debugger
vm.setGlobal('bodaobj',bodaobj)
vm.setGlobal('bocreateCanvas',createCanvas)
vm.setGlobal('boallundefined',boallundefined)
// let iframes=bobo$('iframe')
// console.log('iframes的个数---->',iframes.length)
// if (iframes.length>0){
//     //更好的处理方式为开length个 vm 但是太降低性能了,目前检测iframe 不严, 基本上就比较一下== 先用这个方式过
//     function Window(){}
//     window={
        
//     }
//     window.top=window
//     window.parent=window
//     window.self=window
//     window.__proto__=Window.prototype
//     // Object.setPrototypeOf(window,Window.prototype)
//     vm.setGlobal('createwindow2',window)

// }
const script = new VMScript(codeTest, "./debugJS.js")

const result = vm.run(script);

//输出结果
debugger
console.log(result)

//
fs.writeFileSync(`${run_path}/output.js`,codeTest)


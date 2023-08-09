// debugger
let firsttime = +new Date()

const { VM, VMScript } = require("vm2")
// const vm__ = require('vm');
const fs = require("fs");
// const {createCanvas}=require('canvas')
const path = require("path");
// const cheerio = require('cheerio');

// const { setImmutableProto } = require('internal/util');
// html文件
// debugger
// const { createCanvas, loadImage } = require('canvas')// const jsdom = require('jsdom');
//配置路径
debugger
let config_path = path.resolve(__dirname, './config/');
let user_path = path.resolve(__dirname, './run/');
let tools_path = path.resolve(__dirname, './tools/');
let nodeplugin_path=path.resolve(__dirname,'./nodePlugin')
const user = require(`${config_path}/user.config`)
const tools = require(`${config_path}/tools.config`)
const env = require(`${config_path}/env.config`)

//名称
// const name = "run"
// 清空;
fs.writeFileSync(`${user_path}//log.txt`, "")

// debugger
// cancelAnimationFrame=()=>{


//创建沙盒实例
const vm = new VM(
);
// var aa=require('boda')
// debugger
//沙盒创建全局
vm.setGlobal('bofs', fs)
// vm.setGlobal('bovm', vm__)
var window_config_code=''
isWindowSystem=true
let cbb =null

if (isWindowSystem){
    //  cbb = require("cbb");
    let bodaUndefind=require(`${nodeplugin_path}/bodaUndefined.node`)
    debugger
    window_config_code=fs.readFileSync(`${tools_path}/winSystemFunc.js`)
    // let myundefine={}
    // cbb.cbbnative.undfObject(myundefine)
    // var boallundefined= new myundefine.ldObj()
    var boallundefined=  new bodaUndefind.bodaUndefind();
    // var boallundefined=  new xtd();
    // debugger
    vm.setGlobal('boallundefined',boallundefined)
}
// cbbh = {}
// cbbh.cbbHookStack=function (){
//     debugger
//     let code=`Error
//     at eval (<anonymous>)`
//     console.log("拦截：",arguments[0]);
//     return code
// }


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
let jscode = user.getCode("run");
jscode=jscode.replace(/await /g,'      ') //去除await标签
// jscode=`(function(){
//     if (bodavm.config.proxy){
//         Object.defineProperty(this,'window',{configurable:false,set:undefined,get:function(){return window22},},'bobo')
//     };;;;
//     ${jscode}
// }).call(window22)
// ;;`
// 导入异步执行的代码
const asyncLoadCode = user.getCode("asyncLoad");
const asyncOtherCode = user.getCode("asyncOther");

const myReqCode=tools.getFile('myReqHelper')

//导入日志代码
const log_code = fs.readFileSync(`${tools_path}/printLog.js`)
//测试
//在dom渲染前需要执行的js
const beforeDomRun = fs.readFileSync(`${user_path}\\beforeDomRun.js`)
const scriptDom=fs.readFileSync(`${tools_path}/scriptDomExec.js`)
const globadlThis = fs.readFileSync(`${tools_path}/globalThis.js`)
const domListener = fs.readFileSync(`${tools_path}/DomListener.js`)
const pluginCode=fs.readFileSync(`${tools_path}/toolsPlugin.js`)
    // code+=getFile("toolsCSSStyleDeclaration")
const CssCode=fs.readFileSync(`${tools_path}/toolsCSSStyleDeclaration.js`)
// const codeTest=`${configCode}${log_code}${toolsCode}${envCode}${globalInit}${userInit}${changeDom}${proxyObj}${jscode}${asyncCode}`+"\r\n"+"debugger";
const last_deal = fs.readFileSync(`${user_path}\\lastDeal.js`)

// const codeTest = `${configCode};;${toolsCode};${log_code}${envCode}${userInit};;${globadlThis}${myReqCode}${window_config_code}${globalInit}${proxyObj};${beforeDomRun};try{;${scriptDom};${jscode}${asyncCode}}catch(e){console.log(e.message,e.stack);}finally{;console.table(myloglist);debugger;${last_deal};}`;
// const codeTest=`${configCode}${log_code}${toolsCode}${envCode}${globadlThis}${globalInit}${userInit}${proxyObj}${jscode}${asyncCode};console.table(myloglist);`+"\r\n"+"debugger";
const codeTest = `${configCode};;${toolsCode};${log_code}${envCode}${CssCode}${pluginCode}${userInit};;${globadlThis}${myReqCode}${window_config_code}${globalInit}${proxyObj};${beforeDomRun};;${scriptDom};${asyncLoadCode};${jscode}${domListener};${asyncOtherCode};debugger;${last_deal};`;

// console.log(code)
//创建执行脚本
// D:\My_Dir\env_xbb_lastest_bo\node_modules\parse5\dist\cjs\parser\index.js
let bohtml  = fs.readFileSync(`${user_path}\\run.html`).toString()
// debugger
const cheerio = require('cheerio');
const boda$ = cheerio.load(bohtml);

// debugger
// const glboalDom = parse5.parse(bohtml);
// const scriptDomlist=parse5.Parser.bodaGetScript()

// const scriptDomlist=parse5.Tokenizer.getboScript()

// // // time1=+new Date()
// debugger
// var aa=cheerio.load([scriptDomlist[0],scriptDomlist[1]])
// var bb=cheerio.load([scriptDomlist[1],scriptDomlist[2]])
// let chiLoadScriptList=[]

// for(let scriptDom of scriptDomlist){
//     // debugger
//     // let node=getParent(scriptDom)
//     // node=new Proxy(node,{})
//     chiLoadScriptList.push(cheerio.load(scriptDom))
// }
// console.log(+new Date()-time1)

// debugger
// vm.setGlobal('cbb',cbb)
// vm.setGlobal('bodaDom',[scriptDomlist,glboalDom] )
vm.setGlobal('boda$',boda$)
vm.setGlobal('bodacheerio',cheerio)
// vm.setGlobal('setTimeout',setTimeout)
// vm.setGlobal('Promise',Promise)

// vm.setGlobal('bodaParse5Helper',parse5 )
vm.setGlobal('bodaParserURL',URL )
// vm.setGlobal('cheerio',cheerio )

// debugger
const script = new VMScript(codeTest + ';get_cookie', "./debugJS.js")

let result = vm.run(script);
// getcookie = vm.run(new VMScript(code))
// debugger
// let cookie_url=getcookie()
//输出结果
debugger
console.log('参数:::',result())
let lastime = +new Date()
console.log('花费时间:', lastime - firsttime)
//
debugger
fs.writeFileSync(`${user_path}/output.js`, codeTest)

// // // }()


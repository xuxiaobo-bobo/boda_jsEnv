//系统内置库
const fs = require('fs');
const path=require('path')
const domino = require('domino');
const express = require('express');
const { VM, VMScript, bodaError } = require("vm2")
const getCodeFunc = require(path.join(__dirname,'tools','getRunCode.js'))

const app = express();
app.use(express.json({limit:'100mb'}));
let bodaUndefind = require(path.join(__dirname,'nodePlugin','bodaUndefined_v18.17.0.node'))

// debugger
fs.writeFileSync(path.join(__dirname , 'run' , 'log.txt'),'')

//配置路径
let vm = new VM()
let staticCode = getCodeFunc.getStaticCode()
let getRunAllCode = getCodeFunc.getRunAllCode()
let jsCode = staticCode + getRunAllCode
// debugger
vm.setGlobal('bodaRunPath', path.join(__dirname , 'run'))
vm.setGlobal('bodafs', fs)
var boallundefined = new bodaUndefind.bodaUndefind();
vm.setGlobal('bodaallundefined', boallundefined)
vm.setGlobal('bodaURL', URL)
vm.setGlobal('bodaError', bodaError)
vm.setGlobal('bodaTextEncoder',TextEncoder)
//babel 库相关 
vm.setGlobal('bodaBabelParser',getCodeFunc.parser)
vm.setGlobal('bodaBabeltraverse',getCodeFunc.traverse)
vm.setGlobal('bodaBabeltypes',getCodeFunc.types)
vm.setGlobal('bodaBabelgenerator',getCodeFunc.generator)
const script = new VMScript(jsCode, "./debugJS.js")
let result = vm.run(script);
let testNum=0
function main() {
    let website_ = 'https://pss-system.cponline.cnipa.gov.cn/conventionalSearch'
    // console.time()
    let bohtml = fs.readFileSync(path.join(__dirname,'run','run.html'), 'utf8').toString();
    // debugger
    // console.timeEnd()
    let dominoWindow = domino.createWindow(bohtml, website_)
    let bodaConifg = {
        'log': true, //开启日志
        'loadOpen': true, //开启load事件
        'SetTimeOutOpen': true, //开启定时器事件
        'listenerOpen': false, //开启浏览器事件 mousemove mouseup mousedown 等
        'userAgent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'ip_addr':'192.168.2.2', //ip RTC检测,
    }



    vm.setGlobal('bodadominoWindow', dominoWindow)
    vm.setGlobal('bodaConifg', bodaConifg)
    // console.time()
    resultVal = result()
    // debugger
    console.log(resultVal)

    bohtml = null
    dominoWindow = null
    // console.timeEnd()
    return resultVal
}

let result_=main()

console.log(result_)

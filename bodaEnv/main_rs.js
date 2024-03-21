//系统内置库
const fs = require('fs');
const path=require('path')
const domino = require('domino');
const express = require('express');
const { VM, VMScript, bodaError } = require("vm2")
const getCodeFunc = require(path.join(__dirname,'tools','getRunCode.js'))


const app = express();
app.use(express.json({limit:'100mb'}));

app.use(express.json()); //用于解析json类型的参数

app.use(express.urlencoded({ extended: true })); //用于解析x-www-form-urlencoded类型的参数

let bodaUndefind = require(path.join(__dirname,'nodePlugin','bodaUndefined_v18.17.0.node'))

// debugger
fs.writeFileSync(path.join(__dirname , 'run' , 'log.txt'),'')

//配置路径
let vm = new VM()

// debugger
vm.setGlobal('bodaRunPath', path.join(__dirname , 'run'))
vm.setGlobal('bodafs', fs)
var boallundefined = new bodaUndefind.bodaUndefind();
// boallundefined={}
vm.setGlobal('bodaallundefined', boallundefined)
vm.setGlobal('bodaURL', URL)
vm.setGlobal('bodaError', bodaError)
vm.setGlobal('bodaTextEncoder',TextEncoder)
//babel 库相关 
vm.setGlobal('bodaBabelParser',getCodeFunc.parser)
vm.setGlobal('bodaBabeltraverse',getCodeFunc.traverse)
vm.setGlobal('bodaBabeltypes',getCodeFunc.types)
vm.setGlobal('bodaBabelgenerator',getCodeFunc.generator)


let staticCode = getCodeFunc.getStaticCode()
let getRunAllCode = getCodeFunc.getRunAllCode()
let jsCode = staticCode + getRunAllCode
const script = new VMScript(jsCode, "./debugJS.js")
let result = vm.run(script);
let testNum=0
    function run_rsvmp(boUrl,_reqhtml,apiUrl) {
        // configFormChrome 去浏览器复制一下,记得把cookie删了
        //获取前缀,getResult文件下把这个打开就行'rsurl':bodaEnv.toolsFunc.getApi(bodaConifg['apiUrl'])
        // listenerOpen 打开后 调用load事件 asyncListener文件夹下
        // 运行时候,把run_rs.html,run_rs.js 改为run.html,run.js
        let website_ = boUrl//atob('aHR0cDovL3d3dy5ubXBhLmdvdi5jbg==')
        let bohtml =''
        if (!_reqhtml){
            bohtml= fs.readFileSync(path.join(__dirname , 'run','run.html'), 'utf8').toString();

        }else{
            bohtml=_reqhtml
        }
        // console.log(bohtml)
        let dominoWindow = domino.createWindow(bohtml, website_)
        let bodaConifg = {
            'log': false, //开启日志
            'listenerOpen':true, 
            'SetTimeOutOpen': false, //开启定时器事件,
            'userAgent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
            'ip_addr':'192.168.2.2', //ip RTC检测
            'apiUrl':apiUrl
        }

        vm.setGlobal('bodadominoWindow', dominoWindow)
        vm.setGlobal('bodaConifg', bodaConifg)
        result1 = result()
        console.log(result1)
        bohtml = null
        dominoWindow = null
        return result1
    }


      app.post('/cookie', (req, res) => {
        /*
        boHtml: 请求返回的html页面  
        apiUrl: 接口url
        rs 不需要用run.js 文件
        在run/website/ 底下按照我提供的例子,放js文件
        */
        // debugger
        let boUrl=req.body['boUrl']
        let boHtml=atob(req.body['boHtml'])
        let apiUrl=req.body['apiUrl']
        // debugger
        console.log(boHtml)
        let result_=run_rsvmp(boUrl,boHtml,apiUrl)
        res.send(result_)
      });
      app.listen(3022, () => {
        console.log('监听端口3022');
      })

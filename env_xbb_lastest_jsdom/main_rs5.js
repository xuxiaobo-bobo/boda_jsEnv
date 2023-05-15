
let firsttime = +new Date()
var { VM, VMScript } = require("vm2")
var fs = require("fs");
var { JSDOM } = require('jsdom')
var path = require("path");
//var { createCanvas } = require('canvas')

var express = require('express')

let run_path = path.resolve(__dirname, './run/');
let config_path = path.resolve(__dirname, './config/');
let tools_path = path.resolve(__dirname, './tools/');
var tools = require(`${config_path}/tools.config`)
var env = require(`${config_path}/env.config`)
var asyncCode = tools.getFile("async");
var bodyParser = require('body-parser');
const winston = require('winston');


var app = express()


//当前电脑是不是windows系统
isWindowSystem=true

var vm = new VM(
    );

var window_config_code=''
//该目录下的代码只能在windows下运行
if (isWindowSystem){
    window_config_code=fs.readFileSync(`${tools_path}/winSystemFunc.js`)
    var boallundefined=  new xtd;
    // debugger
    vm.setGlobal('boallundefined',boallundefined)
}



var configCode = fs.readFileSync(`${config_path}/config.js`)
var toolsCode = tools.getCode();
var envCode = env.getCode();
var userInit = tools.getFile("userInit");

var globadlThis = fs.readFileSync(`${tools_path}/globalThis.js`)
var last_deal = fs.readFileSync(`${run_path}/lastDeal.js`)
var codeTest = `${configCode};;${toolsCode};${envCode}${userInit};;${globadlThis};${window_config_code};;;debugger;;`;

//日志
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

// app 
app.use(bodyParser.urlencoded({ extended: false ,limit:'100mb'}));

var isfirst_=true
var getcookie=''
     

debugger

app.post('/api', function (req, res) {
    // res.send("123")
    var html = req.body.html;
    var jscode = req.body.jscode;
    var url=req.body.url
    var ip =req.connection.remoteAddress
   
	logger.info(`当前ip--->${ip},isfirst_:${isfirst_}`)
	if (html &&jscode && isfirst_) {
        isfirst_=false
        var dom = new JSDOM(html,
            {
                url: url,
                referrer:url,
                contentType: "text/html",
                includeNodeLocations: true,
                pretendToBeVisual: true,

            });
        bodaobj = {
            window: dom.window,
            document: dom.window.document,
            location: dom.window.location,
            navigator: dom.window.navigator,
            navigation: dom.window.navigation
        }
        vm.setGlobal('bodaobj', bodaobj)
        code=codeTest+jscode+asyncCode+last_deal+';'+'get_cookie'
        getcookie = vm.run(new VMScript(code))
        debugger
        let cookie_url=getcookie()
	      console.log(`cookie_url: ${JSON.stringify(cookie_url)}`)
	      res.send(cookie_url)
        //script=null
        //vm=null
        
    }else if (isfirst_==false){
      cookie_url=getcookie()
     console.log(`已经运行过一次,直接获取cookie_url: ${JSON.stringify(cookie_url)}`)
     res.send(cookie_url)
    }

})

app.listen(port=3000,host='127.0.0.1', () => {
    console.log('Server is running on port 3000');
});



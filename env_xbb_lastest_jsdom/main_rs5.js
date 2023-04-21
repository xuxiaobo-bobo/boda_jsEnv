
let firsttime = +new Date()
var { VM, VMScript } = require("vm2")
var fs = require("fs");
var { JSDOM } = require('jsdom')
var path = require("path");
var { createCanvas } = require('canvas')
var express = require('express')


let run_path = path.resolve(__dirname, './run/');
let config_path = path.resolve(__dirname, './config/');
let tools_path = path.resolve(__dirname, './tools/');
var tools = require(`${config_path}/tools.config`)
var env = require(`${config_path}/env.config`)
var bodyParser = require('body-parser');


var app = express()
var configCode = fs.readFileSync(`${config_path}/config.js`)
var toolsCode = tools.getCode();
var envCode = env.getCode();
var userInit = tools.getFile("userInit");

var globadlThis = fs.readFileSync(`${tools_path}/globalThis.js`)
var last_deal = fs.readFileSync(`${run_path}/lastDeal.js`)
var codeTest = `${configCode};;${toolsCode};${envCode}${userInit};;${globadlThis};;;;debugger;;`;



// var 
app.use(bodyParser.urlencoded({ extended: false ,limit:'100mb'}));

app.post('/api', function (req, res) {
    // res.send("123")
    var html = req.body.html;
    var jscode = req.body.jscode;
    if (html &&jscode) {
        var vm = new VM(
            );
        vm.setGlobal('bocreateCanvas', createCanvas)
        var boallundefined = new xtd;
        vm.setGlobal('boallundefined', boallundefined)    
        var dom = new JSDOM(html,
            {
                url: "http://qikan.cqvip.com/",
                referrer: "http://qikan.cqvip.com/",
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
        code=codeTest+';'+jscode+last_deal+';'+'get_cookie'
        let script = new VMScript(code)
        res.send(vm.run(script)())
        script=null
        vm=null
    }

})
// let bohtml_=fs.readFileSync('D:\\My_Dir\\env_xbb_lastest_jsdom\\run\\run.html').toString('utf-8')
// bohtml_


// var result = vm.run(script);



// app.get('./ip', async function (req, res) {
//     val = getcookieapi()
//     res.send(val)
// })
// app.get('/hello', (req, res) => {
//     res.send('Hello World!');
// });
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// //输出结果
// debugger

// let lastime = +new Date()
// console.log('花费时间:', lastime - firsttime)
//
// fs.writeFileSync(`${run_path}/output.js`, codeTest)
// 

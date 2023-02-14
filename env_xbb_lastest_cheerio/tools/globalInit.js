// 全局变量初始化
var mytime_stamp=Date.now()
// debugger
!function () {

    if (bodavm.config.randomhook) {
        //hook
        !function () {
            //固定时间值
            Date.now_ = Date.now
            Date.now = function () {
                console.log(`Date.now=>被调用 `,`resulit is mytime_stamp:${mytime_stamp}`)
                mytime_stamp++
                return mytime_stamp
            }
            bodavm.toolsFunc.safeFunc(Date.now, 'now')
            //固定时间值
            Date.prototype.valueOf_=Date.prototype.valueOf
            Date.prototype.valueOf=function valueOf(){
                console.log(`Date.prototype.valueOf=>被调用 `,`resulit is mytime_stamp:${mytime_stamp}`)
                mytime_stamp++
                return mytime_stamp
            }
            bodavm.toolsFunc.safeFunc(Date.prototype.valueOf, 'valueOf')

            Date.prototype.getTime_ = Date.prototype.getTime
            Date.prototype.getTime = function () {
                console.log(`Date.prototype.getTime=>被调用 `,`resulit is mytime_stamp:${mytime_stamp}`)
                mytime_stamp++
                return mytime_stamp
            }
            bodavm.toolsFunc.safeFunc(Date.prototype.getTime, 'getTime')
            //固定随机值
            Math.random_ = Math.random;
            Math.random = function () {
                console.log(`Math.random=>被调用  `,`resulit is Math.random:${0.5}`)
                return 0.5
            }
            bodavm.toolsFunc.safeFunc(Math.random, 'random')
        }()

    }
  
    JSON.stringify_bo=JSON.stringify
    JSON.stringify=function stringify(){
        let arg0=arguments[0]
        let arg1=arguments[1]
        // debugger
        if (arg0 && arg0.length){
            if (arg0.indexOf(console)>-1){
                debugger
                console.log('JSON.stringify  ','  console','  检测console');
                arg0[arg0.indexOf(console)]={"memory":{}}
            }
        }else{
            if (arg0 ==console){
               debugger
                console.log('JSON.stringify  ','  console','  检测console');
                return '{"memory":{}}'
            }
           
        }
        if (typeof arg0 =='string'){
            console.log(`JSON.stringify  `, `  arg0:${arg0.length>20?arg0.substring(0,20)+'...':arg0}`, ` arg1:${arg1}`)

        }else{
            console.log(`JSON.stringify  `, `  arg0:${arg0}`, `   arg1:${arg1}`)

        }
        return JSON.stringify_bo.call(this,arg0,arg1)
    
    }

    JSON.stringify.toString=function (){
        return 'function stringify() { [native code] }'
    }

    JSON.parse_bo= JSON.parse
    JSON.parse=function parse(){
        let arg0=arguments[0]
        let arg1=arguments[1]
        console.log(`JSON.parse `,` arg0:${arg0.length>20?arg0.substring(0,20)+'...':arg0}`,` arg1:${arg1}`)
        return JSON.parse_bo.apply(this,arguments)
    }
    JSON.parse.toString=function parse(){
        return 'function parse() { [native code] }'
    }


    Object.getOwnPropertyDescriptor_bo=Object.getOwnPropertyDescriptor
    Object.getOwnPropertyDescriptor=function getOwnPropertyDescriptor(){
        let obj=arguments[0]
        let prop=arguments[1]
        // debugger
        if (prop =='constructor'){
        // if (obj ==document){debugger}
            return Object.getOwnPropertyDescriptor_bo.apply(this,arguments)
        }
        console.log(`Object.getOwnPropertyDescriptor==> `,` obj:${obj}`,`prop:${prop}`,'检测');
        return Object.getOwnPropertyDescriptor_bo.apply(this,arguments)
    }
    Object.getOwnPropertyDescriptor.toString=function getOwnPropertyDescriptor(){ return 'function getOwnPropertyDescriptor() { [native code] }'}


    Object.getOwnPropertyDescriptors_bo=Object.getOwnPropertyDescriptors
    Object.getOwnPropertyDescriptors=function getOwnPropertyDescriptor(){
        let arg0=arguments[0]
        console.log(`Object.getOwnPropertyDescriptors==> `,`arg0:${arg0}`,`检测`);
        return Object.getOwnPropertyDescriptors_bo.apply(this,arguments)
    }
    Object.getOwnPropertyDescriptors.toString=function getOwnPropertyDescriptor(){ return 'function getOwnPropertyDescriptors() { [native code] }'}

    Object.getOwnPropertyNames_bo=Object.getOwnPropertyNames
    Object.getOwnPropertyNames=function getOwnPropertyDescriptor(){
        let arg0=arguments[0]
        console.log(`Object.getOwnPropertyNames==> `,` arg0:${arg0}`,'检测');
        return Object.getOwnPropertyNames_bo.apply(this,arguments)
    }
    Object.getOwnPropertyNames.toString=function getOwnPropertyDescriptor(){ return 'function getOwnPropertyNames() { [native code] }'}


    Object.getPrototypeOf_bo=Object.getPrototypeOf
    Object.getPrototypeOf=function (obj){
        console.log(`Object.getPrototypeOf `,`obj:${obj}`,'检测');
        return Object.getPrototypeOf_bo.apply(this,arguments)
    }

    Object.getOwnPropertySymbols_bo=Object.getOwnPropertySymbols
    Object.getOwnPropertySymbols=function getOwnPropertySymbols(arg){
        
        console.log('Object.getOwnPropertySymbols ',`arg:${arg}`,'检测');
        return Object.getOwnPropertySymbols_bo.apply(this,arguments)
    }
    Object.getOwnPropertySymbols.toString=function (){ return 'function getOwnPropertySymbols() { [native code] }'}

    //Plugin
    bodavm.toolsPlugin.createPlugin(
        {
            "description": "Portable Document Format",
            'filename': "internal-pdf-viewer",
            'name': "PDF Viewer",
            "mimeTypes": [
                {
                    "type": "application/pdf",
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
                {
                    "type": 'text/pdf',
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
            ]
        }
    )
    bodavm.toolsPlugin.createPlugin(
        {
            "description": "Portable Document Format",
            'filename': "internal-pdf-viewer",
            'name': "Chrome PDF Viewer",
            "mimeTypes": [
                {
                    "type": "application/pdf",
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
                {
                    "type": 'text/pdf',
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
            ]
        }
    )
    bodavm.toolsPlugin.createPlugin(
        {
            "description": "Portable Document Format",
            'filename': "internal-pdf-viewer",
            'name': "Chromium PDF Viewer",
            "mimeTypes": [
                {
                    "type": "application/pdf",
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
                {
                    "type": 'text/pdf',
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
            ]
        }
    )
    bodavm.toolsPlugin.createPlugin(
        {
            "description": "Portable Document Format",
            'filename': "internal-pdf-viewer",
            'name': "Microsoft Edge PDF Viewer",
            "mimeTypes": [
                {
                    "type": "application/pdf",
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
                {
                    "type": 'text/pdf',
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
            ]
        }
    )
    bodavm.toolsPlugin.createPlugin(
        {
            "description": "Portable Document Format",
            'filename': "internal-pdf-viewer",
            'name': "WebKit built-in PDF",
            "mimeTypes": [
                {
                    "type": "application/pdf",
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
                {
                    "type": 'text/pdf',
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
            ]
        }
    )

    // window.VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL && Object.defineProperty(window, 'VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL', {
    //     enumerable: false,
    //     configurable: false,
    //     writable: false

    // });


}();



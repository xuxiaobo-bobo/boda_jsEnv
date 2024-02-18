;;
!function () {
    var bolognum=0
    bodaEnv.toolsFunc.printLog = function printLog(logList) {
        let log = "";
        for (let i = 0; i < logList.length; i++) {
            if (logList[i] instanceof Object) {
                if (typeof logList[i] === "function") {
                    log += logList[i].toString() + ""
                } else {
                    log += logList[i] + "";
                }
            } else if (typeof logList[i] === "symbol") {
                log += logList[i].toString() + ""
            } else {
                log += logList[i] + "";
            }
        }
        log += "\r\n"
        bodafs.appendFileSync(bodaRunPath+`//log.txt`, log)
       
        // bofsappendFileSync(' D://bodaEnv//run//log.txt')
    }
    //hook console,让他自动调用printlog
    bodaEnv.toolsFunc.log_ = console.log;
    console.log = { log(type,...args) {
        // debugger
        // let index=args[0]?args[0]:args
        // if (typeof index =='string'&&  index.indexOf('属性:')!=-1){    
        // }else{
        // // debugger
        //     let arglenth=args.length
        //     let obj={'type':'env:'+type}

        //     for (let i = 0; i < arglenth; i++) {
                
        //         obj['prop'+i]=args[i]
        //         // if (args[i] ==undefined || args[i] ==null){
        //         //     myundefinedlist.push(obj)
        //         // }
        //     }
        //     // debugger
        //     myloglist.push(obj)
        // }


        // if (bodaEnv.memory.getundefined){
        //     if (arguments.indexOf(undefined) >0 || arguments.indexOf(null) >0){
        //         myundefinedlist.push(arguments)
        //     }
        // }
        if (bodaEnv.config.printLog ) {
            bodaEnv.toolsFunc.printLog(arguments)

        }

        //自动生成hook代码
        return bodaEnv.toolsFunc.log_.apply(this, arguments)
    }}.log
    // if (bodaEnv.config.printLog){
    //     bodaEnv.toolsFunc.console_copy=console.log

    // }else{
        // bodaEnv.toolsFunc.console_copy=function(){
        //     if (!bodaEnv.config.printLog){
        //         return 
        //     }
        //     return console.log.apply(this,arguments)
        // }
    // }
    bodaEnv.toolsFunc.safeFunc(console.log,'log')
    // Object.defineProperty(console,'log',{
    //     get:function (){
    //         return console.log
    //     },
    //     // set:function (){
    //     //     return console.log
    //     // }
    // })
}();


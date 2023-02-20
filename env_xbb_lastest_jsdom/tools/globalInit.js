// 全局变量初始化
var mytime_stamp=Date.now()
// debugger
!function () {
    window.VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL && Object.defineProperty(window, 'VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL', {
        enumerable: false,
        configurable: false,
        writable: false

    });

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

    bodavm.toolsFunc.safefunction(JSON.stringify,'stringify')


    JSON.parse_bo= JSON.parse
    JSON.parse=function parse(){
        let arg0=arguments[0]
        let arg1=arguments[1]
        console.log(`JSON.parse `,` arg0:${arg0.length>20?arg0.substring(0,20)+'...':arg0}`,` arg1:${arg1}`)
        return JSON.parse_bo.apply(this,arguments)
    }
    bodavm.toolsFunc.safefunction(JSON.parse,'parse')



    Object.getOwnPropertyDescriptor_bo=Object.getOwnPropertyDescriptor
    Object.getOwnPropertyDescriptor=function getOwnPropertyDescriptor(){
        let obj=arguments[0]
        let prop=arguments[1]
        // debugger
        if (prop =='constructor'){
        // if (obj ==document){debugger}
            return Object.getOwnPropertyDescriptor_bo.apply(this,arguments)
        }
        desc_res=Object.getOwnPropertyDescriptor_bo.apply(this,arguments)
        console.log(`Object.getOwnPropertyDescriptor==> `,` obj:${obj}`,`prop:${prop}`,`res ->${desc_res} !!!!检测`);
        return desc_res
    }
    bodavm.toolsFunc.safefunction(Object.getOwnPropertyDescriptor,'getOwnPropertyDescriptor')


    Object.getOwnPropertyDescriptors_bo=Object.getOwnPropertyDescriptors
    Object.getOwnPropertyDescriptors=function getOwnPropertyDescriptor(){
        let arg0=arguments[0]
        debugger
        descs_res=Object.getOwnPropertyDescriptors_bo.apply(this,arguments)
        console.log(`Object.getOwnPropertyDescriptors==> `,`arg0:${arg0}`,`res ->${descs_res} !!!!检测`);
        return descs_res
    }
    bodavm.toolsFunc.safefunction(Object.getOwnPropertyDescriptors,'getOwnPropertyDescriptors')

    Object.getOwnPropertyNames_bo=Object.getOwnPropertyNames
    Object.getOwnPropertyNames=function getOwnPropertyDescriptor(){
        let arg0=arguments[0]
        let name_res=Object.getOwnPropertyNames_bo.apply(this,arguments)
        console.log(`Object.getOwnPropertyNames==> `,` arg0:${arg0}`,`name_res->${name_res} !!!检测`);
        return name_res
    }
    bodavm.toolsFunc.safefunction(Object.getOwnPropertyNames,'getOwnPropertyNames')


    Object.getPrototypeOf_bo=Object.getPrototypeOf
    Object.getPrototypeOf=function (obj){
        console.log(`Object.getPrototypeOf `,`obj:${obj}`,'!!!!检测');
        return Object.getPrototypeOf_bo.apply(this,arguments)
    }
    bodavm.toolsFunc.safefunction(Object.getOwnPropertyNames,'getOwnPropertyNames')

    Object.getOwnPropertySymbols_bo=Object.getOwnPropertySymbols
    Object.getOwnPropertySymbols=function getOwnPropertySymbols(arg){
        let symbols_res=Object.getOwnPropertySymbols_bo.apply(this,arguments)
        console.log('Object.getOwnPropertySymbols ',`arg:${arg}`,`symbols_res ->${symbols_res} !!!!检测`);
        return symbols_res
    }
    bodavm.toolsFunc.safefunction(Object.getOwnPropertySymbols,'getOwnPropertySymbols')
    //Plugin
   

    Object.defineProperty_bo=Object.defineProperty
    Object.defineProperty=function defineProperty(){
        // debugger
        let target=arguments[0]
        let prop=arguments[1]
        let obj=arguments[2]
        let myfilter=arguments[3]
        if (myfilter =='bobo'){return Object.defineProperty_bo.call(this,target,prop,obj)}
        let res=Object.defineProperty_bo.call(this,target,prop,obj)
        console.log(`Object.defineProperty `,`target ->${(target.toString())}->`,`prop->${(prop.toString())}->`,`obj ->${(obj.toString())}->`,`res ->${res.toString()}`,`!!!!!检测`)

        return res
    }
    bodavm.toolsFunc.safefunction(Object.defineProperty,'defineProperty')

    Object.values_bo=Object.values
    Object.values=function values(){
        let res=Object.defineProperty_bo.apply(this,arguments)
        console.log(`Object.values `,`ress ->${res}   !!!!!!!!!!检测`);
        return res
    }
    bodavm.toolsFunc.safefunction(Object.values,'values')
 
 
    // Object.prototype.hasOwnProperty_bo=Object.prototype.hasOwnProperty
    // Object.prototype.hasOwnProperty=function (){
    //     debugger
    //     let arg=arguments[0]
    //     let res=Object.prototype.hasOwnProperty_bo.call(this,arg)
    //     console.log(`Object.prototype.hasOwnProperty `,`arg ->${arg}`,`res ->${res}  !!!!!!检测!!!!`)
    //     return res
    // }

    // bodavm.toolsFunc.safefunction(Object.prototype.hasOwnProperty,'hasOwnProperty')

    Object.entries_bo=Object.entries
    Object.entries=function (){
        let obj=arguments[0]
        let res=Object.entries_bo.call(this,obj)
        console.log(`Object.entries `,`obj ->${obj}`,`res ->${res}  !!!!!!检测!!!!`)
        return res
    }
    bodavm.toolsFunc.safefunction( Object.entries,'entries')


}();



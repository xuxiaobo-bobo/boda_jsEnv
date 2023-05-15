// 全局变量初始化
var mytime_stamp = Date.now()
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
                console.log(`Date.now=>被调用 `, `resulit is mytime_stamp:`,mytime_stamp)
                mytime_stamp++
                return mytime_stamp
            }
            bodavm.toolsFunc.safeFunc(Date.now, 'now')
            //固定时间值
            Date.prototype.valueOf_ = Date.prototype.valueOf
            Date.prototype.valueOf = function valueOf() {
                console.log(`Date.prototype.valueOf=>被调用 `, `resulit is mytime_stamp:`,mytime_stamp)
                mytime_stamp++
                return mytime_stamp
            }
            bodavm.toolsFunc.safeFunc(Date.prototype.valueOf, 'valueOf')

            Date.prototype.getTime_ = Date.prototype.getTime
            Date.prototype.getTime = function () {
                console.log(`Date.prototype.getTime=>被调用 `, `resulit is mytime_stamp`,mytime_stamp)
                mytime_stamp++
                return mytime_stamp
            }
            bodavm.toolsFunc.safeFunc(Date.prototype.getTime, 'getTime')
            //固定随机值
            Math.random_ = Math.random;
            Math.random = function () {
                console.log(`Math.random=>被调用  `, `resulit is Math.random:${0.5}`)
                return 0.5
            }
            bodavm.toolsFunc.safeFunc(Math.random, 'random')
        }()

    }

    JSON.stringify_bo = JSON.stringify
    JSON.stringify = function stringify() {
        let arg0 = arguments[0]
        let arg1 = arguments[1]
        let arg2 = arguments[2]
        if (arg2 == 'bo') {
            return JSON.stringify_bo.call(this, arg0, arg1)
        }
        // debugger
        if (arg0 && arg0.length) {
            if (arg0.indexOf(console) > -1) {
                debugger
                console.log('JSON.stringify  ', '  console', '  检测console');
                arg0[arg0.indexOf(console)] = { "memory": {} }
            }
        } else {
            if (arg0 == console) {
                debugger
                console.log('JSON.stringify  ', '  console', '  检测console');
                return '{"memory":{}}'
            }

        }
        if (typeof arg0 == 'string') {
            console.log(`JSON.stringify  `, `  arg0:`,arg0.length > 20 ? arg0.substring(0, 20) + '...' : arg0, ` arg1: `,arg1)

        } else {
            console.log(`JSON.stringify  `, `  arg0:`,arg0, `   arg1: `,arg1)

        }
        return JSON.stringify_bo.call(this, arg0, arg1)

    }

    bodavm.toolsFunc.safefunction(JSON.stringify, 'stringify')


    JSON.parse_bo = JSON.parse
    JSON.parse = function parse() {
        let arg0 = arguments[0]
        let arg1 = arguments[1]
        console.log(`JSON.parse `, ` arg0:`,arg0.length > 40 ? arg0.substring(0, 40) + '...' : arg0, ` arg1:`,arg1)
        return JSON.parse_bo.apply(this, arguments)
    }
    bodavm.toolsFunc.safefunction(JSON.parse, 'parse')



    Object.getOwnPropertyDescriptor_bo = Object.getOwnPropertyDescriptor
    Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor() {
        let obj = arguments[0]
        let prop = arguments[1]
        if (prop == 'constructor') {
            // if (obj ==document){debugger}
            return Object.getOwnPropertyDescriptor_bo.call(this, arguments[0],arguments[1])
        }
        debugger

        desc_res = Object.getOwnPropertyDescriptor_bo.call(this, arguments[0],arguments[1])
        if (desc_res && (desc_res['_boarg'] || desc_res['_boisinit'] || desc_res['_contentiframe'] )){
            delete desc_res['_boarg']
            delete desc_res['_boisinit']
            delete desc_res['_contentiframe']
        }
        
        console.log(`Object.getOwnPropertyDescriptor==> `, ` obj:`,obj, `->`, `prop:`,prop,` ->`, `  res ->`,desc_res,` !!!!检测`);
        return desc_res
    }
    bodavm.toolsFunc.safefunction(Object.getOwnPropertyDescriptor, 'getOwnPropertyDescriptor')


    Object.getOwnPropertyDescriptors_bo = Object.getOwnPropertyDescriptors
    Object.getOwnPropertyDescriptors = function getOwnPropertyDescriptors() {
        let arg0 = arguments[0]
        debugger 
        descs_res = Object.getOwnPropertyDescriptors_bo.apply(this, arguments)
        if (descs_res && (descs_res['_boarg'] || descs_res['_boisinit'] || descs_res['_contentiframe'] )){
            delete descs_res['_boarg']
            delete descs_res['_boisinit']
            delete descs_res['_contentiframe']
        }
        // ldvm.toolsFunc.deleteProperty(descs_res,'length')
        // descs_res[0].configurable=true
        
        delete descs_res['length']
        if (arg0.__proto__==HTMLCollection.prototype){
            for (let i in descs_res){
                descs_res[i].writable=false
            }
        }
        console.log(`Object.getOwnPropertyDescriptors==> `, `arg0:`,arg0,` ->`, `res ->`,descs_res, `!!!!检测`);
        return descs_res
    }
    bodavm.toolsFunc.safefunction(Object.getOwnPropertyDescriptors, 'getOwnPropertyDescriptors')

    Object.getOwnPropertyNames_bo = Object.getOwnPropertyNames
    Object.getOwnPropertyNames = function getOwnPropertyDescriptor() {
        let arg0 = arguments[0]
        let name_res = Object.getOwnPropertyNames_bo.apply(this, arguments)
        for (let i =0;i <name_res.length;i++){
            if ((name_res[i] == '_boarg') ||
                (name_res[i] =='_boisinit') ||
                (name_res[i] == '_contentiframe') ||
                (name_res[i] == 'arguments') ||
                (name_res[i] =='caller') ||
                (name_res[i] =='prototype'))
                {
                name_res.splice(i,1)
                i--
            }
        }
        console.log(`Object.getOwnPropertyNames==> `,`this ->`,bodavm.toolsFunc.getType(this),`->`, ` arg0:`,arg0,` ->`, ` name_res->`,name_res,` !!!检测`);
        return name_res
    }
    bodavm.toolsFunc.safefunction(Object.getOwnPropertyNames, 'getOwnPropertyNames')


    Object.getPrototypeOf_bo = Object.getPrototypeOf
    Object.getPrototypeOf = function (obj) {
        console.log(`Object.getPrototypeOf `, `this ->`,bodavm.toolsFunc.getType(this),`->`,` obj:`,obj,  '!!!!检测');
        return Object.getPrototypeOf_bo.apply(this, arguments)
    }
    bodavm.toolsFunc.safefunction(Object.getOwnPropertyNames, 'getOwnPropertyNames')

    Object.getOwnPropertySymbols_bo = Object.getOwnPropertySymbols
    Object.getOwnPropertySymbols = function getOwnPropertySymbols(arg) {
        let symbols_res = Object.getOwnPropertySymbols_bo.apply(this, arguments)
        console.log('Object.getOwnPropertySymbols ',`this ->`,bodavm.toolsFunc.getType(this),`->`,` arg:`,arg, ` symbols_res ->`,symbols_res,` !!!!检测`);
        return symbols_res
    }
    bodavm.toolsFunc.safefunction(Object.getOwnPropertySymbols, 'getOwnPropertySymbols')
    //Plugin


    Object.defineProperty_bo = Object.defineProperty
    Object.defineProperty = function defineProperty() {
        // debugger
        let target = arguments[0]
        let prop = arguments[1]
        if(target.__proto__==HTMLCollection.prototype){
            
            if (prop !=null && (Number(prop) || Number(prop)==0)){
                return bodavm.toolsFunc.throwError(`TypeError: `,`Filed to set an indexed property on 'HTMLCollection': Index property setter is not supported.
                at Function.defineProperty (<anonymous>)`)

            }
        }
        let obj = arguments[2]
        let myfilter = arguments[3]
        if (myfilter == 'bobo') { return Object.defineProperty_bo.call(this, target, prop, obj) }
        let res = Object.defineProperty_bo.call(this, target, prop, obj)
        console.log(`Object.defineProperty `, `target ->`,(target.toString()),`->`, `prop->`,(prop.toString()),`->`, `obj ->`,(obj.toString()),`->`, `res ->`,res.toString(), `!!!!!检测`)

        return res
    }
    bodavm.toolsFunc.safefunction(Object.defineProperty, 'defineProperty')

    Object.defineProperties_bo = Object.defineProperties
    Object.defineProperties = function defineProperties() {
        // debugger
        let target = arguments[0]
        let prop = arguments[1]
        let myfilter = arguments[2]
        if (myfilter == 'bobo') { return Object.defineProperties_bo.call(this, target, prop) }
        let res = Object.defineProperty_bo.call(this, target, prop)
        console.log(`Object.defineProperties `, `target ->`,(target.toString()),`->`, `prop->`,(prop.toString()),`->`,`->`, `res ->`,res.toString(), `!!!!!检测`)

        return res
    }
    bodavm.toolsFunc.safefunction(Object.defineProperties, 'defineProperties')




    Object.values_bo = Object.values
    Object.values = function values() {
        let res = Object.Object.values_bo.apply(this, arguments)
        console.log(`Object.values `,`this ->`,bodavm.toolsFunc.getType(this),`->`, `res ->`,res,`   !!!!!!!!!!检测`);
        return res
    }
    bodavm.toolsFunc.safefunction(Object.values, 'values')


    Object.prototype.hasOwnProperty_bo=Object.prototype.hasOwnProperty
    Object.prototype.hasOwnProperty=function (){
        
        let arg=arguments[0]
        if ((this == window) && (arg =='hasOwnProperty')){
            return false
        } 
        let arg1=arguments[1]
        if (arg1=='boboflag'){
            return Object.prototype.hasOwnProperty_bo.call(this,arg)
        }
        // debugger
        // obj=''
        // if (arg =='allSettled'){debugger}
        if (typeof this =='function'){
            obj=this.name
        }else{
            // debugger
            obj=bodavm.toolsFunc.getType(this)
        }
        let res=Object.prototype.hasOwnProperty_bo.call(this,arg)
        console.log(`Object.prototype.hasOwnProperty `,`this -> `,obj,` ->`,`arg ->` ,arg,` -> `,` res -> `,res,`  !!!!!!检测!!!!`)
        return res
    }

    bodavm.toolsFunc.safefunction(Object.prototype.hasOwnProperty,'hasOwnProperty')
    Object.defineProperty(Object.prototype,'hasOwnProperty_bo',{
        enumerable:false
    })



    // delete desc_res['_boarg']
    // delete desc_res['_boisinit']
    // delete desc_res['_contentiframe']
    Object.entries_bo = Object.entries
    Object.entries = function () {
        let obj = arguments[0]
        let res = Object.entries_bo.call(this, obj)
        for (let i =0;i<res.length;i++){
            if (res[i] && (res[i][0] =='_boarg' || res[0] == '_boisinit' || res[0] == '_contentiframe')){
                res.splice(i,1)
                i--
            }
        }
        console.log(`Object.entries `,`this ->`,bodavm.toolsFunc.getType(this),`->obj ->`,obj, `-> res ->`,res,`  !!!!!!检测!!!!`)
        return res
    }
    bodavm.toolsFunc.safefunction(Object.entries, 'entries')

    Object.keys_=Object.keys
    Object.keys=function (){
        let obj = arguments[0]
        if (bodavm.toolsFunc.getType(obj)=='[object Window]'){
           let iframes= bodaobj.document.getElementsByTagName('iframe')
           for (let i = 0; i < iframes.length; i++) {
            if (obj==iframes[i].contentWindow){
                res_=bodavm.memory.contentWindow_keys
                console.log(`Object.keys `, `contentWindow下keys !!!!!!检测!!!!`)

                return res_
            }
            
           }
        }
        
        let res = Object.keys_.call(this, obj)
        debugger
        console.log(`Object.keys `, `obj ->${obj} ->`, `res ->过长不显示}  !!!!!!检测!!!!`)
        return res
    }
    bodavm.toolsFunc.safefunction(Object.keys,'keys')

    // Object.prototype.hasOwnProperty_ = Object.prototype.hasOwnProperty
    // Object.prototype.hasOwnProperty = function(x) {
    //     // debugger
    //     if (x+''=='base64StrLength'){debugger}
    //     res = Object.prototype.hasOwnProperty_.apply(this, arguments)
    //     console.log('this',this, '  arg->',x ,'  res->', res)
    //     return res
    // }
    // bodavm.toolsFunc.safefunction(Object.prototype.hasOwnProperty,'hasOwnProperty')

    // var Object_toString = Object.prototype.toString;
    // Object.prototype.toString = function () {
    //     let _temp = Object_toString.call(this, arguments);
    //     console.log(this);
    //     console.log("Object.prototype.toString: " + _temp);
    //     // if(this.constructor.name === 'Document'){
    //     //     return '[object HTMLDocument]';
    //     // }else if(this.constructor.name === 'CanvasRenderingContext2D'){
    //     //     return '[object CanvasRenderingContext2D]'
    //     // }
    //     return _temp;
    // };
    // bodavm.toolsFunc.safefunction(Object.prototype.toString,'toString')

    
    // String.fromCharCode_=String.fromCharCode
    // String.fromCharCode=function(x){
    // res=String.fromCharCode_.apply(this,arguments)
    // console.log('this->',JSON.stringify(this,function(k,v){
    //     if (v ==window){
    //         return 'window'
    //     }else{return v}
    // }),'  arg -> ',x,' res -> ',res)
    // // if((x+'' =='99') && (res +'' =='c')){debugger}
    // return res
    // };;
}();



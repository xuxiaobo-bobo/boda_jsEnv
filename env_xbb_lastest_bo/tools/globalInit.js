
// 全局变量初始化
var mytime_stamp = Date.now()
// debugger
!function () {
    window.VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL && Object.defineProperty(window, 'VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL', {
        enumerable: false,
        configurable: false,
        writable: false

    }, 'bobo');

    if (bodavm.config.randomhook) {
        //hook
        !function () {
            //固定时间值
            Date.now_ = Date.now
            Date.now = {now() {
                console.log_copy(`Date.now=>被调用 `, `resulit is mytime_stamp:`, mytime_stamp)
                mytime_stamp++
                return mytime_stamp
            }}.now
            bodavm.toolsFunc.safeFunc(Date.now, 'now')
            //固定时间值
            Date.prototype.valueOf_ = Date.prototype.valueOf
            Date.prototype.valueOf = { valueOf() {
                console.log_copy(`Date.prototype.valueOf=>被调用 `, `resulit is mytime_stamp:`, mytime_stamp)
                mytime_stamp++
                return mytime_stamp
            }}.valueOf
            bodavm.toolsFunc.safeFunc(Date.prototype.valueOf, 'valueOf')

            Date.prototype.getTime_ = Date.prototype.getTime
            Date.prototype.getTime = { getTime() {
                console.log_copy(`Date.prototype.getTime=>被调用 `, `resulit is mytime_stamp`, mytime_stamp)
                mytime_stamp++
                return mytime_stamp
            }}.getTime
            bodavm.toolsFunc.safeFunc(Date.prototype.getTime, 'getTime')
            //固定随机值
            Math.random_ = Math.random;
            Math.random = { random() {
                console.log_copy(`Math.random=>被调用  `, `resulit is Math.random:${0.5}`)
                return 0.5
            }}.random
            bodavm.toolsFunc.safeFunc(Math.random, 'random')
        }()

    }

    JSON.stringify_bo = JSON.stringify
    JSON.stringify = { stringify() {
        let stringres = ''
        let arg0 = arguments[0]
        let arg1 = arguments[1]
        let arg2 = arguments[2]
        try {


            if (arg2 == 'bo') {
                return JSON.stringify_bo.call(this, arg0, arg1)
            }

            // debugger
            if (arg0 && arg0.length) {
                if (arg0 + ''.indexOf(console) > -1) {
                    debugger
                    console.log_copy('JSON.stringify1  ', '  console', '  检测console');
                    arg0[arg0.indexOf(console)] = { "memory": {} }
                }
            } else {
                if (arg0 == console) {
                    debugger
                    console.log_copy('JSON.stringify3  ', '  console', '  检测console');
                    return '{"memory":{}}'
                }

            }
            stringres = JSON.stringify_bo.call(this, arg0, arg1)
            if (typeof arg0 == 'string') {
                console.log_copy(`JSON.stringify4  `, `  arg0:`, arg0.length > 20 ? arg0.substring(0, 20) + '...' : arg0, ` arg1: `, arg1, '-> res ->', stringres)

            } else {
                // debugger
                if (arg0 && arg0.toString().indexOf("MemoryInfo") > -1) {
                    console.log_copy('JSON.stringify2  ', '  console', '  检测console.memory  res- > {}');

                    return {}
                }
                console.log_copy(`JSON.stringify5  `, `  arg0:`, arg0, `   arg1: `, arg1, '->res->', stringres)


            }
        } catch (e){ console.log_copy(e.message,e.stack);
            console.log_copy(`JSON.stringify hook出错!!!!!!!!!!!!!!!!!!!!!!`,)

        }
        return stringres

    }}.stringify

    bodavm.toolsFunc.safefunction(JSON.stringify, 'stringify')


    JSON.parse_bo = JSON.parse
    JSON.parse = { parse() {
        let arg0 = arguments[0]
        let arg1 = arguments[1]
        try {
            // console.log_copy(`JSON.parse `, ` arg0:`, arg0.length > 200 ? arg0.substring(0, 200) + '...' : arg0, ` arg1:`, arg1)
            console.log_copy(`JSON.parse `, ` arg0:`, arg0, ` arg1:`, arg1)

        } catch (e){ console.log_copy(e.message,e.stack);
            console.log_copy(`JSON.parse hook出错!!!!!!!!!!!!!!!!!!!!!!`,)

        }
        return JSON.parse_bo.apply(this, arguments)
    }}.parse
    bodavm.toolsFunc.safefunction(JSON.parse, 'parse')



    Object.getOwnPropertyDescriptor_bo = Object.getOwnPropertyDescriptor
    Object.getOwnPropertyDescriptor = { getOwnPropertyDescriptor() {
        let obj = arguments[0]
        let prop = arguments[1]
        let desc_res;
        //需要处理Object.getOwnPropertyDescriptor(this,'Document').enumerable 的检测 类似的很多 EventTarget等

        try {
            // debugger
            if (obj === window && prop == '__proto__') {
                // objres={value: undefined, writable: false, enumerable: false, configurable: false}
                // console.log_copy(`Object.getOwnPropertyDescriptor -->`,'传入参数为winodw检测 -> res -> ',objres);
                return undefined
            }
            if (prop == 'constructor') {
                // debugger
                // if (obj ==document){debugger}
                return Object.getOwnPropertyDescriptor_bo.call(this, arguments[0], arguments[1])
            }
            // debugger

            desc_res = Object.getOwnPropertyDescriptor_bo.call(this, arguments[0], arguments[1])
            debugger
            if (desc_res && (desc_res['_boarg'] || desc_res['_boisinit'] || desc_res['_contentiframe'])) {
                delete desc_res['_boarg']
                delete desc_res['_boisinit']
                delete desc_res['_contentiframe']
            }

            console.log_copy(`Object.getOwnPropertyDescriptor--> `, ` obj:`, obj, `->`, `prop:`, prop, ` ->`, `  res ->`, desc_res, ` !!!!检测`);

        } catch (e){ console.log_copy(e.message,e.stack);
            console.log_copy(`Object.getOwnPropertyDescriptor hook出错!!!!!!!!!!!!!!!!!!!!!!`)

        }

        return desc_res
    }}.getOwnPropertyDescriptor
    bodavm.toolsFunc.safefunction(Object.getOwnPropertyDescriptor, 'getOwnPropertyDescriptor')


    Object.getOwnPropertyDescriptors_bo = Object.getOwnPropertyDescriptors
    Object.getOwnPropertyDescriptors = { getOwnPropertyDescriptors() {
        let arg0 = arguments[0]
        let descs_res;
        try {

            // debugger
            descs_res = Object.getOwnPropertyDescriptors_bo.apply(this, arguments)
            if (arguments[0] instanceof HTMLCollection) {

            }
            if (descs_res && (descs_res['_boarg'] || descs_res['_boisinit'] || descs_res['_contentiframe'] || descs_res['__proto__'] ||descs_res[bodavm.memory.myFunction_toString_symbol])) {
                delete descs_res['_boarg']
                delete descs_res['_boisinit']
                delete descs_res['_contentiframe']
                delete descs_res['__proto__']
                delete descs_res[bodavm.memory.myFunction_toString_symbol]
            }
            // ldvm.toolsFunc.deleteProperty(descs_res,'length')
            // descs_res[0].configurable=true

            // delete descs_res['length']
            if (arg0.__proto__ == HTMLCollection.prototype) {
                for (let i in descs_res) {
                    descs_res[i].writable = false
                }
            }
            console.log_copy(`Object.getOwnPropertyDescriptors--> `, `arg0:`, arg0, ` ->`, `res ->`, descs_res, `!!!!检测`);
        } catch (e){ console.log_copy(e.message,e.stack);
            console.log_copy(`Object.getOwnPropertyDescriptors hook出错!!!!!!!!!!!!!!!!!!!!!!`)

        }
        return descs_res
    }}.getOwnPropertyDescriptors
    bodavm.toolsFunc.safefunction(Object.getOwnPropertyDescriptors, 'getOwnPropertyDescriptors')

    Object.getOwnPropertyNames_bo = Object.getOwnPropertyNames
    Object.getOwnPropertyNames = { getOwnPropertyNames() {
        let arg0 = arguments[0]
        let name_res = Object.getOwnPropertyNames_bo.apply(this, arguments)

        try {

                for (let i = 0; i < name_res.length; i++) {

                    if ((name_res[i] == '_boarg') ||
                        (name_res[i] == '_boisinit') ||
                        (name_res[i] == '_contentiframe') ||
                        // (name_res[i] == 'arguments') ||
                        // (name_res[i] =='caller') ||
                        // (name_res[i] =='prototype')||
                        (name_res[i] == 'boallundefined') ||
                        (name_res[i] == 'bofs') ||
                        (name_res[i] == 'isWindowSystem')||
                        (name_res[i] == 'require') ||
                        (name_res[i] == 'bodavm') ||
                        (name_res[i] == 'myundefinedlist') ||
                        (name_res[i] == 'bodaDom') ||
                        (name_res[i] == 'bodaParserURL') 
                        //还有些懒得删除了
                        // (name_res[i] =='__proto__')
                    ) {
                        name_res.splice(i, 1)
                        i--
                    }
            }

            console.log_copy(`Object.getOwnPropertyNames--> `, `this ->`, this, `->`, ` arg0:`, arg0, ` ->`, ` name_res->`, JSON.stringify_bo(name_res), ` !!!检测`);
        } catch (e){ console.log_copy(e.message,e.stack);
            console.log_copy(`Object.getOwnPropertyNames hook出错!!!!!!!!!!!!!!!!!!!!!!`)

        }

        return name_res
    }}.getOwnPropertyNames
    bodavm.toolsFunc.safefunction(Object.getOwnPropertyNames, 'getOwnPropertyNames')


    Object.getPrototypeOf_bo = Object.getPrototypeOf
    Object.getPrototypeOf = {getPrototypeOf (obj) {
        try {
            console.log_copy(`Object.getPrototypeOf `, `this ->`, bodavm.toolsFunc.getType(this), `->`, ` obj:`, obj, '!!!!检测');

        } catch (e){ console.log_copy(e.message,e.stack);
            console.log_copy(`Object.getPrototypeOf hook出错!!!!!!!!!!!!!!!!!!!!!!`)
        }
        return Object.getPrototypeOf_bo.apply(this, arguments)
    }}.getPrototypeOf
    bodavm.toolsFunc.safefunction(Object.getPrototypeOf, 'getPrototypeOf')

    Object.getOwnPropertySymbols_bo = Object.getOwnPropertySymbols
    Object.getOwnPropertySymbols = {getOwnPropertySymbols(arg) {
        let symbols_res;
        try {
            if (arguments[0]==console){
                let resSym=[Symbol("Symbol.toStringTag")]
                console.log_copy('Object.getOwnPropertySymbols ', `->`, ` arg: -> console`,` !!!!检测 ,`,resSym);
                
                return resSym
            }
            symbols_res = Object.getOwnPropertySymbols_bo.apply(this, arguments)
            debugger
            for (let index = 0; index < symbols_res.length; index++) {
                if (symbols_res[index]==bodavm.memory.myFunction_toString_symbol){
                    symbols_res.splice(index,1)
                    index--
                }
       
            }
            console.log_copy('Object.getOwnPropertySymbols ', `->`, ` arg:`, bodavm.toolsFunc.getType(arg), ` symbols_res ->`, symbols_res, ` !!!!检测`);

        }
        catch (e){ 
            console.log_copy(e.message,e.stack);
            console.log_copy(`Object.getOwnPropertySymbols hook出错!!!!!!!!!!!!!!!!!!!!!!`)

        }
        return symbols_res
    }}.getOwnPropertySymbols
    bodavm.toolsFunc.safefunction(Object.getOwnPropertySymbols, 'getOwnPropertySymbols')
    //Plugin


    Object.defineProperty_bo = Object.defineProperty
    Object.defineProperty = { defineProperty() {
        // debugger
        let target = arguments[0]
        let prop = arguments[1]
        // if (prop=="referrer"){debugger}
        let res;
        try {
            let obj = arguments[2]
            let myfilter = arguments[3]
            if (myfilter == 'bobo') { return Object.defineProperty_bo.call(this, target, prop, obj) }
            // debugger
            res = Object.defineProperty_bo.call(this, target, prop, obj)
            console.log_copy(`Object.defineProperty `, `target ->`,target.toString,`->`, `prop->`,prop,`->`, `obj ->`,obj,`->`, `res ->`,res, `!!!!!检测`)
        } catch (e){ console.log_copy(e.message,e.stack);
            debugger
            console.log_copy(`Object.defineProperty hook出错!!!!!!!!!!!!!!!!!!!!!!`)
        }
        return res
    }}.defineProperty
    bodavm.toolsFunc.safefunction(Object.defineProperty, 'defineProperty')

    Object.defineProperties_bo = Object.defineProperties
    Object.defineProperties = { defineProperties() {
        // debugger

        let target = arguments[0]
        let prop = arguments[1]
        let myfilter = arguments[2]
        let res;
        try {
            if (myfilter == 'bobo') { return Object.defineProperties_bo.call(this, target, prop) }
            res = Object.defineProperty_bo.call(this, target, prop)
            console.log_copy(`Object.defineProperties `, `target ->`, (target.toString()), `->`, `prop->`, (prop.toString()), `->`, `->`, `res ->`, res.toString(), `!!!!!检测`)

        } catch (e){ console.log_copy(e.message,e.stack);
            console.log_copy(`Object.defineProperties hook出错!!!!!!!!!!!!!!!!!!!!!!`)
        }

        return res
    }}.defineProperties
    bodavm.toolsFunc.safefunction(Object.defineProperties, 'defineProperties')




    Object.values_bo = Object.values
    Object.values = { values() {
        let res;
        try {
            res = Object.Object.values_bo.apply(this, arguments)
            console.log_copy(`Object.values `, `this ->`, bodavm.toolsFunc.getType(this), `->`, `res ->`, res, `   !!!!!!!!!!检测`);

        } catch (e){ console.log_copy(e.message,e.stack);
            console.log_copy(`Object.values `, `hook 出错`);

        }

        return res
    }}.values
    bodavm.toolsFunc.safefunction(Object.values, 'values')


    Object.prototype.hasOwnProperty_bo = Object.prototype.hasOwnProperty
    Object.prototype.hasOwnProperty = {hasOwnProperty () {

        let arg = arguments[0]
        // let arg2=arguments[1]
        let res;
        try {
            // debugger
            if ((this == window) && (arg == 'hasOwnProperty')) {
                return false
            }
            // if (arg=='')
            if (arg == '__Zm9ybS5pZAo__') {
                console.log_copy(`Object.prototype.hasOwnProperty rs6检测 __Zm9ybS5pZAo__ 返回false`);
                return false
            }
            if (arg == 'require') {
                console.log_copy(`Object.prototype.hasOwnProperty `, `this -> `, obj, ` ->`, `arg ->`, arg, ` -> `, ` res -> `, false, `  !!!!!!检测!!!!`)

                return false
            }
            let arg1 = arguments[1]
            if (arg1 == 'boboflag') {
                return Object.prototype.hasOwnProperty_bo.call(this, arg)
            }
            // debugger
            // obj=''
            // if (arg =='allSettled'){debugger}
            if (typeof this == 'function') {
                obj = this.name
            } else {
                // debugger
                obj = bodavm.toolsFunc.getType(this)
            }
            res = Object.prototype.hasOwnProperty_bo.call(this, arg)
            console.log_copy(`Object.prototype.hasOwnProperty `, `this -> `, obj, ` ->`, `arg ->`, arg, ` -> `, ` res -> `, res, `  !!!!!!检测!!!!`)

        } catch (e){ console.log_copy(e.message,e.stack);
            // console.log_copy(`Object.prototype.hasOwnProperty `,`this -> `,obj,` ->`,`arg ->` ,arg,` -> `,` res -> `,res,` 输出失败`)
            console.log_copy(`Object.prototype.hasOwnProperty `, `this -> `, `hook 出错`)


        }

        return res
    }}.hasOwnProperty

    bodavm.toolsFunc.safefunction(Object.prototype.hasOwnProperty, 'hasOwnProperty')
    Object.defineProperty(Object.prototype, 'hasOwnProperty_bo', {
        enumerable: false
    }, 'bobo')



    // delete desc_res['_boarg']
    // delete desc_res['_boisinit']
    // delete desc_res['_contentiframe']
    Object.entries_bo = Object.entries
    Object.entries = {entries () {
        let res
        try {
            let obj = arguments[0]
            res = Object.entries_bo.call(this, obj)
            for (let i = 0; i < res.length; i++) {
                if (res[i] && (res[i][0] == '_boarg' || res[0] == '_boisinit' || res[0] == '_contentiframe')) {
                    res.splice(i, 1)
                    i--
                }
            }
            console.log_copy(`Object.entries `, `this ->`, this, `->obj ->`, obj, `  !!!!!!检测!!!!`)

        } catch (e){ console.log_copy(e.message,e.stack);
            console.log_copy(`Object.entries `, `hook 出错`)

        }

        return res
    }}.entries
    bodavm.toolsFunc.safefunction(Object.entries, 'entries')

    Object.keys_ = Object.keys
    Object.keys = {keys () {
        let res;
        try {
            // debugger
            let obj = arguments[0]
            let arg2=arguments[1]
            // debugger
            if (obj._boContentWindow==true){
                // debugger
                let resKey=bodavm.memory.contentWindow_keys
                console.log_copy(`Object.keys 获取iframe下的contentWindow`, `obj ->`, obj, `->`, `res ->!!!!!!检测!!!!`,resKey)

                return resKey
            }
            res = Object.keys_.call(this, obj)
            if (arg2=='bobo'){
                return res
            }
            // debugger
            console.log_copy(`Object.keys `, `obj ->`, obj, `->`, `res ->过长不显示}  !!!!!!检测!!!!`, res)
        } catch (e) {
            console.log_copy(`Object.keys `, `hook 出错`, e.message)

        }

        return res
    }}.keys
    bodavm.toolsFunc.safefunction(Object.keys, 'keys')

    // var Object_toString = Object.prototype.toString;
    // Object.prototype.toString = function () {
    //     let _temp = Object_toString.call(this, arguments);
    //     console.log_copy(this);
    //     console.log_copy("Object.prototype.toString: " + _temp);
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
    // console.log_copy('this->',JSON.stringify(this,function(k,v){
    //     if (v ==window){
    //         return 'window'
    //     }else{return v}
    // }),'  arg -> ',x,' res -> ',res)
    // // if((x+'' =='99') && (res +'' =='c')){debugger}
    // return res
    // };;
}();



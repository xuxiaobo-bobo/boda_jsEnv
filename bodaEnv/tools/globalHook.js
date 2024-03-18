
// 全局变量初始化
// debugger
!function () {
    let mytime_stamp = Date.now()


    if (bodaEnv.config.randomhook) {
        //hook
        !function () {
            //固定时间值
            Date.now_ = Date.now
            Date.now = {now() {
                bodaEnv.toolsFunc.console_copy(`Date.now=>被调用 `, `resulit is mytime_stamp:`, mytime_stamp)
                mytime_stamp++
                return mytime_stamp
            }}.now
            bodaEnv.toolsFunc.safeFunc(Date.now, 'now')
            //固定时间值
            Date.prototype.valueOf_ = Date.prototype.valueOf
            Date.prototype.valueOf = { valueOf() {
                bodaEnv.toolsFunc.console_copy(`Date.prototype.valueOf=>被调用 `, `resulit is mytime_stamp:`, mytime_stamp)
                mytime_stamp++
                return mytime_stamp
            }}.valueOf
            bodaEnv.toolsFunc.safeFunc(Date.prototype.valueOf, 'valueOf')

            Date.prototype.getTime_ = Date.prototype.getTime
            Date.prototype.getTime = { getTime() {
                bodaEnv.toolsFunc.console_copy(`Date.prototype.getTime=>被调用 `, `resulit is mytime_stamp`, mytime_stamp)
                mytime_stamp++
                return mytime_stamp
            }}.getTime
            bodaEnv.toolsFunc.safeFunc(Date.prototype.getTime, 'getTime')
            //固定随机值
            Math.random_ = Math.random;
            Math.random = { random() {
                bodaEnv.toolsFunc.console_copy(`Math.random=>被调用  `, `resulit is Math.random:${0.5}`)
                return 0.5
            }}.random
            bodaEnv.toolsFunc.safeFunc(Math.random, 'random')
        }()

    }

    bodaEnv.toolsFunc.stringify_bo = JSON.stringify
    JSON.stringify = { stringify() {
        let stringres = ''
        let arg0 = arguments[0]
        let arg1 = arguments[1]
        let arg2 = arguments[2]
        try {


            if (arg2 == 'bo') {
                return bodaEnv.toolsFunc.stringify_bo.call(this, arg0, arg1)
            }

            // debugger
            if (arg0 && arg0.length) {
                if (typeof arg0[0] == 'symbol'){
                    bodaEnv.toolsFunc.console_copy(`JSON.stringify6  `, `类型为[symbol] `, '->res->', stringres)
                    stringres = bodaEnv.toolsFunc.stringify_bo.call(this, arg0, arg1)
                    return stringres
                }
                else if (arg0 + ''.indexOf(console) > -1) {
                    debugger
                    bodaEnv.toolsFunc.console_copy('JSON.stringify1  ', '  console', '  检测console');
                    arg0[arg0.indexOf(console)] = { "memory": {} }
                }
            } else {
                if (arg0 == console) {
                    debugger
                    bodaEnv.toolsFunc.console_copy('JSON.stringify3  ', '  console', '  检测console');
                    return '{"memory":{}}'
                }

            }
            if (typeof arg0 == 'string') {
                bodaEnv.toolsFunc.console_copy(`JSON.stringify4  `, `  arg0:`, arg0.length > 20 ? arg0.substring(0, 20) + '...' : arg0, ` arg1: `, arg1, '-> res ->', stringres)

            } else {
                // debugger
                if (arg0 && arg0.toString().indexOf("MemoryInfo") > -1) {
                    bodaEnv.toolsFunc.console_copy('JSON.stringify2  ', '  console', '  检测console.memory  res- > {}');

                    return {}
                }
                // debugger
                stringres = bodaEnv.toolsFunc.stringify_bo.call(this, arg0, arg1)
                bodaEnv.toolsFunc.console_copy(`JSON.stringify5  `, `  arg0:`, arg0, `   arg1: `, arg1, '->res->', stringres)


            }
        } catch (e){ bodaEnv.toolsFunc.console_copy(e.message,e.stack);
            debugger
            bodaEnv.toolsFunc.console_copy(`JSON.stringify hook出错!!!!!!!!!!!!!!!!!!!!!!`,)

        }
        return stringres

    }}.stringify

    bodaEnv.toolsFunc.safefunction(JSON.stringify, 'stringify')


    bodaEnv.toolsFunc.parse_bo = JSON.parse
    JSON.parse = { parse() {
        let arg0 = arguments[0]
        let arg1 = arguments[1]
        try {
            // bodaEnv.toolsFunc.console_copy(`JSON.parse `, ` arg0:`, arg0.length > 200 ? arg0.substring(0, 200) + '...' : arg0, ` arg1:`, arg1)
            bodaEnv.toolsFunc.console_copy(`JSON.parse `, ` arg0:`, arg0, ` arg1:`, arg1)

        } catch (e){ bodaEnv.toolsFunc.console_copy(e.message,e.stack);
            bodaEnv.toolsFunc.console_copy(`JSON.parse hook出错!!!!!!!!!!!!!!!!!!!!!!`,)

        }
        return bodaEnv.toolsFunc.parse_bo.apply(this, arguments)
    }}.parse
    bodaEnv.toolsFunc.safefunction(JSON.parse, 'parse')



    bodaEnv.toolsFunc.getOwnPropertyDescriptor_bo = Object.getOwnPropertyDescriptor
    Object.getOwnPropertyDescriptor = { getOwnPropertyDescriptor() {
        let obj = arguments[0]
        let prop = arguments[1]
        let desc_res;
        // if (prop =='href'){debugger}
        // debugger
        //需要处理Object.getOwnPropertyDescriptor(this,'Document').enumerable 的检测 类似的很多 EventTarget等
        // debugger
        try {
            // debugger
            if (obj === window && prop == '__proto__') {
                debugger
                // objres={value: undefined, writable: false, enumerable: false, configurable: false}
                bodaEnv.toolsFunc.console_copy(`Object.getOwnPropertyDescriptor 检测 已处理-->`,'obj为 winodw  prop 为 __proto__-> res -> undefined',);
                return undefined
            }
            if (prop == 'constructor') {
                // debugger
                // if (obj ==document){debugger}
                return bodaEnv.toolsFunc.getOwnPropertyDescriptor_bo.call(this, arguments[0], arguments[1])
            }
            if (obj==Function.prototype.toString){
                delete desc_res['arguments']
                delete desc_res['caller']
            }
            // debugger

            desc_res = bodaEnv.toolsFunc.getOwnPropertyDescriptor_bo.call(this, arguments[0], arguments[1])
            // debugger
            if (desc_res && (desc_res['_boarg'] || desc_res['_boisinit'] || desc_res['_contentiframe'])) {
                delete desc_res['_boarg']
                delete desc_res['_boisinit']
                delete desc_res['_contentiframe']
            }

            // bodaEnv.toolsFunc.console_copy(`Object.getOwnPropertyDescriptor--> `, ` obj:`, obj, `->`, `prop:`, prop, ` ->`, `  res ->`, desc_res, ` !!!!检测`);

        } catch (e){ bodaEnv.toolsFunc.console_copy(e.message,e.stack);
            bodaEnv.toolsFunc.console_copy(`Object.getOwnPropertyDescriptor hook出错!!!!!!!!!!!!!!!!!!!!!!`)

        }

        return desc_res
    }}.getOwnPropertyDescriptor
    bodaEnv.toolsFunc.safefunction(Object.getOwnPropertyDescriptor, 'getOwnPropertyDescriptor')


    bodaEnv.toolsFunc.getOwnPropertyDescriptors_bo = Object.getOwnPropertyDescriptors
    Object.getOwnPropertyDescriptors = { getOwnPropertyDescriptors() {
        let arg0 = arguments[0]
        let descs_res;
        try {

            // debugger
            descs_res = bodaEnv.toolsFunc.getOwnPropertyDescriptors_bo.apply(this, arguments)
            // if (arguments[0] instanceof HTMLCollection) {

            // }
            if (descs_res && (descs_res['_boarg'] || descs_res['_boisinit'] || descs_res['_contentiframe'] || descs_res['__proto__'] ||descs_res[bodaEnv.memory.myFunction_toString_symbol])) {
                delete descs_res['_boarg']
                delete descs_res['_boisinit']
                delete descs_res['_contentiframe']
                delete descs_res['__proto__']
                delete descs_res[bodaEnv.memory.myFunction_toString_symbol]
            }
            // ldvm.toolsFunc.deleteProperty(descs_res,'length')
            // descs_res[0].configurable=true

            // delete descs_res['length']

            bodaEnv.toolsFunc.console_copy(`Object.getOwnPropertyDescriptors--> `, `arg0:`, arg0, ` ->`, `res ->`, descs_res, `!!!!检测`);
        } catch (e){ bodaEnv.toolsFunc.console_copy(e.message,e.stack);
            bodaEnv.toolsFunc.console_copy(`Object.getOwnPropertyDescriptors hook出错!!!!!!!!!!!!!!!!!!!!!!`)

        }
        return descs_res
    }}.getOwnPropertyDescriptors
    bodaEnv.toolsFunc.safefunction(Object.getOwnPropertyDescriptors, 'getOwnPropertyDescriptors')

    bodaEnv.toolsFunc.getOwnPropertyNames_bo = Object.getOwnPropertyNames
    Object.getOwnPropertyNames = { getOwnPropertyNames() {
        let arg0 = arguments[0]
        let name_res = bodaEnv.toolsFunc.getOwnPropertyNames_bo.apply(this, arguments)
        // debugger
        if (arg0 ==alert) {
            bodaEnv.toolsFunc.console_copy(`Object.getOwnPropertyNames--> alert 检测 已处理 返回 ['length', 'name']`)
            return ['length', 'name']
        }
        if (arg0 instanceof Event){
            bodaEnv.toolsFunc.console_copy(`Object.getOwnPropertyNames--> `, `this ->`, this, `->`, ` arg0:`, arg0, ` ->`, ` name_res-> ['isTrusted'] !!!检测`);
            return ['isTrusted']
        }
        if (arg0==Function){
            bodaEnv.toolsFunc.console_copy(`Object.getOwnPropertyNames--> Funtion 检测 已处理 返回 ['length', 'name', 'prototype']`)


            return ['length', 'name', 'prototype']
        }
        if (arg0==document){
            bodaEnv.toolsFunc.console_copy(`Object.getOwnPropertyNames--> document 检测 已处理 返回 ['location']`)
            let _res=['location']
            // _res=bodaEnv.toolsFunc.proxyHelper(_res,'proxyHelper::getOwnPropertyNames检测document ')

            return  _res
        }
        // debugger
        try {


            bodaEnv.toolsFunc.delHookObj(name_res)
            bodaEnv.toolsFunc.console_copy(`Object.getOwnPropertyNames--> `, `this ->`, this, `->`, ` arg0:`, arg0, ` ->`, ` name_res->`, bodaEnv.toolsFunc.stringify_bo(name_res), ` !!!检测`);
            

        } catch (e){ bodaEnv.toolsFunc.console_copy(e.message,e.stack);
            bodaEnv.toolsFunc.console_copy(`Object.getOwnPropertyNames hook出错!!!!!!!!!!!!!!!!!!!!!!`)

        }

        return name_res
    }}.getOwnPropertyNames
    bodaEnv.toolsFunc.safefunction(Object.getOwnPropertyNames, 'getOwnPropertyNames')


    bodaEnv.toolsFunc.getPrototypeOf_bo = Object.getPrototypeOf
    Object.getPrototypeOf = {getPrototypeOf (obj) {
        try {
            // bodaEnv.toolsFunc.console_copy(`Object.getPrototypeOf `, `this ->`, bodaEnv.toolsFunc.getType(this), `->`, ` obj:`, obj, '!!!!检测');

        } catch (e){ bodaEnv.toolsFunc.console_copy(e.message,e.stack);
            bodaEnv.toolsFunc.console_copy(`Object.getPrototypeOf hook出错!!!!!!!!!!!!!!!!!!!!!!`)
        }
        return bodaEnv.toolsFunc.getPrototypeOf_bo.apply(this, arguments)
    }}.getPrototypeOf
    bodaEnv.toolsFunc.safefunction(Object.getPrototypeOf, 'getPrototypeOf')

    bodaEnv.toolsFunc.getOwnPropertySymbols_bo = Object.getOwnPropertySymbols
    Object.getOwnPropertySymbols = {getOwnPropertySymbols(arg) {
        let symbols_res;
        try {
            if (arguments[0]==console){
                let resSym=[Symbol("Symbol.toStringTag")]
                bodaEnv.toolsFunc.console_copy('Object.getOwnPropertySymbols ', `->`, ` arg: -> console`,` !!!!检测 ,`);
                
                return resSym
            }
            if (arguments[0] == Promise){
                // debugger

                let resSym=[Symbol("Symbol.species")]
                bodaEnv.toolsFunc.console_copy('Object.getOwnPropertySymbols ', `->`, ` arg: -> Promise`,` !!!!检测 ,`);
                
                return resSym
            }
            if (arguments[0].__proto__==(async function name(params) {})().__proto__){
                bodaEnv.toolsFunc.console_copy('Object.getOwnPropertySymbols ', `->`, ` arg: -> Promise`,` !!!!检测 ,`);
                return []
            }
            symbols_res = bodaEnv.toolsFunc.getOwnPropertySymbols_bo.apply(this, arguments)
            // debugger
            for (let index = 0; index < symbols_res.length; index++) {
                if (symbols_res[index]==bodaEnv.memory.myFunction_toString_symbol){
                    symbols_res.splice(index,1)
                    index--
                }
       
            }
            bodaEnv.toolsFunc.console_copy('Object.getOwnPropertySymbols ', `->`, ` arg:`, bodaEnv.toolsFunc.getType(arg), ` symbols_res ->`, symbols_res, ` !!!!检测`);

        }
        catch (e){ 
            bodaEnv.toolsFunc.console_copy(e.message,e.stack);
            bodaEnv.toolsFunc.console_copy(`Object.getOwnPropertySymbols hook出错!!!!!!!!!!!!!!!!!!!!!!`)

        }
        return symbols_res
    }}.getOwnPropertySymbols
    bodaEnv.toolsFunc.safefunction(Object.getOwnPropertySymbols, 'getOwnPropertySymbols')
    //Plugin


    bodaEnv.toolsFunc.defineProperty_bo = Object.defineProperty
    Object.defineProperty = { defineProperty() {
        // debugger
        let target = arguments[0]
        let prop = arguments[1]
        if (prop=='setRequestHeader'){debugger}
        // if (prop=='cdc_adoQpoasnfa76pfcZLmcfl_Symbol'){
        //     bodaEnv.toolsFunc.console_copy(`Object.defineProperty `, `target ->`,target.toString,`->`, `prop为cdc_adoQpoasnfa76pfcZLmcfl_Symbol调用主动报错`,)

        //     return bodaEnv.toolsFunc.throwError('TypeError',`Cannot redefine property: cdc_adoQpoasnfa76pfcZLmcfl_Symbol`)
        // }
        // if (prop=="referrer"){debugger}
        let res;
        try {
            let obj = arguments[2]
            let myfilter = arguments[3]
            if (myfilter == 'bobo') { return bodaEnv.toolsFunc.defineProperty_bo.call(this, target, prop, obj) }
            // debugger
            res = bodaEnv.toolsFunc.defineProperty_bo.call(this, target, prop, obj)
           // bodaEnv.toolsFunc.console_copy(`Object.defineProperty `, `target ->`,target+'',`->`, `prop->`,prop,`->`, `obj ->`,obj,`->`, `res ->`,res, `!!!!!检测`)
           // bodaEnv.toolsFunc.console_copy(`Object.defineProperty `,`prop->`,prop,`->`, `obj ->`,obj,`->`, `res ->`,res, `!!!!!检测`)

        } catch (e){ bodaEnv.toolsFunc.console_copy(e.message,e.stack);
            // debugger
            bodaEnv.toolsFunc.console_copy(`Object.defineProperty hook出错!!!!!!!!!!!!!!!!!!!!!!`)
        }
        return res
    }}.defineProperty
    bodaEnv.toolsFunc.safefunction(Object.defineProperty, 'defineProperty')

    bodaEnv.toolsFunc.defineProperties_bo = Object.defineProperties
    Object.defineProperties = { defineProperties() {
        // debugger

        let target = arguments[0]
        let prop = arguments[1]
        let myfilter = arguments[2]
        let res;
        try {
            if (myfilter == 'bobo') { return bodaEnv.toolsFunc.defineProperties_bo.call(this, target, prop) }
            res = bodaEnv.toolsFunc.defineProperties_bo.call(this, target, prop)
            bodaEnv.toolsFunc.console_copy(`Object.defineProperties `, `target ->`, (target.toString()), `->`, `prop->`, (prop.toString()), `->`, `->`, `res ->`, res.toString(), `!!!!!检测`)

        } catch (e){ bodaEnv.toolsFunc.console_copy(e.message,e.stack);
            bodaEnv.toolsFunc.console_copy(`Object.defineProperties hook出错!!!!!!!!!!!!!!!!!!!!!!`)
        }

        return res
    }}.defineProperties
    bodaEnv.toolsFunc.safefunction(Object.defineProperties, 'defineProperties')




    bodaEnv.toolsFunc.values_bo = Object.values
    Object.values = { values() {
        let res;
        try {
            res = Object.bodaEnv.toolsFunc.values_bo.apply(this, arguments)
            bodaEnv.toolsFunc.console_copy(`Object.values `, `this ->`, bodaEnv.toolsFunc.getType(this), `->`, `res ->`, res, `   !!!!!!!!!!检测`);

        } catch (e){ bodaEnv.toolsFunc.console_copy(e.message,e.stack);
            bodaEnv.toolsFunc.console_copy(`Object.values `, `hook 出错`);

        }

        return res
    }}.values
    bodaEnv.toolsFunc.safefunction(Object.values, 'values')


    bodaEnv.toolsFunc.hasOwnProperty_bo= Object.prototype.hasOwnProperty
    Object.prototype.hasOwnProperty = {hasOwnProperty () {

        let arg = arguments[0]
        // let arg2=arguments[1]
        let res;
        try {
            // debugger
            if ((this == window)) {
                if ( ['hasOwnProperty','addEventListener','dispatchEvent','removeEventListener','TEMPORARY','PERSISTENT'].indexOf(arg) !=-1){
                    return false
                }
            }
            // if (arg=='')
   
            if (arg == 'require') {
                bodaEnv.toolsFunc.console_copy(`Object.prototype.hasOwnProperty `, `this -> `, obj, ` ->`, `arg ->`, arg, ` -> `, ` res -> `, false, `  !!!!!!检测!!!!`)

                return false
            }
            let arg1 = arguments[1]
            if (arg1 == 'boboflag') {
                return bodaEnv.toolsFunc.hasOwnProperty_bo.call(this, arg)
            }
            // debugger
            // obj=''
            // if (arg =='allSettled'){debugger}
            if (typeof this == 'function') {
                obj = this.name
            } else {
                // debugger
                obj = bodaEnv.toolsFunc.getType(this)
            }
            res = bodaEnv.toolsFunc.hasOwnProperty_bo.call(this, arg)
            // bodaEnv.toolsFunc.console_copy(`Object.prototype.hasOwnProperty `, `this -> `, obj, ` ->`, `arg ->`, arg, ` -> `, ` res -> `, res, `  !!!!!!检测!!!!`)

        } catch (e){ bodaEnv.toolsFunc.console_copy(e.message,e.stack);
            // bodaEnv.toolsFunc.console_copy(`Object.prototype.hasOwnProperty `,`this -> `,obj,` ->`,`arg ->` ,arg,` -> `,` res -> `,res,` 输出失败`)
            bodaEnv.toolsFunc.console_copy(`Object.prototype.hasOwnProperty `, `this -> `, `hook 出错`)


        }

        return res
    }}.hasOwnProperty

    bodaEnv.toolsFunc.safefunction(Object.prototype.hasOwnProperty, 'hasOwnProperty')
    // Object.defineProperty(Object.prototype, 'hasOwnProperty_bo', {
    //     enumerable: false
    // }, 'bobo')



    // delete desc_res['_boarg']
    // delete desc_res['_boisinit']
    // delete desc_res['_contentiframe']
    bodaEnv.toolsFunc.entries_bo = Object.entries
    Object.entries = {entries () {
        let res
        try {
            let obj = arguments[0]
            res = bodaEnv.toolsFunc.entries_bo.call(this, obj)
            for (let i = 0; i < res.length; i++) {
                if (res[i] && (res[i][0] == '_boarg' || res[0] == '_boisinit' || res[0] == '_contentiframe')) {
                    res.splice(i, 1)
                    i--
                }
            }
            bodaEnv.toolsFunc.console_copy(`Object.entries `, `this ->`, this, `->obj ->`, obj, `  !!!!!!检测!!!!`)

        } catch (e){ bodaEnv.toolsFunc.console_copy(e.message,e.stack);
            bodaEnv.toolsFunc.console_copy(`Object.entries `, `hook 出错`)

        }

        return res
    }}.entries
    bodaEnv.toolsFunc.safefunction(Object.entries, 'entries')

    bodaEnv.toolsFunc.keys_ = Object.keys
    Object.keys = {keys () {
        let res;
        try {
            // debugger
            let obj = arguments[0]
            let arg2=arguments[1]
            // debugger
            if (bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(obj,'self')){
                // debugger
                let resKey=bodaEnv.memory.contentWindow_keys
                bodaEnv.toolsFunc.console_copy(`Object.keys 获取iframe下的Window 属性`, `->`, `res ->!!!!!!检测!!!!`,resKey)

                return resKey
            }
            
            res = bodaEnv.toolsFunc.keys_.call(this, obj)
            if (arg2=='bobo'){
                return res
            }
            if (obj ==window){
                bodaEnv.toolsFunc.delHookObj(res)
            }

            // debugger
            bodaEnv.toolsFunc.console_copy(`Object.keys `, `obj ->`, obj, `->`, `res -> !检测!`, [res])
        } catch (e) {
            bodaEnv.toolsFunc.console_copy(`Object.keys `, `hook 出错`, e.message)

        }

        return res
    }}.keys
    bodaEnv.toolsFunc.safefunction(Object.keys, 'keys')


    bodaEnv.toolsFunc.Reflect_ownKeys = Reflect.ownKeys
    Reflect.ownKeys={
        ownKeys(obj) {
            debugger
            let res = bodaEnv.toolsFunc.Reflect_ownKeys(obj)
            if (obj ==window){
                bodaEnv.toolsFunc.delHookObj(res)
            }
            bodaEnv.toolsFunc.console_copy(`Reflect.ownKeys -> `, `obj ->`, obj, `->`, `res -> !检测!`, [res])

            return res
        }
    }.ownKeys

    // var Object_toString = Object.prototype.toString;
    // Object.prototype.toString = function () {
    //     let _temp = Object_toString.call(this, arguments);
    //     bodaEnv.toolsFunc.console_copy(this);
    //     bodaEnv.toolsFunc.console_copy("Object.prototype.toString: " + _temp);
    //     // if(this.constructor.name === 'Document'){
    //     //     return '[object HTMLDocument]';
    //     // }else if(this.constructor.name === 'CanvasRenderingContext2D'){
    //     //     return '[object CanvasRenderingContext2D]'
    //     // }
    //     return _temp;
    // };
    // bodaEnv.toolsFunc.safefunction(Object.prototype.toString,'toString')


    // String.fromCharCode_=String.fromCharCode
    // String.fromCharCode=function(x){
    // res=String.fromCharCode_.apply(this,arguments)
    // bodaEnv.toolsFunc.console_copy('this->',JSON.stringify(this,function(k,v){
    //     if (v ==window){
    //         return 'window'
    //     }else{return v}
    // }),'  arg -> ',x,' res -> ',res)
    // // if((x+'' =='99') && (res +'' =='c')){debugger}
    // return res
    // };;
    //格式化检测
    // Object.defineProperty(Function.prototype,'toString',
    // {   writable: true, 
    //     enumerable: false, 
    //     configurable: true, 
    //     value: function(){
    //         // debugger;
    //         if (this==Function.prototype){return 'function () { [native code] }'}
    //         let funcName=this.name
    //         let toStinrVal=Reflect.apply(bodaEnv.memory.bodaFunctionPrototypetoString,this,arguments)
    //         bodaEnv.toolsFunc.console_copy('funcname -> ',funcName,' -> funcContent -> ' ,toStinrVal,` Function.prototype toString 检测!!!!`)
    //         return toStinrVal
    //     }},'bobo'
    // ) 
    // let bodaStingindexOf=String.prototype.indexOf
    // String.prototype.indexOf={ indexOf(str_){
    //     // debugger
    //     bodaEnv.toolsFunc.console_copy('String.prototype.indexOf -> ','arg -> ',arguments[0], '-> this -> ', this+'')
    //     return bodaStingindexOf.call(this,str_)
    // }}.indexOf

    // bodaEnv.toolsFunc.safefunction(String.prototype.indexOf, 'indexOf')

    // let bodaStingtoString=String.prototype.toString

    // String.prototype.toString={ toString(){
    //     debugger
    //     if (arguments[1]=='bobo'){return bodaStingtoString.apply(this,arguments)}
    //     bodaEnv.toolsFunc.console_copy('String.prototype.toString- > ',this+'')
    //     return bodaStingtoString.apply(this,arguments)
    // }}.toString
    // bodaEnv.toolsFunc.safefunction(String.prototype.toString, 'toString')


}();



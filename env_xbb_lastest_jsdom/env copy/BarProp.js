// BarProp对象
bodavm.memory.globalobj['BarProp'] = function BarProp(){
    
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BarProp'], "BarProp");
bodavm.toolsFunc.defineProperty('BarProp', "visible", {configurable:true, enumerable:true, get:function visible (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BarProp'].prototype, "BarProp", "visible_get", arguments)}, set:undefined},'prototype');

// locationbar对象
bodavm.memory.globalobj['locationbar'] = {}
bodavm.memory.globalobj['locationbar'].__proto__=bodavm.memory.globalobj['BarProp'].prototype;

bodavm.memory.globalobj['menubar'] ={}
bodavm.memory.globalobj['menubar'].__proto__= bodavm.memory.globalobj['BarProp'].prototype;

bodavm.memory.globalobj['statusbar']  ={}
bodavm.memory.globalobj['statusbar'].__proto__=bodavm.memory.globalobj['BarProp'].prototype

bodavm.memory.globalobj['toolbar']  ={}
bodavm.memory.globalobj['toolbar'].__proto__=bodavm.memory.globalobj['BarProp'].prototype

bodavm.memory.globalobj['personalbar']  ={}
bodavm.memory.globalobj['personalbar'].__proto__=bodavm.memory.globalobj['BarProp'].prototype

bodavm.memory.globalobj['scrollbars']  ={}
bodavm.memory.globalobj['scrollbars'].__proto__=bodavm.memory.globalobj['BarProp'].prototype
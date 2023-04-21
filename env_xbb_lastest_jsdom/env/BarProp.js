// BarProp对象
bodavm.memory.globalobj['BarProp'] = function BarProp(){
    this._boisinit=bodavm.config.isinit;
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BarProp'], "BarProp");
bodavm.toolsFunc.defineProperty('BarProp', "visible", {configurable:true, enumerable:true, get:function visible (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BarProp'].prototype, "BarProp", "visible_get", arguments)}, set:undefined},'prototype');

// locationbar对象
bodavm.memory.globalobj['locationbar'] = {
    _boisinit:bodavm.config.isinit
}
bodavm.memory.globalobj['locationbar'].__proto__=bodavm.memory.globalobj['BarProp'].prototype;

bodavm.memory.globalobj['menubar'] ={ _boisinit:bodavm.config.isinit}
bodavm.memory.globalobj['menubar'].__proto__= bodavm.memory.globalobj['BarProp'].prototype;

bodavm.memory.globalobj['statusbar']  ={ _boisinit:bodavm.config.isinit}
bodavm.memory.globalobj['statusbar'].__proto__=bodavm.memory.globalobj['BarProp'].prototype

bodavm.memory.globalobj['toolbar']  ={ _boisinit:bodavm.config.isinit}
bodavm.memory.globalobj['toolbar'].__proto__=bodavm.memory.globalobj['BarProp'].prototype

bodavm.memory.globalobj['personalbar']  ={ _boisinit:bodavm.config.isinit}
bodavm.memory.globalobj['personalbar'].__proto__=bodavm.memory.globalobj['BarProp'].prototype

bodavm.memory.globalobj['scrollbars']  ={ _boisinit:bodavm.config.isinit}
bodavm.memory.globalobj['scrollbars'].__proto__=bodavm.memory.globalobj['BarProp'].prototype
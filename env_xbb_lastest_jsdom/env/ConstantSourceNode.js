// ConstantSourceNode对象
bodavm.memory.globalobj['ConstantSourceNode'] = function ConstantSourceNode(){if (!(this instanceof ConstantSourceNode)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ConstantSourceNode': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ConstantSourceNode'], "ConstantSourceNode");
bodavm.memory.globalobj['ConstantSourceNode'].prototype.__proto__=bodavm.memory.globalobj['AudioScheduledSourceNode'].prototype;
bodavm.memory.globalobj['ConstantSourceNode'].__proto__=bodavm.memory.globalobj['AudioScheduledSourceNode'];
bodavm.toolsFunc.defineProperty('ConstantSourceNode', "offset", {configurable:true, enumerable:true, get:function offset (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ConstantSourceNode'].prototype, "ConstantSourceNode", "offset_get", arguments)}, set:undefined},'prototype');

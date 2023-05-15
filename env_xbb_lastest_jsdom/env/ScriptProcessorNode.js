// ScriptProcessorNode对象
bodavm.memory.globalobj['ScriptProcessorNode'] = function ScriptProcessorNode(){if (!(this instanceof ScriptProcessorNode)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ScriptProcessorNode'], "ScriptProcessorNode");
bodavm.memory.globalobj['ScriptProcessorNode'].prototype.__proto__=bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['ScriptProcessorNode'].__proto__=bodavm.memory.globalobj['AudioNode'];
bodavm.toolsFunc.defineProperty('ScriptProcessorNode', "onaudioprocess", {configurable:true, enumerable:true, get:function onaudioprocess (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScriptProcessorNode'].prototype, "ScriptProcessorNode", "onaudioprocess_get", arguments)}, set:function onaudioprocess (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScriptProcessorNode'].prototype, "ScriptProcessorNode", "onaudioprocess_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('ScriptProcessorNode', "bufferSize", {configurable:true, enumerable:true, get:function bufferSize (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ScriptProcessorNode'].prototype, "ScriptProcessorNode", "bufferSize_get", arguments)}, set:undefined},'prototype');

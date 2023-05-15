// IIRFilterNode对象
bodavm.memory.globalobj['IIRFilterNode'] = function IIRFilterNode(){if (!(this instanceof IIRFilterNode)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'IIRFilterNode': 2 arguments required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['IIRFilterNode'], "IIRFilterNode");
bodavm.memory.globalobj['IIRFilterNode'].prototype.__proto__=bodavm.memory.globalobj['AudioNode'].prototype;
bodavm.memory.globalobj['IIRFilterNode'].__proto__=bodavm.memory.globalobj['AudioNode'];
bodavm.toolsFunc.defineProperty('IIRFilterNode', "getFrequencyResponse", {configurable:true, enumerable:true, writable:true, value:function getFrequencyResponse (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IIRFilterNode'].prototype, "IIRFilterNode", "getFrequencyResponse", arguments)}},'prototype');

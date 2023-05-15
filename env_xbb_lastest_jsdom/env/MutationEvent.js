// MutationEvent对象
bodavm.memory.globalobj['MutationEvent'] = function MutationEvent(){if (!(this instanceof MutationEvent)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MutationEvent'], "MutationEvent");
bodavm.memory.globalobj['MutationEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['MutationEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('MutationEvent', "MODIFICATION", {configurable:false, enumerable:true, writable:false, value:1});
bodavm.toolsFunc.defineProperty('MutationEvent', "ADDITION", {configurable:false, enumerable:true, writable:false, value:2});
bodavm.toolsFunc.defineProperty('MutationEvent', "REMOVAL", {configurable:false, enumerable:true, writable:false, value:3});
bodavm.toolsFunc.defineProperty('MutationEvent', "relatedNode", {configurable:true, enumerable:true, get:function relatedNode (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationEvent'].prototype, "MutationEvent", "relatedNode_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MutationEvent', "prevValue", {configurable:true, enumerable:true, get:function prevValue (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationEvent'].prototype, "MutationEvent", "prevValue_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MutationEvent', "newValue", {configurable:true, enumerable:true, get:function newValue (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationEvent'].prototype, "MutationEvent", "newValue_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MutationEvent', "attrName", {configurable:true, enumerable:true, get:function attrName (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationEvent'].prototype, "MutationEvent", "attrName_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MutationEvent', "attrChange", {configurable:true, enumerable:true, get:function attrChange (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationEvent'].prototype, "MutationEvent", "attrChange_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('MutationEvent', "MODIFICATION", {configurable:false, enumerable:true, writable:false, value:1},'prototype');
bodavm.toolsFunc.defineProperty('MutationEvent', "ADDITION", {configurable:false, enumerable:true, writable:false, value:2},'prototype');
bodavm.toolsFunc.defineProperty('MutationEvent', "REMOVAL", {configurable:false, enumerable:true, writable:false, value:3},'prototype');
bodavm.toolsFunc.defineProperty('MutationEvent', "initMutationEvent", {configurable:true, enumerable:true, writable:true, value:function initMutationEvent (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MutationEvent'].prototype, "MutationEvent", "initMutationEvent", arguments)}},'prototype');

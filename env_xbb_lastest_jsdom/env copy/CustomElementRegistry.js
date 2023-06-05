// CustomElementRegistry对象
bodavm.memory.globalobj['CustomElementRegistry'] = function CustomElementRegistry(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CustomElementRegistry'], "CustomElementRegistry");
bodavm.toolsFunc.defineProperty('CustomElementRegistry', "define", {configurable:true, enumerable:true, writable:true, value:function define (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomElementRegistry'].prototype, "CustomElementRegistry", "define", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('CustomElementRegistry', "get", {configurable:true, enumerable:true, writable:true, value:function get (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomElementRegistry'].prototype, "CustomElementRegistry", "get", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('CustomElementRegistry', "upgrade", {configurable:true, enumerable:true, writable:true, value:function upgrade (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomElementRegistry'].prototype, "CustomElementRegistry", "upgrade", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('CustomElementRegistry', "whenDefined", {configurable:true, enumerable:true, writable:true, value:function whenDefined (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CustomElementRegistry'].prototype, "CustomElementRegistry", "whenDefined", arguments)}},'prototype');

// customElements对象
bodavm.memory.globalobj[ 'customElements']  = {}
bodavm.memory.globalobj[ 'customElements'].__proto__=bodavm.memory.globalobj['CustomElementRegistry'].prototype;

// History对象
bodavm.memory.globalobj['History'] = function History(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['History'], "History");
bodavm.toolsFunc.defineProperty('History', "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['History'].prototype, "History", "length_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('History', "scrollRestoration", {configurable:true, enumerable:true, get:function scrollRestoration (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['History'].prototype, "History", "scrollRestoration_get", arguments)}, set:function scrollRestoration (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['History'].prototype, "History", "scrollRestoration_set", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('History', "state", {configurable:true, enumerable:true, get:function state (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['History'].prototype, "History", "state_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('History', "back", {configurable:true, enumerable:true, writable:true, value:function back (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['History'].prototype, "History", "back", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('History', "forward", {configurable:true, enumerable:true, writable:true, value:function forward (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['History'].prototype, "History", "forward", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('History', "go", {configurable:true, enumerable:true, writable:true, value:function go (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['History'].prototype, "History", "go", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('History', "pushState", {configurable:true, enumerable:true, writable:true, value:function pushState (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['History'].prototype, "History", "pushState", arguments)}},'prototype');
bodavm.toolsFunc.defineProperty('History', "replaceState", {configurable:true, enumerable:true, writable:true, value:function replaceState (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['History'].prototype, "History", "replaceState", arguments)}},'prototype');

bodavm.memory.globalobj[ 'history'] = {}
bodavm.memory.globalobj[ 'history'].__proto__= bodavm.memory.globalobj['History'].prototype;

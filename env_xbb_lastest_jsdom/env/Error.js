// // Error对象
// bodavm.memory.globalobj['Error'] = function Error(){
//     console.log_copy('Error 实例化对象参数为 -> Error检测', JSON.stringify_bo(arguments, function (k, v) {
//         if (v == window) {
//           return 'window';
//         } else {
//           return v;
//         }
//       }));
//       this._boisinit = bodavm.config.isinit;
//       debugger;
//     arg=arguments[0]
//     if (arg){
//         this.stack=`Error: ${arg+''}\n    at <anonymous>:1:1`
//         this.toString=function (){
//             console.log_copy(`检测 Error 的tostring方法 ->`)
//             return `Error: ${arg}`
//         }


//     }else{
//         this.stack='Error\n    at <anonymous>:1:1'
//         this.toString=function (){
//             console.log_copy(`检测 Error 的tostring方法 ->`)
//             return 'Error'
//         }
//     }
   
    
    
// }

// bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Error'], "Error");
// bodavm.toolsFunc.defineProperty('Error', "captureStackTrace", {configurable:true, enumerable:false, writable:true, value:function captureStackTrace (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Error'].prototype, "Error", "captureStackTrace", arguments)}});
// bodavm.toolsFunc.defineProperty('Error', "stackTraceLimit", {configurable:true, enumerable:true, writable:true, value:10});
// bodavm.toolsFunc.defineProperty('Error', "name", {configurable:true, enumerable:false, writable:true, value:"Error"},'prototype');
// bodavm.toolsFunc.defineProperty('Error', "message", {configurable:true, enumerable:false, writable:true, value:""},'prototype');
// bodavm.toolsFunc.defineProperty('Error', "toString", {configurable:true, enumerable:false, writable:true, value:function toString (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Error'].prototype, "Error", "toString", arguments)}},'prototype');

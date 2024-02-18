// console.memory.__proto__对象

// bodaEnv.memory.globlProtoObj['MemoryInfo'] = {
// 	_boisinit:true
// }
// bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['MemoryInfo'].prototype, "totalJSHeapSize", {configurable:true, enumerable:true, get:function totalJSHeapSize (){return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['MemoryInfo'], "MemoryInfo", "totalJSHeapSize_get", arguments)}, set:undefined});
// bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['MemoryInfo'].prototype, "usedJSHeapSize", {configurable:true, enumerable:true, get:function usedJSHeapSize (){return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['MemoryInfo'], "MemoryInfo", "usedJSHeapSize_get", arguments)}, set:undefined});
// bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['MemoryInfo'].prototype, "jsHeapSizeLimit", {configurable:true, enumerable:true, get:function jsHeapSizeLimit (){return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['MemoryInfo'], "MemoryInfo", "jsHeapSizeLimit_get", arguments)}, set:undefined});

bodaEnv.memory.globlProtoObj['MemoryInfo'] = function MemoryInfo() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MemoryInfo 实例化对象参数为 ->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj['MemoryInfo'], "MemoryInfo");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['MemoryInfo'].prototype, "totalJSHeapSize", {
  configurable: true,
  enumerable: true,
  get: {
    totalJSHeapSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['MemoryInfo'].prototype, "totalJSHeapSize", "totalJSHeapSize_get", arguments);
    }
  }.totalJSHeapSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['MemoryInfo'].prototype, "usedJSHeapSize", {
  configurable: true,
  enumerable: true,
  get: {
    usedJSHeapSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['MemoryInfo'].prototype, "usedJSHeapSize", "usedJSHeapSize_get", arguments);
    }
  }.usedJSHeapSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['MemoryInfo'].prototype, "jsHeapSizeLimit", {
  configurable: true,
  enumerable: true,
  get: {
    jsHeapSizeLimit() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['MemoryInfo'].prototype, "jsHeapSizeLimit", "jsHeapSizeLimit_get", arguments);
    }
  }.jsHeapSizeLimit,
  set: undefined
});
delete bodaEnv.memory.globlProtoObj['MemoryInfo'].prototype.constructor;
Object.defineProperty(console, 'memory', {
  get: { memory() {
      debugger;
      bodaEnv.toolsFunc.console_copy('console, memory get 检测 !!! ')
      // let islive=bodaEnv.toolsFunc.getProtoAttr.call(this,'memory')
      // if (islive){
      // 	return islive
      // }
      // debugger
      let res=new bodaEnv.memory.globlProtoObj['MemoryInfo']('bobo')
      // bodaEnv.toolsFunc.setProtoAttr.call(this,'memory',res)
      // res=bodaEnv.toolsFunc.proxy2(res,'memory')
        return res;
    }
  }.memory,
  set: { memory() {
    bodaEnv.toolsFunc.console_copy(' bodaEnv.memory.globlProtoObj[MemoryInfo]  console memory set 检测');
  }}.memory,
  configurable: true,
  enumerable: true
}, 'bobo');
//delete bodaEnv.memory.globlProtoObj['MemoryInfo'].prototype.constructor;
bodaEnv.toolsFunc.safefunction(Object.getOwnPropertyDescriptor(console, 'memory').get, '', true);
bodaEnv.toolsFunc.safefunction(Object.getOwnPropertyDescriptor(console, 'memory').set, '', true);
Object.defineProperty(Object.getOwnPropertyDescriptor(console, 'memory').get, 'name', {
  value: '',
  writable: false,
  enumerable: false,
  configurable: true
});
Object.defineProperty(Object.getOwnPropertyDescriptor(console, 'memory').set, 'name', {
  value: '',
  writable: false,
  enumerable: false,
  configurable: true
});
// console.memory={}
// console.memory.__proto__=bodaEnv.memory.globlProtoObj['MemoryInfo'].prototype

// Object.defineProperty(console.memory.__proto__,Symbol.toStringTag,{
//   value: 'MemoryInfo',
//   configurable: true,
//   writable: false,
//   enumerable: false
// })
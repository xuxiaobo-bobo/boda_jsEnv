// console.memory.__proto__对象

// bodavm.memory.notDefined['MemoryInfo'] = {
// 	_boisinit:true
// }
// bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['MemoryInfo'].prototype, "totalJSHeapSize", {configurable:true, enumerable:true, get:function totalJSHeapSize (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['MemoryInfo'], "MemoryInfo", "totalJSHeapSize_get", arguments)}, set:undefined});
// bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['MemoryInfo'].prototype, "usedJSHeapSize", {configurable:true, enumerable:true, get:function usedJSHeapSize (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['MemoryInfo'], "MemoryInfo", "usedJSHeapSize_get", arguments)}, set:undefined});
// bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['MemoryInfo'].prototype, "jsHeapSizeLimit", {configurable:true, enumerable:true, get:function jsHeapSizeLimit (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['MemoryInfo'], "MemoryInfo", "jsHeapSizeLimit_get", arguments)}, set:undefined});

bodavm.memory.notDefined['MemoryInfo'] = function MemoryInfo() {
  console.log_copy('MemoryInfo 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.notDefined['MemoryInfo'], "MemoryInfo");
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['MemoryInfo'].prototype, "totalJSHeapSize", {
  configurable: true,
  enumerable: true,
  get: function totalJSHeapSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['MemoryInfo'].prototype, "totalJSHeapSize", "totalJSHeapSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['MemoryInfo'].prototype, "usedJSHeapSize", {
  configurable: true,
  enumerable: true,
  get: function usedJSHeapSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['MemoryInfo'].prototype, "usedJSHeapSize", "usedJSHeapSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['MemoryInfo'].prototype, "jsHeapSizeLimit", {
  configurable: true,
  enumerable: true,
  get: function jsHeapSizeLimit() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['MemoryInfo'].prototype, "jsHeapSizeLimit", "jsHeapSizeLimit_get", arguments);
  },
  set: undefined
});
delete bodavm.memory.notDefined['MemoryInfo'].prototype.constructor;
Object.defineProperty(console, 'memory', {
  get: function () {
    //debugger;
    console.log_copy(`bodavm.memory.notDefined[MemoryInfo]  console.memory get 检测 !!!`);
    let memoryres = {
      _boisinit: true,
      jsHeapSizeLimit: 2190000000,
      totalJSHeapSize: 15200000,
      usedJSHeapSize: 13400000
    };
    memoryres.__proto__ = bodavm.memory.notDefined['MemoryInfo'].prototype;
    return memoryres;
  },
  set: function () {
    console.log_copy(' bodavm.memory.notDefined[MemoryInfo]  console memory set 检测');
  },
  configurable: true,
  enumerable: true
});
delete bodavm.memory.notDefined['MemoryInfo'].prototype.constructor;
bodavm.toolsFunc.safefunction(Object.getOwnPropertyDescriptor(console, 'memory').get, '');
bodavm.toolsFunc.safefunction(Object.getOwnPropertyDescriptor(console, 'memory').set, '');
// console.memory={}
// console.memory.__proto__=bodavm.memory.notDefined['MemoryInfo'].prototype

// Object.defineProperty(console.memory.__proto__,Symbol.toStringTag,{
//   value: 'MemoryInfo',
//   configurable: true,
//   writable: false,
//   enumerable: false
// })
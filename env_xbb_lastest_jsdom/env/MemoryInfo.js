// console.memory.__proto__对象

// bodavm.memory.globalobj['MemoryInfo'] = {
// 	_boisinit:true
// }
// bodavm.toolsFunc.defineProperty('MemoryInfo', "totalJSHeapSize", {configurable:true, enumerable:true, get:function totalJSHeapSize (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MemoryInfo'], "MemoryInfo", "totalJSHeapSize_get", arguments)}, set:undefined});
// bodavm.toolsFunc.defineProperty('MemoryInfo', "usedJSHeapSize", {configurable:true, enumerable:true, get:function usedJSHeapSize (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MemoryInfo'], "MemoryInfo", "usedJSHeapSize_get", arguments)}, set:undefined});
// bodavm.toolsFunc.defineProperty('MemoryInfo', "jsHeapSizeLimit", {configurable:true, enumerable:true, get:function jsHeapSizeLimit (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MemoryInfo'], "MemoryInfo", "jsHeapSizeLimit_get", arguments)}, set:undefined});





bodavm.memory.globalobj['MemoryInfo'] = function MemoryInfo() {
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
  bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MemoryInfo'], "MemoryInfo");
  bodavm.toolsFunc.defineProperty('MemoryInfo', "totalJSHeapSize", {
	configurable: true,
	enumerable: true,
	get: function totalJSHeapSize() {
	  return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MemoryInfo'].prototype, "totalJSHeapSize", "totalJSHeapSize_get", arguments);
	},
	set: undefined
  }, 'prototype');

  bodavm.toolsFunc.defineProperty('MemoryInfo', "usedJSHeapSize", {
	configurable: true,
	enumerable: true,
	get: function totalJSHeapSize() {
	  return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MemoryInfo'].prototype, "usedJSHeapSize", "usedJSHeapSize_get", arguments);
	},
	set: undefined
  }, 'prototype');
  bodavm.toolsFunc.defineProperty('MemoryInfo', "jsHeapSizeLimit", {
	configurable: true,
	enumerable: true,
	get: function totalJSHeapSize() {
	  return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MemoryInfo'].prototype, "jsHeapSizeLimit", "jsHeapSizeLimit_get", arguments);
	},
	set: undefined
  }, 'prototype');

delete bodavm.memory.globalobj['MemoryInfo'].prototype.constructor
Object.defineProperty(console,'memory',{
	get:function(){
		debugger
		console.log(`console.memory get 检测 !!!`)
		res={
			_boisinit:true,
			jsHeapSizeLimit:2190000000,
			totalJSHeapSize:15200000,
			usedJSHeapSize:13400000,

		}
		res.__proto__=bodavm.memory.globalobj['MemoryInfo'].prototype
		return res
	},
	set:function(){
		console.log_copy('console memory set 检测')
	},
	configurable: true,
	enumerable: true
})

bodavm.toolsFunc.safefunction(Object.getOwnPropertyDescriptor(console,'memory').get,'')
bodavm.toolsFunc.safefunction(Object.getOwnPropertyDescriptor(console,'memory').set,'')
// console.memory={}
// console.memory.__proto__=bodavm.memory.globalobj['MemoryInfo'].prototype

// Object.defineProperty(console.memory.__proto__,Symbol.toStringTag,{
//   value: 'MemoryInfo',
//   configurable: true,
//   writable: false,
//   enumerable: false
// })


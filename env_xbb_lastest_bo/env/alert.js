// alert对象
bodavm.memory.globalInit['alert'] = function () {};
bodavm.toolsFunc.safeProto(bodavm.memory.globalInit['alert'], 'alert');
bodavm.toolsFunc.defineProperty(bodavm.memory.globalInit['alert'], "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(bodavm.memory.globalInit['alert'], "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: "alert"
});
//bodavm.memory.globalInit['alert']=bodavm.toolsFunc.proxy2(bodavm.memory.globalInit['alert'],'alert')
// requestIdleCallback对象

bodavm.memory.globalobj['requestIdleCallback'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.toolsFunc.defineProperty('requestIdleCallback', "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('requestIdleCallback', "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: "requestIdleCallback"
});
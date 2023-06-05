// name对象

bodavm.memory.globalobj['name'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.toolsFunc.defineProperty('name', "length", {
  configurable: false,
  enumerable: false,
  writable: false,
  value: 0
});
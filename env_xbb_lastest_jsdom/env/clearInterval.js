// clearInterval对象

bodavm.memory.globalobj['clearInterval'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.toolsFunc.defineProperty('clearInterval', "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('clearInterval', "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: "clearInterval"
});
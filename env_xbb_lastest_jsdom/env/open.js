// open对象

bodavm.memory.globalobj['open'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.toolsFunc.defineProperty('open', "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('open', "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: "open"
});
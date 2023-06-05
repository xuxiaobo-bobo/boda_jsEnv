// scroll对象

bodavm.memory.globalobj['scroll'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.toolsFunc.defineProperty('scroll', "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('scroll', "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: "scroll"
});
// cancelAnimationFrame对象

bodavm.memory.globalobj['cancelAnimationFrame'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.toolsFunc.defineProperty('cancelAnimationFrame', "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('cancelAnimationFrame', "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: "cancelAnimationFrame"
});
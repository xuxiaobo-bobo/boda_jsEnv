// personalbar对象

bodavm.memory.globalobj['personalbar'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['personalbar'].__proto__ = bodavm.memory.globalobj['BarProp'].prototype;
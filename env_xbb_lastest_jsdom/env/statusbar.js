// statusbar对象

bodavm.memory.globalobj['statusbar'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['statusbar'].__proto__ = bodavm.memory.globalobj['BarProp'].prototype;
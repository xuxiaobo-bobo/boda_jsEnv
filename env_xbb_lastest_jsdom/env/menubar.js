// menubar对象

bodavm.memory.globalobj['menubar'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['menubar'].__proto__ = bodavm.memory.globalobj['BarProp'].prototype;
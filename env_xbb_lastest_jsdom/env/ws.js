// ws对象

bodavm.memory.globalobj['ws'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['ws'].__proto__ = bodavm.memory.globalobj['WebSocket'].prototype;
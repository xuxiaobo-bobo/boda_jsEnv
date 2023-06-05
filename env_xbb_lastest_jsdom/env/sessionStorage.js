// sessionStorage对象

bodavm.memory.globalobj['sessionStorage'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['sessionStorage'].__proto__ = bodavm.memory.globalobj['Storage'].prototype;
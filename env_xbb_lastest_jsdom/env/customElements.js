// customElements对象

bodavm.memory.globalobj['customElements'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['customElements'].__proto__ = bodavm.memory.globalobj['CustomElementRegistry'].prototype;
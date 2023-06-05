// trustedTypes对象

bodavm.memory.globalobj['trustedTypes'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['trustedTypes'].__proto__ = bodavm.memory.globalobj['TrustedTypePolicyFactory'].prototype;
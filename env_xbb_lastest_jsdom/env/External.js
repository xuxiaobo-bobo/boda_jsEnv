// External对象

bodavm.memory.globalobj['External'] = function External() {
  console.log_copy('External 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof External)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['External'], "External");
bodavm.toolsFunc.defineProperty('External', "AddSearchProvider", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function AddSearchProvider() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['External'].prototype, "External", "AddSearchProvider", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('External', "IsSearchProviderInstalled", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function IsSearchProviderInstalled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['External'].prototype, "External", "IsSearchProviderInstalled", arguments);
  }
}, 'prototype');

// external对象

bodavm.memory.globalobj['external'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['external'].__proto__ = bodavm.memory.globalobj['External'].prototype;
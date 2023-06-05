// PresentationConnectionList对象

bodavm.memory.globalobj['PresentationConnectionList'] = function PresentationConnectionList() {
  console.log_copy('PresentationConnectionList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PresentationConnectionList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PresentationConnectionList'], "PresentationConnectionList");
bodavm.memory.globalobj['PresentationConnectionList'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['PresentationConnectionList'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('PresentationConnectionList', "connections", {
  configurable: true,
  enumerable: true,
  get: function connections() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnectionList'].prototype, "PresentationConnectionList", "connections_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PresentationConnectionList', "onconnectionavailable", {
  configurable: true,
  enumerable: true,
  get: function onconnectionavailable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnectionList'].prototype, "PresentationConnectionList", "onconnectionavailable_get", arguments);
  },
  set: function onconnectionavailable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PresentationConnectionList'].prototype, "PresentationConnectionList", "onconnectionavailable_set", arguments);
  }
}, 'prototype');
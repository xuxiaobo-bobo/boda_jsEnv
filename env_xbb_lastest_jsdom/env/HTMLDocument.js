// HTMLDocument对象

bodavm.memory.globalobj['HTMLDocument'] = function HTMLDocument() {
  console.log_copy('HTMLDocument 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLDocument)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLDocument'], "HTMLDocument");
bodavm.memory.globalobj['HTMLDocument'].prototype.__proto__ = bodavm.memory.globalobj['Document'].prototype;
bodavm.memory.globalobj['HTMLDocument'].__proto__ = bodavm.memory.globalobj['Document'];

// document对象

bodavm.memory.globalobj['document'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['document'].__proto__ = bodavm.memory.globalobj['HTMLDocument'].prototype;
bodavm.toolsFunc.defineProperty('document', "location", {
  configurable: false,
  enumerable: true,
  get: function location() {
    return bodavm.toolsFunc.dispatch(this, document, "document", "location_get", arguments);
  },
  set: function location() {
    return bodavm.toolsFunc.dispatch(this, document, "document", "location_set", arguments);
  }
});
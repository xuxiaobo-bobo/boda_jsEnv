// HIDDevice对象

bodavm.memory.globalobj['HIDDevice'] = function HIDDevice() {
  console.log_copy('HIDDevice 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HIDDevice)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HIDDevice'], "HIDDevice");
bodavm.memory.globalobj['HIDDevice'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['HIDDevice'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('HIDDevice', "oninputreport", {
  configurable: true,
  enumerable: true,
  get: function oninputreport() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HIDDevice'].prototype, "HIDDevice", "oninputreport_get", arguments);
  },
  set: function oninputreport() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HIDDevice'].prototype, "HIDDevice", "oninputreport_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HIDDevice', "opened", {
  configurable: true,
  enumerable: true,
  get: function opened() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HIDDevice'].prototype, "HIDDevice", "opened_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HIDDevice', "vendorId", {
  configurable: true,
  enumerable: true,
  get: function vendorId() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HIDDevice'].prototype, "HIDDevice", "vendorId_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HIDDevice', "productId", {
  configurable: true,
  enumerable: true,
  get: function productId() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HIDDevice'].prototype, "HIDDevice", "productId_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HIDDevice', "productName", {
  configurable: true,
  enumerable: true,
  get: function productName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HIDDevice'].prototype, "HIDDevice", "productName_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HIDDevice', "collections", {
  configurable: true,
  enumerable: true,
  get: function collections() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HIDDevice'].prototype, "HIDDevice", "collections_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HIDDevice', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HIDDevice'].prototype, "HIDDevice", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HIDDevice', "forget", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forget() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HIDDevice'].prototype, "HIDDevice", "forget", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HIDDevice', "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function open() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HIDDevice'].prototype, "HIDDevice", "open", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HIDDevice', "receiveFeatureReport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function receiveFeatureReport() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HIDDevice'].prototype, "HIDDevice", "receiveFeatureReport", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HIDDevice', "sendFeatureReport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function sendFeatureReport() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HIDDevice'].prototype, "HIDDevice", "sendFeatureReport", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HIDDevice', "sendReport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function sendReport() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HIDDevice'].prototype, "HIDDevice", "sendReport", arguments);
  }
}, 'prototype');
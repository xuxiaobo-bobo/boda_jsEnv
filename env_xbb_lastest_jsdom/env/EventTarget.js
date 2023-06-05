// EventTarget对象

bodavm.memory.globalobj['EventTarget'] = function EventTarget() {
  console.log_copy('EventTarget 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.EventTarget();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['EventTarget'], "EventTarget");
bodavm.toolsFunc.defineProperty('EventTarget', "addEventListener", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addEventListener() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventTarget'].prototype, "EventTarget", "addEventListener", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('EventTarget', "dispatchEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function dispatchEvent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventTarget'].prototype, "EventTarget", "dispatchEvent", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('EventTarget', "removeEventListener", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeEventListener() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['EventTarget'].prototype, "EventTarget", "removeEventListener", arguments);
  }
}, 'prototype');
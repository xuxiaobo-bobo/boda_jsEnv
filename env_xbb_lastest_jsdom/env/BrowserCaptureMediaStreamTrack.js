// BrowserCaptureMediaStreamTrack对象

bodavm.memory.globalobj['BrowserCaptureMediaStreamTrack'] = function BrowserCaptureMediaStreamTrack() {
  console.log_copy('BrowserCaptureMediaStreamTrack 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof BrowserCaptureMediaStreamTrack)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BrowserCaptureMediaStreamTrack'], "BrowserCaptureMediaStreamTrack");
bodavm.memory.globalobj['BrowserCaptureMediaStreamTrack'].prototype.__proto__ = bodavm.memory.globalobj['MediaStreamTrack'].prototype;
bodavm.memory.globalobj['BrowserCaptureMediaStreamTrack'].__proto__ = bodavm.memory.globalobj['MediaStreamTrack'];
bodavm.toolsFunc.defineProperty('BrowserCaptureMediaStreamTrack', "cropTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cropTo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BrowserCaptureMediaStreamTrack'].prototype, "BrowserCaptureMediaStreamTrack", "cropTo", arguments);
  }
}, 'prototype');
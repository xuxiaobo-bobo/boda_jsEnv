// BackgroundFetchRecord对象

bodavm.memory.globalobj['BackgroundFetchRecord'] = function BackgroundFetchRecord() {
  console.log_copy('BackgroundFetchRecord 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof BackgroundFetchRecord)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BackgroundFetchRecord'], "BackgroundFetchRecord");
bodavm.toolsFunc.defineProperty('BackgroundFetchRecord', "request", {
  configurable: true,
  enumerable: true,
  get: function request() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BackgroundFetchRecord'].prototype, "BackgroundFetchRecord", "request_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BackgroundFetchRecord', "responseReady", {
  configurable: true,
  enumerable: true,
  get: function responseReady() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BackgroundFetchRecord'].prototype, "BackgroundFetchRecord", "responseReady_get", arguments);
  },
  set: undefined
}, 'prototype');
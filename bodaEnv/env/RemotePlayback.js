// RemotePlayback对象

bodaEnv.memory.globlProtoObj["RemotePlayback"] = function RemotePlayback() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RemotePlayback 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RemotePlayback"], "RemotePlayback");
bodaEnv.memory.globlProtoObj["RemotePlayback"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["RemotePlayback"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RemotePlayback"].prototype, "state", {
  configurable: true,
  enumerable: true,
  get: {
    state() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RemotePlayback"].prototype, "RemotePlayback", "state_get", arguments);
    }
  }.state,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RemotePlayback"].prototype, "onconnecting", {
  configurable: true,
  enumerable: true,
  get: {
    onconnecting() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RemotePlayback"].prototype, "RemotePlayback", "onconnecting_get", arguments);
    }
  }.onconnecting,
  set: {
    onconnecting() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RemotePlayback"].prototype, "RemotePlayback", "onconnecting_set", arguments);
    }
  }.onconnecting
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RemotePlayback"].prototype, "onconnect", {
  configurable: true,
  enumerable: true,
  get: {
    onconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RemotePlayback"].prototype, "RemotePlayback", "onconnect_get", arguments);
    }
  }.onconnect,
  set: {
    onconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RemotePlayback"].prototype, "RemotePlayback", "onconnect_set", arguments);
    }
  }.onconnect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RemotePlayback"].prototype, "ondisconnect", {
  configurable: true,
  enumerable: true,
  get: {
    ondisconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RemotePlayback"].prototype, "RemotePlayback", "ondisconnect_get", arguments);
    }
  }.ondisconnect,
  set: {
    ondisconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RemotePlayback"].prototype, "RemotePlayback", "ondisconnect_set", arguments);
    }
  }.ondisconnect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RemotePlayback"].prototype, "cancelWatchAvailability", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cancelWatchAvailability() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RemotePlayback"].prototype, "RemotePlayback", "cancelWatchAvailability", arguments);
    }
  }.cancelWatchAvailability
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RemotePlayback"].prototype, "prompt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    prompt() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RemotePlayback"].prototype, "RemotePlayback", "prompt", arguments);
    }
  }.prompt
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RemotePlayback"].prototype, "watchAvailability", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    watchAvailability() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RemotePlayback"].prototype, "RemotePlayback", "watchAvailability", arguments);
    }
  }.watchAvailability
});
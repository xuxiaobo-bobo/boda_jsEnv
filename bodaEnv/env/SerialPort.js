// SerialPort对象

bodaEnv.memory.globlProtoObj["SerialPort"] = function SerialPort() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SerialPort 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SerialPort"], "SerialPort");
bodaEnv.memory.globlProtoObj["SerialPort"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["SerialPort"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "onconnect", {
  configurable: true,
  enumerable: true,
  get: {
    onconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "SerialPort", "onconnect_get", arguments);
    }
  }.onconnect,
  set: {
    onconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "SerialPort", "onconnect_set", arguments);
    }
  }.onconnect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "ondisconnect", {
  configurable: true,
  enumerable: true,
  get: {
    ondisconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "SerialPort", "ondisconnect_get", arguments);
    }
  }.ondisconnect,
  set: {
    ondisconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "SerialPort", "ondisconnect_set", arguments);
    }
  }.ondisconnect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "readable", {
  configurable: true,
  enumerable: true,
  get: {
    readable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "SerialPort", "readable_get", arguments);
    }
  }.readable,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "writable", {
  configurable: true,
  enumerable: true,
  get: {
    writable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "SerialPort", "writable_get", arguments);
    }
  }.writable,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "SerialPort", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "forget", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forget() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "SerialPort", "forget", arguments);
    }
  }.forget
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "getInfo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getInfo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "SerialPort", "getInfo", arguments);
    }
  }.getInfo
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "getSignals", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSignals() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "SerialPort", "getSignals", arguments);
    }
  }.getSignals
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    open() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "SerialPort", "open", arguments);
    }
  }.open
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "setSignals", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setSignals() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SerialPort"].prototype, "SerialPort", "setSignals", arguments);
    }
  }.setSignals
});
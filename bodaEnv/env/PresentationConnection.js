// PresentationConnection对象

bodaEnv.memory.globlProtoObj["PresentationConnection"] = function PresentationConnection() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PresentationConnection 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PresentationConnection"], "PresentationConnection");
bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["PresentationConnection"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "id", {
  configurable: true,
  enumerable: true,
  get: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "PresentationConnection", "id_get", arguments);
    }
  }.id,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "url", {
  configurable: true,
  enumerable: true,
  get: {
    url() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "PresentationConnection", "url_get", arguments);
    }
  }.url,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "state", {
  configurable: true,
  enumerable: true,
  get: {
    state() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "PresentationConnection", "state_get", arguments);
    }
  }.state,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "onconnect", {
  configurable: true,
  enumerable: true,
  get: {
    onconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "PresentationConnection", "onconnect_get", arguments);
    }
  }.onconnect,
  set: {
    onconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "PresentationConnection", "onconnect_set", arguments);
    }
  }.onconnect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "onclose", {
  configurable: true,
  enumerable: true,
  get: {
    onclose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "PresentationConnection", "onclose_get", arguments);
    }
  }.onclose,
  set: {
    onclose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "PresentationConnection", "onclose_set", arguments);
    }
  }.onclose
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "onterminate", {
  configurable: true,
  enumerable: true,
  get: {
    onterminate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "PresentationConnection", "onterminate_get", arguments);
    }
  }.onterminate,
  set: {
    onterminate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "PresentationConnection", "onterminate_set", arguments);
    }
  }.onterminate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "binaryType", {
  configurable: true,
  enumerable: true,
  get: {
    binaryType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "PresentationConnection", "binaryType_get", arguments);
    }
  }.binaryType,
  set: {
    binaryType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "PresentationConnection", "binaryType_set", arguments);
    }
  }.binaryType
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "onmessage", {
  configurable: true,
  enumerable: true,
  get: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "PresentationConnection", "onmessage_get", arguments);
    }
  }.onmessage,
  set: {
    onmessage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "PresentationConnection", "onmessage_set", arguments);
    }
  }.onmessage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "PresentationConnection", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "send", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    send() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "PresentationConnection", "send", arguments);
    }
  }.send
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "terminate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    terminate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnection"].prototype, "PresentationConnection", "terminate", arguments);
    }
  }.terminate
});
// BackgroundFetchRegistration对象

bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"] = function BackgroundFetchRegistration() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BackgroundFetchRegistration 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"], "BackgroundFetchRegistration");
bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "id", {
  configurable: true,
  enumerable: true,
  get: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "BackgroundFetchRegistration", "id_get", arguments);
    }
  }.id,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "uploadTotal", {
  configurable: true,
  enumerable: true,
  get: {
    uploadTotal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "BackgroundFetchRegistration", "uploadTotal_get", arguments);
    }
  }.uploadTotal,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "uploaded", {
  configurable: true,
  enumerable: true,
  get: {
    uploaded() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "BackgroundFetchRegistration", "uploaded_get", arguments);
    }
  }.uploaded,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "downloadTotal", {
  configurable: true,
  enumerable: true,
  get: {
    downloadTotal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "BackgroundFetchRegistration", "downloadTotal_get", arguments);
    }
  }.downloadTotal,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "downloaded", {
  configurable: true,
  enumerable: true,
  get: {
    downloaded() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "BackgroundFetchRegistration", "downloaded_get", arguments);
    }
  }.downloaded,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "result", {
  configurable: true,
  enumerable: true,
  get: {
    result() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "BackgroundFetchRegistration", "result_get", arguments);
    }
  }.result,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "failureReason", {
  configurable: true,
  enumerable: true,
  get: {
    failureReason() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "BackgroundFetchRegistration", "failureReason_get", arguments);
    }
  }.failureReason,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "recordsAvailable", {
  configurable: true,
  enumerable: true,
  get: {
    recordsAvailable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "BackgroundFetchRegistration", "recordsAvailable_get", arguments);
    }
  }.recordsAvailable,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "onprogress", {
  configurable: true,
  enumerable: true,
  get: {
    onprogress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "BackgroundFetchRegistration", "onprogress_get", arguments);
    }
  }.onprogress,
  set: {
    onprogress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "BackgroundFetchRegistration", "onprogress_set", arguments);
    }
  }.onprogress
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    abort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "BackgroundFetchRegistration", "abort", arguments);
    }
  }.abort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "match", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    match() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "BackgroundFetchRegistration", "match", arguments);
    }
  }.match
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "matchAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    matchAll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchRegistration"].prototype, "BackgroundFetchRegistration", "matchAll", arguments);
    }
  }.matchAll
});
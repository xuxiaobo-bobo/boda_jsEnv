// CookieStore对象

bodaEnv.memory.globlProtoObj["CookieStore"] = function CookieStore() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CookieStore 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CookieStore"], "CookieStore");
bodaEnv.memory.globlProtoObj["CookieStore"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["CookieStore"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CookieStore"].prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bodelete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CookieStore"].prototype, "CookieStore", "bodelete", arguments);
    }
  }.bodelete
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CookieStore"].prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    get() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CookieStore"].prototype, "CookieStore", "get", arguments);
    }
  }.get
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CookieStore"].prototype, "getAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CookieStore"].prototype, "CookieStore", "getAll", arguments);
    }
  }.getAll
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CookieStore"].prototype, "set", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    set() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CookieStore"].prototype, "CookieStore", "set", arguments);
    }
  }.set
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CookieStore"].prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CookieStore"].prototype, "CookieStore", "onchange_get", arguments);
    }
  }.onchange,
  set: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CookieStore"].prototype, "CookieStore", "onchange_set", arguments);
    }
  }.onchange
});

// cookieStore对象

bodaEnv.memory.globlProtoObj["cookieStore"] = new bodaEnv.memory.globlProtoObj["CookieStore"]('bobo');
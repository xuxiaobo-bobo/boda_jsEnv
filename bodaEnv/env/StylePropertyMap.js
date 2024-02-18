// StylePropertyMap对象

bodaEnv.memory.globlProtoObj["StylePropertyMap"] = function StylePropertyMap() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('StylePropertyMap 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["StylePropertyMap"], "StylePropertyMap");
bodaEnv.memory.globlProtoObj["StylePropertyMap"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"].prototype;
bodaEnv.memory.globlProtoObj["StylePropertyMap"].__proto__ = bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StylePropertyMap"].prototype, "append", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    append() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StylePropertyMap"].prototype, "StylePropertyMap", "append", arguments);
    }
  }.append
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StylePropertyMap"].prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clear() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StylePropertyMap"].prototype, "StylePropertyMap", "clear", arguments);
    }
  }.clear
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StylePropertyMap"].prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bodelete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StylePropertyMap"].prototype, "StylePropertyMap", "bodelete", arguments);
    }
  }.bodelete
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StylePropertyMap"].prototype, "set", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    set() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StylePropertyMap"].prototype, "StylePropertyMap", "set", arguments);
    }
  }.set
});
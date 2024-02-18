// HTMLOptionsCollection对象

bodaEnv.memory.globlProtoObj["HTMLOptionsCollection"] = function HTMLOptionsCollection() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLOptionsCollection 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLOptionsCollection"], "HTMLOptionsCollection");
bodaEnv.memory.globlProtoObj["HTMLOptionsCollection"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLCollection"].prototype;
bodaEnv.memory.globlProtoObj["HTMLOptionsCollection"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLCollection"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOptionsCollection"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOptionsCollection"].prototype, "HTMLOptionsCollection", "length_get", arguments);
    }
  }.length,
  set: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOptionsCollection"].prototype, "HTMLOptionsCollection", "length_set", arguments);
    }
  }.length
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOptionsCollection"].prototype, "selectedIndex", {
  configurable: true,
  enumerable: true,
  get: {
    selectedIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOptionsCollection"].prototype, "HTMLOptionsCollection", "selectedIndex_get", arguments);
    }
  }.selectedIndex,
  set: {
    selectedIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOptionsCollection"].prototype, "HTMLOptionsCollection", "selectedIndex_set", arguments);
    }
  }.selectedIndex
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOptionsCollection"].prototype, "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    add() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOptionsCollection"].prototype, "HTMLOptionsCollection", "add", arguments);
    }
  }.add
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLOptionsCollection"].prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    remove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLOptionsCollection"].prototype, "HTMLOptionsCollection", "remove", arguments);
    }
  }.remove
});
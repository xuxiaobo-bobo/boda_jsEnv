// MediaList对象

bodaEnv.memory.globlProtoObj["MediaList"] = function MediaList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaList"], "MediaList");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaList"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaList"].prototype, "MediaList", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaList"].prototype, "mediaText", {
  configurable: true,
  enumerable: true,
  get: {
    mediaText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaList"].prototype, "MediaList", "mediaText_get", arguments);
    }
  }.mediaText,
  set: {
    mediaText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaList"].prototype, "MediaList", "mediaText_set", arguments);
    }
  }.mediaText
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaList"].prototype, "appendMedium", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    appendMedium() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaList"].prototype, "MediaList", "appendMedium", arguments);
    }
  }.appendMedium
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaList"].prototype, "deleteMedium", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteMedium() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaList"].prototype, "MediaList", "deleteMedium", arguments);
    }
  }.deleteMedium
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaList"].prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    item() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaList"].prototype, "MediaList", "item", arguments);
    }
  }.item
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaList"].prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaList"].prototype, "MediaList", "toString", arguments);
    }
  }.toString
});
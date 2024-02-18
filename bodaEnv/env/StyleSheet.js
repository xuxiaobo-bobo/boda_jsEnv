// StyleSheet对象

bodaEnv.memory.globlProtoObj["StyleSheet"] = function StyleSheet() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('StyleSheet 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["StyleSheet"], "StyleSheet");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StyleSheet"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StyleSheet"].prototype, "StyleSheet", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StyleSheet"].prototype, "href", {
  configurable: true,
  enumerable: true,
  get: {
    href() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StyleSheet"].prototype, "StyleSheet", "href_get", arguments);
    }
  }.href,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StyleSheet"].prototype, "ownerNode", {
  configurable: true,
  enumerable: true,
  get: {
    ownerNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StyleSheet"].prototype, "StyleSheet", "ownerNode_get", arguments);
    }
  }.ownerNode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StyleSheet"].prototype, "parentStyleSheet", {
  configurable: true,
  enumerable: true,
  get: {
    parentStyleSheet() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StyleSheet"].prototype, "StyleSheet", "parentStyleSheet_get", arguments);
    }
  }.parentStyleSheet,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StyleSheet"].prototype, "title", {
  configurable: true,
  enumerable: true,
  get: {
    title() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StyleSheet"].prototype, "StyleSheet", "title_get", arguments);
    }
  }.title,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StyleSheet"].prototype, "media", {
  configurable: true,
  enumerable: true,
  get: {
    media() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StyleSheet"].prototype, "StyleSheet", "media_get", arguments);
    }
  }.media,
  set: {
    media() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StyleSheet"].prototype, "StyleSheet", "media_set", arguments);
    }
  }.media
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StyleSheet"].prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: {
    disabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StyleSheet"].prototype, "StyleSheet", "disabled_get", arguments);
    }
  }.disabled,
  set: {
    disabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StyleSheet"].prototype, "StyleSheet", "disabled_set", arguments);
    }
  }.disabled
});
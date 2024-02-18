// CharacterData对象

bodaEnv.memory.globlProtoObj["CharacterData"] = function CharacterData() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CharacterData 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CharacterData"], "CharacterData");
bodaEnv.memory.globlProtoObj["CharacterData"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Node"].prototype;
bodaEnv.memory.globlProtoObj["CharacterData"].__proto__ = bodaEnv.memory.globlProtoObj["Node"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "data", {
  configurable: true,
  enumerable: true,
  get: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "CharacterData", "data_get", arguments);
    }
  }.data,
  set: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "CharacterData", "data_set", arguments);
    }
  }.data
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "CharacterData", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "previousElementSibling", {
  configurable: true,
  enumerable: true,
  get: {
    previousElementSibling() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "CharacterData", "previousElementSibling_get", arguments);
    }
  }.previousElementSibling,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "nextElementSibling", {
  configurable: true,
  enumerable: true,
  get: {
    nextElementSibling() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "CharacterData", "nextElementSibling_get", arguments);
    }
  }.nextElementSibling,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "after", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    after() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "CharacterData", "after", arguments);
    }
  }.after
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "appendData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    appendData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "CharacterData", "appendData", arguments);
    }
  }.appendData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "before", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    before() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "CharacterData", "before", arguments);
    }
  }.before
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "deleteData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "CharacterData", "deleteData", arguments);
    }
  }.deleteData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "insertData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "CharacterData", "insertData", arguments);
    }
  }.insertData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    remove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "CharacterData", "remove", arguments);
    }
  }.remove
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "replaceData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    replaceData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "CharacterData", "replaceData", arguments);
    }
  }.replaceData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "replaceWith", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    replaceWith() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "CharacterData", "replaceWith", arguments);
    }
  }.replaceWith
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "substringData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    substringData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CharacterData"].prototype, "CharacterData", "substringData", arguments);
    }
  }.substringData
});
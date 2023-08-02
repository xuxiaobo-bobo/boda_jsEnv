// CharacterData对象

CharacterData = function CharacterData() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CharacterData)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CharacterData 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CharacterData, "CharacterData");
CharacterData.prototype.__proto__ = Node.prototype;
CharacterData.__proto__ = Node;
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "data_get", arguments);
  },
  set: function data() {
    return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "data_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "previousElementSibling", {
  configurable: true,
  enumerable: true,
  get: function previousElementSibling() {
    return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "previousElementSibling_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "nextElementSibling", {
  configurable: true,
  enumerable: true,
  get: function nextElementSibling() {
    return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "nextElementSibling_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "after", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function after() {
    return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "after", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "appendData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendData() {
    return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "appendData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "before", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function before() {
    return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "before", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "deleteData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteData() {
    return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "deleteData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "insertData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertData() {
    return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "insertData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "remove", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "replaceData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceData() {
    return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "replaceData", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "replaceWith", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceWith() {
    return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "replaceWith", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CharacterData.prototype, "substringData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function substringData() {
    return bodavm.toolsFunc.dispatch(this, CharacterData.prototype, "CharacterData", "substringData", arguments);
  }
});
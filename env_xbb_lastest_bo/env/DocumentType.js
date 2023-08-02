// DocumentType对象

DocumentType = function DocumentType() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof DocumentType)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DocumentType 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DocumentType, "DocumentType");
DocumentType.prototype.__proto__ = Node.prototype;
DocumentType.__proto__ = Node;
bodavm.toolsFunc.defineProperty(DocumentType.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "name_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DocumentType.prototype, "publicId", {
  configurable: true,
  enumerable: true,
  get: function publicId() {
    return bodavm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "publicId_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DocumentType.prototype, "systemId", {
  configurable: true,
  enumerable: true,
  get: function systemId() {
    return bodavm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "systemId_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DocumentType.prototype, "after", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function after() {
    return bodavm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "after", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DocumentType.prototype, "before", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function before() {
    return bodavm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "before", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DocumentType.prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "remove", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DocumentType.prototype, "replaceWith", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceWith() {
    return bodavm.toolsFunc.dispatch(this, DocumentType.prototype, "DocumentType", "replaceWith", arguments);
  }
});
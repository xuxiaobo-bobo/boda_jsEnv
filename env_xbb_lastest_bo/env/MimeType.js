// MimeType对象

MimeType = function MimeType() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MimeType)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MimeType 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MimeType, "MimeType");
bodavm.toolsFunc.defineProperty(MimeType.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, MimeType.prototype, "MimeType", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MimeType.prototype, "suffixes", {
  configurable: true,
  enumerable: true,
  get: function suffixes() {
    return bodavm.toolsFunc.dispatch(this, MimeType.prototype, "MimeType", "suffixes_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MimeType.prototype, "description", {
  configurable: true,
  enumerable: true,
  get: function description() {
    return bodavm.toolsFunc.dispatch(this, MimeType.prototype, "MimeType", "description_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MimeType.prototype, "enabledPlugin", {
  configurable: true,
  enumerable: true,
  get: function enabledPlugin() {
    return bodavm.toolsFunc.dispatch(this, MimeType.prototype, "MimeType", "enabledPlugin_get", arguments);
  },
  set: undefined
});
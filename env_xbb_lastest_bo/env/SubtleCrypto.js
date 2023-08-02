// SubtleCrypto对象

SubtleCrypto = function SubtleCrypto() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SubtleCrypto)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SubtleCrypto 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SubtleCrypto, "SubtleCrypto");
bodavm.toolsFunc.defineProperty(SubtleCrypto.prototype, "decrypt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decrypt() {
    return bodavm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCrypto", "decrypt", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SubtleCrypto.prototype, "deriveBits", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deriveBits() {
    return bodavm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCrypto", "deriveBits", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SubtleCrypto.prototype, "deriveKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deriveKey() {
    return bodavm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCrypto", "deriveKey", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SubtleCrypto.prototype, "digest", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function digest() {
    return bodavm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCrypto", "digest", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SubtleCrypto.prototype, "encrypt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function encrypt() {
    return bodavm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCrypto", "encrypt", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SubtleCrypto.prototype, "exportKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function exportKey() {
    return bodavm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCrypto", "exportKey", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SubtleCrypto.prototype, "generateKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function generateKey() {
    return bodavm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCrypto", "generateKey", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SubtleCrypto.prototype, "importKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function importKey() {
    return bodavm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCrypto", "importKey", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SubtleCrypto.prototype, "sign", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function sign() {
    return bodavm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCrypto", "sign", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SubtleCrypto.prototype, "unwrapKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unwrapKey() {
    return bodavm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCrypto", "unwrapKey", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SubtleCrypto.prototype, "verify", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function verify() {
    return bodavm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCrypto", "verify", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SubtleCrypto.prototype, "wrapKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function wrapKey() {
    return bodavm.toolsFunc.dispatch(this, SubtleCrypto.prototype, "SubtleCrypto", "wrapKey", arguments);
  }
});
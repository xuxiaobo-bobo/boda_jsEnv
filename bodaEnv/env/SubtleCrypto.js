// SubtleCrypto对象

bodaEnv.memory.globlProtoObj["SubtleCrypto"] = function SubtleCrypto() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SubtleCrypto 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SubtleCrypto"], "SubtleCrypto");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "decrypt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    decrypt() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "SubtleCrypto", "decrypt", arguments);
    }
  }.decrypt
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "deriveBits", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deriveBits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "SubtleCrypto", "deriveBits", arguments);
    }
  }.deriveBits
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "deriveKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deriveKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "SubtleCrypto", "deriveKey", arguments);
    }
  }.deriveKey
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "digest", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    digest() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "SubtleCrypto", "digest", arguments);
    }
  }.digest
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "encrypt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    encrypt() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "SubtleCrypto", "encrypt", arguments);
    }
  }.encrypt
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "exportKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    exportKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "SubtleCrypto", "exportKey", arguments);
    }
  }.exportKey
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "generateKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    generateKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "SubtleCrypto", "generateKey", arguments);
    }
  }.generateKey
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "importKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    importKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "SubtleCrypto", "importKey", arguments);
    }
  }.importKey
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "sign", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    sign() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "SubtleCrypto", "sign", arguments);
    }
  }.sign
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "unwrapKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    unwrapKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "SubtleCrypto", "unwrapKey", arguments);
    }
  }.unwrapKey
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "verify", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    verify() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "SubtleCrypto", "verify", arguments);
    }
  }.verify
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "wrapKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    wrapKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SubtleCrypto"].prototype, "SubtleCrypto", "wrapKey", arguments);
    }
  }.wrapKey
});
// DOMException对象

bodaEnv.memory.globlProtoObj["DOMException"] = function DOMException() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DOMException 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DOMException"], "DOMException");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "INDEX_SIZE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "DOMSTRING_SIZE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "HIERARCHY_REQUEST_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "WRONG_DOCUMENT_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "INVALID_CHARACTER_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "NO_DATA_ALLOWED_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "NO_MODIFICATION_ALLOWED_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "NOT_FOUND_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "NOT_SUPPORTED_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "INUSE_ATTRIBUTE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "INVALID_STATE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 11
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "SYNTAX_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 12
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "INVALID_MODIFICATION_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 13
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "NAMESPACE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 14
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "INVALID_ACCESS_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 15
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "VALIDATION_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "TYPE_MISMATCH_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 17
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "SECURITY_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 18
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "NETWORK_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 19
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "ABORT_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 20
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "URL_MISMATCH_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 21
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "QUOTA_EXCEEDED_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 22
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "TIMEOUT_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 23
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "INVALID_NODE_TYPE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 24
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"], "DATA_CLONE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 25
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "code", {
  configurable: true,
  enumerable: true,
  get: {
    code() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMException"].prototype, "DOMException", "code_get", arguments);
    }
  }.code,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMException"].prototype, "DOMException", "name_get", arguments);
    }
  }.name,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "message", {
  configurable: true,
  enumerable: true,
  get: {
    message() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMException"].prototype, "DOMException", "message_get", arguments);
    }
  }.message,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "INDEX_SIZE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "DOMSTRING_SIZE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "HIERARCHY_REQUEST_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "WRONG_DOCUMENT_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "INVALID_CHARACTER_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "NO_DATA_ALLOWED_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "NO_MODIFICATION_ALLOWED_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "NOT_FOUND_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "NOT_SUPPORTED_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "INUSE_ATTRIBUTE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "INVALID_STATE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 11
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "SYNTAX_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 12
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "INVALID_MODIFICATION_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 13
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "NAMESPACE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 14
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "INVALID_ACCESS_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 15
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "VALIDATION_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "TYPE_MISMATCH_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 17
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "SECURITY_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 18
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "NETWORK_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 19
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "ABORT_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 20
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "URL_MISMATCH_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 21
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "QUOTA_EXCEEDED_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 22
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "TIMEOUT_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 23
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "INVALID_NODE_TYPE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 24
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMException"].prototype, "DATA_CLONE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 25
});
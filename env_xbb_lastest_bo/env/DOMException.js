// DOMException对象

DOMException = function DOMException() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DOMException 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DOMException, "DOMException");
bodavm.toolsFunc.defineProperty(DOMException, "INDEX_SIZE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(DOMException, "DOMSTRING_SIZE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(DOMException, "HIERARCHY_REQUEST_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(DOMException, "WRONG_DOCUMENT_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(DOMException, "INVALID_CHARACTER_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(DOMException, "NO_DATA_ALLOWED_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(DOMException, "NO_MODIFICATION_ALLOWED_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodavm.toolsFunc.defineProperty(DOMException, "NOT_FOUND_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(DOMException, "NOT_SUPPORTED_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodavm.toolsFunc.defineProperty(DOMException, "INUSE_ATTRIBUTE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodavm.toolsFunc.defineProperty(DOMException, "INVALID_STATE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 11
});
bodavm.toolsFunc.defineProperty(DOMException, "SYNTAX_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 12
});
bodavm.toolsFunc.defineProperty(DOMException, "INVALID_MODIFICATION_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 13
});
bodavm.toolsFunc.defineProperty(DOMException, "NAMESPACE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 14
});
bodavm.toolsFunc.defineProperty(DOMException, "INVALID_ACCESS_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 15
});
bodavm.toolsFunc.defineProperty(DOMException, "VALIDATION_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16
});
bodavm.toolsFunc.defineProperty(DOMException, "TYPE_MISMATCH_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 17
});
bodavm.toolsFunc.defineProperty(DOMException, "SECURITY_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 18
});
bodavm.toolsFunc.defineProperty(DOMException, "NETWORK_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 19
});
bodavm.toolsFunc.defineProperty(DOMException, "ABORT_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 20
});
bodavm.toolsFunc.defineProperty(DOMException, "URL_MISMATCH_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 21
});
bodavm.toolsFunc.defineProperty(DOMException, "QUOTA_EXCEEDED_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 22
});
bodavm.toolsFunc.defineProperty(DOMException, "TIMEOUT_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 23
});
bodavm.toolsFunc.defineProperty(DOMException, "INVALID_NODE_TYPE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 24
});
bodavm.toolsFunc.defineProperty(DOMException, "DATA_CLONE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 25
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "code", {
  configurable: true,
  enumerable: true,
  get: function code() {
    return bodavm.toolsFunc.dispatch(this, DOMException.prototype, "DOMException", "code_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, DOMException.prototype, "DOMException", "name_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "message", {
  configurable: true,
  enumerable: true,
  get: function message() {
    return bodavm.toolsFunc.dispatch(this, DOMException.prototype, "DOMException", "message_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "INDEX_SIZE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "DOMSTRING_SIZE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "HIERARCHY_REQUEST_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "WRONG_DOCUMENT_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "INVALID_CHARACTER_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "NO_DATA_ALLOWED_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "NO_MODIFICATION_ALLOWED_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "NOT_FOUND_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "NOT_SUPPORTED_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "INUSE_ATTRIBUTE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "INVALID_STATE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 11
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "SYNTAX_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 12
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "INVALID_MODIFICATION_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 13
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "NAMESPACE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 14
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "INVALID_ACCESS_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 15
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "VALIDATION_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "TYPE_MISMATCH_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 17
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "SECURITY_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 18
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "NETWORK_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 19
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "ABORT_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 20
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "URL_MISMATCH_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 21
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "QUOTA_EXCEEDED_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 22
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "TIMEOUT_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 23
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "INVALID_NODE_TYPE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 24
});
bodavm.toolsFunc.defineProperty(DOMException.prototype, "DATA_CLONE_ERR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 25
});
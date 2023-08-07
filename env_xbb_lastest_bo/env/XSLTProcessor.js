// XSLTProcessor对象

XSLTProcessor = function XSLTProcessor() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XSLTProcessor 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XSLTProcessor, "XSLTProcessor");
bodavm.toolsFunc.defineProperty(XSLTProcessor.prototype, "clearParameters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearParameters() {
    return bodavm.toolsFunc.dispatch(this, XSLTProcessor.prototype, "XSLTProcessor", "clearParameters", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XSLTProcessor.prototype, "getParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getParameter() {
    return bodavm.toolsFunc.dispatch(this, XSLTProcessor.prototype, "XSLTProcessor", "getParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XSLTProcessor.prototype, "importStylesheet", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function importStylesheet() {
    return bodavm.toolsFunc.dispatch(this, XSLTProcessor.prototype, "XSLTProcessor", "importStylesheet", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XSLTProcessor.prototype, "removeParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeParameter() {
    return bodavm.toolsFunc.dispatch(this, XSLTProcessor.prototype, "XSLTProcessor", "removeParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XSLTProcessor.prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, XSLTProcessor.prototype, "XSLTProcessor", "reset", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XSLTProcessor.prototype, "setParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setParameter() {
    return bodavm.toolsFunc.dispatch(this, XSLTProcessor.prototype, "XSLTProcessor", "setParameter", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XSLTProcessor.prototype, "transformToDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transformToDocument() {
    return bodavm.toolsFunc.dispatch(this, XSLTProcessor.prototype, "XSLTProcessor", "transformToDocument", arguments);
  }
});
bodavm.toolsFunc.defineProperty(XSLTProcessor.prototype, "transformToFragment", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transformToFragment() {
    return bodavm.toolsFunc.dispatch(this, XSLTProcessor.prototype, "XSLTProcessor", "transformToFragment", arguments);
  }
});
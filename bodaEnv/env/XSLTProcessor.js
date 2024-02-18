// XSLTProcessor对象

bodaEnv.memory.globlProtoObj["XSLTProcessor"] = function XSLTProcessor() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XSLTProcessor 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XSLTProcessor"], "XSLTProcessor");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XSLTProcessor"].prototype, "clearParameters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearParameters() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XSLTProcessor"].prototype, "XSLTProcessor", "clearParameters", arguments);
    }
  }.clearParameters
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XSLTProcessor"].prototype, "getParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XSLTProcessor"].prototype, "XSLTProcessor", "getParameter", arguments);
    }
  }.getParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XSLTProcessor"].prototype, "importStylesheet", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    importStylesheet() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XSLTProcessor"].prototype, "XSLTProcessor", "importStylesheet", arguments);
    }
  }.importStylesheet
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XSLTProcessor"].prototype, "removeParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XSLTProcessor"].prototype, "XSLTProcessor", "removeParameter", arguments);
    }
  }.removeParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XSLTProcessor"].prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XSLTProcessor"].prototype, "XSLTProcessor", "reset", arguments);
    }
  }.reset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XSLTProcessor"].prototype, "setParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XSLTProcessor"].prototype, "XSLTProcessor", "setParameter", arguments);
    }
  }.setParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XSLTProcessor"].prototype, "transformToDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    transformToDocument() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XSLTProcessor"].prototype, "XSLTProcessor", "transformToDocument", arguments);
    }
  }.transformToDocument
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XSLTProcessor"].prototype, "transformToFragment", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    transformToFragment() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XSLTProcessor"].prototype, "XSLTProcessor", "transformToFragment", arguments);
    }
  }.transformToFragment
});
// DOMImplementation对象

bodaEnv.memory.globlProtoObj["DOMImplementation"] = function DOMImplementation() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DOMImplementation 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DOMImplementation"], "DOMImplementation");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMImplementation"].prototype, "createDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createDocument() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMImplementation"].prototype, "DOMImplementation", "createDocument", arguments);
    }
  }.createDocument
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMImplementation"].prototype, "createDocumentType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createDocumentType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMImplementation"].prototype, "DOMImplementation", "createDocumentType", arguments);
    }
  }.createDocumentType
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMImplementation"].prototype, "createHTMLDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createHTMLDocument() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMImplementation"].prototype, "DOMImplementation", "createHTMLDocument", arguments);
    }
  }.createHTMLDocument
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMImplementation"].prototype, "hasFeature", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    hasFeature() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMImplementation"].prototype, "DOMImplementation", "hasFeature", arguments);
    }
  }.hasFeature
});
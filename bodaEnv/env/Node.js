// Node对象

bodaEnv.memory.globlProtoObj["Node"] = function Node() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Node 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Node"], "Node");
bodaEnv.memory.globlProtoObj["Node"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["Node"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"], "ELEMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"], "ATTRIBUTE_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"], "TEXT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"], "CDATA_SECTION_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"], "ENTITY_REFERENCE_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"], "ENTITY_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"], "PROCESSING_INSTRUCTION_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"], "COMMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"], "DOCUMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"], "DOCUMENT_TYPE_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"], "DOCUMENT_FRAGMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 11
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"], "NOTATION_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 12
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"], "DOCUMENT_POSITION_DISCONNECTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"], "DOCUMENT_POSITION_PRECEDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"], "DOCUMENT_POSITION_FOLLOWING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"], "DOCUMENT_POSITION_CONTAINS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"], "DOCUMENT_POSITION_CONTAINED_BY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"], "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "nodeType", {
  configurable: true,
  enumerable: true,
  get: {
    nodeType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "nodeType_get", arguments);
    }
  }.nodeType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "nodeName", {
  configurable: true,
  enumerable: true,
  get: {
    nodeName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "nodeName_get", arguments);
    }
  }.nodeName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "baseURI", {
  configurable: true,
  enumerable: true,
  get: {
    baseURI() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "baseURI_get", arguments);
    }
  }.baseURI,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "isConnected", {
  configurable: true,
  enumerable: true,
  get: {
    isConnected() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "isConnected_get", arguments);
    }
  }.isConnected,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "ownerDocument", {
  configurable: true,
  enumerable: true,
  get: {
    ownerDocument() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "ownerDocument_get", arguments);
    }
  }.ownerDocument,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "parentNode", {
  configurable: true,
  enumerable: true,
  get: {
    parentNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "parentNode_get", arguments);
    }
  }.parentNode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "parentElement", {
  configurable: true,
  enumerable: true,
  get: {
    parentElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "parentElement_get", arguments);
    }
  }.parentElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "childNodes", {
  configurable: true,
  enumerable: true,
  get: {
    childNodes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "childNodes_get", arguments);
    }
  }.childNodes,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "firstChild", {
  configurable: true,
  enumerable: true,
  get: {
    firstChild() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "firstChild_get", arguments);
    }
  }.firstChild,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "lastChild", {
  configurable: true,
  enumerable: true,
  get: {
    lastChild() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "lastChild_get", arguments);
    }
  }.lastChild,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "previousSibling", {
  configurable: true,
  enumerable: true,
  get: {
    previousSibling() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "previousSibling_get", arguments);
    }
  }.previousSibling,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "nextSibling", {
  configurable: true,
  enumerable: true,
  get: {
    nextSibling() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "nextSibling_get", arguments);
    }
  }.nextSibling,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "nodeValue", {
  configurable: true,
  enumerable: true,
  get: {
    nodeValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "nodeValue_get", arguments);
    }
  }.nodeValue,
  set: {
    nodeValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "nodeValue_set", arguments);
    }
  }.nodeValue
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "textContent", {
  configurable: true,
  enumerable: true,
  get: {
    textContent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "textContent_get", arguments);
    }
  }.textContent,
  set: {
    textContent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "textContent_set", arguments);
    }
  }.textContent
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "ELEMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "ATTRIBUTE_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "TEXT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "CDATA_SECTION_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "ENTITY_REFERENCE_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "ENTITY_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "PROCESSING_INSTRUCTION_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "COMMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "DOCUMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "DOCUMENT_TYPE_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "DOCUMENT_FRAGMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 11
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "NOTATION_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 12
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "DOCUMENT_POSITION_DISCONNECTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "DOCUMENT_POSITION_PRECEDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "DOCUMENT_POSITION_FOLLOWING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "DOCUMENT_POSITION_CONTAINS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "DOCUMENT_POSITION_CONTAINED_BY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "appendChild", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    appendChild() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "appendChild", arguments);
    }
  }.appendChild
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "cloneNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cloneNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "cloneNode", arguments);
    }
  }.cloneNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "compareDocumentPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    compareDocumentPosition() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "compareDocumentPosition", arguments);
    }
  }.compareDocumentPosition
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "contains", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    contains() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "contains", arguments);
    }
  }.contains
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "getRootNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getRootNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "getRootNode", arguments);
    }
  }.getRootNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "hasChildNodes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    hasChildNodes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "hasChildNodes", arguments);
    }
  }.hasChildNodes
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "insertBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertBefore() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "insertBefore", arguments);
    }
  }.insertBefore
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "isDefaultNamespace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isDefaultNamespace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "isDefaultNamespace", arguments);
    }
  }.isDefaultNamespace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "isEqualNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isEqualNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "isEqualNode", arguments);
    }
  }.isEqualNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "isSameNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isSameNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "isSameNode", arguments);
    }
  }.isSameNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "lookupNamespaceURI", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    lookupNamespaceURI() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "lookupNamespaceURI", arguments);
    }
  }.lookupNamespaceURI
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "lookupPrefix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    lookupPrefix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "lookupPrefix", arguments);
    }
  }.lookupPrefix
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "normalize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    normalize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "normalize", arguments);
    }
  }.normalize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "removeChild", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeChild() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "removeChild", arguments);
    }
  }.removeChild
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Node"].prototype, "replaceChild", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    replaceChild() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Node"].prototype, "Node", "replaceChild", arguments);
    }
  }.replaceChild
});
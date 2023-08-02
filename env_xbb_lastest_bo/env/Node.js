// Node对象

Node = function Node() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Node)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Node 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Node, "Node");
Node.prototype.__proto__ = EventTarget.prototype;
Node.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(Node, "ELEMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(Node, "ATTRIBUTE_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(Node, "TEXT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(Node, "CDATA_SECTION_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(Node, "ENTITY_REFERENCE_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(Node, "ENTITY_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(Node, "PROCESSING_INSTRUCTION_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodavm.toolsFunc.defineProperty(Node, "COMMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(Node, "DOCUMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodavm.toolsFunc.defineProperty(Node, "DOCUMENT_TYPE_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodavm.toolsFunc.defineProperty(Node, "DOCUMENT_FRAGMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 11
});
bodavm.toolsFunc.defineProperty(Node, "NOTATION_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 12
});
bodavm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_DISCONNECTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_PRECEDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_FOLLOWING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_CONTAINS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_CONTAINED_BY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16
});
bodavm.toolsFunc.defineProperty(Node, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32
});
bodavm.toolsFunc.defineProperty(Node.prototype, "nodeType", {
  configurable: true,
  enumerable: true,
  get: function nodeType() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "nodeType_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Node.prototype, "nodeName", {
  configurable: true,
  enumerable: true,
  get: function nodeName() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "nodeName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Node.prototype, "baseURI", {
  configurable: true,
  enumerable: true,
  get: function baseURI() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "baseURI_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Node.prototype, "isConnected", {
  configurable: true,
  enumerable: true,
  get: function isConnected() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "isConnected_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Node.prototype, "ownerDocument", {
  configurable: true,
  enumerable: true,
  get: function ownerDocument() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "ownerDocument_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Node.prototype, "parentNode", {
  configurable: true,
  enumerable: true,
  get: function parentNode() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "parentNode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Node.prototype, "parentElement", {
  configurable: true,
  enumerable: true,
  get: function parentElement() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "parentElement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Node.prototype, "childNodes", {
  configurable: true,
  enumerable: true,
  get: function childNodes() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "childNodes_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Node.prototype, "firstChild", {
  configurable: true,
  enumerable: true,
  get: function firstChild() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "firstChild_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Node.prototype, "lastChild", {
  configurable: true,
  enumerable: true,
  get: function lastChild() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "lastChild_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Node.prototype, "previousSibling", {
  configurable: true,
  enumerable: true,
  get: function previousSibling() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "previousSibling_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Node.prototype, "nextSibling", {
  configurable: true,
  enumerable: true,
  get: function nextSibling() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "nextSibling_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Node.prototype, "nodeValue", {
  configurable: true,
  enumerable: true,
  get: function nodeValue() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "nodeValue_get", arguments);
  },
  set: function nodeValue() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "nodeValue_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Node.prototype, "textContent", {
  configurable: true,
  enumerable: true,
  get: function textContent() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "textContent_get", arguments);
  },
  set: function textContent() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "textContent_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Node.prototype, "ELEMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(Node.prototype, "ATTRIBUTE_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(Node.prototype, "TEXT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(Node.prototype, "CDATA_SECTION_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(Node.prototype, "ENTITY_REFERENCE_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodavm.toolsFunc.defineProperty(Node.prototype, "ENTITY_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodavm.toolsFunc.defineProperty(Node.prototype, "PROCESSING_INSTRUCTION_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7
});
bodavm.toolsFunc.defineProperty(Node.prototype, "COMMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9
});
bodavm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_TYPE_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10
});
bodavm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_FRAGMENT_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 11
});
bodavm.toolsFunc.defineProperty(Node.prototype, "NOTATION_NODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 12
});
bodavm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_DISCONNECTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_PRECEDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_FOLLOWING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_CONTAINS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_CONTAINED_BY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16
});
bodavm.toolsFunc.defineProperty(Node.prototype, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32
});
bodavm.toolsFunc.defineProperty(Node.prototype, "appendChild", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendChild() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "appendChild", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Node.prototype, "cloneNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cloneNode() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "cloneNode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Node.prototype, "compareDocumentPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function compareDocumentPosition() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "compareDocumentPosition", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Node.prototype, "contains", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function contains() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "contains", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Node.prototype, "getRootNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRootNode() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "getRootNode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Node.prototype, "hasChildNodes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hasChildNodes() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "hasChildNodes", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Node.prototype, "insertBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertBefore() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "insertBefore", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Node.prototype, "isDefaultNamespace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isDefaultNamespace() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "isDefaultNamespace", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Node.prototype, "isEqualNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isEqualNode() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "isEqualNode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Node.prototype, "isSameNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isSameNode() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "isSameNode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Node.prototype, "lookupNamespaceURI", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function lookupNamespaceURI() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "lookupNamespaceURI", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Node.prototype, "lookupPrefix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function lookupPrefix() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "lookupPrefix", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Node.prototype, "normalize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function normalize() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "normalize", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Node.prototype, "removeChild", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeChild() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "removeChild", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Node.prototype, "replaceChild", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceChild() {
    return bodavm.toolsFunc.dispatch(this, Node.prototype, "Node", "replaceChild", arguments);
  }
});
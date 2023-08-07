// NodeFilter对象
NodeFilter = {
  NodeFilter(a) {
    console.log_copy(`NodeFilter 使用-- >`, a);
  }
}.NodeFilter;
bodavm.toolsFunc.safefunction(NodeFilter, "NodeFilter");
bodavm.toolsFunc.defineProperty(NodeFilter, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(NodeFilter, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'NodeFilter'
});
bodavm.toolsFunc.defineProperty(NodeFilter, "FILTER_ACCEPT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(NodeFilter, "FILTER_REJECT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(NodeFilter, "FILTER_SKIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(NodeFilter, "SHOW_ALL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4294967295
});
bodavm.toolsFunc.defineProperty(NodeFilter, "SHOW_ELEMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(NodeFilter, "SHOW_ATTRIBUTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(NodeFilter, "SHOW_TEXT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(NodeFilter, "SHOW_CDATA_SECTION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 8
});
bodavm.toolsFunc.defineProperty(NodeFilter, "SHOW_ENTITY_REFERENCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16
});
bodavm.toolsFunc.defineProperty(NodeFilter, "SHOW_ENTITY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32
});
bodavm.toolsFunc.defineProperty(NodeFilter, "SHOW_PROCESSING_INSTRUCTION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 64
});
bodavm.toolsFunc.defineProperty(NodeFilter, "SHOW_COMMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 128
});
bodavm.toolsFunc.defineProperty(NodeFilter, "SHOW_DOCUMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 256
});
bodavm.toolsFunc.defineProperty(NodeFilter, "SHOW_DOCUMENT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 512
});
bodavm.toolsFunc.defineProperty(NodeFilter, "SHOW_DOCUMENT_FRAGMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1024
});
bodavm.toolsFunc.defineProperty(NodeFilter, "SHOW_NOTATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2048
});
// HTMLDialogElement对象

bodaEnv.memory.globlProtoObj["HTMLDialogElement"] = function HTMLDialogElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLDialogElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLDialogElement"], "HTMLDialogElement");
bodaEnv.memory.globlProtoObj["HTMLDialogElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLDialogElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLDialogElement"].prototype, "open", {
  configurable: true,
  enumerable: true,
  get: {
    open() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLDialogElement"].prototype, "HTMLDialogElement", "open_get", arguments);
    }
  }.open,
  set: {
    open() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLDialogElement"].prototype, "HTMLDialogElement", "open_set", arguments);
    }
  }.open
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLDialogElement"].prototype, "returnValue", {
  configurable: true,
  enumerable: true,
  get: {
    returnValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLDialogElement"].prototype, "HTMLDialogElement", "returnValue_get", arguments);
    }
  }.returnValue,
  set: {
    returnValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLDialogElement"].prototype, "HTMLDialogElement", "returnValue_set", arguments);
    }
  }.returnValue
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLDialogElement"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLDialogElement"].prototype, "HTMLDialogElement", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLDialogElement"].prototype, "show", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    show() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLDialogElement"].prototype, "HTMLDialogElement", "show", arguments);
    }
  }.show
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLDialogElement"].prototype, "showModal", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    showModal() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLDialogElement"].prototype, "HTMLDialogElement", "showModal", arguments);
    }
  }.showModal
});
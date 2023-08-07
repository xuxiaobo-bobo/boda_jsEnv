// Option对象

Option = function Option() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Option 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Option, "Option");
Option.prototype.__proto__ = HTMLElement.prototype;
bodavm.toolsFunc.defineProperty(Option.prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "disabled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Option.prototype, "form", {
  configurable: true,
  enumerable: true,
  get: function form() {
    return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "form_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Option.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "label_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Option.prototype, "defaultSelected", {
  configurable: true,
  enumerable: true,
  get: function defaultSelected() {
    return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "defaultSelected_get", arguments);
  },
  set: function defaultSelected() {
    return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "defaultSelected_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Option.prototype, "selected", {
  configurable: true,
  enumerable: true,
  get: function selected() {
    return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "selected_get", arguments);
  },
  set: function selected() {
    return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "selected_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Option.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "value_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Option.prototype, "text", {
  configurable: true,
  enumerable: true,
  get: function text() {
    return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "text_get", arguments);
  },
  set: function text() {
    return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "text_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Option.prototype, "index", {
  configurable: true,
  enumerable: true,
  get: function index() {
    return bodavm.toolsFunc.dispatch(this, Option.prototype, "Option", "index_get", arguments);
  },
  set: undefined
});
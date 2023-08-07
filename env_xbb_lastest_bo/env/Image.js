// Image对象
Image = function Image() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    console.log_copy('Image 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  let resEle = boda$("<img>").get()[0];
  let newNode = bodavm.toolsFunc.setProto(resEle.name);
  bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, resEle);
  return newNode;
};
bodavm.toolsFunc.safeProto(Image, "Image");
Image.prototype = HTMLImageElement.prototype;
Image.prototype.__proto__ = HTMLElement.prototype;
// Image对象
bodavm.toolsFunc.defineProperty(Image.prototype, "alt", {
  configurable: true,
  enumerable: true,
  get: function alt() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "alt_get", arguments);
  },
  set: function alt() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "alt_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "src_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "srcset", {
  configurable: true,
  enumerable: true,
  get: function srcset() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "srcset_get", arguments);
  },
  set: function srcset() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "srcset_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "sizes", {
  configurable: true,
  enumerable: true,
  get: function sizes() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "sizes_get", arguments);
  },
  set: function sizes() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "sizes_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "crossOrigin", {
  configurable: true,
  enumerable: true,
  get: function crossOrigin() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "crossOrigin_get", arguments);
  },
  set: function crossOrigin() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "crossOrigin_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "useMap", {
  configurable: true,
  enumerable: true,
  get: function useMap() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "useMap_get", arguments);
  },
  set: function useMap() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "useMap_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "isMap", {
  configurable: true,
  enumerable: true,
  get: function isMap() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "isMap_get", arguments);
  },
  set: function isMap() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "isMap_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "width_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "height_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "naturalWidth", {
  configurable: true,
  enumerable: true,
  get: function naturalWidth() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "naturalWidth_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Image.prototype, "naturalHeight", {
  configurable: true,
  enumerable: true,
  get: function naturalHeight() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "naturalHeight_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Image.prototype, "complete", {
  configurable: true,
  enumerable: true,
  get: function complete() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "complete_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Image.prototype, "currentSrc", {
  configurable: true,
  enumerable: true,
  get: function currentSrc() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "currentSrc_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Image.prototype, "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "referrerPolicy_get", arguments);
  },
  set: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "referrerPolicy_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "decoding", {
  configurable: true,
  enumerable: true,
  get: function decoding() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "decoding_get", arguments);
  },
  set: function decoding() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "decoding_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "lowsrc", {
  configurable: true,
  enumerable: true,
  get: function lowsrc() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "lowsrc_get", arguments);
  },
  set: function lowsrc() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "lowsrc_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "align_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "hspace", {
  configurable: true,
  enumerable: true,
  get: function hspace() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "hspace_get", arguments);
  },
  set: function hspace() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "hspace_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "vspace", {
  configurable: true,
  enumerable: true,
  get: function vspace() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "vspace_get", arguments);
  },
  set: function vspace() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "vspace_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "longDesc", {
  configurable: true,
  enumerable: true,
  get: function longDesc() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "longDesc_get", arguments);
  },
  set: function longDesc() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "longDesc_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "border", {
  configurable: true,
  enumerable: true,
  get: function border() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "border_get", arguments);
  },
  set: function border() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "border_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Image.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Image.prototype, "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decode() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "decode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "fetchPriority", {
  configurable: true,
  enumerable: true,
  get: function fetchPriority() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "fetchPriority_get", arguments);
  },
  set: function fetchPriority() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "fetchPriority_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Image.prototype, "loading", {
  configurable: true,
  enumerable: true,
  get: function loading() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "loading_get", arguments);
  },
  set: function loading() {
    return bodavm.toolsFunc.dispatch(this, Image.prototype, "Image", "loading_set", arguments);
  }
});
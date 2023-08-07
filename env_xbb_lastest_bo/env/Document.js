// Document对象

Document = function Document() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Document 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Document, "Document");
Document.prototype.__proto__ = Node.prototype;
Document.__proto__ = Node;
bodavm.toolsFunc.defineProperty(Document.prototype, "implementation", {
  configurable: true,
  enumerable: true,
  get: function implementation() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "implementation_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "URL", {
  configurable: true,
  enumerable: true,
  get: function URL() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "URL_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "documentURI", {
  configurable: true,
  enumerable: true,
  get: function documentURI() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "documentURI_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "compatMode", {
  configurable: true,
  enumerable: true,
  get: function compatMode() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "compatMode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "characterSet", {
  configurable: true,
  enumerable: true,
  get: function characterSet() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "characterSet_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "charset", {
  configurable: true,
  enumerable: true,
  get: function charset() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "charset_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "inputEncoding", {
  configurable: true,
  enumerable: true,
  get: function inputEncoding() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "inputEncoding_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "contentType", {
  configurable: true,
  enumerable: true,
  get: function contentType() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "contentType_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "doctype", {
  configurable: true,
  enumerable: true,
  get: function doctype() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "doctype_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "documentElement", {
  configurable: true,
  enumerable: true,
  get: function documentElement() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "documentElement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "xmlEncoding", {
  configurable: true,
  enumerable: true,
  get: function xmlEncoding() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "xmlEncoding_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "xmlVersion", {
  configurable: true,
  enumerable: true,
  get: function xmlVersion() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "xmlVersion_get", arguments);
  },
  set: function xmlVersion() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "xmlVersion_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "xmlStandalone", {
  configurable: true,
  enumerable: true,
  get: function xmlStandalone() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "xmlStandalone_get", arguments);
  },
  set: function xmlStandalone() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "xmlStandalone_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "domain", {
  configurable: true,
  enumerable: true,
  get: function domain() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "domain_get", arguments);
  },
  set: function domain() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "domain_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "referrer", {
  configurable: true,
  enumerable: true,
  get: function referrer() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "referrer_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "cookie", {
  configurable: true,
  enumerable: true,
  get: function cookie() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "cookie_get", arguments);
  },
  set: function cookie() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "cookie_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "lastModified", {
  configurable: true,
  enumerable: true,
  get: function lastModified() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "lastModified_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "readyState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "title", {
  configurable: true,
  enumerable: true,
  get: function title() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "title_get", arguments);
  },
  set: function title() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "title_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "dir", {
  configurable: true,
  enumerable: true,
  get: function dir() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "dir_get", arguments);
  },
  set: function dir() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "dir_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "body", {
  configurable: true,
  enumerable: true,
  get: function body() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "body_get", arguments);
  },
  set: function body() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "body_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "head", {
  configurable: true,
  enumerable: true,
  get: function head() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "head_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "images", {
  configurable: true,
  enumerable: true,
  get: function images() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "images_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "embeds", {
  configurable: true,
  enumerable: true,
  get: function embeds() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "embeds_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "plugins", {
  configurable: true,
  enumerable: true,
  get: function plugins() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "plugins_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "links", {
  configurable: true,
  enumerable: true,
  get: function links() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "links_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "forms", {
  configurable: true,
  enumerable: true,
  get: function forms() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "forms_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "scripts", {
  configurable: true,
  enumerable: true,
  get: function scripts() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "scripts_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "currentScript", {
  configurable: true,
  enumerable: true,
  get: function currentScript() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "currentScript_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "defaultView", {
  configurable: true,
  enumerable: true,
  get: function defaultView() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "defaultView_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "designMode", {
  configurable: true,
  enumerable: true,
  get: function designMode() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "designMode_get", arguments);
  },
  set: function designMode() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "designMode_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onreadystatechange", {
  configurable: true,
  enumerable: true,
  get: function onreadystatechange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onreadystatechange_get", arguments);
  },
  set: function onreadystatechange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onreadystatechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "anchors", {
  configurable: true,
  enumerable: true,
  get: function anchors() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "anchors_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "applets", {
  configurable: true,
  enumerable: true,
  get: function applets() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "applets_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "fgColor", {
  configurable: true,
  enumerable: true,
  get: function fgColor() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fgColor_get", arguments);
  },
  set: function fgColor() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fgColor_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "linkColor", {
  configurable: true,
  enumerable: true,
  get: function linkColor() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "linkColor_get", arguments);
  },
  set: function linkColor() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "linkColor_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "vlinkColor", {
  configurable: true,
  enumerable: true,
  get: function vlinkColor() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "vlinkColor_get", arguments);
  },
  set: function vlinkColor() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "vlinkColor_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "alinkColor", {
  configurable: true,
  enumerable: true,
  get: function alinkColor() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "alinkColor_get", arguments);
  },
  set: function alinkColor() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "alinkColor_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "bgColor", {
  configurable: true,
  enumerable: true,
  get: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "bgColor_get", arguments);
  },
  set: function bgColor() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "bgColor_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "all", {
  configurable: true,
  enumerable: true,
  get: function all() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "all_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "scrollingElement", {
  configurable: true,
  enumerable: true,
  get: function scrollingElement() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "scrollingElement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointerlockchange", {
  configurable: true,
  enumerable: true,
  get: function onpointerlockchange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerlockchange_get", arguments);
  },
  set: function onpointerlockchange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerlockchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointerlockerror", {
  configurable: true,
  enumerable: true,
  get: function onpointerlockerror() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerlockerror_get", arguments);
  },
  set: function onpointerlockerror() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerlockerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "hidden", {
  configurable: true,
  enumerable: true,
  get: function hidden() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "hidden_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "visibilityState", {
  configurable: true,
  enumerable: true,
  get: function visibilityState() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "visibilityState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "wasDiscarded", {
  configurable: true,
  enumerable: true,
  get: function wasDiscarded() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "wasDiscarded_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "prerendering", {
  configurable: true,
  enumerable: true,
  get: function prerendering() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "prerendering_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "featurePolicy", {
  configurable: true,
  enumerable: true,
  get: function featurePolicy() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "featurePolicy_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "webkitVisibilityState", {
  configurable: true,
  enumerable: true,
  get: function webkitVisibilityState() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "webkitVisibilityState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "webkitHidden", {
  configurable: true,
  enumerable: true,
  get: function webkitHidden() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "webkitHidden_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onbeforecopy", {
  configurable: true,
  enumerable: true,
  get: function onbeforecopy() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforecopy_get", arguments);
  },
  set: function onbeforecopy() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforecopy_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onbeforecut", {
  configurable: true,
  enumerable: true,
  get: function onbeforecut() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforecut_get", arguments);
  },
  set: function onbeforecut() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforecut_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onbeforepaste", {
  configurable: true,
  enumerable: true,
  get: function onbeforepaste() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforepaste_get", arguments);
  },
  set: function onbeforepaste() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforepaste_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onfreeze", {
  configurable: true,
  enumerable: true,
  get: function onfreeze() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onfreeze_get", arguments);
  },
  set: function onfreeze() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onfreeze_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onprerenderingchange", {
  configurable: true,
  enumerable: true,
  get: function onprerenderingchange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onprerenderingchange_get", arguments);
  },
  set: function onprerenderingchange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onprerenderingchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onresume", {
  configurable: true,
  enumerable: true,
  get: function onresume() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onresume_get", arguments);
  },
  set: function onresume() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onresume_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onsearch", {
  configurable: true,
  enumerable: true,
  get: function onsearch() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onsearch_get", arguments);
  },
  set: function onsearch() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onsearch_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onvisibilitychange", {
  configurable: true,
  enumerable: true,
  get: function onvisibilitychange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onvisibilitychange_get", arguments);
  },
  set: function onvisibilitychange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onvisibilitychange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "fullscreenEnabled", {
  configurable: true,
  enumerable: true,
  get: function fullscreenEnabled() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fullscreenEnabled_get", arguments);
  },
  set: function fullscreenEnabled() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fullscreenEnabled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "fullscreen", {
  configurable: true,
  enumerable: true,
  get: function fullscreen() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fullscreen_get", arguments);
  },
  set: function fullscreen() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fullscreen_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onfullscreenchange", {
  configurable: true,
  enumerable: true,
  get: function onfullscreenchange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onfullscreenchange_get", arguments);
  },
  set: function onfullscreenchange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onfullscreenchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onfullscreenerror", {
  configurable: true,
  enumerable: true,
  get: function onfullscreenerror() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onfullscreenerror_get", arguments);
  },
  set: function onfullscreenerror() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onfullscreenerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "webkitIsFullScreen", {
  configurable: true,
  enumerable: true,
  get: function webkitIsFullScreen() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "webkitIsFullScreen_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "webkitCurrentFullScreenElement", {
  configurable: true,
  enumerable: true,
  get: function webkitCurrentFullScreenElement() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "webkitCurrentFullScreenElement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "webkitFullscreenEnabled", {
  configurable: true,
  enumerable: true,
  get: function webkitFullscreenEnabled() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "webkitFullscreenEnabled_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "webkitFullscreenElement", {
  configurable: true,
  enumerable: true,
  get: function webkitFullscreenElement() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "webkitFullscreenElement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onwebkitfullscreenchange", {
  configurable: true,
  enumerable: true,
  get: function onwebkitfullscreenchange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitfullscreenchange_get", arguments);
  },
  set: function onwebkitfullscreenchange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitfullscreenchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onwebkitfullscreenerror", {
  configurable: true,
  enumerable: true,
  get: function onwebkitfullscreenerror() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitfullscreenerror_get", arguments);
  },
  set: function onwebkitfullscreenerror() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitfullscreenerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "rootElement", {
  configurable: true,
  enumerable: true,
  get: function rootElement() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "rootElement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "pictureInPictureEnabled", {
  configurable: true,
  enumerable: true,
  get: function pictureInPictureEnabled() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "pictureInPictureEnabled_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "pictureInPictureElement", {
  configurable: true,
  enumerable: true,
  get: function pictureInPictureElement() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "pictureInPictureElement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onbeforexrselect", {
  configurable: true,
  enumerable: true,
  get: function onbeforexrselect() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforexrselect_get", arguments);
  },
  set: function onbeforexrselect() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforexrselect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: function onabort() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onabort_get", arguments);
  },
  set: function onabort() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onabort_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onbeforeinput", {
  configurable: true,
  enumerable: true,
  get: function onbeforeinput() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforeinput_get", arguments);
  },
  set: function onbeforeinput() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforeinput_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onblur", {
  configurable: true,
  enumerable: true,
  get: function onblur() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onblur_get", arguments);
  },
  set: function onblur() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onblur_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncancel", {
  configurable: true,
  enumerable: true,
  get: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncancel_get", arguments);
  },
  set: function oncancel() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncancel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncanplay", {
  configurable: true,
  enumerable: true,
  get: function oncanplay() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncanplay_get", arguments);
  },
  set: function oncanplay() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncanplay_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncanplaythrough", {
  configurable: true,
  enumerable: true,
  get: function oncanplaythrough() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncanplaythrough_get", arguments);
  },
  set: function oncanplaythrough() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncanplaythrough_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onclick", {
  configurable: true,
  enumerable: true,
  get: function onclick() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onclick_get", arguments);
  },
  set: function onclick() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onclick_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onclose", {
  configurable: true,
  enumerable: true,
  get: function onclose() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onclose_get", arguments);
  },
  set: function onclose() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onclose_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncontextlost", {
  configurable: true,
  enumerable: true,
  get: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncontextlost_get", arguments);
  },
  set: function oncontextlost() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncontextlost_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncontextmenu", {
  configurable: true,
  enumerable: true,
  get: function oncontextmenu() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncontextmenu_get", arguments);
  },
  set: function oncontextmenu() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncontextmenu_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncontextrestored", {
  configurable: true,
  enumerable: true,
  get: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncontextrestored_get", arguments);
  },
  set: function oncontextrestored() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncontextrestored_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncuechange", {
  configurable: true,
  enumerable: true,
  get: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncuechange_get", arguments);
  },
  set: function oncuechange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncuechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "ondblclick", {
  configurable: true,
  enumerable: true,
  get: function ondblclick() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondblclick_get", arguments);
  },
  set: function ondblclick() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondblclick_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "ondrag", {
  configurable: true,
  enumerable: true,
  get: function ondrag() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondrag_get", arguments);
  },
  set: function ondrag() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondrag_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "ondragend", {
  configurable: true,
  enumerable: true,
  get: function ondragend() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragend_get", arguments);
  },
  set: function ondragend() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "ondragenter", {
  configurable: true,
  enumerable: true,
  get: function ondragenter() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragenter_get", arguments);
  },
  set: function ondragenter() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragenter_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "ondragleave", {
  configurable: true,
  enumerable: true,
  get: function ondragleave() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragleave_get", arguments);
  },
  set: function ondragleave() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragleave_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "ondragover", {
  configurable: true,
  enumerable: true,
  get: function ondragover() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragover_get", arguments);
  },
  set: function ondragover() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragover_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "ondragstart", {
  configurable: true,
  enumerable: true,
  get: function ondragstart() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragstart_get", arguments);
  },
  set: function ondragstart() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondragstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "ondrop", {
  configurable: true,
  enumerable: true,
  get: function ondrop() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondrop_get", arguments);
  },
  set: function ondrop() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondrop_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "ondurationchange", {
  configurable: true,
  enumerable: true,
  get: function ondurationchange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondurationchange_get", arguments);
  },
  set: function ondurationchange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ondurationchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onemptied", {
  configurable: true,
  enumerable: true,
  get: function onemptied() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onemptied_get", arguments);
  },
  set: function onemptied() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onemptied_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onended", {
  configurable: true,
  enumerable: true,
  get: function onended() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onended_get", arguments);
  },
  set: function onended() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onended_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onfocus", {
  configurable: true,
  enumerable: true,
  get: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onfocus_get", arguments);
  },
  set: function onfocus() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onfocus_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onformdata", {
  configurable: true,
  enumerable: true,
  get: function onformdata() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onformdata_get", arguments);
  },
  set: function onformdata() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onformdata_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "oninput", {
  configurable: true,
  enumerable: true,
  get: function oninput() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oninput_get", arguments);
  },
  set: function oninput() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oninput_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "oninvalid", {
  configurable: true,
  enumerable: true,
  get: function oninvalid() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oninvalid_get", arguments);
  },
  set: function oninvalid() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oninvalid_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onkeydown", {
  configurable: true,
  enumerable: true,
  get: function onkeydown() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onkeydown_get", arguments);
  },
  set: function onkeydown() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onkeydown_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onkeypress", {
  configurable: true,
  enumerable: true,
  get: function onkeypress() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onkeypress_get", arguments);
  },
  set: function onkeypress() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onkeypress_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onkeyup", {
  configurable: true,
  enumerable: true,
  get: function onkeyup() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onkeyup_get", arguments);
  },
  set: function onkeyup() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onkeyup_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onload", {
  configurable: true,
  enumerable: true,
  get: function onload() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onload_get", arguments);
  },
  set: function onload() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onload_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onloadeddata", {
  configurable: true,
  enumerable: true,
  get: function onloadeddata() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onloadeddata_get", arguments);
  },
  set: function onloadeddata() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onloadeddata_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onloadedmetadata", {
  configurable: true,
  enumerable: true,
  get: function onloadedmetadata() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onloadedmetadata_get", arguments);
  },
  set: function onloadedmetadata() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onloadedmetadata_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onloadstart", {
  configurable: true,
  enumerable: true,
  get: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onloadstart_get", arguments);
  },
  set: function onloadstart() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onloadstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onmousedown", {
  configurable: true,
  enumerable: true,
  get: function onmousedown() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmousedown_get", arguments);
  },
  set: function onmousedown() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmousedown_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onmouseenter", {
  configurable: true,
  enumerable: true,
  get: function onmouseenter() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseenter_get", arguments);
  },
  set: function onmouseenter() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseenter_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onmouseleave", {
  configurable: true,
  enumerable: true,
  get: function onmouseleave() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseleave_get", arguments);
  },
  set: function onmouseleave() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseleave_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onmousemove", {
  configurable: true,
  enumerable: true,
  get: function onmousemove() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmousemove_get", arguments);
  },
  set: function onmousemove() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmousemove_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onmouseout", {
  configurable: true,
  enumerable: true,
  get: function onmouseout() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseout_get", arguments);
  },
  set: function onmouseout() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseout_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onmouseover", {
  configurable: true,
  enumerable: true,
  get: function onmouseover() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseover_get", arguments);
  },
  set: function onmouseover() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseover_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onmouseup", {
  configurable: true,
  enumerable: true,
  get: function onmouseup() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseup_get", arguments);
  },
  set: function onmouseup() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmouseup_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onmousewheel", {
  configurable: true,
  enumerable: true,
  get: function onmousewheel() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmousewheel_get", arguments);
  },
  set: function onmousewheel() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onmousewheel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpause", {
  configurable: true,
  enumerable: true,
  get: function onpause() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpause_get", arguments);
  },
  set: function onpause() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpause_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onplay", {
  configurable: true,
  enumerable: true,
  get: function onplay() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onplay_get", arguments);
  },
  set: function onplay() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onplay_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onplaying", {
  configurable: true,
  enumerable: true,
  get: function onplaying() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onplaying_get", arguments);
  },
  set: function onplaying() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onplaying_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onprogress", {
  configurable: true,
  enumerable: true,
  get: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onprogress_get", arguments);
  },
  set: function onprogress() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onprogress_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onratechange", {
  configurable: true,
  enumerable: true,
  get: function onratechange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onratechange_get", arguments);
  },
  set: function onratechange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onratechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onreset", {
  configurable: true,
  enumerable: true,
  get: function onreset() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onreset_get", arguments);
  },
  set: function onreset() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onreset_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onresize", {
  configurable: true,
  enumerable: true,
  get: function onresize() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onresize_get", arguments);
  },
  set: function onresize() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onresize_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onscroll", {
  configurable: true,
  enumerable: true,
  get: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onscroll_get", arguments);
  },
  set: function onscroll() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onscroll_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onsecuritypolicyviolation", {
  configurable: true,
  enumerable: true,
  get: function onsecuritypolicyviolation() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onsecuritypolicyviolation_get", arguments);
  },
  set: function onsecuritypolicyviolation() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onsecuritypolicyviolation_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onseeked", {
  configurable: true,
  enumerable: true,
  get: function onseeked() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onseeked_get", arguments);
  },
  set: function onseeked() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onseeked_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onseeking", {
  configurable: true,
  enumerable: true,
  get: function onseeking() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onseeking_get", arguments);
  },
  set: function onseeking() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onseeking_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onselect", {
  configurable: true,
  enumerable: true,
  get: function onselect() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onselect_get", arguments);
  },
  set: function onselect() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onselect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onslotchange", {
  configurable: true,
  enumerable: true,
  get: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onslotchange_get", arguments);
  },
  set: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onslotchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onstalled", {
  configurable: true,
  enumerable: true,
  get: function onstalled() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onstalled_get", arguments);
  },
  set: function onstalled() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onstalled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onsubmit", {
  configurable: true,
  enumerable: true,
  get: function onsubmit() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onsubmit_get", arguments);
  },
  set: function onsubmit() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onsubmit_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onsuspend", {
  configurable: true,
  enumerable: true,
  get: function onsuspend() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onsuspend_get", arguments);
  },
  set: function onsuspend() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onsuspend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "ontimeupdate", {
  configurable: true,
  enumerable: true,
  get: function ontimeupdate() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontimeupdate_get", arguments);
  },
  set: function ontimeupdate() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontimeupdate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "ontoggle", {
  configurable: true,
  enumerable: true,
  get: function ontoggle() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontoggle_get", arguments);
  },
  set: function ontoggle() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontoggle_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onvolumechange", {
  configurable: true,
  enumerable: true,
  get: function onvolumechange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onvolumechange_get", arguments);
  },
  set: function onvolumechange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onvolumechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onwaiting", {
  configurable: true,
  enumerable: true,
  get: function onwaiting() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwaiting_get", arguments);
  },
  set: function onwaiting() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwaiting_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onwebkitanimationend", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationend() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitanimationend_get", arguments);
  },
  set: function onwebkitanimationend() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitanimationend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onwebkitanimationiteration", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitanimationiteration_get", arguments);
  },
  set: function onwebkitanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitanimationiteration_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onwebkitanimationstart", {
  configurable: true,
  enumerable: true,
  get: function onwebkitanimationstart() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitanimationstart_get", arguments);
  },
  set: function onwebkitanimationstart() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkitanimationstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onwebkittransitionend", {
  configurable: true,
  enumerable: true,
  get: function onwebkittransitionend() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkittransitionend_get", arguments);
  },
  set: function onwebkittransitionend() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwebkittransitionend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onwheel", {
  configurable: true,
  enumerable: true,
  get: function onwheel() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwheel_get", arguments);
  },
  set: function onwheel() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onwheel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onauxclick", {
  configurable: true,
  enumerable: true,
  get: function onauxclick() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onauxclick_get", arguments);
  },
  set: function onauxclick() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onauxclick_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "ongotpointercapture", {
  configurable: true,
  enumerable: true,
  get: function ongotpointercapture() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ongotpointercapture_get", arguments);
  },
  set: function ongotpointercapture() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ongotpointercapture_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onlostpointercapture", {
  configurable: true,
  enumerable: true,
  get: function onlostpointercapture() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onlostpointercapture_get", arguments);
  },
  set: function onlostpointercapture() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onlostpointercapture_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointerdown", {
  configurable: true,
  enumerable: true,
  get: function onpointerdown() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerdown_get", arguments);
  },
  set: function onpointerdown() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerdown_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointermove", {
  configurable: true,
  enumerable: true,
  get: function onpointermove() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointermove_get", arguments);
  },
  set: function onpointermove() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointermove_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointerrawupdate", {
  configurable: true,
  enumerable: true,
  get: function onpointerrawupdate() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerrawupdate_get", arguments);
  },
  set: function onpointerrawupdate() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerrawupdate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointerup", {
  configurable: true,
  enumerable: true,
  get: function onpointerup() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerup_get", arguments);
  },
  set: function onpointerup() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerup_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointercancel", {
  configurable: true,
  enumerable: true,
  get: function onpointercancel() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointercancel_get", arguments);
  },
  set: function onpointercancel() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointercancel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointerover", {
  configurable: true,
  enumerable: true,
  get: function onpointerover() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerover_get", arguments);
  },
  set: function onpointerover() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerover_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointerout", {
  configurable: true,
  enumerable: true,
  get: function onpointerout() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerout_get", arguments);
  },
  set: function onpointerout() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerout_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointerenter", {
  configurable: true,
  enumerable: true,
  get: function onpointerenter() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerenter_get", arguments);
  },
  set: function onpointerenter() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerenter_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpointerleave", {
  configurable: true,
  enumerable: true,
  get: function onpointerleave() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerleave_get", arguments);
  },
  set: function onpointerleave() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpointerleave_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onselectstart", {
  configurable: true,
  enumerable: true,
  get: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onselectstart_get", arguments);
  },
  set: function onselectstart() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onselectstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onselectionchange", {
  configurable: true,
  enumerable: true,
  get: function onselectionchange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onselectionchange_get", arguments);
  },
  set: function onselectionchange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onselectionchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onanimationend", {
  configurable: true,
  enumerable: true,
  get: function onanimationend() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onanimationend_get", arguments);
  },
  set: function onanimationend() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onanimationend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onanimationiteration", {
  configurable: true,
  enumerable: true,
  get: function onanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onanimationiteration_get", arguments);
  },
  set: function onanimationiteration() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onanimationiteration_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onanimationstart", {
  configurable: true,
  enumerable: true,
  get: function onanimationstart() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onanimationstart_get", arguments);
  },
  set: function onanimationstart() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onanimationstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "ontransitionrun", {
  configurable: true,
  enumerable: true,
  get: function ontransitionrun() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontransitionrun_get", arguments);
  },
  set: function ontransitionrun() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontransitionrun_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "ontransitionstart", {
  configurable: true,
  enumerable: true,
  get: function ontransitionstart() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontransitionstart_get", arguments);
  },
  set: function ontransitionstart() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontransitionstart_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "ontransitionend", {
  configurable: true,
  enumerable: true,
  get: function ontransitionend() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontransitionend_get", arguments);
  },
  set: function ontransitionend() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontransitionend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "ontransitioncancel", {
  configurable: true,
  enumerable: true,
  get: function ontransitioncancel() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontransitioncancel_get", arguments);
  },
  set: function ontransitioncancel() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "ontransitioncancel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncopy", {
  configurable: true,
  enumerable: true,
  get: function oncopy() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncopy_get", arguments);
  },
  set: function oncopy() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncopy_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncut", {
  configurable: true,
  enumerable: true,
  get: function oncut() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncut_get", arguments);
  },
  set: function oncut() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncut_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onpaste", {
  configurable: true,
  enumerable: true,
  get: function onpaste() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpaste_get", arguments);
  },
  set: function onpaste() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onpaste_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "children", {
  configurable: true,
  enumerable: true,
  get: function children() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "children_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "firstElementChild", {
  configurable: true,
  enumerable: true,
  get: function firstElementChild() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "firstElementChild_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "lastElementChild", {
  configurable: true,
  enumerable: true,
  get: function lastElementChild() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "lastElementChild_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "childElementCount", {
  configurable: true,
  enumerable: true,
  get: function childElementCount() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "childElementCount_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "activeElement", {
  configurable: true,
  enumerable: true,
  get: function activeElement() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "activeElement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "styleSheets", {
  configurable: true,
  enumerable: true,
  get: function styleSheets() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "styleSheets_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "pointerLockElement", {
  configurable: true,
  enumerable: true,
  get: function pointerLockElement() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "pointerLockElement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "fullscreenElement", {
  configurable: true,
  enumerable: true,
  get: function fullscreenElement() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fullscreenElement_get", arguments);
  },
  set: function fullscreenElement() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fullscreenElement_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "adoptedStyleSheets", {
  configurable: true,
  enumerable: true,
  get: function adoptedStyleSheets() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "adoptedStyleSheets_get", arguments);
  },
  set: function adoptedStyleSheets() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "adoptedStyleSheets_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "fonts", {
  configurable: true,
  enumerable: true,
  get: function fonts() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fonts_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "adoptNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function adoptNode() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "adoptNode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "append", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function append() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "append", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "captureEvents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function captureEvents() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "captureEvents", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "caretRangeFromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function caretRangeFromPoint() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "caretRangeFromPoint", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "clear", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "createAttribute", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createAttribute() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createAttribute", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "createAttributeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createAttributeNS() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createAttributeNS", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "createCDATASection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createCDATASection() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createCDATASection", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "createComment", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createComment() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createComment", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "createDocumentFragment", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createDocumentFragment() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createDocumentFragment", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "createElement", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createElement() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createElement", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "createElementNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createElementNS() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createElementNS", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "createEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createEvent() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createEvent", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "createExpression", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createExpression() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createExpression", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "createNSResolver", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createNSResolver() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createNSResolver", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "createNodeIterator", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createNodeIterator() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createNodeIterator", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "createProcessingInstruction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createProcessingInstruction() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createProcessingInstruction", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "createRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createRange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createRange", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "createTextNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createTextNode() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createTextNode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "createTreeWalker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createTreeWalker() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "createTreeWalker", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "elementFromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function elementFromPoint() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "elementFromPoint", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "elementsFromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function elementsFromPoint() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "elementsFromPoint", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "evaluate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function evaluate() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "evaluate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "execCommand", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function execCommand() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "execCommand", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "exitFullscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function exitFullscreen() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "exitFullscreen", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "exitPictureInPicture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function exitPictureInPicture() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "exitPictureInPicture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "exitPointerLock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function exitPointerLock() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "exitPointerLock", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "getElementById", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementById() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "getElementById", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "getElementsByClassName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementsByClassName() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "getElementsByClassName", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "getElementsByName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementsByName() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "getElementsByName", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "getElementsByTagName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementsByTagName() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "getElementsByTagName", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "getElementsByTagNameNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementsByTagNameNS() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "getElementsByTagNameNS", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "getSelection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSelection() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "getSelection", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "hasFocus", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hasFocus() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "hasFocus", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "importNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function importNode() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "importNode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function open() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "open", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "prepend", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function prepend() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "prepend", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "queryCommandEnabled", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function queryCommandEnabled() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "queryCommandEnabled", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "queryCommandIndeterm", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function queryCommandIndeterm() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "queryCommandIndeterm", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "queryCommandState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function queryCommandState() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "queryCommandState", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "queryCommandSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function queryCommandSupported() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "queryCommandSupported", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "queryCommandValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function queryCommandValue() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "queryCommandValue", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "querySelector", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function querySelector() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "querySelector", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "querySelectorAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function querySelectorAll() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "querySelectorAll", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "releaseEvents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function releaseEvents() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "releaseEvents", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "replaceChildren", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceChildren() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "replaceChildren", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "webkitCancelFullScreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitCancelFullScreen() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "webkitCancelFullScreen", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "webkitExitFullscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitExitFullscreen() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "webkitExitFullscreen", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "write", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function write() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "write", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "writeln", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function writeln() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "writeln", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "fragmentDirective", {
  configurable: true,
  enumerable: true,
  get: function fragmentDirective() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "fragmentDirective_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onbeforematch", {
  configurable: true,
  enumerable: true,
  get: function onbeforematch() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforematch_get", arguments);
  },
  set: function onbeforematch() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforematch_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onbeforetoggle", {
  configurable: true,
  enumerable: true,
  get: function onbeforetoggle() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforetoggle_get", arguments);
  },
  set: function onbeforetoggle() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onbeforetoggle_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "timeline", {
  configurable: true,
  enumerable: true,
  get: function timeline() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "timeline_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Document.prototype, "oncontentvisibilityautostatechange", {
  configurable: true,
  enumerable: true,
  get: function oncontentvisibilityautostatechange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncontentvisibilityautostatechange_get", arguments);
  },
  set: function oncontentvisibilityautostatechange() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "oncontentvisibilityautostatechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "onscrollend", {
  configurable: true,
  enumerable: true,
  get: function onscrollend() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onscrollend_get", arguments);
  },
  set: function onscrollend() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "onscrollend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "getAnimations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAnimations() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "getAnimations", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Document.prototype, "startViewTransition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function startViewTransition() {
    return bodavm.toolsFunc.dispatch(this, Document.prototype, "Document", "startViewTransition", arguments);
  }
});
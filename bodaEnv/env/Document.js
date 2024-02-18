// Document对象

bodaEnv.memory.globlProtoObj["Document"] = function Document() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Document 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Document"], "Document");
bodaEnv.memory.globlProtoObj["Document"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Node"].prototype;
bodaEnv.memory.globlProtoObj["Document"].__proto__ = bodaEnv.memory.globlProtoObj["Node"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "implementation", {
  configurable: true,
  enumerable: true,
  get: {
    implementation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "implementation_get", arguments);
    }
  }.implementation,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "URL", {
  configurable: true,
  enumerable: true,
  get: {
    URL() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "URL_get", arguments);
    }
  }.URL,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "documentURI", {
  configurable: true,
  enumerable: true,
  get: {
    documentURI() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "documentURI_get", arguments);
    }
  }.documentURI,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "compatMode", {
  configurable: true,
  enumerable: true,
  get: {
    compatMode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "compatMode_get", arguments);
    }
  }.compatMode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "characterSet", {
  configurable: true,
  enumerable: true,
  get: {
    characterSet() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "characterSet_get", arguments);
    }
  }.characterSet,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "charset", {
  configurable: true,
  enumerable: true,
  get: {
    charset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "charset_get", arguments);
    }
  }.charset,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "inputEncoding", {
  configurable: true,
  enumerable: true,
  get: {
    inputEncoding() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "inputEncoding_get", arguments);
    }
  }.inputEncoding,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "contentType", {
  configurable: true,
  enumerable: true,
  get: {
    contentType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "contentType_get", arguments);
    }
  }.contentType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "doctype", {
  configurable: true,
  enumerable: true,
  get: {
    doctype() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "doctype_get", arguments);
    }
  }.doctype,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "documentElement", {
  configurable: true,
  enumerable: true,
  get: {
    documentElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "documentElement_get", arguments);
    }
  }.documentElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "xmlEncoding", {
  configurable: true,
  enumerable: true,
  get: {
    xmlEncoding() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "xmlEncoding_get", arguments);
    }
  }.xmlEncoding,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "xmlVersion", {
  configurable: true,
  enumerable: true,
  get: {
    xmlVersion() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "xmlVersion_get", arguments);
    }
  }.xmlVersion,
  set: {
    xmlVersion() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "xmlVersion_set", arguments);
    }
  }.xmlVersion
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "xmlStandalone", {
  configurable: true,
  enumerable: true,
  get: {
    xmlStandalone() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "xmlStandalone_get", arguments);
    }
  }.xmlStandalone,
  set: {
    xmlStandalone() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "xmlStandalone_set", arguments);
    }
  }.xmlStandalone
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "domain", {
  configurable: true,
  enumerable: true,
  get: {
    domain() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "domain_get", arguments);
    }
  }.domain,
  set: {
    domain() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "domain_set", arguments);
    }
  }.domain
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "referrer", {
  configurable: true,
  enumerable: true,
  get: {
    referrer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "referrer_get", arguments);
    }
  }.referrer,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "cookie", {
  configurable: true,
  enumerable: true,
  get: {
    cookie() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "cookie_get", arguments);
    }
  }.cookie,
  set: {
    cookie() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "cookie_set", arguments);
    }
  }.cookie
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "lastModified", {
  configurable: true,
  enumerable: true,
  get: {
    lastModified() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "lastModified_get", arguments);
    }
  }.lastModified,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "readyState", {
  configurable: true,
  enumerable: true,
  get: {
    readyState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "readyState_get", arguments);
    }
  }.readyState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "title", {
  configurable: true,
  enumerable: true,
  get: {
    title() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "title_get", arguments);
    }
  }.title,
  set: {
    title() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "title_set", arguments);
    }
  }.title
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "dir", {
  configurable: true,
  enumerable: true,
  get: {
    dir() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "dir_get", arguments);
    }
  }.dir,
  set: {
    dir() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "dir_set", arguments);
    }
  }.dir
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "body", {
  configurable: true,
  enumerable: true,
  get: {
    body() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "body_get", arguments);
    }
  }.body,
  set: {
    body() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "body_set", arguments);
    }
  }.body
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "head", {
  configurable: true,
  enumerable: true,
  get: {
    head() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "head_get", arguments);
    }
  }.head,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "images", {
  configurable: true,
  enumerable: true,
  get: {
    images() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "images_get", arguments);
    }
  }.images,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "embeds", {
  configurable: true,
  enumerable: true,
  get: {
    embeds() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "embeds_get", arguments);
    }
  }.embeds,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "plugins", {
  configurable: true,
  enumerable: true,
  get: {
    plugins() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "plugins_get", arguments);
    }
  }.plugins,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "links", {
  configurable: true,
  enumerable: true,
  get: {
    links() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "links_get", arguments);
    }
  }.links,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "forms", {
  configurable: true,
  enumerable: true,
  get: {
    forms() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "forms_get", arguments);
    }
  }.forms,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "scripts", {
  configurable: true,
  enumerable: true,
  get: {
    scripts() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "scripts_get", arguments);
    }
  }.scripts,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "currentScript", {
  configurable: true,
  enumerable: true,
  get: {
    currentScript() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "currentScript_get", arguments);
    }
  }.currentScript,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "defaultView", {
  configurable: true,
  enumerable: true,
  get: {
    defaultView() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "defaultView_get", arguments);
    }
  }.defaultView,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "designMode", {
  configurable: true,
  enumerable: true,
  get: {
    designMode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "designMode_get", arguments);
    }
  }.designMode,
  set: {
    designMode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "designMode_set", arguments);
    }
  }.designMode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onreadystatechange", {
  configurable: true,
  enumerable: true,
  get: {
    onreadystatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onreadystatechange_get", arguments);
    }
  }.onreadystatechange,
  set: {
    onreadystatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onreadystatechange_set", arguments);
    }
  }.onreadystatechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "anchors", {
  configurable: true,
  enumerable: true,
  get: {
    anchors() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "anchors_get", arguments);
    }
  }.anchors,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "applets", {
  configurable: true,
  enumerable: true,
  get: {
    applets() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "applets_get", arguments);
    }
  }.applets,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "fgColor", {
  configurable: true,
  enumerable: true,
  get: {
    fgColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "fgColor_get", arguments);
    }
  }.fgColor,
  set: {
    fgColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "fgColor_set", arguments);
    }
  }.fgColor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "linkColor", {
  configurable: true,
  enumerable: true,
  get: {
    linkColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "linkColor_get", arguments);
    }
  }.linkColor,
  set: {
    linkColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "linkColor_set", arguments);
    }
  }.linkColor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "vlinkColor", {
  configurable: true,
  enumerable: true,
  get: {
    vlinkColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "vlinkColor_get", arguments);
    }
  }.vlinkColor,
  set: {
    vlinkColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "vlinkColor_set", arguments);
    }
  }.vlinkColor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "alinkColor", {
  configurable: true,
  enumerable: true,
  get: {
    alinkColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "alinkColor_get", arguments);
    }
  }.alinkColor,
  set: {
    alinkColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "alinkColor_set", arguments);
    }
  }.alinkColor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "bgColor", {
  configurable: true,
  enumerable: true,
  get: {
    bgColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "bgColor_get", arguments);
    }
  }.bgColor,
  set: {
    bgColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "bgColor_set", arguments);
    }
  }.bgColor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "all", {
  configurable: true,
  enumerable: true,
  get: {
    all() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "all_get", arguments);
    }
  }.all,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "scrollingElement", {
  configurable: true,
  enumerable: true,
  get: {
    scrollingElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "scrollingElement_get", arguments);
    }
  }.scrollingElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onpointerlockchange", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerlockchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointerlockchange_get", arguments);
    }
  }.onpointerlockchange,
  set: {
    onpointerlockchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointerlockchange_set", arguments);
    }
  }.onpointerlockchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onpointerlockerror", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerlockerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointerlockerror_get", arguments);
    }
  }.onpointerlockerror,
  set: {
    onpointerlockerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointerlockerror_set", arguments);
    }
  }.onpointerlockerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "hidden", {
  configurable: true,
  enumerable: true,
  get: {
    hidden() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "hidden_get", arguments);
    }
  }.hidden,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "visibilityState", {
  configurable: true,
  enumerable: true,
  get: {
    visibilityState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "visibilityState_get", arguments);
    }
  }.visibilityState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "wasDiscarded", {
  configurable: true,
  enumerable: true,
  get: {
    wasDiscarded() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "wasDiscarded_get", arguments);
    }
  }.wasDiscarded,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "prerendering", {
  configurable: true,
  enumerable: true,
  get: {
    prerendering() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "prerendering_get", arguments);
    }
  }.prerendering,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "featurePolicy", {
  configurable: true,
  enumerable: true,
  get: {
    featurePolicy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "featurePolicy_get", arguments);
    }
  }.featurePolicy,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "webkitVisibilityState", {
  configurable: true,
  enumerable: true,
  get: {
    webkitVisibilityState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "webkitVisibilityState_get", arguments);
    }
  }.webkitVisibilityState,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "webkitHidden", {
  configurable: true,
  enumerable: true,
  get: {
    webkitHidden() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "webkitHidden_get", arguments);
    }
  }.webkitHidden,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onbeforecopy", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforecopy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onbeforecopy_get", arguments);
    }
  }.onbeforecopy,
  set: {
    onbeforecopy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onbeforecopy_set", arguments);
    }
  }.onbeforecopy
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onbeforecut", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforecut() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onbeforecut_get", arguments);
    }
  }.onbeforecut,
  set: {
    onbeforecut() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onbeforecut_set", arguments);
    }
  }.onbeforecut
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onbeforepaste", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforepaste() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onbeforepaste_get", arguments);
    }
  }.onbeforepaste,
  set: {
    onbeforepaste() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onbeforepaste_set", arguments);
    }
  }.onbeforepaste
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onfreeze", {
  configurable: true,
  enumerable: true,
  get: {
    onfreeze() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onfreeze_get", arguments);
    }
  }.onfreeze,
  set: {
    onfreeze() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onfreeze_set", arguments);
    }
  }.onfreeze
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onprerenderingchange", {
  configurable: true,
  enumerable: true,
  get: {
    onprerenderingchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onprerenderingchange_get", arguments);
    }
  }.onprerenderingchange,
  set: {
    onprerenderingchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onprerenderingchange_set", arguments);
    }
  }.onprerenderingchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onresume", {
  configurable: true,
  enumerable: true,
  get: {
    onresume() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onresume_get", arguments);
    }
  }.onresume,
  set: {
    onresume() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onresume_set", arguments);
    }
  }.onresume
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onsearch", {
  configurable: true,
  enumerable: true,
  get: {
    onsearch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onsearch_get", arguments);
    }
  }.onsearch,
  set: {
    onsearch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onsearch_set", arguments);
    }
  }.onsearch
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onvisibilitychange", {
  configurable: true,
  enumerable: true,
  get: {
    onvisibilitychange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onvisibilitychange_get", arguments);
    }
  }.onvisibilitychange,
  set: {
    onvisibilitychange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onvisibilitychange_set", arguments);
    }
  }.onvisibilitychange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "fullscreenEnabled", {
  configurable: true,
  enumerable: true,
  get: {
    fullscreenEnabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "fullscreenEnabled_get", arguments);
    }
  }.fullscreenEnabled,
  set: {
    fullscreenEnabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "fullscreenEnabled_set", arguments);
    }
  }.fullscreenEnabled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "fullscreen", {
  configurable: true,
  enumerable: true,
  get: {
    fullscreen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "fullscreen_get", arguments);
    }
  }.fullscreen,
  set: {
    fullscreen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "fullscreen_set", arguments);
    }
  }.fullscreen
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onfullscreenchange", {
  configurable: true,
  enumerable: true,
  get: {
    onfullscreenchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onfullscreenchange_get", arguments);
    }
  }.onfullscreenchange,
  set: {
    onfullscreenchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onfullscreenchange_set", arguments);
    }
  }.onfullscreenchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onfullscreenerror", {
  configurable: true,
  enumerable: true,
  get: {
    onfullscreenerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onfullscreenerror_get", arguments);
    }
  }.onfullscreenerror,
  set: {
    onfullscreenerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onfullscreenerror_set", arguments);
    }
  }.onfullscreenerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "webkitIsFullScreen", {
  configurable: true,
  enumerable: true,
  get: {
    webkitIsFullScreen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "webkitIsFullScreen_get", arguments);
    }
  }.webkitIsFullScreen,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "webkitCurrentFullScreenElement", {
  configurable: true,
  enumerable: true,
  get: {
    webkitCurrentFullScreenElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "webkitCurrentFullScreenElement_get", arguments);
    }
  }.webkitCurrentFullScreenElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "webkitFullscreenEnabled", {
  configurable: true,
  enumerable: true,
  get: {
    webkitFullscreenEnabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "webkitFullscreenEnabled_get", arguments);
    }
  }.webkitFullscreenEnabled,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "webkitFullscreenElement", {
  configurable: true,
  enumerable: true,
  get: {
    webkitFullscreenElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "webkitFullscreenElement_get", arguments);
    }
  }.webkitFullscreenElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onwebkitfullscreenchange", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkitfullscreenchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onwebkitfullscreenchange_get", arguments);
    }
  }.onwebkitfullscreenchange,
  set: {
    onwebkitfullscreenchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onwebkitfullscreenchange_set", arguments);
    }
  }.onwebkitfullscreenchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onwebkitfullscreenerror", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkitfullscreenerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onwebkitfullscreenerror_get", arguments);
    }
  }.onwebkitfullscreenerror,
  set: {
    onwebkitfullscreenerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onwebkitfullscreenerror_set", arguments);
    }
  }.onwebkitfullscreenerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "rootElement", {
  configurable: true,
  enumerable: true,
  get: {
    rootElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "rootElement_get", arguments);
    }
  }.rootElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "pictureInPictureEnabled", {
  configurable: true,
  enumerable: true,
  get: {
    pictureInPictureEnabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "pictureInPictureEnabled_get", arguments);
    }
  }.pictureInPictureEnabled,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onbeforexrselect", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforexrselect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onbeforexrselect_get", arguments);
    }
  }.onbeforexrselect,
  set: {
    onbeforexrselect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onbeforexrselect_set", arguments);
    }
  }.onbeforexrselect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onabort", {
  configurable: true,
  enumerable: true,
  get: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onabort_get", arguments);
    }
  }.onabort,
  set: {
    onabort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onabort_set", arguments);
    }
  }.onabort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onbeforeinput", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforeinput() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onbeforeinput_get", arguments);
    }
  }.onbeforeinput,
  set: {
    onbeforeinput() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onbeforeinput_set", arguments);
    }
  }.onbeforeinput
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onblur", {
  configurable: true,
  enumerable: true,
  get: {
    onblur() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onblur_get", arguments);
    }
  }.onblur,
  set: {
    onblur() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onblur_set", arguments);
    }
  }.onblur
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "oncancel", {
  configurable: true,
  enumerable: true,
  get: {
    oncancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncancel_get", arguments);
    }
  }.oncancel,
  set: {
    oncancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncancel_set", arguments);
    }
  }.oncancel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "oncanplay", {
  configurable: true,
  enumerable: true,
  get: {
    oncanplay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncanplay_get", arguments);
    }
  }.oncanplay,
  set: {
    oncanplay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncanplay_set", arguments);
    }
  }.oncanplay
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "oncanplaythrough", {
  configurable: true,
  enumerable: true,
  get: {
    oncanplaythrough() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncanplaythrough_get", arguments);
    }
  }.oncanplaythrough,
  set: {
    oncanplaythrough() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncanplaythrough_set", arguments);
    }
  }.oncanplaythrough
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onchange_get", arguments);
    }
  }.onchange,
  set: {
    onchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onchange_set", arguments);
    }
  }.onchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onclick", {
  configurable: true,
  enumerable: true,
  get: {
    onclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onclick_get", arguments);
    }
  }.onclick,
  set: {
    onclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onclick_set", arguments);
    }
  }.onclick
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onclose", {
  configurable: true,
  enumerable: true,
  get: {
    onclose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onclose_get", arguments);
    }
  }.onclose,
  set: {
    onclose() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onclose_set", arguments);
    }
  }.onclose
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "oncontextlost", {
  configurable: true,
  enumerable: true,
  get: {
    oncontextlost() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncontextlost_get", arguments);
    }
  }.oncontextlost,
  set: {
    oncontextlost() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncontextlost_set", arguments);
    }
  }.oncontextlost
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "oncontextmenu", {
  configurable: true,
  enumerable: true,
  get: {
    oncontextmenu() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncontextmenu_get", arguments);
    }
  }.oncontextmenu,
  set: {
    oncontextmenu() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncontextmenu_set", arguments);
    }
  }.oncontextmenu
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "oncontextrestored", {
  configurable: true,
  enumerable: true,
  get: {
    oncontextrestored() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncontextrestored_get", arguments);
    }
  }.oncontextrestored,
  set: {
    oncontextrestored() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncontextrestored_set", arguments);
    }
  }.oncontextrestored
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "oncuechange", {
  configurable: true,
  enumerable: true,
  get: {
    oncuechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncuechange_get", arguments);
    }
  }.oncuechange,
  set: {
    oncuechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncuechange_set", arguments);
    }
  }.oncuechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "ondblclick", {
  configurable: true,
  enumerable: true,
  get: {
    ondblclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ondblclick_get", arguments);
    }
  }.ondblclick,
  set: {
    ondblclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ondblclick_set", arguments);
    }
  }.ondblclick
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "ondrag", {
  configurable: true,
  enumerable: true,
  get: {
    ondrag() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ondrag_get", arguments);
    }
  }.ondrag,
  set: {
    ondrag() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ondrag_set", arguments);
    }
  }.ondrag
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "ondragend", {
  configurable: true,
  enumerable: true,
  get: {
    ondragend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ondragend_get", arguments);
    }
  }.ondragend,
  set: {
    ondragend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ondragend_set", arguments);
    }
  }.ondragend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "ondragenter", {
  configurable: true,
  enumerable: true,
  get: {
    ondragenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ondragenter_get", arguments);
    }
  }.ondragenter,
  set: {
    ondragenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ondragenter_set", arguments);
    }
  }.ondragenter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "ondragleave", {
  configurable: true,
  enumerable: true,
  get: {
    ondragleave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ondragleave_get", arguments);
    }
  }.ondragleave,
  set: {
    ondragleave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ondragleave_set", arguments);
    }
  }.ondragleave
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "ondragover", {
  configurable: true,
  enumerable: true,
  get: {
    ondragover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ondragover_get", arguments);
    }
  }.ondragover,
  set: {
    ondragover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ondragover_set", arguments);
    }
  }.ondragover
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "ondragstart", {
  configurable: true,
  enumerable: true,
  get: {
    ondragstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ondragstart_get", arguments);
    }
  }.ondragstart,
  set: {
    ondragstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ondragstart_set", arguments);
    }
  }.ondragstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "ondrop", {
  configurable: true,
  enumerable: true,
  get: {
    ondrop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ondrop_get", arguments);
    }
  }.ondrop,
  set: {
    ondrop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ondrop_set", arguments);
    }
  }.ondrop
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "ondurationchange", {
  configurable: true,
  enumerable: true,
  get: {
    ondurationchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ondurationchange_get", arguments);
    }
  }.ondurationchange,
  set: {
    ondurationchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ondurationchange_set", arguments);
    }
  }.ondurationchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onemptied", {
  configurable: true,
  enumerable: true,
  get: {
    onemptied() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onemptied_get", arguments);
    }
  }.onemptied,
  set: {
    onemptied() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onemptied_set", arguments);
    }
  }.onemptied
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onended", {
  configurable: true,
  enumerable: true,
  get: {
    onended() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onended_get", arguments);
    }
  }.onended,
  set: {
    onended() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onended_set", arguments);
    }
  }.onended
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onerror_get", arguments);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onerror_set", arguments);
    }
  }.onerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onfocus", {
  configurable: true,
  enumerable: true,
  get: {
    onfocus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onfocus_get", arguments);
    }
  }.onfocus,
  set: {
    onfocus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onfocus_set", arguments);
    }
  }.onfocus
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onformdata", {
  configurable: true,
  enumerable: true,
  get: {
    onformdata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onformdata_get", arguments);
    }
  }.onformdata,
  set: {
    onformdata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onformdata_set", arguments);
    }
  }.onformdata
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "oninput", {
  configurable: true,
  enumerable: true,
  get: {
    oninput() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oninput_get", arguments);
    }
  }.oninput,
  set: {
    oninput() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oninput_set", arguments);
    }
  }.oninput
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "oninvalid", {
  configurable: true,
  enumerable: true,
  get: {
    oninvalid() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oninvalid_get", arguments);
    }
  }.oninvalid,
  set: {
    oninvalid() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oninvalid_set", arguments);
    }
  }.oninvalid
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onkeydown", {
  configurable: true,
  enumerable: true,
  get: {
    onkeydown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onkeydown_get", arguments);
    }
  }.onkeydown,
  set: {
    onkeydown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onkeydown_set", arguments);
    }
  }.onkeydown
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onkeypress", {
  configurable: true,
  enumerable: true,
  get: {
    onkeypress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onkeypress_get", arguments);
    }
  }.onkeypress,
  set: {
    onkeypress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onkeypress_set", arguments);
    }
  }.onkeypress
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onkeyup", {
  configurable: true,
  enumerable: true,
  get: {
    onkeyup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onkeyup_get", arguments);
    }
  }.onkeyup,
  set: {
    onkeyup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onkeyup_set", arguments);
    }
  }.onkeyup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onload", {
  configurable: true,
  enumerable: true,
  get: {
    onload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onload_get", arguments);
    }
  }.onload,
  set: {
    onload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onload_set", arguments);
    }
  }.onload
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onloadeddata", {
  configurable: true,
  enumerable: true,
  get: {
    onloadeddata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onloadeddata_get", arguments);
    }
  }.onloadeddata,
  set: {
    onloadeddata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onloadeddata_set", arguments);
    }
  }.onloadeddata
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onloadedmetadata", {
  configurable: true,
  enumerable: true,
  get: {
    onloadedmetadata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onloadedmetadata_get", arguments);
    }
  }.onloadedmetadata,
  set: {
    onloadedmetadata() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onloadedmetadata_set", arguments);
    }
  }.onloadedmetadata
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onloadstart", {
  configurable: true,
  enumerable: true,
  get: {
    onloadstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onloadstart_get", arguments);
    }
  }.onloadstart,
  set: {
    onloadstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onloadstart_set", arguments);
    }
  }.onloadstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onmousedown", {
  configurable: true,
  enumerable: true,
  get: {
    onmousedown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onmousedown_get", arguments);
    }
  }.onmousedown,
  set: {
    onmousedown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onmousedown_set", arguments);
    }
  }.onmousedown
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onmouseenter", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onmouseenter_get", arguments);
    }
  }.onmouseenter,
  set: {
    onmouseenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onmouseenter_set", arguments);
    }
  }.onmouseenter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onmouseleave", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseleave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onmouseleave_get", arguments);
    }
  }.onmouseleave,
  set: {
    onmouseleave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onmouseleave_set", arguments);
    }
  }.onmouseleave
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onmousemove", {
  configurable: true,
  enumerable: true,
  get: {
    onmousemove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onmousemove_get", arguments);
    }
  }.onmousemove,
  set: {
    onmousemove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onmousemove_set", arguments);
    }
  }.onmousemove
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onmouseout", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onmouseout_get", arguments);
    }
  }.onmouseout,
  set: {
    onmouseout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onmouseout_set", arguments);
    }
  }.onmouseout
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onmouseover", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onmouseover_get", arguments);
    }
  }.onmouseover,
  set: {
    onmouseover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onmouseover_set", arguments);
    }
  }.onmouseover
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onmouseup", {
  configurable: true,
  enumerable: true,
  get: {
    onmouseup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onmouseup_get", arguments);
    }
  }.onmouseup,
  set: {
    onmouseup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onmouseup_set", arguments);
    }
  }.onmouseup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onmousewheel", {
  configurable: true,
  enumerable: true,
  get: {
    onmousewheel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onmousewheel_get", arguments);
    }
  }.onmousewheel,
  set: {
    onmousewheel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onmousewheel_set", arguments);
    }
  }.onmousewheel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onpause", {
  configurable: true,
  enumerable: true,
  get: {
    onpause() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpause_get", arguments);
    }
  }.onpause,
  set: {
    onpause() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpause_set", arguments);
    }
  }.onpause
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onplay", {
  configurable: true,
  enumerable: true,
  get: {
    onplay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onplay_get", arguments);
    }
  }.onplay,
  set: {
    onplay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onplay_set", arguments);
    }
  }.onplay
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onplaying", {
  configurable: true,
  enumerable: true,
  get: {
    onplaying() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onplaying_get", arguments);
    }
  }.onplaying,
  set: {
    onplaying() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onplaying_set", arguments);
    }
  }.onplaying
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onprogress", {
  configurable: true,
  enumerable: true,
  get: {
    onprogress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onprogress_get", arguments);
    }
  }.onprogress,
  set: {
    onprogress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onprogress_set", arguments);
    }
  }.onprogress
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onratechange", {
  configurable: true,
  enumerable: true,
  get: {
    onratechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onratechange_get", arguments);
    }
  }.onratechange,
  set: {
    onratechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onratechange_set", arguments);
    }
  }.onratechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onreset", {
  configurable: true,
  enumerable: true,
  get: {
    onreset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onreset_get", arguments);
    }
  }.onreset,
  set: {
    onreset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onreset_set", arguments);
    }
  }.onreset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onresize", {
  configurable: true,
  enumerable: true,
  get: {
    onresize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onresize_get", arguments);
    }
  }.onresize,
  set: {
    onresize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onresize_set", arguments);
    }
  }.onresize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onscroll", {
  configurable: true,
  enumerable: true,
  get: {
    onscroll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onscroll_get", arguments);
    }
  }.onscroll,
  set: {
    onscroll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onscroll_set", arguments);
    }
  }.onscroll
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onsecuritypolicyviolation", {
  configurable: true,
  enumerable: true,
  get: {
    onsecuritypolicyviolation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onsecuritypolicyviolation_get", arguments);
    }
  }.onsecuritypolicyviolation,
  set: {
    onsecuritypolicyviolation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onsecuritypolicyviolation_set", arguments);
    }
  }.onsecuritypolicyviolation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onseeked", {
  configurable: true,
  enumerable: true,
  get: {
    onseeked() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onseeked_get", arguments);
    }
  }.onseeked,
  set: {
    onseeked() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onseeked_set", arguments);
    }
  }.onseeked
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onseeking", {
  configurable: true,
  enumerable: true,
  get: {
    onseeking() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onseeking_get", arguments);
    }
  }.onseeking,
  set: {
    onseeking() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onseeking_set", arguments);
    }
  }.onseeking
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onselect", {
  configurable: true,
  enumerable: true,
  get: {
    onselect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onselect_get", arguments);
    }
  }.onselect,
  set: {
    onselect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onselect_set", arguments);
    }
  }.onselect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onslotchange", {
  configurable: true,
  enumerable: true,
  get: {
    onslotchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onslotchange_get", arguments);
    }
  }.onslotchange,
  set: {
    onslotchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onslotchange_set", arguments);
    }
  }.onslotchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onstalled", {
  configurable: true,
  enumerable: true,
  get: {
    onstalled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onstalled_get", arguments);
    }
  }.onstalled,
  set: {
    onstalled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onstalled_set", arguments);
    }
  }.onstalled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onsubmit", {
  configurable: true,
  enumerable: true,
  get: {
    onsubmit() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onsubmit_get", arguments);
    }
  }.onsubmit,
  set: {
    onsubmit() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onsubmit_set", arguments);
    }
  }.onsubmit
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onsuspend", {
  configurable: true,
  enumerable: true,
  get: {
    onsuspend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onsuspend_get", arguments);
    }
  }.onsuspend,
  set: {
    onsuspend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onsuspend_set", arguments);
    }
  }.onsuspend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "ontimeupdate", {
  configurable: true,
  enumerable: true,
  get: {
    ontimeupdate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ontimeupdate_get", arguments);
    }
  }.ontimeupdate,
  set: {
    ontimeupdate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ontimeupdate_set", arguments);
    }
  }.ontimeupdate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "ontoggle", {
  configurable: true,
  enumerable: true,
  get: {
    ontoggle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ontoggle_get", arguments);
    }
  }.ontoggle,
  set: {
    ontoggle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ontoggle_set", arguments);
    }
  }.ontoggle
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onvolumechange", {
  configurable: true,
  enumerable: true,
  get: {
    onvolumechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onvolumechange_get", arguments);
    }
  }.onvolumechange,
  set: {
    onvolumechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onvolumechange_set", arguments);
    }
  }.onvolumechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onwaiting", {
  configurable: true,
  enumerable: true,
  get: {
    onwaiting() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onwaiting_get", arguments);
    }
  }.onwaiting,
  set: {
    onwaiting() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onwaiting_set", arguments);
    }
  }.onwaiting
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onwebkitanimationend", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkitanimationend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onwebkitanimationend_get", arguments);
    }
  }.onwebkitanimationend,
  set: {
    onwebkitanimationend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onwebkitanimationend_set", arguments);
    }
  }.onwebkitanimationend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onwebkitanimationiteration", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkitanimationiteration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onwebkitanimationiteration_get", arguments);
    }
  }.onwebkitanimationiteration,
  set: {
    onwebkitanimationiteration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onwebkitanimationiteration_set", arguments);
    }
  }.onwebkitanimationiteration
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onwebkitanimationstart", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkitanimationstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onwebkitanimationstart_get", arguments);
    }
  }.onwebkitanimationstart,
  set: {
    onwebkitanimationstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onwebkitanimationstart_set", arguments);
    }
  }.onwebkitanimationstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onwebkittransitionend", {
  configurable: true,
  enumerable: true,
  get: {
    onwebkittransitionend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onwebkittransitionend_get", arguments);
    }
  }.onwebkittransitionend,
  set: {
    onwebkittransitionend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onwebkittransitionend_set", arguments);
    }
  }.onwebkittransitionend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onwheel", {
  configurable: true,
  enumerable: true,
  get: {
    onwheel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onwheel_get", arguments);
    }
  }.onwheel,
  set: {
    onwheel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onwheel_set", arguments);
    }
  }.onwheel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onauxclick", {
  configurable: true,
  enumerable: true,
  get: {
    onauxclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onauxclick_get", arguments);
    }
  }.onauxclick,
  set: {
    onauxclick() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onauxclick_set", arguments);
    }
  }.onauxclick
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "ongotpointercapture", {
  configurable: true,
  enumerable: true,
  get: {
    ongotpointercapture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ongotpointercapture_get", arguments);
    }
  }.ongotpointercapture,
  set: {
    ongotpointercapture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ongotpointercapture_set", arguments);
    }
  }.ongotpointercapture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onlostpointercapture", {
  configurable: true,
  enumerable: true,
  get: {
    onlostpointercapture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onlostpointercapture_get", arguments);
    }
  }.onlostpointercapture,
  set: {
    onlostpointercapture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onlostpointercapture_set", arguments);
    }
  }.onlostpointercapture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onpointerdown", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerdown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointerdown_get", arguments);
    }
  }.onpointerdown,
  set: {
    onpointerdown() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointerdown_set", arguments);
    }
  }.onpointerdown
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onpointermove", {
  configurable: true,
  enumerable: true,
  get: {
    onpointermove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointermove_get", arguments);
    }
  }.onpointermove,
  set: {
    onpointermove() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointermove_set", arguments);
    }
  }.onpointermove
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onpointerrawupdate", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerrawupdate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointerrawupdate_get", arguments);
    }
  }.onpointerrawupdate,
  set: {
    onpointerrawupdate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointerrawupdate_set", arguments);
    }
  }.onpointerrawupdate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onpointerup", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointerup_get", arguments);
    }
  }.onpointerup,
  set: {
    onpointerup() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointerup_set", arguments);
    }
  }.onpointerup
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onpointercancel", {
  configurable: true,
  enumerable: true,
  get: {
    onpointercancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointercancel_get", arguments);
    }
  }.onpointercancel,
  set: {
    onpointercancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointercancel_set", arguments);
    }
  }.onpointercancel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onpointerover", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointerover_get", arguments);
    }
  }.onpointerover,
  set: {
    onpointerover() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointerover_set", arguments);
    }
  }.onpointerover
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onpointerout", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointerout_get", arguments);
    }
  }.onpointerout,
  set: {
    onpointerout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointerout_set", arguments);
    }
  }.onpointerout
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onpointerenter", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointerenter_get", arguments);
    }
  }.onpointerenter,
  set: {
    onpointerenter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointerenter_set", arguments);
    }
  }.onpointerenter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onpointerleave", {
  configurable: true,
  enumerable: true,
  get: {
    onpointerleave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointerleave_get", arguments);
    }
  }.onpointerleave,
  set: {
    onpointerleave() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpointerleave_set", arguments);
    }
  }.onpointerleave
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onselectstart", {
  configurable: true,
  enumerable: true,
  get: {
    onselectstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onselectstart_get", arguments);
    }
  }.onselectstart,
  set: {
    onselectstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onselectstart_set", arguments);
    }
  }.onselectstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onselectionchange", {
  configurable: true,
  enumerable: true,
  get: {
    onselectionchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onselectionchange_get", arguments);
    }
  }.onselectionchange,
  set: {
    onselectionchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onselectionchange_set", arguments);
    }
  }.onselectionchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onanimationend", {
  configurable: true,
  enumerable: true,
  get: {
    onanimationend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onanimationend_get", arguments);
    }
  }.onanimationend,
  set: {
    onanimationend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onanimationend_set", arguments);
    }
  }.onanimationend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onanimationiteration", {
  configurable: true,
  enumerable: true,
  get: {
    onanimationiteration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onanimationiteration_get", arguments);
    }
  }.onanimationiteration,
  set: {
    onanimationiteration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onanimationiteration_set", arguments);
    }
  }.onanimationiteration
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onanimationstart", {
  configurable: true,
  enumerable: true,
  get: {
    onanimationstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onanimationstart_get", arguments);
    }
  }.onanimationstart,
  set: {
    onanimationstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onanimationstart_set", arguments);
    }
  }.onanimationstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "ontransitionrun", {
  configurable: true,
  enumerable: true,
  get: {
    ontransitionrun() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ontransitionrun_get", arguments);
    }
  }.ontransitionrun,
  set: {
    ontransitionrun() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ontransitionrun_set", arguments);
    }
  }.ontransitionrun
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "ontransitionstart", {
  configurable: true,
  enumerable: true,
  get: {
    ontransitionstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ontransitionstart_get", arguments);
    }
  }.ontransitionstart,
  set: {
    ontransitionstart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ontransitionstart_set", arguments);
    }
  }.ontransitionstart
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "ontransitionend", {
  configurable: true,
  enumerable: true,
  get: {
    ontransitionend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ontransitionend_get", arguments);
    }
  }.ontransitionend,
  set: {
    ontransitionend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ontransitionend_set", arguments);
    }
  }.ontransitionend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "ontransitioncancel", {
  configurable: true,
  enumerable: true,
  get: {
    ontransitioncancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ontransitioncancel_get", arguments);
    }
  }.ontransitioncancel,
  set: {
    ontransitioncancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "ontransitioncancel_set", arguments);
    }
  }.ontransitioncancel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "oncopy", {
  configurable: true,
  enumerable: true,
  get: {
    oncopy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncopy_get", arguments);
    }
  }.oncopy,
  set: {
    oncopy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncopy_set", arguments);
    }
  }.oncopy
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "oncut", {
  configurable: true,
  enumerable: true,
  get: {
    oncut() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncut_get", arguments);
    }
  }.oncut,
  set: {
    oncut() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncut_set", arguments);
    }
  }.oncut
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onpaste", {
  configurable: true,
  enumerable: true,
  get: {
    onpaste() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpaste_get", arguments);
    }
  }.onpaste,
  set: {
    onpaste() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onpaste_set", arguments);
    }
  }.onpaste
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "children", {
  configurable: true,
  enumerable: true,
  get: {
    children() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "children_get", arguments);
    }
  }.children,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "firstElementChild", {
  configurable: true,
  enumerable: true,
  get: {
    firstElementChild() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "firstElementChild_get", arguments);
    }
  }.firstElementChild,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "lastElementChild", {
  configurable: true,
  enumerable: true,
  get: {
    lastElementChild() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "lastElementChild_get", arguments);
    }
  }.lastElementChild,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "childElementCount", {
  configurable: true,
  enumerable: true,
  get: {
    childElementCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "childElementCount_get", arguments);
    }
  }.childElementCount,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "activeElement", {
  configurable: true,
  enumerable: true,
  get: {
    activeElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "activeElement_get", arguments);
    }
  }.activeElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "styleSheets", {
  configurable: true,
  enumerable: true,
  get: {
    styleSheets() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "styleSheets_get", arguments);
    }
  }.styleSheets,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "pointerLockElement", {
  configurable: true,
  enumerable: true,
  get: {
    pointerLockElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "pointerLockElement_get", arguments);
    }
  }.pointerLockElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "fullscreenElement", {
  configurable: true,
  enumerable: true,
  get: {
    fullscreenElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "fullscreenElement_get", arguments);
    }
  }.fullscreenElement,
  set: {
    fullscreenElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "fullscreenElement_set", arguments);
    }
  }.fullscreenElement
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "adoptedStyleSheets", {
  configurable: true,
  enumerable: true,
  get: {
    adoptedStyleSheets() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "adoptedStyleSheets_get", arguments);
    }
  }.adoptedStyleSheets,
  set: {
    adoptedStyleSheets() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "adoptedStyleSheets_set", arguments);
    }
  }.adoptedStyleSheets
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "pictureInPictureElement", {
  configurable: true,
  enumerable: true,
  get: {
    pictureInPictureElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "pictureInPictureElement_get", arguments);
    }
  }.pictureInPictureElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "fonts", {
  configurable: true,
  enumerable: true,
  get: {
    fonts() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "fonts_get", arguments);
    }
  }.fonts,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "adoptNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    adoptNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "adoptNode", arguments);
    }
  }.adoptNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "append", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    append() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "append", arguments);
    }
  }.append
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "captureEvents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    captureEvents() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "captureEvents", arguments);
    }
  }.captureEvents
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "caretRangeFromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    caretRangeFromPoint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "caretRangeFromPoint", arguments);
    }
  }.caretRangeFromPoint
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clear() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "clear", arguments);
    }
  }.clear
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "createAttribute", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createAttribute() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "createAttribute", arguments);
    }
  }.createAttribute
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "createAttributeNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createAttributeNS() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "createAttributeNS", arguments);
    }
  }.createAttributeNS
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "createCDATASection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createCDATASection() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "createCDATASection", arguments);
    }
  }.createCDATASection
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "createComment", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createComment() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "createComment", arguments);
    }
  }.createComment
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "createDocumentFragment", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createDocumentFragment() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "createDocumentFragment", arguments);
    }
  }.createDocumentFragment
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "createElement", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "createElement", arguments);
    }
  }.createElement
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "createElementNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createElementNS() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "createElementNS", arguments);
    }
  }.createElementNS
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "createEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createEvent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "createEvent", arguments);
    }
  }.createEvent
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "createExpression", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createExpression() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "createExpression", arguments);
    }
  }.createExpression
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "createNSResolver", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createNSResolver() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "createNSResolver", arguments);
    }
  }.createNSResolver
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "createNodeIterator", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createNodeIterator() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "createNodeIterator", arguments);
    }
  }.createNodeIterator
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "createProcessingInstruction", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createProcessingInstruction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "createProcessingInstruction", arguments);
    }
  }.createProcessingInstruction
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "createRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createRange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "createRange", arguments);
    }
  }.createRange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "createTextNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createTextNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "createTextNode", arguments);
    }
  }.createTextNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "createTreeWalker", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createTreeWalker() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "createTreeWalker", arguments);
    }
  }.createTreeWalker
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "elementFromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    elementFromPoint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "elementFromPoint", arguments);
    }
  }.elementFromPoint
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "elementsFromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    elementsFromPoint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "elementsFromPoint", arguments);
    }
  }.elementsFromPoint
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "evaluate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    evaluate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "evaluate", arguments);
    }
  }.evaluate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "execCommand", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    execCommand() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "execCommand", arguments);
    }
  }.execCommand
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "exitFullscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    exitFullscreen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "exitFullscreen", arguments);
    }
  }.exitFullscreen
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "exitPictureInPicture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    exitPictureInPicture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "exitPictureInPicture", arguments);
    }
  }.exitPictureInPicture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "exitPointerLock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    exitPointerLock() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "exitPointerLock", arguments);
    }
  }.exitPointerLock
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "getElementById", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getElementById() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "getElementById", arguments);
    }
  }.getElementById
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "getElementsByClassName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getElementsByClassName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "getElementsByClassName", arguments);
    }
  }.getElementsByClassName
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "getElementsByName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getElementsByName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "getElementsByName", arguments);
    }
  }.getElementsByName
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "getElementsByTagName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getElementsByTagName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "getElementsByTagName", arguments);
    }
  }.getElementsByTagName
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "getElementsByTagNameNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getElementsByTagNameNS() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "getElementsByTagNameNS", arguments);
    }
  }.getElementsByTagNameNS
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "getSelection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSelection() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "getSelection", arguments);
    }
  }.getSelection
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "hasFocus", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    hasFocus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "hasFocus", arguments);
    }
  }.hasFocus
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "importNode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    importNode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "importNode", arguments);
    }
  }.importNode
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    open() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "open", arguments);
    }
  }.open
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "prepend", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    prepend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "prepend", arguments);
    }
  }.prepend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "queryCommandEnabled", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    queryCommandEnabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "queryCommandEnabled", arguments);
    }
  }.queryCommandEnabled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "queryCommandIndeterm", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    queryCommandIndeterm() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "queryCommandIndeterm", arguments);
    }
  }.queryCommandIndeterm
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "queryCommandState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    queryCommandState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "queryCommandState", arguments);
    }
  }.queryCommandState
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "queryCommandSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    queryCommandSupported() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "queryCommandSupported", arguments);
    }
  }.queryCommandSupported
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "queryCommandValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    queryCommandValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "queryCommandValue", arguments);
    }
  }.queryCommandValue
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "querySelector", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    querySelector() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "querySelector", arguments);
    }
  }.querySelector
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "querySelectorAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    querySelectorAll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "querySelectorAll", arguments);
    }
  }.querySelectorAll
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "releaseEvents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    releaseEvents() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "releaseEvents", arguments);
    }
  }.releaseEvents
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "replaceChildren", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    replaceChildren() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "replaceChildren", arguments);
    }
  }.replaceChildren
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "webkitCancelFullScreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    webkitCancelFullScreen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "webkitCancelFullScreen", arguments);
    }
  }.webkitCancelFullScreen
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "webkitExitFullscreen", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    webkitExitFullscreen() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "webkitExitFullscreen", arguments);
    }
  }.webkitExitFullscreen
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "write", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    write() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "write", arguments);
    }
  }.write
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "writeln", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    writeln() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "writeln", arguments);
    }
  }.writeln
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "fragmentDirective", {
  configurable: true,
  enumerable: true,
  get: {
    fragmentDirective() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "fragmentDirective_get", arguments);
    }
  }.fragmentDirective,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onbeforematch", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforematch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onbeforematch_get", arguments);
    }
  }.onbeforematch,
  set: {
    onbeforematch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onbeforematch_set", arguments);
    }
  }.onbeforematch
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onbeforetoggle", {
  configurable: true,
  enumerable: true,
  get: {
    onbeforetoggle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onbeforetoggle_get", arguments);
    }
  }.onbeforetoggle,
  set: {
    onbeforetoggle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onbeforetoggle_set", arguments);
    }
  }.onbeforetoggle
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "hasPrivateToken", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    hasPrivateToken() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "hasPrivateToken", arguments);
    }
  }.hasPrivateToken
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "browsingTopics", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    browsingTopics() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "browsingTopics", arguments);
    }
  }.browsingTopics
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "hasRedemptionRecord", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    hasRedemptionRecord() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "hasRedemptionRecord", arguments);
    }
  }.hasRedemptionRecord
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "timeline", {
  configurable: true,
  enumerable: true,
  get: {
    timeline() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "timeline_get", arguments);
    }
  }.timeline,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "oncontentvisibilityautostatechange", {
  configurable: true,
  enumerable: true,
  get: {
    oncontentvisibilityautostatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncontentvisibilityautostatechange_get", arguments);
    }
  }.oncontentvisibilityautostatechange,
  set: {
    oncontentvisibilityautostatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "oncontentvisibilityautostatechange_set", arguments);
    }
  }.oncontentvisibilityautostatechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "onscrollend", {
  configurable: true,
  enumerable: true,
  get: {
    onscrollend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onscrollend_get", arguments);
    }
  }.onscrollend,
  set: {
    onscrollend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "onscrollend_set", arguments);
    }
  }.onscrollend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "getAnimations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAnimations() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "getAnimations", arguments);
    }
  }.getAnimations
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Document"].prototype, "startViewTransition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    startViewTransition() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Document"].prototype, "Document", "startViewTransition", arguments);
    }
  }.startViewTransition
});
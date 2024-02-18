// HTMLAnchorElement对象

bodaEnv.memory.globlProtoObj["HTMLAnchorElement"] = function HTMLAnchorElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLAnchorElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"], "HTMLAnchorElement");
bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "target", {
  configurable: true,
  enumerable: true,
  get: {
    target() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "target_get", arguments);
    }
  }.target,
  set: {
    target() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "target_set", arguments);
    }
  }.target
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "download", {
  configurable: true,
  enumerable: true,
  get: {
    download() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "download_get", arguments);
    }
  }.download,
  set: {
    download() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "download_set", arguments);
    }
  }.download
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "ping", {
  configurable: true,
  enumerable: true,
  get: {
    ping() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "ping_get", arguments);
    }
  }.ping,
  set: {
    ping() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "ping_set", arguments);
    }
  }.ping
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "rel", {
  configurable: true,
  enumerable: true,
  get: {
    rel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "rel_get", arguments);
    }
  }.rel,
  set: {
    rel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "rel_set", arguments);
    }
  }.rel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "relList", {
  configurable: true,
  enumerable: true,
  get: {
    relList() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "relList_get", arguments);
    }
  }.relList,
  set: {
    relList() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "relList_set", arguments);
    }
  }.relList
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "hreflang", {
  configurable: true,
  enumerable: true,
  get: {
    hreflang() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "hreflang_get", arguments);
    }
  }.hreflang,
  set: {
    hreflang() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "hreflang_set", arguments);
    }
  }.hreflang
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "type_get", arguments);
    }
  }.type,
  set: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "type_set", arguments);
    }
  }.type
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: {
    referrerPolicy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "referrerPolicy_get", arguments);
    }
  }.referrerPolicy,
  set: {
    referrerPolicy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "referrerPolicy_set", arguments);
    }
  }.referrerPolicy
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "text", {
  configurable: true,
  enumerable: true,
  get: {
    text() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "text_get", arguments);
    }
  }.text,
  set: {
    text() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "text_set", arguments);
    }
  }.text
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "coords", {
  configurable: true,
  enumerable: true,
  get: {
    coords() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "coords_get", arguments);
    }
  }.coords,
  set: {
    coords() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "coords_set", arguments);
    }
  }.coords
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "charset", {
  configurable: true,
  enumerable: true,
  get: {
    charset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "charset_get", arguments);
    }
  }.charset,
  set: {
    charset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "charset_set", arguments);
    }
  }.charset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "name_get", arguments);
    }
  }.name,
  set: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "name_set", arguments);
    }
  }.name
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "rev", {
  configurable: true,
  enumerable: true,
  get: {
    rev() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "rev_get", arguments);
    }
  }.rev,
  set: {
    rev() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "rev_set", arguments);
    }
  }.rev
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "shape", {
  configurable: true,
  enumerable: true,
  get: {
    shape() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "shape_get", arguments);
    }
  }.shape,
  set: {
    shape() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "shape_set", arguments);
    }
  }.shape
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "origin", {
  configurable: true,
  enumerable: true,
  get: {
    origin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "origin_get", arguments);
    }
  }.origin,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "protocol", {
  configurable: true,
  enumerable: true,
  get: {
    protocol() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "protocol_get", arguments);
    }
  }.protocol,
  set: {
    protocol() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "protocol_set", arguments);
    }
  }.protocol
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "username", {
  configurable: true,
  enumerable: true,
  get: {
    username() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "username_get", arguments);
    }
  }.username,
  set: {
    username() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "username_set", arguments);
    }
  }.username
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "password", {
  configurable: true,
  enumerable: true,
  get: {
    password() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "password_get", arguments);
    }
  }.password,
  set: {
    password() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "password_set", arguments);
    }
  }.password
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "host", {
  configurable: true,
  enumerable: true,
  get: {
    host() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "host_get", arguments);
    }
  }.host,
  set: {
    host() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "host_set", arguments);
    }
  }.host
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "hostname", {
  configurable: true,
  enumerable: true,
  get: {
    hostname() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "hostname_get", arguments);
    }
  }.hostname,
  set: {
    hostname() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "hostname_set", arguments);
    }
  }.hostname
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "port", {
  configurable: true,
  enumerable: true,
  get: {
    port() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "port_get", arguments);
    }
  }.port,
  set: {
    port() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "port_set", arguments);
    }
  }.port
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "pathname", {
  configurable: true,
  enumerable: true,
  get: {
    pathname() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "pathname_get", arguments);
    }
  }.pathname,
  set: {
    pathname() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "pathname_set", arguments);
    }
  }.pathname
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "search", {
  configurable: true,
  enumerable: true,
  get: {
    search() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "search_get", arguments);
    }
  }.search,
  set: {
    search() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "search_set", arguments);
    }
  }.search
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "hash", {
  configurable: true,
  enumerable: true,
  get: {
    hash() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "hash_get", arguments);
    }
  }.hash,
  set: {
    hash() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "hash_set", arguments);
    }
  }.hash
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "href", {
  configurable: true,
  enumerable: true,
  get: {
    href() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "href_get", arguments);
    }
  }.href,
  set: {
    href() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "href_set", arguments);
    }
  }.href
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "toString", arguments);
    }
  }.toString
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "hrefTranslate", {
  configurable: true,
  enumerable: true,
  get: {
    hrefTranslate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "hrefTranslate_get", arguments);
    }
  }.hrefTranslate,
  set: {
    hrefTranslate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HTMLAnchorElement"].prototype, "HTMLAnchorElement", "hrefTranslate_set", arguments);
    }
  }.hrefTranslate
});
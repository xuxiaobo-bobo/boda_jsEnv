!function() {
    function cond() {
        return Math.random()
    }
    function chkQuerySet() {
        var e, n = window[QUERY_KEY];
        return isNaN(n) ? (e = location.href.split(QUERY_KEY + "=")[1],
        n = parseFloat(e),
        void (isNaN(n) || (GREY_RATIO = n))) : void (GREY_RATIO = n)
    }
    var GREY_RATIO = 1
      , QUERY_KEY = "aq-nc-grey-ratio"
      , STABLE_ACTION = function() {}
      , NEW_ACTION = function() {
        !function(e) {
            function n(i) {
                if (t[i])
                    return t[i].exports;
                var o = t[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(o.exports, o, o.exports, n),
                o.l = !0,
                o.exports
            }
            var t = {};
            return n.m = e,
            n.c = t,
            n.i = function(e) {
                return e
            }
            ,
            n.d = function(e, t, i) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                })
            }
            ,
            n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e["default"]
                }
                : function() {
                    return e
                }
                ;
                return n.d(t, "a", t),
                t
            }
            ,
            n.o = function(e, n) {
                return Object.prototype.hasOwnProperty.call(e, n)
            }
            ,
            n.p = "",
            n(n.s = 107)
        }([function(e, n, t) {
            "use strict";
            function i(e, n) {
                if (b)
                    return void e.classList.add(n);
                var t = e.className || "";
                t.match(new RegExp("(^|\\s)" + n + "(\\s|$)")) || (e.className = t + " " + n)
            }
            function o(e, n) {
                if (b)
                    return void e.classList.remove(n);
                var t = e.className || ""
                  , i = t.replace(new RegExp("(^|\\s)" + n + "(\\s|$)"), " ").replace(/^\s+|\s+$/g, "");
                i != t && (e.className = i)
            }
            function r(e) {
                var n = [];
                for (var t in e)
                    e.hasOwnProperty(t) && n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
                return n.join("&")
            }
            function a(e, n, t) {
                var i = m.createElement("script");
                i.src = e;
                var o;
                i.onload = function() {
                    i.onload = null,
                    i.parentNode.removeChild(i),
                    o != -1 && (clearTimeout(o),
                    n("ok"))
                }
                ,
                i.onerror = function() {
                    i.onerror = null,
                    i.parentNode.removeChild(i),
                    o != -1 && (clearTimeout(o),
                    n("err"))
                }
                ,
                o = setTimeout(function() {
                    o = -1,
                    n(y)
                }, t || 5e3);
                var r = m.getElementsByTagName("script")[0];
                r.parentNode.insertBefore(i, r)
            }
            function c(e, n, t, i) {
                function o() {
                    l++;
                    var s = e.indexOf("?") > -1 ? "&" : "?"
                      , u = e;
                    l > 1 && (u = e + s + "__retry=" + l),
                    a(u, function(e) {
                        if (r)
                            return void n(y);
                        if ("ok" === e)
                            n(e);
                        else {
                            if (e === y || l >= i)
                                return void n(y);
                            c = setTimeout(function() {
                                o()
                            }, 3e3)
                        }
                    }, t)
                }
                i = i || 3;
                var r, c, s, l = 0;
                n = function(e) {
                    return function() {
                        s || (s = !0,
                        clearTimeout(c),
                        e.apply(null, arguments))
                    }
                }(n),
                o(),
                setTimeout(function() {
                    r = !0,
                    n(y)
                }, t)
            }
            function s(e, n, t, i) {
                i = i || 1e4;
                var o, c = "__jsonp_" + k++;
                n = n || {},
                n.callback = c;
                var s = e.indexOf("?") > -1 ? "&" : "?";
                e = e + s + r(n),
                a(e, function(e) {
                    o !== -1 && "ok" != e && (clearTimeout(o),
                    t(e))
                }, i),
                v[c] = function(e) {
                    delete v[c],
                    clearTimeout(o),
                    t("ok", e)
                }
                ,
                o = setTimeout(function() {
                    o = -1,
                    t(y)
                }, i)
            }
            function l(e, n, t, i, o) {
                function r() {
                    u++;
                    var l = e.indexOf("?") > -1 ? "&" : "?"
                      , f = e;
                    u > 1 && (f = e + l + "__retry=" + u),
                    s(f, n, function(e, n) {
                        if (a)
                            return void t(y);
                        if ("ok" === e)
                            t(e, n);
                        else {
                            if (e === y || u >= o)
                                return void t(y);
                            c = setTimeout(function() {
                                r()
                            }, 3e3)
                        }
                    }, i)
                }
                o = o || 3;
                var a, c, l, u = 0;
                t = function(e) {
                    return function() {
                        l || (l = !0,
                        clearTimeout(c),
                        e.apply(null, arguments))
                    }
                }(t),
                r(),
                setTimeout(function() {
                    a = !0,
                    t(y)
                }, i)
            }
            function u(e) {
                for (var n, t, i = [].slice.call(arguments), o = i.length, r = 1; r < o; r++) {
                    n = i[r];
                    for (t in n)
                        n.hasOwnProperty(t) && (e[t] = n[t])
                }
                return e
            }
            function f(e) {
                var n, t = [], i = f;
                if ("string" == typeof e)
                    return '"' + e.replace(/(['"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + '"';
                if ("undefined" == typeof e)
                    return "undefined";
                if ("object" === ("undefined" == typeof e ? "undefined" : h(e))) {
                    if (null === e)
                        return "null";
                    if (e.sort) {
                        for (n = 0; n < e.length; n++)
                            t.push(i(e[n]));
                        t = "[" + t.join() + "]"
                    } else {
                        for (n in e)
                            e.hasOwnProperty(n) && t.push('"' + n + '":' + i(e[n]));
                        t = "{" + t.join() + "}"
                    }
                    return t
                }
                return e.toString()
            }
            function d(e, n) {
                n && p(e, n) && (e.classList ? e.classList.remove.apply(e.classList, n.split(/\s+/)) : e.className = e.className.replace(new RegExp("(\\s|^)" + n + "(\\s|$)"), " ").replace(/^\s+|\s+$/g, ""))
            }
            function p(e, n) {
                if (!n)
                    return !1;
                if (e.classList) {
                    for (var t = n.split(/\s+/), i = 0; i < t.length; i++)
                        if (!e.classList.contains(t[i]))
                            return !1;
                    return !0
                }
                return new RegExp("(\\s|^)" + n + "(\\s|$)").test(e.className)
            }
            function _(e, n, t) {
                if (n = n || m,
                t = t || "*",
                m.getElementsByClassName)
                    return n.getElementsByClassName(e);
                for (var i = [], o = "*" === t && n.all ? n.all : n.getElementsByTagName(t), r = o.length; --r >= 0; )
                    p(o[r], e) && i.push(o[r]);
                return i
            }
            function g(e, n) {
                var t = {
                    code: 13,
                    msg: (n + "").substr(0, 1e3) + ";",
                    pid: "sufeiPunish",
                    page: location.href.split(/[#?]/)[0],
                    query: location.search.substr(1),
                    hash: location.hash,
                    referrer: document.referrer,
                    title: document.title,
                    ua: navigator.userAgent,
                    c1: e.token,
                    c2: e.appkey
                }
                  , i = [];
                for (var o in t)
                    i.push(o + "=" + encodeURIComponent(t[o]));
                (new Image).src = "https://gm.mmstat.com/fsp.1.1?" + i.join("&")
            }
            var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , v = window
              , m = document
              , y = "timeout"
              , b = !!m.documentElement.classList
              , k = 1e10 * Math.random() >>> 0
              , w = function(e, n) {
                for (var t = [], i = 0, o = e.length; i < o; i++)
                    t.push(n(e[i], i));
                return t
            }
              , x = function(e, n, t) {
                e.addEventListener ? e.addEventListener(n, t, !1) : e.attachEvent ? e.attachEvent("on" + n, function(e) {
                    return t(e || v.event)
                }) : e["on" + n] = function(e) {
                    return t(e || v.event)
                }
            }
              , A = {}
              , X = function(e, n) {
                A[e] && n(null, A[e]);
                var t = new Image;
                t.onreadystatechange = function() {
                    t.readyState
                }
                ,
                t.onload = function() {
                    var i = t.naturalWidth ? [t.naturalWidth, t.naturalHeight] : [t.width, t.height];
                    A[e] = i,
                    n(null, i)
                }
                ,
                t.onerror = function(e) {
                    n(e)
                }
                ,
                t.src = e
            }
              , T = function(e) {
                for (var n = e.offsetLeft, t = e.offsetParent; null !== t; )
                    n += t.offsetLeft,
                    t = t.offsetParent;
                return n
            }
              , E = function(e) {
                for (var n = e.offsetTop, t = e.offsetParent; null !== t; )
                    n += t.offsetTop,
                    t = t.offsetParent;
                return n
            };
            e.exports = {
                addClass: i,
                delClass: o,
                formatParams: r,
                getElementLeft: T,
                getElementTop: E,
                getElementsByClassName: _,
                getImgSize: X,
                getOS: t(18),
                hasClass: p,
                jsonp: l,
                loadScript: c,
                map: w,
                mix: u,
                obj2str: f,
                on: x,
                removeClass: d,
                getNCPunish: g
            }
        }
        , function(e, n, t) {
            "use strict";
            function i(e) {
                return this instanceof i ? (this._state = l,
                this._onFulfilled = [],
                this._onRejected = [],
                this._value = null,
                this._reason = null,
                void (d(e) && e(a(this.resolve, this), a(this.reject, this)))) : new i(e)
            }
            function o(e, n, t) {
                return function(i) {
                    if (d(n))
                        try {
                            var o = n(i);
                            r(o) ? o.then(function(n) {
                                e.resolve(n)
                            }, function(n) {
                                e.reject(n)
                            }) : e.resolve(o)
                        } catch (a) {
                            e.reject(a)
                        }
                    else
                        e[t](i)
                }
            }
            function r(e) {
                return e && d(e.then)
            }
            function a(e, n) {
                var t = [].slice
                  , i = t.call(arguments, 2)
                  , o = function() {}
                  , r = function() {
                    return e.apply(this instanceof o ? this : n, i.concat(t.call(arguments)))
                };
                return o.prototype = e.prototype,
                r.prototype = new o,
                r
            }
            function c(e) {
                return function(n) {
                    return {}.toString.call(n) == "[object " + e + "]"
                }
            }
            function s(e, n) {
                for (var t = 0, i = e.length; t < i; t++)
                    n(e[t], t)
            }
            var l = 0
              , u = 1
              , f = 2;
            i.prototype = {
                constructor: i,
                then: function(e, n) {
                    var t = new i
                      , r = o(t, e, "resolve")
                      , a = o(t, n, "reject");
                    return this._state === u ? r(this._value) : this._state === f ? a(this._reason) : (this._onFulfilled.push(r),
                    this._onRejected.push(a)),
                    t
                },
                resolve: function(e) {
                    this._state === l && (this._state = u,
                    this._value = e,
                    s(this._onFulfilled, function(n) {
                        n(e)
                    }),
                    this._onFulfilled = [])
                },
                reject: function(e) {
                    this._state === l && (this._state = f,
                    this._reason = e,
                    s(this._onRejected, function(n) {
                        n(e)
                    }),
                    this._onRejected = [])
                },
                "catch": function(e) {
                    return this.then(null, e)
                },
                always: function(e) {
                    return this.then(e, e)
                }
            },
            i.defer = function() {
                var e = {};
                return e.promise = new i(function(n, t) {
                    e.resolve = n,
                    e.reject = t
                }
                ),
                e
            }
            ,
            i.race = function(e) {
                var n = i.defer();
                return e.length,
                s(e, function(e) {
                    e.then(function(e) {
                        n.resolve(e)
                    }, function(e) {
                        n.reject(e)
                    })
                }),
                n.promise
            }
            ,
            i.all = function(e) {
                var n = i.defer()
                  , t = e.length
                  , o = [];
                return s(e, function(e, i) {
                    e.then(function(e) {
                        o[i] = e,
                        t--,
                        0 === t && n.resolve(o)
                    }, function(e) {
                        n.reject(e)
                    })
                }),
                n.promise
            }
            ,
            i.resolve = function(e) {
                return new i(function(n) {
                    n(e)
                }
                )
            }
            ,
            i.reject = function(e) {
                return new i(function(n, t) {
                    t(e)
                }
                )
            }
            ;
            var d = c("Function");
            e.exports = i
        }
        , function(e, n, t) {
            "use strict";
            function i(e, n, t) {
                if (e) {
                    var i = 0
                      , o = e.length;
                    if (o === +o)
                        for (; i < o && n.call(t, e[i], i, e) !== !1; i++)
                            ;
                    else
                        for (i in e)
                            if (e.hasOwnProperty(i) && n.call(t, e[i], i, e) === !1)
                                break
                }
            }
            function o(e, n) {
                if (!n)
                    return !1;
                if (e.classList) {
                    for (var t = n.split(/\s+/), i = 0; i < t.length; i++)
                        if (!e.classList.contains(t[i]))
                            return !1;
                    return !0
                }
                return new RegExp("(\\s|^)" + n + "(\\s|$)").test(e.className)
            }
            function r(e, n) {
                n && !o(e, n) && (e.classList ? e.classList.add.apply(e.classList, n.split(/\s+/)) : e.className += " " + n)
            }
            function a(e, n) {
                n && o(e, n) && (e.classList ? e.classList.remove.apply(e.classList, n.split(/\s+/)) : e.className = e.className.replace(new RegExp("(\\s|^)" + n + "(\\s|$)"), " ").replace(/^\s+|\s+$/g, ""))
            }
            function c(e) {
                var n = [];
                for (var t in e)
                    e.hasOwnProperty(t) && n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
                return n.join("&")
            }
            function s(e) {
                for (var n = e.offsetLeft, t = e.offsetParent; null !== t; )
                    n += t.offsetLeft,
                    t = t.offsetParent;
                return n
            }
            function l(e) {
                for (var n = e.offsetTop, t = e.offsetParent; null !== t; )
                    n += t.offsetTop,
                    t = t.offsetParent;
                return n
            }
            function u(e, n) {
                var t = {
                    code: 13,
                    msg: (n + "").substr(0, 1e3) + ";",
                    pid: "sufeiPunish",
                    page: location.href.split(/[#?]/)[0],
                    query: location.search.substr(1),
                    hash: location.hash,
                    referrer: document.referrer,
                    title: document.title,
                    ua: navigator.userAgent,
                    c1: e.token,
                    c2: e.appkey
                }
                  , i = [];
                for (var o in t)
                    i.push(o + "=" + encodeURIComponent(t[o]));
                (new Image).src = "https://gm.mmstat.com/fsp.1.1?" + i.join("&")
            }
            var f = window
              , d = document
              , p = t(1)
              , _ = n.rndId = function(e) {
                return ((e || "") + Math.random()).replace(".", "")
            }
            ;
            n.each = i,
            n.hasClass = o,
            n.addClass = r,
            n.removeClass = a,
            n.toggleClass = function(e, n) {
                o(e, n) ? a(e, n) : r(e, n)
            }
            ,
            n.getElementsByClassName = function(e, n, t) {
                if (n = n || d,
                t = t || "*",
                d.getElementsByClassName)
                    return n.getElementsByClassName(e);
                for (var i = [], r = "*" === t && n.all ? n.all : n.getElementsByTagName(t), a = r.length; --a >= 0; )
                    o(r[a], e) && i.push(r[a]);
                return i
            }
            ,
            n.setCookie = function(e, n, t) {
                t = t || 7;
                var i = new Date;
                i.setTime(i.getTime() + 864e5 * t),
                document.cookie = [encodeURIComponent(e), "=", encodeURIComponent("" + n), ";expires=", i.toGMTString()].join("")
            }
            ,
            n.send = function(e) {
                var n = _("_nc_r_")
                  , t = f[n] = new Image;
                t.onload = t.onerror = function() {
                    f[n] = null
                }
                ,
                t.src = e
            }
            ,
            n.obj2param = c,
            n.addHourStamp = function(e, n) {
                var t = Math.floor((new Date).getTime() / (36e5 * (n || 2)))
                  , i = e.indexOf("?") === -1 ? "?" : "&";
                return e + i + "_t=" + t
            }
            ;
            var g = {};
            n.isIEX = function(e) {
                if (e in g)
                    return g[e];
                var n = d.createElement("b");
                return n.innerHTML = "<!--[if IE " + e + "]><i></i><![endif]-->",
                g[e] = 1 === n.getElementsByTagName("i").length
            }
            ;
            var s = n.getElementLeft = function(e) {
                for (var n = e.offsetLeft, t = e.offsetParent; null !== t; )
                    n += t.offsetLeft,
                    t = t.offsetParent;
                return n
            }
              , l = n.getElementTop = function(e) {
                for (var n = e.offsetTop, t = e.offsetParent; null !== t; )
                    n += t.offsetTop,
                    t = t.offsetParent;
                return n
            }
            ;
            n.getClientRect = function(e) {
                var n = d.documentElement.scrollTop;
                if (d.documentElement.scrollLeft,
                e.getBoundingClientRect) {
                    var t = e.getBoundingClientRect();
                    return {
                        left: t.left,
                        right: t.right,
                        top: t.top - n,
                        bottom: t.bottom - n
                    }
                }
                var i = s(e)
                  , o = l(e);
                return {
                    left: i,
                    right: i + e.offsetWidth,
                    top: o,
                    bottom: o + e.offsetHeight
                }
            }
            ,
            n.getOffset = function(e) {
                var n = e.target;
                void 0 === n.offsetLeft && (n = n.parentNode);
                var t = h(n)
                  , i = {
                    x: f.pageXOffset + e.clientX,
                    y: f.pageYOffset + e.clientY
                };
                return {
                    offsetX: i.x - t.x,
                    offsetY: i.y - t.y
                }
            }
            ;
            var h = n.getPageCoord = function(e) {
                for (var n = {
                    x: 0,
                    y: 0
                }; e; )
                    n.x += e.offsetLeft,
                    n.y += e.offsetTop,
                    e = e.offsetParent;
                return n
            }
              , v = {
                before: function(e, n) {
                    return function() {
                        return e.call(this),
                        n.apply(this, arguments)
                    }
                },
                after: function(e, n) {
                    return function() {
                        var t = e.apply(this, arguments);
                        return n.call(this, t, arguments),
                        t
                    }
                }
            };
            n.decorator = v,
            n.mix = function(e) {
                for (var n, t, i = [].slice.call(arguments), o = i.length, r = 1; r < o; r++) {
                    n = i[r];
                    for (t in n)
                        n.hasOwnProperty(t) && (e[t] = n[t])
                }
                return e
            }
            ,
            n.clone = function(e) {
                var n = {};
                for (var t in e)
                    e.hasOwnProperty(t) && (n[t] = e[t]);
                return n
            }
            ,
            n.addHandler = function(e, n, t) {
                e.addEventListener ? e.addEventListener(n, t, !1) : e.attachEvent && e.attachEvent("on" + n, t)
            }
            ,
            n.removeHandler = function(e, n, t) {
                e.removeEventListener ? e.removeEventListener(n, t, !1) : e.detachEvent && e.detachEvent("on" + n, t)
            }
            ,
            n.getEvent = function(e) {
                return e ? e : f.event
            }
            ,
            n.getTarget = function(e) {
                return e.target || e.srcElement
            }
            ,
            n.bind = function(e, n) {
                var t = [].slice
                  , i = t.call(arguments, 2)
                  , o = function() {}
                  , r = function() {
                    return e.apply(this instanceof o ? this : n, i.concat(t.call(arguments)))
                };
                return o.prototype = e.prototype,
                r.prototype = new o,
                r
            }
            ,
            n.imageLoaded = function(e) {
                var n = p.defer()
                  , t = new Image;
                return t.onload = function() {
                    n.resolve(this)
                }
                ,
                t.onerror = function(e) {
                    n.reject({
                        type: "img",
                        error: e
                    })
                }
                ,
                setTimeout(function() {
                    n.reject({
                        type: "img",
                        error: "timeout"
                    })
                }, 5e3),
                t.src = e,
                n.promise
            }
            ,
            n.request = function(e) {
                var n = p.defer()
                  , t = e.data || {}
                  , i = ("jsonp_" + Math.random()).replace(".", "");
                f[i] = function(e) {
                    n.resolve(e)
                }
                ,
                t[e.callback || "callback"] = i,
                n.promise.always(function() {
                    try {
                        delete f[i]
                    } catch (e) {
                        f[i] = null
                    }
                });
                var o = d.createElement("script");
                o.src = e.url + (e.url.indexOf("?") === -1 ? "?" : "&") + c(t);
                var r = d.getElementsByTagName("script")[0];
                return r.parentNode.insertBefore(o, r),
                setTimeout(function() {
                    n.reject({
                        type: "request",
                        error: "timeout"
                    })
                }, 5e3),
                n.promise
            }
            ,
            n.getElementLeft = s,
            n.getElementTop = l,
            n.getNCPunish = u
        }
        , function(e, n, t) {
            "use strict";
            var i = t(2)
              , o = {
                log: "https://log.mmstat.com/",
                gm: "https://gm.mmstat.com/",
                gj: "https://gj.mmstat.com/"
            };
            n.mmstat_base = o;
            var r = i.isIEX(8)
              , a = i.isIEX(7)
              , c = i.isIEX(6)
              , s = !!(c || a || r)
              , l = document.getElementsByTagName("script")
              , u = "";
            if (null != l && l.length >= 1)
                for (var f = l.length - 1; f >= 0; f--)
                    if (l[f].src.indexOf("ncpc/nc.js") != -1) {
                        u = l[f].src;
                        break
                    }
            var d = "";
            d = u.indexOf("g.alicdn.com") != -1 ? "https://g.alicdn.com/AWSC/AWSC/awsc.js" : "https://aeis.alicdn.com/AWSC/AWSC/awsc.js";
            var p = {
                0: {
                    analyze: s ? "https://cf2.aliyun.com/nocaptcha/analyze.jsonp" : "https://cf.aliyun.com/nocaptcha/analyze.jsonp",
                    initialize: "https://cf.aliyun.com/nocaptcha/initialize.jsonp",
                    get_captcha: "https://diablo.alibaba.com/captcha/click/get.jsonp",
                    get_captcha_pre: "https://diablo.alibaba.com/captcha/click/pre_get.jsonp",
                    get_img: "https://diablo.alibaba.com/captcha/image/get.jsonp",
                    get_img_pre: "https://diablo.alibaba.com/captcha/image/pre_get.jsonp",
                    checkcode: s ? "https://cf2.aliyun.com/captcha/checkcode.jsonp" : "https://cf.aliyun.com/captcha/checkcode.jsonp",
                    cc: "https://diablo.alibaba.com/diablo/captcha_api/get.jsonp",
                    cc_pre: "https://diablo.alibaba.com/diablo/captcha_api/pre_get.jsonp",
                    awsc_Url: d,
                    umid_serUrl: "https://ynuf.aliapp.org/service/um.json",
                    api_prepare: "https://cf.aliyun.com/scratchCardSlide/prepare.jsonp",
                    api_report: "https://cf.aliyun.com/scratchCardSlide/dataReport.jsonp",
                    api_analyze: "https://cf.aliyun.com/scratchCardSlide/analyze.jsonp"
                },
                1: {
                    analyze: "https://cfus.aliyun.com/nocaptcha/analyze.jsonp",
                    initialize: "https://cfus.aliyun.com/nocaptcha/initialize.jsonp",
                    get_captcha: "https://usdiablo.alibaba.com/captcha/click/get.jsonp",
                    get_captcha_pre: "https://usdiablo.alibaba.com/captcha/click/pre_get.jsonp",
                    get_img: "https://usdiablo.alibaba.com/captcha/image/get.jsonp",
                    get_img_pre: "https://usdiablo.alibaba.com/captcha/image/pre_get.jsonp",
                    checkcode: "https://cfus.aliyun.com/captcha/checkcode.jsonp",
                    cc: "https://usdiablo.alibaba.com/diablo/captcha_api/get.jsonp",
                    cc_pre: "https://usdiablo.alibaba.com/diablo/captcha_api/pre_get.jsonp",
                    awsc_Url: d,
                    umid_serUrl: "https://us.ynuf.aliapp.org/service/um.json",
                    api_prepare: "https://cfus.aliyun.com/scratchCardSlide/prepare.jsonp",
                    api_report: "https://cfus.aliyun.com/scratchCardSlide/dataReport.jsonp",
                    api_analyze: "https://cfus.aliyun.com/scratchCardSlide/analyze.jsonp"
                },
                2: {
                    analyze: "https://cfun.aliyun.com/nocaptcha/analyze.jsonp",
                    initialize: "https://cfun.aliyun.com/nocaptcha/initialize.jsonp",
                    get_captcha: "https://diablo.alibaba.com/captcha/click/get.jsonp",
                    get_captcha_pre: "https://diablo.alibaba.com/captcha/click/pre_get.jsonp",
                    get_img: "https://diablo.alibaba.com/captcha/image/get.jsonp",
                    get_img_pre: "https://diablo.alibaba.com/captcha/image/pre_get.jsonp",
                    checkcode: "https://cfun.aliyun.com/captcha/checkcode.jsonp",
                    cc: "https://diablo.alibaba.com/diablo/captcha_api/get.jsonp",
                    cc_pre: "https://diablo.alibaba.com/diablo/captcha_api/pre_get.jsonp",
                    awsc_Url: d,
                    umid_serUrl: "https://ynuf.aliapp.org/service/um.json",
                    api_prepare: "https://cfun.aliyun.com/scratchCardSlide/prepare.jsonp",
                    api_report: "https://cfun.aliyun.com/scratchCardSlide/dataReport.jsonp",
                    api_analyze: "https://cfun.aliyun.com/scratchCardSlide/analyze.jsonp"
                }
            };
            n.URL_MAP = p
        }
        , , function(e, n, t) {
            "use strict";
            n.v = 1094,
            n.version = "v1.2.21"
        }
        , function(e, n, t) {
            "use strict";
            function i(e) {
                var n = ("_nc_r_" + Math.random()).replace(/\./, "")
                  , t = r[n] = new Image;
                t.onload = t.onerror = function() {
                    r[n] = null
                }
                ,
                t.src = e
            }
            var o = (t(3).URL_MAP,
            "//cf.aliyun.com/scratchCardSlide/dataReport.jsonp")
              , r = window;
            n.log = function(e, n) {
                var t, r, a = n || o, c = ["a", "t", "scene", "ns", "jsv", "usa", "p", "jsType", "os", "em", "ec"], s = [], l = c.length;
                for (t = 0; t < l; t++)
                    r = c[t],
                    e.hasOwnProperty(r) && s.push(r + "=" + encodeURIComponent(e[r]));
                s.push("r=" + Math.random()),
                i(a + "?" + s.join("&"))
            }
        }
        , , function(e, n, t) {
            "use strict";
            e.exports = function() {
                var e = [];
                return e.toString = function() {
                    for (var e = [], n = 0; n < this.length; n++) {
                        var t = this[n];
                        t[2] ? e.push("@media " + t[2] + "{" + t[1] + "}") : e.push(t[1])
                    }
                    return e.join("")
                }
                ,
                e.i = function(n, t) {
                    "string" == typeof n && (n = [[null, n, ""]]);
                    for (var i = {}, o = 0; o < this.length; o++) {
                        var r = this[o][0];
                        "number" == typeof r && (i[r] = !0)
                    }
                    for (o = 0; o < n.length; o++) {
                        var a = n[o];
                        "number" == typeof a[0] && i[a[0]] || (t && !a[2] ? a[2] = t : t && (a[2] = "(" + a[2] + ") and (" + t + ")"),
                        e.push(a))
                    }
                }
                ,
                e
            }
        }
        , , function(e, n) {
            function t(e, n) {
                for (var t = 0; t < e.length; t++) {
                    var i = e[t]
                      , o = d[i.id];
                    if (o) {
                        o.refs++;
                        for (var r = 0; r < o.parts.length; r++)
                            o.parts[r](i.parts[r]);
                        for (; r < i.parts.length; r++)
                            o.parts.push(s(i.parts[r], n))
                    } else {
                        for (var a = [], r = 0; r < i.parts.length; r++)
                            a.push(s(i.parts[r], n));
                        d[i.id] = {
                            id: i.id,
                            refs: 1,
                            parts: a
                        }
                    }
                }
            }
            function i(e) {
                for (var n = [], t = {}, i = 0; i < e.length; i++) {
                    var o = e[i]
                      , r = o[0]
                      , a = o[1]
                      , c = o[2]
                      , s = o[3]
                      , l = {
                        css: a,
                        media: c,
                        sourceMap: s
                    };
                    t[r] ? t[r].parts.push(l) : n.push(t[r] = {
                        id: r,
                        parts: [l]
                    })
                }
                return n
            }
            function o(e, n) {
                var t = g()
                  , i = m[m.length - 1];
                if ("top" === e.insertAt)
                    i ? i.nextSibling ? t.insertBefore(n, i.nextSibling) : t.appendChild(n) : t.insertBefore(n, t.firstChild),
                    m.push(n);
                else {
                    if ("bottom" !== e.insertAt)
                        throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                    t.appendChild(n)
                }
            }
            function r(e) {
                e.parentNode.removeChild(e);
                var n = m.indexOf(e);
                n >= 0 && m.splice(n, 1)
            }
            function a(e) {
                var n = document.createElement("style");
                return n.type = "text/css",
                o(e, n),
                n
            }
            function c(e) {
                var n = document.createElement("link");
                return n.rel = "stylesheet",
                o(e, n),
                n
            }
            function s(e, n) {
                var t, i, o;
                if (n.singleton) {
                    var s = v++;
                    t = h || (h = a(n)),
                    i = l.bind(null, t, s, !1),
                    o = l.bind(null, t, s, !0)
                } else
                    e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (t = c(n),
                    i = f.bind(null, t),
                    o = function() {
                        r(t),
                        t.href && URL.revokeObjectURL(t.href)
                    }
                    ) : (t = a(n),
                    i = u.bind(null, t),
                    o = function() {
                        r(t)
                    }
                    );
                return i(e),
                function(n) {
                    if (n) {
                        if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap)
                            return;
                        i(e = n)
                    } else
                        o()
                }
            }
            function l(e, n, t, i) {
                var o = t ? "" : i.css;
                if (e.styleSheet)
                    e.styleSheet.cssText = y(n, o);
                else {
                    var r = document.createTextNode(o)
                      , a = e.childNodes;
                    a[n] && e.removeChild(a[n]),
                    a.length ? e.insertBefore(r, a[n]) : e.appendChild(r)
                }
            }
            function u(e, n) {
                var t = n.css
                  , i = n.media;
                if (i && e.setAttribute("media", i),
                e.styleSheet)
                    e.styleSheet.cssText = t;
                else {
                    for (; e.firstChild; )
                        e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(t))
                }
            }
            function f(e, n) {
                var t = n.css
                  , i = n.sourceMap;
                i && (t += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
                var o = new Blob([t],{
                    type: "text/css"
                })
                  , r = e.href;
                e.href = URL.createObjectURL(o),
                r && URL.revokeObjectURL(r)
            }
            var d = {}
              , p = function(e) {
                var n;
                return function() {
                    return "undefined" == typeof n && (n = e.apply(this, arguments)),
                    n
                }
            }
              , _ = p(function() {
                return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
            })
              , g = p(function() {
                return document.head || document.getElementsByTagName("head")[0]
            })
              , h = null
              , v = 0
              , m = [];
            e.exports = function(e, n) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
                    throw new Error("The style-loader cannot be used in a non-browser environment");
                n = n || {},
                "undefined" == typeof n.singleton && (n.singleton = _()),
                "undefined" == typeof n.insertAt && (n.insertAt = "bottom");
                var o = i(e);
                return t(o, n),
                function(e) {
                    for (var r = [], a = 0; a < o.length; a++) {
                        var c = o[a]
                          , s = d[c.id];
                        s.refs--,
                        r.push(s)
                    }
                    if (e) {
                        var l = i(e);
                        t(l, n)
                    }
                    for (var a = 0; a < r.length; a++) {
                        var s = r[a];
                        if (0 === s.refs) {
                            for (var u = 0; u < s.parts.length; u++)
                                s.parts[u]();
                            delete d[s.id]
                        }
                    }
                }
            }
            ;
            var y = function() {
                var e = [];
                return function(n, t) {
                    return e[n] = t,
                    e.filter(Boolean).join("\n")
                }
            }()
        }
        , function(e, n, t) {
            "use strict";
            function i(e, n) {
                var t;
                for (t in n)
                    n.hasOwnProperty(t) && ((r[t] = r[t] || {})[e] = n[t])
            }
            function o(e, n) {
                var t = {
                    zh_CN: "cn",
                    zh_TW: "tw",
                    en_US: "en"
                };
                return e in t && (e = t[e]),
                r[n][e || "cn"]
            }
            var r = {
                SLIDER_LABEL: {
                    cn: "\u5411\u53f3\u6ed1\u52a8\u9a8c\u8bc1",
                    tw: "\u5411\u53f3\u6ed1\u52d5\u9a57\u8b49",
                    en: "Slide to verify",
                    ar_SA: "\u0642\u0645 \u0628\u0627\u0644\u062a\u0645\u0631\u064a\u0631 \u0644\u0644\u062a\u062d\u0642\u0642",
                    de_DE: "Schieben um zu \xfcberpr\xfcfen",
                    es_ES: "deslice para verificar",
                    fr_FR: "Faites glisser pour v\xe9rifier",
                    it_IT: "Scorri per verificare",
                    ja_JP: "\u30b9\u30e9\u30a4\u30c9\u3057\u3066\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044",
                    ko_KR: "\ubc00\uc5b4\uc11c \ud655\uc778\ud558\uae30",
                    ru_RU: "\u041f\u0440\u043e\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c",
                    th_TH: "\u0e40\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"
                },
                LOADING: {
                    cn: "\u52a0\u8f7d\u4e2d...",
                    tw: "\u52a0\u8f09\u4e2d...",
                    en: "Loading...",
                    ar_SA: "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644",
                    de_DE: "Lade",
                    es_ES: "Cargando",
                    fr_FR: "Chargement",
                    it_IT: "Sto caricando",
                    ja_JP: "\u66f4\u65b0\u3057\u3066\u3044\u307e\u3059",
                    ko_KR: "\ub85c\ub529",
                    ru_RU: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",
                    th_TH: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14"
                },
                CHECK_Y: {
                    cn: "\u9a8c\u8bc1\u901a\u8fc7",
                    tw: "\u9a57\u8b49\u901a\u904e",
                    en: "Verified",
                    ar_SA: "\u062a\u0645 \u0627\u0644\u062a\u062d\u0642\u0642",
                    de_DE: "Verifiziert",
                    es_ES: "Verificado",
                    fr_FR: "V\xe9rifi\xe9",
                    it_IT: "Verificato",
                    ja_JP: "\u78ba\u8a8d\u6e08\u307f",
                    ko_KR: "\ud655\uc778\ub428",
                    ru_RU: "\u041f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043e",
                    th_TH: "\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e41\u0e25\u0e49\u0e27"
                },
                CHECK_N: {
                    cn: "\u9a8c\u8bc1\u672a\u901a\u8fc7",
                    tw: "\u9a57\u8b49\u672a\u901a\u904e",
                    en: "Not Verified",
                    ar_SA: "\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u062a\u062d\u0642\u0642",
                    de_DE: "Nicht verifiziert",
                    es_ES: "No verificado",
                    fr_FR: "Non v\xe9rifi\xe9",
                    it_IT: "Non verificato",
                    ja_JP: "\u78ba\u8a8d\u3055\u308c\u3066\u3044\u307e\u305b\u3093",
                    ko_KR: "\uc778\uc99d\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4",
                    ru_RU: "\u043d\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u043e",
                    th_TH: "\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"
                },
                TEXTBOX_HOLDER: {
                    cn: "\u9a8c\u8bc1\u7801",
                    tw: "\u9a57\u8b49\u78bc",
                    en: "Captcha",
                    ar_SA: "\u0631\u0645\u0632 \u0627\u0644\u062d\u0645\u0627\u064a\u0629",
                    de_DE: "Captcha",
                    es_ES: "Captcha",
                    fr_FR: "Captcha",
                    it_IT: "Captcha",
                    ja_JP: "\u30ad\u30e3\u30d7\u30c1\u30e3",
                    ko_KR: "\ubcf4\uc548\ubb38\uc790",
                    ru_RU: "\u043a\u043e\u0434 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",
                    th_TH: "Captcha"
                },
                BUTTON_OK: {
                    cn: "\u786e \u5b9a",
                    tw: "\u78ba \u5b9a",
                    en: "OK",
                    ar_SA: "\u0645\u0648\u0627\u0641\u0642",
                    de_DE: "OK",
                    es_ES: "OK",
                    fr_FR: "OK",
                    it_IT: "OK",
                    ja_JP: "\u306f\u3044",
                    ko_KR: "\uc608",
                    ru_RU: "\u0445\u043e\u0440\u043e\u0448\u043e",
                    th_TH: "OK"
                },
                TIPS_TITLE: {
                    cn: "\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",
                    tw: "\u9a57\u8b49\u78bc\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u8f38\u5165",
                    en: "Please try again",
                    ar_SA: "\u064a\u0631\u062c\u0649 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629",
                    de_DE: "Bitte versuchen Sie es erneut",
                    es_ES: "Por favor, int\xe9ntelo de nuevo",
                    fr_FR: "Veuillez r\xe9essayer",
                    it_IT: "Per favore riprova",
                    ja_JP: "\u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044",
                    ko_KR: "\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694",
                    ru_RU: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437",
                    th_TH: "\u0e01\u0e23\u0e38\u0e13\u0e32\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07"
                },
                ERROR_TITLE: {
                    cn: "\u975e\u5e38\u62b1\u6b49\uff0c\u8fd9\u51fa\u9519\u4e86",
                    tw: "\u975e\u5e38\u62b1\u6b49\uff0c\u9019\u51fa\u932f\u4e86",
                    en: "Sorry, something wrong",
                    ar_SA: "\u0639\u0630\u0631\u0627\u060c \u0634\u064a\u0621 \u0645\u0627 \u062e\u0637\u0623....",
                    de_DE: "Sorry, etwas ist schief gelaufen ....",
                    es_ES: "Lo sentimos, pero algo est\xe1 mal ....",
                    fr_FR: "D\xe9sol\xe9, il y a un probl\xe8me ....",
                    it_IT: "Mi spiace, c'\xe8 qualcosa di sbagliato",
                    ja_JP: "\u3059\u307f\u307e\u305b\u3093\u304c\u3001\u4f55\u304b\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059...",
                    ko_KR: "\ubbf8\uc548\ud569\ub2c8\ub2e4, \ubb34\uc5c7\uc778\uac00 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4\u2026",
                    ru_RU: "\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0447\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a\u2026",
                    th_TH: "\u0e02\u0e2d\u0e2d\u0e20\u0e31\u0e22 \u0e21\u0e35\u0e1a\u0e32\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14"
                },
                ERROR_RELOAD: {
                    cn: "\u5237\u65b0",
                    tw: "\u5237\u65b0",
                    en: "Reload",
                    ar_SA: "\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u062d\u0645\u064a\u0644",
                    de_DE: "Neu laden",
                    es_ES: "Recargar",
                    fr_FR: "Recharger",
                    it_IT: "Ricarica",
                    ja_JP: "\u30ea\u30ed\u30fc\u30c9",
                    ko_KR: "\ub9ac\ub85c\ub4dc",
                    ru_RU: "\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430",
                    th_TH: "\u0e42\u0e2b\u0e25\u0e14\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07"
                },
                ERROR_FEEDBACK: {
                    cn: "\u53cd\u9988",
                    tw: "\u53cd\u994b",
                    en: "Feedback",
                    ar_SA: "\u062a\u0639\u0644\u064a\u0642",
                    de_DE: "Feedback",
                    es_ES: "Comentar",
                    fr_FR: "Commentaires",
                    it_IT: "retroazione",
                    ja_JP: "\u30d5\u30a3\u30f3\u30c9\u30d0\u30c3\u30b0",
                    ko_KR: "\ub9ac\ub85c\ub4dc",
                    ru_RU: "\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c",
                    th_TH: "\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e41\u0e19\u0e30"
                },
                OVERLAY_INFORM: {
                    cn: "\u7ecf\u68c0\u6d4b\u4f60\u5f53\u524d\u64cd\u4f5c\u73af\u5883\u5b58\u5728\u98ce\u9669\uff0c\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
                    tw: "\u7d93\u6aa2\u6e2c\u4f60\u7576\u524d\u64cd\u4f5c\u74b0\u5883\u5b58\u5728\u98a8\u96aa\uff0c\u8acb\u8f38\u5165\u9a57\u8b49\u78bc",
                    en: "Risk has been detected with your current operating environment, please enter the verification code.",
                    ar_SA: "\u062a\u0645 \u0627\u0644\u0643\u0634\u0641 \u0639\u0646 \u0645\u062e\u0627\u0637\u0631 \u0641\u064a \u0628\u064a\u0626\u0629 \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u062d\u0627\u0644\u064a\u0629 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0643 \u060c \u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0631\u0645\u0632 \u0627\u0644\u062a\u062d\u0642\u0642",
                    de_DE: "In Ihrer aktuellen Betriebsumgebung wurde ein Risiko festgestellt. Geben Sie den Best\xe4tigungscode ein",
                    es_ES: "Se ha detectado un riesgo con su entorno operativo actual, ingrese el c\xf3digo de verificaci\xf3n",
                    fr_FR: "Un risque a \xe9t\xe9 d\xe9tect\xe9 avec votre environnement d'exploitation actuel, veuillez saisir le code de v\xe9rification",
                    it_IT: "\xc8 stato rilevato un rischio con il tuo attuale ambiente operativo, inserisci il codice di verifica",
                    ja_JP: "\u73fe\u5728\u306e\u74b0\u5883\u3067\u30ea\u30b9\u30af\u304c\u691c\u51fa\u3055\u308c\u307e\u3057\u305f\u3001\u78ba\u8a8d\u30b3\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",
                    ko_KR: "\ud604\uc7ac \uc6b4\uc601 \ud658\uacbd\uc5d0\uc11c \uc704\ud5d8\uc774 \uac10\uc9c0\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ud655\uc778 \ucf54\ub4dc\ub97c \uc785\ub825\ud558\uc138\uc694.",
                    ru_RU: "\u0412 \u0432\u0430\u0448\u0435\u0439 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0440\u0435\u0434\u0435 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d \u0440\u0438\u0441\u043a, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043e\u0447\u043d\u044b\u0439 \u043a\u043e\u0434",
                    th_TH: "\u0e15\u0e23\u0e27\u0e08\u0e1e\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e40\u0e2a\u0e35\u0e48\u0e22\u0e07\u0e43\u0e19\u0e2a\u0e20\u0e32\u0e1e\u0e41\u0e27\u0e14\u0e25\u0e49\u0e2d\u0e21\u0e01\u0e32\u0e23\u0e17\u0e33\u0e07\u0e32\u0e19\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e42\u0e1b\u0e23\u0e14\u0e1b\u0e49\u0e2d\u0e19\u0e23\u0e2b\u0e31\u0e2a\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"
                },
                FEEDBACK_URL: {
                    cn: "https://survey.taobao.com/survey/QgzQDdDd",
                    tw: "https://survey.taobao.com/survey/40BtED_K",
                    en: "https://survey.taobao.com/survey/Q0dcgfAv",
                    ar_SA: "https://survey.taobao.com/survey/Q0dcgfAv",
                    de_DE: "https://survey.taobao.com/survey/Q0dcgfAv",
                    es_ES: "https://survey.taobao.com/survey/Q0dcgfAv",
                    fr_FR: "https://survey.taobao.com/survey/Q0dcgfAv",
                    it_IT: "https://survey.taobao.com/survey/Q0dcgfAv",
                    ja_JP: "https://survey.taobao.com/survey/Q0dcgfAv",
                    ko_KR: "https://survey.taobao.com/survey/Q0dcgfAv",
                    ru_RU: "https://survey.taobao.com/survey/Q0dcgfAv",
                    th_TH: "https://survey.taobao.com/survey/Q0dcgfAv"
                },
                CLICK_LABEL_READY: {
                    cn: "\u70b9\u51fb\u5706\u5708\u9a8c\u8bc1",
                    tw: "\u9ede\u64ca\u5706\u5708\u9a57\u8b49",
                    en: "Click the circle to verify",
                    ar_SA: "\u0627\u0646\u0642\u0631 \u0641\u0648\u0642 \u0627\u0644\u062f\u0627\u0626\u0631\u0629 \u0644\u0644\u062a\u062d\u0642\u0642",
                    de_DE: "Klicken Sie zur Best\xe4tigung auf den Kreis",
                    es_ES: "Haga clic en el c\xedrculo para verificar",
                    fr_FR: "Cliquez sur le cercle pour v\xe9rifier",
                    it_IT: "Fare clic sul cerchio per verificare",
                    ja_JP: "\u30b5\u30fc\u30af\u30eb\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u78ba\u8a8d\u3057\u307e\u3059",
                    ko_KR: "\ud655\uc778\ud558\ub824\uba74 \uc6d0\uc744 \ud074\ub9ad\ud558\uc138\uc694.",
                    ru_RU: "\u0429\u0435\u043b\u043a\u043d\u0438\u0442\u0435 \u043a\u0440\u0443\u0433, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c",
                    th_TH: "\u0e04\u0e25\u0e34\u0e01\u0e27\u0e07\u0e01\u0e25\u0e21\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"
                }
            };
            n.i18n = r,
            n.upLang = i,
            n.trans = o
        }
        , function(e, n, t) {
            "use strict";
            var i = window
              , o = document.getElementsByTagName("script")
              , r = "";
            if (null != o && o.length >= 1)
                for (var a = o.length - 1; a >= 0; a--)
                    if (o[a].src.indexOf("nch5/index.js") != -1) {
                        r = o[a].src;
                        break
                    }
            var c = "";
            c = r.indexOf("g.alicdn.com") != -1 ? "https://g.alicdn.com/AWSC/AWSC/awsc.js" : "https://aeis.alicdn.com/AWSC/AWSC/awsc.js";
            var s = {
                0: {
                    analyze: "https://cf.aliyun.com/nocaptcha/analyze.jsonp",
                    initialize: "https://cf.aliyun.com/nocaptcha/initialize.jsonp",
                    get_captcha: "https://pin.aliyun.com/get_captcha/ver3",
                    get_img: "https://diablo.alibaba.com/captcha/image/get.jsonp",
                    checkcode: "https://cf.aliyun.com/captcha/checkcode.jsonp",
                    uab_Url: c,
                    umid_serUrl: "https://ynuf.aliapp.org/service/um.json",
                    api_prepare: "https://cf.aliyun.com/scratchCardSlide/prepare.jsonp",
                    api_report: "https://cf.aliyun.com/scratchCardSlide/dataReport.jsonp",
                    api_analyze: "https://cf.aliyun.com/scratchCardSlide/analyze.jsonp"
                },
                1: {
                    analyze: "https://cfus.aliyun.com/nocaptcha/analyze.jsonp",
                    initialize: "https://cfus.aliyun.com/nocaptcha/initialize.jsonp",
                    get_captcha: "https://captcha.alibaba.com/get_captcha/ver3",
                    get_img: "https://usdiablo.alibaba.com/captcha/image/get.jsonp",
                    checkcode: "https://cfus.aliyun.com/captcha/checkcode.jsonp",
                    uab_Url: c,
                    umid_serUrl: "https://us.ynuf.aliapp.org/service/um.json",
                    api_prepare: "https://cfus.aliyun.com/scratchCardSlide/prepare.jsonp",
                    api_report: "https://cfus.aliyun.com/scratchCardSlide/dataReport.jsonp",
                    api_analyze: "https://cfus.aliyun.com/scratchCardSlide/analyze.jsonp"
                },
                2: {
                    analyze: "https://cfun.aliyun.com/nocaptcha/analyze.jsonp",
                    initialize: "https://cfun.aliyun.com/nocaptcha/initialize.jsonp",
                    get_captcha: "https://pin.aliyun.com/get_captcha/ver3",
                    get_img: "https://diablo.alibaba.com/captcha/image/get.jsonp",
                    checkcode: "https://cfun.aliyun.com/captcha/checkcode.jsonp",
                    uab_Url: c,
                    umid_serUrl: "https://ynuf.aliapp.org/service/um.json",
                    api_prepare: "https://cfun.aliyun.com/scratchCardSlide/prepare.jsonp",
                    api_report: "https://cfun.aliyun.com/scratchCardSlide/dataReport.jsonp",
                    api_analyze: "https://cfun.aliyun.com/scratchCardSlide/analyze.jsonp"
                }
            };
            if ("file:" === i.location.protocol) {
                var l, u, f;
                for (l in s)
                    if (s.hasOwnProperty(l)) {
                        u = s[l];
                        for (f in u)
                            u.hasOwnProperty(f) && 0 === u[f].indexOf("//") && (u[f] = "http:" + u[f])
                    }
            }
            n.URL_MAP = s
        }
        , function(e, n, t) {
            "use strict";
            !function() {
                var t = {
                    VERSION: "2.4.0",
                    Result: {
                        SUCCEEDED: 1,
                        NOTRANSITION: 2,
                        CANCELLED: 3,
                        PENDING: 4
                    },
                    Error: {
                        INVALID_TRANSITION: 100,
                        PENDING_TRANSITION: 200,
                        INVALID_CALLBACK: 300
                    },
                    WILDCARD: "*",
                    ASYNC: "async",
                    create: function(e, n) {
                        var i = "string" == typeof e.initial ? {
                            state: e.initial
                        } : e.initial
                          , o = e.terminal || e["final"]
                          , r = n || e.target || {}
                          , a = e.events || []
                          , c = e.callbacks || {}
                          , s = {}
                          , l = {}
                          , u = function(e) {
                            var n = Array.isArray(e.from) ? e.from : e.from ? [e.from] : [t.WILDCARD];
                            s[e.name] = s[e.name] || {};
                            for (var i = 0; i < n.length; i++)
                                l[n[i]] = l[n[i]] || [],
                                l[n[i]].push(e.name),
                                s[e.name][n[i]] = e.to || n[i];
                            e.to && (l[e.to] = l[e.to] || [])
                        };
                        i && (i.event = i.event || "startup",
                        u({
                            name: i.event,
                            from: "none",
                            to: i.state
                        }));
                        for (var f = 0; f < a.length; f++)
                            u(a[f]);
                        for (var d in s)
                            s.hasOwnProperty(d) && (r[d] = t.buildEvent(d, s[d]));
                        for (var d in c)
                            c.hasOwnProperty(d) && (r[d] = c[d]);
                        return r.current = "none",
                        r.is = function(e) {
                            return Array.isArray(e) ? e.indexOf(this.current) >= 0 : this.current === e
                        }
                        ,
                        r.can = function(e) {
                            return !this.transition && void 0 !== s[e] && (s[e].hasOwnProperty(this.current) || s[e].hasOwnProperty(t.WILDCARD))
                        }
                        ,
                        r.cannot = function(e) {
                            return !this.can(e)
                        }
                        ,
                        r.transitions = function() {
                            return (l[this.current] || []).concat(l[t.WILDCARD] || [])
                        }
                        ,
                        r.isFinished = function() {
                            return this.is(o)
                        }
                        ,
                        r.error = e.error || function(e, n, t, i, o, r, a) {
                            throw a || r
                        }
                        ,
                        r.states = function() {
                            return Object.keys(l).sort()
                        }
                        ,
                        i && !i.defer && r[i.event](),
                        r
                    },
                    doCallback: function(e, n, i, o, r, a) {
                        if (n)
                            try {
                                return n.apply(e, [i, o, r].concat(a))
                            } catch (c) {
                                return e.error(i, o, r, a, t.Error.INVALID_CALLBACK, "an exception occurred in a caller-provided callback function", c)
                            }
                    },
                    beforeAnyEvent: function(e, n, i, o, r) {
                        return t.doCallback(e, e.onbeforeevent, n, i, o, r)
                    },
                    afterAnyEvent: function(e, n, i, o, r) {
                        return t.doCallback(e, e.onafterevent || e.onevent, n, i, o, r)
                    },
                    leaveAnyState: function(e, n, i, o, r) {
                        return t.doCallback(e, e.onleavestate, n, i, o, r)
                    },
                    enterAnyState: function(e, n, i, o, r) {
                        return t.doCallback(e, e.onenterstate || e.onstate, n, i, o, r)
                    },
                    changeState: function(e, n, i, o, r) {
                        return t.doCallback(e, e.onchangestate, n, i, o, r)
                    },
                    beforeThisEvent: function(e, n, i, o, r) {
                        return t.doCallback(e, e["onbefore" + n], n, i, o, r)
                    },
                    afterThisEvent: function(e, n, i, o, r) {
                        return t.doCallback(e, e["onafter" + n] || e["on" + n], n, i, o, r)
                    },
                    leaveThisState: function(e, n, i, o, r) {
                        return t.doCallback(e, e["onleave" + i], n, i, o, r)
                    },
                    enterThisState: function(e, n, i, o, r) {
                        return t.doCallback(e, e["onenter" + o] || e["on" + o], n, i, o, r)
                    },
                    beforeEvent: function(e, n, i, o, r) {
                        if (!1 === t.beforeThisEvent(e, n, i, o, r) || !1 === t.beforeAnyEvent(e, n, i, o, r))
                            return !1
                    },
                    afterEvent: function(e, n, i, o, r) {
                        t.afterThisEvent(e, n, i, o, r),
                        t.afterAnyEvent(e, n, i, o, r)
                    },
                    leaveState: function(e, n, i, o, r) {
                        var a = t.leaveThisState(e, n, i, o, r)
                          , c = t.leaveAnyState(e, n, i, o, r);
                        return !1 !== a && !1 !== c && (t.ASYNC === a || t.ASYNC === c ? t.ASYNC : void 0)
                    },
                    enterState: function(e, n, i, o, r) {
                        t.enterThisState(e, n, i, o, r),
                        t.enterAnyState(e, n, i, o, r)
                    },
                    buildEvent: function(e, n) {
                        return function() {
                            var i = this.current
                              , o = n[i] || (n[t.WILDCARD] != t.WILDCARD ? n[t.WILDCARD] : i) || i
                              , r = Array.prototype.slice.call(arguments);
                            if (this.transition)
                                return this.error(e, i, o, r, t.Error.PENDING_TRANSITION, "event " + e + " inappropriate because previous transition did not complete");
                            if (this.cannot(e))
                                return this.error(e, i, o, r, t.Error.INVALID_TRANSITION, "event " + e + " inappropriate in current state " + this.current);
                            if (!1 === t.beforeEvent(this, e, i, o, r))
                                return t.Result.CANCELLED;
                            if (i === o)
                                return t.afterEvent(this, e, i, o, r),
                                t.Result.NOTRANSITION;
                            var a = this;
                            this.transition = function() {
                                return a.transition = null,
                                a.current = o,
                                t.enterState(a, e, i, o, r),
                                t.changeState(a, e, i, o, r),
                                t.afterEvent(a, e, i, o, r),
                                t.Result.SUCCEEDED
                            }
                            ,
                            this.transition.cancel = function() {
                                a.transition = null,
                                t.afterEvent(a, e, i, o, r)
                            }
                            ;
                            var c = t.leaveState(this, e, i, o, r);
                            return !1 === c ? (this.transition = null,
                            t.Result.CANCELLED) : t.ASYNC === c ? t.Result.PENDING : this.transition ? this.transition() : void 0
                        }
                    }
                };
                "undefined" != typeof e && e.exports && (n = e.exports = t),
                n.StateMachine = t
            }()
        }
        , function(e, n, t) {
            "use strict";
            var i = "//cf.aliyun.com";
            e.exports = {
                min_width: 300,
                min_height: 100,
                default_stroke_width: 16,
                min_events_count: 30,
                max_retry: 3,
                api_prepare: i + "/scratchCardSlide/prepare.jsonp",
                api_report: i + "/scratchCardSlide/dataReport.jsonp",
                api_analyze: i + "/scratchCardSlide/analyze.jsonp",
                obj_ok: "//img.alicdn.com/tfs/TB1OLQ7SFXXXXaoapXXXXXXXXXX-57-70.png",
                obj_fail: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                obj_size: 70,
                bg_back: "//img.alicdn.com/tps/TB1ml9hPFXXXXcjXFXXXXXXXXXX-100-80.png",
                bg_front: "//img.alicdn.com/tps/TB1531mPFXXXXc_XpXXXXXXXXXX-100-80.png",
                err_TIMEOUT_uab: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                err_TIMEOUT_um: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                err_fail_prepare: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                err_fail_analyze: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                grid_size: 8,
                action_timeout: 6e4,
                default_options: {
                    language: "cn",
                    objects: ["//img.alicdn.com/tfs/TB1NYk7SFXXXXcWaXXXXXXXXXXX-57-69.png", "//img.alicdn.com/tfs/TB12q8sSVXXXXcSXFXXXXXXXXXX-57-67.png"],
                    elements: ["//img.alicdn.com/tfs/TB1NYk7SFXXXXcWaXXXXXXXXXXX-57-69.png", "//img.alicdn.com/tfs/TB12q8sSVXXXXcSXFXXXXXXXXXX-57-67.png"],
                    obj_ok: "//img.alicdn.com/tfs/TB1OLQ7SFXXXXaoapXXXXXXXXXX-57-70.png",
                    obj_fail: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                    bg_front: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAMAAADY1yDdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefk5w+ruswAAAAfSURBVFjD7cExAQAAAMKg9U9tCU+gAAAAAAAAAIC3AR+QAAFPlUGoAAAAAElFTkSuQmCC",
                    obj_error: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                    bg_back_prepared: "//img.alicdn.com/tps/TB1skE5SFXXXXb3XXXXXXXXXXXX-100-80.png",
                    bg_back: "//img.alicdn.com/tfs/TB1w2oOSFXXXXb4XpXXXXXXXXXX-100-80.png",
                    bg_back_fail: "//img.alicdn.com/tfs/TB1w2oOSFXXXXb4XpXXXXXXXXXX-100-80.png",
                    bg_back_pass: "//img.alicdn.com/tfs/TB1KDxCSVXXXXasXFXXXXXXXXXX-100-80.png"
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            function i(e, n) {
                var t, i, r = n ? {} : e;
                for (t in e)
                    e.hasOwnProperty(t) && (i = e[t],
                    "string" == typeof i && (i = [i]),
                    r[t] = '<span class="nc-lang-cnt" data-nc-lang="' + t + '">' + o(d[t], i) + "</span>");
                return r
            }
            function o(e, n) {
                return (e + "").replace(/\\?\{\s*([^{}\s]+)\s*\}/g, function(e, t) {
                    return "\\" === e.charAt(0) ? e.slice(1) : n[t] || ""
                })
            }
            function r(e, n) {
                var t, o = p[e] = p[e] || {};
                n = i(n, !0);
                for (t in n)
                    n.hasOwnProperty(t) && (o[t] = n[t])
            }
            function a(e, n) {
                var t, o = {}, r = p[e] = p[e] || {};
                for (t in r)
                    r.hasOwnProperty(t) && (o[t] = r[t]);
                n = i(n, !0);
                for (t in n)
                    n.hasOwnProperty(t) && (o[t] = n[t]);
                return o
            }
            function c(e, n) {
                return e.replace(/(javascript:NoCaptcha.reset\()(\))/gi, "$1" + n + "$2")
            }
            var s, l = "javascript:NoCaptcha.reset()", u = "https://survey.taobao.com/survey/AMnMVgrS4?type=%TYPE&str=%STR", f = "{0}", d = {
                _ggk_guide: "{0}",
                _ggk_start: f,
                _ggk_net_err: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                _ggk_too_fast: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                _ggk_action_timeout: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                _ggk_fail: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                _ggk_success: f,
                _ggk_loading: "{0}"
            }, p = {
                cn: {
                    _ggk_guide: "\u8bf7\u5728\u5c4f\u5e55\u4e0a\u6ed1\u52a8\uff0c\u522e\u51fa\u4e24\u53ea\u5c0f\u9e21",
                    _ggk_start: "",
                    _ggk_net_err: ["\u7f51\u7edc\u5b9e\u5728\u4e0d\u7ed9\u529b<br/>\u8bf7", l, "\u518d\u6765\u4e00\u6b21", "\u6216", u, "\u53cd\u9988\u95ee\u9898"],
                    _ggk_too_fast: ["\u60a8\u522e\u5f97\u592a\u5feb\u5566<br/>\u8bf7", l, "\u518d\u6765\u4e00\u6b21", "\u6216", u, "\u53cd\u9988\u95ee\u9898"],
                    _ggk_action_timeout: ["\u6211\u7b49\u5f97\u592a\u4e45\u5566<br/>\u8bf7", l, "\u518d\u6765\u4e00\u6b21", "\u6216", u, "\u53cd\u9988\u95ee\u9898"],
                    _ggk_fail: ["\u5440\uff0c\u5c0f\u9e21\u9003\u8dd1\u4e86<br/>\u8bf7", l, "\u518d\u6765\u4e00\u6b21", "\u6216", u, "\u53cd\u9988\u95ee\u9898"],
                    _ggk_loading: "\u52a0\u8f7d\u4e2d",
                    _ggk_success: "\u606d\u559c\u60a8\u6210\u529f\u522e\u51fa\u5c0f\u9e21\uff0c\u7ee7\u7eed\u4e0b\u4e00\u6b65\u64cd\u4f5c\u5427"
                },
                tw: {
                    _ggk_guide: "\u8acb\u5728\u87a2\u5e55\u4e0a\u6ed1\u52d5\uff0c\u522e\u51fa\u5169\u96bb\u5c0f\u96de",
                    _ggk_start: "",
                    _ggk_net_err: ["\u7db2\u8def\u5be6\u5728\u4e0d\u7d66\u529b<br/>\u8acb", l, "\u518d\u6765\u4e00\u6b21", "\u6216", u, "\u53cd\u6620\u554f\u984c"],
                    _ggk_too_fast: ["\u60a8\u522e\u5f97\u592a\u5feb\u5566<br/>\u8acb", l, "\u518d\u6765\u4e00\u6b21", "\u6216", u, "\u53cd\u6620\u554f\u984c"],
                    _ggk_action_timeout: ["\u6211\u7b49\u5f97\u592a\u4e45\u5566<br/>\u8acb", l, "\u518d\u6765\u4e00\u6b21", "\u6216", u, "\u53cd\u6620\u554f\u984c"],
                    _ggk_fail: ["\u5440\uff0c\u5c0f\u96de\u9003\u8dd1\u4e86<br/>\u8acb", l, "\u518d\u6765\u4e00\u6b21", "\u6216", u, "\u53cd\u6620\u554f\u984c"],
                    _ggk_loading: "\u52a0\u8f09\u4e2d",
                    _ggk_success: "\u606d\u559c\u60a8\u6210\u529f\u522e\u51fa\u5c0f\u96de\uff0c\u7e7c\u7e8c\u4e0b\u4e00\u6b65\u64cd\u4f5c\u5427"
                },
                en: {
                    _ggk_guide: "Slide to scratch out two chickens",
                    _ggk_start: "",
                    _ggk_net_err: ["Problem with the network<br/>Please", l, "try again", "or", u, "report your problem"],
                    _ggk_too_fast: ["You were being too fast<br/>Please", l, "try again", "or", u, "report your problem"],
                    _ggk_action_timeout: ["You've been idled for too long<br/>Please", l, "try again", "or", u, "report your problem"],
                    _ggk_fail: ["Oops, the chickens ran away<br/>Please", l, "try again", "or", u, "report your problem"],
                    _ggk_loading: "Loading",
                    _ggk_success: "Congratulations! You've got the chickens!"
                },
                es_ES: {
                    _ggk_guide: "Deslizar para rascar dos pollos",
                    _ggk_start: "",
                    _ggk_net_err: ["Hay problemas con la red.", l, "Vuelve a intentarlo ", "o", u, " informa del problema"],
                    _ggk_too_fast: ["\xa1Has sido demasiado r\xe1pido.", l, "Vuelve a intentarlo ", "o", u, " informa del problema"],
                    _ggk_action_timeout: ["Se ha acabado el tiempo.", l, "Vuelve a intentarlo ", "o", u, " informa del problema"],
                    _ggk_fail: ["\xa1Vaya! Los pollos han huido.", l, "Vuelve a intentarlo ", "o", u, " informa del problema"],
                    _ggk_loading: "Cargando",
                    _ggk_success: "\xa1Enhorabuena! \xa1Has atrapado los pollos!"
                },
                pl_PL: {
                    _ggk_guide: "Przesu\u0144, aby zdoby\u0107 dwa kurczaki",
                    _ggk_start: "",
                    _ggk_net_err: ["Problem z sieci\u0105.", l, "Spr\xf3buj ponownie ", "lub", u, " zg\u0142o\u015b sw\xf3j problem"],
                    _ggk_too_fast: ["Za szybko.", l, "Spr\xf3buj ponownie ", "lub", u, " zg\u0142o\u015b sw\xf3j problem"],
                    _ggk_action_timeout: ["Bezczynno\u015b\u0107 trwa\u0142a zbyt d\u0142ugo.", l, "Spr\xf3buj ponownie ", "lub", u, " zg\u0142o\u015b sw\xf3j problem"],
                    _ggk_fail: ["Ups, kurczaki uciek\u0142y.", l, "Spr\xf3buj ponownie ", "lub", u, " zg\u0142o\u015b sw\xf3j problem"],
                    _ggk_loading: "\u0141aduj\u0119",
                    _ggk_success: "Gratulacje! Uda\u0142o Ci si\u0119 zdoby\u0107 kurczaki!"
                },
                fr_FR: {
                    _ggk_guide: "Faites glisser sur l'\xe9cran pour gratter deux poulets",
                    _ggk_start: "",
                    _ggk_net_err: ["Probl\xe8me de r\xe9seau.", l, "Veuillez r\xe9essayer ", "ou", u, " signaler votre probl\xe8me"],
                    _ggk_too_fast: ["Vous avez \xe9t\xe9 trop rapide.", l, "Veuillez r\xe9essayer ", "ou", u, " signaler votre probl\xe8me"],
                    _ggk_action_timeout: ["D\xe9lai d'attente d\xe9pass\xe9.", l, "Veuillez r\xe9essayer ", "ou", u, " signaler votre probl\xe8me"],
                    _ggk_fail: ["Oups, les poulets se sont enfuit.", l, "Veuillez r\xe9essayer ", "ou", u, " signaler votre probl\xe8me"],
                    _ggk_loading: "Chargement",
                    _ggk_success: "Bravo\xa0! Les poulets sont \xe0 vous'!"
                },
                de_DE: {
                    _ggk_guide: "Wischen Sie auf dem Bildschim, um zwei H\xfchner zu kratzen",
                    _ggk_start: "",
                    _ggk_net_err: ["Netzwerkproblem. Bitte.", l, "versuchen Sie es erneut ", "oder", u, " melden Sie ein Problem"],
                    _ggk_too_fast: ["Zu schnell. Bitte.", l, "versuchen Sie es erneut ", "oder", u, " melden Sie ein Problem"],
                    _ggk_action_timeout: ["Zeit\xfcberschreitung, bitte.", l, "versuchen Sie es erneut ", "oder", u, " melden Sie ein Problem"],
                    _ggk_fail: ["Hoppla, die H\xfchner sind davongelaufen.", l, "versuchen Sie es erneut ", "oder", u, " melden Sie ein Problem"],
                    _ggk_loading: "Lade",
                    _ggk_success: "Gl\xfcckwunsch! Sie haben die H\xfchner erwischt!"
                },
                it_IT: {
                    _ggk_guide: "Scorri sullo schermo per grattare due polli",
                    _ggk_start: "",
                    _ggk_net_err: ["Problemi con la rete.", l, "Riprova ", "o", u, " segnala il problema"],
                    _ggk_too_fast: ["Sei stato troppo veloce.", l, "Riprova ", "o", u, " segnala il problema"],
                    _ggk_action_timeout: ["Tempo scaduto.", l, "Riprova ", "o", u, " segnala il problema"],
                    _ggk_fail: ["Ops... i polli sono scappati.", l, "Riprova ", "o", u, " segnala il problema"],
                    _ggk_loading: "Sto caricando",
                    _ggk_success: "Complimenti! Hai preso i polli!"
                },
                ru_RU: {
                    _ggk_guide: "\u041f\u0440\u043e\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u043b\u044c\u0446\u0435\u043c \u043f\u043e \u044d\u043a\u0440\u0430\u043d\u0443, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0446\u0430\u0440\u0430\u043f\u0430\u0442\u044c \u0434\u0432\u0443\u0445 \u0446\u044b\u043f\u043b\u044f\u0442",
                    _ggk_start: "",
                    _ggk_net_err: ["\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u0435\u0442\u044c\u044e.", l, "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 ", "\u0438\u043b\u0438", u, " \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435"],
                    _ggk_too_fast: ["\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u044b\u0441\u0442\u0440\u043e.", l, "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 ", "\u0438\u043b\u0438", u, " \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435"],
                    _ggk_action_timeout: ["\u0412\u0440\u0435\u043c\u044f \u0438\u0441\u0442\u0435\u043a\u043b\u043e.", l, "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 ", "\u0438\u043b\u0438", u, " \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435"],
                    _ggk_fail: ["\u041e\u0439, \u0446\u044b\u043f\u043b\u044f\u0442\u0430 \u0443\u0431\u0435\u0436\u0430\u043b\u0438.", l, "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 ", "\u0438\u043b\u0438", u, " \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435"],
                    _ggk_loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",
                    _ggk_success: "\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c! \u0412\u044b \u043f\u043e\u0439\u043c\u0430\u043b\u0438 \u0446\u044b\u043f\u043b\u044f\u0442!"
                },
                ja_JP: {
                    _ggk_guide: "\u30e9\u30a4\u30c9\u3057\u30662\u5339\u306e\u30cb\u30ef\u30c8\u30ea\u3092\u6d88\u3057\u307e\u3059",
                    _ggk_start: "",
                    _ggk_net_err: ["\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u554f\u984c\u304c\u3042\u308a\u307e\u3059.", l, "\u518d\u8a66\u884c ", "\u3059\u308b\u304b", u, " \u554f\u984c\u3092\u5831\u544a\u3057\u3066\u304f\u3060\u3055\u3044"],
                    _ggk_too_fast: ["\u901f\u3059\u304e\u307e\u3059.", l, "\u518d\u8a66\u884c ", "\u3059\u308b\u304b", u, " \u554f\u984c\u3092\u5831\u544a\u3057\u3066\u304f\u3060\u3055\u3044"],
                    _ggk_action_timeout: ["\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8.", l, "\u518d\u8a66\u884c ", "\u3059\u308b\u304b", u, " \u554f\u984c\u3092\u5831\u544a\u3057\u3066\u304f\u3060\u3055\u3044"],
                    _ggk_fail: ["\u304a\u3063\u3068\u3001\u30cb\u30ef\u30c8\u30ea\u304c\u9003\u3052\u3066\u3057\u307e\u3044\u307e\u3057\u305f.", l, "\u518d\u8a66\u884c ", "\u3059\u308b\u304b", u, " \u554f\u984c\u3092\u5831\u544a\u3057\u3066\u304f\u3060\u3055\u3044"],
                    _ggk_loading: "\u66f4\u65b0\u3057\u3066\u3044\u307e\u3059",
                    _ggk_success: "\u304a\u3081\u3067\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01\u30cb\u30ef\u30c8\u30ea\u3092\u6355\u307e\u3048\u3089\u308c\u307e\u3057\u305f!"
                },
                ko_KR: {
                    _ggk_guide: "\ud654\uba74 \uc704\ub97c \ubc00\uc5b4\uc11c \ub2ed \ub450 \ub9c8\ub9ac\ub97c \uc9c0\uc6b0\uc138\uc694",
                    _ggk_start: "",
                    _ggk_net_err: ["\ub124\ud2b8\uc6cc\ud06c\uc5d0 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4\u3059.", l, "\ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc2dc ", "\uac70\ub098", u, " \ubb38\uc81c\ub97c \ubcf4\uace0\ud574 \uc8fc\uc138\uc694"],
                    _ggk_too_fast: ["\ub108\ubb34 \ube60\ub985\ub2c8\ub2e4.", l, "\ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc2dc ", "\uac70\ub098", u, " \ubb38\uc81c\ub97c \ubcf4\uace0\ud574 \uc8fc\uc138\uc694"],
                    _ggk_action_timeout: ["\uc2dc\uac04\uc774 \ucd08\uacfc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.", l, "\ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc2dc ", "\uac70\ub098", u, " \ubb38\uc81c\ub97c \ubcf4\uace0\ud574 \uc8fc\uc138\uc694"],
                    _ggk_fail: ["\uc774\ub7f0, \ub2ed\uc774 \ub2ec\uc544\ub0ac\uc2b5\ub2c8\ub2e4.", l, "\ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc2dc ", "\uac70\ub098", u, " \ubb38\uc81c\ub97c \ubcf4\uace0\ud574 \uc8fc\uc138\uc694"],
                    _ggk_loading: "\ub85c\ub529",
                    _ggk_success: "\ucd95\ud558\ud569\ub2c8\ub2e4! \ub2ed\uc744 \uc7a1\uc73c\uc168\uad70\uc694!"
                },
                ar_SA: {
                    _ggk_guide: "\u062d\u0631\u0651\u0643 \u0627\u0644\u0634\u0627\u0634\u0629 \u0644\u062d\u0630\u0641 \u062f\u062c\u0627\u062c\u062a\u064a\u0646",
                    _ggk_start: "",
                    _ggk_net_err: ["\u062a\u0648\u062c\u062f \u0645\u0634\u0643\u0644\u0629 \u0628\u0627\u0644\u0634\u0628\u0643\u0629. \u064a\u064f\u0631\u062c\u0649.", l, "\u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 ", "\u0623\u0648", u, " \u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0627\u0644\u0645\u0634\u0643\u0644\u0629"],
                    _ggk_too_fast: ["\u0643\u0646\u062a \u0633\u0631\u064a\u0639\u064b\u0627 \u062c\u062f\u064b\u0627. \u064a\u064f\u0631\u062c\u0649.", l, "\u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 ", "\u0623\u0648", u, " \u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0627\u0644\u0645\u0634\u0643\u0644\u0629"],
                    _ggk_action_timeout: ["\u0627\u0646\u062a\u0647\u062a \u0627\u0644\u0645\u0647\u0644\u0629\u060c \u064a\u064f\u0631\u062c\u0649.", l, "\u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 ", "\u0623\u0648", u, " \u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0627\u0644\u0645\u0634\u0643\u0644\u0629"],
                    _ggk_fail: ["\u0639\u0630\u0631\u064b\u0627\u060c \u0644\u0642\u062f \u0647\u0631\u0628\u062a \u0627\u0644\u062f\u062c\u0627\u062c\u0627\u062a. \u064a\u064f\u0631\u062c\u0649.", l, "\u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 ", "\u0623\u0648", u, " \u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0627\u0644\u0645\u0634\u0643\u0644\u0629"],
                    _ggk_loading: "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644",
                    _ggk_success: "\u062a\u0647\u0627\u0646\u064a\u0646\u0627! \u0644\u0642\u062f \u062d\u0635\u0644\u062a \u0639\u0644\u0649 \u0627\u0644\u062f\u062c\u0627\u062c\u062a\u064a\u0646!"
                },
                tr_TR: {
                    _ggk_guide: "2 adet tavu\u011fun \xfcst\xfcn\xfc \xe7izmek i\xe7in kayd\u0131r\u0131n",
                    _ggk_start: "",
                    _ggk_net_err: ["A\u011fla ilgili bir sorun. L\xfctfen.", l, "tekrar deneyin ", "veya", u, " sorununuzu bildirin"],
                    _ggk_too_fast: ["Fazla h\u0131zl\u0131yd\u0131n\u0131z. L\xfctfen.", l, "tekrar deneyin ", "veya", u, " sorununuzu bildirin"],
                    _ggk_action_timeout: ["S\xfcre doldu, l\xfctfen.", l, "tekrar deneyin ", "veya", u, " sorununuzu bildirin"],
                    _ggk_fail: ["T\xfch, tavuklar ka\xe7t\u0131. L\xfctfen.", l, "tekrar deneyin ", "veya", u, " sorununuzu bildirin"],
                    _ggk_loading: "Y\xfckleniyor",
                    _ggk_success: "Tebrikler! Tavuklar\u0131 ald\u0131n\u0131z!"
                },
                th_TH: {
                    _ggk_guide: "\u0e40\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e08\u0e2d\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e02\u0e39\u0e14\u0e40\u0e2d\u0e32\u0e44\u0e01\u0e48\u0e2a\u0e2d\u0e07\u0e15\u0e31\u0e27",
                    _ggk_start: "",
                    _ggk_net_err: ["\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22.", l, "\u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07 ", "\u0e2b\u0e23\u0e37\u0e2d", u, " \u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"],
                    _ggk_too_fast: ["\u0e04\u0e38\u0e13\u0e17\u0e33\u0e40\u0e23\u0e47\u0e27\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b.", l, "\u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07 ", "\u0e2b\u0e23\u0e37\u0e2d", u, " \u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"],
                    _ggk_action_timeout: ["\u0e2b\u0e21\u0e14\u0e40\u0e27\u0e25\u0e32.", l, "\u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07 ", "\u0e2b\u0e23\u0e37\u0e2d", u, " \u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"],
                    _ggk_fail: ["\u0e2d\u0e38\u0e4a\u0e1b\u0e2a\u0e4c \u0e44\u0e01\u0e48\u0e27\u0e34\u0e48\u0e07\u0e2b\u0e19\u0e35\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27.", l, "\u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07 ", "\u0e2b\u0e23\u0e37\u0e2d", u, " \u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"],
                    _ggk_loading: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14",
                    _ggk_success: "\u0e02\u0e2d\u0e41\u0e2a\u0e14\u0e07\u0e04\u0e27\u0e32\u0e21\u0e22\u0e34\u0e19\u0e14\u0e35! \u0e04\u0e38\u0e13\u0e08\u0e31\u0e1a\u0e44\u0e01\u0e48\u0e44\u0e14\u0e49!"
                },
                vi_VN: {
                    _ggk_guide: "Tr\u01b0\u1ee3t tr\xean m\xe0n h\xecnh \u0111\u1ec3 c\xe0o ra hai con g\xe0",
                    _ggk_start: "",
                    _ggk_net_err: ["M\u1ea1ng g\u1eb7p s\u1ef1 c\u1ed1.", l, "Vui l\xf2ng th\u1eed l\u1ea1i ", "ho\u1eb7c", u, " b\xe1o c\xe1o s\u1ef1 c\u1ed1 c\u1ee7a b\u1ea1n"],
                    _ggk_too_fast: ["B\u1ea1n \u0111\xe3 qu\xe1 nhanh.", l, "Vui l\xf2ng th\u1eed l\u1ea1i ", "ho\u1eb7c", u, " b\xe1o c\xe1o s\u1ef1 c\u1ed1 c\u1ee7a b\u1ea1n"],
                    _ggk_action_timeout: ["H\u1ebft gi\u1edd.", l, "Vui l\xf2ng th\u1eed l\u1ea1i ", "ho\u1eb7c", u, " b\xe1o c\xe1o s\u1ef1 c\u1ed1 c\u1ee7a b\u1ea1n"],
                    _ggk_fail: ["R\u1ea5t ti\u1ebfc, l\u0169 g\xe0 \u0111\xe3 ch\u1ea1y \u0111i r\u1ed3i.", l, "Vui l\xf2ng th\u1eed l\u1ea1i ", "ho\u1eb7c", u, " b\xe1o c\xe1o s\u1ef1 c\u1ed1 c\u1ee7a b\u1ea1n"],
                    _ggk_loading: "\u0110ang t\u1ea3i",
                    _ggk_success: "Xin ch\xfac m\u1eebng! B\u1ea1n \u0111\xe3 b\u1eaft \u0111\u01b0\u1ee3c g\xe0!"
                },
                nl_NL: {
                    _ggk_guide: "Sleep over het scherm om twee kippen weg te strepen",
                    _ggk_start: "",
                    _ggk_net_err: ["Probleem met het netwerk.", l, "Probeer het opnieuw ", "of", u, " rapporteer uw probleem"],
                    _ggk_too_fast: ["U was te snel.", l, "Probeer het opnieuw ", "of", u, " rapporteer uw probleem"],
                    _ggk_action_timeout: ["Time-out.", l, "Probeer het opnieuw ", "of", u, " rapporteer uw probleem"],
                    _ggk_fail: ["Oeps, de kippen zijn weggerend.", l, "Probeer het opnieuw ", "of", u, " rapporteer uw probleem"],
                    _ggk_loading: "Laden",
                    _ggk_success: "Gefeliciteerd! U hebt de kippen!"
                },
                iw_HE: {
                    _ggk_guide: "\u05d4\u05d7\u05dc\u05e7 \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05d2\u05e8\u05d3 \u05d5\u05dc\u05d7\u05e9\u05d5\u05e3 \u05e9\u05ea\u05d9 \u05ea\u05e8\u05e0\u05d2\u05d5\u05dc\u05d5\u05ea",
                    _ggk_start: "",
                    _ggk_net_err: ["\u05d3\u05d5\u05d5\u05d7 \u05e2\u05dc \u05d1\u05e2\u05d9\u05d4.", l, "\u05d1\u05e2\u05d9\u05d9\u05ea \u05e8\u05e9\u05ea ", "\u05d0\u05d5", u, " \u05d3\u05d5\u05d5\u05d7 \u05e2\u05dc \u05d1\u05e2\u05d9\u05d4"],
                    _ggk_too_fast: ["\u05d4\u05d9\u05d9\u05ea \u05de\u05d4\u05d9\u05e8 \u05de\u05d3\u05d9.", l, "\u05d1\u05e2\u05d9\u05d9\u05ea \u05e8\u05e9\u05ea ", "\u05d0\u05d5", u, " \u05d3\u05d5\u05d5\u05d7 \u05e2\u05dc \u05d1\u05e2\u05d9\u05d4"],
                    _ggk_action_timeout: ["\u05d4\u05d6\u05de\u05df \u05ea\u05dd.", l, "\u05d1\u05e2\u05d9\u05d9\u05ea \u05e8\u05e9\u05ea ", "\u05d0\u05d5", u, " \u05d3\u05d5\u05d5\u05d7 \u05e2\u05dc \u05d1\u05e2\u05d9\u05d4"],
                    _ggk_fail: ["\u05d0\u05d5\u05e4\u05e1, \u05d4\u05ea\u05e8\u05e0\u05d2\u05d5\u05dc\u05d5\u05ea \u05d1\u05e8\u05d7\u05d5.", l, "\u05d1\u05e2\u05d9\u05d9\u05ea \u05e8\u05e9\u05ea ", "\u05d0\u05d5", u, " \u05d3\u05d5\u05d5\u05d7 \u05e2\u05dc \u05d1\u05e2\u05d9\u05d4"],
                    _ggk_loading: "\u05d8\u05d5\u05e2\u05df",
                    _ggk_success: "\u05de\u05d6\u05dc \u05d8\u05d5\u05d1! \u05d4\u05e9\u05d2\u05ea \u05d0\u05ea \u05d4\u05ea\u05e8\u05e0\u05d2\u05d5\u05dc\u05d5\u05ea!"
                },
                in_ID: {
                    _ggk_guide: "Geser untuk menggurat dua ekor ayam",
                    _ggk_start: "",
                    _ggk_net_err: ["Masalah dengan jaringan.", l, "Coba lagi ", "atau", u, " laporkan masalah Anda"],
                    _ggk_too_fast: ["Anda terlalu cepat.", l, "Coba lagi ", "atau", u, " laporkan masalah Anda"],
                    _ggk_action_timeout: ["Waktu habis.", l, "Coba lagi ", "atau", u, " laporkan masalah Anda"],
                    _ggk_fail: ["Ups, ayamnya lari.", l, "Coba lagi ", "atau", u, " laporkan masalah Anda"],
                    _ggk_loading: "Memuat",
                    _ggk_success: "Selamat! Anda mendapatkan ayamnya!"
                }
            };
            for (s in p)
                p.hasOwnProperty(s) && i(p[s]);
            p.zh_CN = p.cn,
            p.zh_TW = p.tw,
            p.en_US = p.en,
            p.iw_IL = p.iw_HE,
            p.pt_PT = p.pt_BR,
            p.ar_MA = p.ar_SA,
            n.language = p,
            n.upLang = r,
            n.replaceLang = a,
            n.upResetIndex = c
        }
        , function(e, n, t) {
            "use strict";
            function i(e) {
                a || o(),
                a.style.display = "block";
                var n = l.querySelector("#" + e + "-stage-2");
                n && (a.appendChild(n),
                s = !0)
            }
            function o() {
                a = l.createElement("div"),
                a.className = "nc-h5-overlay _nc",
                a.innerHTML = '<div class="info"><i class="nc-iconfont icon-warn"></i><span>' + c("OVERLAY_INFORM") + "</span></div>",
                l.getElementsByTagName("body")[0].appendChild(a)
            }
            function r(e) {
                var n = l.querySelector("#" + e + "-stage-3")
                  , t = l.querySelector("#" + e + "-stage-2");
                t && n && a && (n.parentNode.insertBefore(t, n),
                a.style.display = "none"),
                s = !1
            }
            var a, c, s, l = document;
            e.exports = {
                show: i,
                hide: r,
                setTEXT: function(e) {
                    c = e
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            n.fail = function(e) {
                throw new Error("NC Fail: " + e)
            }
        }
        , function(e, n, t) {
            "use strict";
            e.exports = function() {
                var e = navigator.userAgent;
                return /Windows/.test(e) ? "win" : /Macintosh/.test(e) ? "mac" : /Android/.test(e) ? "Android" : /(iPhone|iPad)/.test(e) ? "iOS" : /Linux/.test(e) ? "linux" : "unknow"
            }
        }
        , function(e, n, t) {
            "use strict";
            function i(e, n) {
                if ("string" == typeof n && n.indexOf(".") !== -1) {
                    var t = n.split(".")
                      , o = t[0]
                      , r = t.slice(1).join(".");
                    return e.hasOwnProperty(o) ? i(e[o], r) : ""
                }
                return e.hasOwnProperty(n) ? e[n] : ""
            }
            function o(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return e.replace(/\{\{([\w\.]+)\}\}/g, function(e, t) {
                    return i(n, t)
                })
            }
            n.render = o
        }
        , function(e, n, t) {
            "use strict";
            function i(e) {
                var n, t = "", i = _.getElementById("umFlash");
                if (i && !t)
                    try {
                        n = i.getCookie(e) || "",
                        t = n
                    } catch (o) {}
                try {
                    p.localStorage && !t && (n = localStorage[e] || "",
                    t = n)
                } catch (o) {}
                if (p.navigator.cookieEnabled && !t) {
                    var r = _.cookie.indexOf(e + "=");
                    if (r != -1) {
                        r += e.length + 1;
                        var a = _.cookie.indexOf(";", r);
                        a == -1 && (a = _.cookie.length),
                        n = decodeURIComponent(_.cookie.substring(r, a)) || "",
                        t = n
                    }
                }
                return t
            }
            function o(e, n, t) {
                t = t || 7;
                var i = new Date;
                i.setTime(i.getTime() + 864e5 * t),
                _.cookie = [encodeURIComponent(e), "=", encodeURIComponent("" + n), ";expires=", i.toGMTString()].join("")
            }
            function r() {
                var e, n = /Firefox/.test(navigator.userAgent);
                if (n)
                    try {
                        e = localStorage.getItem(g)
                    } catch (t) {}
                return e = e || i(g),
                e || (e = h + a(11),
                o(g, e, 3650)),
                e
            }
            function a(e) {
                for (var n = ""; n.length < e; )
                    n += Math.random().toString().substr(2);
                return n.substring(n.length - e)
            }
            function c() {
                var e = p._sec_module = p._sec_module || {};
                if (u = e.token)
                    return u;
                var n = r();
                return u = n + h + a(3),
                e.token = u,
                u
            }
            function s() {
                if (f)
                    return f;
                var e = "_umdata";
                try {
                    p.localStorage && (f = localStorage.getItem(e))
                } catch (n) {}
                return f ? f : (f = i(e),
                f || "")
            }
            function l() {
                return d ? d : d = s() || c()
            }
            var u, f, d, p = window, _ = document, g = "_uab_collina", h = p.pointman && pointman._now ? pointman._now : (new Date).getTime();
            n.getSecToken = c,
            n.getNCToken = l
        }
        , , , , , function(e, n, t) {
            n = e.exports = t(8)(),
            n.push([e.i, ".nc-container div#nc-loading-circle {\n  background: transparent;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n.nc-container div#nc-loading-circle .sk-circle {\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.nc-container #nc-loading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #818181;\n  border-radius: 100%;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n}\n.nc-container #nc-loading-circle .sk-circle2 {\n  -ms-transform: rotate(30deg);\n  transform: rotate(30deg);\n}\n.nc-container #nc-loading-circle .sk-circle3 {\n  -ms-transform: rotate(60deg);\n  transform: rotate(60deg);\n}\n.nc-container #nc-loading-circle .sk-circle4 {\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.nc-container #nc-loading-circle .sk-circle5 {\n  -ms-transform: rotate(120deg);\n  transform: rotate(120deg);\n}\n.nc-container #nc-loading-circle .sk-circle6 {\n  -ms-transform: rotate(150deg);\n  transform: rotate(150deg);\n}\n.nc-container #nc-loading-circle .sk-circle7 {\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.nc-container #nc-loading-circle .sk-circle8 {\n  -ms-transform: rotate(210deg);\n  transform: rotate(210deg);\n}\n.nc-container #nc-loading-circle .sk-circle9 {\n  -ms-transform: rotate(240deg);\n  transform: rotate(240deg);\n}\n.nc-container #nc-loading-circle .sk-circle10 {\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.nc-container #nc-loading-circle .sk-circle11 {\n  -ms-transform: rotate(300deg);\n  transform: rotate(300deg);\n}\n.nc-container #nc-loading-circle .sk-circle12 {\n  -ms-transform: rotate(330deg);\n  transform: rotate(330deg);\n}\n.nc-container #nc-loading-circle .sk-circle2:before {\n  animation-delay: -1.1s;\n}\n.nc-container #nc-loading-circle .sk-circle3:before {\n  animation-delay: -1s;\n}\n.nc-container #nc-loading-circle .sk-circle4:before {\n  animation-delay: -0.9s;\n}\n.nc-container #nc-loading-circle .sk-circle5:before {\n  animation-delay: -0.8s;\n}\n.nc-container #nc-loading-circle .sk-circle6:before {\n  animation-delay: -0.7s;\n}\n.nc-container #nc-loading-circle .sk-circle7:before {\n  animation-delay: -0.6s;\n}\n.nc-container #nc-loading-circle .sk-circle8:before {\n  animation-delay: -0.5s;\n}\n.nc-container #nc-loading-circle .sk-circle9:before {\n  animation-delay: -0.4s;\n}\n.nc-container #nc-loading-circle .sk-circle10:before {\n  animation-delay: -0.3s;\n}\n.nc-container #nc-loading-circle .sk-circle11:before {\n  animation-delay: -0.2s;\n}\n.nc-container #nc-loading-circle .sk-circle12:before {\n  animation-delay: -0.1s;\n}\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 1;\n  }\n}\n.nc-container .scale_text2 #nc-loading-circle .sk-circle:before {\n  background-color: #fff;\n}\n", ""])
        }
        , function(e, n, t) {
            var i = t(25);
            "string" == typeof i && (i = [[e.i, i, ""]]),
            t(10)(i, {}),
            i.locals && (e.exports = i.locals)
        }
        , function(e, n, t) {
            "use strict";
            n.names = {
                init: "init",
                ready: "ready",
                actionstart: "actionstart",
                actionend: "actionend",
                beforeverify: "beforeverify",
                afterverify: "afterverify",
                error: "error",
                fail: "fail",
                success: "success",
                refresh: "refresh"
            }
        }
        , function(e, n, t) {
            "use strict";
            function i(e) {
                !e.__nc_jsReady && window.__captchah5__uab && window.__captchah5__um && (e.__nc_jsReady = !0,
                e(!1))
            }
            function o(e, n) {
                l.init(e),
                a.__captchah5__uab ? i(n) : AWSC.use("uab", function(e, t) {
                    "loaded" === e ? (a.__captchah5__uab = t,
                    i(n)) : n(!0, "01")
                }, {
                    timeout: e.timeout
                })
            }
            function r(e, n) {
                var t = s[e.foreign] || s[0];
                t = c.mix(t, e.apimap),
                window._umopt_npfp = 1,
                e.appkey && 0 === e.appkey.indexOf("X82Y") && (window._umopt_npfp = 0),
                window._umopt_cris = 0,
                a.__captchah5__um ? i(n) : AWSC.use("um", function(o, r) {
                    if ("loaded" === o) {
                        a.__captchah5__um = r,
                        i(n);
                        var c = location.href || "";
                        c = c.length < 128 ? c : c.substring(0, 128);
                        var s = 0
                          , l = function u() {
                            s++,
                            a.__captchah5__umidToken = "defaultToken3_init_callback_not_called@@" + c + "@@" + (new Date).getTime(),
                            r.init({
                                timeout: e.timeout,
                                serviceUrl: t.umid_serUrl,
                                appName: e.appkey,
                                enableFY: 1,
                                jf: 1
                            }, function(e, n) {
                                "success" === e ? a.__captchah5__umidToken = n.tn : (a.__captchah5__umidToken = "defaultToken4_init_failed with " + e + "@@" + c + "@@" + (new Date).getTime(),
                                s < 3 && u())
                            })
                        };
                        l()
                    } else
                        n(!0, "02")
                }, {
                    timeout: e.timeout
                })
            }
            var a = window
              , c = (document,
            t(0))
              , s = t(12).URL_MAP
              , l = t(48);
            n.load = function(e, n) {
                var t = e.options
                  , i = t.timeout || 1e4;
                if (a.AWSC)
                    o(t, n),
                    r(t, n);
                else {
                    var l = s[t.foreign] || s[0];
                    l = c.mix(l, t.apimap),
                    c.loadScript(l.uab_Url, function(e) {
                        "ok" === e ? (o(t, n),
                        r(t, n)) : n(!0, "03")
                    }, i, t.retryTimes)
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            var i;
            n.init = function(e, n) {
                function t(e) {
                    var t = document.querySelector("#" + n.prefix + "-stage-2");
                    return t.querySelector(e)
                }
                var o = 0;
                e.onenterts_verifying = function() {
                    var r = t(".input")
                      , a = r.value;
                    if (r.disabled = !0,
                    !a)
                        return void e.ts_verifyfail();
                    var c = n.net
                      , s = t(".btn-ok");
                    s.disabled = !0;
                    var l = n.options;
                    t(".icon.clear").style.display = "none",
                    t(".icon.refresh").style.display = "none",
                    c.postCaptcha(a, i, function(n, t, i) {
                        var r = "ok" === n && t && t.success && 100 === t.result.code
                          , a = t && t.result || {};
                        a.csessionid = i,
                        r ? e.ts_verifypass(a) : (o++,
                        "timeout" === n ? (e.ts_verifyerror(a),
                        o = 0) : "number" == typeof l.errorTimes && o >= l.errorTimes ? (e.ts_verifyerror(a),
                        o = 0) : e.ts_verifyfail(a))
                    })
                }
                ,
                e.onleavets_verifying = function() {
                    var e = t(".btn-ok");
                    e.disabled = !1;
                    var n = t(".input");
                    n.disabled = !1,
                    t(".icon.clear").style.display = "block",
                    t(".icon.refresh").style.display = "block";
                }
            }
            ,
            n.setCaptchaToken = function(e) {
                i = e
            }
        }
        , function(e, n, t) {
            "use strict";
            var i = t(0);
            n.init = function(e) {
                var n = e.fsm;
                n.onenteractiontimeout = function() {
                    i.addClass(e.el, "nc-fail")
                }
                ,
                n.onleaveactiontimeout = function() {
                    i.removeClass(e.el, "nc-fail")
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e) {
                var n = e.fsm;
                n.onenterdestroyed = function() {
                    e.el.innerHTML = ""
                }
                ,
                n.onleavedestroyed = function() {}
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e) {
                var n = e.fsm;
                n.onentererror = function() {}
                ,
                n.onleaveerror = function() {}
            }
        }
        , function(e, n, t) {
            "use strict";
            var i = t(0)
              , o = t(14);
            n.init = function(e) {
                var n = e.fsm
                  , t = i.mix({}, o.default_options, e.options || {});
                n.onenterfail = function() {
                    i.addClass(e.el, "nc-fail");
                    var n = e.scrape.prefix
                      , o = document.getElementById(n + "container");
                    if (o && t.bg_back_fail) {
                        var r = i.getElementsByClassName("nc-bg", o)[0];
                        r && (r.style.background = "url(" + t.bg_back_fail + ")")
                    }
                }
                ,
                n.onleavefail = function() {
                    i.removeClass(e.el, "nc-fail")
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e) {
                var n = e.fsm;
                n.onenterinitially = function() {}
                ,
                n.onleaveinitially = function() {}
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e) {
                var n = e.fsm;
                n.onenterload_error = function() {}
                ,
                n.onleaveload_error = function() {}
            }
        }
        , function(e, n, t) {
            "use strict";
            var i = t(28)
              , o = t(102)
              , r = t(27)
              , a = t(0)
              , c = r.names
              , s = t(1);
            n.init = function(e) {
                var n = e.fsm;
                n.onenterloading = function() {
                    var t = e.scrape || o.create(e);
                    e.scrape = t,
                    s.resolve().then(function() {
                        var n = e._custom_state._on_loading;
                        return n = Array.isArray(n) ? n : [],
                        n.length > 0 ? s.all(a.map(n, function(e) {
                            return e()
                        })) : 0
                    }).then(function() {
                        return new s(function(n, t) {
                            i.load(e, function(e) {
                                return e ? t(e) : n()
                            })
                        }
                        )
                    }).then(function() {
                        var n = e._custom_state.loading;
                        return n = Array.isArray(n) ? n : [],
                        n.length > 0 ? s.all(a.map(n, function(e) {
                            return e()
                        })) : 0
                    }).then(function() {
                        return new s(function(n, i) {
                            o.render(t, function(t) {
                                return t ? void i(t) : (e.fire(c.ready),
                                void n())
                            })
                        }
                        )
                    }).then(function() {
                        return n.load()
                    })["catch"](function(e) {
                        n.loaderror()
                    })
                }
                ,
                n.onleaveloading = function() {
                    e.on_leave_loading && e.on_leave_loading()
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e) {
                var n = e.fsm;
                n.onenterneed_two_step_verify = function() {}
                ,
                n.onleaveneed_two_step_verify = function() {}
            }
        }
        , function(e, n, t) {
            "use strict";
            var i = t(0)
              , o = t(14);
            n.init = function(e) {
                var n = e.fsm
                  , t = i.mix({}, o.default_options, e.options || {});
                n.onenterpass = function() {
                    i.addClass(e.el, "nc-pass");
                    var n = (e.index > 0 ? e.index : 1,
                    e.scrape.prefix)
                      , o = document.getElementById(n + "container");
                    if (o && t.bg_back_pass) {
                        var r = i.getElementsByClassName("nc-bg", o)[0];
                        r && (r.style.background = "url(" + t.bg_back_pass + ")")
                    }
                }
                ,
                n.onleavepass = function() {
                    i.removeClass(e.el, "nc-pass")
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e) {
                var n = e.fsm;
                n.onenterready = function() {}
                ,
                n.onleaveready = function() {}
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e) {
                var n = e.fsm;
                n.onenterreseting = function() {
                    n.resetdone()
                }
                ,
                n.onleavereseting = function() {}
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e) {
                var n = e.fsm;
                n.onenterts_error = function() {}
                ,
                n.onleavets_error = function() {}
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e) {
                var n = e.fsm;
                n.onenterts_fail = function() {}
                ,
                n.onleavets_fail = function() {}
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e) {
                var n = e.fsm;
                n.onenterts_loading = function() {}
                ,
                n.onleavets_loading = function() {}
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e) {
                var n = e.fsm;
                n.onenterts_pass = function() {}
                ,
                n.onleavets_pass = function() {}
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e) {
                var n = e.fsm;
                n.onenterts_ready = function() {}
                ,
                n.onleavets_ready = function() {}
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e) {
                var n = e.fsm;
                n.onenterts_verifying = function() {}
                ,
                n.onleavets_verifying = function() {}
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e) {
                var n = e.fsm;
                n.onenterverifying = function() {}
                ,
                n.onleaveverifying = function() {}
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e) {
                window.__captchah5_uaboption = new Object,
                e.is_Opt ? (UA_Opt.MPInterval = "undefined" != typeof UA_Opt.MPInterval && UA_Opt.MPInterval > 0 ? UA_Opt.MPInterval : 4,
                UA_Opt.MaxMCLog = "undefined" != typeof UA_Opt.MaxMCLog && UA_Opt.MaxMCLog > 0 ? UA_Opt.MaxMCLog : 12,
                UA_Opt.MaxKSLog = "undefined" != typeof UA_Opt.MaxKSLog && UA_Opt.MaxKSLog > 0 ? UA_Opt.MaxKSLog : 14,
                UA_Opt.MaxMPLog = "undefined" != typeof UA_Opt.MaxMPLog && UA_Opt.MaxMPLog > 0 ? UA_Opt.MaxMPLog : 5,
                UA_Opt.MaxFocusLog = "undefined" != typeof UA_Opt.MaxFocusLog && UA_Opt.MaxFocusLog > 0 ? UA_Opt.MaxFocusLog : 6,
                UA_Opt.SendInterval = "undefined" != typeof UA_Opt.SendInterval && UA_Opt.SendInterval > 0 ? UA_Opt.SendInterval : 5,
                UA_Opt.SendMethod = "undefined" != typeof UA_Opt.SendMethod && UA_Opt.SendMethod > 0 ? UA_Opt.SendMethod : 8,
                UA_Opt.GPInterval = "undefined" != typeof UA_Opt.GPInterval && UA_Opt.GPInterval > 0 ? UA_Opt.GPInterval : 1,
                UA_Opt.MaxGPLog = "undefined" != typeof UA_Opt.MaxGPLog && UA_Opt.MaxGPLog > 0 ? UA_Opt.MaxGPLog : 10,
                UA_Opt.MaxTCLog = "undefined" != typeof UA_Opt.MaxTCLog && UA_Opt.MaxTCLog > 0 ? UA_Opt.MaxTCLog : 12,
                UA_Opt.Flag = "undefined" != typeof UA_Opt.Flag && UA_Opt.Flag > 0 ? UA_Opt.Flag : 2980046,
                UA_Opt.OnlyHost = "undefined" != typeof UA_Opt.OnlyHost ? UA_Opt.OnlyHost : 1,
                window.__captchah5_uaboption.MPInterval = "undefined" != typeof UA_Opt.MPInterval && UA_Opt.MPInterval > 0 ? UA_Opt.MPInterval : 4,
                window.__captchah5_uaboption.MaxMCLog = "undefined" != typeof UA_Opt.MaxMCLog && UA_Opt.MaxMCLog > 0 ? UA_Opt.MaxMCLog : 12,
                window.__captchah5_uaboption.MaxKSLog = "undefined" != typeof UA_Opt.MaxKSLog && UA_Opt.MaxKSLog > 0 ? UA_Opt.MaxKSLog : 14,
                window.__captchah5_uaboption.MaxMPLog = "undefined" != typeof UA_Opt.MaxMPLog && UA_Opt.MaxMPLog > 0 ? UA_Opt.MaxMPLog : 5,
                window.__captchah5_uaboption.MaxFocusLog = "undefined" != typeof UA_Opt.MaxFocusLog && UA_Opt.MaxFocusLog > 0 ? UA_Opt.MaxFocusLog : 6,
                window.__captchah5_uaboption.SendInterval = "undefined" != typeof UA_Opt.SendInterval && UA_Opt.SendInterval > 0 ? UA_Opt.SendInterval : 5,
                window.__captchah5_uaboption.SendMethod = "undefined" != typeof UA_Opt.SendMethod && UA_Opt.SendMethod > 0 ? UA_Opt.SendMethod : 8,
                window.__captchah5_uaboption.GPInterval = "undefined" != typeof UA_Opt.GPInterval && UA_Opt.GPInterval > 0 ? UA_Opt.GPInterval : 1,
                window.__captchah5_uaboption.MaxGPLog = "undefined" != typeof UA_Opt.MaxGPLog && UA_Opt.MaxGPLog > 0 ? UA_Opt.MaxGPLog : 10,
                window.__captchah5_uaboption.MaxTCLog = "undefined" != typeof UA_Opt.MaxTCLog && UA_Opt.MaxTCLog > 0 ? UA_Opt.MaxTCLog : 12,
                window.__captchah5_uaboption.Flag = "undefined" != typeof UA_Opt.Flag && UA_Opt.Flag > 0 ? UA_Opt.Flag : 2980046,
                window.__captchah5_uaboption.OnlyHost = "undefined" != typeof UA_Opt.OnlyHost ? UA_Opt.OnlyHost : 1,
                window.__captchah5_uaboption.MaxMTLog = "undefined" != typeof UA_Opt.MaxMTLog ? UA_Opt.MaxMTLog : 300,
                window.__captchah5_uaboption.MinMTDwnLog = "undefined" != typeof UA_Opt.MinMTDwnLog ? UA_Opt.MinMTDwnLog : 30,
                window.__captchah5_uaboption.MaxNGPLog = "undefined" != typeof UA_Opt.MaxNGPLog ? UA_Opt.MaxNGPLog : 200,
                window.__captchah5_uaboption.sIDs = "undefined" != typeof UA_Opt.sIDs ? UA_Opt.sIDs : ["_n1t|_n1z|nocaptcha|-stage-1"],
                window.__captchah5_uaboption.mIDs = "undefined" != typeof UA_Opt.mIDs ? UA_Opt.mIDs : ["nc-canvas", "click2slide-btn"],
                window.__captchah5_uaboption.hook = "undefined" != typeof UA_Opt.hook ? UA_Opt.hook : 1,
                window.__captchah5_uaboption.font = "undefined" != typeof UA_Opt.font ? UA_Opt.font : 1,
                window.__captchah5_uaboption.api = "undefined" != typeof UA_Opt.api ? UA_Opt.api : 1) : (UA_Opt.SendInterval = 5,
                UA_Opt.SendMethod = 8,
                UA_Opt.MaxMCLog = 12,
                UA_Opt.MaxKSLog = 14,
                UA_Opt.MaxMPLog = 5,
                UA_Opt.MaxGPLog = 10,
                UA_Opt.MaxTCLog = 12,
                UA_Opt.GPInterval = 1,
                UA_Opt.MPInterval = 4,
                UA_Opt.MaxFocusLog = 6,
                UA_Opt.isSendError = 1,
                UA_Opt.Flag = 2980046,
                UA_Opt.OnlyHost = 1,
                window.__captchah5_uaboption.SendInterval = 5,
                window.__captchah5_uaboption.SendMethod = 8,
                window.__captchah5_uaboption.MaxMCLog = 12,
                window.__captchah5_uaboption.MaxKSLog = 14,
                window.__captchah5_uaboption.MaxMPLog = 5,
                window.__captchah5_uaboption.MaxGPLog = 10,
                window.__captchah5_uaboption.MaxTCLog = 12,
                window.__captchah5_uaboption.GPInterval = 1,
                window.__captchah5_uaboption.MPInterval = 4,
                window.__captchah5_uaboption.MaxFocusLog = 6,
                window.__captchah5_uaboption.isSendError = 1,
                window.__captchah5_uaboption.Flag = 2980046,
                window.__captchah5_uaboption.OnlyHost = 1,
                window.__captchah5_uaboption.MaxMTLog = 300,
                window.__captchah5_uaboption.MinMTDwnLog = 30,
                window.__captchah5_uaboption.MaxNGPLog = 200,
                window.__captchah5_uaboption.sIDs = ["_n1t|_n1z|nocaptcha|-stage-1"],
                window.__captchah5_uaboption.mIDs = ["nc-canvas", "click2slide-btn"],
                window.__captchah5_uaboption.hook = 1,
                window.__captchah5_uaboption.font = 1,
                window.__captchah5_uaboption.api = 1),
                window.__captchah5_uaboption.Flag |= 2097152
            }
        }
        , , , , , , , , , , , , , , , , , , , , , , function(e, n, t) {
            "use strict";
            function i(e) {
                return "scrape" === e.type
            }
            var o = t(76)
              , r = t(77)
              , a = ["on", "setEnabled", "reset", "show", "hide", "getState"]
              , c = {
                index: 0,
                js_type: "h5",
                v: t(5).v
            };
            n.makeNC = function() {
                var e = function s(e) {
                    this.nc_obj = i(e) ? new r.NC2(e,c) : new o.NoCaptcha,
                    s.__nc = this.nc_obj;
                    var n = this
                      , t = this.nc_obj;
                    a.forEach(function(e) {
                        n[e] = function() {
                            return t[e].apply(t, arguments)
                        }
                    }),
                    e && this.init(e)
                };
                e.prototype = {
                    init: function(e) {
                        return this.__initialized ? void (win.console && win.console.warn("[nch5] Current NC(" + this.nc_obj.prefix + ") is already initialized!")) : (this.nc_obj.init(e),
                        void (this.__initialized = 1))
                    }
                },
                t(75);
                var n = t(11);
                return e.upLang = n.upLang,
                e.init = function(n) {
                    var t;
                    if (n.upLang)
                        for (var a in n.upLang)
                            e.upLang(a, n.upLang[a]);
                    return i(n) ? t = new r.NC2(n,c) : (t = new o.NoCaptcha,
                    t.init(n)),
                    e.__nc = t,
                    t
                }
                ,
                a.forEach(function(n) {
                    e[n] = function() {
                        var t = e.__nc;
                        if (t)
                            return t[n].apply(t, arguments)
                    }
                }),
                e
            }
        }
        , , , , , function(e, n, t) {
            "use strict";
            !function(e, n) {
                var t = e.createElement("style");
                if (e.getElementsByTagName("head")[0].appendChild(t),
                t.styleSheet)
                    t.styleSheet.disabled || (t.styleSheet.cssText = n);
                else
                    try {
                        t.innerHTML = n
                    } catch (i) {
                        t.innerText = n
                    }
            }(document, '@font-face{font-family:\'nc-iconfont\';src:url(\'//at.alicdn.com/t/font_skgl4wg07pgv6lxr.eot\');src:url(\'//at.alicdn.com/t/font_skgl4wg07pgv6lxr.eot?#iefix\') format(\'embedded-opentype\'),url(\'//at.alicdn.com/t/font_skgl4wg07pgv6lxr.woff\') format(\'woff\'),url(\'//at.alicdn.com/t/font_skgl4wg07pgv6lxr.ttf\') format(\'truetype\'),url(\'//at.alicdn.com/t/font_skgl4wg07pgv6lxr.svg#iconfont\') format(\'svg\')}.nc-iconfont{font-family:"nc-iconfont" !important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}._nc .icon-close:before{content:"\\e601"}._nc .icon-notclick:before{content:"\\e60a"}._nc .icon-left-triangle:before{content:"\\e60c"}._nc .icon-checkbox:before{content:"\\e602"}._nc .icon-message:before{content:"\\e603"}._nc .icon-onclick:before{content:"\\e60b"}._nc .icon-refresh:before{content:"\\e604"}._nc .icon-list-check:before{content:"\\e605"}._nc .icon-warn:before{content:"\\e600"}._nc .icon-ok:before{content:"\\e606"}._nc .icon-slide-arrow:before{content:"\\e607"}._nc .icon-load-c:before{content:"\\e608"}._nc .icon-close-white:before{content:"\\e609"}._nc .icon-info:before{content:"\\e60d"}._nc{width:100%;height:100%;touch-action:none;font-size:16px}._nc *{padding:0;margin:0;border:none}._nc .icon{line-height:normal;width:30px;height:30px}._nc .icon-slide-arrow{font-size:30px;color:#dbdbdb}._nc .icon-ok{font-size:30px;color:#7ac23c}._nc .icon-close{font-size:30px;color:#fc5620}._nc .icon-load-c{font-size:30px;color:#7ac23c;padding-top:2px}._nc .icon-onclick{font-size:30px;color:#dddddd}._nc .icon-notclick{font-size:30px;color:#dddddd}._nc .icon-left-triangle{color:#dddddd}._nc .stage{position:relative;padding:0 15px}._nc .stage1{height:55px;position:relative}._nc .stage1 .bg-green{background-color:#78c430}._nc .stage1 .bg-red{background-color:#ff5500}._nc .stage1 .slider{position:absolute;height:52px;box-shadow:0 0 3px #999;background-color:#ddd;left:15px;right:15px}._nc .stage1 .label{display:block;width:100%;color:#aaa}._nc .stage1 .track.mv-back{-webkit-transition:width .5s}._nc .stage1 .button.mv-back{-webkit-transition:left .5s}._nc .stage1 .track{position:absolute;left:0;top:0;height:100%;width:0;overflow:hidden}._nc .stage1 .track div{color:#fff}._nc .stage1 .track div,._nc .stage1 .label{line-height:52px;height:52px;text-align:center;font-size:16px}._nc .stage1 .button{position:absolute;left:0;top:0;width:52px;height:52px;background-color:#fff;cursor:pointer}._nc .stage1 .icon{position:absolute;left:10px;top:0;bottom:0;margin:auto}._nc .stage1 .icon.nc-loading{-webkit-animation:_nc_rotate 1s linear infinite}._nc .stage1 .icon.yes{background-position:-60px 0}._nc .stage1 .icon.no{background-position:-90px 0}@media only screen and (min-device-width:320px) and (max-device-height:568px) and (-webkit-device-pixel-ratio:2){._nc .stage1 .icon{bottom:14px}}@-webkit-keyframes _nc_rotate{from{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}._nc .stage1 .click2slider{box-shadow:0 0 3px #999;position:relative;border-radius:4px;box-sizing:border-box;height:55px}._nc .stage1 .click2slider .click2slide-btn{width:52px;height:52px;position:absolute}._nc .stage1 .click2slider .click2slider-label{width:100%;line-height:52px;height:52px;text-align:center;font-size:16px;color:#aeaeae}._nc .stage1 .click2slider .click2slider-label .nc-iconfont.icon-left-triangle{position:relative;left:-10px}._nc .stage1 .click2slider .slider-holder{position:relative;width:auto;height:52px;margin-left:40px}._nc .stage1 .click2slider .slider-holder .slider,._nc .stage1 .click2slider .slider-holder .button,._nc .stage1 .click2slider .slider-holder .label{height:43px}._nc .stage1 .click2slider .slider-holder .slider{top:0;bottom:0;margin:auto}._nc .stage1 .click2slider .slider-holder .slider .track.moving{-moz-transition:.5s ease-out;-webkit-transition:.5s ease-out;-o-transition:.5s ease-out;transition:.5s ease-out}._nc .stage1 .click2slider .slider-holder .slider .button.moving{-moz-transition:.5s ease-out;-webkit-transition:.5s ease-out;-o-transition:.5s ease-out;transition:.5s ease-out}._nc .stage1 .click2slider .slider-holder .button{width:43px}._nc .stage1 .click2slider .slider-holder .button .icon{left:6px}._nc .stage1 .click2slider .slider-holder .label{line-height:43px}._nc .stage1 .click2slider .slider-holder .bg-green,._nc .stage1 .click2slider .slider-holder .bg-red{line-height:43px;height:43px}._nc .stage2 .textbox{width:100%;height:52px;position:relative;background-color:#fff;border-radius:6px;border:1px solid #bbb}._nc .stage2 .textbox .input{position:absolute;left:50px;top:6px;background:none;width:140px;height:40px;outline:none;font-size:18px;color:#333}._nc .stage2 .textbox .placeholder{position:absolute;-webkit-user-select:none;pointer-events:none;left:52px;top:14px;font-size:18px;color:#ccc}._nc .stage2 .textbox .code{position:absolute;right:50px;top:12px;border-left:2px solid #ccc}._nc .stage2 .icon{top:0;position:absolute;top:11px;font-size:30px;color:#999}._nc .stage2 .icon.tip{left:10px}._nc .stage2 .icon.clear{display:none;left:122px}._nc .stage2 .icon.refresh{right:11px}@media only screen and (min-device-width:320px) and (max-device-height:568px) and (-webkit-device-pixel-ratio:2){._nc .stage2 .icon{top:4px}}._nc .stage2 .btn-ok,._nc .stage2 .tips{width:100%;height:46px;margin-top:18px;border-radius:5px;color:#fff;font-size:20px;border:none;outline:none;background-color:#3199f4}._nc .stage2 .btn-ok:disabled{background-color:#ccc}._nc .stage2 .tips{background-color:#333;color:#fff;text-align:center;line-height:46px;display:none}._nc .stage3{height:150px}._nc .stage3 .title{font-size:20px;color:#777;width:100%;text-align:center;margin:40px 0 20px 0}._nc .stage3 .menu{position:absolute;width:50%;text-align:center}._nc .stage3 .menu *{display:inline-block}._nc .stage3 .menu .label{position:relative;font-size:16px;height:32px;line-height:32px;color:#666;top:-8px}._nc .stage3 .menu .icon{margin-right:10px;font-size:30px;color:#999}._nc .stage3 .menu.refresh .icon{background-position:-120px 0}._nc .stage3 .menu.feedback{right:0}._nc .stage3 .menu.feedback .icon{background-position:-150px 0}._nc .stage3 .menu.nc-sep{outline:1px solid #ccc;width:0;height:32px;left:50%}._nc .stage1 .label{background:-webkit-gradient(linear, left top, right top, color-stop(0, #4d4d4d), color-stop(.4, #4d4d4d), color-stop(.5, white), color-stop(.6, #4d4d4d), color-stop(1, #4d4d4d));-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:slidetounlock 3s infinite;-webkit-text-size-adjust:none}._nc .stage1 .label.no-anim{background:none;-webkit-background-clip:inherit;-webkit-text-fill-color:inherit;-webkit-animation:none}._nc .nc-hidden{display:none}@-webkit-keyframes slidetounlock{0%{background-position:-200px 0}100%{background-position:200px 0}}.nc-h5-overlay{position:fixed;z-index:100000;display:none;background:#f0f0f0;top:0;right:0;bottom:0;left:0;font-size:16px}.nc-h5-overlay div.info{display:block;padding:15px 10px;line-height:1.2em}.nc-h5-overlay div.info i.nc-iconfont{color:#f00;width:1.2em;font-size:120%;margin-right:.3em}._nc.nc-h5-overlay .stage2.stage{padding:0}._nc.nc-h5-overlay .stage2.stage div.ope{padding:0 15px}._nc.nc-h5-overlay .stage2 .textbox{border:none;border-radius:0}')
        }
        , function(e, n, t) {
            "use strict";
            function i() {
                this.prefix = "",
                this.inner_trans = {},
                this.event_listeners = {}
            }
            var o = window
              , r = document
              , a = t(48)
              , c = t(11)
              , s = 0
              , l = t(27)
              , u = t(20)
              , f = t(0);
            i.prototype = {
                init: function(e) {
                    e.token = e.token || u.getNCToken(),
                    e.foreign = e.foreign || "0",
                    e.umidServer = e.umidServer || "r",
                    e.retryTimes = parseInt(e.retryTimes),
                    e.apimap = e.apimap || {},
                    ("number" != typeof e.retryTimes || isNaN(e.retryTimes)) && (e.retryTimes = 5),
                    this.options = e;
                    var n;
                    try {
                        n = r.querySelector(e.renderTo) || r.querySelector("#" + e.renderTo)
                    } catch (i) {
                        n = void 0
                    }
                    if (f.getNCPunish(e, "init monitor"),
                    o.MutationObserver && n) {
                        var a = function(t, i) {
                            var o = n && n.innerHTML ? n.innerHTML.replace(/[ \r\n\"<\/div>]/g, "") : "null";
                            f.getNCPunish(e, o),
                            c.disconnect()
                        }
                          , c = new MutationObserver(a)
                          , l = {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        };
                        c.observe(n, l)
                    } else {
                        var d = n && n.innerHTML ? "Timeout_" + n.innerHTML.replace(/[ \r\n\"<\/div>]/g, "") : "Timeout_null";
                        setTimeout(f.getNCPunish(e, d), 2e3)
                    }
                    this.fsm = t(82).makeFSM(this),
                    this.net = t(83).makeNet(this.fsm, this),
                    e.initlog && e.initlog(),
                    this.net.initialize(),
                    s++,
                    this.prefix = this.options.prefix || "nc_" + s,
                    this.container = r.querySelector(this.options.renderTo),
                    this.fsm.init(),
                    e.initHidden && this.hide()
                },
                getState: function() {
                    return this.fsm.current
                },
                has: function(e) {
                    var n = this.event_listeners[e];
                    return !!n
                },
                on: function(e, n) {
                    l.names.hasOwnProperty(e) && (this.event_listeners[e] = this.event_listeners[e] || []).push(n)
                },
                fire: function(e) {
                    var n, t, i = this.event_listeners[e];
                    if (i)
                        for (n = 0,
                        t = i.length; n < t && i[n].call() !== !1; n++)
                            ;
                },
                setEnabled: function(e) {
                    e ? this.slider.enable() : this.slider.disable()
                },
                setTrans: function(e) {
                    return e && (this.options.trans = e),
                    this.options.trans
                },
                getTrans: function() {
                    return this.options.trans
                },
                _reset: function() {
                    this.container && (this.container.style.display = "block"),
                    this.options.appkey && this.options.token && (UA_Opt.LogVal = "_n",
                    a.init(this.options),
                    UA_Opt.Token = (new Date).getTime() + ":" + this.options.token,
                    UA_Opt.reload && UA_Opt.reload())
                },
                reset: function() {
                    return this.fsm.can("reset") ? (this.fsm.reset(),
                    !0) : (o.console && void 0,
                    !1)
                },
                show: function() {
                    this.container && (this.container.style.display = "block")
                },
                hide: function() {
                    this.container && (this.container.style.display = "none")
                },
                _TEXT: function(e) {
                    return c.trans(this.options.language, e)
                }
            },
            n.NoCaptcha = i
        }
        , function(e, n, t) {
            "use strict";
            function i(e, n) {
                if (!(e instanceof n))
                    throw new TypeError("Cannot call a class as a function")
            }
            var o = function() {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var i = n[t];
                        i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value"in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                    }
                }
                return function(n, t, i) {
                    return t && e(n.prototype, t),
                    i && e(n, i),
                    n
                }
            }()
              , r = t(13)
              , a = t(17)
              , c = t(0)
              , s = t(6)
              , l = t(1)
              , u = [{
                name: "init",
                from: "initially",
                to: "loading"
            }, {
                name: "load",
                from: "loading",
                to: "ready"
            }, {
                name: "loaderror",
                from: ["loading", "ready"],
                to: "load_error"
            }, {
                name: "continueloading",
                from: "load_error",
                to: "loading"
            }, {
                name: "verify",
                from: ["ready", "fail"],
                to: "verifying"
            }, {
                name: "timeout",
                from: "ready",
                to: "actiontimeout"
            }, {
                name: "verifyfail",
                from: ["ready", "verifying"],
                to: "fail"
            }, {
                name: "verifyerror",
                from: "verifying",
                to: "error"
            }, {
                name: "verifytwostep",
                from: "verifying",
                to: "need_two_step_verify"
            }, {
                name: "verifypass",
                from: "verifying",
                to: "pass"
            }, {
                name: "reset",
                from: ["*"],
                to: "reseting"
            }, {
                name: "resetdone",
                from: "reseting",
                to: "loading"
            }, {
                name: "destroy",
                from: ["*"],
                to: "destroyed"
            }, {
                name: "showtwostep",
                from: "need_two_step_verify",
                to: "ts_loading"
            }, {
                name: "ts_load",
                from: "ts_loading",
                to: "ts_ready"
            }, {
                name: "ts_verify",
                from: ["ts_ready", "ts_fail"],
                to: "ts_verifying"
            }, {
                name: "ts_verifyfail",
                from: "ts_verifying",
                to: "ts_fail"
            }, {
                name: "ts_verifyerror",
                from: "ts_verifying",
                to: "ts_error"
            }, {
                name: "ts_verifyerror2",
                from: "ts_error",
                to: "error"
            }, {
                name: "ts_verifypass",
                from: "ts_verifying",
                to: "ts_pass"
            }, {
                name: "ts_passed",
                from: "ts_pass",
                to: "pass"
            }]
              , f = function() {
                function e(n, t) {
                    i(this, e);
                    var o = "cn";
                    n.foreign && (o = "en"),
                    this.options = c.mix({}, o, n),
                    this.inn_vars = t,
                    t.index++,
                    this.index = t.index,
                    this.jsv = t.v,
                    this.el = document.getElementById(n.renderTo.replace(/^#/, "")),
                    this.el || a.fail("'renderTo'(" + n.renderTo + ") does not match any node."),
                    this.makeFSM(),
                    this.initStates(),
                    this.event_listeners = {},
                    this._custom_state = {},
                    this.fsm.init()
                }
                return o(e, [{
                    key: "makeFSM",
                    value: function() {
                        var e = this;
                        this.fsm = r.create({
                            initial: "initially",
                            events: u
                        }),
                        this.fsm.onenterstate = function(n, t, i) {
                            if ("loading" !== i) {
                                var o = e._custom_state[i];
                                Array.isArray(o) && l.all(c.map(o, function(e) {
                                    return e()
                                }))
                            }
                        }
                    }
                }, {
                    key: "initStates",
                    value: function() {
                        var e = this;
                        c.map(u, function(n) {
                            t(133)("./" + n.to).init(e)
                        })
                    }
                }, {
                    key: "on",
                    value: function(e, n) {
                        (this.event_listeners[e] = this.event_listeners[e] || []).push(n)
                    }
                }, {
                    key: "reg",
                    value: function(e, n) {
                        this._custom_state[e] = this._custom_state[e] || [],
                        this._custom_state[e].push(n)
                    }
                }, {
                    key: "fire",
                    value: function(e) {
                        for (var n = this.event_listeners[e] = this.event_listeners[e] || [], t = 0; t < n.length && n[t].call() !== !1; t++)
                            ;
                    }
                }, {
                    key: "reload",
                    value: function() {
                        this.fsm.reset()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.fsm.reset()
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.el.style.display = "block"
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.el.style.display = "none"
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.is_destroyed || (this.fsm.destroy(),
                        this.is_destroyed = !0)
                    }
                }, {
                    key: "setEnabled",
                    value: function(e) {}
                }, {
                    key: "getState",
                    value: function() {}
                }, {
                    key: "_log",
                    value: function(e, n, t) {
                        var i = this.options
                          , o = i.token || UA_Opt.Token || ("undefined" != typeof umx && umx.getToken ? umx.getToken() : "");
                        s.log({
                            a: i.appkey,
                            t: o,
                            scene: i.scene,
                            ns: "",
                            jsv: this.jsv,
                            usa: navigator.userAgent,
                            p: t,
                            jsType: "h5",
                            os: c.getOS(),
                            em: n,
                            ec: e
                        })
                    }
                }]),
                e
            }();
            n.NC2 = f
        }
        , function(e, n, t) {
            "use strict";
            var i = t(0)
              , o = t(11);
            n.makeClickSlider = function(e) {
                function n(n) {
                    return e.container.querySelector(".click2slider " + n)
                }
                function t(e) {
                    var t = n(".click2slide-btn .icon");
                    t.className = "icon " + e
                }
                function r(e) {
                    var t = n(".click2slider-label");
                    t.className = "click2slider-label " + e
                }
                function a(n) {
                    w = n,
                    c(),
                    p.innerHTML = o.trans(e.options.language, "LOADING"),
                    e.on("ready", function() {
                        t("nc-iconfont icon-notclick"),
                        p.innerHTML = '<span class="nc-iconfont icon-left-triangle"></span>' + o.trans(e.options.language, "CLICK_LABEL_READY")
                    }),
                    e.on("success", function() {
                        t("nc-iconfont icon-ok")
                    }),
                    e.on("beforeverify", function() {
                        t("nc-iconfont icon-close")
                    })
                }
                function c() {
                    h.style.display = "none"
                }
                function s() {
                    k || (t("nc-iconfont icon-onclick"),
                    p.style.display = "none",
                    h.style.display = "block",
                    e.fire("actionstart"),
                    l(),
                    t("nc-iconfont icon-load-c nc-loading"),
                    k = !0,
                    setTimeout(function() {
                        k = !1
                    }, 100))
                }
                function l() {
                    var n = _.getBoundingClientRect()
                      , t = _.clientWidth - v.clientWidth;
                    y.style.width = n.width + "px",
                    e.slider.disable(),
                    v.style.left = t + "px",
                    m.style.width = t + "px",
                    i.addClass(v, "moving"),
                    i.addClass(m, "moving")
                }
                function u() {
                    var e = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                    for (var n in e)
                        if (void 0 !== v.style[n])
                            return {
                                end: e[n]
                            };
                    return !1
                }
                function f() {
                    g.removeEventListener(b, f),
                    e.fire("actionend"),
                    w && w()
                }
                function d() {
                    g.addEventListener("touchstart", s),
                    g.addEventListener("click", s),
                    v.addEventListener(b, f)
                }
                var p, _, g, h, v, m, y, b;
                _ = n(".slider-holder .slider"),
                p = n(".click2slider-label"),
                g = n(".click2slide-btn"),
                h = n(".slider-holder"),
                v = n(".slider .button"),
                m = n(".slider .track"),
                y = n(".slider .track div"),
                b = u().end;
                var k, w;
                return {
                    label: p,
                    setClickBtnIcon: t,
                    init: a,
                    enable: d,
                    setLabelIcon: r
                }
            }
        }
        , function(module, exports, __webpack_require__) {
            "use strict";
            function _classCallCheck(e, n) {
                if (!(e instanceof n))
                    throw new TypeError("Cannot call a class as a function")
            }
            var _slicedToArray = function() {
                function e(e, n) {
                    var t = []
                      , i = !0
                      , o = !1
                      , r = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(i = (a = c.next()).done) && (t.push(a.value),
                        !n || t.length !== n); i = !0)
                            ;
                    } catch (s) {
                        o = !0,
                        r = s
                    } finally {
                        try {
                            !i && c["return"] && c["return"]()
                        } finally {
                            if (o)
                                throw r
                        }
                    }
                    return t
                }
                return function(n, t) {
                    if (Array.isArray(n))
                        return n;
                    if (Symbol.iterator in Object(n))
                        return e(n, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }()
              , _createClass = function() {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var i = n[t];
                        i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value"in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                    }
                }
                return function(n, t, i) {
                    return t && e(n.prototype, t),
                    i && e(n, i),
                    n
                }
            }()
              , html = __webpack_require__(81).html
              , kvTpl = __webpack_require__(19)
              , util = __webpack_require__(0)
              , cfg = __webpack_require__(14)
              , URL_MAP = __webpack_require__(12).URL_MAP
              , language = __webpack_require__(15).language
              , replaceLang = __webpack_require__(15).replaceLang
              , upResetIndex = __webpack_require__(15).upResetIndex
              , Promise = __webpack_require__(1)
              , Report = __webpack_require__(6)
              , doc = document
              , getElementById = function(e) {
                return doc.getElementById(e)
            }
              , styleEl = function(e, n, t) {
                return e.style[n] = t
            }
              , ERR_CODE_API_FAIL = "SCRAPE_API_FAIL"
              , FAIL_PREPARE = "fail_prepare"
              , FAIL_ANALYZE = "fail_analyze"
              , win = window;
            __webpack_require__(26),
            __webpack_require__(131);
            var obj_w = -1
              , obj_h = -1
              , Scrape = function() {
                function Scrape(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    _classCallCheck(this, Scrape),
                    this.nc = e,
                    this.prefix = e.prefix || "nc_" + e.index + "_",
                    this.root = e.el;
                    var t = {};
                    if (n.foreign && (t.language = t.language || "en"),
                    this.options = util.mix({}, cfg.default_options, t, e.options || {}, n),
                    this._last_x = -1,
                    this._last_y = -1,
                    this.stroke_size = n.stroke_size || cfg.default_stroke_width,
                    this.svr_data = {},
                    this._t_action = null,
                    this.is_downgraded = !1,
                    this._lang = language[this.options.language] || language.cn,
                    this.options.upLang)
                        for (var i in this.options.upLang)
                            this._lang = replaceLang(i, this.options.upLang[i]);
                    this.scrapeStart = !1,
                    this.showingHow = !1,
                    this.mousedown = !1,
                    this.reg();
                    var o = URL_MAP[this.options.foreign] || URL_MAP[0];
                    this.ajaxURL = util.mix(o, this.options.apimap);
                    var r = this;
                    window.report = function(e) {
                        r.report.call(r, e)
                    }
                }
                return _createClass(Scrape, [{
                    key: "reg",
                    value: function() {
                        var e = this
                          , n = this.nc;
                        n.reg("_on_loading", function() {
                            return e.loading_render()
                        }),
                        n.reg("loading", function() {
                            return e.loading_initGetSize()
                        }),
                        n.reg("verifying", function() {
                            return e.verifyMethod()
                        }),
                        n.reg("load_error", function() {
                            return e.on_load_error()
                        }),
                        n.reg("pass", function() {
                            return e.on_pass()
                        }),
                        n.reg("fail", function() {
                            return e.on_fail()
                        }),
                        n.reg("reseting", function() {
                            return e.on_reseting()
                        }),
                        n.reg("actiontimeout", function() {
                            return e.on_actiontimeout()
                        }),
                        n.on_leave_loading = function() {
                            return e.on_leave_loading()
                        }
                    }
                }, {
                    key: "report",
                    value: function(e) {
                        var n = this;
                        Report.log({
                            a: n.options.appkey,
                            t: n.options.token,
                            ns: UA_VERSION,
                            jsv: n.nc.inn_vars.v,
                            scene: n.options.scene,
                            jsType: n.nc.inn_vars.js_type,
                            usa: navigator.userAgent,
                            os: util.getOS(),
                            p: e || ""
                        }, n.ajaxURL.api_report)
                    }
                }, {
                    key: "loading_initGetSize",
                    value: function() {
                        var e = this
                          , n = this.options.objects;
                        return Promise.all(util.map(n, function(e) {
                            return new Promise(function(n, t) {
                                util.getImgSize(e, function(e, i) {
                                    e ? t([0, 0]) : n(i)
                                })
                            }
                            )
                        })).then(function(n) {
                            var t = 0
                              , i = 0;
                            util.map(n, function(e) {
                                t = Math.max(t, e[0]),
                                i = Math.max(i, e[1])
                            }),
                            e.obj_w = t,
                            e.obj_h = i
                        })["catch"](function(n) {
                            e.nc.fsm.loaderror()
                        })
                    }
                }, {
                    key: "on_leave_loading",
                    value: function() {
                        this.hideEl("loading")
                    }
                }, {
                    key: "on_reseting",
                    value: function() {
                        var e = this;
                        return Promise.resolve().then(function() {
                            return window.__captchah5__uab.resetSA && window.__captchah5__uab.resetSA(),
                            e.loading_render()
                        })
                    }
                }, {
                    key: "getParamOl",
                    value: function() {
                        var e = this.el_nc_canvas
                          , n = util.getElementLeft(e)
                          , t = util.getElementTop(e);
                        return {
                            x: n,
                            y: t
                        }
                    }
                }, {
                    key: "loading_sendInitReq",
                    value: function() {
                        var e = this;
                        return new Promise(function(n, t) {
                            var i = e.options
                              , o = e.getParamOl()
                              , r = window.__captchah5__uab.getUA && window.__captchah5__uab.getUA(window.__captchah5_uaboption) || win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || ""
                              , a = r.length > 3 ? r.slice(0, 3) : "";
                            util.jsonp(e.ajaxURL.api_prepare, {
                                a: i.appkey,
                                t: i.token,
                                scene: i.scene,
                                jsType: e.nc.inn_vars.js_type,
                                ol: '{"x":' + o.x + ',"y":' + o.y + "}",
                                os: util.getOS(),
                                w: e.size.width,
                                h: e.size.height,
                                ow: e.obj_w,
                                oh: e.obj_h,
                                v: e.nc.inn_vars.v,
                                uav: a
                            }, function(i, o) {
                                if ("ok" === i && (i = ""),
                                i || !o.success)
                                    return void t(i || "data fail");
                                if (!o.result || !o.result.result)
                                    return void t("bad data");
                                try {
                                    e._prepare_result = o.result.result,
                                    e.parsePrepareData(e._prepare_result)
                                } catch (r) {
                                    return void t("prepare data parse fail!")
                                }
                                e.putObjects();
                                var a = e.getEl("inform");
                                a.style.display = "block",
                                a.innerHTML = e._lang._ggk_start,
                                e.showHow(),
                                e.scrapeStart = !1,
                                util.addClass(e.root, "nc-prepared"),
                                util.removeClass(e.root, "nc-state-load-error");
                                var c = (e.nc.index > 0 ? e.nc.index : 1,
                                e.getEl("container"));
                                if (c && e.options.bg_back_prepared) {
                                    var s = util.getElementsByClassName("nc-bg", c)[0];
                                    s && (s.style.background = "url(" + e.options.bg_back_prepared + ")")
                                }
                                n()
                            }, 1e4)
                        }
                        )["catch"](function(n) {
                            e.nc._err = FAIL_PREPARE,
                            e.nc.fsm.loaderror()
                        })
                    }
                }, {
                    key: "parsePrepareData",
                    value: function parsePrepareData(result) {
                        try {
                            result = UA_Opt.decryptJSON(result)
                        } catch (e) {
                            throw e
                        }
                        if (!result.success)
                            throw new Error("decrypt fail2!");
                        result = result.data;
                        var data = result.replace(/&quot;/g, '"');
                        eval("data = " + data),
                        this.stroke_size = data.brushWidth,
                        this.svr_data = data,
                        this.session_id = data.sessionId
                    }
                }, {
                    key: "getEl",
                    value: function(e) {
                        return getElementById(this.prefix + e)
                    }
                }, {
                    key: "putObjects",
                    value: function() {
                        var e = this
                          , n = this.svr_data
                          , t = n.objectPoints
                          , i = t.points;
                        if (this._points = i,
                        !i || !Array.isArray(i) || i.length !== t.objectPointsCount)
                            throw new Error("Bad data: objectPoints.length is not equal to objectCounts!");
                        var o = this.getEl("bg");
                        o.innerHTML = util.map(i, function(n, t) {
                            var i = n.x
                              , o = n.y
                              , r = i - e.obj_w / 2
                              , a = o - e.obj_h / 2
                              , c = e.options.elements
                              , s = c[t % c.length];
                            return '<img src="' + s + '" class="nc-scrape-icon" style="left:' + r + "px;top:" + a + 'px;">'
                        }).join("\n")
                    }
                }, {
                    key: "getSize",
                    value: function() {
                        var e = {
                            width: this.options.width,
                            height: this.options.height
                        }
                          , n = this.options.hasOwnProperty("width")
                          , t = this.options.hasOwnProperty("height")
                          , i = this.getEl("nc-canvas");
                        return this.el_nc_canvas = i,
                        n || (e.width = i.offsetWidth),
                        e.width < cfg.min_width && (e.width = cfg.min_width),
                        styleEl(i, "width", e.width + "px"),
                        t || (e.height = i.offsetHeight),
                        e.height < cfg.min_height && (e.height = cfg.min_height),
                        styleEl(i, "height", e.height + "px"),
                        e
                    }
                }, {
                    key: "render_bg",
                    value: function() {
                        this.el_bg = this.getEl("bg"),
                        styleEl(this.el_bg, "width", this.size.width + "px"),
                        styleEl(this.el_bg, "height", this.size.height + "px")
                    }
                }, {
                    key: "mkGridId",
                    value: function(e, n) {
                        return [this.prefix, "grid", e, n].join("-")
                    }
                }, {
                    key: "render_surface_dg",
                    value: function() {
                        var e = this
                          , n = this.getEl("canvas-dg")
                          , t = this.size.width
                          , i = this.size.height;
                        n.style.width = t + "px",
                        n.style.height = i + "px",
                        n.style.display = "block";
                        for (var o = cfg.grid_size, r = Math.ceil(t / o), a = Math.ceil(i / o), c = [], s = this.options.bg_back, l = 0; l < a; l++)
                            for (var u = 0; u < r; u++) {
                                var f = o * l
                                  , d = o * u
                                  , p = {
                                    width: o + "px",
                                    height: o + "px",
                                    top: f + "px",
                                    left: d + "px",
                                    "background-image": "url(" + s + ")",
                                    "background-position": "-" + d + "px -" + f + "px"
                                }
                                  , _ = this.mkGridId(u, l)
                                  , g = '<div id="' + _ + '" class="nc-canvas-dg-grid" style="' + util.obj2style(p) + '"></div>';
                                c.push(g)
                            }
                        n.innerHTML = c.join("");
                        var h = this.getEl("inform");
                        util.on(h, "touchstart", function(n) {
                            return e.eventDown(n)
                        }),
                        util.on(h, "mousedown", function(n) {
                            return e.eventDown(n)
                        }),
                        util.on(n, "touchstart", function(n) {
                            return e.eventDown(n)
                        }),
                        util.on(document, "touchend", function(n) {
                            return e.eventUp(n)
                        }),
                        util.on(n, "touchmove", function(n) {
                            return e.eventMove(n)
                        }),
                        util.on(n, "mousedown", function(n) {
                            return e.eventDown(n)
                        }),
                        util.on(document, "mouseup", function(n) {
                            return e.eventUp(n)
                        }),
                        util.on(n, "mousemove", function(n) {
                            return e.eventMove(n)
                        })
                    }
                }, {
                    key: "render_surface",
                    value: function() {
                        var e = this;
                        this.hideEl("canvas-dg");
                        var n = this.el_canvas
                          , t = this.ctx
                          , i = this.size;
                        n.width = i.width,
                        n.height = i.height;
                        var o = this.getEl("cover");
                        o.style.width = i.width + "px",
                        o.style.height = i.height + "px";
                        var r = this.getEl("inform");
                        t.fillStyle = "#ffffff",
                        t.fillRect(0, 0, i.width, i.height);
                        for (var a = this.nc.index > 0 ? this.nc.index : 1, c = 0; c < util.getElementsByClassName("nc_bg").length; c++) {
                            var s = util.getElementsByClassName("nc_bg")[c];
                            s && this.options.bg_back && c === a - 1 && (s.style.background = "url(" + this.options.bg_back + ")")
                        }
                        var l = new Image;
                        l.src = this.options.bg_front,
                        l.onload = function() {
                            t.globalCompositeOperation = "source-over";
                            for (var e = l.naturalWidth ? [l.naturalWidth, l.naturalHeight] : [l.width, l.height], n = _slicedToArray(e, 2), o = n[0], r = n[1], a = Math.ceil(i.width / o), c = Math.ceil(i.height / r), s = 0; s < c; s++)
                                for (var u = 0; u < a; u++)
                                    t.drawImage(l, u * o, s * r);
                            t.globalCompositeOperation = "destination-out"
                        }
                        ,
                        l.onerror = function() {
                            t.globalCompositeOperation = "destination-out"
                        }
                        ,
                        util.on(r, "touchstart", function(n) {
                            return e.eventDown(n)
                        }),
                        util.on(r, "mousedown", function(n) {
                            return e.eventDown(n)
                        }),
                        util.on(n, "touchstart", function(n) {
                            return e.eventDown(n)
                        }),
                        util.on(document, "touchend", function(n) {
                            return e.eventUp(n)
                        }),
                        util.on(n, "touchmove", function(n) {
                            return e.eventMove(n)
                        }),
                        util.on(n, "mousedown", function(n) {
                            return e.eventDown(n)
                        }),
                        util.on(document, "mouseup", function(n) {
                            return e.eventUp(n)
                        }),
                        util.on(n, "mousemove", function(n) {
                            return e.eventMove(n)
                        })
                    }
                }, {
                    key: "getPos",
                    value: function(e) {
                        var n = doc.documentElement.scrollLeft || doc.body.scrollLeft
                          , t = doc.documentElement.scrollTop || doc.body.scrollTop
                          , i = this.options.renderTo
                          , o = getElementById(0 === i.indexOf("#") ? i.slice(1) : i)
                          , r = 0
                          , a = 0;
                        "absolute" == o.style.position && (r = o.offsetLeft,
                        a = o.offsetTop);
                        var c = (e.clientX + n || e.pageX) - (r + this.offsetX || 0)
                          , s = (e.clientY + t || e.pageY) - (a + this.offsetY || 0);
                        return [c, s]
                    }
                }, {
                    key: "_clearTo_dg",
                    value: function(e, n) {
                        var t = Math.floor(e / cfg.grid_size)
                          , i = Math.floor(n / cfg.grid_size)
                          , o = this.mkGridId(t, i)
                          , r = document.getElementById(o);
                        util.addClass(r, "nc-clean");
                        var a = this._grid_x_count * i + t;
                        this.matrix[a] = 0
                    }
                }, {
                    key: "_clearTo",
                    value: function(e, n) {
                        if (this.is_downgraded)
                            return this._clearTo_dg(e, n);
                        var t = this.ctx;
                        t.fillStyle = "#fff",
                        t.beginPath(),
                        t.arc(e, n, this.stroke_size / 2, 0, 2 * Math.PI),
                        t.fill(),
                        this._last_x >= 0 && this._last_y >= 0 && (t.beginPath(),
                        t.lineWidth = this.stroke_size,
                        t.moveTo(this._last_x, this._last_y),
                        t.lineTo(e, n),
                        t.stroke()),
                        this._last_x = e,
                        this._last_y = n
                    }
                }, {
                    key: "_calcRegion",
                    value: function(e, n, t, i) {
                        for (var o = this.ctx.getImageData(e, n, t, i).data, r = 0, a = 0; a < o.length; a += 4)
                            o[a] && o[a + 1] && o[a + 2] && o[a + 3] && r++;
                        return 1 - r / t / i
                    }
                }, {
                    key: "_calcRegion_dg",
                    value: function(e, n, t, i) {
                        for (var o = cfg.grid_size, r = Math.floor(e / o), a = Math.floor(n / o), c = Math.floor(t / o), s = Math.floor(i / o), l = 0, u = a; u < a + s; u++)
                            for (var f = r; f < r + c; f++) {
                                var d = this._grid_x_count * u + f;
                                l += this.matrix[d]
                            }
                        return 1 - l / c / s
                    }
                }, {
                    key: "calc_dg",
                    value: function() {
                        var e = this
                          , n = void 0
                          , t = void 0
                          , i = this.matrix.reduce(function(e, n) {
                            return e + n
                        }, 0);
                        n = 1 - i / this._grid_sum;
                        var o = this.is_downgraded ? .7 : .9
                          , r = this.obj_w / 2 * o
                          , a = this.obj_h / 2 * o;
                        return t = util.map(this._points, function(n) {
                            var t = n.x
                              , i = n.y;
                            return e._calcRegion_dg(t - r, i - a, e.obj_w, e.obj_h)
                        }),
                        {
                            r_all: n,
                            r_objects: t
                        }
                    }
                }, {
                    key: "calc",
                    value: function() {
                        var e = this;
                        if (this.is_downgraded)
                            return this.calc_dg();
                        var n = this.size
                          , t = n.width
                          , i = n.height
                          , o = this._calcRegion(0, 0, t, i)
                          , r = this.obj_w / 2
                          , a = this.obj_h / 2
                          , c = util.map(this._points, function(n) {
                            var t = n.x
                              , i = n.y;
                            return e._calcRegion(t - r, i - a, e.obj_w, e.obj_h)
                        });
                        return {
                            r_all: o,
                            r_objects: c
                        }
                    }
                }, {
                    key: "checkEnd",
                    value: function(e, n) {
                        var t = 0 === n.filter(function(e) {
                            return e < .5
                        }).length;
                        if ((e > .9 || t) && window.__captchah5__uab.isReadyForSC(window.__captchah5_uaboption.mIDs) && "ready" === this.nc.fsm.current)
                            this.verify();
                        else if (e > .9 && t) {
                            try {
                                UA_Opt.sendSA()
                            } catch (i) {}
                            win._n_bak = win._n;
                            var o = [win._n_bak, util.obj2str(this._prepare_result)];
                            this.nc._err = "3A",
                            this._fail_msg = this._updateSurveyUrl(this._lang._ggk_too_fast, o),
                            this.verify_fail()
                        }
                    }
                }, {
                    key: "verify",
                    value: function() {
                        var e = this.nc.fsm;
                        e.can("verify") && this.nc.fsm.verify()
                    }
                }, {
                    key: "verifyMethod",
                    value: function verifyMethod() {
                        var _this10 = this
                          , options = this.options;
                        return clearTimeout(this._t_action),
                        new Promise(function(resolve, reject) {
                            try {} catch (e) {
                                reject(e.message)
                            }
                            var trans = options.trans || {};
                            "string" == typeof trans && (trans = eval("0," + trans));
                            for (var arr = options.elementID || [], i = 0; i < arr.length; i++) {
                                var id = arr[i]
                                  , el = doc.getElementById(id);
                                el && (trans[id] = el.value)
                            }
                            win._n_bak = win._n,
                            util.jsonp(_this10.ajaxURL.api_analyze, {
                                a: options.appkey,
                                t: options.token,
                                s: _this10.session_id,
                                n: window.__captchah5__uab.getUA && window.__captchah5__uab.getUA(window.__captchah5_uaboption) || win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
                                p: util.obj2str(options.trans),
                                scene: options.scene,
                                jsType: _this10.nc.inn_vars.js_type,
                                lang: options.language,
                                v: _this10.nc.inn_vars.v
                            }, function(e, n) {
                                if ("ok" === e && (e = null),
                                e) {
                                    _this10.nc._err = _this10.nc._err || FAIL_ANALYZE;
                                    var t = _this10._lang._ggk_net_err;
                                    return t = _this10._updateSurveyUrl(t),
                                    _this10._fail_msg = t,
                                    void reject("net fail!")
                                }
                                if (n.success && n.result && n.result.success) {
                                    var i = n.result.result;
                                    if (0 === i.code)
                                        return _this10.verify_ok(i),
                                        void resolve();
                                    _this10.nc._err = _this10.nc._err || "4A"
                                }
                                reject(n.msg)
                            }, 1e4)
                        }
                        ).then(function() {
                            UA_Opt.reload(),
                            window.__captchah5__uab.resetSA()
                        })["catch"](function(e) {
                            UA_Opt.reload(),
                            window.__captchah5__uab.resetSA(),
                            _this10.nc._err = _this10.nc._err || "4A",
                            _this10.verify_fail()
                        })
                    }
                }, {
                    key: "verify_ok",
                    value: function(e) {
                        this.verify_result = e,
                        this.nc.fsm.verifypass()
                    }
                }, {
                    key: "verify_fail",
                    value: function(e) {
                        this.nc.fsm.verifyfail()
                    }
                }, {
                    key: "_upResetIndex",
                    value: function(e) {
                        return upResetIndex(e, this.nc.index)
                    }
                }, {
                    key: "_mkErrInfo",
                    value: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                          , t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                          , i = this.options
                          , o = e
                          , r = [i.appkey, i.token, i.scene]
                          , a = "";
                        switch (e) {
                        case FAIL_PREPARE:
                            !t && this.nc._log(FAIL_PREPARE, "prepare timeout", "{code: 401}"),
                            o = "2A",
                            a = "401";
                            break;
                        case FAIL_ANALYZE:
                            !t && this.nc._log(FAIL_ANALYZE, "analyze timeout", "{code: 404}"),
                            o = "2D",
                            a = "404";
                            break;
                        case "TIMEOUT_uab":
                            !t && this.nc._log("TIMEOUT_uab", "uab.js timeout", "{code: 403}"),
                            o = "2C",
                            a = "403";
                            break;
                        case "TIMEOUT_um":
                            !t && this.nc._log("TIMEOUT_um", "um.js timeout", "{code: 402}"),
                            o = "2B",
                            a = "402"
                        }
                        switch (o) {
                        case "3A":
                            r = r.concat(n),
                            !t && this.nc._log("ERR_SLIDE_TOO_FAST", "too few mp", "{code: 201, str:" + r + "}"),
                            a = "201";
                            break;
                        case "4A":
                            n = [this.session_id, win._n_bak],
                            r = r.concat(n),
                            !t && this.nc._log(ERR_CODE_API_FAIL + "_analyze", "blocked", "{code: 101, str:" + r + "}"),
                            a = "101";
                            break;
                        case "5A":
                            n = [this.session_id, win._n_bak],
                            r = r.concat(n),
                            !t && this.nc._log(ERR_CODE_API_FAIL + "_analyze", "blocked", "{code: 301, str:" + r + "}"),
                            a = "301"
                        }
                        return i.failCallback && i.failCallback("{code: " + a + ", str:" + r + "}"),
                        {
                            type: o,
                            str: r.map(function(e) {
                                return encodeURIComponent(e)
                            }).join(":-o")
                        }
                    }
                }, {
                    key: "_updateSurveyUrl",
                    value: function(e, n, t) {
                        e = e.replace(/%TOKEN\b/, this.options.token);
                        var i = this._mkErrInfo(this.nc._err, n, t);
                        return e = e.replace(/%TYPE\b/, i.type),
                        e = e.replace(/%STR\b/, i.str),
                        e = this._upResetIndex(e)
                    }
                }, {
                    key: "on_load_error",
                    value: function(e) {
                        var n = this;
                        return new Promise(function(e, t) {
                            util.addClass(n.root, "nc-state-load-error"),
                            util.removeClass(n.root, "nc-prepared");
                            var i = function o() {
                                var t = n.getEl("load-error")
                                  , i = void 0
                                  , r = n.getEl("cover");
                                if (!n.size || !r)
                                    return void setTimeout(o, 10);
                                n.showEl("load-error"),
                                i = n.size ? n.size.height : r.offsetHeight,
                                t.style.marginTop = (i - 80) / 2 + "px";
                                var a = n._lang._ggk_net_err;
                                a = n._updateSurveyUrl(a),
                                n.getEl("load-error-msg").innerHTML = a,
                                n.tryToUpdateErrIcon(),
                                e()
                            };
                            i()
                        }
                        )
                    }
                }, {
                    key: "on_pass",
                    value: function() {
                        var e = this;
                        return clearTimeout(this._t_action),
                        Promise.resolve().then(function() {
                            e.hideEl("canvas-dg");
                            var n = e.getEl("ok");
                            n.style.marginTop = (e.size.height - 80) / 2 + "px",
                            e.getEl("ok-msg").innerHTML = e._lang._ggk_success;
                            var t = e.options.callback;
                            "function" == typeof t && t(e.verify_result)
                        })
                    }
                }, {
                    key: "getErrIcon",
                    value: function(e) {
                        return this.options.obj_error
                    }
                }, {
                    key: "tryToUpdateErrIcon",
                    value: function() {
                        var e = this.getEl("fail-icon")
                          , n = this.getEl("load-error-icon");
                        if (n.src = e.src = this.options.obj_fail,
                        this.nc._err) {
                            var t = this.getErrIcon(this.nc._err);
                            t && (n.src = e.src = t)
                        }
                        this.nc._err = ""
                    }
                }, {
                    key: "on_fail",
                    value: function() {
                        var e = this;
                        return clearTimeout(this._t_action),
                        Promise.resolve().then(function() {
                            e.is_downgraded && e.hideEl("canvas-dg");
                            var n = e.getEl("fail");
                            n.style.marginTop = (e.size.height - 80) / 2 + "px";
                            var t = e._fail_msg || e._lang._ggk_fail;
                            t = e._updateSurveyUrl(t, "", !0),
                            e.getEl("fail-msg").innerHTML = t,
                            e._fail_msg = "",
                            e.tryToUpdateErrIcon();
                            var i = e.options.error;
                            "function" == typeof i && i()
                        })
                    }
                }, {
                    key: "actionTimeout",
                    value: function() {
                        this.nc.fsm.timeout()
                    }
                }, {
                    key: "on_actiontimeout",
                    value: function() {
                        var e = this;
                        return Promise.resolve().then(function() {
                            var n = e.getEl("fail");
                            n.style.marginTop = (e.size.height - 80) / 2 + "px",
                            e.hideEl("canvas-dg"),
                            e.nc._err = "5A";
                            var t = e._lang._ggk_action_timeout;
                            t = e._updateSurveyUrl(t),
                            e.getEl("fail-msg").innerHTML = t;
                            var i = e.options.error;
                            "function" == typeof i && i()
                        })
                    }
                }, {
                    key: "eventDown",
                    value: function(e) {
                        try {
                            e.preventDefault()
                        } catch (n) {}
                        if ("ready" == this.nc.fsm.current) {
                            this.scrapeStart || (this._last_x = -1,
                            this._last_y = -1,
                            this.render_surface()),
                            this.showingHow = !1,
                            this.scrapeStart = !0,
                            this.mousedown = !0,
                            this.getEl("inform").style.display = "none",
                            this.offsetX = this.el_nc_canvas.offsetLeft,
                            this.offsetY = this.el_nc_canvas.offsetTop;
                            var t = this.getPos(e)
                              , i = _slicedToArray(t, 2)
                              , o = i[0]
                              , r = i[1];
                            this._clearTo(o, r),
                            this._old_onselectstart = doc.body.onselectstart,
                            this._old_ondrag = doc.body.ondrag,
                            this.is_downgraded && (doc.body.onselectstart = doc.body.ondrag = function() {
                                return !1
                            }
                            )
                        }
                    }
                }, {
                    key: "eventMove",
                    value: function(e) {
                        var n = this;
                        try {
                            e.preventDefault()
                        } catch (t) {}
                        if (this.mousedown) {
                            clearTimeout(this._t_action),
                            "ready" === this.nc.fsm.current && (this._t_action = setTimeout(function() {
                                n.actionTimeout()
                            }, cfg.action_timeout)),
                            e.changedTouches && (e = e.changedTouches[e.changedTouches.length - 1]);
                            var i = this.getPos(e)
                              , o = _slicedToArray(i, 2)
                              , r = o[0]
                              , a = o[1];
                            this._clearTo(r, a);
                            var c = this.calc()
                              , s = c.r_all
                              , l = c.r_objects;
                            this.checkEnd(s, l)
                        }
                    }
                }, {
                    key: "eventUp",
                    value: function() {
                        this.mousedown = !1,
                        this._last_x = -1,
                        this._last_y = -1,
                        this.is_downgraded && (doc.body.onselectstart = this._old_onselectstart,
                        doc.body.ondrag = this._old_ondrag),
                        this._old_onselectstart = null,
                        this._old_ondrag = null
                    }
                }, {
                    key: "mkMatrix",
                    value: function() {
                        var e = this.size
                          , n = e.width
                          , t = e.height
                          , i = cfg.grid_size
                          , o = Math.ceil(n / i)
                          , r = Math.ceil(t / i)
                          , a = o * r;
                        this._grid_x_count = o,
                        this.matrix = util.fill(new Array(a), 1),
                        this._grid_sum = a
                    }
                }, {
                    key: "downgrade",
                    value: function() {
                        this.is_downgraded = !0,
                        this.mkMatrix()
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        var e = this
                          , n = this.getEl("btn-refresh")
                          , t = this.getEl("btn-info");
                        util.on(n, "touchend", function(n) {
                            try {
                                n.preventDefault()
                            } catch (n) {}
                            e.nc.reset()
                        }),
                        util.on(n, "mouseup", function(n) {
                            if (e.scrapeStart) {
                                try {
                                    n.preventDefault()
                                } catch (n) {}
                                e.nc.reset()
                            }
                        }),
                        util.on(t, "touchend", function(n) {
                            try {
                                n.preventDefault()
                            } catch (n) {}
                            e.showHow()
                        }),
                        util.on(t, "mouseup", function(n) {
                            try {
                                n.preventDefault()
                            } catch (n) {}
                            e.showHow()
                        })
                    }
                }, {
                    key: "showHow",
                    value: function() {
                        if (!this.showingHow && !this.scrapeStart) {
                            var e = this.getEl("show-how")
                              , n = [[20, 6], [19, 7], [18, 10], [17, 13], [15, 15], [13, 18], [11, 24], [8, 27], [6, 32], [5, 36], [3, 41], [2, 44], [1, 47], [1, 49], [0, 55], [0, 58], [0, 64], [0, 67], [0, 68], [0, 68], [1, 68], [3, 68], [5, 68], [6, 68], [8, 67], [10, 65], [12, 63], [14, 61], [16, 59], [18, 56], [22, 53], [26, 48], [31, 43], [36, 37], [41, 31], [45, 27], [49, 24], [58, 17], [61, 14], [64, 12], [67, 9], [69, 8], [70, 7], [72, 6], [73, 6], [72, 7], [71, 9], [70, 11], [67, 15], [66, 20], [63, 26], [62, 30], [61, 35], [60, 40], [59, 43], [58, 45], [58, 49], [57, 51], [57, 52], [57, 54], [57, 55], [57, 56], [57, 57], [58, 57], [62, 57], [65, 55], [78, 47], [84, 43], [89, 38], [96, 33], [101, 28], [105, 25], [108, 22], [112, 19], [115, 17], [118, 15], [120, 13], [122, 12], [125, 10], [128, 9], [129, 8], [131, 7], [132, 7], [133, 7], [133, 10], [133, 15], [132, 24], [131, 29], [129, 35], [128, 39], [128, 42], [127, 45], [127, 48], [127, 49], [127, 51], [127, 52], [127, 52], [128, 52], [131, 50], [135, 46], [141, 42], [149, 37], [156, 32], [162, 26], [167, 22], [172, 19], [175, 16], [177, 14], [180, 12], [183, 11], [185, 9], [189, 8], [191, 6], [193, 4], [199, 1], [201, 0], [203, 0], [204, 0], [204, 2], [204, 5], [204, 11], [204, 15], [201, 21], [200, 26], [200, 32], [199, 36], [199, 40], [199, 44], [199, 46], [199, 47], [199, 48], [200, 48], [201, 48], [204, 47], [206, 46], [209, 44], [211, 43], [215, 39], [218, 36], [222, 33], [226, 30], [228, 28], [231, 24], [234, 21], [237, 19], [239, 17], [241, 16], [242, 15], [243, 14], [244, 12], [245, 11], [246, 10], [247, 9]]
                              , t = 2
                              , i = 0
                              , o = 0
                              , r = n.length;
                            e.style.display = "block",
                            e.style.left = "0px";
                            var a = this
                              , c = function s() {
                                return a.scrapeStart ? void (e.style.display = "none") : (a.showingHow = !0,
                                void (i < r ? (e.style.left = n[i][0] + "px",
                                e.style.top = n[i][1] + 5 + "px",
                                0 == i && a.render_surface(),
                                a._clearTo(n[i][0] + 20, n[i][1] + 5),
                                i++,
                                setTimeout(s, 10)) : (o++,
                                o < t ? (a._last_x = -1,
                                a._last_y = -1,
                                i = 0,
                                setTimeout(s, 500)) : (a._last_x = -1,
                                a._last_y = -1,
                                e.style.display = "none",
                                a.render_surface(),
                                a.showingHow = !1))))
                            };
                            c()
                        }
                    }
                }, {
                    key: "showEl",
                    value: function(e) {
                        var n = this.getEl(e);
                        n && (n.style.display = "block")
                    }
                }, {
                    key: "hideEl",
                    value: function(e) {
                        var n = this.getEl(e);
                        n && (n.style.display = "none")
                    }
                }, {
                    key: "loading_render",
                    value: function() {
                        var e = this;
                        return new Promise(function(n, t) {
                            try {
                                var i = e.nc;
                                if (e.root.innerHTML = kvTpl.render(html, {
                                    nc: i,
                                    prefix: e.prefix,
                                    inform: "",
                                    loading: e._lang._ggk_loading,
                                    obj_ok: e.options.obj_ok,
                                    obj_error: e.options.obj_error
                                }),
                                e.showEl("loading"),
                                e.hideEl("load-error"),
                                e.getEl("title").innerHTML = e._lang._ggk_guide,
                                e.bindEvents(),
                                e.size = e.getSize(),
                                e.getEl("container").style.width = e.size.width + "px",
                                e.render_bg(),
                                e.el_canvas = e.getEl("canvas"),
                                !e.el_canvas.getContext || !(e.ctx = e.el_canvas.getContext("2d")))
                                    return e.downgrade(),
                                    e.render_surface_dg(),
                                    void n();
                                e.render_surface(),
                                n()
                            } catch (o) {
                                t(o)
                            }
                        }
                        )
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
                            return 0
                        }
                          , n = this.loading_sendInitReq();
                        n.then(e)["catch"](e)
                    }
                }]),
                Scrape
            }();
            module.exports = Scrape
        }
        , function(e, n, t) {
            "use strict";
            var i = t(79);
            n.create = function(e, n) {
                return new i(e,n)
            }
        }
        , function(e, n, t) {
            "use strict";
            n.html = '<div id="{{prefix}}container" class="nc-container nc-scrape"><div id="{{prefix}}for-tmp" class="nc-for-tmp"></div><div id="{{prefix}}toolbar" class="nc-toolbar"><span id="{{prefix}}title" class="nc-title">{{title}}</span> <span class="nc-btns"><i id="{{prefix}}btn-refresh" class="nc_iconfont icon_refresh">&#xe607;</i> <i id="{{prefix}}btn-info" class="nc_iconfont icon_info">&#xe602;</i></span></div><div id="{{prefix}}nc-canvas" class="nc-canvas"><div id="{{prefix}}bg" class="nc-bg"></div><div id="{{prefix}}cover" class="nc-cover"><canvas id="{{prefix}}canvas" class="nc-canvas-node"></canvas><div id="{{prefix}}canvas-dg" class="nc-canvas-dg" unselectable="on" style="-moz-user-select:none;-webkit-user-select:none" onselectstart="return false"></div><div id="{{prefix}}ok" class="nc-verify-ok"><img src="{{obj_ok}}" alt=""><div><i class="nch5_iconfont icon_success">&#xe686;</i><span id="{{prefix}}ok-msg"></span></div></div><div id="{{prefix}}fail" class="nc-verify-fail"><img id="{{prefix}}fail-icon" src="{{obj_error}}" alt=""><div><i class="nch5_iconfont icon_error">&#xe604;</i><span id="{{prefix}}fail-msg"></span></div></div><div id="{{prefix}}loading" class="nc-loading"><div id="nc-loading-circle" class="nc-loading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div><span>{{loading}}</span></div><div id="{{prefix}}inform" class="nc-inform">{{inform}}</div><div id="{{prefix}}load-error" class="nc-load-error"><img id="{{prefix}}load-error-icon" src="{{obj_error}}" alt=""><div><i class="nch5_iconfont icon_error">&#xe604;</i><span id="{{prefix}}load-error-msg">Load Error!</span></div></div></div><div id="{{prefix}}show-how" class="nc-show-how"></div></div></div>'
        }
        , function(e, n, t) {
            "use strict";
            var i = t(13).StateMachine;
            n.makeFSM = function(e) {
                var n = i.create({
                    initial: "initially",
                    events: [{
                        name: "init",
                        from: "initially",
                        to: "loading"
                    }, {
                        name: "load",
                        from: "loading",
                        to: "ready"
                    }, {
                        name: "loaderror",
                        from: "loading",
                        to: "load_error"
                    }, {
                        name: "continueloading",
                        from: "load_error",
                        to: "loading"
                    }, {
                        name: "verify",
                        from: ["ready", "fail"],
                        to: "verifying"
                    }, {
                        name: "verifyfail",
                        from: "verifying",
                        to: "fail"
                    }, {
                        name: "verifyerror",
                        from: "verifying",
                        to: "error"
                    }, {
                        name: "verifytwostep",
                        from: "verifying",
                        to: "need_two_step_verify"
                    }, {
                        name: "verifypass",
                        from: "verifying",
                        to: "pass"
                    }, {
                        name: "reset",
                        from: ["ready", "verifying", "fail", "error", "pass", "ts_ready", "ts_verifying", "ts_fail", "ts_error", "ts_pass"],
                        to: "reseting"
                    }, {
                        name: "resetdone",
                        from: "reseting",
                        to: "ready"
                    }, {
                        name: "showtwostep",
                        from: "need_two_step_verify",
                        to: "ts_loading"
                    }, {
                        name: "ts_load",
                        from: "ts_loading",
                        to: "ts_ready"
                    }, {
                        name: "ts_verify",
                        from: ["ts_ready", "ts_fail"],
                        to: "ts_verifying"
                    }, {
                        name: "ts_verifyfail",
                        from: "ts_verifying",
                        to: "ts_fail"
                    }, {
                        name: "ts_verifyerror",
                        from: "ts_verifying",
                        to: "ts_error"
                    }, {
                        name: "ts_verifyerror2",
                        from: "ts_error",
                        to: "error"
                    }, {
                        name: "ts_verifypass",
                        from: "ts_verifying",
                        to: "ts_pass"
                    }, {
                        name: "ts_passed",
                        from: "ts_pass",
                        to: "pass"
                    }]
                });
                return n.onleavestate = function(e, n, t) {}
                ,
                n.onenterstate = function(e, n, t) {}
                ,
                t(89).init(n, e),
                t(88).init(n, e),
                t(92).init(n, e),
                t(99).init(n, e),
                t(87).init(n, e),
                t(86).init(n, e),
                t(91).init(n, e),
                t(90).init(n, e),
                t(96).init(n, e),
                t(98).init(n, e),
                t(29).init(n, e),
                t(95).init(n, e),
                t(94).init(n, e),
                t(97).init(n, e),
                t(93).init(n, e),
                t(85).init(n, e),
                n
            }
        }
        , function(e, n, t) {
            "use strict";
            var i = window
              , o = document
              , r = t(0)
              , a = t(5)
              , c = t(12).URL_MAP;
            n.makeNet = function(e, n) {
                function t(e, n, t, i) {
                    r.jsonp(e, n, function(e, n) {
                        t(e, n)
                    }, i, g.retryTimes || 5)
                }
                function s() {
                    var e = {
                        a: g.appkey,
                        t: g.token,
                        scene: g.scene,
                        lang: g.language,
                        v: a.version,
                        href: location.href.split("?")[0],
                        comm: "{}"
                    }
                      , n = {};
                    try {
                        navigator.connection ? (n.cntp = encodeURIComponent(navigator.connection.type),
                        n.cneftp = encodeURIComponent(navigator.connection.effectiveType)) : n.cn = "ns"
                    } catch (i) {
                        n.cn = "e_cn"
                    }
                    try {
                        if (navigator.getBattery) {
                            var o = Promise.race([navigator.getBattery().then(function(e) {
                                e ? (n.btryc = e.charging,
                                n.btryl = e.level) : n.btry = "ns"
                            }), new Promise(function(e, n) {
                                setTimeout(function() {
                                    return n("abort")
                                }, 1e3)
                            }
                            )]);
                            o.then(function(i) {
                                e.comm = JSON.stringify(n),
                                t(v.initialize, e, function(e, n) {
                                    "ok" === e && n && n.success && 0 === n.result.code,
                                    n && n.result ? n.result : {}
                                }, g.timeout || 1e4)
                            })["catch"](function(i) {
                                n.btry = "ab",
                                e.comm = JSON.stringify(n),
                                t(v.initialize, e, function(e, n) {
                                    "ok" === e && n && n.success && 0 === n.result.code,
                                    n && n.result ? n.result : {}
                                }, g.timeout || 1e4)
                            })
                        } else
                            n.btry = "ns",
                            e.comm = JSON.stringify(n),
                            t(v.initialize, e, function(e, n) {
                                "ok" === e && n && n.success && 0 === n.result.code,
                                n && n.result ? n.result : {}
                            }, g.timeout || 1e4)
                    } catch (i) {
                        n.btry = "e_btry",
                        e.comm = JSON.stringify(n),
                        t(v.initialize, e, function(e, n) {
                            "ok" === e && n && n.success && 0 === n.result.code,
                            n && n.result ? n.result : {}
                        }, g.timeout || 1e4)
                    }
                }
                function l(e) {
                    try {
                        if (this.netErrorReported)
                            return;
                        this.netErrorReported = 1;
                        var n = {
                            a: "neterr" + e,
                            t: g.token,
                            scene: g.scene,
                            lang: g.language,
                            v: a.version,
                            href: location.href.split("?")[0],
                            comm: "{}"
                        };
                        t(v.initialize, n, function(e, n) {
                            "ok" === e && n && n.success && 0 === n.result.code,
                            n && n.result ? n.result : {}
                        }, g.timeout || 1e4)
                    } catch (i) {}
                }
                function u(e) {
                    for (var n = e.offsetLeft, t = e.offsetParent; null !== t; )
                        n += t.offsetLeft,
                        t = t.offsetParent;
                    return n
                }
                function f(e) {
                    for (var n = e.offsetTop, t = e.offsetParent; null !== t; )
                        n += t.offsetTop,
                        t = t.offsetParent;
                    return n
                }
                function d(e) {
                    return parseInt(e.offsetWidth + "a" + e.offsetHeight + "a" + u(e) + "a" + f(e), 11).toString(16)
                }
                function p(e) {
                    function r() {
                        debugger;
                        if (p || window.__captchah5__umidToken.indexOf("defaultToken")) {
                            clearInterval(_),
                            c.umidToken = window.__captchah5__umidToken;
                            var o = {
                                a: g.appkey,
                                t: g.token,
                                scene: g.scene,
                                p: JSON.stringify(c),
                                n: window.__captchah5__uab.getUA && window.__captchah5__uab.getUA(window.__captchah5_uaboption) || i._n || (UA_Opt.LogVal ? i[UA_Opt.LogVal] : "") || "",
                                v: a.v
                            }
                              , r = function(t, i) {
                                var o = "ok" === t && i && i.success && 0 === i.result.code
                                  , r = i && i.result ? i.result : {};
                                n.sid = h = r.csessionid,
                                n.captcha_type = r.value,
                                e({
                                    pass: o,
                                    state: t
                                }, r)
                            }
                              , s = g.timeout || 1e4;
                            g.replaceCallback ? g.replaceCallback(v.analyze, o, r, s) : t(v.analyze, o, r, s)
                        } else
                            f++ > 100 && clearInterval(_)
                    }
                    var c = g.trans || {};
                    "string" == typeof c && (c = JSON.parse(c));
                    var s = g.elementID || [];
                    s.forEach(function(e) {
                        var n = o.getElementById(e);
                        n && (c[e] = n.value)
                    });
                    var l;
                    for (l in n.inner_trans)
                        n.inner_trans.hasOwnProperty(l) && (c[l] = n.inner_trans[l]);
                    try {
                        c.ncSessionID = d(document.getElementById(n.prefix + "-stage-1").getElementsByTagName("div")[0])
                    } catch (u) {
                        c.ncSessionID = "0"
                    }
                    try {
                        UA_Opt.sendSA()
                    } catch (u) {}
                    var f = 0
                      , p = void 0;
                    setTimeout(function() {
                        p = !0
                    }, 1e3);
                    var _ = setInterval(r, 100);
                    setTimeout(r, 1)
                }
                function _(e, n, o, r) {
                    var c = {
                        checkcode: JSON.stringify({
                            answer: e + "",
                            captchaToken: n + ""
                        }),
                        csessionid: h,
                        a: g.appkey,
                        t: g.token,
                        n: window.__captchah5__uab.getUA && window.__captchah5__uab.getUA(window.__captchah5_uaboption) || i._n || (UA_Opt.LogVal ? i[UA_Opt.LogVal] : "") || "",
                        v: a.v
                    };
                    t(v.checkcode, c, function(e, n) {
                        o(e, n, h)
                    }, r || 1e4)
                }
                var g = n.options
                  , h = ""
                  , v = c[g.foreign] || c[0];
                return v = r.mix(v, g.apimap),
                {
                    initialize: s,
                    netErrorReport: l,
                    postSlide: p,
                    postCaptcha: _,
                    send: t
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            var i = document
              , o = t(0)
              , r = t(11);
            n.makeSlider = function(e) {
                function n(n) {
                    return e.container.querySelector(n)
                }
                function t(n) {
                    if ("ready" == e.fsm.current && !w) {
                        w = !0,
                        d();
                        var t = v.getBoundingClientRect();
                        X = t.left,
                        T = X + t.width - _,
                        b.style.width = t.width + "px";
                        var o = (n.touches ? n.touches[0] : n).clientX;
                        x = X - o,
                        i.addEventListener("touchmove", c, !0),
                        i.addEventListener("mousemove", c, !0),
                        e.fire("actionstart")
                    }
                }
                function a() {
                    w = !1,
                    i.removeEventListener("touchmove", c, !0),
                    i.removeEventListener("mousemove", c, !0),
                    A < T && (o.addClass(m, "mv-back"),
                    o.addClass(y, "mv-back"),
                    m.style.left = "0",
                    y.style.width = g + "px",
                    setTimeout(function() {
                        o.delClass(m, "mv-back"),
                        o.delClass(y, "mv-back")
                    }, 500))
                }
                function c(n) {
                    n.preventDefault(),
                    A = (n.touches ? n.touches[0] : n).clientX + x,
                    A < X ? A = X : A > T && (A = T);
                    var t = A - X;
                    m.style.left = t + "px",
                    y.style.width = t + g + "px",
                    A == T && (a(),
                    e.fire("actionend"),
                    h && h())
                }
                function s() {
                    m.addEventListener("touchstart", t),
                    m.addEventListener("touchend", a),
                    m.addEventListener("mousedown", t),
                    m.addEventListener("mouseup", a),
                    k.addEventListener("touchstart", t),
                    k.addEventListener("touchend", a),
                    k.addEventListener("mousedown", t),
                    k.addEventListener("mouseup", a)
                }
                function l() {
                    m.removeEventListener("touchstart", t),
                    m.removeEventListener("touchend", a),
                    m.removeEventListener("mousedown", t),
                    m.removeEventListener("mouseup", a),
                    k.removeEventListener("touchstart", t),
                    k.removeEventListener("touchend", a),
                    k.removeEventListener("mousedown", t),
                    k.removeEventListener("mouseup", a)
                }
                function u(e, t) {
                    var i = n(".track div");
                    i.innerHTML = e,
                    i.className = "bg-" + (t || "green")
                }
                function f(e) {
                    var t = n(".slider .icon");
                    t.className = "icon " + e
                }
                function d() {
                    _ = m.getBoundingClientRect().width,
                    g = _ / 2
                }
                function p(t) {
                    h = t,
                    v = n(".slider"),
                    m = n(".button"),
                    y = n(".track"),
                    b = n(".track div"),
                    k = n(".label"),
                    k.innerHTML = r.trans(e.options.language, "LOADING");
                    var i = navigator.userAgent;
                    i && i.match(/Android/) && o.addClass(k, "no-anim")
                }
                var _, g, h, v, m, y, b, k, w, x, A, X, T;
                return {
                    init: p,
                    enable: s,
                    disable: l,
                    setTitle: u,
                    setIcon: f
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e, n) {
                e.onreset = function() {}
                ,
                e.onbeforereset = function() {
                    n._reset(),
                    n.ui.init(),
                    n.slider.enable()
                }
                ,
                e.onafterreset = function() {}
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e, n) {
                e.onentererror = function() {
                    var e = n.options;
                    "function" == typeof e.errorCallback && e.errorCallback("00"),
                    n.ui.setActiveStage(3, "00"),
                    n.fire("error"),
                    n.options.error && n.options.error()
                }
                ,
                e.onleaveerror = function() {}
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e, n) {
                e.onenterfail = function() {
                    function e(e, n, t) {
                        for (var i = 0, o = n, r = e.length; o < r; )
                            i <<= 3,
                            i += e.charCodeAt(o),
                            o += t;
                        i < 0 && (i = 0 - i);
                        for (var a = "0123456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ", c = ""; i >= 58; ) {
                            var s = i % 58;
                            c = a[s] + c,
                            i = (i - s) / 58
                        }
                        c += a[(new Date).getDate()];
                        var l = c.length;
                        return l > 6 && (c = c.substr(l - 6, l - 1)),
                        c
                    }
                    var t = e(n.options.token, 0, 1)
                      , i = n.options;
                    "function" == typeof i.failCallback && i.failCallback(t),
                    n.ui.setActiveStage(3, "error:" + t),
                    n.fire("fail")
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e, n) {
                e.onenterload_error = function(e, t, i, o) {
                    var r = n.options;
                    "function" == typeof r.errorCallback && r.errorCallback(o),
                    n.ui.setActiveStage(3, o),
                    n.options.error && n.options.error("load_error")
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            var i = window
              , o = t(28)
              , r = t(0)
              , a = t(101).makeUI;
            n.init = function(e, n) {
                function t(e) {
                    return n._TEXT(e)
                }
                function c(e) {
                    return n.container.querySelector(e)
                }
                e.onenterloading = function() {
                    var e = "https://g.alicdn.com/mtb/lib-windvane/2.1.1/windvane.js";
                    /windvane/i.test(navigator.userAgent) && r.loadScript(e, function() {
                        i.WindVane && i.WindVane.call("aluWVJSBridge", "getUmid", {}, function(e) {
                            n.inner_trans.nc_wvumidToken = e.aluUmid
                        })
                    }),
                    n.ui = a(n),
                    n.ui.init(),
                    n._reset();
                    var s = !0;
                    if (o.load(n, function(e, t) {
                        s = !1,
                        e ? (n.fsm.loaderror(t),
                        n.net.netErrorReport(t)) : n.fsm.load()
                    }),
                    s) {
                        var l = c(".label");
                        l.innerHTML = t("LOADING"),
                        n.slider.setIcon("nc-loading nc-iconfont icon-load-c"),
                        n.fire("init")
                    }
                }
                ,
                e.onleaveloading = function() {
                    n.slider.setIcon("nc-iconfont icon-slide-arrow")
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e, n) {
                e.onenterneed_two_step_verify = function(t, i, o, r) {
                    n.fire("beforeverify"),
                    e.showtwostep(r)
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e, n) {
                function t(e) {
                    return n._TEXT(e)
                }
                e.onenterpass = function(e, i, o, r) {
                    n.slider.setTitle(t("CHECK_Y")),
                    n.slider.setIcon("yes nc-iconfont icon-ok");
                    var a = n.options;
                    r.sig = r.sig || r.value,
                    "function" == typeof a.callback && a.callback(r),
                    n.fire("success");
                    var c;
                    c = !a.hasOwnProperty("bannerHidden") || a.bannerHidden,
                    setTimeout(function() {
                        c && (n.container.style.display = "none")
                    }, 1e3)
                }
                ,
                e.onleavepass = function() {}
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e, n) {
                function t(e) {
                    return n._TEXT(e)
                }
                function i(e) {
                    return n.container.querySelector(e)
                }
                e.onenterready = function() {
                    var e = i(".label")
                      , o = "https://img.alicdn.com/tfs/TB1GhJXQXXXXXa.XFXXXXXXXXXX-75-52.png";
                    n.options.isClick ? e.innerHTML = "" : e.innerHTML = t("SLIDER_LABEL");
                    var r = n.container.querySelector(".stage2 .textbox")
                      , a = r && r.querySelector("input");
                    if (r.addEventListener("click", function() {
                        a && a.focus()
                    }, !1),
                    n.options.logo) {
                        var c = n.container.querySelector(".slider");
                        c.style.backgroundImage = "url(" + o + ")",
                        c.style.backgroundPosition = "0 50%",
                        c.style.backgroundRepeat = "repeat-x"
                    }
                    n.fire("ready")
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e, n) {
                e.onenterreseting = function() {
                    e.resetdone()
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            var i = t(16);
            n.init = function(e, n) {
                e.onenterts_error = function() {
                    i.hide(n.prefix),
                    e.ts_verifyerror2()
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e, n) {
                function t(e) {
                    var t = document.querySelector("#" + n.prefix + "-stage-2");
                    return t.querySelector(e)
                }
                function i() {
                    var e = t(".tips");
                    e.style.display = "block",
                    o > 0 && clearTimeout(o),
                    o = setTimeout(function() {
                        o = -1,
                        e.style.display = "none"
                    }, 2e3)
                }
                var o = -1;
                e.onenterts_fail = function() {
                    var e = n.options;
                    UA_Opt.Token = (new Date).getTime() + ":" + e.token,
                    UA_Opt.reload && UA_Opt.reload(),
                    n.updateImg(),
                    i(),
                    n.fire("fail")
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            var i = t(12).URL_MAP
              , o = t(0)
              , r = t(29);
            n.init = function(e, n) {
                function t(e) {
                    return n._TEXT(e)
                }
                function a(e) {
                    var t = document.querySelector("#" + n.prefix + "-stage-2");
                    return t.querySelector(e)
                }
                function c() {
                    function i() {
                        var e = 0 === h.value.length;
                        k.style.display = e ? "block" : "none",
                        v.style.display = e ? "none" : "block",
                        y.disabled = e
                    }
                    function c(t) {
                        var i = {
                            style: n.captcha_type || "default",
                            identity: l.appkey,
                            sessionid: n.sid,
                            rnd: Math.random(),
                            token: l.token
                        };
                        o.jsonp(u.get_img, i, function(n, i) {
                            var o = "ok" === n && i && i.success && 0 === i.result.resultCode;
                            o ? t(i) : "timeout" === n && e.can("verifyerror") && e.verifyerror(i)
                        }, l.timeout || 1e4)
                    }
                    function f(t) {
                        return "ts_verifying" !== e.current && (t && n.fire("beforeverify"),
                        void c(function(e) {
                            s = e,
                            _ = s.result.data[0],
                            r.setCaptchaToken(s.result.captchaToken),
                            g.src = _,
                            g.onload = function() {
                                t && n.fire("afterverify")
                            }
                            ,
                            p()
                        }))
                    }
                    function d() {
                        f(!0)
                    }
                    function p() {
                        h.value = "",
                        h.focus(),
                        i()
                    }
                    var _, g = a("img.code"), h = a(".input"), v = a(".icon.clear"), m = a(".icon.refresh"), y = a(".btn-ok"), b = a(".tips"), k = a(".placeholder");
                    k.innerHTML = t("TEXTBOX_HOLDER"),
                    y.innerHTML = t("BUTTON_OK"),
                    b.innerHTML = t("TIPS_TITLE"),
                    m.onclick = d,
                    g.onclick = d,
                    n.updateImg = f;
                    var w = 0
                      , x = 10;
                    g.onerror = function() {
                        var e = _.indexOf("?") === -1 ? "?" : "&";
                        w++,
                        w >= n.options.retryTimes || w > x || setTimeout(function() {
                            g.src = _ + e + "__retry=" + w
                        }, 1e3)
                    }
                    ,
                    f()
                }
                var s, l = n.options, u = i[l.foreign] || i[0];
                u = o.mix(u, l.apimap),
                e.onenterts_loading = function(i, o, r, a) {
                    n.slider.setTitle(t("CHECK_N"), "red"),
                    n.slider.setIcon("no nc-iconfont icon-close"),
                    n.options.verifycallback && n.options.verifycallback(a),
                    setTimeout(function() {
                        n.ui.setActiveStage(2),
                        c(),
                        e.ts_load()
                    }, 500)
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            var i = t(16);
            n.init = function(e, n) {
                e.onenterts_pass = function(n, t, i, o) {
                    o.sig = o.sig || o.value,
                    e.ts_passed(o)
                }
                ,
                e.onleavets_pass = function() {
                    i.hide(n.prefix),
                    n.ui.setActiveStage(1)
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e, n) {
                e.onenterts_ready = function() {
                    n.fire("afterverify");
                    var e = n.container.querySelector(".stage2 .textbox")
                      , t = e && e.querySelector("input");
                    t && t.focus()
                }
            }
        }
        , function(e, n, t) {
            "use strict";
            n.init = function(e, n) {
                function t(e) {
                    return n._TEXT(e)
                }
                e.onenterverifying = function() {
                    function e() {
                        n.net.postSlide(function(e, t) {
                            return i != -1 && clearTimeout(i),
                            "timeout" === e.state ? void (n.fsm.can("verifyerror") && n.fsm.verifyerror(t)) : (e.pass ? n.fsm.can("verifypass") && n.fsm.verifypass(t) : 300 == t.code ? n.fsm.can("verifyfail") && n.fsm.verifyfail(t) : n.fsm.can("verifytwostep") && n.fsm.verifytwostep(t),
                            void (n.options.isClick && n.slider.setIcon("nc-hidden")))
                        })
                    }
                    n.slider.disable();
                    var i = setTimeout(function() {
                        i = -1,
                        n.slider.setTitle(t("LOADING")),
                        n.slider.setIcon("nc-loading nc-iconfont icon-load-c")
                    }, 100);
                    e()
                }
                ,
                e.onleaveverifying = function() {}
            }
        }
        , function(e, n, t) {
            "use strict";
            var i = '\n<div class="slider">\n    <div class="label"></div>\n    <div class="track">\n        <div class="bg-green"></div>\n    </div>\n    <div class="button">\n        <div class="icon nc-iconfont icon-slide-arrow" id="@prefix@_n1t"></div>\n    </div>\n</div>  \n'.trim()
              , o = '\n<div class = "click2slider">\n  <div class="click2slide-btn">\n    <div class="icon nc-iconfont icon-load-c nc-loading"></div>\n  </div>\n  <div class="click2slider-label"></div>\n  <div class="slider-holder">\n    <div class="slider">\n        <div class="label"></div>\n        <div class="track">\n            <div class="bg-green"></div>\n        </div>\n        <div class="button">\n            <div class="icon nc-iconfont icon-slide-arrow" id="@prefix@_n1t"></div>\n        </div>\n   </div> \n    </div>\n</div>\n'.trim();
            n.make = function(e, n) {
                var t = n ? o : i
                  , r = ('\n    <div class="_nc">\n    <div id="@prefix@-stage-1" class="stage stage1">\n        ' + t + '\n    </div>\n    <div id="@prefix@-stage-2" class="stage stage2">\n        <div class="textbox">\n            <input class="input" type="text" maxlength="6" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">\n            <div class="placeholder">\u9a8c\u8bc1\u7801</div>\n            <div class="icon tip nc-iconfont icon-message"></div>\n            <div class="icon clear nc-iconfont icon-close-white"></div>\n            <div class="icon refresh nc-iconfont icon-refresh"></div>\n            <img class="code" width="100" height="30" alt="">\n        </div>\n        <div class="ope">\n            <button class="btn-ok"></button>\n            <div class="tips"></div>\n        </div>\n    </div>\n    <div id="@prefix@-stage-3" class="stage stage3">\n        <div class="title"></div>\n        <span id = "@prefix@_refresh1" class="menu refresh">\n            <span id = "@prefix@_refresh2" class="icon nc-iconfont icon-refresh"></span><span id = "@prefix@_refresh3" class="label"></span>\n        </span>\n        <span class="menu nc-sep"></span>\n        <span class="menu feedback">\n            <span class="icon nc-iconfont icon-message"></span><span class="label"></span>\n        </span>\n    </div>\n    </div>\n    ').trim();
                return r.replace(/\n\s+/g, "\n").replace(/@prefix@/g, e)
            }
        }
        , function(e, n, t) {
            "use strict";
            var i = window
              , o = t(16)
              , r = t(100)
              , a = t(84)
              , c = t(78)
              , s = t(0);
            n.makeUI = function(e) {
                function n(n) {
                    return e._TEXT(n)
                }
                function t(n) {
                    return e.container.querySelector(n)
                }
                function l() {
                    var n;
                    for (n = 1; n <= 3; n++)
                        g[n] = t("#" + e.prefix + "-stage-" + n),
                        g[n].style.display = "none";
                    u(1)
                }
                function u(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                      , i = g[h];
                    if (i && (i.style.display = "none"),
                    i = g[n],
                    i.style.display = "block",
                    h = n,
                    3 == n && t) {
                        var o = document.getElementById(e.prefix + "-stage-3").getElementsByTagName("div")[0].innerHTML;
                        o = o + "(" + t + ")",
                        document.getElementById(e.prefix + "-stage-3").getElementsByTagName("div")[0].innerHTML = o
                    }
                    2 !== n || v.inline || f()
                }
                function f() {
                    o.setTEXT(n),
                    o.show(e.prefix)
                }
                function d() {
                    function i() {
                        var n = 0 === a.value.length;
                        u.style.display = n ? "block" : "none",
                        "ts_verifying" === e.fsm.current && (n = !0),
                        s.disabled = n,
                        c.style.display = n ? "none" : "block"
                    }
                    function o() {
                        a.value = "",
                        a.focus(),
                        i()
                    }
                    function r() {
                        a.value && e.fsm.ts_verify()
                    }
                    var a = t(".input")
                      , c = t(".icon.clear")
                      , s = t(".btn-ok")
                      , l = t(".tips")
                      , u = t(".placeholder");
                    u.innerHTML = n("TEXTBOX_HOLDER"),
                    s.innerHTML = n("BUTTON_OK"),
                    l.innerHTML = n("TIPS_TITLE"),
                    setInterval(i, 500),
                    a.onkeydown = function(e) {
                        13 == e.keyCode ? r() : setTimeout(i, 0)
                    }
                    ,
                    a.onchange = i,
                    c.onclick = o,
                    s.onclick = r
                }
                function p() {
                    var o = t(".menu.refresh")
                      , r = t(".menu.feedback");
                    if (o.onclick = function() {
                        "load_error" == e.getState() ? (e.fsm.continueloading(),
                        e.slider.enable()) : e.has("refresh") ? e.fire("refresh") : NoCaptcha.reset()
                    }
                    ,
                    v.useHref) {
                        var a = document.getElementsByClassName("menu feedback")[0]
                          , c = document.createElement("a");
                        c.href = n("FEEDBACK_URL"),
                        c.appendChild(a.children[0]),
                        c.appendChild(a.children[0]),
                        a.appendChild(c)
                    } else
                        r.onclick = function() {
                            i.open(n("FEEDBACK_URL"))
                        }
                        ;
                    t(".stage3 .title").innerHTML = n("ERROR_TITLE"),
                    t(".menu.refresh .label").innerHTML = n("ERROR_RELOAD"),
                    t(".menu.feedback .label").innerHTML = n("ERROR_FEEDBACK")
                }
                var _ = {}
                  , g = []
                  , h = -1
                  , v = e.options;
                return _.setActiveStage = u,
                _.init = function() {
                    o.hide(e.prefix),
                    e.container.innerHTML = r.make(e.prefix, v.isClick),
                    s.addClass(e.container, "nc-container"),
                    e.slider = a.makeSlider(e),
                    e.slider.init(function() {
                        e.fsm.can("verify") && e.fsm.verify()
                    }),
                    e.options.isClick && (e.click2slider = c.makeClickSlider(e),
                    e.click2slider.init(function() {
                        e.fsm.can("verify") && e.fsm.verify()
                    }),
                    e.click2slider.enable()),
                    d(),
                    p(),
                    l()
                }
                ,
                _
            }
        }
        , function(e, n, t) {
            "use strict";
            t(103);
            var i = t(80);
            n.create = function(e) {
                return i.create(e, {})
            }
            ,
            n.render = function(e, n) {
                e.render(n)
            }
        }
        , function(e, n, t) {
            "use strict";
            !function(e, n) {
                var t = e.createElement("style");
                if (e.getElementsByTagName("head")[0].appendChild(t),
                t.styleSheet)
                    t.styleSheet.disabled || (t.styleSheet.cssText = n);
                else
                    try {
                        t.innerHTML = n
                    } catch (i) {
                        t.innerText = n
                    }
            }(document, ".nc-wrapper.nc-ggk{font-size:12px}")
        }
        , , , , function(e, n, t) {
            "use strict";
            !function() {
                var e = window;
                if (!e.__nch5) {
                    e.UA_Opt = e.UA_Opt || {};
                    var n = t(70).makeNC
                      , i = n();
                    i.v = t(5).v,
                    e.__nch5 = i,
                    e.NoCaptcha = i
                }
            }()
        }
        , , , , , , , , , , , , , , , , , , , , , , function(e, n, t) {
            n = e.exports = t(8)(),
            n.push([e.i, '@font-face {\n  font-family: \'nc_iconfont\';\n  src: url("//at.alicdn.com/t/font_1465353706_4784257.eot");\n  src: url("//at.alicdn.com/t/font_1465353706_4784257.eot?#iefix") format(\'embedded-opentype\'), url("//at.alicdn.com/t/font_1465353706_4784257.woff") format(\'woff\'), url("//at.alicdn.com/t/font_1465353706_4784257.ttf") format(\'truetype\'), url("//at.alicdn.com/t/font_1465353706_4784257.svg#iconfont") format(\'svg\');\n}\n@font-face {\n  font-family: \'nch5_iconfont\'; /* project id 384029 */\n  src: url("//at.alicdn.com/t/font_384029_rhzpmteb25oecdi.eot");\n  src: url("//at.alicdn.com/t/font_384029_rhzpmteb25oecdi.eot?#iefix") format(\'embedded-opentype\'), url("//at.alicdn.com/t/font_384029_rhzpmteb25oecdi.woff") format(\'woff\'), url("//at.alicdn.com/t/font_384029_rhzpmteb25oecdi.ttf") format(\'truetype\'), url("//at.alicdn.com/t/font_384029_rhzpmteb25oecdi.svg#ncpc_iconfont") format(\'svg\');\n}\n.nc_iconfont {\n  font-family: "nc_iconfont";\n  color: hl_color;\n  font-size: 16px;\n  font-style: normal;\n}\n.nch5_iconfont {\n  font-family: "nch5_iconfont";\n  color: hl_color;\n  font-size: 16px;\n  font-style: normal;\n}\n.nc-container.nc-scrape {\n  font-size: 12px;\n  line-height: 20px;\n}\n.nc-container.nc-scrape a {\n  text-decoration: none;\n}\n.nc-container.nc-scrape .nc-toolbar {\n  height: 30px;\n  line-height: 30px;\n  font-size: 14px;\n}\n.nc-container.nc-scrape .nc-toolbar .nc-btns {\n  float: right;\n  height: 30px;\n  overflow: hidden;\n}\n.nc-container.nc-scrape .nc-toolbar .nc-btns i {\n  cursor: pointer;\n  margin-right: 5px;\n}\n.nc-container.nc-scrape .nc-toolbar .nc-btns i.icon_refresh {\n  color: #999;\n}\n.nc-container.nc-scrape .nc-toolbar .nc-btns i.icon_info {\n  color: #e98e0c;\n}\n.nc-container.nc-scrape .nc-canvas {\n  position: relative;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n}\n.nc-container.nc-scrape .nc-canvas .nc-bg {\n  position: absolute;\n  background: #ccc url("https://img.alicdn.com/tfs/TB1w2oOSFXXXXb4XpXXXXXXXXXX-100-80.png");\n}\n.nc-container.nc-scrape .nc-canvas .nc-bg img.nc-scrape-icon {\n  position: absolute;\n}\n.nc-container.nc-scrape .nc-canvas .nc-cover {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.nc-container.nc-scrape .nc-canvas .nc-cover canvas {\n  position: absolute;\n  background-color: transparent;\n}\n.nc-container.nc-scrape .nc-canvas .nc-cover .nc-canvas-dg {\n  position: absolute;\n}\n.nc-container.nc-scrape .nc-canvas .nc-cover .nc-canvas-dg-grid {\n  position: absolute;\n}\n.nc-container.nc-scrape .nc-canvas .nc-cover .nc-canvas-dg-grid.nc-clean {\n  background: transparent !important;\n}\n.nc-container.nc-scrape .nc-canvas .nc-cover .nc-inform,\n.nc-container.nc-scrape .nc-canvas .nc-cover .nc-loading {\n  font-size: 14px;\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  width: 100%;\n  line-height: 1.3em;\n  text-align: center;\n  margin-top: -0.65em;\n  color: #3c3c3c;\n}\n.nc-container.nc-scrape .nc-canvas .nc-show-how {\n  position: absolute;\n  display: none;\n  background: url("https://img.alicdn.com/tfs/TB1aWq8gTvI8KJjSspjXXcgjXXa-53-49.png") no-repeat;\n  width: 68px;\n  height: 53px;\n  z-index: 10;\n  top: 20px;\n  margin-left: 20px;\n}\n.nc-container.nc-scrape .nc-canvas .nc-tblogin-verify-success {\n  text-align: center;\n  vertical-align: middle;\n  line-height: 31px;\n}\n.nc-container.nc-scrape .nc-canvas .nc-tblogin-verify-success .icon_ok {\n  margin-right: 10px;\n  color: #78c430;\n  position: relative;\n  top: 1px;\n}\n.nc-container.nc-scrape .nc-verify-ok,\n.nc-container.nc-scrape .nc-verify-fail,\n.nc-container.nc-scrape .nc-load-error {\n  display: none;\n  margin: auto;\n  height: 80px;\n  width: 250px;\n  text-align: center;\n  font-size: 14px;\n  color: #3c3c3c;\n  line-height: 20px;\n}\n.nc-container.nc-scrape .nc-verify-ok img,\n.nc-container.nc-scrape .nc-verify-fail img,\n.nc-container.nc-scrape .nc-load-error img {\n  display: block;\n  vertical-align: middle;\n  float: left;\n  margin-right: 10px;\n}\n.nc-container.nc-scrape .nc-verify-ok>div,\n.nc-container.nc-scrape .nc-verify-fail>div,\n.nc-container.nc-scrape .nc-load-error>div {\n  width: 180px;\n  height: 80px;\n  display: table;\n}\n.nc-container.nc-scrape .nc-verify-ok>div .icon_error,\n.nc-container.nc-scrape .nc-verify-fail>div .icon_error,\n.nc-container.nc-scrape .nc-load-error>div .icon_error,\n.nc-container.nc-scrape .nc-verify-ok>div .icon_success,\n.nc-container.nc-scrape .nc-verify-fail>div .icon_success,\n.nc-container.nc-scrape .nc-load-error>div .icon_success {\n  position: relative;\n  top: 18px;\n  margin-right: 5px;\n  color: #f40;\n}\n.nc-container.nc-scrape .nc-verify-ok>div .icon_success,\n.nc-container.nc-scrape .nc-verify-fail>div .icon_success,\n.nc-container.nc-scrape .nc-load-error>div .icon_success {\n  color: #78c430;\n}\n.nc-container.nc-scrape .nc-verify-ok>div>span,\n.nc-container.nc-scrape .nc-verify-fail>div>span,\n.nc-container.nc-scrape .nc-load-error>div>span {\n  display: table-cell;\n  vertical-align: middle;\n  height: 80px;\n  text-align: left;\n}\n.nc-pass .nc-container.nc-scrape .nc-toolbar .nc-btns {\n  visibility: hidden;\n}\n.nc-pass .nc-container.nc-scrape .nc-bg img {\n  display: none;\n}\n.nc-pass .nc-container.nc-scrape .nc-cover canvas,\n.nc-pass .nc-container.nc-scrape .nc-cover .nc-verify-fail {\n  display: none;\n}\n.nc-pass .nc-container.nc-scrape .nc-verify-ok {\n  display: block;\n}\n.nc-pass .nc-container.nc-scrape .nc-canvas .nc-bg {\n  background: #bbf0c6 url("https://img.alicdn.com/tfs/TB1KDxCSVXXXXasXFXXXXXXXXXX-100-80.png");\n}\n.nc-fail .nc-container.nc-scrape .nc-canvas .nc-bg {\n  background: url("https://img.alicdn.com/tfs/TB1w2oOSFXXXXb4XpXXXXXXXXXX-100-80.png");\n}\n.nc-fail .nc-container.nc-scrape .nc-canvas .nc-bg img {\n  display: none;\n}\n.nc-fail .nc-container.nc-scrape .nc-cover canvas,\n.nc-fail .nc-container.nc-scrape .nc-cover .nc-verify-ok,\n.nc-fail .nc-container.nc-scrape .nc-cover .nc-canvas-dg {\n  display: none;\n}\n.nc-fail .nc-container.nc-scrape .nc-verify-fail {\n  display: block;\n}\n.nc-state-load-error .nc-container.nc-scrape .nc-load-error {\n  display: block;\n}\n.nc-state-load-error .nc-container.nc-scrape canvas,\n.nc-state-load-error .nc-container.nc-scrape .nc-inform {\n  display: none;\n}\n.nc-prepared .nc-container.nc-scrape .nc-bg {\n  background: #ccc url("https://img.alicdn.com/tfs/TB1skE5SFXXXXb3XXXXXXXXXXXX-100-80.png");\n}\n.nc-container.nc-scrape #nc-loading-circle {\n  margin: 0 10px;\n}\n.nc-container.nc-scrape #nc-loading-circle .sk-circle:before {\n  background-color: #fff;\n}\n', ""])
        }
        , , function(e, n, t) {
            var i = t(129);
            "string" == typeof i && (i = [[e.i, i, ""]]),
            t(10)(i, {}),
            i.locals && (e.exports = i.locals)
        }
        , , function(e, n, t) {
            function i(e) {
                return t(o(e))
            }
            function o(e) {
                var n = r[e];
                if (!(n + 1))
                    throw new Error("Cannot find module '" + e + "'.");
                return n
            }
            var r = {
                "./actiontimeout": 30,
                "./actiontimeout.js": 30,
                "./destroyed": 31,
                "./destroyed.js": 31,
                "./error": 32,
                "./error.js": 32,
                "./fail": 33,
                "./fail.js": 33,
                "./initially": 34,
                "./initially.js": 34,
                "./load_error": 35,
                "./load_error.js": 35,
                "./loading": 36,
                "./loading.js": 36,
                "./need_two_step_verify": 37,
                "./need_two_step_verify.js": 37,
                "./pass": 38,
                "./pass.js": 38,
                "./ready": 39,
                "./ready.js": 39,
                "./reseting": 40,
                "./reseting.js": 40,
                "./ts_error": 41,
                "./ts_error.js": 41,
                "./ts_fail": 42,
                "./ts_fail.js": 42,
                "./ts_loading": 43,
                "./ts_loading.js": 43,
                "./ts_pass": 44,
                "./ts_pass.js": 44,
                "./ts_ready": 45,
                "./ts_ready.js": 45,
                "./ts_verifying": 46,
                "./ts_verifying.js": 46,
                "./verifying": 47,
                "./verifying.js": 47
            };
            i.keys = function() {
                return Object.keys(r)
            }
            ,
            i.resolve = o,
            e.exports = i,
            i.id = 133
        }
        ])
    };
    chkQuerySet(),
    cond() > GREY_RATIO ? STABLE_ACTION() : NEW_ACTION()
}();

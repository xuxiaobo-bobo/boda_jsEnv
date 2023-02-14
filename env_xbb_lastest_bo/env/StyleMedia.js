

StyleMedia = function StyleMedia() { return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor") }
bodavm.toolsFunc.safeProto(StyleMedia, "StyleMedia");
bodavm.toolsFunc.defineProperty(StyleMedia.prototype, "matchMedium", { configurable: true, enumerable: true, get: function matchMedium() { return bodavm.toolsFunc.dispatch(this, StyleMedia.prototype, "StyleMedia", "matchMedium", arguments) }, set: undefined });

// styleMedia对象
var styleMedia = {}
styleMedia.__proto__=StyleMedia.prototype;



bodavm.memory.globalobj['StyleMedia'] = function StyleMedia() { return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor") }
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['StyleMedia'] , "StyleMedia");
bodavm.toolsFunc.defineProperty('StyleMedia', "matchMedium", { configurable: true, enumerable: true, get: function matchMedium() { return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['StyleMedia'].prototype, "StyleMedia", "matchMedium", arguments) }, set: undefined },'prototype');

// styleMedia对象
bodavm.memory.globalobj[ 'styleMedia']= {}
bodavm.memory.globalobj[ 'styleMedia'].__proto__=bodavm.memory.globalobj['StyleMedia'] .prototype;

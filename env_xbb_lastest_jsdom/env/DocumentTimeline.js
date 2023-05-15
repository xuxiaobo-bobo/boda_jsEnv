// DocumentTimeline对象
bodavm.memory.globalobj['DocumentTimeline'] = function DocumentTimeline(){this._boarg= new bodaobj.window.DocumentTimeline();this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DocumentTimeline'], "DocumentTimeline");
bodavm.memory.globalobj['DocumentTimeline'].prototype.__proto__=bodavm.memory.globalobj['AnimationTimeline'].prototype;
bodavm.memory.globalobj['DocumentTimeline'].__proto__=bodavm.memory.globalobj['AnimationTimeline'];

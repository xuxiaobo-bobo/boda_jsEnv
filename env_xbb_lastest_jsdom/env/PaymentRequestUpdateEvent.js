// PaymentRequestUpdateEvent对象
bodavm.memory.globalobj['PaymentRequestUpdateEvent'] = function PaymentRequestUpdateEvent(){if (!(this instanceof PaymentRequestUpdateEvent)){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PaymentRequestUpdateEvent': 1 argument required, but only 0 present.")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PaymentRequestUpdateEvent'], "PaymentRequestUpdateEvent");
bodavm.memory.globalobj['PaymentRequestUpdateEvent'].prototype.__proto__=bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['PaymentRequestUpdateEvent'].__proto__=bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('PaymentRequestUpdateEvent', "updateWith", {configurable:true, enumerable:true, writable:true, value:function updateWith (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentRequestUpdateEvent'].prototype, "PaymentRequestUpdateEvent", "updateWith", arguments)}},'prototype');

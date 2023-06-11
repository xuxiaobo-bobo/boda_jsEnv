// PaymentResponse对象
PaymentResponse = function PaymentResponse(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof PaymentResponse) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('PaymentResponse 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(PaymentResponse, "PaymentResponse");
PaymentResponse.prototype.__proto__=EventTarget.prototype;
PaymentResponse.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "requestId", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "methodName", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "details", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "shippingAddress", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "shippingOption", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "payerName", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "payerEmail", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "payerPhone", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "onpayerdetailchange", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "complete", {configurable:true, enumerable:true, writable:true, value:function complete (){return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "complete", arguments)}},);
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "retry", {configurable:true, enumerable:true, writable:true, value:function retry (){return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "retry", arguments)}},);
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "toJSON", {configurable:true, enumerable:true, writable:true, value:function toJSON (){return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "toJSON", arguments)}},);

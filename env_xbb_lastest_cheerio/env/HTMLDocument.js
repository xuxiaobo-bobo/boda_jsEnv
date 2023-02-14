// HTMLDocument对象
HTMLDocument = function HTMLDocument(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(HTMLDocument, "HTMLDocument");
HTMLDocument.prototype.__proto__=Document.prototype;
HTMLDocument.__proto__=Document;

// document对象
// document= {}



var document = {}

document.__proto__=HTMLDocument.prototype

Object.setPrototypeOf(document, HTMLDocument.prototype);
bodavm.toolsFunc.defineProperty(document,"location",{configurable:false, enumerable:true, get:function location () {return bodavm.toolsFunc.dispatch(this,document,"document","location_get",arguments,)},set:function location () {return bodavm.toolsFunc.dispatch(this,document,"document","location_set",arguments)},});
bodavm.toolsFunc.defineProperty(document,"f",{configurable:true, enumerable:true, writable:true, value:{},});
bodavm.toolsFunc.defineProperty(document,"jQuery110208558905071218827",{configurable:true, enumerable:true, writable:true, value:5});
bodavm.toolsFunc.defineProperty(document,"writeln",{configurable:true, enumerable:true, writable:true, value:function writeln() {return bodavm.toolsFunc.dispatch(this,document,"document","writeln",arguments)}});
bodavm.toolsFunc.defineProperty(document,"write",{configurable:true, enumerable:true, writable:true, value:function write() {return bodavm.toolsFunc.dispatch(this,document,"document","write",arguments)}});
//解析的root

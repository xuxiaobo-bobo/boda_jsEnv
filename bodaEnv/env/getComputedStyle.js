// getComputedStyle对象
bodaEnv.memory.globlProtoObj["getComputedStyle"] = {
  getComputedStyle(ele, b) {
    //debugger
    let res ;
    let targetNode = bodaEnv.memory.WeakMap.get(ele);
    let tagName=targetNode.tagName;
    if (bodaEnv.memory.domDocument[tagName] && (bodaEnv.memory.domDocument[tagName].includes(targetNode))){
      res= bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2'];
	  res=bodaEnv.toolsFunc.proxyHelper(res, 'CSSStyleDeclaration2::proxyHelper');

      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(res,'length',366)
    }else{
      res= bodaEnv.memory.globlProtoObj['CSSStyleDeclaration3'];
	  res=bodaEnv.toolsFunc.proxyHelper(res, 'CSSStyleDeclaration2::proxyHelper');

      bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(res,'length',0)

    }
    
    //debugger
    bodaEnv.memory.WeakMap.set(res, ele);
    bodaEnv.toolsFunc.console_copy(`使用 getComputedStyle args->${ele} , ${b}`, ` -> res ->`, res);
    return res;
  }
}.getComputedStyle;
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["getComputedStyle"], "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["getComputedStyle"], "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'getComputedStyle'
});
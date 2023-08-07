// getComputedStyle对象
/*
getComputedStyle = (ele,b) => {
  //debugger
  let res=bodavm.memory.notDefined['CSSStyleDeclaration']
  bodavm.toolsFunc.proxyHelper(res,'CSSStyleDeclaration::proxyHelper')
  let targetNode=bodavm.toolsFunc.getProtoAttr.call(ele,ele)
  debugger
  bodavm.toolsFunc.setProtoAttr.call(res,res,targetNode)
  console.log(`使用 getComputedStyle args->${ele} , ${b}`,` -> res ->`,res );
  return res
};
*/
getComputedStyle = {
  getComputedStyle(ele, b) {
    let res = bodavm.memory.notDefined['CSSStyleDeclaration'];
    bodavm.toolsFunc.proxyHelper(res, 'CSSStyleDeclaration::proxyHelper');
    let targetNode = bodavm.toolsFunc.getProtoAttr.call(ele, ele);
    //debugger
    bodavm.toolsFunc.setProtoAttr.call(res, res, targetNode);
    console.log_copy(`使用 getComputedStyle args->${ele} , ${b}`, ` -> res ->`, res);
    return res;
  }
}.getComputedStyle;
bodavm.toolsFunc.safefunction(getComputedStyle, "getComputedStyle");
bodavm.toolsFunc.defineProperty(getComputedStyle, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(getComputedStyle, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'getComputedStyle'
});
//未解决
var ccc=navigator.plugins
ccc[0]==ccc[0]
//未解决
mouseEvent  isTrusted
//未解决
console .memory
//未解决  js可以通过给window代理,解决delete的问题,但是挂上代理又会被检测,几乎无解
form = document.createElement("form");
form.id = "__Zm9ybS5pZAo__";
form.action = "https://ucenter.miit.gov.cn/login.jsp";
document.body.appendChild(form);
if (window["__Zm9ybS5pZAo__"] !== form){console.log("你被检测了")}
if (!("__Zm9ybS5pZAo__" in window) || window.hasOwnProperty("__Zm9ybS5pZAo__")){console.log("你被检测了")}
if (!(delete window["__Zm9ybS5pZAo__"])){console.log("你被检测了")}
if (window["__Zm9ybS5pZAo__"] !== form){console.log("你被检测了")}
if (Object.getOwnPropertyDescriptor(window, "__Zm9ybS5pZAo__")){console.log("你被检测了")}
window["__Zm9ybS5pZAo__"] = 1;
if (window["__Zm9ybS5pZAo__"] === form){console.log("你被检测了")}
if (!Object.getOwnPropertyDescriptor(window, "__Zm9ybS5pZAo__")){console.log("你被检测了")}
delete window["__Zm9ybS5pZAo__"];
if (window["__Zm9ybS5pZAo__"] !== form){console.log("你被检测了")}



//未解决   //可以通过不hook eval 解决
!new function(){eval("this.a=1")}().a
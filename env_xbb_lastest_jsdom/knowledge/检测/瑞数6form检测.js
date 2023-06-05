form = document.createElement("form");
form.id = "__Zm9ybS5pZAo__";
form.action = "https://ucenter.miit.gov.cn/login.jsp";
document.body.appendChild(form);
if (window["__Zm9ybS5pZAo__"] !== form){console.log("你被检测了1")}
if (!("__Zm9ybS5pZAo__" in window) || window.hasOwnProperty("__Zm9ybS5pZAo__")){console.log("你被检测了2")}
if (!(delete window["__Zm9ybS5pZAo__"])){console.log("你被检测了3")}
if (window["__Zm9ybS5pZAo__"] !== form){console.log("你被检测了4")}
if (Object.getOwnPropertyDescriptor(window, "__Zm9ybS5pZAo__")){console.log("你被检测了5")}
window["__Zm9ybS5pZAo__"] = 1;
if (window["__Zm9ybS5pZAo__"] === form){console.log("你被检测了6")}
if (!Object.getOwnPropertyDescriptor(window, "__Zm9ybS5pZAo__")){console.log("你被检测了7")}
delete window["__Zm9ybS5pZAo__"];
if (window["__Zm9ybS5pZAo__"] !== form){console.log("你被检测了8")}
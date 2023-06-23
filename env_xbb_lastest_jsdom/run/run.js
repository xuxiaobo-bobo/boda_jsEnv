window.addEventListener('load', function (event) {
    let span = document.createElement("span");
    if (event.isTrusted) {
        span.innerText = "load事件触发";
        document.body.append(span);
    }

});
document.getElementById("testDiv").addEventListener('click', function (event) {
    if (event.isTrusted) {
        event.target.innerText = "testDiv被点击";
    }

});


document.getElementById("testDiv").click();

debugger;;;
console.log(document.getElementById("testDiv").innerText);







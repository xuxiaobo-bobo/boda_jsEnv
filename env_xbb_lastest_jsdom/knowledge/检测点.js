//html 放入框架的解析器中
html = `
<!doctype html>
<html>
<body>
    <head>
        <div style="">
            <meta content="">
            <meta>
        </div>
        <div>
        bobo1
        </div>
        <div>
            <div>
                
            </div>
        bobo2
        </div>
    </head>
    <iframe>
        <div></div>
    </iframe>
    <script>
        <div></div>
    </script>
    <script></script>
</body>
</html>
`


var endsign = ''



function test_window() {
    if (self.window.top.self.top == top.window.self.window || self.window.top.self.top == top.window.self || self.window.top.self.top.parent == top.window.self) {
        endsign += 1

    } else {
        console.log('self window  top parent 可以被检测 ')
    }

}
test_window()

function test_console() {
    if (JSON.stringify(console) == '{"memory":{}}') {
        if (JSON.stringify([console, 1, 2, 3]) == '[{"memory":{}},1,2,3]') {
            endsign += 1

        } else {
            console.log('JSON.stringify([console, 1, 2, 3]) 可以被检测 ')
        }
    } else {
        console.log('JSON.stringify(console) 可以被检测 ')
    }
}

test_console()

function test_document_activeElement() {
    try {
        Document.prototype.activeElement
        console.log('Document.prototype.activeElement  可以被检测');
    } catch (e) {
        endsign += 1
        try {
            Window.prototype.PERSISTENT
            endsign += 1
        } catch {
            console.log('Window.prototype.PERSISTENT  可以被检测');

        }
    }
}
test_document_activeElement()

function test_window_location() {
    if (Object.getOwnPropertyDescriptor(window, 'location').configurable) {
        console.log(`window location 被检测`);
    } else {
        // endsign += 'location'
    }
}
test_window_location()




function test_tostring() {
    //tostring检测
    if (console.log + '' == 'function log() { [native code] }' || console.log.toString().toString() == 'function log() { [native code] }') {
        // endsign += 'G'
    } else {
        console.log(`console.log tostring 可以被检测  `)
    }
}
test_tostring()






function test_append() {
    var bbb = document.createElement('div')
    let aaa = document.body.append(bbb)
    if (aaa) {
        console.log(`document.body.append 可以被检测`);
    }
    let cccc = document.body.appendChild(bbb)
    if (cccc = undefined) {
        console.log(`document.body.append 可以被检测`);

    }
}
test_append()




function test_define() {
    var aaa = Object.defineProperty(document.documentElement.children, 0, {
        value: 10
    })
    if (aaa[0]instanceof HTMLHeadElement) {
    } else {
        console.log(`Object.defineProperty(document.documentElement.children, 0,{value:10}) 被检测`);
    }

}

function s() {}
var aaaa = Object.getOwnPropertyDescriptors(this).s.configurable
if (aaaa) {
    console.log(`Object.getOwnPropertyDescriptors(this).s.configurable 可以被检测`)
} else {
}

function test_entries() {
    let list_ = Object.entries(Document)
    if (list_.length > 0) {
        console.log(`Object.entries(Document) 可以被检测`);
    }
}
test_entries()

function window_require() {
    let require = window.require
    if (require) {
        console.log(`window.require 可以被检测`);
    }
}

window_require()



function test_action() {
    let form = document.createElement("form");
    let input1 = document.createElement("input");
    input1.id = "username";
    input1.content = "action";
    input1.name = "action";
    form.appendChild(input1);
    let input2 = document.createElement("input");
    input2.name = "textContent";
    input2.id = "password";
    form.appendChild(input2);
    let input3 = document.createElement("input");
    input3.id = "innerText";
    input3.type = "submit";
    input3.name = "id";
    form.appendChild(input3);
    a = form.action;
    b = form.textContent;
    c = form.id;
    d = form.innerText;
    if (a.name == 'action' && a.id == 'username' && b.name == 'textContent' && b.id == 'password' && c.id == "innerText" && c.name == 'id' && d.id == 'innerText' && d.name == 'id') {
        console.log(`test_action 检测通过`)
    } else {
        console.log(`test_action 可以被检测`);
    }

}

test_action()




function test_vm2_FAIL() {
    if (window.VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL) {
        console.log(`window.VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL 可以被检测`)
    }
}
test_vm2_FAIL()



//新增
//
window.__proto__=Location.prototype
//
function check(){
    try{
        location.__proto__ = {};
        console.log("被检测了");
    }catch(e){
        
    }
    if(location.__proto__ !== Location.prototype){
        console.log("被检测了");
    }
}
check();
//
this.__proto__={}

//
var script = document.createElement("script");
document.body.appendChild(script);
var htmlCollect = document.body.getElementsByTagName("script");
var desp = Object.getOwnPropertyDescriptors(htmlCollect);
var divcollect=document.body.getElementsByTagName("div");
var div2 = Object.getOwnPropertyDescriptors(divcollect);
debugger
for(let i in desp){
    if (desp[i]["enumerable"] && desp[i]["configurable"] && !desp[i]["writable"]){
        try{
            Object.defineProperty(htmlCollect, "0", {value:1});
            console.log("[*]  111你被检测了")
        }catch (e) {

        }
    }else{
        console.log("[*] 222你被检测了");
    }
    let result = delete htmlCollect[0];
    if (result){
        console.log("[*] 333你被检测了");
    }else{
        document.body.removeChild(htmlCollect[0]);
        htmlCollect.length === 0 && Object.getOwnPropertyDescriptor(htmlCollect, 0) && console.log("[*]  444你被检测了")
    }

}
htmlCollect === document.body.getElementsByTagName("script") || console.log("[*]  555你被检测了")
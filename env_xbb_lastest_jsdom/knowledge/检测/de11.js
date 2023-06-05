// r6检测
function _testform() {
    from = document.createElement("form")
    from.id = '__Zm9ybS5pZAo__'
    from.action = 'https://ucenter.miit.gov.cn/login.jsp'
    input1 = document.createElement("input")
    input1.id = 'username'
    input1.content = 'action'
    input1.name = 'action'
    from.appendChild(input1)
    var ccc = from.action
    console.log(ccc)

}

_testform()
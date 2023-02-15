//网页变量初始化

!function(){
    //网页标签初始化   
    
    let bohtml_=fs.readFileSync('D:\\My_Dir\\env_xbb_lastest_bo\\user\\run\\run.html').toString('utf-8')
    bodavm.memory.tag=bodavm.toolsFunc.HTMLParser(bohtml_)
    bodavm.memory.tag[0].__proto__=HTMLDocument.prototype
}();
// debugger

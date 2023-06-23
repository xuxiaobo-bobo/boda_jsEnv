
    window = global;
    window_KOnB2enu_url = ''
    var boallundefined = new xtd;
    i_element = {}
    getAttribute_href = 'https://eshipping.wanhai.com/cec/wdcec102_qbp.do?from_place=CNSHA&to_place=VNCLP&duration=4'
    div_element_search = '?from_place=CNSHA&to_place=VNCLP&duration=4'
    div_element_pathname = '/cec/wdcec102_qbp.do'
    html_content = 'RXNYhxwOQfKI.BrzzEPlSZz8g5BPqazK'
    navigator_UA = 'Mozilla/5.0(Macintosh;IntelMacOSX10.6;rv:2.0.1)Gecko/20100101Firefox/4.0.1'
    navigator_appVersion = '5.0(Macintosh;IntelMacOSX10.6;rv:2.0.1)Gecko/20100101Firefox/4.0.1'
    location_href= 'https://eshipping.wanhai.com/cec/#/schedule'
    location_hash = '#/schedule'
    getAttribute = function (v1) {
        if (v1 === "href") {
            return getAttribute_href;
        } else if (v1 === 'r') {
            return 'm'
        }
    }
    base_element = [{getAttribute: getAttribute},]
    removeChild = function (v1) {
        return {}
    }
    parentElement = {removeChild: removeChild}
    script_element_0 = {getAttribute: getAttribute, parentElement: parentElement}
    script_element = [script_element_0, script_element_0]
    parentNode_removeChild = function (v1) {
        return ''
    }
    parentNode = {removeChild: parentNode_removeChild}
    meta_element_0 = {
        getAttribute: getAttribute,
        parentNode: parentNode,
        content: html_content,
    }
    meta_element = [meta_element_0, meta_element_0]
    getElementsByTagName = function (v1) {
        if (v1 === 'i') {
            return i_element
        } else if (v1 === 'base') {
            return base_element
        } else if (v1 === 'script') {
            return script_element
        } else if (v1 === 'meta') {
            return meta_element
        }

    }
    div_element = {
        getElementsByTagName: getElementsByTagName,
        innerHTML: '',
        protocol: 'https:',
        hostname: 'eshipping.wanhai.com',
        port: '',
        pathname: div_element_pathname,
        search: div_element_search,
        hash: '',
        href: getAttribute_href,

    }
    appendChild = function (v1, v2) {
        this[v1['id']] = v1
        this[v1['name']] = v1
    }
    form_element = {
        appendChild: appendChild,
        action: {},
    }
    createElement = function (v1) {
        if (v1 == 'div') {
            return div_element
        }
        else if(v1 == 'a'){
            return div_element
        } else if(v1 == 'form'){
            return form_element
        } else if(v1 == 'input'){
            return {}
        }
        return {}
    }
    addEventListener_dict = {}
    addEventListener = function (a1, a2, a3) {
        return addEventListener_dict
    }
    documentElement_style = {}
    documentElement_getAttribute = function (v1, v3) {
        return null
    }
    documentElement = {
        style: documentElement_style,
        getAttribute: documentElement_getAttribute,
    }
    getElementById = function (v1) {
        if (v1 === 'root-hammerhead-shadow-ui') {
            return null
        }
    }
    exitFullscreen = {}
    XPathExpression = {}
    createExpression = function (v1, v2) {
        if (v1 == '//html'){
            return XPathExpression
        }
        return {}
    }
    document = {
        createElement: createElement,
        getElementsByTagName: getElementsByTagName,
        addEventListener: addEventListener,
        documentElement: documentElement,
        exitFullscreen: exitFullscreen,
        getElementById: getElementById,
        characterSet: 'UTF-8',
        charset: 'UTF-8',
        cookie: '',
        hidden: false,
        visibilityState: 'visible',
        body: null,
        createExpression: createExpression,
        all: boallundefined,
    };
    document.all.length = 3

    location = {
        hash: location_hash,
        search: '',
        port: '',
        protocol: 'https:',
        host: 'eshipping.wanhai.com',
        hostname: 'eshipping.wanhai.com',
        pathname: '/cec/',
        href: location_href,
    };
    webkitPersistentStorage = {}
    mimeTypes = {}
    connection = {}
    navigator_getBattery = function () {
        return {
            then: function (v1) {
                return undefined
            }
        }
    }
    navigator = {
        userAgent: navigator_UA,
        webkitPersistentStorage: webkitPersistentStorage,
        mimeTypes: mimeTypes,
        connection: connection,
        languages: ['zh-CN'],
        webdriver: false,
        platform: 'Win32',
        maxTouchPoints: 0,
        appVersion: navigator_appVersion,
        getBattery: navigator_getBattery

    }
    localStorage = {
        getItem: function (val) {
            if (localStorage[val] == undefined) {
                return null
            }
            return localStorage[val]
        },
        setItem: function (v1, v2) {
            localStorage[v1] = v2
        },
        removeItem: function (val) {
            delete localStorage[val]
        }
    }
    sessionStorage = {
        getItem: function (val) {
            if (sessionStorage[val] == undefined) {
                return null
            }
            return sessionStorage[val]
        },
        setItem: function (v1, v2) {
            sessionStorage[v1] = v2
        },
        removeItem: function (val) {
            delete localStorage[val]
        }
    }
    indexDB_open_return = {}
    indexDB_open = function (v1, v2) {
        return indexDB_open_return
    }
    indexedDB = {open: indexDB_open}
    MutationObserver = function(v1, v2){
    }
    MutationObserver.prototype.observe = function(v1, v2){
        return undefined
    }
    HTMLAnchorElement = function (v1, v2) {
        return ''
    }
    XMLHttpRequest = function XMLHttpRequest() {
    }
    XML_open = function (method, url, async) {
        window_KOnB2enu_url = url
        return '';
    };
    XMLHttpRequest.prototype.open = XML_open
    XML_send = function (method, url, async) {
        return '';
    };
    XMLHttpRequest.prototype.send = XML_send
    Request = function () {
        return ''
    }
    Request.toString = "ƒ Request() { [native code] }"
    Window = Object
    __filename = undefined
    __dirname = undefined
    var originString = Function.prototype.toString;
    // native方法检测
    Function.prototype.toString = function (v1, v2) {
        end_text  =originString.apply(this);
        if (end_text.indexOf("function webdriver") >= 0){
            end_text = "function get webdriver() { [native code] }"
        }
        else if (end_text.indexOf("function open") >= 0){
            end_text = "function open() { [native code] }"
        }
        else if (end_text.indexOf("function eval") >= 0){
            end_text = "function eval() { [native code] }"
        }
        return end_text;
    };

    npw_function = function webdriver(){}
    npw_function.toString = function(){
        return 'function get webdriver() { [native code] }'
    }
    npw = {
        configurable: true,
        enumerable: true,
        get:npw_function,
    }
    obget =  Object.getOwnPropertyDescriptor
    Object.getOwnPropertyDescriptor = function (v1, v2) {
        if (v1 == navigator && v2 == 'webdriver'){
            return undefined
        }
        else if(v1 == navigator.__proto__ && v2 == 'webdriver'){
            return npw
        }

    }
    Object.webdriver = {
        configurable: true,
        enumerable: true,
        get:function webdriver() {

        }
    }

    window.chrome = {}
    window.open = function open(v1, v2){
        return {}
    }
    window.DOMParser = {}
    window.external = {AddSearchProvider: {}}
    window.webkitRequestFileSystem = function (v1, v2, v3, v4) {
        return undefined
    }
    window.openDatabase = function (v1, v2, v3, v4) {
        return {}
    }
    window.clientInformation = navigator;
    window.HTMLFormElement = {prototype: {submit: {}}}
    window.TEMPORARY = 0;
    window.PerformanceObserver = {}
    window.PerformanceObserverEntryList = {}
    window.AnalyserNode = {}
    window.FileReader = {}
    window.fetch = {}
    window.name = ''
    window.top = window
    window.self = window

    window.setInterval = function (v1, v2) {
        return ''
    }
    window.setTimeout = function (v1, v2) {
        return ''
    }
    eval_new = window.eval;
    window.eval = function eval(v1, v2){
        if (v1.indexOf('eval("this.a=1")') > 0){
            return false
        }
        return eval_new.apply(this, arguments)
    }
    
$_ts=window['$_ts'];if(!$_ts)$_ts={};$_ts.nsd=36433;$_ts.cd="qE9errAltsaqmnZEHqqzrP0ocfGZqc0mhAEuDc0rcGAchAQrr10ccGAkmqqzqp0ncqAYhAltrqEzrkWlrsaqhAEzqaL3hAqncAARHqqUhaLZqc0lhAVtDkaqmqWzqqL3HqqzrP0ocfGzrA7trr0zqqLlrsaqhA3zraLfhAEtrqWZqc0qhAltDWWDWP1IqsVaqGVSJRZOz_B1yv7vWl7KyK1IHJ.Nb536WPLa_l2kmrVN01WIFhVkrsWoraD8hqmoKUa2peNYwOp6UKzzuYm7VmmTVsDBwUwuQnVeKBmCMCGXFUxzZnezQKy.tCdjMCZLMox.MMJzwbfXKP7OTuzr12pWJCUXJ2xaKDxpWXzpVsw6pPV4SDTCFDg.FUsuMnejwCz.hImCMCGXFUxzZnezQKy.KPCeVlza1KyiA7Z412wC1Km9.Yrcw9RiwPi2KDTSMb7.M5NBMnf7Qbzz7CTCFDg.FUsuMnejwCz.UhWfY0z43oZ07Ky.YbYc3V6uwmYw8mmuQh0yKDN6FC7zZURBFcyNQb6uhCTSMb7.M5NBMnf7QbzzaPZfV2x3W2M.i9fK3YJ0AZRLp6RAIVx34PlyUCSnFCCuMURLMPzNwHJBhCN6FC7zZURBFcyNQb6uUPZbYUQaY77_1YSMwbNv_K2HIlpCA0dgpcl5KK2nMIWBMUmXFnzB_beBtDSnFCCuMURLMPzNwHJBUPGGMCy0ybyqWor31KUwwKA6wP2kR7fXAP3gUD20ZCZBFvw.Fn6SwbeLhb2nMIWBMUmXFnzB_beBK1g2F9ONF2qjw2yIMi2yiCJCwVrBj0mxR1qeUDdjMCZLMox.MMJzwbfXtC20ZCZBFvw.Fn6SwbeLUn72wW9nJDfWsVg05K2KFcSUH6HWQbTU3nVeKBmCMCGXFUxzZnezQKy.tCdjMCZLMox.MMJzwbfXKP7O_vATQKN31kcvYuxBVoYr35NAQ2pWwPV4SDTCFDg.FUsuMnejwCz.hImCMCGXFUxzZnezQKy.KvnuMURLM2LJqxmEsDNqJKxB_OfiYKf6QoUXpufrF2xCQJrhFue6UKyHnDSTMk2LwlczWmNS3sSSQzpVYvJ7Jlen5VLgA2xjVbujJozo30fUiXYNKOxvWOAC.bfvAs2139iNY93nF9SDQWQz3KR9HOEa.1TNwu2aRV603bRh8oedMQQz3KR9HOEa.1TNwu2fA2OWRU22WUJ7FZaz3KR9HOEa.1TNwu9dFosHJ6NV8TYpwIEzFUQyJorn4YzrY2J.w0vTiopkpl20VJpy16prVuSRy62oROpDVTvp1uWdi0mz3iwiWkpmVDRg7Kmf3O7nJOiSFUqdYlJkseG0wkp6H9WT7Kmf3O7nJOiSFUqdhDY2R_3CWO37MUArvaWcJqEDJGDWF6waQvAeJF96Ws3nHuq6NsQ6JaErRKHyiO3TqGACJ_0kcsVnHuAC.uqaJOLoquK7JOlll79sr7yBxjNX7pDp7TZeZIaomgi2GQpAxD_vqqqqqqqqqqqrBnSg.zOfV2Z5uJ0.8Wvfm1GSF8vqShKlCSbGN9ypJ_v8qa9aWOZuJF36JOa6ra3ava9nWOLaJkt.JuAaqPSi8FT4VUJsYmRa56NEwKNC1Ok8Q2YswDxhpiNs3Vm6sYf.4KZCW2zhQCs3qaWlquWoqtZkqOWkdkr47CxPRnybFviu3vrNhbRSFhJf3bZXRKRT7CmXwcy2Mb5u3cev3CV.3XSahCwSQ1zPZDgBR6x6tCU5wneGMb7.RIrGhCrzQnz2ZDr4tDwd3P6_MoQLRDzbhI2B3cf9FD9z5KS6tDpLFUKuRDwbhbrXR4J981f2MCGzeCeutDN6wn66wCqLFCpLhIRzFPf.FKlzebTatDz0Fc6TQceX36V.F5e9hCyn3bqzeUr7FPyzRvI5hCez3cz.MBGBMbYntCNL5neXwk3.Fvo5hCga3nzjQFaBMvp2tCNj_1eXFC3.Fb4NhCyzMnzjQ8ZBMvw.tCNS5bABFCrztC4Z8ne.RKq.MBJfhCzX3PzX_CVBwo7.w6OZh6J2Q1z6RBEBQ6pBt6wS4ceuwo3.wCUyh6J0wvZ.QIm9h6p.RczSZCLBwomOt6kCR1eTwvZ.QdgBQK9XwKR776mXQbq.wKsgh6mfQ1zTwI9BQKYat6pX76rfFcy03UbuQop2hvpaR4JawKWXwoyn76wPwPyuRvXuwCNPhvJXRd9BwCzawKxB_ne6Io3.Q6Uyh6Y6RPzSQXaBwUwTt6my5ne0FCpft6MaRKVChvrjw4J0MbVXQDR676puwnydRKnu86JNhve.Q.J4M6w_t6enZne4FKg.I162FvWL36w7h8eBFvwCtCySdGWkrqR3ECBuqawMxbpeqRzQxCJCraJ8XnwurqWdraijiaWmWaQDWq";if($_ts.lcd)$_ts.lcd();
    require('D:/spider/boda_jsEnv/env_xbb_lastest_jsdom/knowledge/rs6/UeB6UE6hKAqX.bbf9512.js');
    p = new XMLHttpRequest;
    p.open('GET', getAttribute_href, true)
    console.log(document.cookie);
    console.log(window_KOnB2enu_url)
    
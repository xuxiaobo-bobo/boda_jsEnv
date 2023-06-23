# -*- coding: utf-8 -*-
# @Time    : 2022-11-22 15:17
# @Author  : wbw

import os
import requests
import urllib3
import random
import subprocess
from datetime import datetime
from flask import Flask
from flask import request, jsonify

path_js = os.path.abspath(os.path.dirname(__file__))
apps = Flask(__name__)
urllib3.disable_warnings()
_fail = {
    'state': 404,  # 传参异常
    'message': 'body error'
}
resp = {
    'state': 200,
    'message': 'success',
    'data': {}
}


def api_text():
    import socket
    hostname = socket.gethostname()
    return {'ip': socket.gethostbyname(hostname)}


def get_whl_cookie_url(win_ts, h_content, url, UA, js_path):
    print(f"whl 加密 url | {url} | time | {datetime.now()}")
    # 解析信息
    js_path = js_path.replace('\\', '/')
    getAttribute_href = url
    div_element_search = "?" + url.split('?')[1]
    div_element_pathname = url.split('wanhai.com')[1].split('?')[0]
    navigator_appVersion = UA.replace('Mozilla/', '')
    if ("qbp.do" in url):
        location_href = 'https://eshipping.wanhai.com/cec/#/schedule'
        location_hash = '#/schedule'
    else:
        location_href = "https://eshipping.wanhai.com/cec/#/cargotracking"
        location_hash = "#/cargotracking"

    # 生成本地js文件
    end_js = """
    window = global;
    window_KOnB2enu_url = ''
    var boallundefined = new xtd;
    i_element = {}
    getAttribute_href = '""" + getAttribute_href + """'
    div_element_search = '""" + div_element_search + """'
    div_element_pathname = '""" + div_element_pathname + """'
    html_content = '""" + h_content + """'
    navigator_UA = '""" + UA + """'
    navigator_appVersion = '""" + navigator_appVersion + """'
    location_href= '""" + location_href + """'
    location_hash = '""" + location_hash + """'
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
    """ + '\n' + win_ts + """
    require('""" + js_path + """');
    p = new XMLHttpRequest;
    p.open('GET', getAttribute_href, true)
    console.log(document.cookie);
    console.log(window_KOnB2enu_url)
    """

    # 把文件存到本地
    cookie_url_js_name = "".join(str(random.choice(range(10))) for _ in range(10))
    cookei_url_js_path = f'{path_js}/whl_js/{cookie_url_js_name}.js'
    # pop调用
    try:
        try:
            with open(cookei_url_js_path, "w", encoding='utf8') as f:
                f.write(end_js)
            with open("test.js", "w", encoding='utf8') as f:
                f.write(end_js)
        except:
            return None, None
        with subprocess.Popen(["D:\\spider\\boda_jsEnv\\node.exe", cookei_url_js_path], stdout=subprocess.PIPE, encoding='utf8') as osp:
            _cookie = (osp.stdout.read()).split('\n')

        return _cookie[1], _cookie[2]
    finally:
        os.remove(cookei_url_js_path)


def download_two_js(one_js_url):
    # 判断是否在文件
    eval_js = one_js_url.split("/")[-1].split('.js')[0]
    if not eval_js:
        print(f"whl 获取二层js文件失败 url | {one_js_url} | time | {datetime.now()}")
        return None
    one_js_path = f'{path_js}/{eval_js}.js'
    if not os.path.exists(one_js_path):
        print(f"whl 下载二层js文件 url | {one_js_url} | time | {datetime.now()}")
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.10 Safari/537.36',
        }
        reqs__ = requests.get(one_js_url, headers=headers, verify=False)
        with open(one_js_path, 'w', encoding='utf-8') as f:
            f.write(reqs__.text)
        if not os.path.exists(one_js_path):
            return None
        return one_js_path
    else:
        return one_js_path


def job_info_whl():
    """
    检测steamid
    :return:
    """
    args_dict = request.form.to_dict()
    win_ts = args_dict.get('win_ts')  # 第一层的js代码
    h_content = args_dict.get('content')  # html content
    url = args_dict.get('url')  # 请求的url
    UA = args_dict.get('UA')
    h_js = args_dict.get('h_js')  # 二层的js
    if not (win_ts and h_content and url and UA and h_js):
        _fail['message'] = 'body is none'
        return jsonify(_fail)
    if not ("qbp.do" in url or "wdcec109_m.do" in url or "getDynamicCtnr.do" in url) or not "Mozilla/" in UA:
        _fail['message'] = 'body is none'
        return jsonify(_fail)
    # 判断第二次js文件是否在
    js_path = download_two_js(h_js)
    if not js_path:
        _fail['message'] = 'install one js error'
        return jsonify(_fail)
    try:
        data_dict = get_whl_cookie_url(win_ts, h_content, url, UA, js_path)
    except Exception as e:
        _fail['message'] = 'xpath error'
        _fail['error'] = e
        return jsonify(_fail)
    if data_dict:
        resp['data'] = data_dict
        return jsonify(resp)
    else:
        _fail['message'] = 'other error'
        return jsonify(_fail)


def add_api():
    """
    添加路由功能
    :return:
    """
    # 获取
    apps.add_url_rule('/whl/ShipSchedule', view_func=job_info_whl, methods=["POST"])
    apps.add_url_rule('/ip/', view_func=api_text, methods=["GET"])


def run_app():
    apps.run(host='0.0.0.0', port=55555, debug=True, threaded=True)
    # WSGIServer(('0.0.0.0', 8899), apps).serve_forever()  # 并发量高使用


add_api()

if __name__ == '__main__':
    run_app()
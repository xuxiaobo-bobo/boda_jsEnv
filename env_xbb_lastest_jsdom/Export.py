# -*- coding: utf-8 -*-
import re
env_list=[
    "EventTarget",
    "WindowProperties",
    "Window",
    "Node",
    "Element",
    "HTMLElement",
    "HTMLCollection",
    "HTMLAllCollection.js",
    "HTMLAnchorElement.js",
    "HTMLBodyElement.js",
    "HTMLBRElement.js",
    "HTMLButtonElement.js",
    "HTMLCanvasElement.js",
    "HTMLDivElement.js",
    "HTMLFieldSetElement.js",
    "HTMLFontElement.js",
    "HTMLFormElement.js",
    "HTMLFrameSetElement.js",
    "HTMLHeadElement.js",
    "HTMLHeadingElement.js",
    "HTMLHtmlElement.js",
    "HTMLIFrameElement.js",
    "HTMLImageElement.js",
    "HTMLInputElement.js",
    "HTMLLegendElement.js",
    "HTMLLIElement.js",
    "HTMLLinkElement.js",
    "HTMLMarqueeElement.js",
    "HTMLMediaElement.js",
    "HTMLMetaElement.js",
    "HTMLOptGroupElement.js",
    "HTMLOptionElement.js",
    "HTMLParagraphElement.js",
    "HTMLScriptElement.js",
    "HTMLSelectElement.js",
    "HTMLSpanElement.js",
    "HTMLStyleElement.js",
    "HTMLTitleElement.js",
    "HTMLUListElement.js",
    "HTMLUnknownElement.js",
    "HTMLVideoElement.js",
    "Image.js",
    "Option.js",
    "NetworkInformation",
    "CustomElementRegistry",
    "Event",
    "UIEvent",
    "MouseEvent",
    "Document",
    "HTMLDocument",
    "Location",
    "Storage",
    "CharacterData",
    "Text",
    "Database",
    "CloseEvent",
    "Notification",
    "IDBDatabase",
    "IDBRequest",
    "IDBOpenDBRequest",
    "IDBFactory",
    "History",
    "Screen",
    "CSSStyleDeclaration",
    "CanvasRenderingContext2D",
    "WebGLRenderingContext",
    "MediaQueryList",
    "CSSRuleList",
    "Attr",
    "Option",
    "Navigation",
    "MediaStream",
    "TrustedTypePolicyFactory",
    "Scheduler",
    "CookieStore",
    "RTCSessionDescription",
    "RTCDataChannel",
    "CacheStorage",
    "Promise",
    "OffscreenCanvasRenderingContext2D",
    "DeprecatedStorageInfo",
    "SpeechSynthesis",
    "VisualViewport",
    "BeforeInstallPromptEvent",
    "BarProp",
    "BaseAudioContext",
    "BluetoothUUID",
    "StyleMedia",
    "Audio",
    "Crypto",
    "HTMLAudioElement",
    "CDATASection",
    "CredentialsContainer",
    "Comment",
    "DocumentFragment",
    "DocumentType",
    "DOMParser",
    "Bluetooth",
    "External",
    "PointerEvent",
    "WebSocket",
    "SourceBuffer",
    "DOMStringList",
    "Headers",
    "IDBObjectStore",
    "IDBTransaction",
    "IDBVersionChangeEvent",
    "TextTrackList",
    "SpeechSynthesisUtterance",
    "MediaEncryptedEvent",
    "MutationObserver",
    "NamedNodeMap",
    "NodeList",
    "OfflineAudioContext",
    "Path2D",
    "LockManager",
    "XPathExpression",
    "Performance",
    "ScreenOrientation",
    "PerformanceEntry",
    "PerformancePaintTiming",
    "Permissions",
    "PermissionStatus",
    "Request",
    "SVGElement",
    "DeviceOrientationEvent",
    "PresentationConnectionCloseEvent",
    "SVGGraphicsElement",
    "SVGGElement",
    "SVGPatternElement",
    "SVGGeometryElement",
    "SVGPathElement",
    "SVGSVGElement",
    "SVGSymbolElement",
    "SVGUseElement",
    "WebGLShader",
    "WebGLShaderPrecisionFormat",
    "RTCPeerConnection",
    "WebGLBuffer",
    "WebGLProgram",
    "CSS",
    "Navigator",
    "BatteryManager",
    "Plugin",
    "PluginArray",
    "MimeType",
    "MimeTypeArray",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequest"
]

deal_obj={}

my_base_env=''

config = open(r'D:\My_Dir\env_xbb_lastest_jsdom\config\config.js', 'r', encoding='utf-8').read()
toolsFunc = open(r'D:\My_Dir\env_xbb_lastest_jsdom\tools\toolsFunc.js', 'r', encoding='utf-8').read()
globalinit = open(r'D:\My_Dir\env_xbb_lastest_jsdom\tools\globalInit.js', 'r', encoding='utf-8').read()
toolsPrmoise = open(r'D:\My_Dir\env_xbb_lastest_jsdom\tools\toolsPromise.js', 'r', encoding='utf-8').read()
toolsPlugin = open(r'D:\My_Dir\env_xbb_lastest_jsdom\tools\toolsPlugin.js', 'r', encoding='utf-8').read()

globalthis = open(r'D:\My_Dir\env_xbb_lastest_jsdom\tools\globalThis.js', 'r', encoding='utf-8').read()


def read_log():
    # print(deal_obj)
    filter_list=[]
    objname_filter=[]
    my_env_code=''
    my_proto_code=''
    log_path=r'D:\My_Dir\env_xbb_lastest_jsdom\run\log.txt'
    conetent_list=open(log_path,'r',encoding='utf-8').readlines()
    for content in conetent_list:
        try:
            content_splite_space=content.split()[0]
            if '_' in content_splite_space and (not content_splite_space.startswith('_')) and not content_splite_space.startswith("'"):
                
                content_splite_=content_splite_space.split('_')
                obj_name,obj_proto,_=content_splite_
                if obj_name  in env_list:
                    if obj_name not in objname_filter:
                        print(1111)
                        objname_filter.append(obj_name)
                        f=open(f'D:\My_Dir\env_xbb_lastest_jsdom\env\\{obj_name+".js"}','r',encoding="utf-8").read()
                        print(f)
                        my_proto_code+=f
                    obj=obj_name+'_'+obj_proto+'_'+_
                    if obj not in filter_list:

                        filter_list.append(obj)
                        res=deal_obj.get(obj)
                        my_env_code=my_env_code+res+'\r\n'
        except:
            pass
    with open('myenv.js', 'w', encoding='utf-8') as f:
        all_code=config+toolsFunc+my_proto_code+globalinit+toolsPrmoise+toolsPlugin+my_env_code+globalthis
        f.write(all_code)

def parse_env():
    envs=open(r'D:\My_Dir\env_xbb_lastest_jsdom\tools\envFunc.js','r',encoding='utf-8').readlines()
    start=0
    suffix=0    
    mycode=''
    obj=None
    end=0
    global deal_obj
    for env in envs:
        if start:
            if '{' in env:

                suffix+=env.count('{')
            if '}' in env:
                suffix-=env.count('}')
            if suffix ==0:
                end=1
            if  end ==0:
                mycode =mycode+ env+';'
            elif end:
                mycode =mycode+ env+';'
                deal_obj[obj] = mycode.lstrip().rstrip()
                start = 0
                suffix = 0
                mycode = ''
                obj = None
                end=0

                '''
                bodavm.envFunc.Document_onbeforecut_get = function Document_onbeforecut_get() { console.log("Document_onbeforecut_get  ", undefined, "!!!!!!!!!未完善!!!!!!!!!!!!") }
                '''
        # print(env)
        elif 'bodavm.envFunc.' in env:
            if '{' in env:

                suffix+=env.count('{')
            if '}' in env:
                suffix-=env.count('}')
            start=1
            mycode+=env
            env_splite_eq=env.split('=')[0]
            obj=re.search('bodavm.envFunc.(.+)',env_splite_eq).group(1).strip()
            # print('res',res)
  
    # print(deal_obj)




if __name__ == '__main__':
    parse_env()
    read_log()

# -*- coding = utf-8 -*-
# @Time: 2023-02-03 22:59
# @Author: xiaobo 徐晓波
# @Site: 
# @File: test.py
# @Software: PyCharm
bbb=[
  'EventTarget',
  'WindowProperties',
  'Window',
  'Node',
  'Element',
  'HTMLElement',
  'HTMLCollection',
  'NetworkInformation',
  'CustomElementRegistry',
  'Event',
  'UIEvent',
  'MouseEvent',
  'Document',
  'HTMLDocument',
  'Location',
  'Storage',
  'CharacterData',
  'Text',
  'Database',
  'CloseEvent',
  'Notification',
  'IDBDatabase',
  'IDBRequest',
  'IDBOpenDBRequest',
  'IDBFactory',
  'History',
  'Screen',
  'CSSStyleDeclaration',
  'CanvasRenderingContext2D',
  'WebGLRenderingContext',
  'MediaQueryList',
  'CSSRuleList',
  'Attr',
  'Navigation',
  'MediaStream',
  'TrustedTypePolicyFactory',
  'Scheduler',
  'CookieStore',
  'CacheStorage',
  'OffscreenCanvasRenderingContext2D',
  'VisualViewport',
  'BeforeInstallPromptEvent',
  'BarProp',
  'BaseAudioContext',
  'BluetoothUUID',
  'StyleMedia',
  'Audio',
  'Crypto',
  'CDATASection',
  'Comment',
  'DocumentFragment',
  'DocumentType',
  'DOMParser',
  'External',
  'WebSocket',
  'SourceBuffer',
  'DOMStringList',
  'Headers',
  'IDBObjectStore',
  'IDBTransaction',
  'IDBVersionChangeEvent',
  'TextTrackList',
  'SpeechSynthesisUtterance',
  'MediaEncryptedEvent',
  'MutationObserver',
  'NamedNodeMap',
  'NodeList',
  'OfflineAudioContext',
  'Path2D',
  'Performance',
  'ScreenOrientation',
  'PerformanceEntry',
  'PerformancePaintTiming',
  'Permissions',
  'PermissionStatus',
  'Request',
  'SVGElement',
  'SVGGraphicsElement',
  'SVGPatternElement',
  'SVGGeometryElement',
  'SVGPathElement',
  'SVGSVGElement',
  'SVGSymbolElement',
  'SVGUseElement',
  'WebGLShader',
  'WebGLShaderPrecisionFormat',
  'RTCPeerConnection',
  'WebGLBuffer',
  'WebGLProgram',
  'CSS',
  'Navigator',
  'BatteryManager',
  'Plugin',
  'PluginArray',
  'MimeType',
  'MimeTypeArray',
  'XMLHttpRequestEventTarget',
  'XMLHttpRequest',
  'globalThis'
]

import  os
lists=os.listdir(r'D:\My_Dir\环境框架_xbb_lastest\env')
for i in lists:
    name=i.split('.')[0]
    if name not in bbb:
        print(name)










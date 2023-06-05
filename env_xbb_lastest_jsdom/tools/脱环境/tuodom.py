import asyncio
import os.path

import websockets
"""
失败的结果
[
    "oncontentvisibilityautostatechange",
    "onbeforematch",
    "ondeviceorientationabsolute",
    "ondeviceorientation",
    "ondevicemotion",
    "onunload",
    "onunhandledrejection",
    "onstorage",
    "onrejectionhandled",
    "onpopstate",
    "onpageshow",
    "onpagehide",
    "ononline",
    "onoffline",
    "onmessageerror",
    "onmessage",
    "onlanguagechange",
    "onhashchange",
    "onbeforeunload",
    "onbeforeprint",
    "onafterprint",
    "ontransitioncancel",
    "ontransitionend",
    "ontransitionstart",
    "ontransitionrun",
    "onanimationstart",
    "onanimationiteration",
    "onanimationend",
    "onselectionchange",
    "onselectstart",
    "onpointerleave",
    "onpointerenter",
    "onpointerout",
    "onpointerover",
    "onpointercancel",
    "onpointerup",
    "onpointerrawupdate",
    "onpointermove",
    "onpointerdown",
    "onlostpointercapture",
    "ongotpointercapture",
    "onauxclick",
    "onwheel",
    "onwebkittransitionend",
    "onwebkitanimationstart",
    "onwebkitanimationiteration",
    "onwebkitanimationend",
    "onwaiting",
    "onvolumechange",
    "ontoggle",
    "ontimeupdate",
    "onsuspend",
    "onsubmit",
    "onstalled",
    "onslotchange",
    "onselect",
    "onseeking",
    "onseeked",
    "onsecuritypolicyviolation",
    "onscroll",
    "onresize",
    "onreset",
    "onratechange",
    "onprogress",
    "onplaying",
    "onplay",
    "onpause",
    "onmousewheel",
    "onmouseup",
    "onmouseover",
    "onmouseout",
    "onmousemove",
    "onmouseleave",
    "onmouseenter",
    "onmousedown",
    "onloadstart",
    "onloadedmetadata",
    "onloadeddata",
    "onload",
    "onkeyup",
    "onkeypress",
    "onkeydown",
    "oninvalid",
    "oninput",
    "onformdata",
    "onfocus",
    "onerror",
    "onended",
    "onemptied",
    "ondurationchange",
    "ondrop",
    "ondragstart",
    "ondragover",
    "ondragleave",
    "ondragenter",
    "ondragend",
    "ondrag",
    "ondblclick",
    "oncuechange",
    "oncontextrestored",
    "oncontextmenu",
    "oncontextlost",
    "onclose",
    "onclick",
    "onchange",
    "oncanplaythrough",
    "oncanplay",
    "oncancel",
    "onblur",
    "onbeforeinput",
    "onabort",
    "onbeforexrselect",
    "onbeforeinstallprompt",
    "onappinstalled",
    "onsearch",
    "frameElement",
    "opener"
]
"""
# 把接受的消息打印后返回回去
async def recv_msg(websocket):
    while True:
        filename_list=[]
        recv_text = await websocket.recv()
        print('res',recv_text)
        filename=recv_text.split('___')[0]
        print('filename_____',filename)
        content=recv_text.split('___')[1]
        file=r'D:\My_Dir\env_xbb_lastest_jsdom\env\\'+filename   #修改需要导出的路径
        mode='w'
        if os.path.exists(file):
            mode='a+'
            print('file已存在')
        # with open()
        print(file)
        print(content)
        with open(file,mode,encoding='utf-8') as f:
            f.write(content)

        await websocket.send(recv_text)

async def main(websocket, path):
    await recv_msg(websocket)

start_server = websockets.serve(main, 'localhost', 8010)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()


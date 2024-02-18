
//从浏览器中复制环境,然后粘贴放入configFromChrome.js中
window.canvassss=document.createElement("canvas")
window.cccc=canvassss.getContext("2d")
window.localstorage__={}
for(let i in localStorage){
    if ((typeof localStorage[i]) !='function'){
        localstorage__[i]=localStorage[i]
    }

}
window.aaaaaa=
`

bodaEnv.memory.document={
    URL:"${document.URL}",
    referrer:"${document.referrer}",
    documentURI:"${document.documentURI}",
    compatMode:"${document.compatMode}",
    dir:"${document.dir}",
    title:'${document.title}',
    designMode:"${document.designMode}",
    readyState:"${document.readyState}",
    contentType:"${document.contentType}",
    inputEncoding:"${document.inputEncoding}",
    domain:"${document.domain}",
    characterSet:"${document.characterSet}",
    charset:"${document.charset}",
    hidden:"${document.hidden}",
    onmousemove:${document.onmousemove},
    onselectionchange:${document.onselectionchange},
    cookie:'${document.cookie}'
    
};

bodaEnv.memory.cookies_=bodaEnv.memory.document['cookie'].split(';')
if (bodaEnv.memory.cookies_[0]){
    for (let i = 0; i < bodaEnv.memory.cookies_.length; i++) {
        let cookie = bodaEnv.memory.cookies_[i].split("=");
        bodaEnv.memory.jsonCookie[cookie[0]] = cookie[1];
      }
}



bodaEnv.memory.htmldivelement={
     align:"${HTMLDivElement.align}",

};

bodaEnv.memory.history={
    scrollRestoration:"${history.scrollRestoration}"
};

bodaEnv.memory.screen={
    pixelDepth:${screen.pixelDepth},
    colorDepth:${screen.colorDepth},
    availLeft:${screen.availLeft},
    availTop:${screen.availTop},
    isExtended:${screen.isExtended},
    orientation:${JSON.stringify(screen.orientation)},
    onchange:${screen.onchange},
};

bodaEnv.memory.navigator={
    language:"${navigator.language}",
    // userAgent:"${navigator.userAgent}",
    // appVerboda:"${navigator.appVerboda}",
    vendor:"${navigator.vendor}",
    appName:"${navigator.appName}",
    appCodeName:"${navigator.appCodeName}",
    cookieEnabled:${navigator.cookieEnabled},
    languages:${JSON.stringify(navigator.languages)},
    productSub:"${navigator.productSub}",
    userAgentData:${JSON.stringify(navigator.userAgentData)},
    xr:${JSON.stringify(navigator.xr)},
    platform:'${navigator.platform}',
    webkitPersistentStorage:${JSON.stringify(navigator.webkitPersistentStorage)},
    connection:${JSON.stringify(navigator.connection)},
    javaEnabled:${navigator.javaEnabled()},
    product:'${navigator.product}',
    vendorSub:${JSON.stringify(navigator.vendorSub)},
    deviceMemory:${navigator.deviceMemory},
    maxTouchPoints:${navigator.maxTouchPoints}
};
bodaEnv.memory.window={
    vilame_setter:${JSON.stringify(window.vilame_setter)?JSON.stringify(window.vilame_setter):'{}'},
    name:${JSON.stringify(window.name)},
    origin:${JSON.stringify(window.origin)},
    defaultStatus:${JSON.stringify(window.defaultStatus)},
    defaultstatus:${JSON.stringify(window.defaultstatus)},
    devicePixelRatio:${window.devicePixelRatio},
    isSecureContext:${window.isSecureContext},
    length:${window.length},
    status:${JSON.stringify(window.status)},
    onmessage:${window.onmessage},
    onbeforeunload:${window.onbeforeunload},
    closed:${window.closed},
    isSecureContext:${window.isSecureContext},
    onappinstalled:${window.onappinstalled},
    onbeforeinstallprompt:${window.onbeforeinstallprompt},
    onbeforexrselect:${onbeforexrselect},
    onabort:${onabort},
    onblur:${onblur},
    oncancel:${oncancel},
    oncanplay:${oncanplay},
    oncanplaythrough:${oncanplaythrough},
    onsearch:${onsearch},
    opener:${opener},
    frameElement:${frameElement},
    // customElements:${window.customElements}
    onbeforeinput:${onbeforeinput},
        
    oncontextmenu:${oncontextmenu},

    oncontextrestored:${oncontextrestored},

    oncuechange:${oncuechange},

    ondblclick:${ondblclick},

    ondrag:${ondrag},

    ondragend:${ondragend},

    ondragenter:${ondragenter},

    ondragleave:${ondragleave},

    ondragover:${ondragover},

    ondragstart:${ondragstart},

    ondrop:${ondrop},

    ondurationchange:${ondurationchange},

    onemptied:${onemptied},

    onended:${onended},

    onerror:${onerror},

    onfocus:${onfocus},

    onformdata:${onformdata},

    oninput:${oninput},

    oninvalid:${oninvalid},

    onkeydown:${onkeydown},

    onkeypress:${onkeypress},

    onkeyup:${onkeyup},

    onload:${onload},

    onloadeddata:${onloadeddata},

    onloadedmetadata:${onloadedmetadata},

    onloadstart:${onloadstart},

    onmousedown:${onmousedown},

    onmouseenter:${onmouseenter},

    onmouseleave:${onmouseleave},

    onmousemove:${onmousemove},

    onmouseout:${onmouseout},

    onmouseover:${onmouseover},

    onmouseup:${onmouseup},

    onmousewheel:${onmousewheel},

    onpause:${onpause},

    onplay:${onplay},

    onplaying:${onplaying},

    onprogress:${onprogress},

    onratechange:${onratechange},

    onreset:${onreset},

    onresize:${onresize},

    onscroll:${onscroll},

    onsecuritypolicyviolation:${onsecuritypolicyviolation},

    onseeked:${onseeked},

    onseeking:${onseeking},

    onselect:${onselect},

    onslotchange:${onslotchange},

    onstalled:${onstalled},

    onsubmit:${onsubmit},

    onsuspend:${onsuspend},

    ontimeupdate:${ontimeupdate},

    ontoggle:${ontoggle},

    onvolumechange:${onvolumechange},

    onwaiting:${onwaiting},

    onwebkitanimationend:${onwebkitanimationend},

    onwebkitanimationiteration:${onwebkitanimationiteration},

    onwebkitanimationstart:${onwebkitanimationstart},

    onwebkittransitionend:${onwebkittransitionend},

    onwheel:${onwheel},

    onauxclick:${onauxclick},

    ongotpointercapture:${ongotpointercapture},

    onlostpointercapture:${onlostpointercapture},

    onpointerdown:${onpointerdown},

    onpointermove:${onpointermove},

    onpointerrawupdate:${onpointerrawupdate},

    onpointerup:${onpointerup},

    onpointercancel:${onpointercancel},

    onpointerover:${onpointerover},

    onpointerout:${onpointerout},

    onpointerenter:${onpointerenter},

    onpointerleave:${onpointerleave},

    onselectstart:${onselectstart},

    onselectionchange:${onselectionchange},

    onanimationend:${onanimationend},

    onanimationiteration:${onanimationiteration},

    onanimationstart:${onanimationstart},

    ontransitionrun:${ontransitionrun},

    ontransitionstart:${ontransitionstart},

    ontransitionend:${ontransitionend},

    ontransitioncancel:${ontransitioncancel},

    onafterprint:${onafterprint},

    onbeforeprint:${onbeforeprint},

    onbeforeunload:${onbeforeunload},

    onhashchange:${onhashchange},

    onlanguagechange:${onlanguagechange},

    onmessage:${onmessage},

    onmessageerror:${onmessageerror},

    onoffline:${onoffline},

    ononline:${ononline},

    onpagehide:${onpagehide},

    onpageshow:${onpageshow},

    onpopstate:${onpopstate},

    onrejectionhandled:${onrejectionhandled},

    onstorage:${onstorage},

    onunhandledrejection:${onunhandledrejection},

    onunload:${onunload},

    crossOriginIsolated:${crossOriginIsolated},

    // scheduler:${scheduler},

    ondevicemotion:${window.ondevicemotion?window.ondevicemotion:null},

    ondeviceorientation:${window.ondeviceorientation?window.ondeviceorientation:null},

    ondeviceorientationabsolute:${window.ondeviceorientationabsolute?window.ondeviceorientationabsolute:null},

    onbeforematch:${onbeforematch},

    onbeforetoggle:${onbeforetoggle},

    originAgentCluster:${originAgentCluster},

    credentialless:${credentialless},

    oncontentvisibilityautostatechange:${oncontentvisibilityautostatechange},

    onscrollend:${onscrollend},



};


bodaEnv.memory.localStorage=${JSON.stringify(localstorage__)}
delete bodaEnv.memory.localStorage['length']

bodaEnv.memory.Performance={
    'getEntriesByType':${JSON.stringify(performance.getEntriesByType('resource'))},
    'timeOrigin':${performance.timeOrigin}
};

`

copy(aaaaaa)
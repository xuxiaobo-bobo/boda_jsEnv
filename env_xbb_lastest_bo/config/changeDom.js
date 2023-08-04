let canvassss=document.createElement("canvas")
let cccc=canvassss.getContext("2d")
let localstorage__={

}
for(let i in localStorage){
    localstorage__[i]=localStorage[i]
}
let aaaaaa=
`
bodavm.memory.location={
    origin:"${location.origin}",
    hash:"${location.hash}",
    pathname:"${location.pathname}",
    search:"${location.search}",
    href:"${location.href}",
    port:"${location.port}",
    protocol:"${location.protocol}",
    host:"${location.host}",
    ancestorOrigins:'${JSON.stringify(location.ancestorOrigins)}',
    hostname:"${location.hostname}",
    _href:"${location.href}",
    _search:"${location.search}",

};

bodavm.memory.document={
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

bodavm.memory.cookies_=bodavm.memory.document['cookie'].split(';')
if (bodavm.memory.cookies_[0]){
    for (var i = 0; i < bodavm.memory.cookies_.length; i++) {
        var cookie = bodavm.memory.cookies_[i].split("=");
        bodavm.memory.globalInit.jsonCookie[cookie[0]] = cookie[1];
      }
}



bodavm.memory.htmldivelement={
     align:"${HTMLDivElement.align}",

};

bodavm.memory.history={
    scrollRestoration:"${history.scrollRestoration}"
};

bodavm.memory.screen={
    pixelDepth:${screen.pixelDepth},
    colorDepth:${screen.colorDepth},
    availLeft:${screen.availLeft},
    availTop:${screen.availTop},
    isExtended:${screen.isExtended},
    orientation:${JSON.stringify(screen.orientation)},
    onchange:${screen.onchange},
};

bodavm.memory.navigator={
    language:"${navigator.language}",
    userAgent:"${navigator.userAgent}",
    appVersion:"${navigator.appVersion}",
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
bodavm.memory.window={
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
    // frameElement:${frameElement},
    isSecureContext:${window.isSecureContext},
    // customElements:${window.customElements}
    

};


bodavm.memory.localStorage=${JSON.stringify(localstorage__)}


bodavm.memory.Performance={
    'getEntriesByType':${JSON.stringify(performance.getEntriesByType('resource'))},
    'timeOrigin':${performance.timeOrigin}



};

`

copy(aaaaaa)
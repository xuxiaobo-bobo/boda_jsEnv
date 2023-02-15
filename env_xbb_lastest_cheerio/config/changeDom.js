var canvassss=document.createElement("canvas")
var cccc=canvassss.getContext("2d")
var aaaaaa=
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
    ancestorOrigins:"${JSON.stringify(location.ancestorOrigins)}",
    hostname:"${location.hostname}"
};

bodavm.memory.document={
    URL:"${document.URL}",
    referrer:"${document.referrer}",
    documentURI:"${document.documentURI}",
    compatMode:"${document.compatMode}",
    dir:"${document.dir}",
    title:"${document.title}",
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
    
};

bodavm.memory.htmldivelement={
    align:"${HTMLDivElement.align}",

};

bodavm.memory.history={
    scrollRestoration:"${history.scrollRestoration}"
};

bodavm.memory.screen={
    width:${screen.width},
    height:${screen.height},
    availWidth:${screen.availWidth},
    availHeight:${screen.availHeight},
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
    product:${navigator.product},
    vendorSub:${navigator.vendorSub?navigator.vendorSub:''},
    deviceMemory:${navigator.deviceMemory},
    maxTouchPoints:${navigator.maxTouchPoints}
};
bodavm.memory.window={
    name:${JSON.stringify(window.name)},
    innerWidth:1440,
    innerHeight:817,
    origin:${JSON.stringify(window.origin)},
    outerWidth:1440,
    outerHeight:920,
    defaultStatus:${JSON.stringify(window.defaultStatus)},
    defaultstatus:${JSON.stringify(window.defaultstatus)},
    devicePixelRatio:${window.devicePixelRatio},
    isSecureContext:${window.isSecureContext},
    length:${window.length},
    status:${JSON.stringify(window.status)},
    onmessage:${window.onmessage},
    onbeforeunload:${window.onbeforeunload},

};
bodavm.memory.localStorage={}

`

copy(aaaaaa)
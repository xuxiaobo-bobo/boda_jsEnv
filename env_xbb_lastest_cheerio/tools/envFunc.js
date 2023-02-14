// 浏览器接口具体的实现
!function () {
    bodavm.envFunc.window_onmessage_get = function window_onmessage_get() {
        if (bodavm.config.isdebug) { debugger };;
        let onmessage = bodavm.memory.window['onmessage'] ? bodavm.memory.window['onmessage'] : null
        console.log(`window_onmessage_get `, `onmessage->${onmessage}`);
        return onmessage
    }

    // bodavm.envFunc.window_clientInformation_get=function window_clientInformation_get(){
    //     if (bodavm.config.isdebug) { debugger };;
    //     console.log(`window_clientInformation_get ` ,` navigator`);
    //     return navigator
    // }   
    // bodavm.envFunc.window_clientInformation_set=function window_clientInformation_set(){
    //     debugger
    // }
  

    bodavm.envFunc.window_onbeforeunload_get=function window_onbeforeunload_get(){
        
        let onbeforeunload=bodavm.memory.window['onbeforeunload']
        console.log(`window_onbeforeunload_get` ,`onbeforeunload->${onbeforeunload}`);
        return onbeforeunload
    }
    bodavm.envFunc.window_onbeforeunload_set=function window_onbeforeunload_set(){
        let onbeforeunload=arguments[0]
        console.log(`window_onbeforeunload_set `,`onbeforeunload->${onbeforeunload}`);
        bodavm.memory.window['onbeforeunload']=onbeforeunload
        return onbeforeunload
    }
    bodavm.envFunc.window_openDatabase = function window_openDatabase() {
        // let data=arguments[0]
        // debugger
        // let database={}
        // database.__proto__= Database.prototype
        console.log(`window_openDatabase  `, database);
        
        return database
    }
    bodavm.envFunc.window_matchMedia = function window_matchMedia() {
        let arg = arguments[0]
        let media = {}
        media.__proto__ = MediaQueryList.prototype

        bodavm.toolsFunc.symbolProperty(media)
        console.log(`window_matchMedia  `, media);
        return media
    }
    bodavm.envFunc.window_onmessage_set = function window_onmessage_set() {
        if (bodavm.config.isdebug) { debugger };;
        let onmessage = arguments[0]
        bodavm.memory.window['onmessage'] = onmessage
        console.log(`window_onmessage_set `, `onmessage->${onmessage}`);
        return onmessage
    }
    bodavm.envFunc.window_devicePixelRatio_set = function () {
        let device = arguments[0]
        bodavm.memory.window['devicePixelRatio'] = device
        console.log(`window_devicePixelRatio_set `, `device->${device}`);
        return device
    }
    bodavm.envFunc.window_devicePixelRatio_get = function window_devicePixelRatio_get() {
        let device = bodavm.memory.window['devicePixelRatio']
        console.log(`window_devicePixelRatio_get `, `device->${device}`);
        return device
    }
    bodavm.envFunc.window_getComputedStyle = function getComputedStyle() { 
        let element = arguments[0]
        let option = arguments[1]
        let style = {}
        if (bodavm.config.isdebug) { debugger };;

        console.log(`window_getComputedStyle `, `element->${element} `, `option->${option} `, '未完善');
        style.__proto__ = CSSStyleDeclaration.prototype
        // style对象
        bodavm.toolsFunc.defineProperty(style, "accentColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "additiveSymbols", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "alignContent", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "alignItems", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "alignSelf", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "alignmentBaseline", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "all", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "animation", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "animationDelay", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "animationDirection", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "animationDuration", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "animationFillMode", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "animationIterationCount", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "animationName", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "animationPlayState", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "animationTimingFunction", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "appRegion", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "appearance", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "ascentOverride", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "aspectRatio", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "backdropFilter", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "backfaceVisibility", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "background", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "backgroundAttachment", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "backgroundBlendMode", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "backgroundClip", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "backgroundColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "backgroundImage", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "backgroundOrigin", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "backgroundPosition", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "backgroundPositionX", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "backgroundPositionY", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "backgroundRepeat", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "backgroundRepeatX", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "backgroundRepeatY", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "backgroundSize", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "basePalette", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "baselineShift", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "blockSize", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "border", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderBlock", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderBlockColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderBlockEnd", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderBlockEndColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderBlockEndStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderBlockEndWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderBlockStart", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderBlockStartColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderBlockStartStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderBlockStartWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderBlockStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderBlockWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderBottom", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderBottomColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderBottomLeftRadius", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderBottomRightRadius", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderBottomStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderBottomWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderCollapse", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderEndEndRadius", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderEndStartRadius", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderImage", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderImageOutset", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderImageRepeat", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderImageSlice", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderImageSource", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderImageWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderInline", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderInlineColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderInlineEnd", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderInlineEndColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderInlineEndStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderInlineEndWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderInlineStart", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderInlineStartColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderInlineStartStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderInlineStartWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderInlineStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderInlineWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderLeft", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderLeftColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderLeftStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderLeftWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderRadius", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderRight", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderRightColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderRightStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderRightWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderSpacing", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderStartEndRadius", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderStartStartRadius", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderTop", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderTopColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderTopLeftRadius", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderTopRightRadius", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderTopStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderTopWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "borderWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "bottom", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "boxShadow", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "boxSizing", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "breakAfter", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "breakBefore", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "breakInside", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "bufferedRendering", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "captionSide", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "caretColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "clear", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "clip", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "clipPath", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "clipRule", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "color", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "colorInterpolation", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "colorInterpolationFilters", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "colorRendering", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "colorScheme", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "columnCount", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "columnFill", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "columnGap", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "columnRule", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "columnRuleColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "columnRuleStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "columnRuleWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "columnSpan", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "columnWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "columns", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "contain", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "containIntrinsicBlockSize", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "containIntrinsicHeight", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "containIntrinsicInlineSize", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "containIntrinsicSize", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "containIntrinsicWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "content", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "contentVisibility", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "counterIncrement", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "counterReset", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "counterSet", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "cursor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "cx", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "cy", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "d", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "descentOverride", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "direction", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "display", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "dominantBaseline", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "emptyCells", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fallback", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fill", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fillOpacity", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fillRule", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "filter", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "flex", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "flexBasis", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "flexDirection", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "flexFlow", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "flexGrow", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "flexShrink", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "flexWrap", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "float", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "floodColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "floodOpacity", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "font", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontDisplay", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontFamily", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontFeatureSettings", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontKerning", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontOpticalSizing", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontPalette", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontSize", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontStretch", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontSynthesis", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontSynthesisSmallCaps", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontSynthesisStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontSynthesisWeight", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontVariant", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontVariantCaps", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontVariantEastAsian", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontVariantLigatures", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontVariantNumeric", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontVariationSettings", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "fontWeight", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "forcedColorAdjust", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "gap", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "grid", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "gridArea", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "gridAutoColumns", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "gridAutoFlow", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "gridAutoRows", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "gridColumn", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "gridColumnEnd", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "gridColumnGap", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "gridColumnStart", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "gridGap", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "gridRow", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "gridRowEnd", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "gridRowGap", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "gridRowStart", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "gridTemplate", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "gridTemplateAreas", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "gridTemplateColumns", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "gridTemplateRows", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "height", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "hyphens", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "imageOrientation", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "imageRendering", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "inherits", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "initialValue", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "inlineSize", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "inset", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "insetBlock", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "insetBlockEnd", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "insetBlockStart", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "insetInline", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "insetInlineEnd", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "insetInlineStart", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "isolation", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "justifyContent", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "justifyItems", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "justifySelf", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "left", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "letterSpacing", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "lightingColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "lineBreak", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "lineGapOverride", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "lineHeight", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "listStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "listStyleImage", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "listStylePosition", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "listStyleType", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "margin", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "marginBlock", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "marginBlockEnd", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "marginBlockStart", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "marginBottom", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "marginInline", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "marginInlineEnd", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "marginInlineStart", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "marginLeft", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "marginRight", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "marginTop", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "marker", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "markerEnd", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "markerMid", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "markerStart", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "mask", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "maskType", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "maxBlockSize", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "maxHeight", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "maxInlineSize", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "maxWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "maxZoom", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "minBlockSize", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "minHeight", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "minInlineSize", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "minWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "minZoom", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "mixBlendMode", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "negative", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "objectFit", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "objectPosition", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "offset", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "offsetDistance", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "offsetPath", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "offsetRotate", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "opacity", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "order", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "orientation", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "orphans", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "outline", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "outlineColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "outlineOffset", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "outlineStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "outlineWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "overflow", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "overflowAnchor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "overflowClipMargin", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "overflowWrap", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "overflowX", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "overflowY", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "overrideColors", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "overscrollBehavior", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "overscrollBehaviorBlock", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "overscrollBehaviorInline", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "overscrollBehaviorX", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "overscrollBehaviorY", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "pad", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "padding", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "paddingBlock", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "paddingBlockEnd", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "paddingBlockStart", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "paddingBottom", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "paddingInline", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "paddingInlineEnd", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "paddingInlineStart", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "paddingLeft", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "paddingRight", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "paddingTop", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "page", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "pageBreakAfter", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "pageBreakBefore", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "pageBreakInside", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "pageOrientation", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "paintOrder", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "perspective", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "perspectiveOrigin", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "placeContent", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "placeItems", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "placeSelf", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "pointerEvents", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "position", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "prefix", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "quotes", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "r", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "range", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "resize", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "right", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "rowGap", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "rubyPosition", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "rx", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "ry", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollBehavior", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollMargin", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollMarginBlock", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollMarginBlockEnd", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollMarginBlockStart", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollMarginBottom", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollMarginInline", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollMarginInlineEnd", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollMarginInlineStart", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollMarginLeft", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollMarginRight", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollMarginTop", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollPadding", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingBlock", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingBlockEnd", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingBlockStart", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingBottom", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingInline", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingInlineEnd", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingInlineStart", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingLeft", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingRight", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingTop", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollSnapAlign", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollSnapStop", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollSnapType", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "scrollbarGutter", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "shapeImageThreshold", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "shapeMargin", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "shapeOutside", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "shapeRendering", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "size", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "sizeAdjust", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "speak", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "speakAs", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "src", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "stopColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "stopOpacity", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "stroke", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "strokeDasharray", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "strokeDashoffset", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "strokeLinecap", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "strokeLinejoin", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "strokeMiterlimit", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "strokeOpacity", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "strokeWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "suffix", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "symbols", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "syntax", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "system", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "tabSize", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "tableLayout", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textAlign", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textAlignLast", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textAnchor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textCombineUpright", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textDecoration", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textDecorationColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textDecorationLine", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textDecorationSkipInk", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textDecorationStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textDecorationThickness", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textEmphasis", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textEmphasisColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textEmphasisPosition", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textEmphasisStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textIndent", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textOrientation", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textOverflow", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textRendering", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textShadow", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textSizeAdjust", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textTransform", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textUnderlineOffset", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "textUnderlinePosition", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "top", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "touchAction", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "transform", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "transformBox", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "transformOrigin", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "transformStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "transition", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "transitionDelay", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "transitionDuration", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "transitionProperty", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "transitionTimingFunction", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "unicodeBidi", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "unicodeRange", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "userSelect", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "userZoom", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "vectorEffect", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "verticalAlign", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "visibility", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitAlignContent", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitAlignItems", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitAlignSelf", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitAnimation", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitAnimationDelay", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitAnimationDirection", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitAnimationDuration", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitAnimationFillMode", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitAnimationIterationCount", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitAnimationName", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitAnimationPlayState", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitAnimationTimingFunction", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitAppRegion", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitAppearance", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBackfaceVisibility", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBackgroundClip", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBackgroundOrigin", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBackgroundSize", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderAfter", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderAfterColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderAfterStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderAfterWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderBefore", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderBeforeColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderBeforeStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderBeforeWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderBottomLeftRadius", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderBottomRightRadius", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderEnd", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderEndColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderEndStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderEndWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderHorizontalSpacing", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderImage", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderRadius", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderStart", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderStartColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderStartStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderStartWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderTopLeftRadius", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderTopRightRadius", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBorderVerticalSpacing", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBoxAlign", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBoxDecorationBreak", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBoxDirection", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBoxFlex", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBoxOrdinalGroup", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBoxOrient", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBoxPack", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBoxReflect", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBoxShadow", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitBoxSizing", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitClipPath", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitColumnBreakAfter", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitColumnBreakBefore", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitColumnBreakInside", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitColumnCount", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitColumnGap", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitColumnRule", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitColumnRuleColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitColumnRuleStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitColumnRuleWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitColumnSpan", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitColumnWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitColumns", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitFilter", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitFlex", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitFlexBasis", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitFlexDirection", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitFlexFlow", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitFlexGrow", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitFlexShrink", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitFlexWrap", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitFontFeatureSettings", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitFontSmoothing", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitHighlight", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitHyphenateCharacter", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitJustifyContent", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitLineBreak", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitLineClamp", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitLocale", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitLogicalHeight", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitLogicalWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMarginAfter", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMarginBefore", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMarginEnd", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMarginStart", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMask", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaskBoxImage", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaskBoxImageOutset", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaskBoxImageRepeat", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaskBoxImageSlice", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaskBoxImageSource", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaskBoxImageWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaskClip", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaskComposite", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaskImage", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaskOrigin", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaskPosition", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaskPositionX", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaskPositionY", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaskRepeat", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaskRepeatX", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaskRepeatY", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaskSize", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaxLogicalHeight", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMaxLogicalWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMinLogicalHeight", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitMinLogicalWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitOpacity", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitOrder", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitPaddingAfter", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitPaddingBefore", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitPaddingEnd", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitPaddingStart", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitPerspective", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitPerspectiveOrigin", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitPerspectiveOriginX", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitPerspectiveOriginY", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitPrintColorAdjust", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitRtlOrdering", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitRubyPosition", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitShapeImageThreshold", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitShapeMargin", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitShapeOutside", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTapHighlightColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTextCombine", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTextDecorationsInEffect", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTextEmphasis", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTextEmphasisColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTextEmphasisPosition", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTextEmphasisStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTextFillColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTextOrientation", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTextSecurity", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTextSizeAdjust", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTextStroke", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTextStrokeColor", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTextStrokeWidth", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTransform", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTransformOrigin", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTransformOriginX", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTransformOriginY", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTransformOriginZ", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTransformStyle", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTransition", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTransitionDelay", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTransitionDuration", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTransitionProperty", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitTransitionTimingFunction", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitUserDrag", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitUserModify", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitUserSelect", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "webkitWritingMode", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "whiteSpace", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "widows", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "width", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "willChange", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "wordBreak", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "wordSpacing", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "wordWrap", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "writingMode", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "x", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "y", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "zIndex", {configurable:true, enumerable:true, writable:true, value:""});
        bodavm.toolsFunc.defineProperty(style, "zoom", {configurable:true, enumerable:true, writable:true, value:""});

        bodavm.toolsFunc.symbolProperty(style)
        return style
    }

    bodavm.envFunc.window_innerWidth_get = function window_innerWidth_get() {
        let innerWidth = bodavm.memory.window['innerWidth']
        console.log("window_innerWidth_get  ", innerWidth)
        return innerWidth
    }
    bodavm.envFunc.window_innerHeight_get = function window_innerHeight_get() {
        let innerHeight = bodavm.memory.window['innerHeight']

        console.log("window_innerHeight_get  ", innerHeight)
        return innerHeight
    }

    bodavm.envFunc.window_outerWidth_get = function window_outerWidth_get() {
        let outerWidth = bodavm.memory.window['outerWidth']
        console.log("window_outerWidth_get  ", outerWidth)
        return outerWidth
    }
    bodavm.envFunc.window_outerHeight_get = function window_outerHeight_get() {
        let outerHeight = bodavm.memory.window['outerHeight']

        console.log("window_outerHeight_get  ", outerHeight)
        return outerHeight
    }
    bodavm.envFunc.window_status_get = function window_status_get() {
        let status = bodavm.memory.window['status']
        console.log("window_status_get  ", status)

        return status
    }
    bodavm.envFunc.window_closed_get = function window_closed_get() {
        console.log("window_closed_get  ", false)
        return false
    }
    bodavm.envFunc.window_frames_get = function window_frames_get() {
        console.log("window_frames_get  ", `window`, `未完善`)
        return window
    }
    bodavm.envFunc.window_length_get = function window_length_get() {
        let leng_ = bodavm.memory.window['length']
        console.log("window_length_get  ", leng_)

        return leng_
    }
    bodavm.envFunc.window_parent_get = function window_parent_get() { console.log("window_parent_get  ", window); return window }
    bodavm.envFunc.window_frameElement_get = function window_frameElement_get() {
        console.log("window_frameElement_get  ", null)
        return null
    }
    bodavm.envFunc.window_origin_get = function window_origin_get() {
        let origin = bodavm.memory.window['origin']
        console.log("window_origin_get  ", origin)
        return origin
    }
    bodavm.envFunc.window_scrollX_get = function window_scrollX_get() {

        console.log("window_scrollX_get  ", 0)
        return 0
    }
    bodavm.envFunc.window_pageXOffset_get = function window_pageXOffset_get() {
        console.log("window_pageXOffset_get  ", 0)
        return 0
    }
    bodavm.envFunc.window_scrollY_get = function window_scrollY_get() {
        console.log("window_scrollY_get  ", 0)
        return 0
    }
    bodavm.envFunc.window_pageYOffset_get = function window_pageYOffset_get() {
        console.log("window_pageYOffset_get  ", 0)
        return 0
    }

    bodavm.envFunc.window_screenX_get = function window_screenX_get() { console.log("window_screenX_get  ", 0); return 0 }
    bodavm.envFunc.window_screenY_get = function window_screenY_get() { console.log("window_screenY_get  ", 0); return 0 }

    bodavm.envFunc.window_screenLeft_get = function window_screenLeft_get() { console.log("window_screenLeft_get  ", 0); return 0 }
    bodavm.envFunc.window_screenTop_get = function window_screenTop_get() { console.log("window_screenTop_get  ", 0); return 0 }

    bodavm.envFunc.window_defaultStatus_get = function window_defaultStatus_get() {
        let defaultStatus = bodavm.memory.window['defaultStatus']
        console.log("window_defaultStatus_get  ", defaultStatus)
        return defaultStatus
    }
    bodavm.envFunc.window_defaultstatus_get = function window_defaultstatus_get() {
        let defaultStatus = bodavm.memory.window['defaultstatus']
        console.log("window_defaultstatus_get  ", defaultStatus)
        return defaultStatus
    }

    bodavm.envFunc.window_origin_set = function window_origin_set() {
        let origin = arguments[0]
        bodavm.memory.window['origin'] = origin

        console.log(`window_origin_set `, origin);
        if (bodavm.config.isdebug) { debugger };;
        return origin
    }
    bodavm.envFunc.window_top_get = function window_top_get() {
        console.log(`window_top_get `, `window  `);

        if (bodavm.config.isdebug) { debugger };;
        return window
    }

    bodavm.envFunc.window_self_get = function window_top_get() {
        console.log(`window_self_get `, `window  `);

        if (bodavm.config.isdebug) { debugger };;

        return window
    }

    bodavm.envFunc.window_setTimeout = function window_setTimeout() {
        let func = arguments[0];
        let delay = arguments[1] || 0;
        let length = arguments.length;
        let argList = [];
        for (let i = 2; i < length; i++) {
            argList.push(arguments[i]);
        }
        console.log(`window_setTimeout `, `func->${func} `, `delay->${delay} `, `argList->${argList}  `);
        bodavm.memory.globalInit.timeoutID += 1
        let event = {
            "callback": func,
            "delay": delay,
            "args": argList,
            "type": typeof func == 'function' ? 1 : 0,  //1代表函数,0代表code
            "timeoutID": bodavm.memory.globalInit.timeoutID
        }
        if (bodavm.memory.asyncEvent.setTimeout === undefined) {
            bodavm.memory.asyncEvent.setTimeout = [];
        }
        // bodavm.toolsFunc.symbolProperty(event)
        bodavm.memory.asyncEvent.setTimeout.push(event);

        return bodavm.memory.globalInit.timeoutID
    }
    bodavm.envFunc.window_clearTimeout = function window_clearTimeout() {
        let id = arguments[0]
        console.log(`window_clearTimeout `, `${id}  `)
        bodavm.memory.asyncEvent.setTimeout.forEach(function (item, index, arr) {
            // if(bodavm.config.isdebug){debugger};

            if (item["timeoutID"] == id) {
                arr.splice(index, 1);
            }
        });
        //     }

    }
    bodavm.envFunc.window_clearInterval = function window_clearInterval() {
        let id = arguments[0]
        console.log(`window_clearInterval `, `${id}  `)
        bodavm.memory.asyncEvent.setTimeout.forEach(function (item, index, arr) {
            // if(bodavm.config.isdebug){debugger};
            if (item["timeoutID"] == id) {
                arr.splice(index, 1);
            }
        });
        //     }

    }
    bodavm.envFunc.window_setInterval = function window_setInterval() {

        let func = arguments[0];
        let delay = arguments[1] || 0;
        let length = arguments.length;
        // bodavm.toolsFunc.symbolProperty(func)
        let argList = [];
        for (let i = 2; i < length; i++) {
            argList.push(arguments[i]);
        }
        console.log(`window_setInterval `, `func->${func} `, `delay->${delay} `, `argList->${argList}  `);

        bodavm.memory.globalInit.timeoutID += 1
        let event = {
            "callback": func,
            "delay": delay,
            "args": argList,
            "type": typeof func == 'function' ? 1 : 0,  //1代表函数,0代表code
            "timeoutID": bodavm.memory.globalInit.timeoutID
        }
        if (bodavm.memory.asyncEvent.setTimeout === undefined) {
            bodavm.memory.asyncEvent.setTimeout = [];
        }
        // bodavm.toolsFunc.symbolProperty(event)
        bodavm.memory.asyncEvent.setTimeout.push(event);

        return bodavm.memory.globalInit.timeoutID
    }
    bodavm.envFunc.window_name_set = function window_name_set() {
        if (bodavm.config.isdebug) { debugger }
        let name_ = arguments[0]
        console.log(`window_name_set `, `name->${name_}`)
        bodavm.memory.window["name"] = name_
        return name_
    }
    bodavm.envFunc.window_name_get = function window_name_get() {
        if (bodavm.config.isdebug) { debugger }
        // debugger
        let name_ = bodavm.memory.window["name"]
        console.log(`window_name_get `, name_)
        return name_
    }


    bodavm.envFunc.window_webkitRequestFileSystem = function window_webkitRequestFileSystem() {
        if (bodavm.config.isdebug) { debugger }
        let arg0 = arguments[0]
        let arg1 = arguments[1]
        let arg2 = arguments[2]
        let arg3 = arguments[3]
        try {
            console.log(`window_webkitRequestFileSystem `, `arg0->${arg0}  `, ` arg1->${arg1} `, `successCallback->${arg2}  `)

            arg2()

        } catch {
            console.log(`window_webkitRequestFileSystem `, `arg0->${arg0}  `, ` arg1->${arg1} `, `errorCallback->${arg3}  `)

            arg3()
        }
    }

    //Storage
    bodavm.envFunc.Storage_setItem = function Storage_getItem() {

        if (bodavm.config.isdebug) { debugger }
        let keyName = arguments[0];
        let keyValue = arguments[1];
        this[keyName] = keyValue

        console.log(`Storage_setItem `, `keyName->${keyName} `, `keyValue->${keyValue}  `)
    }
    bodavm.envFunc.Storage_getItem = function Storage_getItem() {

        if (bodavm.config.isdebug) { debugger }
        let key = arguments[0]
        let item = this[key]

        console.log(`Storage_getItem `, `key->${key} `, `item->${item}  `)
        return item

    }
    bodavm.envFunc.Storage_removeItem = function Storage_removeItem() {
        if (bodavm.config.isdebug) { debugger }
        let key = arguments[0]
        console.log(`Storage_removeItem `, `key->${key}  `);

        delete this[key]

    }
    bodavm.envFunc.Storage_key = function Storage_key() {
        if (bodavm.config.isdebug) { debugger }
        // if(bodavm.config.isdebug){debugger};;
        let index = arguments[0];
        let i = 0;
        console.log(`Storage_key `, `index${index}  `)
        for (const key in this) {
            if (i === index) {
                return this[key]
            }
            i++
        }
        return null
    }

    bodavm.envFunc.Storage_clear = function Storage_clear() {
        if (bodavm.config.isdebug) { debugger }
        debugger
        // this = {}
        // this.__proto__=Storage.prototype
        console.log(`Storage_clear `, `{}  `);
    }

    bodavm.envFunc.Storage_length_get = function Storage_length_get() {
        let i = 0;
        if (bodavm.config.isdebug) { debugger }
        debugger
        for (const key in Object.getOwnPropertyDescriptors(this)) {
            i++
        }
        console.log(`Storage_length_get `, `length->${i}   `);

        return i;
    }

    //Document
    bodavm.envFunc.Document_onbeforecut_get = function Document_onbeforecut_get() { console.log("Document_onbeforecut_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onbeforematch_get = function Document_onbeforematch_get() { console.log("Document_onbeforematch_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onbeforexrselect_get = function Document_onbeforexrselect_get() { console.log("Document_onbeforexrselect_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onblur_get = function Document_onblur_get() { console.log("Document_onblur_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_oncancel_get = function Document_oncancel_get() { console.log("Document_oncancel_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_oncanplay_get = function Document_oncanplay_get() { console.log("Document_oncanplay_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_xmlVersion_get = function Document_xmlVersion_get() { console.log("Document_xmlVersion_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_xmlStandalone_get = function Document_xmlStandalone_get() { console.log("Document_xmlStandalone_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_xmlEncoding_get = function Document_xmlEncoding_get() { console.log("Document_xmlEncoding_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_webkitVisibilityState_get = function Document_webkitVisibilityState_get() { console.log("Document_webkitVisibilityState_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_webkitIsFullScreen_get = function Document_webkitIsFullScreen_get() { console.log("Document_webkitIsFullScreen_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_webkitHidden_get = function Document_webkitHidden_get() { console.log("Document_webkitHidden_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_webkitFullscreenEnabled_get = function Document_webkitFullscreenEnabled_get() { console.log("Document_webkitFullscreenEnabled_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_webkitFullscreenElement_get = function Document_webkitFullscreenElement_get() { console.log("Document_webkitFullscreenElement_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_webkitCurrentFullScreenElement_get = function Document_webkitCurrentFullScreenElement_get() { console.log("Document_webkitCurrentFullScreenElement_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_wasDiscarded_get = function Document_wasDiscarded_get() { console.log("Document_wasDiscarded_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_vlinkColor_get = function Document_vlinkColor_get() { console.log("Document_vlinkColor_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_visibilityState_get = function Document_visibilityState_get() { console.log("Document_visibilityState_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_timeline_get = function Document_timeline_get() { console.log("Document_timeline_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_styleSheets_get = function Document_styleSheets_get() { console.log("Document_styleSheets_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_rootElement_get = function Document_rootElement_get() { console.log("Document_rootElement_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_pointerLockElement_get = function Document_pointerLockElement_get() { console.log("Document_pointerLockElement_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_plugins_get = function Document_plugins_get() { console.log("Document_plugins_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_pictureInPictureEnabled_get = function Document_pictureInPictureEnabled_get() { console.log("Document_pictureInPictureEnabled_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_pictureInPictureElement_get = function Document_pictureInPictureElement_get() { console.log("Document_pictureInPictureElement_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onwheel_get = function Document_onwheel_get() { console.log("Document_onwheel_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onwebkittransitionend_get = function Document_onwebkittransitionend_get() { console.log("Document_onwebkittransitionend_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onwebkitfullscreenerror_get = function Document_onwebkitfullscreenerror_get() { console.log("Document_onwebkitfullscreenerror_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onwebkitfullscreenchange_get = function Document_onwebkitfullscreenchange_get() { console.log("Document_onwebkitfullscreenchange_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onwebkitanimationstart_get = function Document_onwebkitanimationstart_get() { console.log("Document_onwebkitanimationstart_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onwebkitanimationiteration_get = function Document_onwebkitanimationiteration_get() { console.log("Document_onwebkitanimationiteration_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onwebkitanimationend_get = function Document_onwebkitanimationend_get() { console.log("Document_onwebkitanimationend_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onwaiting_get = function Document_onwaiting_get() { console.log("Document_onwaiting_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onvolumechange_get = function Document_onvolumechange_get() { console.log("Document_onvolumechange_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onvisibilitychange_get = function Document_onvisibilitychange_get() { console.log("Document_onvisibilitychange_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_ontransitionstart_get = function Document_ontransitionstart_get() { console.log("Document_ontransitionstart_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_ontransitionrun_get = function Document_ontransitionrun_get() { console.log("Document_ontransitionrun_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_ontransitionend_get = function Document_ontransitionend_get() { console.log("Document_ontransitionend_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_ontransitioncancel_get = function Document_ontransitioncancel_get() { console.log("Document_ontransitioncancel_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_ontoggle_get = function Document_ontoggle_get() { console.log("Document_ontoggle_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_ontimeupdate_get = function Document_ontimeupdate_get() { console.log("Document_ontimeupdate_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onsuspend_get = function Document_onsuspend_get() { console.log("Document_onsuspend_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onsubmit_get = function Document_onsubmit_get() { console.log("Document_onsubmit_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onstalled_get = function Document_onstalled_get() { console.log("Document_onstalled_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onslotchange_get = function Document_onslotchange_get() { console.log("Document_onslotchange_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onselectstart_get = function Document_onselectstart_get() { console.log("Document_onselectstart_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onselect_get = function Document_onselect_get() { console.log("Document_onselect_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onseeking_get = function Document_onseeking_get() { console.log("Document_onseeking_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onseeked_get = function Document_onseeked_get() { console.log("Document_onseeked_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onsecuritypolicyviolation_get = function Document_onsecuritypolicyviolation_get() { console.log("Document_onsecuritypolicyviolation_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onsearch_get = function Document_onsearch_get() { console.log("Document_onsearch_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onscroll_get = function Document_onscroll_get() { console.log("Document_onscroll_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onresume_get = function Document_onresume_get() { console.log("Document_onresume_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onresize_get = function Document_onresize_get() { console.log("Document_onresize_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onreset_get = function Document_onreset_get() { console.log("Document_onreset_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onreadystatechange_get = function Document_onreadystatechange_get() { console.log("Document_onreadystatechange_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_activeElement_get = function Document_activeElement_get() { console.log("Document_activeElement_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_adoptedStyleSheets_get = function Document_adoptedStyleSheets_get() { console.log("Document_adoptedStyleSheets_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_alinkColor_get = function Document_alinkColor_get() { console.log("Document_alinkColor_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_all_get = function Document_all_get() { console.log("Document_all_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_anchors_get = function Document_anchors_get() { console.log("Document_anchors_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_applets_get = function Document_applets_get() { console.log("Document_applets_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_bgColor_get = function Document_bgColor_get() { console.log("Document_bgColor_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_childElementCount_get = function Document_childElementCount_get() { console.log("Document_childElementCount_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_children_get = function Document_children_get() { console.log("Document_children_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_currentScript_get = function Document_currentScript_get() { console.log("Document_currentScript_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_defaultView_get = function Document_defaultView_get() { console.log("Document_defaultView_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_doctype_get = function Document_doctype_get() { console.log("Document_doctype_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_embeds_get = function Document_embeds_get() { console.log("Document_embeds_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_featurePolicy_get = function Document_featurePolicy_get() { console.log("Document_featurePolicy_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_fgColor_get = function Document_fgColor_get() { console.log("Document_fgColor_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_firstElementChild_get = function Document_firstElementChild_get() { console.log("Document_firstElementChild_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_fonts_get = function Document_fonts_get() { console.log("Document_fonts_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_fragmentDirective_get = function Document_fragmentDirective_get() { console.log("Document_fragmentDirective_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_fullscreen_get = function Document_fullscreen_get() { console.log("Document_fullscreen_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_fullscreenElement_get = function Document_fullscreenElement_get() { console.log("Document_fullscreenElement_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_fullscreenEnabled_get = function Document_fullscreenEnabled_get() { console.log("Document_fullscreenEnabled_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_images_get = function Document_images_get() { console.log("Document_images_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_lastElementChild_get = function Document_lastElementChild_get() { console.log("Document_lastElementChild_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_linkColor_get = function Document_linkColor_get() { console.log("Document_linkColor_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_links_get = function Document_links_get() { console.log("Document_links_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onabort_get = function Document_onabort_get() { console.log("Document_onabort_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onanimationend_get = function Document_onanimationend_get() { console.log("Document_onanimationend_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onanimationiteration_get = function Document_onanimationiteration_get() { console.log("Document_onanimationiteration_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onanimationstart_get = function Document_onanimationstart_get() { console.log("Document_onanimationstart_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onauxclick_get = function Document_onauxclick_get() { console.log("Document_onauxclick_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onbeforecopy_get = function Document_onbeforecopy_get() { console.log("Document_onbeforecopy_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onbeforepaste_get = function Document_onbeforepaste_get() { console.log("Document_onbeforepaste_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_oncanplaythrough_get = function Document_oncanplaythrough_get() { console.log("Document_oncanplaythrough_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onchange_get = function Document_onchange_get() { console.log("Document_onchange_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onclick_get = function Document_onclick_get() { console.log("Document_onclick_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onclose_get = function Document_onclose_get() { console.log("Document_onclose_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_oncontextlost_get = function Document_oncontextlost_get() { console.log("Document_oncontextlost_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_oncontextmenu_get = function Document_oncontextmenu_get() { console.log("Document_oncontextmenu_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_oncontextrestored_get = function Document_oncontextrestored_get() { console.log("Document_oncontextrestored_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_oncopy_get = function Document_oncopy_get() { console.log("Document_oncopy_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_oncuechange_get = function Document_oncuechange_get() { console.log("Document_oncuechange_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_oncut_get = function Document_oncut_get() { console.log("Document_oncut_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_ondblclick_get = function Document_ondblclick_get() { console.log("Document_ondblclick_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_ondrag_get = function Document_ondrag_get() { console.log("Document_ondrag_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_ondragend_get = function Document_ondragend_get() { console.log("Document_ondragend_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_ondragenter_get = function Document_ondragenter_get() { console.log("Document_ondragenter_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_ondragleave_get = function Document_ondragleave_get() { console.log("Document_ondragleave_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_ondragover_get = function Document_ondragover_get() { console.log("Document_ondragover_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_ondragstart_get = function Document_ondragstart_get() { console.log("Document_ondragstart_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_ondrop_get = function Document_ondrop_get() { console.log("Document_ondrop_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_ondurationchange_get = function Document_ondurationchange_get() { console.log("Document_ondurationchange_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onended_get = function Document_onended_get() { console.log("Document_onended_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onemptied_get = function Document_onemptied_get() { console.log("Document_onemptied_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onerror_get = function Document_onerror_get() { console.log("Document_onerror_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onfocus_get = function Document_onfocus_get() { console.log("Document_onfocus_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onformdata_get = function Document_onformdata_get() { console.log("Document_onformdata_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onfreeze_get = function Document_onfreeze_get() { console.log("Document_onfreeze_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onfullscreenchange_get = function Document_onfullscreenchange_get() { console.log("Document_onfullscreenchange_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onfullscreenerror_get = function Document_onfullscreenerror_get() { console.log("Document_onfullscreenerror_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_ongotpointercapture_get = function Document_ongotpointercapture_get() { console.log("Document_ongotpointercapture_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_oninput_get = function Document_oninput_get() { console.log("Document_oninput_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_oninvalid_get = function Document_oninvalid_get() { console.log("Document_oninvalid_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onkeydown_get = function Document_onkeydown_get() { console.log("Document_onkeydown_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onkeyup_get = function Document_onkeyup_get() { console.log("Document_onkeyup_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onload_get = function Document_onload_get() { console.log("Document_onload_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onloadeddata_get = function Document_onloadeddata_get() { console.log("Document_onloadeddata_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onloadedmetadata_get = function Document_onloadedmetadata_get() { console.log("Document_onloadedmetadata_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onlostpointercapture_get = function Document_onlostpointercapture_get() { console.log("Document_onlostpointercapture_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onloadstart_get = function Document_onloadstart_get() { console.log("Document_onloadstart_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onmousedown_get = function Document_onmousedown_get() { console.log("Document_onmousedown_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onmouseenter_get = function Document_onmouseenter_get() { console.log("Document_onmouseenter_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onmouseleave_get = function Document_onmouseleave_get() { console.log("Document_onmouseleave_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onmouseout_get = function Document_onmouseout_get() { console.log("Document_onmouseout_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onmouseover_get = function Document_onmouseover_get() { console.log("Document_onmouseover_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onmouseup_get = function Document_onmouseup_get() { console.log("Document_onmouseup_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onmousewheel_get = function Document_onmousewheel_get() { console.log("Document_onmousewheel_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onpaste_get = function Document_onpaste_get() { console.log("Document_onpaste_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onpause_get = function Document_onpause_get() { console.log("Document_onpause_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onplay_get = function Document_onplay_get() { console.log("Document_onplay_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onplaying_get = function Document_onplaying_get() { console.log("Document_onplaying_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onpointercancel_get = function Document_onpointercancel_get() { console.log("Document_onpointercancel_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onpointerdown_get = function Document_onpointerdown_get() { console.log("Document_onpointerdown_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onpointerenter_get = function Document_onpointerenter_get() { console.log("Document_onpointerenter_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onpointerleave_get = function Document_onpointerleave_get() { console.log("Document_onpointerleave_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onpointerlockerror_get = function Document_onpointerlockerror_get() { console.log("Document_onpointerlockerror_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onpointerlockchange_get = function Document_onpointerlockchange_get() { console.log("Document_onpointerlockchange_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onpointermove_get = function Document_onpointermove_get() { console.log("Document_onpointermove_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onpointerout_get = function Document_onpointerout_get() { console.log("Document_onpointerout_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onpointerover_get = function Document_onpointerover_get() { console.log("Document_onpointerover_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onpointerrawupdate_get = function Document_onpointerrawupdate_get() { console.log("Document_onpointerrawupdate_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onpointerup_get = function Document_onpointerup_get() { console.log("Document_onpointerup_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onprogress_get = function Document_onprogress_get() { console.log("Document_onprogress_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_onratechange_get = function Document_onratechange_get() { console.log("Document_onratechange_get  ", undefined, "未完善") }
    bodavm.envFunc.Document_querySelector = function Document_querySelector() { console.log("Document_querySelector", undefined, "未完善") }

    bodavm.envFunc.Document_createEvent = function Document_createEvent() {
        // debugger
        let arg = arguments[0].toUpperCase()
        let event = {}
        switch (arg) {
            case 'MOUSEEVENT':

                event.__proto__ = MouseEvent.prototype
                console.log(`Document_createEvent `, event);
                bodavm.toolsFunc.symbolProperty(event)
                return event
            case 'EVENT':
                event.__proto__ = Event.prototype
                console.log(`Document_createEvent `, event);
                bodavm.toolsFunc.symbolProperty(event)
                return event

            case "TOUCHEVENT":
                console.log(`Document_createEvent  `, event, `   该事件只有在触摸平面（触摸屏、触摸板等）才会触发`);
                bodavm.toolsFunc.throwError('DOMException', `Failed to execute 'createEvent' on 'Document': The provided event type ('TouchEvent') is invalid.`)
            default:
                console.log(`Document_createEvent  `, `${arg}  未实现`);

        }


    }
    bodavm.envFunc.Document_body_set = function Document_body_set() {


        return bodavm.toolsFunc.throwError('TypeError', `Document_body_set失败  `)
    }
    bodavm.envFunc.Document_forms_get = function Document_forms_get() {
        if (bodavm.config.isdebug) { debugger };;
        let forms = this[0]._tagelements["FORM"]
        console.log(`Document_forms_get `, `${forms}  `);

        return forms

    }
    bodavm.envFunc.Document_getElementsByClassName = function Document_getElementsByClassName() {
        if (bodavm.config.isdebug) { debugger };;
        let class_name = arguments[0]
        for (let i in this[0]._className) {
            if (i == class_name) {
                let classlist = this[0]._className[i]

                console.log(`Document_getElementsByClassName `, `class_name->${class_name} `, `classlist->${classlist}  `);
                return classlist
            }
        }
        bodavm.toolsFunc.throwError('TypeError', 'Document_getElementsByClassName执行出错')
    }
    bodavm.envFunc.Document_createTextNode = function Document_createTextNode() {
        let data = arguments[0]
        if (bodavm.config.isdebug) { debugger };;
        let textnode = bodavm.toolsFunc.HTMLParser(data)
        console.log(`Document_createTextNode `, `'${data}'  `);
        textnode.__proto__ = Text.prototype
        return textnode
    }
    bodavm.envFunc.Document_URL_get = function Document_URL_get() {
        let URL = bodavm.memory.document["URL"]
        console.log(`Document_URL_get `, `${URL}  `);
        if (bodavm.config.isdebug) { debugger };;
        return URL
    }


    bodavm.envFunc.Document_readyState_get = function Document_readyState_get() {
        let readyState = bodavm.memory.document['readyState']
        console.log(`Document_readyState_get `, `${readyState}  `);
        if (bodavm.config.isdebug) { debugger };;
        return readyState
    }
    bodavm.envFunc.Document_lastModified_get = function Document_lastModified_get() {
        let date = new Date();
        let month = date.getMonth() + 1
        month = month > 11 ? month : '0' + month
        let day = date.getDate()
        let year = date.getFullYear()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let time = `${month}/${day}/${year} ${hours}->${minutes}->${seconds}`
        console.log(`Document_lastModified_get `, `${time}  `);
        return time;
    }
    bodavm.envFunc.Document_contentType_get = function Document_contentType_get() {
        let contenttype = bodavm.memory.document['contentType']
        console.log(`Document_contentType_get `, `${contenttype}  `);
        if (bodavm.config.isdebug) { debugger };;

        return contenttype
    }
    bodavm.envFunc.Document_inputEncoding_get = function Document_inputEncoding_get() {
        let inputEncoding = bodavm.memory.document['inputEncoding']
        console.log(`Document_inputEncoding_get `, `${inputEncoding}  `);
        if (bodavm.config.isdebug) { debugger };;

        return inputEncoding
    }
    bodavm.envFunc.Document_referrer_get = function Document_referrer_get() {
        if (bodavm.config.isdebug) { debugger }

        let referrer = bodavm.memory.document["referrer"]
        console.log(`Document_referrer_get `, `${referrer}  `);
        return referrer
    }

    bodavm.envFunc.Document_createElement = function Document_createElement() {
        let tagName = arguments[0].toLowerCase();
        let options = arguments[1];
        var dom = {}
        if (bodavm.config.isdebug) { debugger };
        switch (tagName) {
            case "div":
                dom._boarg = bobocheerio.load('<div></div>')('div')[0]
                dom = Object.setPrototypeOf(dom, HTMLDivElement.prototype)
                break;
            case "meta":
                
                dom._boarg = bobocheerio.load('<meta>')('meta')[0]
                dom = Object.setPrototypeOf(dom, HTMLMetaElement.prototype)
                break;
            case "canvas":
                dom._boarg = bobocheerio.load('<canvas></canvas>')('canvas')[0]
                dom._bocanvas=bocreateCanvas(300,150)
                dom = Object.setPrototypeOf(dom, HTMLCanvasElement.prototype)
                break;
            case "a":
                dom._boarg  = bobocheerio.load('<a></a>')('a')[0]

                dom = Object.setPrototypeOf(dom, HTMLAnchorElement.prototype)
                break;
            case "script":
                dom._boarg  = bobocheerio.load('<script></script>')('script')[0]

                dom = Object.setPrototypeOf(dom, HTMLScriptElement.prototype)
                break;
            case "style":
                dom._boarg  = bobocheerio.load('<style></style>')('style')[0]

                dom = Object.setPrototypeOf(dom, HTMLStyleElement.prototype)
                break;
            case "head":
                dom._boarg  = bobocheerio.load('<head></head>')('head')[0]

                dom = Object.setPrototypeOf(dom, HTMLHeadElement.prototype)
                break;
            case "body":
                dom._boarg  = bobocheerio.load('<body></body>')('body')[0]

                dom = Object.setPrototypeOf(dom, HTMLBodyElement.prototype)
                break;
            case "form":
                dom._boarg  = bobocheerio.load('<form></form>')('form')[0]

                dom = Object.setPrototypeOf(dom, HTMLFormElement.prototype)
                break;
            case "p":
                dom._boarg  = bobocheerio.load('<p></p>')('p')[0]

                dom = Object.setPrototypeOf(dom, HTMLParagraphElement.prototype)
                break;
            case "iframe":
                dom._boarg  = bobocheerio.load('<iframe></iframe>')('iframe')[0]

                dom = Object.setPrototypeOf(dom, HTMLIFrameElement.prototype)
                break;
            case "span":
                dom._boarg  = bobocheerio.load('<span></span>')('span')[0]

                dom = Object.setPrototypeOf(dom, HTMLSpanElement.prototype)
                break;
            case "img":
                dom._boarg  = bobocheerio.load('<img>')('img')[0]

                dom = Object.setPrototypeOf(dom, HTMLImageElement.prototype)
                break;
            case "li":
                dom._boarg  = bobocheerio.load('<li></li>')('li')[0]

                dom = Object.setPrototypeOf(dom, HTMLLIElement.prototype)
                break;
            case 'h1':
                dom._boarg  = bobocheerio.load('<h1></h1>')('h1')[0]

                dom = Object.setPrototypeOf(dom, HTMLHeadingElement.prototype)
                break;
            default:
                console.log(`Document_createElement `, `${tagName}属性未实现  `);
                break;
        }
        console.log(`Document_createElement `, `tagName->${tagName} `, dom)
        return dom;

    }
    bodavm.envFunc.Document_body_get = function Document_body_get() {

        if (bodavm.config.isdebug) { debugger };;
        let res=bodavm.toolsFunc.setProto('body')
        res._boarg = bobo$("body")[0]
        console.log(`Document_body_get `, `body->${res}  `);
        return res

    }
    bodavm.envFunc.Document_domain_get = function Document_domain_get() {
        let domain = bodavm.memory.document["domain"]
        if (bodavm.config.isdebug) { debugger }
        console.log(`Document_domain_get `, `${domain}  `)
        return domain
    }

    bodavm.envFunc.Document_domain_set = function Document_domain_set() {
        let domain = arguments[0]
        bodavm.memory.document["domain"] = domain
        console.log(`Document_domain_set `, `${domain}  `)
        if (bodavm.config.isdebug) { debugger }
        return domain
    }
    bodavm.envFunc.Document_getElementById=function Document_getElementById(){
        // debugger
        let id=arguments[0]
        let res=bobo$(`#${id}`)?bobo$(`#${id}`)[0]:null
        if (bodavm.config.isdebug) { debugger };
        if (res){
            let value=bodavm.toolsFunc.setProto(res.name) 
            value._boarg=res  //防止this丢失
            console.log(`Document_getElementById `,`id->${id}`,` res->${value}`);
            return value
        }else{
            console.log(`Document_getElementById `,`id->${id}`,` res->${null}`);
            return null
        }
       
    }   

    //'[{"type":"node","tag":"meta",attrs:{"id":id}},{"type":"node","tag":"canvas"},{"type":"node","tag":"a"},{"type":"node","tag":"script"},{"type":"node","tag":"style"}]'
    bodavm.envFunc.Document_getElementsByTagName = function Document_getElementsByTagName() {
        var tagName = arguments[0].toLowerCase()
        if (bodavm.config.isdebug) { debugger };
        if (bodavm.memory.collection[tagName]==undefined){
            bodavm.memory.collection[tagName]=[]
        }
        let temp=bobo$(tagName)
        Object.setPrototypeOf(bodavm.memory.collection[tagName],Array.prototype)

        if (tagName =='script'){
            debugger
            let res=bodavm.toolsFunc.setProto(tagName)
                res._boarg=temp[0]
                bodavm.memory.collection[tagName].push(res)
            let res2=bodavm.toolsFunc.setProto(tagName)
                res2._boarg=temp[1]
                bodavm.memory.collection[tagName].push(res2)
        }else{
            for (let i = 0; i < temp.length; i++) {
                let res=bodavm.toolsFunc.setProto(tagName)
                res._boarg=temp[i]
                bodavm.memory.collection[tagName].push(res)
                
            }
        }
        
        console.log(`Document_getElementsByTagName ` ,`tagName->${tagName} `,` taglist->${bodavm.memory.collection[tagName]}`);

        Object.setPrototypeOf(bodavm.memory.collection[tagName],HTMLCollection.prototype)

        return bodavm.memory.collection[tagName]

    }
    bodavm.envFunc.document_write = function () {
        // debugger
        let text = arguments[0]
        bobo$(bobo$('body')[0]).append(text)
        console.log(`document_write `, `text->${text}`);
        // return text
        return text
    }
    bodavm.envFunc.Document_write = function Document_write() {
        let tagStr = arguments[0]
        debugger
        if (bodavm.config.isdebug) { debugger }
        console.log(`Document_write `, `${tagStr}未实现  `)
    }
    bodavm.envFunc.Document_cookie_get = function Document_cookie_get(){
        let jsonCookie = bodavm.memory.globalInit.jsonCookie;
        let tempCookie = "";
        for(const key in jsonCookie){
            if(key === ""){
                tempCookie += `${jsonCookie[key]}; `;
            }else{
                tempCookie += `${key}=${jsonCookie[key]}; `;
            }
        }
        console.log(`Document_cookie_get `,`cookie -> ${jsonCookie}`);
        return tempCookie;
    }
    bodavm.envFunc.Document_cookie_set = function Document_cookie_set(){
        let cookieValue = arguments[0];
        let index = cookieValue.indexOf(";");
        if(index !== -1){
            cookieValue = cookieValue.substring(0, index);
        }
        if(cookieValue.indexOf("=") === -1){
            bodavm.memory.globalInit.jsonCookie[""] = cookieValue.trim();
        }else{
            let item = cookieValue.split("=");
            let k = item[0].trim();
            let v = item[1].trim();
            bodavm.memory.globalInit.jsonCookie[k] = v;
        }
        console.log(`Document_cookie_set `,`cookie -> ${cookieValue}`);
        return  cookieValue
    }

    bodavm.envFunc.document_location_get = function document_location_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`document_location_get== `, `Location  `);
        return location;
    }

    bodavm.envFunc.Document_characterSet_get = function Document_characterSet_get() {
        let characterSet = bodavm.memory.document['characterSet']
        console.log(`Document_characterSet_get `, `${characterSet}  `);
        if (bodavm.config.isdebug) { debugger };;

        return characterSet
    }
    bodavm.envFunc.Document_charset_get = function Document_charset_get() {
        let charset = bodavm.memory.document['charset']
        console.log(`Document_characterSet_get `, `${charset}  `);
        if (bodavm.config.isdebug) { debugger };;

        return charset
    }

    bodavm.envFunc.Document_title_set = function Document_title_set() {
        let title = arguments[0]
        bodavm.memory.document["title"] = title

        console.log(`Document_title_set `, `${title}  `)
        if (bodavm.config.isdebug) { debugger };;

        return title
    }
    bodavm.envFunc.Document_title_get = function Document_title_get() {
        let title = bodavm.memory.document["title"]
        console.log(`Document_title_get `, `${title}  `)
        return title
    }
    bodavm.envFunc.Document_dir_set = function Document_dir_set() {
        let dir = arguments[0]
        bodavm.memory.document["dir"] = dir
        console.log(`Document_dir_set `, `${dir}  `)
        if (bodavm.config.isdebug) { debugger };;

        return dir
    }
    bodavm.envFunc.Document_dir_get = function Document_dir_get() {
        let dir = bodavm.memory.document["dir"]
        console.log(`Document_dir_get `, `${dir}  `)
        if (bodavm.config.isdebug) { debugger };;

        return dir
    }

    bodavm.envFunc.Document_designMode_set = function Document_designMode_set() {
        let designMode = arguments[0]
        bodavm.memory.document["designMode"] = designMode
        console.log(`Document_designMode_set `, `${designMode}  `)
        if (bodavm.config.isdebug) { debugger }
        return designMode
    }
    bodavm.envFunc.Document_designMode_get = function Document_designMode_get() {
        let designMode = bodavm.memory.document["designMode"]
        console.log(`Document_designMode_get `, `${designMode}  `)
        if (bodavm.config.isdebug) { debugger }
        return designMode
    }
    bodavm.envFunc.Document_documentElement_get = function Document_documentElement_get() {
        if (bodavm.config.isdebug) { debugger }
        // debugger
        let html=bobo$('html')[0]
        let res=bodavm.toolsFunc.setProto(html.name)
        res._boarg=html
        console.log(`Document_documentElement_get `, `html->${res}  `);
        return res

    }

    bodavm.envFunc.Document_scripts_get = function Document_scripts_get() {
        debugger
        console.log(`Document_scripts_get `, `未完善 `);

        if (bodavm.config.isdebug) { debugger };
        return bodavm.toolsFunc.throwError('TypeError', 'Document_scripts_get ', `未完善`)
    }

    bodavm.envFunc.Document_hidden_get = function Document_hidden_get() {
        let hidden = bodavm.memory.document['hidden']
        console.log(`Document_hidden_get `, `${hidden}  `);
        if (bodavm.config.isdebug) { debugger };;

        return hidden
    }
    bodavm.envFunc.Document_implementation_get = function Document_implementation_get() {
        if (bodavm.config.isdebug) { debugger }
        let implementation = {}
        console.log(`Document_implementation_get `, `implementation->${implementation}  `);
        Object.setPrototypeOf(implementation, DOMImplementation.prototype)
        return implementation
    }
    bodavm.envFunc.Document_documentURI_get = function Document_documentURI_get() {
        if (bodavm.config.isdebug) { debugger }
        let documentURI = bodavm.memory.document["documentURI"]
        console.log(`Document_documentURI_get `, `${documentURI}  `);
        return documentURI
    }
    bodavm.envFunc.Document_compatMode_get = function Document_compatMode_get() {
        if (bodavm.config.isdebug) { debugger }
        let compatMode = bodavm.memory.document["compatMode"]
        console.log(`Document_compatMode_get `, `${compatMode}  `);
        return compatMode
    }

    bodavm.envFunc.Document_onmousemove_get = function Document_onmousemove_get() {
        if (bodavm.config.isdebug) { debugger }
        let onmousemove = bodavm.memory.document['onmousemove']
        console.log(`Document_onmousemove_get `, `onmousemove->${onmousemove}  `);
        return onmousemove
    }

    bodavm.envFunc.Document_onselectionchange_get = function Document_onselectionchange_get() {
        if (bodavm.config.isdebug) { debugger }
        let onselectionchange = bodavm.memory.document['onselectionchange']
        console.log(`Document_onselectionchange_get `, `onselectionchange->${onselectionchange}  `);
        return onselectionchange
    }

    bodavm.envFunc.Document_scrollingElement_get = function Document_scrollingElement_get() {
        if (bodavm.config.isdebug) { debugger }
        let res={}
        let html = bobo$('html')[0]
        
        res=bodavm.toolsFunc.setProto(bobo$('html')[0].name)
        res._boarg=html
        // return onselectionchange
        console.log(`Document_scrollingElement_get==> `, `html->${res}`);
        return res
    }
    bodavm.envFunc.Document_head_get = function Document_head_xget() {

        if (bodavm.config.isdebug) { debugger };;

        let head = bodavm.memory.tag[0]._tagelements['head'][0]
        bodavm.toolsFunc.symbolProperty(head)
        console.log(`Document_head_get `, `head->${head}  `);

        return head
        // bodavm.toolsFunc.throwError('TypeError','Document_head_get执行失败')


    }

    //HTMLDivElement
    bodavm.envFunc.HTMLDivElement_align_get = function HTMLDivElement_align_get() {
        let align = bodavm.memory.htmldivelement['align']
        console.log(`HTMLDivElement_align_get `, `${align}  `)
        if (bodavm.config.isdebug) { debugger };;

        return align
    }
    bodavm.envFunc.HTMLDivElement_align_set = function HTMLDivElement_align_set() {
        let value = arguments[0]
        bodavm.memory.htmldivelement['align'] = value
        console.log(`HTMLDivElement_align_set==> `, `${value}  `)
        if (bodavm.config.isdebug) { debugger };;

        return value
    }

    //HTMLMetaElement  
    bodavm.envFunc.HTMLMetaElement_content_get = function HTMLMetaElement_content_get() {
        if (bodavm.config.isdebug) { debugger }
        // debugger
        let content=this._boarg.attribs['content']
        // let value = self.attr["content"]
        console.log(`HTMLMetaElement_content_get `, `content->${content.length>50?content.substr(0,30)+'...':content}  `);
        return content

    }
    bodavm.envFunc.HTMLMetaElement_content_set = function HTMLMetaElement_content_set() {
        var value = arguments[0]
        console.log(`HTMLMetaElement_content_set `, `${value}  `)
        if (bodavm.config.isdebug) { debugger }
        this['_elements'][0].attr["content"] = value
        return value


    }
    bodavm.envFunc.HTMLMetaElement_name_set = function HTMLMetaElement_name_set() {
        var value = arguments[0]
        console.log(`HTMLMetaElement_name_set `, `${value}  `, `未完善`)
        this['_elements'][0].attr["name"] = value
        if (bodavm.config.isdebug) { debugger }

        return value
    }

    bodavm.envFunc.HTMLMetaElement_name_get = function HTMLMetaElement_name_get() {
        let value = this['_elements'][0].attr["name"]
        if (bodavm.config.isdebug) { debugger }

        console.log(`HTMLMetaElement_name_get `, `${value}  `, `未完善`);
        return value
    }


    //Node
    // Node_replaceChild
    bodavm.envFunc.Node_replaceChild = function Node_replaceChild() {
        debugger
        console.log(`Node_replaceChild`, `未完善`);
    }
    bodavm.envFunc.Node_textContent_get = function Node_textContent_get() { console.log("Node_textContent_get", undefined, "未完善") }
    bodavm.envFunc.Node_previousSibling_get = function Node_previousSibling_get() { console.log("Node_previousSibling_get", undefined, "未完善") }
    bodavm.envFunc.Node_ownerDocument_get = function Node_ownerDocument_get() { console.log("Node_ownerDocument_get", undefined, "未完善") }
    bodavm.envFunc.Node_baseURI_get = function Node_baseURI_get() { console.log("Node_baseURI_get", undefined, "未完善") }
    bodavm.envFunc.Node_childNodes_get = function Node_childNodes_get() { console.log("Nodes_get", undefined, "未完善") }
    bodavm.envFunc.Node_isConnected_get = function Node_isConnected_get() { console.log("Node_isConnected_get", undefined, "未完善") }
    bodavm.envFunc.Node_nextSibling_get = function Node_nextSibling_get() {
        // debugger
        let res={}
        res._boarg =this._boarg.next
        if (res._boarg ==null) {
            console.log(`Node_nextSibling_get `,`res -> null`);
            return null}
        switch(res._boarg.type.toLowerCase()){
            case 'tag':
                res=bodavm.toolsFunc.setProto(res._boarg.name)
                break
            case 'text':
                Object.setPrototypeOf(res,Text.prototype)
                break
            case 'script':
                res=bodavm.toolsFunc.setProto(res._boarg.name)
                break
            default :
                console.log(`Node_nextSibling_get `,`${res._boarg.type.toLowerCase()} 未实现` );
                break
        }    
        console.log(`Node_nextSibling_get ` ,`res->${res}`);
        res._boarg =this._boarg.next
        return res    
    }
    bodavm.envFunc.Node_nodeType_get = function Node_nodeType_get() {
        if (bodavm.config.isdebug) { debugger }
        debugger
        if (this ===document){
            console.log(`Node_nodeType_get ` ,`type:document`,   `res->${9}`);
            return 9};

        switch (this._boarg.type){
            case 'tag':
                console.log(`Node_nodeType_get ` ,`type:tag`,   `res->${1}`);
                return 1
            case 'text':
                console.log(`Node_nodeType_get ` ,`type:text `,  `res->${3}`);

                return 3
            case 'script':
                console.log(`Node_nodeType_get ` ,`type:script `,  `res->${1}`);
                return 1
            default :
                console.log(`Node_nodeType_get `,`${this._boarg.type}未实现`);
        }
    }
    bodavm.envFunc.Node_nodeValue_get = function Node_nodeValue_get() { console.log("Node_nodeValue_get", undefined, "未完善") }

    bodavm.envFunc.Node_nodeName_get = function Node_nodeName_get() {
        if (bodavm.config.isdebug) { debugger }
        if (this ===document){
            console.log(`Node_nodeName_get `, `  nodeName->${document}  `);

            return '#document'}
        let name=''
        switch (this._boarg.type){
            case "tag":
                name=this._boarg.name.toUpperCase()
                console.log(`Node_nodeName_get `, `  nodeName->${name}  `);
                return name
            case "text":
                name='#text'
                console.log(`Node_nodeName_get `, `  nodeName->${name}  `);
                return name
            case "script":
                name=this._boarg.name.toUpperCase()
                console.log(`Node_nodeName_get `, `  nodeName->${name}  `);
                return name
            default:
                console.log(`Node_nodeName_get `, ` ${this._boarg.type}未实现  `);

        }
        console.log(`Node_nodeName_get `, `  nodeName->${nodeName_}  `);
        return nodeName_
    }
    bodavm.envFunc.Node_firstChild_get = function Node_firstChild_get() {
        debugger
        if (this._boarg.type =='text'){
            console.log(`Node_firstChild_get `,`type->text `,`fristchild->${null}`);
            return null}
        if (this._boarg.firstChild ==undefined){
            return null
        }
        if (bodavm.config.isdebug) { debugger }
        let res={}
        let fristchild=this._boarg.firstChild
        let type=fristchild.type
        switch (type){
            case 'text':
                res._boarg=fristchild
                res.__proto__=Text.prototype
                break
            default:
                console.log(`Node_firstChild_get `,`type->${type} 未实现`);
        }
        console.log(`Node_firstChild_get `,`fristchild->${res}`);
        return res

    }
    bodavm.envFunc.Node_insertBefore = function Node_insertBefore() {
        let newNode = arguments[0]
        let referenceNode = arguments[1]
        throw(123)
     

    }
    bodavm.envFunc.Node_lastChild_get = function Node_lastChild_get() {
        if (bodavm.config.isdebug) { debugger }
 
        console.log(`Node_lastChild_get `, `lastChild->${lastChild}  `);
    }

    bodavm.envFunc.Node_cloneNode = function Node_cloneNode() {
        let mode = arguments[0]

        return cloneNode
    }
    bodavm.envFunc.Node_parentNode_get = function Node_parentNode_get() {
        //获取父节点
        // debugger
        if (bodavm.config.isdebug) { debugger }
        let parent = this._boarg.parentNode
        let res=bodavm.toolsFunc.setProto(parent.name)
        res._boarg=parent
        // if (Object.prototype.toString.call(parent) == '[object Object]') {
        //     console.log(`Node_parentNode_get `, `parent->${null}  `);
        //     return null
        // }
        // parent.__proto__ = bodavm.toolsFunc.setProto(parent._nodeName)
        console.log(`Node_parentNode_get `, `parent->${res}  `);
        return res;
    }
    bodavm.envFunc.Node_removeChild = function Node_removeChild() {
        //删除子节点
        // debugger
        let child=arguments[0]
        let childs=bobo$(this._boarg).children()
            if (bodavm.config.isdebug) { debugger };;
        for (let i = 0; i < childs.length; i++) {
            if(childs[i] ==child._boarg ){
                console.log(`Node_removeChild `, `child->${child}`);
                bobo$(childs[i]).remove()
                bodavm.memory.collection[child._boarg.name].__proto__=Array.prototype
                for (let i = 0; i < bodavm.memory.collection[child._boarg.name].length; i++) {
                    if (bodavm.memory.collection[child._boarg.name][i]==child){
                        bodavm.memory.collection[child._boarg.name].splice(i,1)
                        bodavm.memory.collection[child._boarg.name].__proto__=HTMLCollection.prototype   
                        break
                    }
                    
                }
                
               
               
            }
        }
        // debugger
      
        return child
        
        
    }
    bodavm.envFunc.Node_parentElement_get = function Node_parentElement_get() {

        if (bodavm.config.isdebug) { debugger };;
        let parent={}
        // debugger
        let temp=bobo$(this._boarg).parent()[0]
        parent=bodavm.toolsFunc.setProto(temp.name)
        parent._boarg=temp
        console.log(`Node_parentElement_get `, `parent${parent} `);


        return parent;
    }
    bodavm.envFunc.Node_appendChild = function Node_appendChild() {
        ;
        if (bodavm.config.isdebug) { debugger };;
        let child=arguments[0]
        bobo$(this._boarg).append(child._boarg)
        console.log(`Node_appendChild `,`child->${child}`);
        return child
    }

    //Element
    bodavm.envFunc.Element_ariaAtomic_get = function Element_ariaAtomic_get() { console.log("Element_ariaAtomic_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaAutoComplete_get = function Element_ariaAutoComplete_get() { console.log("Element_ariaAutoComplete_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaBusy_get = function Element_ariaBusy_get() { console.log("Element_ariaBusy_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaChecked_get = function Element_ariaChecked_get() { console.log("Element_ariaChecked_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaColCount_get = function Element_ariaColCount_get() { console.log("Element_ariaColCount_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaDescription_get = function Element_ariaDescription_get() { console.log("Element_ariaDescription_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaCurrent_get = function Element_ariaCurrent_get() { console.log("Element_ariaCurrent_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaColSpan_get = function Element_ariaColSpan_get() { console.log("Element_ariaColSpan_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaColIndex_get = function Element_ariaColIndex_get() { console.log("Element_ariaColIndex_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaDisabled_get = function Element_ariaDisabled_get() { console.log("Element_ariaDisabled_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaExpanded_get = function Element_ariaExpanded_get() { console.log("Element_ariaExpanded_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaHasPopup_get = function Element_ariaHasPopup_get() { console.log("Element_ariaHasPopup_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaHidden_get = function Element_ariaHidden_get() { console.log("Element_ariaHidden_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaInvalid_get = function Element_ariaInvalid_get() { console.log("Element_ariaInvalid_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaKeyShortcuts_get = function Element_ariaKeyShortcuts_get() { console.log("Element_ariaKeyShortcuts_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaLevel_get = function Element_ariaLevel_get() { console.log("Element_ariaLevel_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaLabel_get = function Element_ariaLabel_get() { console.log("Element_ariaLabel_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaLive_get = function Element_ariaLive_get() { console.log("Element_ariaLive_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaModal_get = function Element_ariaModal_get() { console.log("Element_ariaModal_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaMultiLine_get = function Element_ariaMultiLine_get() { console.log("Element_ariaMultiLine_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaMultiSelectable_get = function Element_ariaMultiSelectable_get() { console.log("Element_ariaMultiSelectable_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaOrientation_get = function Element_ariaOrientation_get() { console.log("Element_ariaOrientation_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaPlaceholder_get = function Element_ariaPlaceholder_get() { console.log("Element_ariaPlaceholder_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaPosInSet_get = function Element_ariaPosInSet_get() { console.log("Element_ariaPosInSet_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaPressed_get = function Element_ariaPressed_get() { console.log("Element_ariaPressed_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaReadOnly_get = function Element_ariaReadOnly_get() { console.log("Element_ariaReadOnly_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaRequired_get = function Element_ariaRequired_get() { console.log("Element_ariaRequired_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaRelevant_get = function Element_ariaRelevant_get() { console.log("Element_ariaRelevant_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaRoleDescription_get = function Element_ariaRoleDescription_get() { console.log("Element_ariaRoleDescription_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaRowCount_get = function Element_ariaRowCount_get() { console.log("Element_ariaRowCount_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaRowIndex_get = function Element_ariaRowIndex_get() { console.log("Element_ariaRowIndex_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaRowSpan_get = function Element_ariaRowSpan_get() { console.log("Element_ariaRowSpan_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaSelected_get = function Element_ariaSelected_get() { console.log("Element_ariaSelected_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaSort_get = function Element_ariaSort_get() { console.log("Element_ariaSort_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaSetSize_get = function Element_ariaSetSize_get() { console.log("Element_ariaSetSize_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaValueMax_get = function Element_ariaValueMax_get() { console.log("Element_ariaValueMax_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaValueMin_get = function Element_ariaValueMin_get() { console.log("Element_ariaValueMin_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaValueNow_get = function Element_ariaValueNow_get() { console.log("Element_ariaValueNow_get", undefined, "未完善") }
    bodavm.envFunc.Element_ariaValueText_get = function Element_ariaValueText_get() { console.log("Element_ariaValueText_get", undefined, "未完善") }
    bodavm.envFunc.Element_assignedSlot_get = function Element_assignedSlot_get() { console.log("Element_assignedSlot_get", undefined, "未完善") }
    bodavm.envFunc.Element_attributeStyleMap_get = function Element_attributeStyleMap_get() { console.log("Element_attributeStyleMap_get", undefined, "未完善") }
    bodavm.envFunc.Element_childElementCount_get = function Element_childElementCount_get() { console.log("ElementCount_get", undefined, "未完善") }
    bodavm.envFunc.Element_classList_get = function Element_classList_get() { console.log("Element_classList_get", undefined, "未完善") }
    bodavm.envFunc.Element_className_get = function Element_className_get() { console.log("Element_className_get", undefined, "未完善") }
    bodavm.envFunc.Element_elementTiming_get = function Element_elementTiming_get() { console.log("Element_elementTiming_get", undefined, "未完善") }
    bodavm.envFunc.Element_firstElementChild_get = function Element_firstElementChild_get() { console.log("ElementChild_get", undefined, "未完善") }
    bodavm.envFunc.Element_lastElementChild_get = function Element_lastElementChild_get() { console.log("ElementChild_get", undefined, "未完善") }
    bodavm.envFunc.Element_localName_get = function Element_localName_get() { console.log("Element_localName_get", undefined, "未完善") }
    bodavm.envFunc.Element_namespaceURI_get = function Element_namespaceURI_get() { console.log("Element_namespaceURI_get", undefined, "未完善") }
    bodavm.envFunc.Element_nextElementSibling_get = function Element_nextElementSibling_get() { console.log("ElementSibling_get", undefined, "未完善") }
    bodavm.envFunc.Element_onbeforecopy_get = function Element_onbeforecopy_get() { console.log("Element_onbeforecopy_get", undefined, "未完善") }
    bodavm.envFunc.Element_onbeforecut_get = function Element_onbeforecut_get() { console.log("Element_onbeforecut_get", undefined, "未完善") }
    bodavm.envFunc.Element_onbeforepaste_get = function Element_onbeforepaste_get() { console.log("Element_onbeforepaste_get", undefined, "未完善") }
    bodavm.envFunc.Element_onfullscreenchange_get = function Element_onfullscreenchange_get() { console.log("Element_onfullscreenchange_get", undefined, "未完善") }
    bodavm.envFunc.Element_onfullscreenerror_get = function Element_onfullscreenerror_get() { console.log("Element_onfullscreenerror_get", undefined, "未完善") }
    bodavm.envFunc.Element_onsearch_get = function Element_onsearch_get() { console.log("Element_onsearch_get", undefined, "未完善") }
    bodavm.envFunc.Element_onwebkitfullscreenchange_get = function Element_onwebkitfullscreenchange_get() { console.log("Element_onwebkitfullscreenchange_get", undefined, "未完善") }
    bodavm.envFunc.Element_onwebkitfullscreenerror_get = function Element_onwebkitfullscreenerror_get() { console.log("Element_onwebkitfullscreenerror_get", undefined, "未完善") }
    bodavm.envFunc.Element_part_get = function Element_part_get() { console.log("Element_part_get", undefined, "未完善") }
    bodavm.envFunc.Element_prefix_get = function Element_prefix_get() { console.log("Element_prefix_get", undefined, "未完善") }
    bodavm.envFunc.Element_previousElementSibling_get = function Element_previousElementSibling_get() { console.log("ElementSibling_get", undefined, "未完善") }
    bodavm.envFunc.Element_scrollHeight_get = function Element_scrollHeight_get() { console.log("Element_scrollHeight_get", undefined, "未完善") }
    bodavm.envFunc.Element_shadowRoot_get = function Element_shadowRoot_get() { console.log("Element_shadowRoot_get", undefined, "未完善") }
    bodavm.envFunc.Element_scrollWidth_get = function Element_scrollWidth_get() { console.log("Element_scrollWidth_get", undefined, "未完善") }
    bodavm.envFunc.Element_slot_get = function Element_slot_get() { console.log("Element_slot_get", undefined, "未完善") }
    bodavm.envFunc.Element_tagName_get = function Element_tagName_get() {
        let tagname = this._boarg.name.toUpperCase()
        if (bodavm.memory.isdebug) { debugger }
        console.log("Element_tagName_get   ", `tagname->${tagname}`)
        return tagname
    }

    bodavm.envFunc.Element_getElementsByClassName = function Element_getElementsByClassName() {
        if (bodavm.config.isdebug) { debugger }
        let class_name = arguments[0]
        let _classes = bodavm.memory.tag[0]._className[class_name]
        let class_list = []
        for (let i = 0; i < _classes.length; i++) {
            if (_classes[i]._parentNode == this) {
                class_list.push(_classes[i])
            }

        }
        console.log(`Element_getElementsByClassName `, `未完善  `);

        class_list.__proto__ = HTMLCollection.prototype
        return class_list

    }
    bodavm.envFunc.Element_append=function Element_append(){
        let child=arguments[0]
        console.log(`Element_append `,`child->${child}`);
        bobo$(this._boarg).append(child._boarg)
        // debugger

    }
    bodavm.envFunc.Element_id_get = function () {
        if (bodavm.config.isdebug) { debugger }
        
        let value = this._boarg.attribs['id']
        console.log(`Element_id_get `, `value->${value}  `);
        return value

    }
    bodavm.envFunc.Element_id_set = function Element_id_set() {
        let value=arguments[0]
        
        if (bodavm.config.isdebug) { debugger }
        // bodavm.toolsFunc.setProtoAttr.call(this,'id',id)
        this._boarg.attribs['id']=value
        console.log(`Element_id_set `,` value->${value}`);
        return value
    }
    bodavm.envFunc.Element_className_set = function () {
        let className = arguments[0]
        debugger
        if (bodavm.config.isdebug) { debugger }
        console.log(`Element_className_set`, `未完善`);
        bodavm.toolsFunc.setProtoAttr.call(this, 'className', className)
        return className

    }
    bodavm.envFunc.Element_attributes_get = function () {
        debugger
        console.log(`Element_attributes_get `, `未完善 `);

    }
    bodavm.envFunc.Element_scrollLeft_get = function Element_scrollLeft_get() {
        console.log(`Element_scrollLeft_get `, `${0}  `);
        if (bodavm.config.isdebug) { debugger };;

        return 0
    }
    bodavm.envFunc.Element_clientLeft_get = function Element_clientLeft_get() {
        console.log(`Element_clientLeft_get `, `${0}  `);
        if (bodavm.config.isdebug) { debugger };;

        return 0
    }

    bodavm.envFunc.Element_clientTop_get = function Element_clientTop_get() {
        console.log(`Element_clientTop_get `, `${0}  `);
        if (bodavm.config.isdebug) { debugger };;

        return 0
    }
    bodavm.envFunc.Element_scrollTop_get = function Element_scrollTop_get() {

        console.log(`Element_scrollTop_get `, `${0}  `);
        if (bodavm.config.isdebug) { debugger };;

        return 0
    }


    bodavm.envFunc.Element_remove = function Element_remove() {
        if (bodavm.config.isdebug) { debugger };;
        debugger
        let tagname = this._tagName
        let self = this
        let id = this._attrs['id']
        let class_ = this._attrs['class'] //class名字
        if (id) {

            delete bodavm.memory.tag[0]._idelements[id]
        }
        if (class_) {
            //取到bodavm.memory.tag[0]._className[class_]列表

            for (let i = 0; i < bodavm.memory.tag[0]._className[class_].length; i++) {
                if (bodavm.memory.tag[0]._className[class_][i] == this) {
                    bodavm.memory.tag[0]._className[class_].splice(i, 1)
                }

            }
        }
        for (let i = 0; i < bodavm.memory.tag[0]._tagelements[tagname].length; i++) {
            if (bodavm.memory.tag[0]._tagelements[tagname][i] == this) {
                bodavm.memory.tag[0]._tagelements[tagname].splice(i, 1)
            }

        }


     
    }
    bodavm.envFunc.Element_clientHeight_get = function Element_clientHeight_get() {
        let clientHeight = 0
        console.log(`Element_clientHeight_get `, `${clientHeight}  `);
        if (bodavm.config.isdebug) { debugger };;

        return clientHeight
    }
    bodavm.envFunc.Element_removeAttribute = function Element_removeAttribute() {
        let attr = arguments[0]
        if (bodavm.config.isdebug) { debugger };;
        console.log(`Element_removeAttribute `, `${attr}  `, `=============================未完善`);
        //IE 返回 boolean 类型值，其他返回 undefined
    }
    bodavm.envFunc.Element_setAttribute = function Element_setAttribute() {
        let name = arguments[0]
        let value = arguments[1]
        this._boarg.attribs[name]=value
        console.log(`Element_setAttribute `, `name->${name} `, `value->${value}  `);
        if (bodavm.config.isdebug) { debugger };;
        ;

    }
    bodavm.envFunc.Element_clientWidth_get = function Element_clientWidth_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`Element_clientWidth_get  `, `${0}  `);

        return 0
    }
    bodavm.envFunc.Element_outerHTML_get = function Element_outerHTML_get() {

        // let outerHtml = this._elements[0].outerHTML
        let outhtml=bobo$( this._boarg).html()
        console.log(`Element_outerHTML_get==> `, `outhtml->${outhtml}`, );
        if (bodavm.config.isdebug) { debugger };;
        //腾讯qq邮箱hk

        return outhtml
    }

    bodavm.envFunc.Element_children_get = function Element_children_get() {
        if (bodavm.config.isdebug) { debugger };;

    }
    bodavm.envFunc.Element_getBoundingClientRect = function Element_getBoundingClientRect() {
        // debugger
        if (bodavm.config.isdebug) { debugger };;

        console.log(`Element_getBoundingClientRect`, '未完善');
    }
    bodavm.envFunc.Element_innerHTML_get = function Element_innerHTML_get() {
        let res=bobo$( this._boarg).html()
        if (bodavm.config.isdebug) { debugger };;

        console.log(`Element_innerHTML_get ` ,`res->${res}`);
        return res
  
    }
    bodavm.envFunc.Element_innerHTML_set = function Element_innerHTML_set() {
        // debugger
        if (bodavm.config.isdebug) { debugger };;
        let html = arguments[0] + '';
        bobo$(this._boarg).empty()
        bobo$(this._boarg).append(html)
        console.log(`Element_innerHTML_set ` ,`html->${html}`);
        return html
    }
    bodavm.envFunc.Element_getAttribute = function () {
        let attr = arguments[0]
        if (bodavm.config.isdebug) { debugger; }
        let value = this._boarg.attribs[attr]?this._boarg.attribs[attr]:null
        console.log(`Element_getAttribute `, `attr->${attr} `, `value->${value}  `)

        return value

    }
    //// '[{"type":"node","tag":"meta","id":"","className":""},{"type":"node","tag":"meta","id":"","className":""},{"type":"node","tag":"head","id":"","className":""},{"type":"node","tag":"body","id":"","className":""}]'
    //ok
    bodavm.envFunc.Element_getElementsByTagName = function Element_getElementsByTagName() {
        if (bodavm.config.isdebug) { debugger; }
        // debugger
        let tagName = arguments[0].toLowerCase();
        let temp=bobo$(tagName)
        // debugger
        let res={}
        res._boarg=temp
        if(bodavm.memory.collection[tagName]==undefined){
            bodavm.memory.collection[tagName]=[]
        }
        for (let i = 0; i < temp.length; i++) {
            bodavm.memory.collection[tagName].__proto__=Array.prototype
            bodavm.memory.collection[tagName].push(temp[i])
        }
        bodavm.memory.collection[tagName].__proto__=HTMLCollection.prototype
        return bodavm.memory.collection[tagName]
        
    }

    //Navigator
    bodavm.envFunc.Navigator_bluetooth_get = function Navigator_bluetooth_get() { console.log("Navigator_bluetooth_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_clipboard_get = function Navigator_clipboard_get() { console.log("Navigator_clipboard_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_credentials_get = function Navigator_credentials_get() { console.log("Navigator_credentials_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_deviceMemory_get = function Navigator_deviceMemory_get() { console.log("Navigator_deviceMemory_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_doNotTrack_get = function Navigator_doNotTrack_get() { console.log("Navigator_doNotTrack_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_geolocation_get = function Navigator_geolocation_get() { console.log("Navigator_geolocation_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_hid_get = function Navigator_hid_get() { console.log("Navigator_hid_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_ink_get = function Navigator_ink_get() { console.log("Navigator_ink_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_keyboard_get = function Navigator_keyboard_get() { console.log("Navigator_keyboard_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_locks_get = function Navigator_locks_get() { console.log("Navigator_locks_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_managed_get = function Navigator_managed_get() { console.log("Navigator_managed_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_maxTouchPoints_get = function Navigator_maxTouchPoints_get() { console.log("Navigator_maxTouchPoints_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_mediaCapabilities_get = function Navigator_mediaCapabilities_get() { console.log("Navigator_mediaCapabilities_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_mediaDevices_get = function Navigator_mediaDevices_get() { console.log("Navigator_mediaDevices_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_mediaSession_get = function Navigator_mediaSession_get() { console.log("Navigator_mediaSession_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_onLine_get = function Navigator_onLine_get() { console.log("Navigator_onLine_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_pdfViewerEnabled_get = function Navigator_pdfViewerEnabled_get() { console.log("Navigator_pdfViewerEnabled_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_permissions_get = function Navigator_permissions_get() { console.log("Navigator_permissions_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_presentation_get = function Navigator_presentation_get() { console.log("Navigator_presentation_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_product_get = function Navigator_product_get() { console.log("Navigator_product_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_scheduling_get = function Navigator_scheduling_get() { console.log("Navigator_scheduling_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_serial_get = function Navigator_serial_get() { console.log("Navigator_serial_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_serviceWorker_get = function Navigator_serviceWorker_get() { console.log("Navigator_serviceWorker_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_storage_get = function Navigator_storage_get() { console.log("Navigator_storage_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_usb_get = function Navigator_usb_get() { console.log("Navigator_usb_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_userActivation_get = function Navigator_userActivation_get() { console.log("Navigator_userActivation_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_vendorSub_get = function Navigator_vendorSub_get() { console.log("Navigator_vendorSub_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_virtualKeyboard_get = function Navigator_virtualKeyboard_get() { console.log("Navigator_virtualKeyboard_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_wakeLock_get = function Navigator_wakeLock_get() { console.log("Navigator_wakeLock_get", undefined, "未完善") }
    bodavm.envFunc.Navigator_webkitTemporaryStorage_get = function Navigator_webkitTemporaryStorage_get() { console.log("Navigator_webkitTemporaryStorage_get", undefined, "未完善") }


    bodavm.envFunc.Navigator_javaEnabled = function () {
        let javaEnabled = bodavm.memory.navigator['javaEnabled']
        console.log(`Navigator_javaEnabled `, `${javaEnabled}  `);
        return javaEnabled
    }
    bodavm.envFunc.Navigator_productSub_get = function () {
        if (bodavm.config.isdebug) { debugger; }
        let productSub = bodavm.memory.navigator["productSub"]
        console.log(`Navigator_productSub_get `, `${productSub}  `);
        return productSub
    }
    bodavm.envFunc.Navigator_userAgentData_get = function () {
        if (bodavm.config.isdebug) { debugger; }

        let userAgentData = bodavm.memory.navigator["userAgentData"]
        console.log(`Navigator_userAgentData_get `, `${userAgentData}  `);
        return userAgentData
    }

    bodavm.envFunc.Navigator_xr_get = function Navigator_xr_get() {
        if (bodavm.config.isdebug) { debugger; }
        let xr = bodavm.memory.navigator["xr"]
        console.log(`Navigator_xr_get `, `${xr}  `);
        return xr
    }

    bodavm.envFunc.Navigator_appCodeName_get = function Navigator_appCodeName_get() {
        let appCodeName = bodavm.memory.navigator["appCodeName"]
        console.log(`Navigator_appCodeName_get `, `${appCodeName}  `);
        if (bodavm.config.isdebug) { debugger };;

        return appCodeName
    }
    bodavm.envFunc.Navigator_appName_get = function Navigator_appName_get() {
        let appName = bodavm.memory.navigator["appName"]
        console.log(`Navigator_appName_get `, `${appName}  `);
        if (bodavm.config.isdebug) { debugger };;

        return appName
    }
    bodavm.envFunc.Navigator_vendor_get = function Navigator_vendor_get() {
        let vendor = bodavm.memory.navigator["vendor"]
        console.log(`Navigator_vendor_get `, `${vendor}  `);
        if (bodavm.config.isdebug) { debugger };;

        return vendor
    }
    bodavm.envFunc.Navigator_platform_get = function Navigator_platform_get() {
        let platform = bodavm.memory.navigator['platform']
        console.log(`Navigator_platform_get `, `${platform}  `);
        if (bodavm.config.isdebug) { debugger };;

        return platform;
    }


    bodavm.envFunc.Navigator_hardwareConcurrency_get = function Navigator_hardwareConcurrency_get() {
        console.log(`Navigator_hardwareConcurrency_get `, `${8}  `);
        return 8
    }
    bodavm.envFunc.Navigator_plugins_get = function Navigator_plugin_get() {
        let plugin = bodavm.memory.globalInit.pluginArray;
        console.log(`Navigator_plugins_get `, `plugin->${plugin}  `)
        return plugin
    }
    bodavm.envFunc.Navigator_mimeTypes_get = function Navigator_mimeTypes_get() {

        let mimeTypeArray = bodavm.memory.globalInit["mimeTypeArray"]
        console.log(`Navigator_mimeTypes_get `, `${mimeTypeArray}  `)
        return mimeTypeArray
    }
    bodavm.envFunc.Navigator_userAgent_get = function Navigator_userAgent_get() {
        let ua = bodavm.memory.navigator["userAgent"]
        console.log(`Navigator_userAgent_get `, `${ua}  `)
        return ua
    }
    bodavm.envFunc.Navigator_webkitPersistentStorage_get = function Navigator_webkitPersistentStorage_get() {
        let webkitPersistentStorage = bodavm.memory.navigator['webkitPersistentStorage']
        // DocumentFragment对象
        DeprecatedStorageQuota = function DeprecatedStorageQuota() { }
        bodavm.toolsFunc.safeProto(DeprecatedStorageQuota, "DeprecatedStorageQuota ");

        bodavm.toolsFunc.defineProperty(DeprecatedStorageQuota.prototype, "queryUsageAndQuota", { configurable: true, enumerable: true, get: function DeprecatedStorageQuota() { return bodavm.toolsFunc.dispatch(this, DeprecatedStorageQuota.prototype, "DeprecatedStorageQuota", "queryUsageAndQuota_get  ", arguments) }, set: function DeprecatedStorageQuota() { return bodavm.toolsFunc.dispatch(this, DeprecatedStorageQuota.prototype, "DeprecatedStorageQuota", "queryUsageAndQuota_set", arguments) } });
        bodavm.toolsFunc.defineProperty(DeprecatedStorageQuota.prototype, "requestQuota", { configurable: true, enumerable: true, get: function DeprecatedStorageQuota() { return bodavm.toolsFunc.dispatch(this, DeprecatedStorageQuota.prototype, "DeprecatedStorageQuota", "requestQuota_get  ", arguments) }, set: function requestQuota() { return bodavm.toolsFunc.dispatch(this, DeprecatedStorageQuota.prototype, "DeprecatedStorageQuota", "requestQuota_set", arguments) } });

        Object.setPrototypeOf(webkitPersistentStorage, DeprecatedStorageQuota.prototype)
        delete DeprecatedStorageQuota
        console.log(`Navigator_webkitPersistentStorage_get `, `${webkitPersistentStorage}  `)
        if (bodavm.config.isdebug) { debugger };;

        return webkitPersistentStorage
    }
    bodavm.envFunc.Navigator_languages_get = function Navigator_languages_get() {
        let languages = bodavm.memory.navigator["languages"]
        console.log(`Navigator_languages_get `, `${languages}  `)
        return languages
    }
    bodavm.envFunc.Navigator_language_get = function Navigator_languages_get() {
        let language = bodavm.memory.navigator["language"]
        console.log(`Navigator_language_get `, `${language}  `)
        return language
    }

    bodavm.envFunc.Navigator_appVersion_get = function Navigator_appVersion_get() {
        let appVersion = bodavm.memory.navigator["appVersion"]
        console.log(`Navigator_appVersion_get `, `${appVersion}  `)
        return appVersion
    }
    bodavm.envFunc.Navigator_getBattery = function Navigator_getBattery() {
        let batteryManager = {};
        console.log(`Navigator_getBattery  `, 'settimeout 添加异步电池信息');
        batteryManager.__proto__ = BatteryManager.prototype
        // debugger
        // bodavm.toolsFunc.symbolProperty(batteryManager)
        let promise = new Promise((resolve, reject) => {
            resolve(batteryManager)
        })

        return promise
    }
    bodavm.envFunc.Navigator_webdriver_get = function Navigator_webdriver_get() {
        if (bodavm.config.isdebug) { debugger };;
        console.log(`Navigator_webdriver_get== `, `false  `);
        return false
    }
    bodavm.envFunc.Navigator_connection_get = function Navigator_connection_get() {
        if (bodavm.config.isdebug) { debugger };
        let connection = bodavm.memory.navigator['connection']
        console.log(`Navigator_connection_get `, `${connection}  `)
        Object.setPrototypeOf(connection, NetworkInformation.prototype)
        return connection
    }
    bodavm.envFunc.Navigator_cookieEnabled_get = function Navigator_cookieEnabled_get() {
        let cookieEnabled = bodavm.memory.navigator['cookieEnabled']
        console.log(`Navigator_cookieEnabled_get= `, `${cookieEnabled}  `)

        return cookieEnabled
    }


    bodavm.envFunc.MimeTypeArray_namedItem = function MimeTypeArray_namedItem() {
        let name = arguments[0];

        return this[name];
    }
    bodavm.envFunc.MimeTypeArray_item = function MimeTypeArray_item() {
        let index = arguments[0];

        return this[index];
    }
    bodavm.envFunc.Plugin_namedItem = function Plugin_namedItem() {
        let name = arguments[0];

        return this[name];
    }
    bodavm.envFunc.Plugin_item = function Plugin_item() {
        let index = arguments[0];

        return this[index];
    }
    bodavm.envFunc.PluginArray_namedItem = function PluginArray_namedItem() {
        let name = arguments[0];

        return this[name];
    }
    bodavm.envFunc.PluginArray_item = function PluginArray_item() {
        let index = arguments[0];

        return this[index];
    }
    bodavm.envFunc.Navigator_mimeTypes_get = function Navigator_mimeTypes_get() {
        return bodavm.memory.globalInit.mimeTypeArray;
    }
    bodavm.envFunc.MimeType_suffixes_get = function MimeType_suffixes_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "suffixes");
    }
    bodavm.envFunc.MimeType_enabledPlugin_get = function MimeType_enabledPlugin_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "enabledPlugin");
    }
    bodavm.envFunc.MimeType_description_get = function MimeType_description_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "description");
    }
    bodavm.envFunc.Plugin_length_get = function Plugin_length_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "length");
    }
    bodavm.envFunc.Plugin_filename_get = function Plugin_filename_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "filename");
    }
    bodavm.envFunc.Plugin_description_get = function Plugin_description_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "description");
    }
    bodavm.envFunc.Plugin_name_get = function Plugin_name_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "name");
    }
    bodavm.envFunc.PluginArray_length_get = function PluginArray_length_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "length");
    }
    bodavm.envFunc.MimeType_type_get = function MimeType_type_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "type");
    }
    bodavm.envFunc.MimeTypeArray_length_get = function MimeTypeArray_length_get() {
        return bodavm.toolsFunc.getProtoAttr.call(this, "length");
    }

    //HTMLElement
    bodavm.envFunc.HTMLElement_accessKey_get = function HTMLElement_accessKey_get() { console.log("HTMLElement_accessKey_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_autocapitalize_get = function HTMLElement_autocapitalize_get() { console.log("HTMLElement_autocapitalize_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_autofocus_get = function HTMLElement_autofocus_get() { console.log("HTMLElement_autofocus_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_contentEditable_get = function HTMLElement_contentEditable_get() { console.log("HTMLElement_contentEditable_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_dataset_get = function HTMLElement_dataset_get() { console.log("HTMLElement_dataset_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_dir_get = function HTMLElement_dir_get() { console.log("HTMLElement_dir_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_draggable_get = function HTMLElement_draggable_get() { console.log("HTMLElement_draggable_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_enterKeyHint_get = function HTMLElement_enterKeyHint_get() { console.log("HTMLElement_enterKeyHint_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_hidden_get = function HTMLElement_hidden_get() { console.log("HTMLElement_hidden_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_inputMode_get = function HTMLElement_inputMode_get() { console.log("HTMLElement_inputMode_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_inert_get = function HTMLElement_inert_get() { console.log("HTMLElement_inert_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_isContentEditable_get = function HTMLElement_isContentEditable_get() { console.log("HTMLElement_isContentEditable_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_lang_get = function HTMLElement_lang_get() { console.log("HTMLElement_lang_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_nonce_get = function HTMLElement_nonce_get() { console.log("HTMLElement_nonce_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_offsetTop_get = function HTMLElement_offsetTop_get() { console.log("HTMLElement_offsetTop_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_offsetParent_get = function HTMLElement_offsetParent_get() { console.log("HTMLElement_offsetParent_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_offsetLeft_get = function HTMLElement_offsetLeft_get() { console.log("HTMLElement_offsetLeft_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onabort_get = function HTMLElement_onabort_get() { console.log("HTMLElement_onabort_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onanimationend_get = function HTMLElement_onanimationend_get() { console.log("HTMLElement_onanimationend_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onanimationiteration_get = function HTMLElement_onanimationiteration_get() { console.log("HTMLElement_onanimationiteration_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onanimationstart_get = function HTMLElement_onanimationstart_get() { console.log("HTMLElement_onanimationstart_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onauxclick_get = function HTMLElement_onauxclick_get() { console.log("HTMLElement_onauxclick_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onbeforematch_get = function HTMLElement_onbeforematch_get() { console.log("HTMLElement_onbeforematch_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onbeforexrselect_get = function HTMLElement_onbeforexrselect_get() { console.log("HTMLElement_onbeforexrselect_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onblur_get = function HTMLElement_onblur_get() { console.log("HTMLElement_onblur_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_oncancel_get = function HTMLElement_oncancel_get() { console.log("HTMLElement_oncancel_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_oncanplay_get = function HTMLElement_oncanplay_get() { console.log("HTMLElement_oncanplay_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_oncanplaythrough_get = function HTMLElement_oncanplaythrough_get() { console.log("HTMLElement_oncanplaythrough_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onchange_get = function HTMLElement_onchange_get() { console.log("HTMLElement_onchange_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onclick_get = function HTMLElement_onclick_get() { console.log("HTMLElement_onclick_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onclose_get = function HTMLElement_onclose_get() { console.log("HTMLElement_onclose_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_oncontextlost_get = function HTMLElement_oncontextlost_get() { console.log("HTMLElement_oncontextlost_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_oncontextmenu_get = function HTMLElement_oncontextmenu_get() { console.log("HTMLElement_oncontextmenu_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_oncontextrestored_get = function HTMLElement_oncontextrestored_get() { console.log("HTMLElement_oncontextrestored_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_oncopy_get = function HTMLElement_oncopy_get() { console.log("HTMLElement_oncopy_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_oncuechange_get = function HTMLElement_oncuechange_get() { console.log("HTMLElement_oncuechange_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_ondblclick_get = function HTMLElement_ondblclick_get() { console.log("HTMLElement_ondblclick_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_oncut_get = function HTMLElement_oncut_get() { console.log("HTMLElement_oncut_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_ondrag_get = function HTMLElement_ondrag_get() { console.log("HTMLElement_ondrag_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_ondragleave_get = function HTMLElement_ondragleave_get() { console.log("HTMLElement_ondragleave_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_ondragstart_get = function HTMLElement_ondragstart_get() { console.log("HTMLElement_ondragstart_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_ondragenter_get = function HTMLElement_ondragenter_get() { console.log("HTMLElement_ondragenter_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_ondragend_get = function HTMLElement_ondragend_get() { console.log("HTMLElement_ondragend_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_ondragover_get = function HTMLElement_ondragover_get() { console.log("HTMLElement_ondragover_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_ondrop_get = function HTMLElement_ondrop_get() { console.log("HTMLElement_ondrop_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_ondurationchange_get = function HTMLElement_ondurationchange_get() { console.log("HTMLElement_ondurationchange_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onemptied_get = function HTMLElement_onemptied_get() { console.log("HTMLElement_onemptied_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onended_get = function HTMLElement_onended_get() { console.log("HTMLElement_onended_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onerror_get = function HTMLElement_onerror_get() { console.log("HTMLElement_onerror_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onfocus_get = function HTMLElement_onfocus_get() { console.log("HTMLElement_onfocus_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onformdata_get = function HTMLElement_onformdata_get() { console.log("HTMLElement_onformdata_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_ongotpointercapture_get = function HTMLElement_ongotpointercapture_get() { console.log("HTMLElement_ongotpointercapture_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_oninput_get = function HTMLElement_oninput_get() { console.log("HTMLElement_oninput_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onkeydown_get = function HTMLElement_onkeydown_get() { console.log("HTMLElement_onkeydown_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onkeypress_get = function HTMLElement_onkeypress_get() { console.log("HTMLElement_onkeypress_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onkeyup_get = function HTMLElement_onkeyup_get() { console.log("HTMLElement_onkeyup_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_oninvalid_get = function HTMLElement_oninvalid_get() { console.log("HTMLElement_oninvalid_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onload_get = function HTMLElement_onload_get() { console.log("HTMLElement_onload_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onloadedmetadata_get = function HTMLElement_onloadedmetadata_get() { console.log("HTMLElement_onloadedmetadata_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onlostpointercapture_get = function HTMLElement_onlostpointercapture_get() { console.log("HTMLElement_onlostpointercapture_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onloadeddata_get = function HTMLElement_onloadeddata_get() { console.log("HTMLElement_onloadeddata_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onloadstart_get = function HTMLElement_onloadstart_get() { console.log("HTMLElement_onloadstart_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onmousedown_get = function HTMLElement_onmousedown_get() { console.log("HTMLElement_onmousedown_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onmouseleave_get = function HTMLElement_onmouseleave_get() { console.log("HTMLElement_onmouseleave_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onmousemove_get = function HTMLElement_onmousemove_get() { console.log("HTMLElement_onmousemove_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onmouseout_get = function HTMLElement_onmouseout_get() { console.log("HTMLElement_onmouseout_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onmouseup_get = function HTMLElement_onmouseup_get() { console.log("HTMLElement_onmouseup_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onmouseover_get = function HTMLElement_onmouseover_get() { console.log("HTMLElement_onmouseover_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onmousewheel_get = function HTMLElement_onmousewheel_get() { console.log("HTMLElement_onmousewheel_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onpaste_get = function HTMLElement_onpaste_get() { console.log("HTMLElement_onpaste_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onpause_get = function HTMLElement_onpause_get() { console.log("HTMLElement_onpause_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onplay_get = function HTMLElement_onplay_get() { console.log("HTMLElement_onplay_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onplaying_get = function HTMLElement_onplaying_get() { console.log("HTMLElement_onplaying_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onpointercancel_get = function HTMLElement_onpointercancel_get() { console.log("HTMLElement_onpointercancel_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onpointerdown_get = function HTMLElement_onpointerdown_get() { console.log("HTMLElement_onpointerdown_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onpointerleave_get = function HTMLElement_onpointerleave_get() { console.log("HTMLElement_onpointerleave_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onpointermove_get = function HTMLElement_onpointermove_get() { console.log("HTMLElement_onpointermove_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onpointerover_get = function HTMLElement_onpointerover_get() { console.log("HTMLElement_onpointerover_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onpointerout_get = function HTMLElement_onpointerout_get() { console.log("HTMLElement_onpointerout_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onpointerenter_get = function HTMLElement_onpointerenter_get() { console.log("HTMLElement_onpointerenter_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onpointerrawupdate_get = function HTMLElement_onpointerrawupdate_get() { console.log("HTMLElement_onpointerrawupdate_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onpointerup_get = function HTMLElement_onpointerup_get() { console.log("HTMLElement_onpointerup_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onprogress_get = function HTMLElement_onprogress_get() { console.log("HTMLElement_onprogress_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onratechange_get = function HTMLElement_onratechange_get() { console.log("HTMLElement_onratechange_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onreset_get = function HTMLElement_onreset_get() { console.log("HTMLElement_onreset_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onscroll_get = function HTMLElement_onscroll_get() { console.log("HTMLElement_onscroll_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onsecuritypolicyviolation_get = function HTMLElement_onsecuritypolicyviolation_get() { console.log("HTMLElement_onsecuritypolicyviolation_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onseeked_get = function HTMLElement_onseeked_get() { console.log("HTMLElement_onseeked_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onseeking_get = function HTMLElement_onseeking_get() { console.log("HTMLElement_onseeking_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onselect_get = function HTMLElement_onselect_get() { console.log("HTMLElement_onselect_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onselectionchange_get = function HTMLElement_onselectionchange_get() { console.log("HTMLElement_onselectionchange_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onselectstart_get = function HTMLElement_onselectstart_get() { console.log("HTMLElement_onselectstart_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onslotchange_get = function HTMLElement_onslotchange_get() { console.log("HTMLElement_onslotchange_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onstalled_get = function HTMLElement_onstalled_get() { console.log("HTMLElement_onstalled_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onsuspend_get = function HTMLElement_onsuspend_get() { console.log("HTMLElement_onsuspend_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_ontimeupdate_get = function HTMLElement_ontimeupdate_get() { console.log("HTMLElement_ontimeupdate_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onsubmit_get = function HTMLElement_onsubmit_get() { console.log("HTMLElement_onsubmit_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_ontoggle_get = function HTMLElement_ontoggle_get() { console.log("HTMLElement_ontoggle_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_ontransitioncancel_get = function HTMLElement_ontransitioncancel_get() { console.log("HTMLElement_ontransitioncancel_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_ontransitionrun_get = function HTMLElement_ontransitionrun_get() { console.log("HTMLElement_ontransitionrun_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_ontransitionstart_get = function HTMLElement_ontransitionstart_get() { console.log("HTMLElement_ontransitionstart_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_ontransitionend_get = function HTMLElement_ontransitionend_get() { console.log("HTMLElement_ontransitionend_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onvolumechange_get = function HTMLElement_onvolumechange_get() { console.log("HTMLElement_onvolumechange_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onwaiting_get = function HTMLElement_onwaiting_get() { console.log("HTMLElement_onwaiting_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onwebkitanimationend_get = function HTMLElement_onwebkitanimationend_get() { console.log("HTMLElement_onwebkitanimationend_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onwebkitanimationiteration_get = function HTMLElement_onwebkitanimationiteration_get() { console.log("HTMLElement_onwebkitanimationiteration_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onwebkitanimationstart_get = function HTMLElement_onwebkitanimationstart_get() { console.log("HTMLElement_onwebkitanimationstart_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onwebkittransitionend_get = function HTMLElement_onwebkittransitionend_get() { console.log("HTMLElement_onwebkittransitionend_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_onwheel_get = function HTMLElement_onwheel_get() { console.log("HTMLElement_onwheel_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_outerText_get = function HTMLElement_outerText_get() { console.log("HTMLElement_outerText_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_spellcheck_get = function HTMLElement_spellcheck_get() { console.log("HTMLElement_spellcheck_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_tabIndex_get = function HTMLElement_tabIndex_get() { console.log("HTMLElement_tabIndex_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_title_get = function HTMLElement_title_get() { console.log("HTMLElement_title_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_translate_get = function HTMLElement_translate_get() { console.log("HTMLElement_translate_get", undefined, "未完善") }
    bodavm.envFunc.HTMLElement_virtualKeyboardPolicy_get = function HTMLElement_virtualKeyboardPolicy_get() { console.log("HTMLElement_virtualKeyboardPolicy_get", undefined, "未完善") }

    bodavm.envFunc.HTMLElement_offsetHeight_get = function HTMLElement_offsetHeight_get() {
        // debugger
        // let fontFamily = this.style['fontFamily']
        if (bodavm.config.isdebug) { debugger }

        let str = {}
        let _style = this._attrs.style.split(';')
        for (let i = 0; i < _style.length; i++) {
            let stylelist = _style[i].split(':')
            str[stylelist[0]] = stylelist[1]
        }
        let fontFamily = bodavm.memory.font['font-family'] ? bodavm.memory.font['font-family'] : str['font-family']
        if (bodavm.memory.globalInit.fontList.indexOf(fontFamily) !== -1) {// 能够识别的字体
            console.log(`HTMLElement_offsetHeight_get `, `fontFamily->${fontFamily}   666 可识别的字体  `);
            return 666;
        } else { // 无法识别的字体
            console.log(`HTMLElement_offsetHeight_get `, `fontFamily->${fontFamily}    999 无法识别的字体  `);
            return 999;
        }

    }
    bodavm.envFunc.HTMLElement_innerText_set=function HTMLElement_innerText_set(){
        let value=arguments[0]
        console.log(`HTMLElement_innerText_set `,` value->${value}`);
        bobo$(this._boarg).text(value)
        return value
    }
    bodavm.envFunc.HTMLElement_innerText_get=function HTMLElement_innerText_get(){
        // let value=arguments[0]
        let value=bobo$(this._boarg).text()
        console.log(`HTMLElement_innerText_get `,` value->${value}`);

        return value
    }
    bodavm.envFunc.HTMLElement_offsetWidth_get = function HTMLElement_offsetWidth_get() {
        ;
        // let fontFamily = this.style['fontFamily'] 
        if (bodavm.config.isdebug) { debugger }

        let str = {}
        let _style = this._attrs.style.split(';')
        for (let i = 0; i < _style.length; i++) {
            let stylelist = _style[i].split(':')
            str[stylelist[0]] = stylelist[1]
        }
        let fontFamily = bodavm.memory.font['font-family'] ? bodavm.memory.font['font-family'] : str['font-family']
        if (bodavm.memory.globalInit.fontList.indexOf(fontFamily) !== -1) {// 能够识别的字体
            console.log(`HTMLElement_offsetWidth_get `, ` fontFamily->${fontFamily}   1666 可识别的字体  `);
            return 1666;
        } else { // 无法识别的字体
            console.log(`HTMLElement_offsetWidth_get  `, `fontFamily->${fontFamily}   1999 无法识别的字体  `);
            return 1999;
        }

    }
    bodavm.envFunc.CSSStyleDeclaration_fontFamily_get = function CSSStyleDeclaration_fontFamily_get() {
        if (bodavm.config.isdebug) { debugger }
        let font_family = this['font-family']
        bodavm.memory.font['fontFamily'] = font_family
        let font = bodavm.memory.font['font-family'] ? bodavm.memory.font['font-family'] : font_family
        console.log(`CSSStyleDeclaration_fontFamily_get `, `font  `);
        return font
    }
    bodavm.envFunc.CSSStyleDeclaration_fontFamily_set = function CSSStyleDeclaration_fontFamily_set() {
        if (bodavm.config.isdebug) { debugger }
        let arg = arguments[0]
        bodavm.memory.font['font-family'] = arg
        bodavm.memory.font['fontFamily'] = arg
        console.log(`CSSStyleDeclaration_fontFamily_set `, `${arg}  `);
    }
    bodavm.envFunc.HTMLElement_style_get = function HTMLElement_style_get() {
        if (bodavm.config.isdebug) { debugger }

        ;
        // debugger
        let style = {}
        // bodavm.toolsFunc.symbolProperty(style)
        // style对象
        Object.setPrototypeOf(style, CSSStyleDeclaration.prototype);
        console.log(`HTMLElement_style_get `, `${style}  `,`待完善`);

        bodavm.toolsFunc.defineProperty(style, "0", { configurable: true, enumerable: true, writable: false, value: "font-family" });
        bodavm.toolsFunc.defineProperty(style, "1", { configurable: true, enumerable: true, writable: false, value: "font-size" });
        bodavm.toolsFunc.defineProperty(style, "accentColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "additiveSymbols", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "alignContent", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "alignItems", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "alignSelf", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "alignmentBaseline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "all", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "animation", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "animationDelay", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "animationDirection", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "animationDuration", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "animationFillMode", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "animationIterationCount", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "animationName", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "animationPlayState", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "animationTimingFunction", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "appRegion", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "appearance", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "ascentOverride", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "aspectRatio", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "backdropFilter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "backfaceVisibility", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "background", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "backgroundAttachment", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "backgroundBlendMode", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "backgroundClip", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "backgroundColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "backgroundImage", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "backgroundOrigin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "backgroundPosition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "backgroundPositionX", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "backgroundPositionY", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "backgroundRepeat", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "backgroundRepeatX", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "backgroundRepeatY", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "backgroundSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "basePalette", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "baselineShift", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "blockSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "border", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderBlock", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderBlockColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderBlockEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderBlockEndColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderBlockEndStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderBlockEndWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderBlockStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderBlockStartColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderBlockStartStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderBlockStartWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderBlockStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderBlockWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderBottom", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderBottomColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderBottomLeftRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderBottomRightRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderBottomStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderBottomWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderCollapse", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderEndEndRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderEndStartRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderImage", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderImageOutset", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderImageRepeat", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderImageSlice", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderImageSource", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderImageWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderInline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderInlineColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderInlineEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderInlineEndColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderInlineEndStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderInlineEndWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderInlineStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderInlineStartColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderInlineStartStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderInlineStartWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderInlineStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderInlineWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderLeft", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderLeftColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderLeftStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderLeftWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderRight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderRightColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderRightStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderRightWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderSpacing", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderStartEndRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderStartStartRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderTop", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderTopColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderTopLeftRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderTopRightRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderTopStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderTopWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "borderWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "bottom", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "boxShadow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "boxSizing", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "breakAfter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "breakBefore", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "breakInside", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "bufferedRendering", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "captionSide", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "caretColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "clear", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "clip", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "clipPath", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "clipRule", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "color", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "colorInterpolation", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "colorInterpolationFilters", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "colorRendering", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "colorScheme", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "columnCount", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "columnFill", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "columnGap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "columnRule", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "columnRuleColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "columnRuleStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "columnRuleWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "columnSpan", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "columnWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "columns", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "contain", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "containIntrinsicBlockSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "containIntrinsicHeight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "containIntrinsicInlineSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "containIntrinsicSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "containIntrinsicWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "content", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "contentVisibility", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "counterIncrement", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "counterReset", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "counterSet", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "cursor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "cx", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "cy", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "d", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "descentOverride", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "direction", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "display", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "dominantBaseline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "emptyCells", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fallback", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fill", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fillOpacity", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fillRule", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "filter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "flex", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "flexBasis", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "flexDirection", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "flexFlow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "flexGrow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "flexShrink", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "flexWrap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "float", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "floodColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "floodOpacity", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "font", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fontDisplay", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fontFamily", { configurable: true, enumerable: true, get: function () { return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "fontFamily_get  ", arguments) }, set: function () { return bodavm.toolsFunc.dispatch(this, CSSStyleDeclaration.prototype, "CSSStyleDeclaration", "fontFamily_set", arguments) } });
        bodavm.toolsFunc.defineProperty(style, "fontFeatureSettings", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fontKerning", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fontOpticalSizing", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fontPalette", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fontSize", { configurable: true, enumerable: true, writable: true, value: "160px" });
        bodavm.toolsFunc.defineProperty(style, "fontStretch", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fontStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fontSynthesis", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fontSynthesisSmallCaps", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fontSynthesisStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fontSynthesisWeight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fontVariant", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fontVariantCaps", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fontVariantEastAsian", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fontVariantLigatures", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fontVariantNumeric", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fontVariationSettings", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "fontWeight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "forcedColorAdjust", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "gap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "grid", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "gridArea", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "gridAutoColumns", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "gridAutoFlow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "gridAutoRows", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "gridColumn", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "gridColumnEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "gridColumnGap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "gridColumnStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "gridGap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "gridRow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "gridRowEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "gridRowGap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "gridRowStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "gridTemplate", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "gridTemplateAreas", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "gridTemplateColumns", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "gridTemplateRows", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "height", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "hyphens", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "imageOrientation", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "imageRendering", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "inherits", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "initialValue", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "inlineSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "inset", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "insetBlock", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "insetBlockEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "insetBlockStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "insetInline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "insetInlineEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "insetInlineStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "isolation", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "justifyContent", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "justifyItems", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "justifySelf", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "left", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "letterSpacing", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "lightingColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "lineBreak", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "lineGapOverride", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "lineHeight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "listStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "listStyleImage", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "listStylePosition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "listStyleType", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "margin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "marginBlock", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "marginBlockEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "marginBlockStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "marginBottom", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "marginInline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "marginInlineEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "marginInlineStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "marginLeft", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "marginRight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "marginTop", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "marker", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "markerEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "markerMid", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "markerStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "mask", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "maskType", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "maxBlockSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "maxHeight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "maxInlineSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "maxWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "maxZoom", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "minBlockSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "minHeight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "minInlineSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "minWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "minZoom", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "mixBlendMode", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "negative", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "objectFit", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "objectPosition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "offset", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "offsetDistance", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "offsetPath", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "offsetRotate", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "opacity", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "order", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "orientation", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "orphans", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "outline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "outlineColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "outlineOffset", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "outlineStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "outlineWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "overflow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "overflowAnchor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "overflowClipMargin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "overflowWrap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "overflowX", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "overflowY", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "overrideColors", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "overscrollBehavior", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "overscrollBehaviorBlock", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "overscrollBehaviorInline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "overscrollBehaviorX", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "overscrollBehaviorY", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "pad", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "padding", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "paddingBlock", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "paddingBlockEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "paddingBlockStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "paddingBottom", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "paddingInline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "paddingInlineEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "paddingInlineStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "paddingLeft", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "paddingRight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "paddingTop", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "page", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "pageBreakAfter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "pageBreakBefore", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "pageBreakInside", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "pageOrientation", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "paintOrder", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "perspective", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "perspectiveOrigin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "placeContent", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "placeItems", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "placeSelf", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "pointerEvents", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "position", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "prefix", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "quotes", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "r", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "range", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "resize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "right", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "rowGap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "rubyPosition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "rx", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "ry", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollBehavior", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollMargin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollMarginBlock", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollMarginBlockEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollMarginBlockStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollMarginBottom", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollMarginInline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollMarginInlineEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollMarginInlineStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollMarginLeft", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollMarginRight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollMarginTop", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollPadding", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingBlock", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingBlockEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingBlockStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingBottom", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingInline", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingInlineEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingInlineStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingLeft", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingRight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollPaddingTop", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollSnapAlign", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollSnapStop", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollSnapType", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "scrollbarGutter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "shapeImageThreshold", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "shapeMargin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "shapeOutside", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "shapeRendering", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "size", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "sizeAdjust", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "speak", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "speakAs", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "src", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "stopColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "stopOpacity", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "stroke", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "strokeDasharray", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "strokeDashoffset", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "strokeLinecap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "strokeLinejoin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "strokeMiterlimit", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "strokeOpacity", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "strokeWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "suffix", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "symbols", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "syntax", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "system", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "tabSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "tableLayout", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textAlign", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textAlignLast", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textAnchor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textCombineUpright", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textDecoration", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textDecorationColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textDecorationLine", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textDecorationSkipInk", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textDecorationStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textDecorationThickness", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textEmphasis", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textEmphasisColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textEmphasisPosition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textEmphasisStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textIndent", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textOrientation", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textOverflow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textRendering", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textShadow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textSizeAdjust", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textTransform", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textUnderlineOffset", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "textUnderlinePosition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "top", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "touchAction", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "transform", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "transformBox", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "transformOrigin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "transformStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "transition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "transitionDelay", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "transitionDuration", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "transitionProperty", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "transitionTimingFunction", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "unicodeBidi", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "unicodeRange", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "userSelect", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "userZoom", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "vectorEffect", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "verticalAlign", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "visibility", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitAlignContent", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitAlignItems", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitAlignSelf", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitAnimation", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitAnimationDelay", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitAnimationDirection", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitAnimationDuration", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitAnimationFillMode", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitAnimationIterationCount", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitAnimationName", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitAnimationPlayState", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitAnimationTimingFunction", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitAppRegion", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitAppearance", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBackfaceVisibility", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBackgroundClip", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBackgroundOrigin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBackgroundSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderAfter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderAfterColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderAfterStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderAfterWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderBefore", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderBeforeColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderBeforeStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderBeforeWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderBottomLeftRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderBottomRightRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderEndColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderEndStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderEndWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderHorizontalSpacing", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderImage", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderStartColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderStartStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderStartWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderTopLeftRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderTopRightRadius", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBorderVerticalSpacing", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBoxAlign", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBoxDecorationBreak", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBoxDirection", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBoxFlex", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBoxOrdinalGroup", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBoxOrient", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBoxPack", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBoxReflect", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBoxShadow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitBoxSizing", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitClipPath", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitColumnBreakAfter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitColumnBreakBefore", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitColumnBreakInside", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitColumnCount", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitColumnGap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitColumnRule", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitColumnRuleColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitColumnRuleStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitColumnRuleWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitColumnSpan", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitColumnWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitColumns", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitFilter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitFlex", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitFlexBasis", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitFlexDirection", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitFlexFlow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitFlexGrow", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitFlexShrink", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitFlexWrap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitFontFeatureSettings", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitFontSmoothing", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitHighlight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitHyphenateCharacter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitJustifyContent", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitLineBreak", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitLineClamp", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitLocale", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitLogicalHeight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitLogicalWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMarginAfter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMarginBefore", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMarginEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMarginStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMask", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaskBoxImage", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaskBoxImageOutset", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaskBoxImageRepeat", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaskBoxImageSlice", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaskBoxImageSource", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaskBoxImageWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaskClip", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaskComposite", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaskImage", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaskOrigin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaskPosition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaskPositionX", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaskPositionY", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaskRepeat", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaskRepeatX", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaskRepeatY", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaskSize", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaxLogicalHeight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMaxLogicalWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMinLogicalHeight", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitMinLogicalWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitOpacity", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitOrder", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitPaddingAfter", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitPaddingBefore", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitPaddingEnd", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitPaddingStart", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitPerspective", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitPerspectiveOrigin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitPerspectiveOriginX", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitPerspectiveOriginY", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitPrintColorAdjust", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitRtlOrdering", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitRubyPosition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitShapeImageThreshold", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitShapeMargin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitShapeOutside", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTapHighlightColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTextCombine", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTextDecorationsInEffect", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTextEmphasis", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTextEmphasisColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTextEmphasisPosition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTextEmphasisStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTextFillColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTextOrientation", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTextSecurity", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTextSizeAdjust", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTextStroke", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTextStrokeColor", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTextStrokeWidth", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTransform", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTransformOrigin", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTransformOriginX", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTransformOriginY", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTransformOriginZ", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTransformStyle", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTransition", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTransitionDelay", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTransitionDuration", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTransitionProperty", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitTransitionTimingFunction", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitUserDrag", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitUserModify", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitUserSelect", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "webkitWritingMode", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "whiteSpace", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "widows", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "width", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "willChange", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "wordBreak", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "wordSpacing", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "wordWrap", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "writingMode", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "x", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "y", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "zIndex", { configurable: true, enumerable: true, writable: true, value: "" });
        bodavm.toolsFunc.defineProperty(style, "zoom", { configurable: true, enumerable: true, writable: true, value: "" });

        return style
    }

    bodavm.envFunc.HTMLElement_style_set = function HTMLElement_style_set() {
        ;
        // this._elements?this._elements[0]["attributes"]["style"]:this.attributes["style"]
        let arg0 = arguments[0]
        // let style = {}
        debugger
        if (bodavm.config.isdebug) { debugger }
        this._attrs['style'] = arg0
        console.log(`HTMLElement_style_set  `, `${style}  `);
        return arg0
    }
    bodavm.envFunc.HTMLElement_onmouseenter_get = function HTMLElement_onmouseenter_get() {
        //鼠标移动事件
        if (bodavm.config.isdebug) { debugger }
        console.log(`HTMLElement_onmouseenter_get `,);
    }

    bodavm.envFunc.HTMLElement_onresize_get = function HTMLElement_onresize_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`HTMLElement_onresize_get `, null);
        return null
    }
    bodavm.envFunc.HTMLElement_onload_set = function HTMLElement_onload_set() {
        if (bodavm.config.isdebug) { debugger }

        let func = arguments[0]
        console.log(`HTMLElement_onload_set `,);
        bodavm.memory.asyncEvent['HTMLElement']['onload'].push(func)

    }
    bodavm.envFunc.HTMLElement_onerror_set = function HTMLElement_onerror_set() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`HTMLElement_onerror_set `,);


    }
    //HTMLCollection
    bodavm.envFunc.HTMLCollection_item = function HTMLCollection_item() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`HTMLCollection_item `,);

    }

    //XMLHttpRequest
    bodavm.envFunc.XMLHttpRequest_onreadystatechange_set = function () {
        let readyState = arguments[0]; 
        if (bodavm.config.isdebug) { debugger };
        this.myonreadystatechange=readyState
        console.log(`XMLHttpRequest_onreadystatechange_set `, `readyState->${readyState}  `);
        return readyState
    }
    bodavm.envFunc.XMLHttpRequest_onreadystatechange_get = function () {
        let readyState = this.myonreadystatechange; 
        if (bodavm.config.isdebug) { debugger };

        console.log(`XMLHttpRequest_onreadystatechange_set `, `readyState->${readyState}  `);
        return readyState
    }
    bodavm.envFunc.XMLHttpRequest_send = function XMLHttpRequest_send() {
        let body = arguments[0]; if (bodavm.config.isdebug) { debugger };

        console.log(`XMLHttpRequest_send `, `body->${body}  `,`待完善`);
    }
    bodavm.envFunc.XMLHttpRequest_open = function XMLHttpRequest_open() {
        let method = arguments[0]
        let url = arguments[1];
        console.log(`XMLHttpRequest_open `, `[${method}] `,`[${url}]  `)
        if (bodavm.config.isdebug) { debugger }
        this.mymethod=method
        this.myurl=url
    }

    //EventTarget
    bodavm.envFunc.EventTarget_addEventListener = function EventTarget_addEventListener() {
        let type = arguments[0];
        let callback = arguments[1];
        let options = arguments[2];
        if (bodavm.config.isdebug) { debugger }
        if (bodavm.memory.asyncEvent.listener === undefined) {
            bodavm.memory.asyncEvent.listener = {};
        }
        if (bodavm.memory.asyncEvent.listener[type] === undefined) {
            bodavm.memory.asyncEvent.listener[type] = [];
        }
        let event = {
            "type": type,
            "self": this,
            "options": options,
            "callback": callback,
            'isTrusted':true,
            'target':this
        }
        console.log(`EventTarget_addEventListener `, `type->${type} `, `callback->${callback} `, `options->${options ? options : []}  `)

        bodavm.memory.asyncEvent.listener[type].push(event);


    }
    bodavm.envFunc.EventTarget_dispatchEvent = function EventTarget_removeEventListener() {
        if (bodavm.config.isdebug) { debugger }
        let event=arguments[0]
        let type=event.type
        switch(event.type){
                case 'click':
                    Object.setPrototypeOf(event,PointerEvent.prototype)
                    break
                case 'load':
                    Object.setPrototypeOf(event,Event.prototype)
                    break
                default:
                    console.log(`EventTarget_dispatchEvent `,`${event.type} 未实现`)

        }
            // console.log(`EventTarget_dispatchEvent  `, `event->${event}`,` type->${type}`);
            event.callback.call(event.self,event)

    }
    bodavm.envFunc.EventTarget_removeEventListener = function EventTarget_removeEventListener() {
        if (bodavm.config.isdebug) { debugger }
        let type=arguments[0]
        let callback=arguments[1]
        for (let i = 0; i < bodavm.memory.asyncEvent.listener[type].length; i++) {
            if (bodavm.memory.asyncEvent.listener[type][i].callback==callback){
                console.log(`EventTarget_removeEventListener  `, `type->${type}`,`callback->${callback}`);
                bodavm.memory.asyncEvent.listener[type][i].splice(i,1)
                break
            }

        }
    }

    //HTMLCanvasElement

    bodavm.envFunc.HTMLCanvasElement_getContext = function HTMLCanvasElement_getContext() {
        let type = arguments[0];
        let context = {};
        if (bodavm.config.isdebug) { debugger }
        switch (type) {
            case "2d":
                // context = context.getContext('2d')
                context._bocanvas=this._bocanvas.getContext('2d')
                console.log(`HTMLCanvasElement_getContext `, `type->${type} `)
                context.__proto__ = CanvasRenderingContext2D.prototype;
                break
            case "webgl":
                // context = context.getContext('2d')
                console.log(`HTMLCanvasElement_getContext `, `type->${type} 未完善`)
                context.__proto__ = WebGLRenderingContext.prototype;
                break
            case 'experimental-webgl':
                console.log(`HTMLCanvasElement_getContext `, `type->${type} `, `context->${context} 未完善 `)
                context.__proto__ = WebGLRenderingContext.prototype;
                // bodavm.toolsFunc.setProtoAttr.call(context, "canvas", this);
                // bodavm.toolsFunc.setProtoAttr.call(this, "type", type);
                break
            default:
                console.log(`HTMLCanvasElement_getContext `, `${type}属性未实现  `)
                break
        }
        return context
    }

    bodavm.envFunc.HTMLCanvasElement_width_set=function HTMLCanvasElement_width_set(){
        let width=arguments[0]
        this._bocanvas.width=width
        console.log(`HTMLCanvasElement_width_set `,`width->${width}`);
        return width
    }
    bodavm.envFunc.HTMLCanvasElement_height_set=function HTMLCanvasElement_height_set(){
        let height=arguments[0]
        this._bocanvas.height=height
        console.log(`HTMLCanvasElement_width_set `,`height->${height}`);
        return height
    }
    bodavm.envFunc.HTMLCanvasElement_toDataURL=function HTMLCanvasElement_toDataURL(){
        if (this._bocanvas){
            let res=this._bocanvas.toDataURL()
        console.log(`HTMLCanvasElement_toDataURL `,`res->${res}`);
        return res
        }else{
            res=bodavm.memory.userInit.canvas_webgl
            console.log(`HTMLCanvasElement_toDataURL `,`res->${res}`);
            return res
        }
        
    }
    //CanvasRenderingContext2D
    bodavm.envFunc.CanvasRenderingContext2D_textBaseline_set=function CanvasRenderingContext2D_textBaseline_set(){
        let textBaseline=arguments[0]
        this._bocanvas.textBaseline=textBaseline
        console.log(`CanvasRenderingContext2D_textBaseline_set `,`textBaseline->${textBaseline}`);
        return textBaseline
    }

    bodavm.envFunc.CanvasRenderingContext2D_font_set=function CanvasRenderingContext2D_font_set(){
        let font=arguments[0]
        this._bocanvas.font=font
        console.log(`CanvasRenderingContext2D_font_set `,`font->${font}`);
        return font
    }
    bodavm.envFunc.CanvasRenderingContext2D_fillStyle_set=function CanvasRenderingContext2D_fillStyle_set(){
        let fillStyle=arguments[0]
        this._bocanvas.fillStyle=fillStyle
        console.log(`CanvasRenderingContext2D_fillStyle_set `,`fillStyle->${fillStyle}`);
        return fillStyle
    }
    bodavm.envFunc.CanvasRenderingContext2D_fillRect=function CanvasRenderingContext2D_fillRect(){
        let arg0=arguments[0]
        let arg1=arguments[1]
        let arg2=arguments[2]
        let arg3=arguments[3]
        this._bocanvas.fillRect(arg0,arg1,arg2,arg3)
        console.log(`CanvasRenderingContext2D_fillRect `,`fillRect->${arg0},${arg1},${arg2},${arg3}`);
    }

    bodavm.envFunc.CanvasRenderingContext2D_fillText=function CanvasRenderingContext2D_fillText(){
        let arg0=arguments[0]
        let arg1=arguments[1]
        let arg2=arguments[2]
        this._bocanvas.fillText(arg0,arg1,arg2)
        console.log(`CanvasRenderingContext2D_fillText `,`fillText->${arg0},${arg1},${arg2}`);

    }



    //location
    bodavm.envFunc.location_hash_get = function location_hash_get() {
        let hash = bodavm.memory.location["hash"]
        if (bodavm.config.isdebug) { debugger }
        console.log(`location_hash_get `, `${hash}  `);

        return hash
    }
    bodavm.envFunc.location_hash_set = function location_hash_set() {
        let hash = arguments[0]
        bodavm.memory.location["hash"] = hash
        if (bodavm.config.isdebug) { debugger }
        console.log(`location_hash_set `, `${hash}  `);
        return hash
    }

    bodavm.envFunc.location_ancestorOrigins_get = function location_ancestorOrigins_get() {
        let ancestorOrigins = bodavm.memory.location['ancestorOrigins']
        console.log(`location_ancestorOrigins_get `, `${ancestorOrigins}  `)
        if (bodavm.config.isdebug) { debugger }
        Object.setPrototypeOf(ancestorOrigins, DOMStringList.prototype)
        return ancestorOrigins
    }

    bodavm.envFunc.location_toString = function location_toString() {
        let href = bodavm.memory.location["href"]
        console.log(`location_toString `, `${href}   `)
        if (bodavm.config.isdebug) { debugger }
        return href + ''
    }
    bodavm.envFunc.location_href_get = function location_href_get() {
        let href = bodavm.memory.location["href"]
        console.log(`location_href_get `, ` ${href}   `)
        if (bodavm.config.isdebug) { debugger }
        return href
    }
    bodavm.envFunc.location_href_set = function location_href_set() {
        let href = arguments[0]
        bodavm.memory.location["href"] = href
        console.log(`location_href_set `, `${href}   `)
        if (bodavm.config.isdebug) { debugger }
        return href
    }
    bodavm.envFunc.location_port_set = function location_port_set() {
        let port = arguments[0]
        bodavm.memory.location["port"] = port
        console.log(`location_port_set `, `${port}   `); if (bodavm.config.isdebug) { debugger };

        return port
    }
    bodavm.envFunc.location_port_get = function location_port_get() {
        let port = bodavm.memory.location["port"]
        console.log(`location_port_get `, `${port}   `)
        if (bodavm.config.isdebug) { debugger }
        return port
    }

    bodavm.envFunc.location_protocol_set = function location_protocol_set() {
        let protocol = arguments[0]
        bodavm.memory.location["protocol"] = protocol
        console.log(`location_protocol_set `, `${protocol}   `); if (bodavm.config.isdebug) { debugger };


        return protocol
    }
    bodavm.envFunc.location_protocol_get = function location_protocol_get() {
        let protocol = bodavm.memory.location["protocol"]
        console.log(`location_protocol_get `, `${protocol}   `); if (bodavm.config.isdebug) { debugger };

        return protocol
    }

    bodavm.envFunc.location_host_set = function location_host_set() {
        let host = arguments[0]
        bodavm.memory.location["host"] = host
        console.log(`location_host_set `, `${host}   `); if (bodavm.config.isdebug) { debugger };

        return host
    }
    bodavm.envFunc.location_host_get = function location_host_get() {
        let host = bodavm.memory.location["host"]
        console.log(`location_host_get `, `${host}   `); if (bodavm.config.isdebug) { debugger };

        return host
    }

    bodavm.envFunc.location_hostname_set = function location_hostname_set() {
        let hostname = arguments[0]
        bodavm.memory.location["hostname"] = hostname
        console.log(`location_hostname_set `, `${hostname}   `); if (bodavm.config.isdebug) { debugger };

        return hostname
    }
    bodavm.envFunc.location_hostname_get = function location_hostname_get() {
        let hostname = bodavm.memory.location["hostname"]
        console.log(`location_hostname_get `, `${hostname}   `); if (bodavm.config.isdebug) { debugger };

        return hostname
    }

    bodavm.envFunc.location_pathname_set = function location_pathname_set() {
        let pathname = arguments[0]
        bodavm.memory.location["pathname"] = pathname
        console.log(`location_pathname_set `, `${pathname}   `); if (bodavm.config.isdebug) { debugger };

        return pathname
    }
    bodavm.envFunc.location_pathname_get = function location_pathname_get() {
        let pathname = bodavm.memory.location["pathname"]
        console.log(`location_pathname_get `, `${pathname}  `); if (bodavm.config.isdebug) { debugger };
        // debugger
        return pathname
    }
    bodavm.envFunc.location_replace = function () {
        if (bodavm.config.isdebug) { debugger }
        let r = arguments[0]
        console.log(`location_replace `, `place->${r}`, `  待完善`);
        return location.href
    }
    bodavm.envFunc.location_search_set = function location_search_set() {
        let search = arguments[0]
        bodavm.memory.location["search"] = search
        console.log(`location_search_set `, `${search}  `); if (bodavm.config.isdebug) { debugger };

        return search
    }
    bodavm.envFunc.location_search_get = function location_search_get() {
        let search = bodavm.memory.location["search"]
        console.log(`location_search_get `, `${search}  `); if (bodavm.config.isdebug) { debugger };

        return search
    }


    bodavm.envFunc.location_origin_get = function location_origin_get() {
        let origin = bodavm.memory.location["origin"]
        console.log(`location_origin_get `, `${origin}  `); if (bodavm.config.isdebug) { debugger };

        return origin
    }

    //history
    bodavm.envFunc.History_length_get = function History_length_get() { debugger }
    bodavm.envFunc.History_state_get = function History_state_get() { debugger }
    bodavm.envFunc.History_scrollRestoration_set = function History_scrollRestoration_set() {
        let scrollRestoration = arguments[0]
        bodavm.memory.history["scrollRestoration"] = scrollRestoration
        console.log(`History_scrollRestoration_set `, `${scrollRestoration}  `)
        if (bodavm.config.isdebug) { debugger }
        return scrollRestoration
    }
    bodavm.envFunc.History_scrollRestoration_get = function History_scrollRestoration_get() {
        let scrollRestoration = bodavm.memory.history["scrollRestoration"]
        console.log(`History_scrollRestoration_get `, ` ${scrollRestoration}   `)
        if (bodavm.config.isdebug) { debugger }
        return scrollRestoration
    }


    //screen
    bodavm.envFunc.Screen_onchange_set = function Screen_onchange_set() {
        let onchange = arguments[0]
        bodavm.memory.screen["onchange"] = onchange
        console.log(`Screen_onchange_set `, `${onchange}  `)
        if (bodavm.config.isdebug) { debugger }
        return onchange
    }
    bodavm.envFunc.Screen_onchange_get = function Screen_onchange_get() {
        let onchange = bodavm.memory.screen["onchange"]
        console.log(`Screen_onchange_get `, `${onchange}  `)
        if (bodavm.config.isdebug) { debugger }
        return onchange
    }

    bodavm.envFunc.Screen_width_get = function Screen_width_get() {
        let width = bodavm.memory.screen["width"]
        console.log(`Screen_width_get `, `${width}  `)
        if (bodavm.config.isdebug) { debugger }
        return width
    }
    bodavm.envFunc.Screen_height_get = function Screen_height_get() {
        let height = bodavm.memory.screen["height"]
        console.log(`Screen_height_get `, `${height}  `)
        if (bodavm.config.isdebug) { debugger }
        return height
    }
    bodavm.envFunc.Screen_pixelDepth_get = function Screen_pixelDepth_get() {
        let pixelDepth = bodavm.memory.screen["pixelDepth"]
        console.log(`Screen_pixelDepth_get `, `${pixelDepth}  `)
        if (bodavm.config.isdebug) { debugger }
        return pixelDepth
    }
    bodavm.envFunc.Screen_colorDepth_get = function Screen_colorDepth_get() {
        let colorDepth = bodavm.memory.screen["colorDepth"]
        console.log(`Screen_colorDepth_get `, `${colorDepth}  `)
        if (bodavm.config.isdebug) { debugger }
        return colorDepth
    }
    bodavm.envFunc.Screen_availWidth_get = function Screen_availWidth_get() {
        let availWidth = bodavm.memory.screen["availWidth"]
        console.log(`Screen_availWidth_get `, `${availWidth}  `)
        if (bodavm.config.isdebug) { debugger }
        return availWidth
    }
    bodavm.envFunc.Screen_availLeft_get = function Screen_availLeft_get() {
        let availLeft = bodavm.memory.screen["availLeft"]
        console.log(`Screen_availLeft_get `, `${availLeft}  `)
        if (bodavm.config.isdebug) { debugger }
        return availLeft
    }
    bodavm.envFunc.Screen_availTop_get = function Screen_availTop_get() {
        let availTop = bodavm.memory.screen["availTop"]
        console.log(`Screen_availTop_get `, `${availTop}  `)
        if (bodavm.config.isdebug) { debugger }
        return availTop
    }
    bodavm.envFunc.Screen_orientation_get = function Screen_orientation_get() {
        let orientation = bodavm.memory.screen["orientation"]
        console.log(`Screen_orientation_get `, `${orientation}  `)
        if (bodavm.config.isdebug) { debugger }
        Object.setPrototypeOf(orientation, ScreenOrientation.prototype)
        return orientation
    }
    bodavm.envFunc.Screen_isExtended_get = function Screen_isExtended_get() {
        let isExtended = bodavm.memory.screen["isExtended"]
        console.log(`Screen_isExtended_get `, `${isExtended}  `)
        if (bodavm.config.isdebug) { debugger }
        return isExtended
    }
    bodavm.envFunc.Screen_availHeight_get = function Screen_availHeight_get() {
        let availHeight = bodavm.memory.screen["availHeight"]
        console.log(`Screen_availHeight_get `, `${availHeight}  `)
        if (bodavm.config.isdebug) { debugger }
        return availHeight
    }

    

    // IDBFactory
    bodavm.envFunc.IDBFactory_open = function IDBFactory_open() {
        let name = arguments[0]
        let version = arguments[1]

        console.log(`IDBFactory_open `, `name->${name} `, `version->${version}  `)
        let DB = {}
        DB = Object.setPrototypeOf(DB, IDBOpenDBRequest.prototype)
        if (bodavm.config.isdebug) { debugger }
        
        return DB
    }
    bodavm.envFunc.IDBRequest_onerror_set = function IDBRequest_onerror_set() {
        let onerror = arguments[0]
        bodavm.memory.IDBRequest['onerror'] = onerror
        console.log(`IDBRequest_onerror_set `, `${onerror} `, `未完善  `)
        if (bodavm.config.isdebug) { debugger }
        return onerror

    }
    bodavm.envFunc.IDBRequest_onerror_get = function IDBRequest_onerror_get() {
        let onerror = bodavm.memory.IDBRequest['onerror'] ? bodavm.memory.IDBRequest['onerror'] : undefined
        console.log(`IDBRequest_onerror_get `, `${onerror} `, `未完善  `)
        if (bodavm.config.isdebug) { debugger }
        return onerror

    }

    bodavm.envFunc.IDBOpenDBRequest_onupgradeneeded_set = function IDBOpenDBRequest_onupgradeneeded_set() {
        let onupgradeneeded = arguments[0]
        bodavm.memory.IDBOpenDBRequest['onupgradeneeded'] = onupgradeneeded
        console.log(`IDBOpenDBRequest_onupgradeneeded_set `, `${onupgradeneeded} `, `未完善  `)
        if (bodavm.config.isdebug) { debugger }
        return onupgradeneeded

    }

    bodavm.envFunc.IDBRequest_onsuccess_set = function IDBRequest_onsuccess_set() {
        let onsuccess = arguments[0]
        bodavm.memory.IDBRequest['onsuccess'] = onsuccess

        console.log(`IDBRequest_onsuccess_set `, `${onsuccess} `, `未完善  `)
        if (bodavm.config.isdebug) { debugger }
        return onsuccess

    }
    bodavm.envFunc.IDBRequest_onsuccess_get = function IDBRequest_onsuccess_get() {

        let onsuccess = bodavm.memory.IDBRequest['onsuccess'] ? bodavm.memory.IDBRequest['onsuccess'] : undefined

        console.log(`IDBRequest_onsuccess_get `, `${onsuccess} `, `未完善  `)
        if (bodavm.config.isdebug) { debugger }
        return onsuccess

    }
    //Event
    bodavm.envFunc.Event_target_get = function Event_target_get() {
        debugger
        if (bodavm.config.isdebug) { debugger }

        let target = this.
        console.log(`Event_target_get `, `target->${target}  `);
        return target
    }
    bodavm.envFunc.Event_srcElement_get = function Event_srcElement_get() {
        debugger
        if (bodavm.config.isdebug) { debugger }
    }
    bodavm.envFunc.Event_timeStamp_get = function Event_timeStamp_get() {
        if (bodavm.config.isdebug) { debugger }
        let timstamp = bodavm.toolsFunc.getProtoAttr.call(this, "timeStamp");
        console.log(`Event_timeStamp_get `, `:timstamp->${timstamp}  `);
        return timstamp
    }

    //MouseEvent
    bodavm.envFunc.MouseEvent_pageY_get = function MouseEvent_pageY_get() {
        if (bodavm.config.isdebug) { debugger }

        let pageY = Math.ceil(Math.random() * 1000)
        console.log(`MouseEvent_pageY_get `, `pageY->${pageY}  `);
        return pageY
    }
    bodavm.envFunc.MouseEvent_clientY_get = function MouseEvent_clientY_get() {
        if (bodavm.config.isdebug) { debugger }
        let clientY = bodavm.toolsFunc.getProtoAttr.call(this, "clientY")
        console.log(`MouseEvent_clientY_get `, `clientY->${clientY}  `);
        return clientY
    }
    bodavm.envFunc.MouseEvent_clientX_get = function MouseEvent_clientX_get() {
        if (bodavm.config.isdebug) { debugger }
        let clientX_ = bodavm.toolsFunc.getProtoAttr.call(this, "clientX")
        console.log(`MouseEvent_clientX_get `, `clientX_->${clientX_}  `);
        return clientX_
    }
    bodavm.envFunc.MouseEvent_screenX_get = function MouseEvent_screenX_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`MouseEvent_screenX_get  `);

    }
    bodavm.envFunc.MouseEvent_screenY_get = function MouseEvent_screenY_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`MouseEvent_screenY_get `, `  `);


    }
    bodavm.envFunc.MouseEvent_button_get = function MouseEvent_button_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`MouseEvent_button_get `, `  `);


    }
    bodavm.envFunc.MouseEvent_offsetX_get = function MouseEvent_button_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`MouseEvent_offsetX_get `,);


    }
    bodavm.envFunc.MouseEvent_offsetY_get = function MouseEvent_button_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`MouseEvent_offsetY_get  `);

    }

    bodavm.envFunc.MouseEvent_x_get = function MouseEvent_button_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`MouseEvent_x_get `,);

    }
    bodavm.envFunc.MouseEvent_y_get = function MouseEvent_button_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`MouseEvent_y_get `,);
    }
    bodavm.envFunc.Event_type_get = function Event_type_get() {
        if (bodavm.config.isdebug) { debugger }
        let type=arguments[0]
        console.log(`Event_type_get `,`type->${type}`);
        // debugger
        return type

    }
    bodavm.envFunc.MouseEvent_pageX_get = function MouseEvent_pageX_get() {
        if (bodavm.config.isdebug) { debugger }
        let pageX = Math.ceil(Math.random() * 1000)
        console.log(`MouseEvent_pageX_get `, `pageX->${pageX}  `);
        return pageX

    }

    //BatteryManager
    bodavm.envFunc.BatteryManager_level_get = function BatteryManager_level_get() {
        console.log(`BatteryManager_level_get `, `1  `);; if (bodavm.config.isdebug) { debugger };

        return 1;
    }
    bodavm.envFunc.BatteryManager_chargingTime_get = function BatteryManager_chargingTime_get() {
        console.log(`BatteryManager_chargingTime_get `, `0  `);; if (bodavm.config.isdebug) { debugger };

        return 0;
    }
    bodavm.envFunc.BatteryManager_charging_get = function BatteryManager_charging_get() {
        // debugger
        console.log(`BatteryManager_chargingTime_get `, `true  `);
        ; if (bodavm.config.isdebug) { debugger };

        return true;
    }

    //HTMLScriptElement
    bodavm.envFunc.HTMLScriptElement_type_get = function HTMLScriptElement_type_get() {
        debugger
    }
    bodavm.envFunc.HTMLScriptElement_type_set = function HTMLScriptElement_type_set() {
        let type = arguments[0]
        this._elements['0'].attr['type'] = type
        console.log(`HTMLScriptElement_type_set `, `type->${type}  `);
        if (bodavm.config.isdebug) { debugger }
        return type
    }
    bodavm.envFunc.HTMLScriptElement_src_set = function HTMLScriptElement_src_set() {
        let src = arguments[0];
        let tags = bodavm.memory.tag
        if (bodavm.config.isdebug) { debugger }

        // for (let i = 0; i < tags.length; i++) {
        //     if (tags[i] == this) {
        //         tags[i]["attr"]["src"] = src
        //     }
        // }
        // if (bodavm.config.isdebug) { debugger }
        console.log(`HTMLScriptElement_src_set `, `${src}  `);

        return src

    }

    //WebGLRenderingContext
    
    bodavm.envFunc.WebGLRenderingContext_drawingBufferHeight_get = function () {
        let drawingBufferHeight = 150; if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_drawingBufferHeight_get  `, `默认值drawingBufferHeight:${drawingBufferHeight}  `);
        return drawingBufferHeight
    }
    bodavm.envFunc.WebGLRenderingContext_drawingBufferWidth_get = function () {
        let drawingBufferWidth = 300; if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_drawingBufferWidth_get  `, `默认值drawingBufferWidth:${drawingBufferWidth}  `);
        return drawingBufferWidth
    }
    bodavm.envFunc.WebGLRenderingContext_enableVertexAttribArray = function WebGLRenderingContext_enableVertexAttribArray() {
        let index = arguments[0]; if (bodavm.config.isdebug) { debugger };
        if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_enableVertexAttribArray `, `index:${index}  `);

    }
    bodavm.envFunc.WebGLRenderingContext_getUniformLocation = function WebGLRenderingContext_getUniformLocation() {
        let program = arguments[0]
        let name = arguments[1];
        if (bodavm.config.isdebug) { debugger };
        debugger
        console.log(`WebGLRenderingContext_getUniformLocation `, `program:${program} name:${name}`, `未完善`);
        return null
    }
    bodavm.envFunc.WebGLRenderingContext_getAttribLocation = function WebGLRenderingContext_getAttribLocation() {
        let program = arguments[0]
        let name = arguments[1]
        console.log(`WebGLRenderingContext_getAttribLocation `, `program:${program} name:${name}  `, `未完善`);

        if (bodavm.config.isdebug) { debugger };
        return null
    }
    bodavm.envFunc.WebGLRenderingContext_getShaderPrecisionFormat = function WebGLRenderingContext_getShaderPrecisionFormat() {
        let shaderType = arguments[0]
        let precisionType = arguments[1]
        console.log(`WebGLRenderingContext_getShaderPrecisionFormat `, `shaderType:${shaderType} precisionType:${precisionType}  `);
        if (shaderType == 35633 && precisionType == 36338) {
            let shade = {}
            Object.setPrototypeOf(shade, WebGLShaderPrecisionFormat.prototype)
            // bodavm.toolsFunc.symbolProperty(shade)
            return shade
        }
    }
    bodavm.envFunc.WebGLRenderingContext_uniform2f = function WebGLRenderingContext_uniform2f() {
        let location = arguments[0]
        let v0 = arguments[1]
        let v1 = arguments[2]
        if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_uniform2f `, `location:${location} v0:${v0}  v1:${v1}  `);
    }
    bodavm.envFunc.WebGLRenderingContext_vertexAttribPointer = function WebGLRenderingContext_vertexAttribPointer() {
        let index = arguments[0]
        let size = arguments[1]
        let type = arguments[2]
        let normalized = arguments[3]
        let stride = arguments[4]
        let offset = arguments[5]
        if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_vertexAttribPointer `, `index:${index}  size:${size} type:${type}  normalized:${normalized}  stride:${stride}  offset${offset}   `);
    }

    bodavm.envFunc.WebGLRenderingContext_drawArrays = function WebGLRenderingContext_drawArrays() {
        let mode = arguments[0]
        let first = arguments[1]
        let count = arguments[2]
        if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_drawArrays `, `mode:${mode}  first:${first}  count:${count}   `);

    }

    bodavm.envFunc.WebGLRenderingContext_useProgram = function WebGLRenderingContext_useProgram() {
        let program = arguments[0]
        console.log(`WebGLRenderingContext_useProgram `, `program:${program}  `);
        if (bodavm.config.isdebug) { debugger };

    }
    bodavm.envFunc.WebGLRenderingContext_linkProgram = function WebGLRenderingContext_linkProgram() {
        let program = arguments[0]
        console.log(`WebGLRenderingContext_linkProgram `, `program:${program}  `);
        if (bodavm.config.isdebug) { debugger };


    }
    bodavm.envFunc.WebGLRenderingContext_attachShader = function WebGLRenderingContext_attachShader() {
        let program = arguments[0]
        let shader = arguments[1]
        if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_attachShader `, `program:${program}  shader:${shader}   `);
    }
    bodavm.envFunc.WebGLRenderingContext_createShader = function WebGLRenderingContext_createShader() {
        let type = arguments[0]
        console.log(`WebGLRenderingContext_createShader `, `${type}  `);
        if (bodavm.config.isdebug) { debugger };

        if (type == 35633) {
            let shader = {}
            Object.setPrototypeOf(shader, WebGLShader.prototype)
            return shader
        }
        else if (type == 35632) {
            let shader = {}
            Object.setPrototypeOf(shader, WebGLShader.prototype)
            return shader
        }
    }

    bodavm.envFunc.WebGLRenderingContext_shaderSource = function WebGLRenderingContext_shaderSource() {
        let shader = arguments[0]
        let source = arguments[1]
        if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_shaderSource `, `shader:${shader}  source:${source}  `);
    }

    bodavm.envFunc.WebGLRenderingContext_compileShader = function WebGLRenderingContext_shaderSource() {
        let compileShader = arguments[0]
        if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_compileShader `, `${compileShader}  `);
    }
    bodavm.envFunc.WebGLRenderingContext_canvas_get = function WebGLRenderingContext_canvas_get() {
        let canvas = {}
        if (bodavm.config.isdebug) { debugger };

        console.log(`WebGLRenderingContext_canvas_get `, `${canvas}  `);
        canvas.__proto__ = HTMLCanvasElement.prototype
        // bodavm.toolsFunc.symbolProperty(canvas)
        return canvas

    }
    bodavm.envFunc.WebGLRenderingContext_createProgram = function WebGLRenderingContext_createProgram() {
        let program = {};
        if (bodavm.config.isdebug) { debugger };

        program = Object.setPrototypeOf(program, WebGLProgram.prototype);
        console.log(`WebGLRenderingContext_createProgram `, `${program}  `);
        return program;
    }

    bodavm.envFunc.WebGLRenderingContext_createBuffer = function WebGLRenderingContext_createBuffer() {
        if (bodavm.config.isdebug) { debugger }
        let buffer = {};
        buffer = Object.setPrototypeOf(buffer, WebGLBuffer.prototype);
        console.log(`WebGLRenderingContext_createBuffer `, `${buffer}  `);

        return buffer;

    }
    bodavm.envFunc.WebGLRenderingContext_bindBuffer = function WebGLRenderingContext_bindBuffer() {
        if (bodavm.config.isdebug) { debugger }
        let r1 = arguments[0]
        let r2 = arguments[1]
        console.log(`WebGLRenderingContext_bindBuffer `, `r1:${r1}  r2:${r2}  `);

    }
    bodavm.envFunc.WebGLRenderingContext_bufferData = function WebGLRenderingContext_bufferData() {
        if (bodavm.config.isdebug) { debugger }
        let r1 = arguments[0]
        let r2 = arguments[1]
        let r3 = arguments[2]
        let r4 = arguments[3]
        let r5 = arguments[4]
        console.log(`WebGLRenderingContext_bufferData `, `r1:${r1},r2:${r2},r3:${r3},r4:${r4},r5:${r5}  `);

    }
    bodavm.envFunc.WebGLRenderingContext_getExtension = function WebGLRenderingContext_getExtension() {
        if (bodavm.config.isdebug) { debugger }
        let getExtension = arguments[0]
        console.log(`WebGLRenderingContext_getExtension `, `${getExtension}  `);
        let info = {}
        switch (getExtension) {
            case "WEBGL_debug_renderer_info":

                WebGLDebugRendererInfo = function WebGLDebugRendererInfo() { }
                bodavm.toolsFunc.safeProto(WebGLDebugRendererInfo, "WebGLDebugRendererInfo");
                info = Object.setPrototypeOf(info, WebGLDebugRendererInfo.prototype)
                bodavm.toolsFunc.defineProperty(WebGLDebugRendererInfo.prototype, "UNMASKED_VENDOR_WEBGL", { configurable: false, enumerable: true, writable: false, value: 37445 });
                bodavm.toolsFunc.defineProperty(WebGLDebugRendererInfo.prototype, "UNMASKED_RENDERER_WEBGL", { configurable: false, enumerable: true, writable: false, value: 37446 });
                delete WebGLDebugRendererInfo;
                break;
            case "ANGLE_instanced_arrays":

                ANGLEInstancedArrays = function ANGLEInstancedArrays() { }
                bodavm.toolsFunc.safeProto(ANGLEInstancedArrays, "ANGLEInstancedArrays");
                info = Object.setPrototypeOf(info, ANGLEInstancedArrays.prototype)
                bodavm.toolsFunc.defineProperty(ANGLEInstancedArrays.prototype, "VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE", { configurable: false, enumerable: true, writable: false, value: 35070 });
                bodavm.toolsFunc.defineProperty(ANGLEInstancedArrays.prototype, "drawArraysInstancedANGLE", { configurable: true, enumerable: true, writable: true, value: function drawArraysInstancedANGLE() { return bodavm.toolsFunc.dispatch(this, ANGLEInstancedArrays.prototype, "ANGLEInstancedArrays", "drawArraysInstancedANGLE", arguments) } });
                bodavm.toolsFunc.defineProperty(ANGLEInstancedArrays.prototype, "drawElementsInstancedANGLE", { configurable: true, enumerable: true, writable: true, value: function drawElementsInstancedANGLE() { return bodavm.toolsFunc.dispatch(this, ANGLEInstancedArrays.prototype, "ANGLEInstancedArrays", "drawElementsInstancedANGLE", arguments) } });
                bodavm.toolsFunc.defineProperty(ANGLEInstancedArrays.prototype, "vertexAttribDivisorANGLE", { configurable: true, enumerable: true, writable: true, value: function vertexAttribDivisorANGLE() { return bodavm.toolsFunc.dispatch(this, ANGLEInstancedArrays.prototype, "ANGLEInstancedArrays", "vertexAttribDivisorANGLE", arguments) } });
                delete ANGLEInstancedArrays;
                break;
            case "EXT_blend_minmax":
                EXTBlendMinMax = function EXTBlendMinMax() { }
                bodavm.toolsFunc.safeProto(EXTBlendMinMax, "EXTBlendMinMax");
                info = Object.setPrototypeOf(info, EXTBlendMinMax.prototype)
                bodavm.toolsFunc.defineProperty(EXTBlendMinMax.prototype, "MIN_EXT", { configurable: false, enumerable: true, writable: false, value: 32775 });
                bodavm.toolsFunc.defineProperty(EXTBlendMinMax.prototype, "MAX_EXT", { configurable: false, enumerable: true, writable: false, value: 32776 });
                delete EXTBlendMinMax
                break;
            case "EXT_color_buffer_half_float":
                EXTColorBufferHalfFloat = function EXTColorBufferHalfFloat() { }
                bodavm.toolsFunc.safeProto(EXTColorBufferHalfFloat, "EXTColorBufferHalfFloat");
                info = Object.setPrototypeOf(info, EXTColorBufferHalfFloat.prototype)
                bodavm.toolsFunc.defineProperty(EXTColorBufferHalfFloat.prototype, "RGBA16F_EXT", { configurable: false, enumerable: true, writable: false, value: 34842 });
                bodavm.toolsFunc.defineProperty(EXTColorBufferHalfFloat.prototype, "RGB16F_EXT", { configurable: false, enumerable: true, writable: false, value: 34843 });
                bodavm.toolsFunc.defineProperty(EXTColorBufferHalfFloat.prototype, "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT", { configurable: false, enumerable: true, writable: false, value: 33297 });
                bodavm.toolsFunc.defineProperty(EXTColorBufferHalfFloat.prototype, "UNSIGNED_NORMALIZED_EXT", { configurable: false, enumerable: true, writable: false, value: 35863 });
                delete EXTColorBufferHalfFloat
                break;
            case "EXT_disjoint_timer_query":
                EXTDisjointTimerQuery = function EXTDisjointTimerQuery() { }
                bodavm.toolsFunc.safeProto(EXTDisjointTimerQuery, "EXTDisjointTimerQuery");
                info = Object.setPrototypeOf(info, EXTDisjointTimerQuery.prototype)
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "QUERY_COUNTER_BITS_EXT", { configurable: false, enumerable: true, writable: false, value: 34916 });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "CURRENT_QUERY_EXT", { configurable: false, enumerable: true, writable: false, value: 34917 });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "QUERY_RESULT_EXT", { configurable: false, enumerable: true, writable: false, value: 34918 });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "QUERY_RESULT_AVAILABLE_EXT", { configurable: false, enumerable: true, writable: false, value: 34919 });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "TIME_ELAPSED_EXT", { configurable: false, enumerable: true, writable: false, value: 35007 });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "TIMESTAMP_EXT", { configurable: false, enumerable: true, writable: false, value: 36392 });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "GPU_DISJOINT_EXT", { configurable: false, enumerable: true, writable: false, value: 36795 });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "beginQueryEXT", { configurable: true, enumerable: true, writable: true, value: function beginQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "beginQueryEXT", arguments) } });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "createQueryEXT", { configurable: true, enumerable: true, writable: true, value: function createQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "createQueryEXT", arguments) } });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "deleteQueryEXT", { configurable: true, enumerable: true, writable: true, value: function deleteQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "deleteQueryEXT", arguments) } });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "endQueryEXT", { configurable: true, enumerable: true, writable: true, value: function endQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "endQueryEXT", arguments) } });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "getQueryEXT", { configurable: true, enumerable: true, writable: true, value: function getQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "getQueryEXT", arguments) } });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "getQueryObjectEXT", { configurable: true, enumerable: true, writable: true, value: function getQueryObjectEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "getQueryObjectEXT", arguments) } });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "isQueryEXT", { configurable: true, enumerable: true, writable: true, value: function isQueryEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "isQueryEXT", arguments) } });
                bodavm.toolsFunc.defineProperty(EXTDisjointTimerQuery.prototype, "queryCounterEXT", { configurable: true, enumerable: true, writable: true, value: function queryCounterEXT() { return bodavm.toolsFunc.dispatch(this, EXTDisjointTimerQuery.prototype, "EXTDisjointTimerQuery", "queryCounterEXT", arguments) } });
                delete EXTDisjointTimerQuery

                break;
            case "EXT_float_blend":
                EXTFloatBlend = function EXTFloatBlend() { }
                bodavm.toolsFunc.safeProto(EXTFloatBlend, "EXTFloatBlend");
                info = Object.setPrototypeOf(info, EXTFloatBlend.prototype)
                delete EXTFloatBlend
                break;
            case "EXT_shader_texture_lod":
                EXTShaderTextureLOD = function EXTShaderTextureLOD() { }
                bodavm.toolsFunc.safeProto(EXTShaderTextureLOD, "EXTShaderTextureLOD");
                info = Object.setPrototypeOf(info, EXTShaderTextureLOD.prototype)
                delete EXTShaderTextureLOD
                break;
            case "EXT_frag_depth":
                EXTFragDepth = function EXTFragDepth() { }

                bodavm.toolsFunc.safeProto(EXTFragDepth, "EXTFragDepth");
                info = Object.setPrototypeOf(info, EXTFragDepth.prototype)
                delete EXTFragDepth
                break;
            case "EXT_texture_compression_bptc":
                EXTTextureCompressionBPTC = function EXTTextureCompressionBPTC() { }
                bodavm.toolsFunc.safeProto(EXTTextureCompressionBPTC, "EXTTextureCompressionBPTC");
                info = Object.setPrototypeOf(info, EXTTextureCompressionBPTC.prototype)
                bodavm.toolsFunc.defineProperty(EXTTextureCompressionBPTC.prototype, "COMPRESSED_RGBA_BPTC_UNORM_EXT", { configurable: false, enumerable: true, writable: false, value: 36492 });
                bodavm.toolsFunc.defineProperty(EXTTextureCompressionBPTC.prototype, "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT", { configurable: false, enumerable: true, writable: false, value: 36493 });
                bodavm.toolsFunc.defineProperty(EXTTextureCompressionBPTC.prototype, "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT", { configurable: false, enumerable: true, writable: false, value: 36494 });
                bodavm.toolsFunc.defineProperty(EXTTextureCompressionBPTC.prototype, "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT", { configurable: false, enumerable: true, writable: false, value: 36495 });

                delete EXTTextureCompressionBPTC
                break;
            case "EXT_texture_compression_rgtc":
                EXTTextureCompressionRGTC = function EXTTextureCompressionRGTC() { }
                bodavm.toolsFunc.safeProto(EXTTextureCompressionRGTC, "EXTTextureCompressionRGTC");
                info = Object.setPrototypeOf(info, EXTTextureCompressionRGTC.prototype)
                bodavm.toolsFunc.defineProperty(EXTTextureCompressionRGTC.prototype, "COMPRESSED_RED_RGTC1_EXT", { configurable: false, enumerable: true, writable: false, value: 36283 });
                bodavm.toolsFunc.defineProperty(EXTTextureCompressionRGTC.prototype, "COMPRESSED_SIGNED_RED_RGTC1_EXT", { configurable: false, enumerable: true, writable: false, value: 36284 });
                bodavm.toolsFunc.defineProperty(EXTTextureCompressionRGTC.prototype, "COMPRESSED_RED_GREEN_RGTC2_EXT", { configurable: false, enumerable: true, writable: false, value: 36285 });
                bodavm.toolsFunc.defineProperty(EXTTextureCompressionRGTC.prototype, "COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT", { configurable: false, enumerable: true, writable: false, value: 36286 });
                delete EXTTextureCompressionRGTC;

                break;
            case "EXT_texture_filter_anisotropic":
                EXTTextureFilterAnisotropic = function EXTTextureFilterAnisotropic() { }
                bodavm.toolsFunc.safeProto(EXTTextureFilterAnisotropic, "EXTTextureFilterAnisotropic");
                info = Object.setPrototypeOf(info, EXTTextureFilterAnisotropic.prototype)
                bodavm.toolsFunc.defineProperty(EXTTextureFilterAnisotropic.prototype, "TEXTURE_MAX_ANISOTROPY_EXT", { configurable: false, enumerable: true, writable: false, value: 34046 });
                bodavm.toolsFunc.defineProperty(EXTTextureFilterAnisotropic.prototype, "MAX_TEXTURE_MAX_ANISOTROPY_EXT", { configurable: false, enumerable: true, writable: false, value: 34047 });
                delete EXTTextureFilterAnisotropic;
                break;
            case "WEBKIT_EXT_texture_filter_anisotropic":
                EXTTextureFilterAnisotropic = function EXTTextureFilterAnisotropic() { }
                bodavm.toolsFunc.safeProto(EXTTextureFilterAnisotropic, "EXTTextureFilterAnisotropic");
                info = Object.setPrototypeOf(info, EXTTextureFilterAnisotropic.prototype)
                bodavm.toolsFunc.defineProperty(EXTTextureFilterAnisotropic.prototype, "TEXTURE_MAX_ANISOTROPY_EXT", { configurable: false, enumerable: true, writable: false, value: 34046 });
                bodavm.toolsFunc.defineProperty(EXTTextureFilterAnisotropic.prototype, "MAX_TEXTURE_MAX_ANISOTROPY_EXT", { configurable: false, enumerable: true, writable: false, value: 34047 });
                delete EXTTextureFilterAnisotropic;
                break;
            case "EXT_sRGB":
                EXTsRGB = function EXTsRGB() { }
                bodavm.toolsFunc.safeProto(EXTsRGB, "EXTsRGB");
                info = Object.setPrototypeOf(info, EXTsRGB.prototype)
                bodavm.toolsFunc.defineProperty(EXTsRGB.prototype, "SRGB_EXT", { configurable: false, enumerable: true, writable: false, value: 35904 });
                bodavm.toolsFunc.defineProperty(EXTsRGB.prototype, "SRGB_ALPHA_EXT", { configurable: false, enumerable: true, writable: false, value: 35906 });
                bodavm.toolsFunc.defineProperty(EXTsRGB.prototype, "SRGB8_ALPHA8_EXT", { configurable: false, enumerable: true, writable: false, value: 35907 });
                bodavm.toolsFunc.defineProperty(EXTsRGB.prototype, "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT", { configurable: false, enumerable: true, writable: false, value: 33296 });
                delete EXTsRGB;
                break;
            case "KHR_parallel_shader_compile":
                KHRParallelShaderCompile = function KHRParallelShaderCompile() { }
                bodavm.toolsFunc.safeProto(KHRParallelShaderCompile, "KHRParallelShaderCompile");
                info = Object.setPrototypeOf(info, KHRParallelShaderCompile.prototype)
                bodavm.toolsFunc.defineProperty(KHRParallelShaderCompile.prototype, "COMPLETION_STATUS_KHR", { configurable: false, enumerable: true, writable: false, value: 37297 });
                delete KHRParallelShaderCompile;
                break;
            case "OES_element_index_uint":
                OESElementIndexUint = function OESElementIndexUint() { }
                bodavm.toolsFunc.safeProto(OESElementIndexUint, "OESElementIndexUint");
                info = Object.setPrototypeOf(info, OESElementIndexUint.prototype)
                delete OESElementIndexUint;
                break;
            case "OES_fbo_render_mipmap":
                OESFboRenderMipmap = function OESFboRenderMipmap() { }
                bodavm.toolsFunc.safeProto(OESFboRenderMipmap, "OESFboRenderMipmap");
                info = Object.setPrototypeOf(info, OESFboRenderMipmap.prototype)
                delete OESFboRenderMipmap;
                break;
            case "OES_standard_derivatives":
                OESStandardDerivatives = function OESStandardDerivatives() { }
                bodavm.toolsFunc.safeProto(OESStandardDerivatives, "OESStandardDerivatives");
                info = Object.setPrototypeOf(info, OESStandardDerivatives.prototype)
                bodavm.toolsFunc.defineProperty(OESStandardDerivatives.prototype, "FRAGMENT_SHADER_DERIVATIVE_HINT_OES", { configurable: false, enumerable: true, writable: false, value: 35723 });
                delete OESStandardDerivatives;
                break;
            case "OES_texture_float":
                OESTextureFloat = function OESTextureFloat() { }
                bodavm.toolsFunc.safeProto(OESTextureFloat, "OESTextureFloat");
                info = Object.setPrototypeOf(info, OESTextureFloat.prototype)
                delete OESTextureFloat;
                break;
            case "OES_texture_float_linear":
                OESTextureFloatLinear = function OESTextureFloatLinear() { }
                bodavm.toolsFunc.safeProto(OESTextureFloatLinear, "OESTextureFloatLinear");
                info = Object.setPrototypeOf(info, OESTextureFloatLinear.prototype)
                delete OESTextureFloatLinear;
                break;
            case "OES_texture_half_float":
                OESTextureHalfFloat = function OESTextureHalfFloat() { }
                bodavm.toolsFunc.safeProto(OESTextureHalfFloat, "OESTextureHalfFloat");
                info = Object.setPrototypeOf(info, OESTextureHalfFloat.prototype)
                bodavm.toolsFunc.defineProperty(OESTextureHalfFloat.prototype, "HALF_FLOAT_OES", { configurable: false, enumerable: true, writable: false, value: 36193 });
                delete OESTextureHalfFloat;
                break;
            case "OES_texture_half_float_linear":
                OESTextureHalfFloatLinear = function OESTextureHalfFloatLinear() { }
                bodavm.toolsFunc.safeProto(OESTextureHalfFloatLinear, "OESTextureHalfFloatLinear");
                info = Object.setPrototypeOf(info, OESTextureHalfFloatLinear.prototype)
                delete OESTextureHalfFloatLinear;
                break;
            case "OES_vertex_array_object":
                OESVertexArrayObject = function OESVertexArrayObject() { }
                bodavm.toolsFunc.safeProto(OESVertexArrayObject, "OESVertexArrayObject");
                info = Object.setPrototypeOf(info, OESVertexArrayObject.prototype)
                bodavm.toolsFunc.defineProperty(OESVertexArrayObject.prototype, "VERTEX_ARRAY_BINDING_OES", { configurable: false, enumerable: true, writable: false, value: 34229 });
                bodavm.toolsFunc.defineProperty(OESVertexArrayObject.prototype, "bindVertexArrayOES", { configurable: true, enumerable: true, writable: true, value: function bindVertexArrayOES() { return bodavm.toolsFunc.dispatch(this, OESVertexArrayObject.prototype, "OESVertexArrayObject", "bindVertexArrayOES", arguments) } });
                bodavm.toolsFunc.defineProperty(OESVertexArrayObject.prototype, "createVertexArrayOES", { configurable: true, enumerable: true, writable: true, value: function createVertexArrayOES() { return bodavm.toolsFunc.dispatch(this, OESVertexArrayObject.prototype, "OESVertexArrayObject", "createVertexArrayOES", arguments) } });
                bodavm.toolsFunc.defineProperty(OESVertexArrayObject.prototype, "deleteVertexArrayOES", { configurable: true, enumerable: true, writable: true, value: function deleteVertexArrayOES() { return bodavm.toolsFunc.dispatch(this, OESVertexArrayObject.prototype, "OESVertexArrayObject", "deleteVertexArrayOES", arguments) } });
                bodavm.toolsFunc.defineProperty(OESVertexArrayObject.prototype, "isVertexArrayOES", { configurable: true, enumerable: true, writable: true, value: function isVertexArrayOES() { return bodavm.toolsFunc.dispatch(this, OESVertexArrayObject.prototype, "OESVertexArrayObject", "isVertexArrayOES", arguments) } });
                delete OESVertexArrayObject;
                break;
            case "WEBGL_color_buffer_float":
                WebGLColorBufferFloat = function WebGLColorBufferFloat() { }
                bodavm.toolsFunc.safeProto(WebGLColorBufferFloat, "WebGLColorBufferFloat");
                info = Object.setPrototypeOf(info, WebGLColorBufferFloat.prototype)
                bodavm.toolsFunc.defineProperty(WebGLColorBufferFloat.prototype, "RGBA32F_EXT", { configurable: false, enumerable: true, writable: false, value: 34836 });
                bodavm.toolsFunc.defineProperty(WebGLColorBufferFloat.prototype, "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT", { configurable: false, enumerable: true, writable: false, value: 33297 });
                bodavm.toolsFunc.defineProperty(WebGLColorBufferFloat.prototype, "UNSIGNED_NORMALIZED_EXT", { configurable: false, enumerable: true, writable: false, value: 35863 });
                delete WebGLColorBufferFloat;
                break;
            case "WEBGL_compressed_texture_s3tc":
                WebGLCompressedTextureS3TC = function WebGLCompressedTextureS3TC() { }
                bodavm.toolsFunc.safeProto(WebGLCompressedTextureS3TC, "WebGLCompressedTextureS3TC");
                info = Object.setPrototypeOf(info, WebGLCompressedTextureS3TC.prototype)
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGB_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 33776 });
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 33777 });
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT3_EXT", { configurable: false, enumerable: true, writable: false, value: 33778 });
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT5_EXT", { configurable: false, enumerable: true, writable: false, value: 33779 });
                delete WebGLCompressedTextureS3TC;
                break;
            case "WEBKIT_WEBGL_compressed_texture_s3tc":
                WebGLCompressedTextureS3TC = function WebGLCompressedTextureS3TC() { }
                bodavm.toolsFunc.safeProto(WebGLCompressedTextureS3TC, "WebGLCompressedTextureS3TC");
                info = Object.setPrototypeOf(info, WebGLCompressedTextureS3TC.prototype)
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGB_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 33776 });
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 33777 });
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT3_EXT", { configurable: false, enumerable: true, writable: false, value: 33778 });
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TC.prototype, "COMPRESSED_RGBA_S3TC_DXT5_EXT", { configurable: false, enumerable: true, writable: false, value: 33779 });
                delete WebGLCompressedTextureS3TC;
                break;
            case "WEBGL_compressed_texture_s3tc_srgb":
                WebGLCompressedTextureS3TCsRGB = function WebGLCompressedTextureS3TCsRGB() { }
                bodavm.toolsFunc.safeProto(WebGLCompressedTextureS3TCsRGB, "WebGLCompressedTextureS3TCsRGB");
                info = Object.setPrototypeOf(info, WebGLCompressedTextureS3TCsRGB.prototype)
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TCsRGB.prototype, "COMPRESSED_SRGB_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 35916 });
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TCsRGB.prototype, "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", { configurable: false, enumerable: true, writable: false, value: 35917 });
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TCsRGB.prototype, "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", { configurable: false, enumerable: true, writable: false, value: 35918 });
                bodavm.toolsFunc.defineProperty(WebGLCompressedTextureS3TCsRGB.prototype, "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", { configurable: false, enumerable: true, writable: false, value: 35919 });
                delete WebGLCompressedTextureS3TCsRGB;
                break;
            case "WEBGL_debug_shaders":
                WebGLDebugShaders = function WebGLDebugShaders() { }
                bodavm.toolsFunc.safeProto(WebGLDebugShaders, "WebGLDebugShaders");
                info = Object.setPrototypeOf(info, WebGLDebugShaders.prototype)
                bodavm.toolsFunc.defineProperty(WebGLDebugShaders.prototype, "getTranslatedShaderSource", { configurable: true, enumerable: true, writable: true, value: function getTranslatedShaderSource() { return bodavm.toolsFunc.dispatch(this, WebGLDebugShaders.prototype, "WebGLDebugShaders", "getTranslatedShaderSource", arguments) } });
                delete WebGLDebugShaders;
                break;
            case "WEBGL_depth_texture":
                WebGLDepthTexture = function WebGLDepthTexture() { }
                bodavm.toolsFunc.safeProto(WebGLDepthTexture, "WebGLDepthTexture");
                info = Object.setPrototypeOf(info, WebGLDepthTexture.prototype)
                bodavm.toolsFunc.defineProperty(WebGLDepthTexture.prototype, "UNSIGNED_INT_24_8_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34042 });
                delete WebGLDepthTexture;
                break;
            case "WEBKIT_WEBGL_depth_texture":
                WebGLDepthTexture = function WebGLDepthTexture() { }
                bodavm.toolsFunc.safeProto(WebGLDepthTexture, "WebGLDepthTexture");
                info = Object.setPrototypeOf(info, WebGLDepthTexture.prototype)
                bodavm.toolsFunc.defineProperty(WebGLDepthTexture.prototype, "UNSIGNED_INT_24_8_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34042 });
                delete WebGLDepthTexture;
                break;
            case "WEBGL_draw_buffers":
                WebGLDrawBuffers = function WebGLDrawBuffers() { }
                bodavm.toolsFunc.safeProto(WebGLDrawBuffers, "WebGLDrawBuffers");
                info = Object.setPrototypeOf(info, WebGLDrawBuffers.prototype)
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT0_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36064 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT1_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36065 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT2_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36066 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT3_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36067 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT4_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36068 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT5_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36069 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT6_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36070 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT7_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36071 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT8_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36072 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT9_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36073 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT10_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36074 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT11_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36075 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT12_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36076 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT13_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36077 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT14_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36078 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "COLOR_ATTACHMENT15_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36079 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER0_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34853 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER1_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34854 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER2_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34855 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER3_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34856 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER4_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34857 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER5_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34858 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER6_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34859 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER7_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34860 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER8_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34861 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER9_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34862 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER10_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34863 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER11_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34864 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER12_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34865 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER13_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34866 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER14_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34867 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "DRAW_BUFFER15_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34868 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "MAX_COLOR_ATTACHMENTS_WEBGL", { configurable: false, enumerable: true, writable: false, value: 36063 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "MAX_DRAW_BUFFERS_WEBGL", { configurable: false, enumerable: true, writable: false, value: 34852 });
                bodavm.toolsFunc.defineProperty(WebGLDrawBuffers.prototype, "drawBuffersWEBGL", { configurable: true, enumerable: true, writable: true, value: function drawBuffersWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLDrawBuffers.prototype, "WebGLDrawBuffers", "drawBuffersWEBGL", arguments) } });
                delete WebGLDrawBuffers;
                break;
            case "WEBGL_lose_context":
                WebGLLoseContext = function WebGLLoseContext() { }
                bodavm.toolsFunc.safeProto(WebGLLoseContext, "WebGLLoseContext");
                info = Object.setPrototypeOf(info, WebGLLoseContext.prototype)
                bodavm.toolsFunc.defineProperty(WebGLLoseContext.prototype, "loseContext", { configurable: true, enumerable: true, writable: true, value: function loseContext() { return bodavm.toolsFunc.dispatch(this, WebGLLoseContext.prototype, "WebGLLoseContext", "loseContext", arguments) } });
                bodavm.toolsFunc.defineProperty(WebGLLoseContext.prototype, "restoreContext", { configurable: true, enumerable: true, writable: true, value: function restoreContext() { return bodavm.toolsFunc.dispatch(this, WebGLLoseContext.prototype, "WebGLLoseContext", "restoreContext", arguments) } });
                delete WebGLLoseContext;
                break;
            case "WEBKIT_WEBGL_lose_context":
                WebGLLoseContext = function WebGLLoseContext() { }
                bodavm.toolsFunc.safeProto(WebGLLoseContext, "WebGLLoseContext");
                info = Object.setPrototypeOf(info, WebGLLoseContext.prototype)
                bodavm.toolsFunc.defineProperty(WebGLLoseContext.prototype, "loseContext", { configurable: true, enumerable: true, writable: true, value: function loseContext() { return bodavm.toolsFunc.dispatch(this, WebGLLoseContext.prototype, "WebGLLoseContext", "loseContext", arguments) } });
                bodavm.toolsFunc.defineProperty(WebGLLoseContext.prototype, "restoreContext", { configurable: true, enumerable: true, writable: true, value: function restoreContext() { return bodavm.toolsFunc.dispatch(this, WebGLLoseContext.prototype, "WebGLLoseContext", "restoreContext", arguments) } });
                delete WebGLLoseContext; break;
            case "WEBGL_multi_draw":
                WebGLMultiDraw = function WebGLMultiDraw() { }
                bodavm.toolsFunc.safeProto(WebGLMultiDraw, "WebGLMultiDraw");
                info = Object.setPrototypeOf(info, WebGLMultiDraw.prototype)
                bodavm.toolsFunc.defineProperty(WebGLMultiDraw.prototype, "multiDrawArraysInstancedWEBGL", { configurable: true, enumerable: true, writable: true, value: function multiDrawArraysInstancedWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLMultiDraw.prototype, "WebGLMultiDraw", "multiDrawArraysInstancedWEBGL", arguments) } });
                bodavm.toolsFunc.defineProperty(WebGLMultiDraw.prototype, "multiDrawArraysWEBGL", { configurable: true, enumerable: true, writable: true, value: function multiDrawArraysWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLMultiDraw.prototype, "WebGLMultiDraw", "multiDrawArraysWEBGL", arguments) } });
                bodavm.toolsFunc.defineProperty(WebGLMultiDraw.prototype, "multiDrawElementsInstancedWEBGL", { configurable: true, enumerable: true, writable: true, value: function multiDrawElementsInstancedWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLMultiDraw.prototype, "WebGLMultiDraw", "multiDrawElementsInstancedWEBGL", arguments) } });
                bodavm.toolsFunc.defineProperty(WebGLMultiDraw.prototype, "multiDrawElementsWEBGL", { configurable: true, enumerable: true, writable: true, value: function multiDrawElementsWEBGL() { return bodavm.toolsFunc.dispatch(this, WebGLMultiDraw.prototype, "WebGLMultiDraw", "multiDrawElementsWEBGL", arguments) } });
                delete WebGLMultiDraw;
                break;
            default:
                console.log(`WebGLRenderingContext_getExtension `, `${getExtension}属性未实现  `);
                break;
        }

        return info
    }
    bodavm.envFunc.WebGLRenderingContext_getSupportedExtensions = function WebGLRenderingContext_getSupportedExtensions() {
        if (bodavm.config.isdebug) { debugger }
        let SupportedExtensions = [
            "ANGLE_instanced_arrays",
            "EXT_blend_minmax",
            "EXT_color_buffer_half_float",
            "EXT_disjoint_timer_query",
            "EXT_float_blend",
            "EXT_frag_depth",
            "EXT_shader_texture_lod",
            "EXT_texture_compression_bptc",
            "EXT_texture_compression_rgtc",
            "EXT_texture_filter_anisotropic",
            "WEBKIT_EXT_texture_filter_anisotropic",
            "EXT_sRGB",
            "KHR_parallel_shader_compile",
            "OES_element_index_uint",
            "OES_fbo_render_mipmap",
            "OES_standard_derivatives",
            "OES_texture_float",
            "OES_texture_float_linear",
            "OES_texture_half_float",
            "OES_texture_half_float_linear",
            "OES_vertex_array_object",
            "WEBGL_color_buffer_float",
            "WEBGL_compressed_texture_s3tc",
            "WEBKIT_WEBGL_compressed_texture_s3tc",
            "WEBGL_compressed_texture_s3tc_srgb",
            "WEBGL_debug_renderer_info",
            "WEBGL_debug_shaders",
            "WEBGL_depth_texture",
            "WEBKIT_WEBGL_depth_texture",
            "WEBGL_draw_buffers",
            "WEBGL_lose_context",
            "WEBKIT_WEBGL_lose_context",
            "WEBGL_multi_draw"
        ]
        console.log(`WebGLRenderingContext_getSupportedExtensions=== `, `${SupportedExtensions}  `);
        return SupportedExtensions
    }

    bodavm.envFunc.WebGLRenderingContext_getParameter = function WebGLRenderingContext_getParameter() {
        let pname = arguments[0]
        if (bodavm.config.isdebug) { debugger }
        ;
        if (pname + '' == "37446") {
            console.log(`WebGLRenderingContext_getParameter `, `pname->${pname} `, `'ANGLE (Intel, Intel(R) UHD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)'  `);

            return 'ANGLE (Intel, Intel(R) UHD Graphics 620 Direct3D11 vs_5_0 ps_5_0, D3D11)'
        }
        if (pname + '' == "37445") {
            console.log(`WebGLRenderingContext_getParameter `, `pname->${pname} `, ` 'Google Inc. (Intel)'  `);
            return 'Google Inc. (Intel)'
        }
        console.log(`WebGLRenderingContext_getParameter `, `${pname}未实现  `)
    }

    //HTMLStyleElement
    bodavm.envFunc.HTMLStyleElement_sheet_get = function HTMLStyleElement_sheet_get() {
        if (bodavm.config.isdebug) { debugger }
        console.log(`HTMLStyleElement_sheet_get `, `${null}  `);
        return null
    }

    //HTMLIFrameElement
    bodavm.envFunc.HTMLIFrameElement_contentWindow_get = function HTMLIFrameElement_contentWindow_get() {
        console.log(`HTMLIFrameElement_contentWindow_get `, `这种补法存在问题,待完善`);
        // debugger;
        if (bodavm.config.isdebug) { debugger }
    
        contentwindow={
            
        }
        contentwindow.top=contentwindow
        contentwindow.parent=contentwindow
        contentwindow.window=contentwindow
        contentwindow.self=contentwindow

        contentwindow.__proto__=Window.prototype
        // contentwindow['top']='123'
        contentwindow=bodavm.toolsFunc.proxy(contentwindow,'contentwindow')
        //这种补法存在问题,待完善
        return contentwindow
    }

    //HTMLAnchorElement
    bodavm.envFunc.HTMLAnchorElement_toString = function HTMLAnchorElement_toString() {
        debugger

        console.log(`HTMLAnchorElement_toString`, '未完善');
    }
    bodavm.envFunc.HTMLAnchorElement_hash_get = function HTMLAnchorElement_hash_get() {
        let HTMLAnchorElement_hash = bodavm.toolsFunc.getProtoAttr.call(this, "hash");
        console.log(`HTMLAnchorElement_hash_get `, `${HTMLAnchorElement_hash}  `);
        if (bodavm.config.isdebug) { debugger };

        return HTMLAnchorElement_hash
    }
    bodavm.envFunc.HTMLAnchorElement_origin_get = function HTMLAnchorElement_origin_get() {
        let HTMLAnchorElement_origin = bodavm.toolsFunc.getProtoAttr.call(this, "origin");
        console.log(`HTMLAnchorElement_hash_get `, `${HTMLAnchorElement_origin}  `);
        if (bodavm.config.isdebug) { debugger };

        return HTMLAnchorElement_origin
    }
    bodavm.envFunc.HTMLAnchorElement_search_get = function HTMLAnchorElement_search_get() {
        let HTMLAnchorElement_search = bodavm.toolsFunc.getProtoAttr.call(this, "search");
        console.log(`HTMLAnchorElement_search_get `, `${HTMLAnchorElement_search}  `);
        if (bodavm.config.isdebug) { debugger };

        return HTMLAnchorElement_search
    }
    bodavm.envFunc.HTMLAnchorElement_hostname_get = function HTMLAnchorElement_hostname_get() {
        if (bodavm.config.isdebug) { debugger };

        let HTMLAnchorElement_hostname = bodavm.toolsFunc.getProtoAttr.call(this, "hostname");
        console.log(`HTMLAnchorElement_hostname `, `${HTMLAnchorElement_hostname}  `);
        return HTMLAnchorElement_hostname
    }
    bodavm.envFunc.HTMLAnchorElement_protocol_get = function HTMLAnchorElement_protocol_get() {
        let HTMLAnchorElement_protocol = bodavm.toolsFunc.getProtoAttr.call(this, "protocol");
        console.log(`HTMLAnchorElement_protocol `, `${HTMLAnchorElement_protocol}  `);
        if (bodavm.config.isdebug) { debugger };
        return HTMLAnchorElement_protocol
    }
    bodavm.envFunc.HTMLAnchorElement_href_get = function HTMLAnchorElement_href_get() {
        let HTMLAnchorElement_href = bodavm.toolsFunc.getProtoAttr.call(this, "href");
        if (bodavm.config.isdebug) { debugger };

        console.log(`HTMLAnchorElement_href `, ` ${HTMLAnchorElement_href}  `);
        return HTMLAnchorElement_href
    }
    bodavm.envFunc.HTMLAnchorElement_href_set = function HTMLAnchorElement_href_set() {
        let url = arguments[0];
        console.log(`HTMLAnchorElement_href_set `, `${url}  `);
        if (url.indexOf("http") === -1) {
            url = location.protocol + "//" + location.hostname + url;
        }

        let jsonUrl = bodavm.toolsFunc.parseUrl(url);
        bodavm.toolsFunc.setProtoAttr.call(this, "origin", jsonUrl["origin"]);
        bodavm.toolsFunc.setProtoAttr.call(this, "protocol", jsonUrl["protocol"]);
        bodavm.toolsFunc.setProtoAttr.call(this, "host", jsonUrl["host"]);
        bodavm.toolsFunc.setProtoAttr.call(this, "hostname", jsonUrl["hostname"]);
        bodavm.toolsFunc.setProtoAttr.call(this, "port", jsonUrl["port"]);
        bodavm.toolsFunc.setProtoAttr.call(this, "pathname", jsonUrl["pathname"]);
        bodavm.toolsFunc.setProtoAttr.call(this, "search", jsonUrl["search"]);
        bodavm.toolsFunc.setProtoAttr.call(this, "hash", jsonUrl["hash"]);
        bodavm.toolsFunc.setProtoAttr.call(this, "href", jsonUrl["href"]);
    }

    //CSS
    bodavm.envFunc.CSS_supports = function CSS_supports() {
        let name = arguments[0]
        let value = arguments[1]
        if (bodavm.config.isdebug) { debugger };

        if (name == "overscroll-behavior" && value == "auto") {
            console.log(`CSS_supports `, `name->${name} `, `value->${value} `, "true");
            return true
        }
        if (name == "-webkit-overscroll-behavior" && value == "auto") {
            console.log(`CSS_supports `, `name->${name} `, `value->${value} `, "`false");
            return false
        }
        if (name == "-o-overscroll-behavior" && value == "auto") {
            console.log(`CSS_supports `, `name->${name} `, `value->${value} `, "false");
            return false
        }
        if (name == "-moz-overscroll-behavior" && value == "auto") {
            console.log(`CSS_supports `, `name->${name} `, `value->${value} `, "false");
            return false
        }
        if (name == "-ms-overscroll-behavior" && value == "auto") {
            console.log(`CSS_supports `, `name->${name} `, `value->${value} `, "false");
            return false
        }

    }
    //CSSStyleDeclaration_getPropertyValue
    bodavm.envFunc.CSSStyleDeclaration_getPropertyValue = function CSSStyleDeclaration_getPropertyValue() {
        let getPropertyValue = arguments[0]

        console.log(`CSSStyleDeclaration_getPropertyValue `, getPropertyValue, `未完善   `);

    }
    //RTCPeerConnection_onicecandidate_set
    bodavm.envFunc.RTCPeerConnection_onicecandidate_set = function RTCPeerConnection_onicecandidate_set() {
        let onicecandidate = arguments[0]
        console.log(`RTCPeerConnection_onicecandidate_set    `, `onicecandidate->${onicecandidate}`, `未完善   `);

        if (bodavm.config.isdebug) { debugger };
        bodavm.toolsFunc.symbolProperty(onicecandidate)
        return onicecandidate
    }

    bodavm.envFunc.RTCPeerConnection_createOffer = function RTCPeerConnection_createOffer() {
        let successCallback = arguments[0]
        let failureCallback = arguments[1]
        let options = arguments[3]
        if (bodavm.config.isdebug) { debugger };
        bodavm.toolsFunc.symbolProperty(successCallback)
        bodavm.toolsFunc.symbolProperty(failureCallback)
        console.log(`RTCPeerConnection_createOffer `, `successCallback->${successCallback} `, `failureCallback->${failureCallback} `, `options->${options},未完善  `);
        return new Promise((successCallback, failureCallback) => {

        }).then(successCallback => {
            successCallback()
        },
            failureCallback => {
                failureCallback()
            }
        )
    }

    bodavm.envFunc.RTCPeerConnection_createDataChannel = function RTCPeerConnection_createDataChannel() {
        let label = arguments[0]
        let options = arguments[1]
        console.log(`RTCPeerConnection_createDataChannel `, `label->${label} `, `options->${options} `, `未完善  `);
        if (bodavm.config.isdebug) { debugger };

    }

    bodavm.envFunc.MutationObserver_observe = function () {
        if (bodavm.config.isdebug) { debugger };
        let target = arguments[0]
        let options = arguments[1]
        console.log(`MutationObserver_observe `, `target->${target} `, `options->${options} `, `未完善  `);
    }
    //HTMLImageElement

    bodavm.envFunc.HTMLImageElement_src_set = function HTMLImageElement_src_set() {
        if (bodavm.config.isdebug) { debugger };

        let img = arguments[0]
        // this._elements['0'].attr['img'] = img
        console.log(`HTMLImageElement_src_set `, `img->${img}  `);
        return img
    }

    bodavm.envFunc.HTMLImageElement_height_get = function HTMLImageElement_height_get() {
        let height = 0
        if (bodavm.config.isdebug) { debugger };

        console.log(`HTMLImageElement_height_get `, `height->${height}  `);
        return height
    }
    bodavm.envFunc.HTMLImageElement_width_get = function HTMLImageElement_height_get() {
        let width = 0
        if (bodavm.config.isdebug) { debugger };

        console.log(`HTMLImageElement_width_get `, `width->${width}  `);
        return width
    }
    //MediaQueryList
    bodavm.envFunc.MediaQueryList_matches_get = function MediaQueryList_matches_get() {
        console.log(`MediaQueryList_matches_get `, 'false');
        if (bodavm.config.isdebug) { debugger };

        return false
    }


    //WebGLShaderPrecisionFormat
    bodavm.envFunc.WebGLShaderPrecisionFormat_rangeMin_get = function WebGLShaderPrecisionFormat_rangeMin_get() {
        console.log(`WebGLShaderPrecisionFormat_rangeMin_get `, 127);
        if (bodavm.config.isdebug) { debugger };

        return 127
    }

    bodavm.envFunc.WebGLShaderPrecisionFormat_rangeMax_get = function WebGLShaderPrecisionFormat_rangeMax_get() {
        console.log(`WebGLShaderPrecisionFormat_rangeMax_get `, 127);
        if (bodavm.config.isdebug) { debugger };

        return 127
    }
    bodavm.envFunc.WebGLShaderPrecisionFormat_precision_get = function WebGLShaderPrecisionFormat_precision_get() {
        console.log(`WebGLShaderPrecisionFormat_precision_get `, 23);
        if (bodavm.config.isdebug) { debugger };

        return 23
    }

    //BaseAudioContext
    bodavm.envFunc.BaseAudioContext_createOscillator = function BaseAudioContext_createOscillator() {
        console.log(`BaseAudioContext_createOscillator`, undefined);
        return undefined
    }



    //HTMLInputElement
    bodavm.envFunc.HTMLInputElement_type_get=function HTMLInputElement_type_get(){
        // debugger
        let tpye=this._boarg.attribs['type']
        console.log(`HTMLInputElement_type_get `, `type->${tpye}`);
        return tpye
    }
    bodavm.envFunc.HTMLInputElement_name_get = function HTMLInputElement_name_get() {
        // debugger
        let name_ = this._boarg.attribs['name']
        if (bodavm.config.isdebug) { debugger };
        console.log(`HTMLInputElement_name_get `, ` name->${name_}`);
        return name_
    }
    bodavm.envFunc.HTMLInputElement_value_get = function HTMLInputElement_value_get() {
        // debugger

        let value_ = this._boarg.attribs['value']
        if (bodavm.config.isdebug) { debugger };
        console.log(`HTMLInputElement_value_get `, ` value_->${value_}`);
        return value_
    }
}();
// 
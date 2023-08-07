// DOM（文档对象模型）：

// document：表示整个文档，包含网页的内容和结构。
// getElementById：通过元素的id属性获取元素节点。
// getElementsByTagName：通过元素的标签名获取元素节点集合。
// createElement：创建一个新的元素节点。
// appendChild：将一个元素节点添加到指定节点的子节点列表末尾。
// removeChild：从指定节点的子节点列表中移除一个子节点。
// innerHTML：获取或设置元素的HTML内容。
;;
(function () {
    bodavm.envFunc.CSSStyleDeclaration_getPropertyValue=function (){
        let arg=arguments[0]
        if (arg=='color'){
            let thisNode=bodavm.toolsFunc.getProtoAttr.call(this,this)
            // debugger
            let color=boda$(thisNode).html()
            let colorgb=''
            switch (color){
                case 'green':
                    colorgb= 'rgb(0, 128, 0)'
                    break
                case 'red':
                    colorgb='rgb(255, 0, 0)'
                    break
                case 'black':
                    colorgb='rgb(0, 0, 0)'
                    break
                case 'secondp':
                    colorgb="rgb(0, 0, 255)"
                    break
                case 'bar':
                    colorgb="rgb(255, 0, 0)"
                    break
                default :
                    console.log_copy(`CSSStyleDeclaration_getPropertyValue -> `,color,`未实现!!!!!!!`)
                
            }
            console.log_copy(`CSSStyleDeclaration_getPropertyValue arg ->`,arg ,` -> rgb ->`,colorgb)

            return colorgb
        }
        console.log_copy(`CSSStyleDeclaration_getPropertyValue arg ->`,arg ,`未实现!!!!!!!!!!!`)


    }
    bodavm.envFunc.Element_remove=function (){
        let thisNode=bodavm.toolsFunc.getProtoAttr.call(this,this)
        if (!thisNode){
           return bodavm.toolsFunc.throwError('typeError','错误thisNode不存在!!!!!!!!!11')
        }
        boda$(thisNode).remove()
        console.log_copy(this, ` -> Element_remove`)

    }
    bodavm.envFunc.CSSRuleList_length_get=function (){
        // debugger
        let len=Object.keys(this,'bobo').length
        console.log_copy(this, ` -> CSSRuleList_length_get length-> `, len)

        return len
    }
    bodavm.envFunc.CSSStyleSheet_cssRules_get = function () {
        let islive = bodavm.toolsFunc.getProtoAttr.call(this, 'cssRules')
        if (islive) {
            console.log_copy(this, ` -> CSSStyleSheet_cssRules_get cache已存在返回-> `, islive)
            return islive

        }
        let rule = new CSSRuleList('bobo')
        // let thisNode=bodavm.toolsFunc.getProtoAttr.call(this,this)
        // debugger
        console.log_copy(this, ` -> CSSStyleSheet_cssRules_get 默认返回一个 需要根据实际进行调整!!!!!-> `,)
        Object.defineProperty_bo(rule, '0', {
            value: new CSSStyleRule('bobo'),
            writable: false,
            enumerable: true,
            configurable: true
        })
        rule=bodavm.toolsFunc.proxy2(rule,'CSSRuleList::proxy2')
        bodavm.toolsFunc.setProtoAttr.call(this,'cssRules',rule)
        return rule
    }

    bodavm.envFunc.HTMLStyleElement_sheet_get = function () {
        let islive = bodavm.toolsFunc.getProtoAttr.call(this, 'sheet')
        if (islive) {
            console.log_copy(this, ` -> HTMLStyleElement_sheet_get cache已存在返回-> `, islive)

            return islive

        }
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        // debugger
        let isinDom = boda$('style').get().indexOf(thisNode)
        if (isinDom == -1) {
            console.log_copy(this, ` -> HTMLStyleElement_sheet_get  不存在html中返回null-> `, null)

            return null
        }

        let sheet = new CSSStyleSheet('bobo')
        bodavm.toolsFunc.setProtoAttr.call(this, 'sheet', sheet)
        // bodavm.toolsFunc.setProtoAttr.call(sheet, sheet, thisNode)
        console.log_copy(this, ` -> HTMLStyleElement_sheet_get sheet-> `, sheet)

        return sheet
    }
    bodavm.envFunc.Node_replaceChild = function () {
        let newChild = arguments[0]
        let oldChild = arguments[1]
        let parentNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        // debugger
        console.log_copy(this, ` -> Node_replaceChild newChild-> `, newChild, ` -> oldChild -> `, oldChild)
        let newChildNode = bodavm.toolsFunc.getProtoAttr.call(newChild, newChild)
        let oldChildNode = bodavm.toolsFunc.getProtoAttr.call(oldChild, oldChild)
        // debugger
        boda$(oldChildNode).replaceWith(boda$(newChildNode));

        return oldChild
    }
    bodavm.envFunc.Node_cloneNode = function () {
        let deep = arguments[0]
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        let cloneNode = null
        let resNode = null
        if (deep) {
            cloneNode = boda$(thisNode).get(0)
            resNode = bodavm.toolsFunc.setProto(cloneNode.name)
            // bodavm.toolsFunc.setProto.call
            bodavm.toolsFunc.setProtoAttr.call(resNode, resNode, cloneNode)
        }
        else {
            let attrs = boda$(thisNode).attr()
            cloneNode = document.createElement(thisNode.name)
            if (attrs) {
                for (let i in attrs) {
                    cloneNode[i] = attrs[i]
                }
            }
            resNode = cloneNode
        }


        console.log_copy(this, ` -> Node_cloneNode  deep -> ${arguments[0]} -> res  ->`, resNode)
        // debugger
        return resNode

    }
    bodavm.envFunc.CharacterData_data_set = function () {
        let arg = arguments[0]
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        // debugger
        boda$(thisNode).text(arguments[0])
        console.log_copy(this, ` -> CharacterData_data_set arg  ->  arg`)
        return arg
    }
    bodavm.envFunc.DOMRectList_length_get = function () {
        console.log_copy(this, ` -> DOMRectList_length_get res  ->  默认返回1`)

        return 1
    }
    bodavm.envFunc.Element_getClientRects = function () {
        let getClientRects = new DOMRectList('bobo')
        console.log_copy(this, ` -> Element_getClientRects getClientRects  -> `, getClientRects)
        Object.defineProperty_bo(getClientRects, '0', {
            value: new DOMRect('bobo'),
            writable: false,
            enumerable: true,
            configurable: true
        })
        return getClientRects
    }
    bodavm.envFunc.HTMLElement_innerText_set = function () {
        // debugger
        let arg = arguments[0]
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        boda$(thisNode).empty()
        boda$(thisNode).text(arg)
        console.log_copy(this, `-> HTMLElement_innerText_set innerText  -> `, arg)

        return arg
    }

    bodavm.envFunc.HTMLElement_style_set = function () {
        // debugger
        let style = arguments[0]
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        boda$(thisNode).attr('style', style)
        console.log_copy(this, `- > HTMLElement_style_set style  -> `, style)
        return style
    }
    bodavm.envFunc.HTMLElement_dataset_get = function () {
        let islive = bodavm.toolsFunc.getProtoAttr.call(this, 'dataset')
        if (islive) {
            console.log_copy(this, `-> HTMLElement_dataset_get 已存在返回`, islive)
            return islive
        }
        let dataset = new DOMStringMap('bobo')
        bodavm.toolsFunc.setProtoAttr.call(this, 'dataset', dataset)
        console.log_copy(`HTMLElement_dataset_get -> xr -> ${dataset}`)
        return dataset
    }
    bodavm.envFunc.Document_pointerLockElement_get = function () {
        let pointerLockElement = bodavm.toolsFunc.getProtoAttr.call(this, 'pointerLockElement') ? bodavm.toolsFunc.getProtoAttr.call(this, 'pointerLockElement') : null
        console.log_copy(`Document_pointerLockElement_get res->`, pointerLockElement)
        return pointerLockElement
    }
    bodavm.envFunc.Document_pictureInPictureElement_get = function () {
        let pictureInPictureElement = bodavm.toolsFunc.getProtoAttr.call(this, 'pictureInPictureElement') ? bodavm.toolsFunc.getProtoAttr.call(this, 'pictureInPictureElement') : null
        console.log_copy(`Document_pictureInPictureElement_get res->`, pictureInPictureElement)
        return pictureInPictureElement
    }
    bodavm.envFunc.Document_xmlVersion_get = function () {
        let xmlVersion = bodavm.toolsFunc.getProtoAttr.call(this, 'xmlVersion') ? bodavm.toolsFunc.getProtoAttr.call(this, 'xmlVersion') : null
        console.log_copy(`Document_xmlVersion_get res->`, xmlVersion)
        return xmlVersion
    }

    bodavm.envFunc.Document_xmlEncoding_get = function () {
        let xmlEncoding = bodavm.toolsFunc.getProtoAttr.call(this, 'xmlEncoding') ? bodavm.toolsFunc.getProtoAttr.call(this, 'xmlEncoding') : null
        console.log_copy(`Document_xmlEncoding_get res->`, xmlEncoding)
        return xmlEncoding
    }
    bodavm.envFunc.Document_ontransitionrun_get = function () {
        let ontransitionrun = bodavm.toolsFunc.getProtoAttr.call(this, 'ontransitionrun') ? bodavm.toolsFunc.getProtoAttr.call(this, 'ontransitionrun') : null
        console.log_copy(`Document_ontransitionrun_get res->`, ontransitionrun)
        return ontransitionrun
    }
    bodavm.envFunc.Document_ontransitionend_get = function () {
        let ontransitionend = bodavm.toolsFunc.getProtoAttr.call(this, 'ontransitionend') ? bodavm.toolsFunc.getProtoAttr.call(this, 'ontransitionend') : null
        console.log_copy(`Document_ontransitionend_get res->`, ontransitionend)
        return ontransitionend
    }
    bodavm.envFunc.Document_ontransitioncancel_get = function () {
        let ontransitioncancel = bodavm.toolsFunc.getProtoAttr.call(this, 'ontransitioncancel') ? bodavm.toolsFunc.getProtoAttr.call(this, 'ontransitioncancel') : null
        console.log_copy(`Document_ontransitioncancel_get res->`, ontransitioncancel)
        return ontransitioncancel
    }
    bodavm.envFunc.Document_pictureInPictureEnabled_get = function () {
        console.log_copy(`Document_pictureInPictureEnabled_get res-> 默认返回true`, true)
        return true
    }
    bodavm.envFunc.Document_onresume_get = function () {
        let onresume = bodavm.toolsFunc.getProtoAttr.call(this, 'onresume') ? bodavm.toolsFunc.getProtoAttr.call(this, 'onresume') : null
        console.log_copy(`Document_onresume_get res->`, onresume)
        return onresume
    }
    bodavm.envFunc.Document_onpointerlockerror_get = function () {
        let onpointerlockerror = bodavm.toolsFunc.getProtoAttr.call(this, 'onpointerlockerror') ? bodavm.toolsFunc.getProtoAttr.call(this, 'onpointerlockerror') : null
        console.log_copy(`Document_onpointerlockerror_get res->`, onpointerlockerror)
        return onpointerlockerror
    }
    bodavm.envFunc.Document_featurePolicy_get = function () {
        let isfeaturePolicy = bodavm.toolsFunc.getProtoAttr.call(this, 'featurePolicy')
        if (isfeaturePolicy) {
            console.log_copy(`Document_featurePolicy_get cache已存在返回->`, isfeaturePolicy)
            return isfeaturePolicy
        }
        let feature = new FeaturePolicy('boob')
        console.log_copy(`Document_featurePolicy_get res->`, feature)
        bodavm.toolsFunc.setProtoAttr.call(this, 'featurePolicy', feature)
        return feature
    }
    bodavm.envFunc.Document_onmousemove_get = function () {
        let onmousemove = bodavm.toolsFunc.getProtoAttr.call(this, 'onmousemove') ? bodavm.toolsFunc.getProtoAttr.call(this, 'onmousemove') : null
        console.log_copy(`Document_onmousemove_get res->`, onmousemove)
        return onmousemove

    }
    bodavm.envFunc.HTMLElement_onmouseenter_get = function () {
        let onmouseenter = bodavm.toolsFunc.getProtoAttr.call(this, 'onmouseenter')
        console.log_copy(`HTMLElement_onmouseenter_get -> res -> `, onmouseenter)
        return onmouseenter
    }
    bodavm.envFunc.Document_scrollingElement_get = function () {
        let ele = document.documentElement
        console.log_copy(`Document_scrollingElement_get ->默认返回html`, ele)
        return ele
    }
    bodavm.envFunc.HTMLElement_onresize_get = function () {

        // let onresize=bodavm.memory.asyncEvent['HTMLElement']['onresize']
        // if (!onresize.length) {
        //     console.log_copy(`HTMLElement_onresize_get res->`,null)
        //     return null
        // }
        let onresize = bodavm.toolsFunc.getProtoAttr.call(this, 'onresize') ? bodavm.toolsFunc.getProtoAttr.call(this, 'onresize') : null
        console.log_copy(`HTMLElement_onresize_get res->`, onresize)

        return onresize
    }
    bodavm.envFunc.Document_onselectionchange_get = function () {
        let res = bodavm.toolsFunc.getProtoAttr.call(this, 'onselectionchange') ? bodavm.toolsFunc.getProtoAttr.call(this, 'onselectionchange') : null

        console.log_copy(`Document_onselectionchange_get -> res->`, res)
        return res
    }
    bodavm.envFunc.URL_createObjectURL = function () {
        debugger
        let arg = arguments[0]
        let newUrl = `blob:${location.origin}/661f4a1e-88f8-44e8-9d85-635b0b7bbb3e`
        console.log_copy(`URL_createObjectURL arg->`, arg, `-> res->`, newUrl)

        return newUrl

    }

    bodavm.envFunc.HTMLScriptElement_async_set = function () {
        let async = arguments[0]
        bodavm.toolsFunc.setProtoAttr.call(this, 'async', async)
        console.log_copy(this, `-> HTMLScriptElement_async_set arg->`, async)

        return async
    }
    bodavm.envFunc.Document_querySelectorAll = function () {
        let arg = arguments[0]
        // boda$(thisNode)
        // let resNodeList=boda$('html').find(arg).splice(0,1)
        let resNodeList = boda$('html').find(arg)

        // debugger
        let nodeList = []
        if (resNodeList) {
            for (const resNode of resNodeList) {
                let newNode=null
                let isliveNode=bodavm.toolsFunc.getProtoAttr.call(resNode,resNode)
                if (isliveNode){
                    newNode=isliveNode
                }else{
                    newNode = bodavm.toolsFunc.setProto(resNode.name)
                    bodavm.toolsFunc.setProtoAttr.call(resNode, resNode, newNode)
                }
                // let newNode = bodavm.toolsFunc.setProto(resNode.name)
                bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, resNode)
                nodeList.push(newNode)
            }


        }
        nodeList.__proto__ = NodeList.prototype
        console.log_copy(this, `-> Element_querySelector res->`, nodeList)
        return nodeList
    }
    bodavm.envFunc.Element_innerHTML_get = function () {
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        // debugger
        let html = boda$(thisNode).html()
        console.log_copy(this, ` -> Element_innerHTML_get -> res ->`, html)

        return html
    }
    bodavm.envFunc.Element_firstElementChild_get = function () {
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        // debugger
        let target = boda$(thisNode).children().first()[0]
        let newNode=null
        let isliveNode=bodavm.toolsFunc.getProtoAttr.call(target,target)
        if (isliveNode){
            newNode=isliveNode
        }else{
            newNode = bodavm.toolsFunc.setProto(target.name)
            bodavm.toolsFunc.setProtoAttr.call(target, target, newNode)
        }
        // let newNode = bodavm.toolsFunc.setProto(target.name)
        bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, target)
        console.log_copy(this, ` -> Element_firstElementChild_get -> res ->`, newNode)

        return newNode
    }
    bodavm.envFunc.Document_createTextNode = function () {
        // debugger
        let arg = arguments[0]
        let textnode = boda$(boda$.parseHTML(arg)).get(0)
        // debugger

        let newNode = bodavm.toolsFunc.setProto('TEXT')
        bodavm.toolsFunc.setProtoAttr.call(textnode,textnode,newNode)
        bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, textnode)
        console.log_copy(this, ` -> Document_createTextNode -> res ->`, newNode)

        return newNode
    }


    bodavm.envFunc.Document_dir_set = function () {
        let arg = arguments[0]
        bodavm.memory.document['dir'] = arg
        console.log_copy(`Document_dir_set -> arg`, arg)
        return arg
    }
    bodavm.envFunc.Document_title_set = function () {
        let arg = arguments[0]
        if (arg == "ltr" || arg == 'rtl') {
            bodavm.memory.document['title'] = arg
        }
        console.log_copy(`Document_title_set -> arg`, arg)
        return arg
    }


    bodavm.envFunc.Element_clientHeight_get = function () {
        let thisNode = bodavm.toolsFunc.getProtoAttr(this) ? bodavm.toolsFunc.getProtoAttr(this) : bodavm.toolsFunc.getProtoAttr.call(this, this)
        if (thisNode.name == 'html' || thisNode.name == 'body') {
            console.log_copy(`Element_clientHeight_get -> 当前node为 nodeName`, thisNode.name, ` 返回809`)
            return 809
        }
        else {
            console.log_copy(`Element_clientWidth_get 正在执行错误`, thisNode.name, '未实现')

        }
    }
    bodavm.envFunc.Element_clientWidth_get = function () {
        let thisNode = bodavm.toolsFunc.getProtoAttr(this) ? bodavm.toolsFunc.getProtoAttr(this) : bodavm.toolsFunc.getProtoAttr.call(this, this)
        if (thisNode.name == 'html' || thisNode.name == 'body') {
            console.log_copy(`Element_clientWidth_get ->当前node为 nodeName`, thisNode.name, ` 返回1440`)
            return 1440
        } else {
            console.log_copy(`Element_clientWidth_get 正在执行错误`, thisNode.name, '未实现')

        }
    }
    bodavm.envFunc.Document_currentScript_get = function () {
        let currentNode = bodaCurrentElement
        if (currentNode.name == 'script') {
            let newNode=null
            let isliveNode=bodavm.toolsFunc.getProtoAttr.call(currentNode,currentNode)
            if (isliveNode){
                newNode=isliveNode
            }else{
                newNode = bodavm.toolsFunc.setProto(currentNode.name)
                bodavm.toolsFunc.setProtoAttr.call(currentNode, currentNode, newNode)
            }
            bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, currentNode)
            console.log_copy(this, `-> Document_currentScript_get -> res ->`, newNode)
            return newNode
        } else {
            console.log_copy(this, `-> Document_currentScript_get ->,当前不处于script标签内,直接返回null`)
            return null
        }
    }
    bodavm.envFunc.Node_nextSibling_get = function () {
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        // debugger
        let nextNode = thisNode.nextSibling
        if (bodavm.memory.cache["Node_nextSibling_get"]['this'] && bodavm.memory.cache["Node_nextSibling_get"]['this'] == this) {
            let cacheValue = bodavm.memory.cache["Node_nextSibling_get"]['res'];
            console.log_copy(`Node_nextSibling_get 已存在,直接从cache中取值`, 'res- >', cacheValue);
            return cacheValue;
        }
        // debugger
        if (!nextNode) {
            console.log_copy(this, `-> Node_nextSibling_get res- >`, null);

            return null
        }
        let name = nextNode.name ? nextNode.name : nextNode.type
        let newNode=null
        let isliveNode=bodavm.toolsFunc.getProtoAttr.call(nextNode,nextNode)
        if (isliveNode){
            newNode=isliveNode
        }else{
            newNode = bodavm.toolsFunc.setProto(name)
            bodavm.toolsFunc.setProtoAttr.call(nextNode, nextNode, newNode)
        }
        bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, nextNode)
        bodavm.memory.cache["Node_nextSibling_get"]['this'] = this
        bodavm.memory.cache["Node_nextSibling_get"]['res'] = newNode
        console.log_copy(this, `-> Node_nextSibling_get res- >`, newNode);
        return newNode
    }
    bodavm.envFunc.Node_nodeType_get = function () {
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        // debugger
        let nodetype = boda$(thisNode)[0].nodeType
        console.log_copy(this, `-> Node_nodeType_get nodetype- >`, nodetype);

        return nodetype
    }

    bodavm.envFunc.Node_firstChild_get = function () {
        if (bodavm.memory.cache["Node_firstChild_get"]['this'] == this) {
            let cacheValue = bodavm.memory.cache["Node_firstChild_get"]['res'];
            console.log_copy(`Node_firstChild_get 已存在,直接从cache中取值`, 'res- >', cacheValue);
            return cacheValue;
        }
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        let node_ = boda$(thisNode).children()[0]
        // debugger
        if (!node_) {
            console.log_copy(this, `-> Node_firstChild_get res->`, null)

            return null
        }
        let newNode=null
        let isliveNode=bodavm.toolsFunc.getProtoAttr.call(node_,node_)
        if (isliveNode){
            newNode=isliveNode
        }else{
            newNode = bodavm.toolsFunc.setProto(node_.name)
            bodavm.toolsFunc.setProtoAttr.call(node_, node_, newNode)
        }
      
        bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, node_)
        console.log_copy(this, `-> Node_firstChild_get res->`, newNode)
        bodavm.memory.cache["Node_firstChild_get"]['this'] = this
        bodavm.memory.cache["Node_firstChild_get"]['res'] = newNode
        return newNode
    }
    bodavm.envFunc.Element_tagName_get = function () {
        // debugger
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        let tagName_ = boda$(thisNode).prop('tagName')
        console.log_copy(this, `-> Element_tagName_get tagName_->`, tagName_)

        return tagName_
    }
    bodavm.envFunc.HTMLMetaElement_content_get = function () {
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        let cont_ = boda$(thisNode).attr('content')
        console.log_copy(this, `-> HTMLMetaElement_content_get res->`, cont_)

        return cont_
    }
    bodavm.envFunc.Node_parentElement_get = function () {
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        // debugger
        if (bodavm.memory.cache["Node_parentElement_get"]['this'] == this) {
            let cacheValue = bodavm.memory.cache["Node_parentElement_get"]['res'];
            console.log_copy(`Node_parentElement_get 已存在,直接从cache中取值`, 'res- >', cacheValue);
            return cacheValue;
        }
        let parentEle = boda$(thisNode).parent()[0]
        if (thisNode.name == 'html') {
            console.log_copy(this, `-> Node_parentElement_get res->`, null)
            return null
        }
        // debugger
        let newNode =null
        let isliveNode=bodavm.toolsFunc.getProtoAttr.call(parentEle,parentEle)
        if (isliveNode){
            newNode=isliveNode
        }else{
            newNode=bodavm.toolsFunc.setProto(parentEle.name)
            bodavm.toolsFunc.setProtoAttr.call(parentEle,parentEle,newNode)
        }
        // = 
        bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, parentEle)

        console.log_copy(this, `-> Node_parentElement_get res->`, newNode)
        bodavm.memory.cache['Node_parentElement_get']['res'] = newNode
        bodavm.memory.cache['Node_parentElement_get']['this'] = this

        return newNode
    }
    bodavm.envFunc.Element_setAttribute = function () {
        let name = arguments[0]
        let value = arguments[1]
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        let res = boda$(thisNode).attr(name, value)
        console.log_copy(this, `-> Element_getAttribute name-> `, name, `-> value ->`, value)
        // return res

    }
    bodavm.envFunc.Element_getAttribute = function () {
        let arg = arguments[0]
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        let res = boda$(thisNode).attr(arg)
        console.log_copy(this, `-> Element_getAttribute `, `arg->`, arg, `-> res-> `, res)
        return res
    }
    bodavm.envFunc.Node_childNodes_get = function () {
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        // debugger
        let childs = thisNode.children
        let childNodes = []

        if (bodavm.memory.cache['Node_childNodes_get']['this'] == this) {
            let cacheValue = bodavm.memory.cache['Node_childNodes_get']['res']
            console.log_copy(this, `-> Node_childNodes_get 已存在,直接从cache中取值`, ' -> res- >', cacheValue)
            return cacheValue


        }
        if (childs) {
            for (let child of childs) {
                if (child.type === 'tag' || child.type === 'text') {
                    // debugger
                    let newNode=null
                    let isliveNode=bodavm.toolsFunc.getProtoAttr.call(child,child)
                    if (isliveNode){
                        newNode=isliveNode
                    }else{
                        let name = child.name ? child.name : child.type

                        newNode = bodavm.toolsFunc.setProto(name)
                        bodavm.toolsFunc.setProtoAttr.call(child,child,newNode)
                        bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, child)

                    }
                    childNodes.push(newNode);
                }
            }
        }
        childNodes.__proto__ = NodeList.prototype
        bodavm.memory.cache['Node_childNodes_get']['this'] = this
        bodavm.memory.cache['Node_childNodes_get']['res'] = childNodes
        console.log_copy(this, `-> Node_childNodes_get `, 'res- >', childNodes)

        return childNodes


    }


    bodavm.envFunc.Element_className_set = function () {
        // debugger
        let arg = arguments[0]
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        boda$(thisNode).attr('class', arg)
        console.log_copy(this, `-> Element_className_set ->`, arg)
        return arg
    }
    bodavm.envFunc.Element_querySelector = function () {
        // debugger
        let arg = arguments[0]
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        boda$(thisNode)
        let resNode = boda$(thisNode).find(arg)
        let newNode = null
        if (resNode) {
            let isliveNode=bodavm.toolsFunc.getProtoAttr.call(resNode[0],resNode[0])
            if (isliveNode){
                console.log_copy(this,`Element_querySelector arg->`, arg, ` -> res->`, isliveNode)

                return isliveNode
            }
            newNode = bodavm.toolsFunc.setProto(resNode[0].name)
            bodavm.toolsFunc.setProtoAttr.call(resNode[0], resNode[0], newNode)

            bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, resNode[0])

        }

        console.log_copy(this, `-> Element_querySelector arg ->` ,arg, `-> res->`, newNode)
        return newNode

    }


    bodavm.envFunc.DOMTokenList_add = function () {
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        this.__proto__ = Array.prototype
        this.push(arguments[0])
        boda$(thisNode).attr('class', arguments[0])
        this.__proto__ = DOMTokenList.prototype
        console.log_copy(this, `-> DOMTokenList_add arg->`, arguments[0])

        return arguments[0]
    }
    bodavm.envFunc.Node_insertBefore = function () {
        let target = arguments[0]
        let target2 = arguments[1]
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        let newNode = bodavm.toolsFunc.getProtoAttr.call(target, target)
        let referenceNode = bodavm.toolsFunc.getProtoAttr.call(target2, target2)
        // debugger
        let newEl = boda$(newNode);

        if (newNode.name == 'script' && referenceNode.name == 'script') {
            debugger
            bodavm.memory.waitExec.push(targetNode)

        }

        if (!referenceNode) {
            // referenceNode 为 null,插入到最后
            // debugger
            boda$(thisNode).append(newEl);
        } else {
            // debugger
            const ref = boda$(referenceNode);
            ref.before(newEl);
        }
        console.log_copy(this, `-> Node_insertBefore newNode->`, target, `-> referenceNode ->`, target2)
        return target

    }
    bodavm.envFunc.Document_querySelector = function () {
        // debugger
        let arg = arguments[0]
        let res = boda$(arg).get()[0]
        let newNode = null
        if (res) {
            let isliveNode=bodavm.toolsFunc.getProtoAttr.call(res,res)
            if (isliveNode){
                console.log_copy(`Document_querySelector arg->`, arg, ` -> res->`, isliveNode)

                return isliveNode
            }
            newNode = bodavm.toolsFunc.setProto(res.name)
            bodavm.toolsFunc.setProtoAttr.call(res, res, newNode)

            bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, res)
        }

        console.log_copy(this, `-> Document_querySelector arg-> `, arg, ` -> res->`, newNode)
        return newNode
    }
    // bodavm.envFunc.DOMTokenList_toString=function (){
    //     debugger
    // }
    bodavm.envFunc.Element_classList_get = function () {
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        let classNames = boda$(thisNode).attr('class');
        let clsList = []
        // debugger
        if (classNames) {
            clsList = classNames.trim().split(/\s+/);
        }

        clsList.__proto__ = DOMTokenList.prototype
        // return [];
        // debugger
        console.log_copy(this, `-> Element_classList_get res->`, clsList)
        // bodavm.toolsFunc.setProtoAttr.call(clsList,clsList,thisNode)
        return clsList

    }
    bodavm.envFunc.HTMLScriptElement_src_set = function () {
        let arg = arguments[0]
        // debugger
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        boda$(thisNode).attr('src', arg)
        // debugger
        console.log_copy(this, `-> HTMLScriptElement_src_set arg->`, arg)
        return arg
    }
    bodavm.envFunc.Image_src_set = function () {
        let arg = arguments[0]
        // debugger
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        boda$(thisNode).attr('src', arg)
        // debugger
        console.log_copy(this, `-> Image_src_set arg->`, arg)
        return arg
    }
    bodavm.envFunc.Image_alt_set = function () {
        let arg = arguments[0]
        // debugger
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        boda$(thisNode).attr('alt', arg)
        // debugger
        console.log_copy(this, `-> Image_alt_set arg->`, arg)
        return arg
    }
    bodavm.envFunc.Document_getElementById = function () {
        let arg = arguments[0]
        let element = boda$(`#${arg}`)
        let res = null
        if (element.length > 0) {
            res = element[0]
            let isliveNode=bodavm.toolsFunc.getProtoAttr.call(res,res)
            if (isliveNode){
                console.log_copy(`Document_getElementById arg->`, arg, ` -> res->`, isliveNode)

                return isliveNode
            }
            let newNode = bodavm.toolsFunc.setProto(res.name)
            bodavm.toolsFunc.setProtoAttr.call(res,res,newNode)
            bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, res)
            console.log_copy(`Document_getElementById arg->`, arg, ` -> res->`, newNode)

            return newNode;
        }
        console.log_copy(`Document_getElementById arg->`, arg, ` -> res->`, res)
        // debugger

        return res;

    }

    bodavm.envFunc.Image_width_get = function () {
        let width = bodavm.toolsFunc.getProtoAttr.call(this, 'width') ? bodavm.toolsFunc.getProtoAttr.call(this, 'width') : 0
        console.log_copy(this, ` -> Image_width_get res-> `, width)
        return width
    }


    bodavm.envFunc.PointerEvent_pointerId_get = function () {
        console.log_copy(this, ` -> PointerEvent_pointerId_get res-> 默认返回`, 1)
        return 1

    }
    bodavm.envFunc.PointerEvent_isPrimary_get = function () {
        console.log_copy(this, ` -> PointerEvent_isPrimary_get res-> 默认返回`, false)
        return false

    }
    bodavm.envFunc.HTMLElement_onerror_get = function () {
        let onerr = bodavm.toolsFunc.getProtoAttr.call(this, 'onerror')
        console.log_copy(`HTMLElement_onerror_get res->`, onerr)
        return onerr

    }
    bodavm.envFunc.Document_title_get = function () {
        // debugger
        let title = bodavm.memory.document['title']
        console.log_copy(`Document_title_get res->`, title)
        return title
    }

    bodavm.envFunc.Document_referrer_get = function () {
        // debugger
        let refer = bodavm.memory.document['referrer']
        console.log_copy(`Document_referrer_get res->`, refer)
        return refer
    }
    bodavm.envFunc.Document_wasDiscarded_get = function () {
        console.log_copy(`Document_wasDiscarded_get 默认返回 false`)
        return false
    }

    bodavm.envFunc.HTMLElement_onclick_set = function () {
        let onclick = arguments[0]
        // debugger
        let event = {
            'self': this,
            'callback': onclick
        }
        bodavm.memory.asyncEvent['HTMLElement']['onclick'].push(event)
        // bodavm.toolsFunc.setProtoAttr.call(this, 'onload', onlod)
        console.log_copy(this, ` -> HTMLElement_onclick_set res->`, onclick);

        return onclick
    }


    bodavm.envFunc.HTMLElement_onchange_set = function () {
        let onchange = arguments[0]
        // debugger
        let event = {
            'self': this,
            'callback': onchange
        }
        bodavm.memory.asyncEvent['HTMLElement']['onchange'].push(event)
        // bodavm.toolsFunc.setProtoAttr.call(this, 'onload', onlod)
        console.log_copy(this, ` -> HTMLElement_onchange_set res->`, onchange);

        return onchange
    }


    bodavm.envFunc.HTMLElement_onkeydown_set = function () {
        let onkeydown = arguments[0]
        // debugger
        let event = {
            'self': this,
            'callback': onkeydown
        }
        bodavm.memory.asyncEvent['HTMLElement']['onkeydown'].push(event)
        // bodavm.toolsFunc.setProtoAttr.call(this, 'onload', onlod)
        console.log_copy(this, ` -> HTMLElement_onkeydown_set res->`, onkeydown);

        return onkeydown
    }




    bodavm.envFunc.HTMLElement_onload_set = function () {
        let onlod = arguments[0]
        // debugger
        let event = {
            'self': this,
            'callback': onlod
        }
        bodavm.memory.asyncEvent['HTMLElement']['onload'].push(event)
        // bodavm.toolsFunc.setProtoAttr.call(this, 'onload', onlod)
        console.log_copy(this, ` -> HTMLElement_onload_set res->`, onlod);

        return onlod
    }
    bodavm.envFunc.HTMLElement_onerror_set = function () {
        let onerr = arguments[0]
        // debugger
        let event = {
            'self': this,
            'callback': onerr
        }
        bodavm.memory.asyncEvent['HTMLElement']['onerror'].push(event)

        console.log_copy(this, `-> HTMLElement_onerror_set res->`, onerr);

        return onerr
    }




    bodavm.envFunc.HTMLScriptElement_src_get = function () {
        // debugger
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this) ? bodavm.toolsFunc.getProtoAttr.call(this, this) : bodavm.toolsFunc.getProtoAttr(this)
        // debugger
        let src_ = boda$(thisNode).attr()['src'] ? boda$(thisNode).attr()['src'] : null
        console.log_copy(`HTMLScriptElement_src_get res->`, src_)
        return src_

    }


    bodavm.envFunc.DOMRectReadOnly_top_get = function () {
        // debugger
        console.log_copy(`DOMRectReadOnly_top_get  res-> 默认返回`, 8)
        return 8
    }
    bodavm.envFunc.DOMRectReadOnly_bottom_get = function () {
        // debugger
        console.log_copy(`DOMRectReadOnly_bottom_get  res-> 默认返回`, 245.33334350585938)
        return 245.33334350585938
    }
    bodavm.envFunc.DOMRectReadOnly_left_get = function () {
        // debugger
        console.log_copy(`DOMRectReadOnly_left_get  res-> 默认返回`, 8)
        return 8
    }

    bodavm.envFunc.DOMRectReadOnly_right_get = function () {
        // debugger
        console.log_copy(`DOMRectReadOnly_right_get  res-> 默认返回`, 1432)
        return 1432
    }
    bodavm.envFunc.DOMRect_height_get = function () {
        // debugger
        console.log_copy(`DOMRect_height_get  res-> 默认返回`, 237.33334350585938)
        return 1424
    }
    bodavm.envFunc.DOMRect_width_get = function () {
        // debugger
        console.log_copy(`DOMRect_width_get  res-> 默认返回`, 1424)
        return 1424
    }
    bodavm.envFunc.DOMRect_y_get = function () {
        // debugger
        console.log_copy(`DOMRect_y_get  res-> 默认返回`, 8)
        return 8
    }
    bodavm.envFunc.DOMRect_x_get = function () {
        // debugger
        console.log_copy(`DOMRect_x_get  res-> 默认返回`, 8)
        return 8
    }
    bodavm.envFunc.Element_getBoundingClientRect = function () {
        let DomRect = new DOMRect('bobo')
        console.log_copy(`Element_getBoundingClientRect  res->`, DomRect)

        return DomRect
    }
    bodavm.envFunc.Element_clientTop_get = function () {
        // debugger
        let thisEvent = bodavm.toolsFunc.getProtoAttr.call(this, this)
        console.log_copy(`Element_clientTop_get  当前事件为 -->`, thisEvent, ` - >默认返回 0`)

        return 0
    }
    bodavm.envFunc.Element_clientLeft_get = function () {
        // debugger
        let thisEvent = bodavm.toolsFunc.getProtoAttr.call(this, this)
        console.log_copy(`Element_clientLeft_get  当前事件为 -->`, thisEvent, ` - >默认返回 0`)

        return 0
    }
    bodavm.envFunc.Element_scrollTop_get = function () {
        // debugger
        let thisEvent = bodavm.toolsFunc.getProtoAttr.call(this, this)
        console.log_copy(`Element_scrollTop_get  当前事件为 -->`, thisEvent, ` - >默认返回 0`)

        return 0
    }

    bodavm.envFunc.Element_scrollLeft_get = function () {
        // debugger
        let thisEvent = bodavm.toolsFunc.getProtoAttr.call(this, this)
        console.log_copy(`Element_scrollLeft_get  当前事件为 -->`, thisEvent, ` - >默认返回 0`)

        return 0
    }
    bodavm.envFunc.MouseEvent_pageY_get = function () {
        // debugger
        let thisEvent = bodavm.toolsFunc.getProtoAttr.call(this, this)
        console.log_copy(`MouseEvent_pageY_get  当前事件为 -->`, thisEvent, ` - >默认返回 0`)

        return 0
    }
    bodavm.envFunc.MouseEvent_pageX_get = function () {
        // debugger
        let thisEvent = bodavm.toolsFunc.getProtoAttr.call(this, this)
        console.log_copy(`MouseEvent_pageX_get  当前事件为 -->`, thisEvent, ` - >默认返回 0`)

        return 0
    }
    bodavm.envFunc.Event_target_get = function () {
        // debugger
        let thisEvent = bodavm.toolsFunc.getProtoAttr.call(this, this)
        console.log_copy(`Event_target_get  当前事件为 -->`, thisEvent, ` - >默认返回 body`)

        if (thisEvent == 'click' || thisEvent == 'mousemove') {
            return document.body
        } else {
            return bodavm.toolsFunc.throwError('TypeError', `Event_target_get 未实现`)
        }
    }
    bodavm.envFunc.Event_srcElement_get = function () {
        // debugger
        let thisEvent = bodavm.toolsFunc.getProtoAttr.call(this, this)
        console.log_copy(`Event_srcElement_get  当前事件为 -->`, thisEvent, ` - >默认返回 body`)

        if (thisEvent == 'click' || thisEvent == 'mousemove') {
            return document.body
        } else {
            return bodavm.toolsFunc.throwError('TypeError', `Event_srcElement_get 未实现`)
        }
    }


    bodavm.envFunc.MediaQueryList_matches_get = function () {
        let matches_ = bodavm.toolsFunc.getProtoAttr.call(this, 'matchMedia')
        // debugger
        let ismatch=null
        switch (matches_){
            case '(prefers-color-scheme: dark)':
                ismatch=false
                break
            case "(prefers-color-scheme: light)":
                ismatch=true
                break
            case "(prefers-color-scheme: no-preference)":
                ismatch=false
                break
            case "(prefers-reduced-motion: no-preference)":
                ismatch=true
                break
            case "(prefers-reduced-motion: reduce)":
                ismatch=false
                break
            case '(any-pointer: fine )':
                ismatch=true
                break
            case '(any-pointer: coarse )':
                ismatch=false
                break
            case '(any-pointer: none )':
                ismatch=false
                break
            case '(any-pointer )':
                ismatch=true
                break
            case '(any-hover: hover )':
                ismatch=true
                break
            case '(any-hover: on-demand )':
                ismatch=false
                break
            case '(any-hover: none )':
                ismatch=false
                break
            case '(any-hover )':
                ismatch=true
                break
            case '(color-gamut: srgb )':
                ismatch=true
                break
            case '(color-gamut: p3 )':
                ismatch=false
                break
            case '(color-gamut: rec2020 )':
                ismatch=false
                break
            case '(color-gamut )':
                ismatch=true
                break
            default:
                console.log_copy(`MediaQueryList_matches_get -> `,matches_,`未实现!!!!!`)
        }
        console.log_copy(`MediaQueryList_matches_get -> matches_ `,matches_, `-> res ->${ismatch}`);
        return ismatch
    }
    bodavm.envFunc.Node_removeChild = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        let targetNode = bodavm.toolsFunc.getProtoAttr(arguments[0]) ? bodavm.toolsFunc.getProtoAttr(arguments[0]) : bodavm.toolsFunc.getProtoAttr.call(arguments[0], arguments[0]); //目标node
        // debugger
        let thisNode = bodavm.toolsFunc.getProtoAttr(this) ? bodavm.toolsFunc.getProtoAttr(this) : bodavm.toolsFunc.getProtoAttr.call(this, this);
        if (bodavm.memory.cache['Element_getElementsByTagName'][targetNode.name]) {
            // debugger
            let collection = bodavm.memory.cache['Element_getElementsByTagName'][targetNode.name]['res']
            for (const key in Object.getOwnPropertyDescriptors_bo(collection)) {
                // debugger
                if (collection[key] == arguments[0]) {
                    delete collection['bo' + key]
                }
            }
            let newkeys = Object.keys(collection, 'bobo')
            let newlen = newkeys.length
            for (let index = 0; index < newlen; index++) {
                // debugger
                Object.defineProperty(collection, 'bo' + index, {
                    value: collection[newkeys[index]],
                    writable: false,
                    enumerable: true,
                    configurable: true
                }, 'bobo')

            }
            delete collection['bo' + (newlen)]
        }
        if (bodavm.memory.cache['Document_getElementsByTagName'][targetNode.name]) {
            // debugger
            let collection = bodavm.memory.cache['Document_getElementsByTagName'][targetNode.name]['res']
            for (const key in Object.getOwnPropertyDescriptors_bo(collection)) {
                // debugger
                if (collection[key] == arguments[0]) {
                    delete collection['bo' + key]
                    // debugger

                }
            }
            // debugger
            let newkeys = Object.keys(collection, 'bobo')
            let newlen = newkeys.length
            for (let index = 0; index < newlen; index++) {
                // debugger
                Object.defineProperty(collection, 'bo' + index, {
                    value: collection[newkeys[index]],
                    writable: false,
                    enumerable: true,
                    configurable: true
                }, 'bobo')

            }
            delete collection['bo' + (newlen)]
            // debugger
        }
        if (bodavm.memory.cache['Element_children_get'][thisNode.name]) {
            // debugger
            let collection = bodavm.memory.cache['Element_children_get'][thisNode.name]['res']
            for (const key in Object.getOwnPropertyDescriptors_bo(collection)) {
                // debugger
                if (collection[key] == arguments[0]) {
                    delete collection['bo' + key]
                    // debugger

                }
            }
            // debugger
            let newkeys = Object.keys(collection, 'bobo')
            let newlen = newkeys.length
            for (let index = 0; index < newlen; index++) {
                // debugger
                Object.defineProperty(collection, 'bo' + index, {
                    value: collection[newkeys[index]],
                    writable: false,
                    enumerable: true,
                    configurable: true
                }, 'bobo')

            }
            delete collection['bo' + (newlen)]
            // debugger
        }
        // debugger
        if (targetNode.name == 'script' && bodavm.memory.cache['Document_scripts_get']['res']) {
            // debugger
            let collection = bodavm.memory.cache['Document_scripts_get']['res']
            for (const key in Object.getOwnPropertyDescriptors_bo(collection)) {
                // debugger
                if (collection[key] == arguments[0]) {
                    delete collection['bo' + key]
                    // debugger

                }
            }
            // debugger
            let newkeys = Object.keys(collection, 'bobo')
            let newlen = newkeys.length
            for (let index = 0; index < newlen; index++) {
                // debugger
                Object.defineProperty(collection, 'bo' + index, {
                    value: collection[newkeys[index]],
                    writable: false,
                    enumerable: true,
                    configurable: true
                }, 'bobo')

            }
            delete collection['bo' + (newlen)]
            // debugger
        }
        if (boda$(targetNode).attr('class') &&bodavm.memory.cache['Document_getElementsByClassName'][tagName][ boda$(targetNode).attr('class')] ){
            let collection = bodavm.memory.cache['Document_getElementsByClassName']['res']
            for (const key in Object.getOwnPropertyDescriptors_bo(collection)) {
                // debugger
                if (collection[key] == arguments[0]) {
                    delete collection['bo' + key]
                    // debugger

                }
            }
            // debugger
            let newkeys = Object.keys(collection, 'bobo')
            let newlen = newkeys.length
            for (let index = 0; index < newlen; index++) {
                // debugger
                Object.defineProperty(collection, 'bo' + index, {
                    value: collection[newkeys[index]],
                    writable: false,
                    enumerable: true,
                    configurable: true
                }, 'bobo')

            }
            delete collection['bo' + (newlen)]
        }

        console.log_copy(`Node_removeChild `, `child->${arguments[0]}`);
        // debugger
        let childs = boda$(thisNode).children()
        let isRemove = 0
        for (let index = 0; index < childs.length; index++) {
            if (childs[index] == targetNode) {
                if (bodavm.memory.domDocument[targetNode.name]) {
                    let deldomDocInd = bodavm.memory.domDocument[targetNode.name].indexOf(targetNode)
                    let delalldomDocInd = bodavm.memory.domDocument['all'].indexOf(targetNode)
                    // debugger
                    bodavm.memory.domDocument[targetNode.name].splice(deldomDocInd, 1)
                    bodavm.memory.domDocument['all'].splice(delalldomDocInd)
                    boda$(thisNode).children().eq(index).remove()
                }

                isRemove = 1
                break
            }
        }
        if (isRemove == 0) {
            return bodavm.toolsFunc.throwError("DOMException", "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.");
        }
        return arguments[0];
    };
    bodavm.envFunc.HTMLCollection_length_get = function () {
        let templen_ = 0
        for (const key in Object.getOwnPropertyDescriptors_bo(this)) {
            templen_ += 1
        }
        console.log_copy(`HTMLCollection_length_get res->`, templen_)
        return templen_
    }
    bodavm.envFunc.Element_children_get = function () {
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        // debugger
        let tagName = thisNode.name
        // debugger
        if (!bodavm.memory.cache['Element_children_get'][tagName]) {
            bodavm.memory.cache['Element_children_get'][tagName] = {}
            bodavm.memory.cache['Element_children_get'][tagName]['res'] = {}

        }
        if (bodavm.memory.cache['Element_children_get'][tagName] && bodavm.memory.cache['Element_children_get'][tagName]['this'] == this) {
            let curLen = Object.keys(bodavm.memory.cache['Element_children_get'][tagName]["res"]).length
            // debugger
            if (curLen == boda$(thisNode).children().length) {
                let cacheValue = bodavm.memory.cache['Element_children_get'][tagName]["res"]
                console.log_copy(this, `-> Element_children_get 已存在,直接从cache中取值`, `tagName ->`, tagName, ' -> res- >', cacheValue)
                return cacheValue
            }

        }
        let tempCollection = []
        debugger
        let childs = boda$(thisNode).children()
        for (const child of childs) {
            let newNode=null
            let isliveNode=bodavm.toolsFunc.getProtoAttr.call(child,child)
            if (isliveNode){
                newNode=isliveNode
            }else{
                newNode = bodavm.toolsFunc.setProto(child.name)
                bodavm.toolsFunc.setProtoAttr.call(child,child,newNode)
            }   
            bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, child)
            tempCollection.push(newNode)
        }
        for (let index = 0; index < tempCollection.length; index++) {
            Object.defineProperty(bodavm.memory.cache['Element_children_get'][tagName]['res'], index, {
                value: tempCollection[index],
                writable: false,
                enumerable: true,
                configurable: true
            }, 'bobo')
        }

        // debugger
        bodavm.memory.cache['Element_children_get'][tagName]['res'].__proto__ = HTMLCollection.prototype
        bodavm.memory.cache['Element_children_get'][tagName]['this'] = this
        bodavm.memory.cache['Element_children_get'][tagName]['this'].__proto__[Symbol.iterator] = Array.prototype[Symbol.iterator];
        bodavm.memory.cache['Element_children_get'][tagName]['res'] = bodavm.toolsFunc.proxyHTMLCollection(bodavm.memory.cache['Element_children_get'][tagName]['res'], `HTMLCollection:proxyHTMLCollection`)

        console.log_copy(this, `-> Element_children_get `, ' -> res- >', bodavm.memory.cache['Element_children_get'][tagName]['res'])
        return bodavm.memory.cache['Element_children_get'][tagName]['res']
    }

    bodavm.envFunc.Document_scripts_get = function () {
        let tagName = 'script'
        let tempCollection = []
        if (bodavm.memory.cache['Document_scripts_get']['res']) {
            let curLen = Object.keys(bodavm.memory.cache['Document_scripts_get']["res"]).length
            if (curLen == bodavm.memory.domDocument[tagName].length) {
                let cacheValue = bodavm.memory.cache['Document_scripts_get']["res"]
                console.log_copy(`Document_scripts_get 已存在,直接从cache中取值`, `tagName ->`, tagName, ' -> res- >', cacheValue)
                return cacheValue
            }

        }
        if (bodavm.memory.domDocument[tagName]) {
            for (let ind = 0; ind < bodavm.memory.domDocument[tagName].length; ind++) {
                let newNode = null
                let currNode = bodavm.memory.domDocument[tagName][ind]
                let isliveNode=bodavm.toolsFunc.getProtoAttr.call(currNode,currNode)
                if (isliveNode){
                    newNode=isliveNode
                }else{
                    newNode=bodavm.toolsFunc.setProto(tagName)
                    bodavm.toolsFunc.setProtoAttr.call(currNode,currNode,newNode)
                }
                bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, currNode)
                tempCollection.push(newNode)
            }
        }
        bodavm.memory.cache['Document_scripts_get']['res'] = {}
        for (let index = 0; index < tempCollection.length; index++) {
            Object.defineProperty(bodavm.memory.cache['Document_scripts_get']['res'], index, {
                value: tempCollection[index],
                writable: false,
                enumerable: true,
                configurable: true
            }, 'bobo')
        }
        bodavm.memory.cache['Document_scripts_get']['res'].__proto__ = HTMLCollection.prototype
        bodavm.memory.cache['Document_scripts_get']['this'] = this
        bodavm.memory.cache['Document_scripts_get']['res'].__proto__[Symbol.iterator] = Array.prototype[Symbol.iterator];
        console.log_copy(`Document_scripts_get `, `arg ->`, tagName, ' -> res- >', bodavm.memory.cache['Document_scripts_get']['res'])
        bodavm.memory.cache['Document_scripts_get']['res'] = bodavm.toolsFunc.proxyHTMLCollection(bodavm.memory.cache['Document_scripts_get']['res'], `HTMLCollection:proxyHTMLCollection`)
        return bodavm.memory.cache['Document_scripts_get']['res'];

    }
    bodavm.envFunc.Document_getElementsByClassName = function () {
        let tagName = arguments[0]
        let classList = boda$(`.${tagName}`)
        if (!bodavm.memory.cache['Document_getElementsByClassName'][tagName]) {
            bodavm.memory.cache['Document_getElementsByClassName'][tagName] = {}
        }
        if (bodavm.memory.cache['Document_getElementsByClassName'][tagName] ) {
            let curLen = Object.keys(bodavm.memory.cache['Document_getElementsByClassName'][tagName]["res"]).length
            // debugger
            if (curLen==bodavm.memory.cache['Document_getElementsByClassName'][tagName]['length']){
                let cacheValue = bodavm.memory.cache['Document_getElementsByClassName'][tagName]["res"]
                console.log_copy(`Document_getElementsByClassName 已存在,直接从cache中取值`, `tagName ->`, tagName, ' -> res- >', cacheValue)
                return cacheValue
            }
 
        }
        // debugger
        // bodavm.memory.collection[tagName] = []
        let tempCollection = []
        if (classList) {
            for (let ind = 0; ind < classList.length; ind++) {
                let newNode=null
                let isliveNode=bodavm.toolsFunc.getProtoAttr.call(classList[ind],classList[ind])
                if (isliveNode){
                    newNode=isliveNode
                }else{
                    newNode = bodavm.toolsFunc.setProto(classList[ind].name)
                    bodavm.toolsFunc.setProtoAttr.call(classList[ind], classList[ind], newNode)
                }
                let currNode = classList[ind]
                bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, currNode)
                tempCollection = [].push(newNode)
            }
        }
        for (let index = 0; index < tempCollection.length; index++) {
            Object.defineProperty(bodavm.memory.cache['Document_getElementsByClassName'][tagName]['res'], index, {
                value: tempCollection[index],
                writable: false,
                enumerable: true,
                configurable: true
            }, 'bobo')
        }
        // debugger
        bodavm.memory.cache['Document_getElementsByClassName'][tagName]['res'].__proto__ = HTMLCollection.prototype
        bodavm.memory.cache['Document_getElementsByClassName'][tagName]['length']=tempCollection.length
        bodavm.memory.cache['Document_getElementsByClassName'][tagName]['res'].__proto__[Symbol.iterator] = Array.prototype[Symbol.iterator];
        console.log_copy(`Document_getElementsByClassName `, `arg ->`, tagName, ' -> res- >', bodavm.memory.cache['Document_getElementsByClassName'][tagName]['res'])
        bodavm.memory.cache['Document_getElementsByClassName'][tagName]['res'] = bodavm.toolsFunc.proxyHTMLCollection(bodavm.memory.cache['Document_getElementsByClassName'][tagName]['res'], `HTMLCollection:proxyHTMLCollection`)
        return bodavm.memory.cache['Document_getElementsByClassName'][tagName]['res'];


    }
    bodavm.envFunc.Document_getElementsByTagName = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        let tagName = arguments[0]
        if (!bodavm.memory.cache['Document_getElementsByTagName'][tagName]) {
            bodavm.memory.cache['Document_getElementsByTagName'][tagName] = {}
            bodavm.memory.cache['Document_getElementsByTagName'][tagName]['res'] = {}

        }
        if (bodavm.memory.cache['Document_getElementsByTagName'][tagName] && bodavm.memory.cache['Document_getElementsByTagName'][tagName]['this'] == this) {
            let curLen = Object.keys(bodavm.memory.cache['Document_getElementsByTagName'][tagName]["res"]).length
            debugger
            if (curLen == 0 || curLen == bodavm.memory.domDocument[tagName].length) {

                let cacheValue = bodavm.memory.cache['Document_getElementsByTagName'][tagName]["res"]
                console.log_copy(`Document_getElementsByTagName 已存在,直接从cache中取值`, `tagName ->`, tagName, ' -> res- >', cacheValue)
                return cacheValue
            }
        }
        // debugger
        // bodavm.memory.collection[tagName] = []
        let tempCollection = []
        if (bodavm.memory.domDocument[tagName]) {
            for (let ind = 0; ind < bodavm.memory.domDocument[tagName].length; ind++) {
                let newNode = null
                let currNode = bodavm.memory.domDocument[tagName][ind]
                let isliveNode=bodavm.toolsFunc.getProtoAttr.call(currNode,currNode)
                if (isliveNode){
                    newNode=isliveNode
                }else{
                    newNode=bodavm.toolsFunc.setProto(tagName)
                    bodavm.toolsFunc.setProtoAttr.call(currNode,currNode,newNode)
                }
                bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, currNode)
                tempCollection.push(newNode)
            }
        }
        for (let index = 0; index < tempCollection.length; index++) {
            Object.defineProperty(bodavm.memory.cache['Document_getElementsByTagName'][tagName]['res'], index, {
                value: tempCollection[index],
                writable: false,
                enumerable: true,
                configurable: true
            }, 'bobo')
        }
        // debugger
        bodavm.memory.cache['Document_getElementsByTagName'][tagName]['res'].__proto__ = HTMLCollection.prototype
        bodavm.memory.cache['Document_getElementsByTagName'][tagName]['this'] = this
        // bodavm.memory.cache['Document_getElementsByTagName'][tagName]['length']=bodavm.memory.domDocument[tagName].length
        bodavm.memory.cache['Document_getElementsByTagName'][tagName]['res'].__proto__[Symbol.iterator] = Array.prototype[Symbol.iterator];
        console.log_copy(`Document_getElementsByTagName `, `arg ->`, tagName, ' -> res- >', bodavm.memory.cache['Document_getElementsByTagName'][tagName]['res'])
        bodavm.memory.cache['Document_getElementsByTagName'][tagName]['res'] = bodavm.toolsFunc.proxyHTMLCollection(bodavm.memory.cache['Document_getElementsByTagName'][tagName]['res'], `HTMLCollection:proxyHTMLCollection`)
        return bodavm.memory.cache['Document_getElementsByTagName'][tagName]['res'];
    };
    bodavm.envFunc.Element_getElementsByTagName = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ///未完善  缺少
        ;
        // debugger
        let tagName = arguments[0]
        if (!bodavm.memory.cache['Element_getElementsByTagName'][tagName]) {
            bodavm.memory.cache['Element_getElementsByTagName'][tagName] = {}
            bodavm.memory.cache['Element_getElementsByTagName'][tagName]['res'] = {}
        }
        if (bodavm.memory.cache['Element_getElementsByTagName'][tagName] && bodavm.memory.cache['Element_getElementsByTagName'][tagName]['this'] == this) {
            let curLen = Object.keys(bodavm.memory.cache['Element_getElementsByTagName'][tagName]["res"]).length
            // debugger
            if (curLen == bodavm.memory.domDocument[tagName].length) {
                let cacheValue = bodavm.memory.cache['Element_getElementsByTagName'][tagName]["res"]
                console.log_copy(`Element_getElementsByTagName 已存在,直接从cache中取值`, `tagName ->`, tagName, ' -> res- >', cacheValue)
                return cacheValue
            }

        }
        // debugger
        let elesList = bodavm.memory.domDocument[tagName]
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        // let res={}
        let tempCollection = []
        if (elesList) {
            let childrensList = boda$(thisNode).find('*').get() //获取所有子孙节点
            for (let node of elesList) {
                let indexele = childrensList.indexOf(node)
                if (indexele != -1) {
                    let newNode=null
                    let isliveNode=bodavm.toolsFunc.getProtoAttr.call(node,node)
                    if (isliveNode){
                        newNode=isliveNode
                    }else{
                        newNode= bodavm.toolsFunc.setProto(tagName)
                        bodavm.toolsFunc.setProtoAttr.call(node, node, newNode)

                    }
                    // let newNode = bodavm.toolsFunc.setProto(tagName)
                    bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, node)
                    tempCollection.push(newNode)
                }
            }
        }
        for (let index = 0; index < tempCollection.length; index++) {
            Object.defineProperty(bodavm.memory.cache['Element_getElementsByTagName'][tagName]['res'], index, {
                value: tempCollection[index],
                writable: false,
                enumerable: true,
                configurable: true
            }, 'bobo')
        }
        bodavm.memory.cache['Element_getElementsByTagName'][tagName]['res'].__proto__ = HTMLCollection.prototype
        bodavm.memory.cache['Element_getElementsByTagName'][tagName]['this'] = this
        // bodavm.memory.cache['Element_getElementsByTagName'][tagName]['length']=bodavm.memory.domDocument[tagName].length
        // debugger
        bodavm.memory.cache['Element_getElementsByTagName'][tagName]['res'].__proto__[Symbol.iterator] = Array.prototype[Symbol.iterator];
        console.log_copy(this, `-> Element_getElementsByTagName `, `arg ->`, tagName, ' -> res- >', bodavm.memory.cache['Element_getElementsByTagName'][tagName]['res'])
        bodavm.memory.cache['Element_getElementsByTagName'][tagName]['res'] = bodavm.toolsFunc.proxyHTMLCollection(bodavm.memory.cache['Element_getElementsByTagName'][tagName]['res'], `HTMLCollection:proxyHTMLCollection`)
        return bodavm.memory.cache['Element_getElementsByTagName'][tagName]['res'];
    };

    bodavm.envFunc.HTMLFormElement_action_set = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let arg = arguments[0];
        let thisNode = bodavm.toolsFunc.getProtoAttr(this) ? bodavm.toolsFunc.getProtoAttr(this) : bodavm.toolsFunc.getProtoAttr.call(this, this);
        boda$(thisNode).attr('action', arg)
        // debugger
        console.log_copy(`HTMLFormElement_action_set arg->`, arg);
    };
    bodavm.envFunc.HTMLAllCollection_length_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger;
        let len = bodavm.memory.all.length;
        console.log_copy(`HTMLAllCollection_length_get 长度-->`, len);
        return len;
    };
    bodavm.envFunc.HTMLElement_innerText_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        for (let input of bodavm.memory.form) {
            for (let key in input) {
                if (input[key] === 'innerText') {
                    console.log_copy(`HTMLElement_innerText_get ->`, input['this'])
                    return input['this'];
                }
            }
        }
        ;

    };
    bodavm.envFunc.HTMLInputElement_name_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        debugger
        let thisNode = bodavm.toolsFunc.getProtoAttr(this) ? bodavm.toolsFunc.getProtoAttr(this) : bodavm.toolsFunc.getProtoAttr.call(this, this);
        let res = boda$(thisNode).attr('name')
        // debugger
        console.log_copy(`HTMLInputElement_name_get  res->`, res);
        return res
    };
    bodavm.envFunc.Element_id_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        let thisNode = bodavm.toolsFunc.getProtoAttr(this) ? bodavm.toolsFunc.getProtoAttr(this) : bodavm.toolsFunc.getProtoAttr.call(this, this);

        if (this instanceof HTMLFormElement) {
            for (let input of bodavm.memory.form) {
                for (let key in input) {
                    if (input[key] === 'id') {
                        console.log_copy(`Element_id_get ->`, input['this'])
                        return input['this'];
                    }
                }
            }
        }
        let id_ = boda$(thisNode).attr('id')

        console.log_copy(`Element_id_get id->`, id_)

        return id_
    };
    bodavm.envFunc.Node_textContent_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        for (let input of bodavm.memory.form) {
            for (let key in input) {
                if (input[key] === 'textContent') {
                    console.log_copy(`Node_textContent_get ->`, input['this'])
                    return input['this'];
                }
            }
        }

    };
    bodavm.envFunc.HTMLFormElement_action_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        for (let input of bodavm.memory.form) {
            for (let key in input) {
                if (input[key] === 'action') {
                    // debugger
                    console.log_copy(`HTMLFormElement_action_get ->`, input['this'])
                    return input['this'];
                }
            }
        }
        ;
        // debugger
    };
    bodavm.envFunc.HTMLInputElement_type_set = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        let arg = arguments[0];
        let thisNode = bodavm.toolsFunc.getProtoAttr(this) ? bodavm.toolsFunc.getProtoAttr(this) : bodavm.toolsFunc.getProtoAttr.call(this, this);
        boda$(thisNode).attr('type', arg)
        // debugger
        let isForm = 0
        if (this instanceof HTMLInputElement) {
            for (let inp of bodavm.memory.form) {
                if (inp['this'] == this) {
                    inp['type'] = arg
                    isForm = 1
                    break
                }
            }
            if (isForm == 0) {
                let _id = { 'this': this, 'type': arg }
                bodavm.memory.form.push(_id)
            }

        }
        console.log_copy(`HTMLInputElement_type_set arg->`, arg);
    };
    bodavm.envFunc.HTMLInputElement_name_set = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        let arg = arguments[0];
        let thisNode = bodavm.toolsFunc.getProtoAttr(this) ? bodavm.toolsFunc.getProtoAttr(this) : bodavm.toolsFunc.getProtoAttr.call(this, this);
        boda$(thisNode).attr('name', arg)
        // debugger
        let isForm = 0
        if (this instanceof HTMLInputElement) {
            for (let inp of bodavm.memory.form) {
                if (inp['this'] == this) {
                    inp['name'] = arg
                    isForm = 1
                    break
                }
            }
            if (isForm == 0) {
                let _id = { 'this': this, 'name': arg }
                bodavm.memory.form.push(_id)
            }

        }
        console.log_copy(`HTMLInputElement_name_set arg->`, arg);
        // debugger
    };
    bodavm.envFunc.HTMLAllCollection_item = function () {
        // debugger
        let item_ = arguments[0]
        let res = bodavm.memory.all[item_]
        console.log_copy(`HTMLAllCollection_item res->`, res)
        return res
    }
    bodavm.envFunc.Element_id_set = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        let arg = arguments[0];
        let thisNode = bodavm.toolsFunc.getProtoAttr(this) ? bodavm.toolsFunc.getProtoAttr(this) : bodavm.toolsFunc.getProtoAttr.call(this, this);
        boda$(thisNode).attr('id', arg);
        // debugger

        let isForm = 0
        if (this instanceof HTMLInputElement) {
            for (let inp of bodavm.memory.form) {
                if (inp['this'] == this) {
                    inp['id'] = arg
                    isForm = 1
                    break
                }
            }
            if (isForm == 0) {
                let _id = { 'this': this, 'id': arg }
                bodavm.memory.form.push(_id)
            }

        }
        console.log_copy(`Element_id_set id->`, arg);

        return arguments[0];
    };

    bodavm.envFunc.Document_visibilityState_get = function Document_visibilityState_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        console.log_copy("Document_visibilityState_get  未完善 visibilitychange事件来监听文档的可见性", 'visible');
        return 'visible';
    };


    bodavm.envFunc.Document_createExpression = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        let xpath = new XPathExpression('bobo');
        console.log_copy(`Document_createExpression `, `res ->${xpath}`);
        return xpath;
    };

    bodavm.envFunc.MutationObserver_observe = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        let arg = arguments[0];
        if (!arg) {
            return bodavm.toolsFunc.throwError("TypeError", `Failed to execute 'observe' on 'MutationObserver': 1 argument required, but only 0 present.`);
        }
        if (!arg instanceof Node) {
            return bodavm.toolsFunc.throwError("TypeError", `Failed to execute 'observe' on 'MutationObserver': parameter 1 is not of type 'Node'.`);
        }
        console.log_copy(`MutationObserver_observe 未完善 arg->`, arguments[0], ` -> arg1 ->`, JSON.stringify_bo(arguments[1]));
    };




    bodavm.envFunc.HTMLAnchorElement_origin_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let res = bodavm.memory.HTMLAnchorElement['origin'];
        console.log_copy(`HTMLAnchorElement_origin_get `, `arg ->${res}`);
        return res;
    };

    bodavm.envFunc.HTMLAnchorElement_hash_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let res = bodavm.memory.HTMLAnchorElement['hash'];
        console.log_copy(`HTMLAnchorElement_hash_get `, `arg ->${res}`);
        return res;
    };
    bodavm.envFunc.HTMLAnchorElement_search_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let res = bodavm.memory.HTMLAnchorElement['search'];
        console.log_copy(`HTMLAnchorElement_search_get `, `arg ->${res}`);
        return res;
    };


    bodavm.envFunc.HTMLAnchorElement_pathname_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let res = bodavm.memory.HTMLAnchorElement['pathname'];
        console.log_copy(`HTMLAnchorElement_pathname_get `, `arg ->${res}`);
        return res;
    };
    bodavm.envFunc.HTMLAnchorElement_port_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let res = bodavm.memory.HTMLAnchorElement['port'];
        console.log_copy(`HTMLAnchorElement_port_get `, `arg ->${res}`);
        return res;
    };
    bodavm.envFunc.HTMLAnchorElement_hostname_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let res = bodavm.memory.HTMLAnchorElement['hostname'];
        console.log_copy(`HTMLAnchorElement_hostname_get `, `arg ->${res}`);
        return res;
    };
    bodavm.envFunc.HTMLAnchorElement_protocol_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let res = bodavm.memory.HTMLAnchorElement['protocol'];
        console.log_copy(`HTMLAnchorElement_protocol_get `, `arg ->${res}`);
        return res;
    };
    bodavm.envFunc.HTMLAnchorElement_href_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let res = bodavm.memory.HTMLAnchorElement['href'];
        console.log_copy(`HTMLAnchorElement_href_get `, `arg ->${res}`);
        return res;
    };
    bodavm.envFunc.HTMLAnchorElement_href_set = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let arg = arguments[0];
        // bodavm.memory.HTMLAnchorElement['href']=arg
        let urls = new bodaParserURL(arg);
        for (let ele in bodavm.memory.HTMLAnchorElement) {
            bodavm.memory.HTMLAnchorElement[ele] = urls[ele];
        }
        // debugger

        console.log_copy(`HTMLAnchorElement_href_set `, `arg ->${arg}`);
        return arg;
    };
    bodavm.envFunc.HTMLAnchorElement_toString = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        let res = bodavm.memory.HTMLAnchorElement['href'].toString();
        console.log_copy(`HTMLAnchorElement_toString `, `res ->${res}`);
        return res;
    };



    bodavm.envFunc.Document_hidden_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let res = bodavm.memory.document['hidden'];
        console.log_copy(`Document_hidden_get `, `res ->${res}  ,未完善,可以监听visibilitychange事件来捕获文档的可见性变化`);
        return res;
    };


    bodavm.envFunc.IDBRequest_onsuccess_set = function IDBRequest_onsuccess_set() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let onsuccess = arguments[0];
        bodavm.memory.IDBRequest['onsuccess'] = onsuccess;
        console.log_copy(`IDBRequest_onsuccess_set `, `${onsuccess} `, `!!!!!!!!!未完善!!!!!!!!!!!!  `);
        if (bodavm.config.isdebug) {
            debugger;
        }
        return onsuccess;
    };
    bodavm.envFunc.IDBRequest_onsuccess_get = function IDBRequest_onsuccess_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let onsuccess = bodavm.memory.IDBRequest['onsuccess'] ? bodavm.memory.IDBRequest['onsuccess'] : undefined;
        console.log_copy(`IDBRequest_onsuccess_get `, `${onsuccess} `, `!!!!!!!!!未完善!!!!!!!!!!!!  `);
        if (bodavm.config.isdebug) {
            debugger;
        }
        return onsuccess;
    };
    bodavm.envFunc.IDBRequest_onerror_get = function IDBRequest_onerror_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let onerror = bodavm.memory.IDBRequest['onerror'] ? bodavm.memory.IDBRequest['onerror'] : undefined;
        console.log_copy(`IDBRequest_onerror_get `, `${onerror} `, `!!!!!!!!!未完善!!!!!!!!!!!!  `);
        if (bodavm.config.isdebug) {
            debugger;
        }
        return onerror;
    };
    bodavm.envFunc.IDBOpenDBRequest_onupgradeneeded_set = function IDBOpenDBRequest_onupgradeneeded_set() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let onupgradeneeded = arguments[0];
        bodavm.memory.IDBOpenDBRequest['onupgradeneeded'] = onupgradeneeded;
        console.log_copy(`IDBOpenDBRequest_onupgradeneeded_set `, `${onupgradeneeded} `, `!!!!!!!!!未完善!!!!!!!!!!!!  `);
        if (bodavm.config.isdebug) {
            debugger;
        }
        return onupgradeneeded;
    };
    bodavm.envFunc.IDBRequest_onerror_set = function IDBRequest_onerror_set() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let onerror = arguments[0];
        bodavm.memory.IDBRequest['onerror'] = onerror;
        console.log_copy(`IDBRequest_onerror_set `, `${onerror} `, `!!!!!!!!!未完善!!!!!!!!!!!!  `);
        if (bodavm.config.isdebug) {
            debugger;
        }
        return onerror;
    };
    bodavm.envFunc.IDBFactory_open = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let name = arguments[0];
        let version = arguments[1];
        let DB = new IDBOpenDBRequest("bobo");
        if (bodavm.config.isdebug) {
            debugger;
        }
        console.log_copy(`IDBFactory_open `, `name->${name} `, `version->${version} ->`, `res ->`, DB);
        return DB;
    };



    bodavm.envFunc.Node_parentNode_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger  缺少条件判断
        if (bodavm.memory.cache["Node_parentNode_get"]['this'] == this) {
            let cacheValue = bodavm.memory.cache["Node_parentNode_get"]['res'];
            console.log_copy(`Node_parentNode_get 已存在,直接从cache中取值`, 'res- >', cacheValue);
            return cacheValue;
        }
        let thisNode = bodavm.toolsFunc.getProtoAttr(this) ? bodavm.toolsFunc.getProtoAttr(this) : bodavm.toolsFunc.getProtoAttr.call(this, this);
        // debugger
        if (thisNode.name == 'html') {
            console.log_copy(this, `-> Node_parentNode_get `, 'res- > document');

            return document
        }
        let parentNode = boda$(thisNode).parent()[0]
        let isliveNode=bodavm.toolsFunc.getProtoAttr.call(parentNode,parentNode)
        let newNode=null
        if (isliveNode){
            newNode=isliveNode
        }else{
            newNode = bodavm.toolsFunc.setProto(parentNode.name);
            bodavm.toolsFunc.setProtoAttr.call(parentNode,parentNode,newNode)
        }
        bodavm.memory.cache["Node_parentNode_get"]['res'] = newNode;
        bodavm.memory.cache["Node_parentNode_get"]['this'] = this;
        // bodavm.memory.cache["Node_parentNode_get"]['ele'] = this;
        bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, parentNode);
        console.log_copy(`Node_parentNode_get res->`, newNode);
        return newNode;
    };

    bodavm.envFunc.Document_head_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        if (bodavm.memory.cache['Document_head_get']['res']) {
            console.log_copy(`Document_head_get -> `, `res -> cache中获取`);

            return bodavm.memory.cache['Document_head_get']['res']
        }
        let _head = null
        if (bodavm.memory.domDocument['head']) {
            _head = boda$('head')
        }
        // let head =chiero('head');

        if (_head) {
            let headValue = new HTMLHeadElement('bobo');
            bodavm.toolsFunc.setProtoAttr.call(headValue, headValue, _head);
            bodavm.memory.cache['Document_head_get']['res'] = headValue;
            console.log_copy(`Document_head_get -> `, `res -> `, headValue);
            return headValue;
        } else {
            console.log_copy(`Document_head_get 结果为null 需要注意!!!!!`);
        }
    };
    bodavm.envFunc.Document_body_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        let domParserbody = bodavm.memory.domDocument['body']
        if (!domParserbody) {
            console.log_copy(`Document_body_get ->`, `res->`, null);
            return null;
        }
        if (bodavm.memory.cache['Document_body_get']['res']) {
            // console.log_copy(`Document_body_get 已存在缓存,直接获取`);
            return bodavm.memory.cache['Document_body_get']['res'];
        }
        // let body = {}
        // body.__proto__ = HTMLBodyElement.prototype;
        let body = new HTMLBodyElement('bobo');
        domParserbody = bodavm.memory.domDocument['body'][0]
        bodavm.toolsFunc.setProtoAttr.call(body, body, domParserbody);
        // bodavm.memory.cache['Document_body_get']['this'] = this;
        bodavm.memory.cache['Document_body_get']['res'] = body;
        // bodavm.memory.cache['Document_body_get']['domParserbody'] = domParserbody;
        console.log_copy(`Document_body_get ->`, `res->`, body);
        return body;
    };
    bodavm.envFunc.Document_createElement = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let arg = arguments[0];
        // res={}
        if (typeof arg !== 'string') {
            return bodavm.toolsFunc.throwError('DOMException', `Failed to execute 'createElement' on 'Document': The tag name provided ('${arguments[0]}') is not a valid name.`)
        }
        let res = bodavm.toolsFunc.setProto(arg);
        let ele = ''
        switch (arg.toLowerCase()) {
            case "audio":
                ele = boda$('<audio></audio>')
                break;
            case 'video':
                ele = boda$('<video></video>')
                break
            case "iframe":
                ele = boda$('<iframe></iframe>')
                // debugger
                break
            case "fake":
                ele = boda$('<fake></fake>')
                break
            case "canvas":
                ele = boda$('<canvas>')
                break
            case "b":
                ele = boda$('<b></b>')
                break
            case 'style':
                ele = boda$('<style></style>')
                break
            case 'div':
                ele = boda$('<div></div>');
                break;
            case 'p':
                ele = boda$('<p></p>');
                break;
            case 'img':
                ele = boda$('<img>');
                break;
            case 'a':
                ele = boda$('<a></a>');
                break;
            case 'span':
                ele = boda$('<span></span>');
                break;
            case 'h1':
                ele = boda$('<h1></h1>');
                break;
            case 'h2':
                ele = boda$('<h2></h2>');
                break;
            case 'h3':
                ele = boda$('<h3></h3>');
                break;
            case 'h4':
                ele = boda$('<h4></h4>');
                break;
            case 'h5':
                ele = boda$('<h5></h5>');
                break;
            case 'h6':
                ele = boda$('<h6></h6>');
                break;
            case 'ul':
                ele = boda$('<ul></ul>');
                break;
            case 'ol':
                ele = boda$('<ol></ol>');
                break;
            case 'li':
                ele = boda$('<li></li>');
                break;
            case 'table':
                ele = boda$('<table></table>');
                break;
            case 'tr':
                ele = boda$('<tr></tr>');
                break;
            case 'td':
                ele = boda$('<td></td>');
                break;
            case 'th':
                ele = boda$('<th></th>');
                break;
            case 'form':
                ele = boda$('<form></form>');
                debugger
                break;
            case 'input':
                ele = boda$('<input>');
                break;
            case 'button':
                ele = boda$('<button></button>');
                break;
            case 'select':
                ele = boda$('<select></select>');
                break;
            case 'option':
                ele = boda$('<option></option>');
                break;
            case 'textarea':
                ele = boda$('<textarea></textarea>');
                break;
            case 'label':
                ele = boda$('<label></label>');
                break;
            case 'fieldset':
                ele = boda$('<fieldset></fieldset>');
                break;
            case 'legend':
                ele = boda$('<legend></legend>');
                break;
            case 'script':
                ele = boda$('<script></script>');
                break;
            default:
                console.log_copy('Document_createElement 错误!!!标签未实现-->', arg);
        }
        bodavm.toolsFunc.setProtoAttr.call(ele[0],ele[0],res)
        // debugger
        // res = bodavm.toolsFunc.proxy2(res, arg + ':proxy2')
        bodavm.toolsFunc.setProtoAttr.call(res, res, ele[0]);
        console.log_copy(`Document_createElement arg->`, arg, ' -> res->', res);
        // debugger
        return res;
    };


    bodavm.envFunc.Document_lastModified_get = function Document_lastModified_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let date = new Date();
        let month = date.getMonth() + 1;
        month = month > 11 ? month : '0' + month;
        let day = date.getDate();
        let year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let time = `${month}/${day}/${year} ${hours}->${minutes}->${seconds}`;
        console.log_copy(`Document_lastModified_get `, `${time}  `);
        return time;
    };
    bodavm.envFunc.HTMLCanvasElement_getContext = function () {
        // debugger
        let type = arguments[0]
        if (bodavm.config.isdebug) { debugger }
        let context = null
        switch (type) {
            case "2d":
                context = new CanvasRenderingContext2D('bobo')
                bodavm.toolsFunc.setProtoAttr.call(this, 'getContext', type)
                bodavm.toolsFunc.setProtoAttr.call(this, 'context', context)

                console.log_copy(`HTMLCanvasElement_getContext `, `type->${type} `, `-> res -> ${context}`)
                break
            case "webgl":
                // context = context.getContext('2d')
                context = new WebGLRenderingContext('bobo')

                bodavm.toolsFunc.setProtoAttr.call(this, 'getContext', type)
                bodavm.toolsFunc.setProtoAttr.call(this, 'context', context)
                bodavm.toolsFunc.setProtoAttr.call(context, 'canvas', this)

                console.log_copy(`HTMLCanvasElement_getContext `, `type->${type} `, `-> res -> ${context}`)
                break
            case "webgl2":
                // context = context.getContext('2d')
                context = new WebGL2RenderingContext('bobo')
                bodavm.toolsFunc.setProtoAttr.call(this, 'getContext', type)
                bodavm.toolsFunc.setProtoAttr.call(this, 'context', context)
                bodavm.toolsFunc.setProtoAttr.call(context, 'canvas', this)

                console.log_copy(`HTMLCanvasElement_getContext `, `type->${type} `, `-> res -> ${context}`)
                break
            case 'experimental-webgl':
                context = new WebGLRenderingContext('bobo')
                bodavm.toolsFunc.setProtoAttr.call(this, 'getContext', type)
                bodavm.toolsFunc.setProtoAttr.call(this, 'context', context)

                console.log_copy(`HTMLCanvasElement_getContext `, `type->${type} `, `context->${context} !!!!!!!!!未完善!!!!!!!!!!!! `)
                // bodavm.toolsFunc.setProtoAttr.call(context, "canvas", this);
                // bodavm.toolsFunc.setProtoAttr.call(this, "type", type);
                break
            default:
                console.log_copy(`HTMLCanvasElement_getContext ->`, `错误${type}属性未实现  `)
                break
        }
        return context

    }
    bodavm.envFunc.HTMLCanvasElement_width_set = function () {
        let arg = arguments[0]
        bodavm.toolsFunc.setProtoAttr.call(this, 'width', arg)
        console.log_copy(`HTMLCanvasElement_width_set width ->`, arg)
        return arg
    }
    bodavm.envFunc.HTMLCanvasElement_height_set = function () {
        let arg = arguments[0]
        bodavm.toolsFunc.setProtoAttr.call(this, 'height', arg)
        console.log_copy(`HTMLCanvasElement_height_set height ->`, arg)
        return arg
    }

    bodavm.envFunc.isTrusted_isTrusted_get = function () {
        // debugger
        console.log_copy(this + '', ` 正在获取 isTrusted属性 返回true`)
        return true
    }
    bodavm.envFunc.Event_timeStamp_get = function () {
        let times = bodavm.toolsFunc.getProtoAttr.call(this, 'times')
        console.log_copy('Event_timeStamp_get  res->', times)

        return times
    }
    bodavm.envFunc.MouseEvent_button_get = function () {
        let button = bodavm.toolsFunc.getProtoAttr.call(this, 'button')
        console.log_copy('MouseEvent_button_get  res->', button)

        return button
    }
    bodavm.envFunc.MouseEvent_screenX_get = function () {
        let screenx = bodavm.toolsFunc.getProtoAttr.call(this, 'screenx')
        console.log_copy('MouseEvent_screenX_get  res->', screenx)

        return screenx
    }
    bodavm.envFunc.MouseEvent_screenY_get = function () {
        let screeny = bodavm.toolsFunc.getProtoAttr.call(this, 'screeny')
        console.log_copy('MouseEvent_screenY_get  res->', screeny)

        return screeny
    }
    bodavm.envFunc.MouseEvent_clientY_get = function () {
        // debugger
        let Y_ = bodavm.toolsFunc.getProtoAttr.call(this, 'clientY')
        console.log_copy('MouseEvent_clientY_get  res->', Y_)

        return Y_

    }
    bodavm.envFunc.MouseEvent_clientX_get = function () {
        // debugger
        let X_ = bodavm.toolsFunc.getProtoAttr.call(this, 'clientX')
        console.log_copy('MouseEvent_clientX_get  res->', X_)
        return X_
    }
    bodavm.envFunc.Event_type_get = function () {
        // debugger
        let type_ = bodavm.toolsFunc.getProtoAttr.call(this, this)
        console.log_copy(`Event_type_get res ->`, type_)
        return type_
    }

    bodavm.envFunc.HTMLCanvasElement_toDataURL = function () {
        // debugger
        let canvasType = bodavm.toolsFunc.getProtoAttr.call(this, 'getContext')
        if (canvasType == '2d') {
            let ddres = "data:image/png;base64,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AIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGAIUlTaoYKAmQAIXFGiABEpCGwP8D0X2eD5sOjPUAAAAASUVORK5CYII="


            console.log_copy(`HTMLCanvasElement_toDataURL -> 2d res ->`, ddres)
            return ddres
        }

        else {
            let webglres = 'data:image/png;base64,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'

            console.log_copy(`HTMLCanvasElement_toDataURL -> webgl res ->`, webglres)

            return webglres
        }
    }
    bodavm.envFunc.Document_readyState_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        if (!bodavm.memory.domParserScriptFlag) {
            let stateValue = 'loading';
            console.log_copy(`Document_readyState_get ->res`, `-> loading  需要注意`);
            return stateValue;
        }
        console.log_copy(`Document_readyState_get ->res`, `-> interactive 需要注意`);
        return 'interactive';
    };

    bodavm.envFunc.Document_documentElement_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let ele = null;
        let cacheValue = bodavm.memory.cache['Document_documentElement_get'];
        if (cacheValue) {
            console.log_copy(`Document_documentElement_get 已存在,直接从cache中取值`, 'res- >', cacheValue);
            return cacheValue;
        }
        if (bodavm.memory.domDocument['html']) {
            ele = boda$('html').get()[0]
        }
        // debugger
        let newNode = bodavm.toolsFunc.setProto(ele.name)
        bodavm.toolsFunc.setProtoAttr.call(newNode, newNode, ele)
        bodavm.memory.cache['Document_documentElement_get'] = newNode;
        console.log_copy(`Document_documentElement_get -> `, ` -> res ->`, newNode);
        return newNode;
    };
    bodavm.envFunc.Node_contains = function () {
        let arg = arguments[0]
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        let targetNode = bodavm.toolsFunc.getProtoAttr.call(arg, arg)
        let current = targetNode;
        // debugger
        while (current) {
            if (current === thisNode) {
                console.log_copy(thisNode, ` -> Node_contains -> arg ->`, arg, `-> res -> true`);

                return true;
            }
            current = current.parent;
        }
        console.log_copy(thisNode, ` -> Node_contains -> arg ->`, arg, `-> res -> false`);

        return false;
    }

    bodavm.envFunc.Element_outerHTML_get = function () {
        // debugger
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        const innerHTML = boda$(thisNode).html();
        let outerHTML = `<${thisNode.name}`;
        Object.entries_bo(thisNode.attribs).forEach(([key, value]) => {
            outerHTML += ` ${key}="${value}"`;
        });
        outerHTML += '>';
        outerHTML += innerHTML;
        outerHTML += `</${thisNode.name}>`;
        console.log_copy(thisNode, ` -> Element_outerHTML_get -> outHtml ->`, outerHTML);
        return outerHTML
    }
    bodavm.envFunc.Element_append = function () {
        let arg = arguments[0]
        // debugger
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        let targetNode = bodavm.toolsFunc.getProtoAttr.call(arg, arg) ? bodavm.toolsFunc.getProtoAttr.call(arg, arg) : arg
        thisNode.children.push(targetNode)
        console.log_copy(this, ` -> Element_append -> arg ->`, arg);
        if (targetNode.name == 'iframe') {
            // debugger
            console.log_copy(`Element_append -> arg ->`, arguments[0], `正在往${this}中添加iframe标签`);
            window[window.length - 1] = arg.contentWindow
            if (bodavm.memory.domParserScriptFlag == false) {
                if (!bodavm.memory.domDocument[targetNode.name]) {
                    bodavm.memory.domDocument[targetNode.name] = []
                }
                bodavm.memory.domDocument[targetNode.name].push(targetNode)
                bodavm.memory.domDocument['all'].push(targetNode)
                // debugger
                //所有append元素的方法都需要添加这句话
            }
            return
        }
        if (bodavm.memory.domDocument['body'] && thisNode.name == 'head') {
            bodavm.memory.waitExec.push(targetNode)
        }
        if (bodavm.memory.domParserScriptFlag == false) {
            if (!bodavm.memory.domDocument[targetNode.name]) {
                bodavm.memory.domDocument[targetNode.name] = []
            }
            bodavm.memory.domDocument[targetNode.name].push(targetNode)
            bodavm.memory.domDocument['all'].push(targetNode)
            // debugger
            //所有append元素的方法都需要添加这句话
        }


    }
    bodavm.envFunc.Node_appendChild = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        // debugger

        ;
        let arg = arguments[0]
        // debugger
        let thisNode = bodavm.toolsFunc.getProtoAttr(this) ? bodavm.toolsFunc.getProtoAttr(this) : bodavm.toolsFunc.getProtoAttr.call(this, this);
        // let targetDom=bodavm.toolsFunc.setProto(arguments[0].nodeName)
        // bodavm.toolsFunc.setProtoAttr(targetDom,arguments[0])
        let targetNode = bodavm.toolsFunc.getProtoAttr.call(arg, arg)
        // debugger
        let attr = boda$(targetNode).attr()
        if (attr && attr['id']) {
            window.__proto__.__proto__[attr['id']] = arg
        }
        // debugger    

        boda$(thisNode).append(targetNode)
        // debugger
        if (targetNode.name == 'iframe') {
            console.log_copy(`Node_appendChild -> arg ->`, arguments[0], `正在往${this}中添加iframe标签`);
            window[window.length - 1] = arg.contentWindow
            if (bodavm.memory.domParserScriptFlag == false) {
                if (!bodavm.memory.domDocument[targetNode.name]) {
                    bodavm.memory.domDocument[targetNode.name] = []
                }
                bodavm.memory.domDocument[targetNode.name].push(targetNode)
                bodavm.memory.domDocument['all'].push(targetNode)
                // debugger
                //所有append元素的方法都需要添加这句话
            }
            return
        }
        if (bodavm.memory.domDocument['body'] && thisNode.name == 'head') {
            bodavm.memory.waitExec.push(targetNode)
        }
        // debugger
        if (bodavm.memory.domParserScriptFlag == false) {
            if (!bodavm.memory.domDocument[targetNode.name]) {
                bodavm.memory.domDocument[targetNode.name] = []
            }
            bodavm.memory.domDocument[targetNode.name].push(targetNode)
            bodavm.memory.domDocument['all'].push(targetNode)
            // debugger
            //所有append元素的方法都需要添加这句话
        }

        // debugger
        console.log_copy(this, ` -> Node_appendChild -> arg ->`, arguments[0], ` res -> `, arg);
        // debugger
        return arg
    };



    bodavm.envFunc.Element_innerHTML_set = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        // bodavm.toolsFunc.getProtoAttr
        let arg = arguments[0];
        // let thisDom=bodavm.toolsFunc.getProtoAttr(this)?bodavm.toolsFunc.getProtoAttr(this):bodavm.toolsFunc.getProtoAttr.call(this,this)
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        boda$(thisNode).html(arg)
        // debugger
        if (this instanceof HTMLStyleElement) {
            console.log_copy(this, `Element_innerHTML_set 需要注意添加的标签是否可以被解析!!!!!!!!!-->`, arg)
        }
        console.log_copy(this, ` -> Element_innerHTML_set -> arg ->`, arg);
        return arg;
    };

    bodavm.envFunc.Document_characterSet_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        let res = bodavm.memory.document['characterSet'];
        console.log_copy(`Document_characterSet_get -> res ->`, res);
        return res;
    };

    bodavm.envFunc.EventTarget_addEventListener = function EventTarget_addEventListener() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let type = arguments[0];
        let callback = arguments[1];
        let options = arguments[2];
        if (bodavm.config.isdebug) {
            debugger;
        }
        let event = {
            "type": type,
            "self": this,
            "options": options,
            "callback": callback,
            'isTrusted': true,
            'target': this,
            '_boisinit': bodavm.config.isinit
        };
        console.log_copy(`注册事件-->`, `EventTarget_addEventListener `, `type->${type} `, `callback->${callback.toString().length > 50 ? callback.toString().substr(0, 50) + '...' : callback} `, `options->${options ? options : []}  `);

        if (bodavm.memory.listenerFlag == 'init') {
            if (bodavm.memory.asyncEvent.listener === undefined) {
                bodavm.memory.asyncEvent.listener = {};
            }
            if (bodavm.memory.asyncEvent.listener[type] === undefined) {
                bodavm.memory.asyncEvent.listener[type] = [];
            }
            bodavm.memory.asyncEvent.listener[type].push(event);
        }else if(bodavm.memory.listenerFlag == 'pending'){
            bodavm.memory.innerListener.push(event)
            // debugger
        }


    };
    bodavm.envFunc.EventTarget_dispatchEvent = function EventTarget_dispatchEvent() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        if (bodavm.config.isdebug) {
            debugger;
        }
        let event = arguments[0];
        let botag = arguments[1]; //用来判断该事件是不是由我代码主动触发
        if (botag == undefined) {
            console.log_copy(`EventTarget_dispatchEvent 被网站代码主动触发`, `事件为${event.type}`);
        }
        let type = event.type;
        let isdefine = null
        switch (event.type) {
            case "deviceorientation":
                let deviceorientation = new DeviceOrientationEvent('deviceorientation', 'bob')
                isdefine = bodavm.toolsFunc.getProtoAttr.call(deviceorientation, 'isdefineProperty')
                if (!isdefine) {
                    bodavm.toolsFunc.defineProperty(deviceorientation, "isTrusted", { configurable: false, enumerable: true, get: function isTrusted() { return bodavm.toolsFunc.dispatch(this, deviceorientation, "isTrusted", "isTrusted_get", arguments) }, set: undefined });
                }
                event.callback.call(event.self, deviceorientation);
                break
            case 'click':
                // debugger
                // Object.setPrototypeOf(event, PointerEvent.prototype);
                let clickEvent = new PointerEvent('click', 'bobo')
                isdefine = bodavm.toolsFunc.getProtoAttr.call(clickEvent, 'isdefineProperty')

                let x = bodavm.memory.clickListener[0];
                let y = bodavm.memory.clickListener[1];
                if (!isdefine) {
                    bodavm.toolsFunc.defineProperty(clickEvent, "isTrusted", { configurable: false, enumerable: true, get: function isTrusted() { return bodavm.toolsFunc.dispatch(this, clickEvent, "isTrusted", "isTrusted_get", arguments) }, set: undefined });
                }
                bodavm.toolsFunc.setProtoAttr.call(clickEvent, 'clientX', x)
                bodavm.toolsFunc.setProtoAttr.call(clickEvent, 'clientY', y)
                bodavm.toolsFunc.setProtoAttr.call(clickEvent, 'isdefineProperty', 1)

                event.callback.call(event.self, clickEvent);
                break;
            case 'load':
                // debugger
                let loadEvent = new Event('load', 'bobo')
                isdefine = bodavm.toolsFunc.getProtoAttr.call(loadEvent, 'isdefineProperty')
                if (!isdefine) {
                    bodavm.toolsFunc.defineProperty(loadEvent, "isTrusted", { configurable: false, enumerable: true, get: function isTrusted() { return bodavm.toolsFunc.dispatch(this, loadEvent, "isTrusted", "isTrusted_get", arguments) }, set: undefined });
                }
                bodavm.toolsFunc.setProtoAttr.call(loadEvent, 'isdefineProperty', 1)
                event.callback.call(event.self, loadEvent);
                break;
            case 'mousemove':
                let mouseMove_ = new MouseEvent('mousemove', 'bobo')
                isdefine = bodavm.toolsFunc.getProtoAttr.call(mouseMove_, 'isdefineProperty')
                if (!isdefine) {
                    bodavm.toolsFunc.defineProperty(mouseMove_, "isTrusted", { configurable: false, enumerable: true, get: function isTrusted() { return bodavm.toolsFunc.dispatch(this, mouseMove_, "isTrusted", "isTrusted_get", arguments) }, set: undefined });
                }
                bodavm.toolsFunc.setProtoAttr.call(mouseMove_, 'isdefineProperty', 1)
                for (let ind = 0; ind < bodavm.memory.mousemoveListener.length; ind++) {
                    let x = bodavm.memory.mousemoveListener[ind]['x'];
                    let y = bodavm.memory.mousemoveListener[ind]['y'];
                    let screenx = bodavm.memory.mousemoveListener[ind]['screenx'];

                    let screeny = bodavm.memory.mousemoveListener[ind]['screeny'];
                    let times = bodavm.memory.mousemoveListener[ind]['times'];
                    let button = bodavm.memory.mousemoveListener[ind]['button'];
                    bodavm.toolsFunc.setProtoAttr.call(mouseMove_, 'clientX', x)
                    bodavm.toolsFunc.setProtoAttr.call(mouseMove_, 'clientY', y)

                    bodavm.toolsFunc.setProtoAttr.call(mouseMove_, 'screenx', screenx)
                    bodavm.toolsFunc.setProtoAttr.call(mouseMove_, 'screeny', screeny)
                    bodavm.toolsFunc.setProtoAttr.call(mouseMove_, 'times', times)
                    bodavm.toolsFunc.setProtoAttr.call(mouseMove_, 'button', button)
                    // bodavm.toolsFunc.setProtoAttr.call(mouseMove_,'boboListener',1)
                    event.callback.call(event.self, mouseMove_);
                }
                break;
            case 'mousedown':
                let mouseDown_=new MouseEvent('mousedown','bobo')
                isdefine = bodavm.toolsFunc.getProtoAttr.call(mouseDown_, 'isdefineProperty')
                if (!isdefine) {
                    bodavm.toolsFunc.defineProperty(mouseDown_, "isTrusted", { configurable: false, enumerable: true, get: function isTrusted() { return bodavm.toolsFunc.dispatch(this, mouseDown_, "isTrusted", "isTrusted_get", arguments) }, set: undefined });
                }
                event.callback.call(event.self, mouseDown_);
                bodavm.toolsFunc.setProtoAttr.call(mouseDown_, 'isdefineProperty', 1)
                break;
            case 'mouseup':
                let mouseUp_=new MouseEvent('mouseup','bobo')
                isdefine = bodavm.toolsFunc.getProtoAttr.call(mouseUp_, 'isdefineProperty')
                if (!isdefine) {
                    bodavm.toolsFunc.defineProperty(mouseUp_, "isTrusted", { configurable: false, enumerable: true, get: function isTrusted() { return bodavm.toolsFunc.dispatch(this, mouseUp_, "isTrusted", "isTrusted_get", arguments) }, set: undefined });
                }
                event.callback.call(event.self, mouseUp_);
                bodavm.toolsFunc.setProtoAttr.call(mouseUp_, 'isdefineProperty', 1)
                break;
            default:
                //无需实现的事件unload  popstate
                console.log_copy(`EventTarget_dispatchEvent `, `${event.type} 未实现`);
        }
        // debugger
        // console.log_copy(`EventTarget_dispatchEvent  `, `event->${event}`,` type->${type}`);
    };
    bodavm.envFunc.EventTarget_removeEventListener = function EventTarget_removeEventListener() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        if (bodavm.config.isdebug) {
            debugger;
        }
        let type = arguments[0];
        let callback = arguments[1];
        // debugger

        for (let i = 0; i < bodavm.memory.asyncEvent.listener[type].length; i++) {
            if (bodavm.memory.asyncEvent.listener[type][i].callback == callback) {
                console.log_copy(`EventTarget_removeEventListener  `, `type->${type}`, `callback->${callback}`);
                bodavm.memory.asyncEvent.listener[type].splice(i, 1);
                break;
            }
        }
        

    };
    bodavm.envFunc.Document_hasFocus = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        console.log_copy(`Document_hasFocus ->`, `当前页面有没有获取焦点,默认返回true`);
        return true;
    };


    bodavm.envFunc.HTMLMediaElement_canPlayType = function HTMLMediaElement_canPlayType() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        let canplaytype = arguments[0];
        let res = '';
        switch (canplaytype) {
            case 'audio/ogg; codecs="vorbis"':
                res = 'probably';
                break;
            case 'audio/wav; codecs="1"':
                res = 'probably';
                break;
            case "audio/mpeg;":
                res = 'probably';
                break;
            case "audio/x-m4a;audio/aac;":
                res = 'maybe';
                break;
            case 'video/ogg; codecs="theora"':
                res = 'probably';
                break;
            case 'video/mp4; codecs="avc1.42E01E"':
                res = 'probably';
                break;
            case 'video/webm; codecs="vp8, vorbis"':
                res = 'probably';
                break;
            case 'video/mp4; codecs="mp4v.20.8, mp4a.40.2"':
                res = '';
                break;
            case 'video/mp4; codecs="mp4v.20.240, mp4a.40.2"':
                res = '';
                break;
            case 'video/x-matroska; codecs="theora, vorbis"':
                res = '';
                break;
            case 'audio/3gpp':
                res = ''
                break
            case 'audio/3gpp2':
                res = ''
                break
            case 'audio/AMR-NB':
                res = ''
                break
            case 'audio/AMR-WB':
                res = ''
                break
            case 'audio/GSM':
                res = ''
                break
            case 'audio/aac':
                res = 'probably'
                break
            case 'audio/basic':
                res = ''
                break
            case 'audio/flac':
                res = 'probably'
                break
            case 'audio/midi':
                res = ''
                break
            case 'audio/mpeg':
                res = 'probably'
                break
            case 'audio/mp4; codecs="mp4a.40.2"':
                res = 'probably'
                break
            case 'audio/mp4; codecs="ac-3"':
                res = ''
                break
            case 'audio/mp4; codecs="ec-3"':
                res = ''
                break
            case 'audio/ogg; codecs="flac"':
                res = 'probably'
                break
            case 'audio/ogg; codecs="opus"':
                res = 'probably'
                break
            case 'audio/webm; codecs="vorbis"':
                res = 'probably'
                break
            case 'audio/x-aiff':
                res = ''
                break
            case 'audio/x-mpegurl':
                res = ''
                break
            case 'video/mp4; codecs="flac"':
                res = 'probably'
                break
            case 'video/mp4; codecs="H.264, mp3"':
                res = ''
                break
            case 'video/mp4; codecs="H.264, aac"':
                res = ''
                break
            case 'video/mpeg; codec="H.264"':
                res = ''
                break
            case 'video/ogg; codecs="opus"':
                res = 'probably'
                break
            case 'video/webm; codecs="vp9, opus"':
                res = 'probably'
                break
            case 'audio/webm; codecs="opus"':
                res = 'probably'
                break
            default:
                console.log_copy(`HTMLMediaElement_canPlayType `, `canplaytype->${canplaytype}未实现 !!!!!!!!!`);
        }
        console.log_copy(`HTMLMediaElement_canPlayType `, `canplaytype ->${canplaytype}`, `-> res ->${res}`);
        return res;
    };

    bodavm.envFunc.Document_createEvent = function Document_createEvent() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        let arg = arguments[0].toUpperCase();
        let event = {};
        switch (arg) {
            case 'MOUSEEVENT':
                event = new MouseEvent('bobo');
                console.log_copy(`Document_createEvent `, event);
                bodavm.toolsFunc.symbolProperty(event);
                return event;
            case 'EVENT':
                event = new Event('bobo');
                console.log_copy(`Document_createEvent `, event);
                bodavm.toolsFunc.symbolProperty(event);
                return event;
            case "TOUCHEVENT":
                console.log_copy(`Document_createEvent  `, event, `   该事件只有在触摸平面（触摸屏、触摸板等）才会触发`);
                return bodavm.toolsFunc.throwError('DOMException', `Failed to execute 'createEvent'on 'Document': The provided event type ('TouchEvent') is invalid.`);
            default:
                console.log_copy(`Document_createEvent  `, `${arg}  未实现`);
        }
    };
    bodavm.envFunc.Document_cookie_get = function Document_cookie_get() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        // debugger
        if (this._boContentWindow) {
            console.log_copy(`iframe下的document获取cookie,直接返回''`);
            return '';
        }
        let jsonCookie = bodavm.memory.globalInit.jsonCookie;
        let tempCookie = "";
        // debugger
        let flag = 0
        let fenhao = ''
        for (var key in jsonCookie) {

            // if (key == 'hasOwnProperty_bo') {
            //   continue;
            // }
            if (flag > 0) {
                fenhao = '; '
            }
            if (key === "") {
                flag = +1
                tempCookie += `${fenhao}${jsonCookie[key]}`;
            } else {
                flag = +1

                tempCookie += `${fenhao}${key}=${jsonCookie[key]}`;
            }
        }
        // cookie=bodaobj.document.cookie
        console.log_copy(`Document_cookie_get `, `cookie -> ${tempCookie}`);
        return tempCookie;
    };
    bodavm.envFunc.Document_cookie_set = function Document_cookie_set() {
        if (bodavm.config.isdebug) {
            debugger;
        }
        // debugger
        ;
        if (this._boContentWindow) {
            console.log_copy(`iframe下的document设置cookie,直接返回''`);
            return '';
        }
        let cookieValue = arguments[0];
        // debugger
        let cookieSplit = cookieValue.split(';')
        let expiresTime = null
        for (let co = 0; co < cookieSplit.length; co++) {
            let expiresIndex = cookieSplit[co].indexOf('expires')
            // debugger.;
            if (expiresIndex != -1) {
                expiresTime = cookieSplit[co].split('=')[1]
            }
        }
        let index = cookieValue.indexOf(";");
        if (index !== -1) {
            cookieValue = cookieValue.substring(0, index);
        }
        if (expiresTime) {
            // debugger
            let ex1Time = new Date(expiresTime).getTime()
            let curTime = new Date().getTime()
            if (ex1Time < curTime) {
                let item = cookieValue.split("=");
                let k = item[0].trim();
                // let v = item[1].trim();
                if (bodavm.memory.globalInit.jsonCookie[k]) {
                    delete bodavm.memory.globalInit.jsonCookie[k]
                }
                console.log_copy(`Document_cookie_set -> arg -> `, arguments[0], `过期时间小于当前时间,不进行设置并且重置已有cookie`);
                console.log_copy(`当前cookie 为 ->`, document.cookie)
                return arguments[0];
            }
        }

        if (cookieValue.indexOf("=") === -1) {
            bodavm.memory.globalInit.jsonCookie[""] = cookieValue.trim();
        } else {
            let item = cookieValue.split("=");
            let k = item[0].trim();
            let v = item[1].trim();
            bodavm.memory.globalInit.jsonCookie[k] = v;
        }
        // bodaobj.document.cookie=cookieValue
        console.log_copy(`Document_cookie_set -> arg -> `, arguments[0]),
            console.log_copy(`Document_cookie_set -> -> 过期时间 -> `, expiresTime),
            console.log_copy(`Document_cookie_set -> -> cookieValue -> `, cookieValue),
            console.log_copy(`当前cookie 为 ->`, document.cookie)
        return arguments[0];;
    };

    bodavm.envFunc.document_location_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        ;
        console.log_copy(`document_location_get res ->location`);
        return bodavm.memory.cache['location'];
    };

    bodavm.envFunc.HTMLElement_style_get = function () {
        if (bodavm.config.isdebug) {
            debugger;
        }
        // debugger
        let islive = bodavm.toolsFunc.getProtoAttr.call(this, 'style')
        if (islive) {
            console.log_copy(this, ` -> HTMLElement_style_get  已存在直接返回`,);
            return islive
        }
        let thisNode=bodavm.toolsFunc.getProtoAttr.call(this,this)
        
        let _style = bodavm.memory.notDefined['CSSStyleDeclaration']
        // debugger
       
        _style = bodavm.toolsFunc.proxyHelper(_style, 'CSSStyleDeclaration::proxyHelper')

        bodavm.toolsFunc.setProtoAttr.call(this, 'style', _style);
        bodavm.toolsFunc.setProtoAttr.call(_style, _style, thisNode);
        console.log_copy(this, ` ->HTMLElement_style_get res->`, _style);
        return _style;
    };
    bodavm.envFunc.HTMLElement_offsetWidth_get = function () {
        debugger
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this) ? bodavm.toolsFunc.getProtoAttr.call(this, this) : bodavm.toolsFunc.getProtoAttr(this)

        let thisNodeStyle = ''
        thisNodeStyle = boda$(thisNode).attr('style')

        let fontFamily = this.style.fontFamily
        if (!fontFamily) {
            let fontFamilylist = thisNodeStyle.split(';')
            for (let fontList of fontFamilylist) {
                if (fontList.indexOf('font-family') != -1) {
                    fontFamily = fontList.split(':')[1].trim()
                    break
                }
            }
        }
        if (!fontFamily) {
            console.log_copy(this, ` -> HTMLElement_offsetWidth_get thisNodeStyle 未获取到直接返回0  `)
            return 0
        }
        if (fontFamily == ' 72px') { debugger }
        if (bodavm.memory.globalInit.fontList.indexOf(fontFamily) != -1) {
            // debugger
            let offsetWidth = bodavm.memory.fontsize[fontFamily][0]
            console.log_copy(this, ` -> HTMLElement_offsetWidth_get `, ` fontFamily->${fontFamily}->offsetWidth->${offsetWidth} 可识别的字体  `);
            return offsetWidth;
        } else {
            console.log_copy(this, ` -> HTMLElement_offsetWidth_get  `, `fontFamily->${fontFamily}-> 614 无法识别的字体  `);
            return 614;
        }
    }
    bodavm.envFunc.HTMLElement_offsetHeight_get = function () {
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this) ? bodavm.toolsFunc.getProtoAttr.call(this, this) : bodavm.toolsFunc.getProtoAttr(this)
        let thisNodeStyle = ''
        debugger
        thisNodeStyle = boda$(thisNode).attr('style')

        let fontFamily = this.style.fontFamily
        if (!fontFamily) {
            let fontFamilylist = thisNodeStyle.split(';')
            for (let fontList of fontFamilylist) {
                if (fontList.indexOf('font-family') != -1) {
                    fontFamily = fontList.split(':')[1].trim()
                    break
                }
            }
        }
        if (!fontFamily) {
            console.log_copy(this, ` -> HTMLElement_offsetHeight_get thisNodeStyle 未获取到直接返回0  `)
            return 0
        }
        if (bodavm.memory.globalInit.fontList.indexOf(fontFamily) != -1) {
            let offsetHeight = bodavm.memory.fontsize[fontFamily][1]
            console.log_copy(this, ` -> HTMLElement_offsetHeight_get `, ` fontFamily->${fontFamily}->offsetHeight->${offsetHeight} 可识别的字体  `);
            return offsetHeight;
        } else {
            console.log_copy(this, ` -> HTMLElement_offsetHeight_get  `, `fontFamily->${fontFamily}   211 无法识别的字体  `);
            return 211;
        }
    }



    bodavm.envFunc.HTMLIFrameElement_contentDocument_get = function () {
        // debugger
        if (bodavm.memory.iframe['contentDocument']['this'] == this) {
            let iframeRes = bodavm.memory.iframe['contentDocument']['res']
            console.log_copy(`bodavm.memory.iframe['contentDocument'] 已存在 直接返回 ->`, iframeRes)
            return iframeRes

        }

        let contentDoc = new HTMLDocument('bobo')
        contentDoc._boContentWindow = true
        bodavm.memory.iframe['contentDocument']['res'] = contentDoc
        bodavm.memory.iframe['contentDocument']['this'] = this

        contentDoc = bodavm.memory.iframe["contentDocument"]['res']
        console.log_copy(`HTMLIFrameElement_contentDocument_get ->res -> `, contentDoc)

        return contentDoc
    }

    bodavm.envFunc.HTMLIFrameElement_contentWindow_get = function () {
        // debugger
        // let thiswinIndex=bodavm.memory.iframe['thisWindow']['this'].indexOf(this)
        // if  (thiswinIndex!=-1){
        //     return  bodavm.memory.iframe['thisWindow']['this'][thiswinIndex]

        // }

        // let documentBody = bodavm.toolsFunc.getProtoAttr(document.documentElement)
        // // debugger
        // let thisnode = bodavm.toolsFunc.getProtoAttr(this) ? bodavm.toolsFunc.getProtoAttr(this) : bodavm.toolsFunc.getProtoAttr.call(this, this)

        // let isIndex = filterThisNode.indexOf(thisnode)
        let contentwindow_ = null
        let thisNode = bodavm.toolsFunc.getProtoAttr.call(this, this)
        // debugger
        let islive = 0
        let liveIframeList = boda$('iframe').get()
        if (!liveIframeList) {
            console.log_copy(this, `HTMLIFrameElement_contentWindow_get ->未添加进body等 返回null -> `, null)

            return null
        }
        for (const ifELe of liveIframeList) {
            if (ifELe == thisNode) {
                islive = 1
            }
        }
        if (islive == 0) {
            console.log_copy(this, `HTMLIFrameElement_contentWindow_get ->未添加进body等 返回null -> `, null)
            return null
        }
        // debugger
        // if (isIndex != -1) {
        // debugger
        // if (window[isIndex]) {
        //     console.log_copy(`window `, isIndex, ` -> 已存在 直接返回 ->`)

        //     return window[isIndex]
        // // }
        for (let index = 0; index < bodavm.memory.iframe["contentWindow"].length; index++) {
            let ele = bodavm.memory.iframe["contentWindow"][index];
            if (ele['this'] == this) {
                let iframeRes = ele['res']
                console.log_copy(`bodavm.memory.iframe['contentWindow'] 已存在 直接返回 ->`, iframeRes)
                return iframeRes
            }
        }
        // if (bodavm.memory.iframe['contentWindow']['this'] == this) {
        //     let iframeRes = bodavm.memory.iframe['contentWindow']['res']
        //     console.log_copy(`bodavm.memory.iframe['contentWindow'] 已存在 直接返回 ->`, iframeRes)
        //     return iframeRes

        // }
        let windowIframe = new Window('bobo')
        windowIframe._boContentWindow = true
        windowIframe.self = windowIframe
        windowIframe.iframe = windowIframe
        // contentwindow_=new Window('bobo')
        // bodavm.memory.iframe
        let tempcontentWindow = ''
        tempcontentWindow = Object.setPrototypeOf(windowIframe, globalThis)
        // tempcontentWindowthis = this
        bodavm.memory.iframe["contentWindow"].push({ 'res': tempcontentWindow, 'this': this })
        // bodavm.memory.iframe['thisWindow']['this'].push(windowIframe)
        // debugger
        contentwindow_ = tempcontentWindow
        // let windowInd=bodavm.memory.iframe['thisWindow']['this'].length-1
        // window[windowInd] = contentwindow_
        // window[windowInd].self = window[windowInd]
        // window[windowInd].frames = window[windowInd]
        // debugger
        // }
        console.log_copy(`HTMLIFrameElement_contentWindow_get ->res -> `, contentwindow_)
        return contentwindow_
    }


})()
























































































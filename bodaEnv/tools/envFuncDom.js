;;(function (){

    // bodaEnv.envFunc.Document_querySelectorAll=function(){
    //     let arg0=arguments[0]
    //     let thisNode=bodaEnv.memory.WeakMap.get(this)
    //     debugger

    // }
    bodaEnv.envFunc.Node_replaceChild=function(){
        let arg0=arguments[0]
        let arg1=arguments[1]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        let target0=bodaEnv.memory.WeakMap.get(arg0)
        let target1=bodaEnv.memory.WeakMap.get(arg1)
        thisNode.replaceChild(target0,target1)

        bodaEnv.toolsFunc.console_copy(this,`-> Node_replaceChild -> arg0 -> ${arg0}  arg1-> ${arg1}`)

        return arg1

    }
    bodaEnv.envFunc.Node_contains=function(){
        let arg0=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        let targetNode=bodaEnv.memory.WeakMap.get(arg0)
        let _res=thisNode.contains(targetNode)
        bodaEnv.toolsFunc.console_copy(this,`-> Node_contains -> arg0 -> ${arg0} -> res -> ${_res}`)

        return _res
    
    }
    bodaEnv.envFunc.HTMLIFrameElement_contentDocument_get=function(){
        // debugger
        // let thisNode=bodaEnv.memory.WeakMap.get(this)
        // let isliveContentDocument=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this)
        // debugger
        // if (isliveContentDocument['contentDocument']){
        //     bodaEnv.toolsFunc.console_copy(this,`-> HTMLIFrameElement_contentDocument_get -> _contentDocument 获取irame下的document 可能存在检测`)

        //     return isliveContentDocument
        // }
        // let _contentDocument=new Document('bobo')
        // bodaEnv.toolsFunc.console_copy(this,`-> HTMLIFrameElement_contentDocument_get -> _contentDocument 获取irame下的document 可能存在检测 ${_contentDocument} `)
        // _contentDocument=bodaEnv.toolsFunc.proxyDocument(_contentDocument ,`iframe_contentDocument::proxyDocument`)        
        // bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'contentDocument',_contentDocument)
        // bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_contentDocument,'isiframe',true)
        // bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_contentDocument,'num',isliveContentDocument['num'])
        let _contentDocument=this["contentWindow"].document
        bodaEnv.toolsFunc.console_copy(this,`-> HTMLIFrameElement_contentDocument_get -> _contentDocument 获取irame下的document 可能存在检测 ${_contentDocument} `)

        return _contentDocument

    }
    bodaEnv.envFunc.Element_append=function(){
        // debugger
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let args = Array.from(arguments);
        for (let i = 0; i < args.length; i++) {
            let arg = args[i];
            if (typeof arg === 'string') {
                // 如果参数是字符串，创建一个新的文本节点
                let _textNode = thisNode.ownerDocument.createTextNode(arg);
                // bodaEnv.memory.WeakMap.set(arg,_textNode)
                bodaEnv.memory.WeakMap.set(_textNode,arg)
                thisNode.appendChild(_textNode);
            } else if (arg instanceof Node) {
                let targetNode=bodaEnv.memory.WeakMap.get(arg)
                // 如果参数是一个节点，将其添加为子节点
                thisNode.appendChild(targetNode);
            }
        }
        bodaEnv.toolsFunc.console_copy(this ,`-> Element_append ->_args ${args} `);
        
    }
    bodaEnv.envFunc.DOMImplementation_createHTMLDocument=function(){
        let _arg0=arguments[0]
        let _tempDoc=bodaEnv.memory.tempDocument.implementation.createHTMLDocument(_arg0)
        // debugger
        let _res=new HTMLDocument('bobo')
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'createHTMLDocument',_res)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_res,'createHTMLDocument',_tempDoc)
        bodaEnv.memory.WeakMap.set(_res,_tempDoc)
        bodaEnv.memory.WeakMap.set(_tempDoc,_res)
        bodaEnv.toolsFunc.console_copy(this ,`-> DOMImplementation_createHTMLDocument ->_res 生成新的HTMLDocument 可能存在检测  -> ${_res} `);
        return _res
    }
    bodaEnv.envFunc.Document_implementation_get=function(){

        let isliveAttr=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'implementation')
        if (isliveAttr){
            bodaEnv.toolsFunc.console_copy(this ,`-> Document_implementation_get ->_res -> ${isliveAttr} `);

            return isliveAttr
        }
        let _res=new DOMImplementation('bobo')
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'implementation',_res)
        bodaEnv.toolsFunc.console_copy(this ,`-> Document_implementation_get ->_res -> ${_res} `);
        return _res

    }

    bodaEnv.envFunc.HTMLOptionElement_disabled_get=function(){
        // let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=false
        // debugger
        bodaEnv.toolsFunc.console_copy(this ,`-> HTMLOptionElement_disabled_get ->_res ->默认返回false ${_res} `);
        return _res

    }
    bodaEnv.envFunc.HTMLSelectElement_disabled_set=function(){
        let _arg0=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.disabled=_arg0
        // debugger
        bodaEnv.toolsFunc.console_copy(this ,`-> HTMLSelectElement_disabled_set ->_arg0 -> ${_arg0} `);
        return _arg0
    }
    

    bodaEnv.envFunc.HTMLFormElement_enctype_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.enctype
        // debugger
        bodaEnv.toolsFunc.console_copy(this ,`-> HTMLFormElement_enctype_get ->_res -> ${_res} `);
        return _res

    }
    bodaEnv.envFunc.HTMLOptionElement_selected_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=true
        // debugger
        bodaEnv.toolsFunc.console_copy(this ,`-> HTMLOptionElement_selected_get ->_res -> 默认返回true ${_res} `);
        return _res

    }
    bodaEnv.envFunc.HTMLTextAreaElement_defaultValue_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.defaultValue
        // debugger
        bodaEnv.toolsFunc.console_copy(this ,`-> HTMLTextAreaElement_defaultValue_get ->_res -> ${_res} `);
        return _res

    }
    

    bodaEnv.envFunc.Node_lastChild_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.lastChild?bodaEnv.memory.WeakMap.get(thisNode.lastChild):null
        // debugger
        bodaEnv.toolsFunc.console_copy(this ,`-> Node_lastChild_get ->_res -> ${_res} `);
        return _res

    }
    bodaEnv.envFunc.HTMLInputElement_checked_set=function(){
        let arg0=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
    
        thisNode.checked=arg0
        bodaEnv.toolsFunc.console_copy(this ,`-> HTMLInputElement_checked_set ->arg0 -> ${arg0} `);
        return arg0

    }
    
    bodaEnv.envFunc.HTMLInputElement_checked_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.checked
        
        bodaEnv.toolsFunc.console_copy(this ,`-> HTMLInputElement_checked_get->_res -> ${_res} `);
        return _res

    }

    bodaEnv.envFunc.Document_createDocumentFragment=function(){
        // let arg0=arguments[0]
        // debugger
        let thisNode=bodaEnv.memory.tempDocument.createDocumentFragment()
        let _res=new DocumentFragment('bobo')
        bodaEnv.memory.WeakMap.set(thisNode,_res)
        bodaEnv.memory.WeakMap.set(_res,thisNode)
        bodaEnv.toolsFunc.console_copy(this ,`-> Document_createDocumentFragment ->res -> `,_res);

        return _res
    }
    
    bodaEnv.envFunc.Node_compareDocumentPosition=function(){
        let arg0=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.compareDocumentPosition(arg0)
        //debugger;
        bodaEnv.toolsFunc.console_copy(this ,`-> Node_compareDocumentPosition  可能存在检测点->arg0 ->${arg0} res -> `,_res);

        return _res

        
    }

    bodaEnv.envFunc.Element_matches=function(){
        let arg0=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        let _res=thisNode.matches(arg0)
        bodaEnv.toolsFunc.console_copy(this ,`-> Element_matches ->arg0 ->${arg0} res -> `,_res);

        return _res
    }

    bodaEnv.envFunc.Element_querySelectorAll=function(){
        let arg=arguments[0]
        // if (arg =='*,:x') debugger
        try{
            let thisNode=bodaEnv.memory.WeakMap.get(this)
            let caches=thisNode.querySelectorAll(arg)
            let _nodeList = []
    
            let isliveClassList=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,arg)
    
            if (isliveClassList){
                isliveClassList.__proto__=Array.prototype
                if (isliveClassList.length==caches.length){
                    bodaEnv.toolsFunc.console_copy(this,`-> Element_querySelectorAll ->res -> `,isliveClassList);
                    isliveClassList.__proto__=NodeList.prototype
                    return isliveClassList
                }
                while(isliveClassList.length){
                    isliveClassList.pop()
                }
                for(let classNum=0;classNum<caches.length;classNum++){
                    let _childnode=bodaEnv.memory.WeakMap.get(caches[classNum])
    
                    isliveClassList.push(_childnode)
                }
                bodaEnv.toolsFunc.console_copy(this ,`-> Element_querySelectorAll ->res -> `,isliveClassList);
                isliveClassList.__proto__=NodeList.prototype
                return isliveClassList
            }    
    
            if (caches.length) {
                for (let cdnum=0;cdnum <caches.length;cdnum++){
                    let _childnode=bodaEnv.memory.WeakMap.get(caches[cdnum])
                    _nodeList.push(_childnode);
                }
            }
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,arg,caches)
            _nodeList.__proto__ = NodeList.prototype
            bodaEnv.memory.WeakMap.set(_nodeList,caches)
            bodaEnv.memory.WeakMap.set(caches,_nodeList)
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_nodeList,'querySelectorAll',this)
            bodaEnv.toolsFunc.console_copy(this, `-> Element_querySelectorAll `, 'res- >', _nodeList)
            // debugger
            return _nodeList
        }catch(e){
            bodaEnv.toolsFunc.console_copy(this, `-> Element_querySelectorAll `, `arg- > ${arg} 报错 !!!! `)
            bodaEnv.toolsFunc.throwError('DOMException',`Failed to execute 'querySelectorAll' on 'Element': '${arg}' is not a valid selector.`)

        }
        // debugger
        



    }
    bodaEnv.envFunc.Document_getElementsByName=function(){
        // debugger
        let arg=arguments[0]
        let caches=bodaEnv.memory.tempDocument.getElementsByName(arg).cache
        let _nodeList = []

        let isliveClassList=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,arg)
        if (isliveClassList){
            isliveClassList.__proto__=Array.prototype
            if (isliveClassList.length==caches.length){
                bodaEnv.toolsFunc.console_copy(this,`-> Document_getElementsByName ->res -> `,isliveClassList);
                isliveClassList.__proto__=NodeList.prototype
                return isliveClassList
            }
            while(isliveClassList.length){
                isliveClassList.pop()
            }
            for(let classNum=0;classNum<caches.length;classNum++){
                let _childnode=bodaEnv.memory.WeakMap.get(caches[classNum])

                isliveClassList.push(_childnode)
            }
            bodaEnv.toolsFunc.console_copy(this ,`-> Document_getElementsByName ->res -> `,isliveClassList);
            isliveClassList.__proto__=NodeList.prototype
            return isliveClassList
        }    

        if (caches.length) {
            for (let cdnum=0;cdnum <caches.length;cdnum++){
                let _childnode=bodaEnv.memory.WeakMap.get(caches[cdnum])
                _nodeList.push(_childnode);
            }
        }
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,arg,caches)
        _nodeList.__proto__ = NodeList.prototype
        bodaEnv.memory.WeakMap.set(_nodeList,caches)
        bodaEnv.memory.WeakMap.set(caches,_nodeList)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_nodeList,'getElementsByName',this)
        bodaEnv.toolsFunc.console_copy(this, `-> Document_getElementsByName `, 'res- >', _nodeList)
        // debugger
        return _nodeList


    }

    bodaEnv.envFunc.Document_createComment=function(){
        // debugger
        let arg0=arguments[0]
        let targetNode=bodaEnv.memory.tempDocument.createComment(arg0)
        let _comment=new Comment('bobo')

        bodaEnv.memory.WeakMap.set(_comment,targetNode)
        bodaEnv.memory.WeakMap.set(targetNode,_comment)
        bodaEnv.toolsFunc.console_copy(this,`- > Document_createComment ->_comment ${_comment} `)

        return _comment


    }

    bodaEnv.envFunc.Document_defaultView_get=function(){
        //在一个 iframe 里面执行 document.defaultView 时，得到的会是这个 iframe 自己的窗口 window 对象，而不是其父窗口或者顶层窗口的 window 对象
        let isiframe=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'isiframe')
        if (isiframe){
            let _num=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'num')
            bodaEnv.toolsFunc.console_copy(this,`- > Document_defaultView_get ->res iframe下的window `)
            return window[_num]
        }
        bodaEnv.toolsFunc.console_copy(this,`- > Document_defaultView_get ->res window `)

        return window

    }
    bodaEnv.envFunc.Node_ownerDocument_get=function(){
        // debugger
        if (this ==document){
            bodaEnv.toolsFunc.console_copy(this,`- > Node_ownerDocument_get -> 默认返回 null`)

            return null
        }
        bodaEnv.toolsFunc.console_copy(this,`- > Node_ownerDocument_get -> 未实现 !!!!!!!!!!`)
        bodaEnv.toolsFunc.throwError('TypeError','主动报错!!!!!!!!!!')

    }
    bodaEnv.envFunc.Document_webkitHidden_get=function(){
        //如果用户当前没有查看该页面，或者浏览器窗口最小化，那么 document.webkitHidden 的值将为 true。否则，如果用户正在查看页面，或者该页面位于前台标签页中，该属性的值为 false。
        bodaEnv.toolsFunc.console_copy(this,`- > Document_webkitHidden_get -> 默认返回 false`)
        return false
    }
    bodaEnv.envFunc.Document_webkitHidden_get=function(){
        //如果用户当前没有查看该页面，或者浏览器窗口最小化，那么 document.webkitHidden 的值将为 true。否则，如果用户正在查看页面，或者该页面位于前台标签页中，该属性的值为 false。
        bodaEnv.toolsFunc.console_copy(this,`- > Document_webkitHidden_get -> 默认返回 false`)
        return false
    }
    
    bodaEnv.envFunc.Document_scrollingElement_get=function(){
        bodaEnv.toolsFunc.console_copy(this,`- > Document_scrollingElement_get -> 默认返回 document.body`)

        return document.body
    }

    bodaEnv.envFunc.HTMLInputElement_value_get=function(){
        // debugger
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.value?thisNode.value:'12345'
        bodaEnv.toolsFunc.console_copy(this,`- > HTMLInputElement_value_get -> value 如果为null则默认返回 12345 -> ${_res}`)
        return _res
    }
    bodaEnv.envFunc.HTMLScriptElement_async_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        let _res=thisNode.async
        bodaEnv.toolsFunc.console_copy(this,`- > HTMLScriptElement_async_get -> async -> ${_res}`)
        return _res

    }
    bodaEnv.envFunc.CharacterData_data_set=function(){
        let _arg=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.data=_arg
        // debugger
        bodaEnv.toolsFunc.console_copy(this,`- > CharacterData_data_set -> data -> ${_arg}`)

        return _arg
    }
    bodaEnv.envFunc.HTMLInputElement_value_set=function(){
        let _arg=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        thisNode.value=_arg
        bodaEnv.toolsFunc.console_copy(this,`- > HTMLInputElement_value_set -> target -> ${_arg}`)

        return _arg

    }
    bodaEnv.envFunc.HTMLAnchorElement_target_set=function(){
        let _arg=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        thisNode.target=_arg
        bodaEnv.toolsFunc.console_copy(this,`- > HTMLAnchorElement_target_set -> target -> ${_arg}`)

        return _arg

    }

    bodaEnv.envFunc.HTMLButtonElement_type_set=function(){
        let _arg=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        thisNode.type=_arg
        bodaEnv.toolsFunc.console_copy(this,`- > HTMLButtonElement_type_set -> type -> ${_arg}`)

        return _arg

    }

    bodaEnv.envFunc.HTMLInputElement_maxLength_set=function(){
        let _maxLength=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        thisNode.maxLength=_maxLength
        bodaEnv.toolsFunc.console_copy(this,`- > HTMLInputElement_maxLength_set -> _maxLength -> ${_maxLength}`)

        return _maxLength

    }


    bodaEnv.envFunc.HTMLInputElement_placeholder_set=function(){
        let _placeholder=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        thisNode.placeholder=_placeholder
        bodaEnv.toolsFunc.console_copy(this,`- > HTMLInputElement_placeholder_set -> _placeholder -> ${_placeholder}`)

        return _placeholder

    }
    bodaEnv.envFunc.HTMLElement_title_set=function(){
        // debugger
        let _title=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.title=_title
        bodaEnv.toolsFunc.console_copy(this,`- > HTMLElement_title_set -> _title -> ${_title}`)

        return _title
    }
    bodaEnv.envFunc.CSSStyleDeclaration_cssFloat_get=function(){
        //debugger    
        let _isliveFloat=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'float')
        let _islivecssFlost=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'cssFloat')
        if (_isliveFloat || _islivecssFlost){
            let _float=_isliveFloat?_isliveFloat:_islivecssFlost

            bodaEnv.toolsFunc.console_copy(this ,` -> CSSStyleDeclaration_cssFloat_get  -> res -> `,_float )
            return _float
        }
        bodaEnv.toolsFunc.console_copy(this ,` -> CSSStyleDeclaration_cssFloat_get  -> res -> `,_res )
        bodaEnv.toolsFunc.throwError('TypeError','cssFloat获取值失败')
    }
    bodaEnv.envFunc.CSSStyleDeclaration_cssText_set=function(){
        // debugger
        let _csstext=arguments[0]
        // this.cssText=_csstext
        // debugger
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'cssText',_csstext)
        let _tempCssText=null
        if (_csstext.includes(';')){
            _tempCssText=_csstext.split(';')
        }else{
            _tempCssText=[_csstext]
        }
        for (let _text of _tempCssText){
            if (!_text.length) continue
            let _name=_text.split(':')[0].trim()
            let _value=_text.split(':')[1].trim()
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,_name,_value)
            // let isselfProp=bodaEnv.toolsFunc.hasOwnProperty_bo.call(this,_name)
            // if (isselfProp){
                // 可能需要判断是否为自身属性,暂时不实现
                if (isNaN(parseFloat(_value))){
                    this[_name]=_value
                }else{
                    this[_name]=parseFloat(_value)
                }
            // }
        }

        bodaEnv.toolsFunc.console_copy(this,`- > CSSStyleDeclaration_cssText_set -> _csstext -> ${_csstext}`)

        return _csstext
    }


    bodaEnv.envFunc.NamedNodeMap_length_get=function(){
        // debugger
        let _length=bodaEnv.memory.WeakMap.get(this).length
        bodaEnv.toolsFunc.console_copy(this,`- > NamedNodeMap_length_get -> _length -> ${_length}`)

        return _length
    }
    bodaEnv.envFunc.Element_attributes_get=function(){
        //debugger
        let islive=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'attributes')
        if (islive){
            bodaEnv.toolsFunc.console_copy(this,`- > Element_attributes_get -> res -> ${islive}`)

            return islive
        }
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _NamedNodeMap=new NamedNodeMap('bobo')
        // _NamedNodeMap=bodaEnv.toolsFunc.proxyHelper(_NamedNodeMap,`proxyHelper::_NamedNodeMap`)
        let _attrs=thisNode.attributes
        for (let _ind=0;_ind<_attrs.length;_ind++){
            let _attrObj=new Attr('bobo')
            bodaEnv.memory.WeakMap.set(_attrObj,_attrs[_ind])
            bodaEnv.toolsFunc.defineProperty_bo(_NamedNodeMap,_ind,{
                value: _attrObj,
                configurable:true,
                enumerable:true,
                writable:false
            })
            bodaEnv.toolsFunc.defineProperty_bo(_NamedNodeMap,_attrs[_ind].localName,{
                value: _attrObj,
                configurable:true,
                enumerable:false,
                writable:false
            })
        }
        bodaEnv.toolsFunc.console_copy(this,`- > Element_attributes_get -> res -> ${_NamedNodeMap}`)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'attributes',_NamedNodeMap)
        bodaEnv.memory.WeakMap.set(_NamedNodeMap,thisNode.attributes)
        return _NamedNodeMap
    }

    bodaEnv.envFunc.Element_localName_get=function(){
        // debugger
        let localName=bodaEnv.memory.WeakMap.get(this).localName
        bodaEnv.toolsFunc.console_copy(this,` -> Element_localName_get -> localName -> ${localName}`)

        return localName
    }

    bodaEnv.envFunc.Document_styleSheets_get=function(){
        // debugger
        let _styleSheets= new StyleSheetList('bobo')
        for (let i=0;i<=6;i++){
            let _CSSStyleSheet= new CSSStyleSheet('bobo')
            _CSSStyleSheet=bodaEnv.toolsFunc.proxyHelper(_CSSStyleSheet,`proxyHelper::CSSStyleSheet${[i]}`)
            bodaEnv.toolsFunc.defineProperty_bo(_styleSheets,i,{
                value: _CSSStyleSheet,
                configurable:true,
                enumerable:true,
                writable:false
            })
        }


        bodaEnv.toolsFunc.console_copy(`Document_styleSheets_get -> res -> ${_styleSheets}`)

        return _styleSheets

    }

    bodaEnv.envFunc.HTMLCollection_namedItem=function(){
        // debugger
        let arg=arguments[0]
        for (let _self of this){
            let _selfNode=bodaEnv.memory.WeakMap.get(_self)
            if ((_selfNode.name) ==arg || (_selfNode.id==arg)){
                bodaEnv.toolsFunc.console_copy(`HTMLCollection_namedItem -> arg -> ${arg} -> res -> ${_self}`)
                return _self
            }
        }
        bodaEnv.toolsFunc.console_copy(`HTMLCollection_namedItem -> arg -> ${arg} -> res -> null`)

        return null
    }


    bodaEnv.envFunc.Document_createEvent=function(){
        // debugger
        if (!arguments.length){
            return bodaEnv.toolsFunc.throwError('TypeError',`Failed to execute 'createEvent' on 'Document': 1 argument required, but only 0 present.`)
        }
        if (arguments[0]=='TouchEvent'){
            bodaEnv.toolsFunc.console_copy(`Document_createEvent -> arg -> ${arguments[0]} -> 主动报错`)

            return bodaEnv.toolsFunc.throwError('DOMException',`Failed to execute 'createEvent' on 'Document': The provided event type ('TouchEvent') is invalid.`)

        }
        if (arguments[0]=='Event'){
            let _event=new bodaEnv.memory.globlProtoObj['Event']
            // debugger
            bodaEnv.toolsFunc.console_copy(`Document_createEvent -> arg -> ${arguments[0]} -> res -> ${_event}`)
            bodaEnv.toolsFunc.defineProperty_bo(_event,'isTrusted',{
                set:undefined,
                configurable: false,
                get:function(){
                    debugger
                    bodaEnv.toolsFunc.console_copy(`Document_createEvent 创建的event 调用 isTrusted_Get 需注意!!!`)
                    return false
                },
                enumerable:true
            })
            return _event
        }
        bodaEnv.toolsFunc.console_copy(`Document_createEvent -> arg -> ${arguments[0]} -> 未实现 !!!!!!!!!!!!!!!!!!!`)

    }
    bodaEnv.envFunc.Document_title_get=function(){
        let _title=bodaEnv.memory.document['title']
        bodaEnv.toolsFunc.console_copy(`Document_title_get ->`, _title)

        return _title
    }

    bodaEnv.envFunc.HTMLElement_dataset_get=function (){

        let _dataset=new bodaEnv.memory.globlProtoObj['DOMStringMap']('bobo')
        let islive=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'dataset')
        if (islive){
            bodaEnv.toolsFunc.console_copy(this,`-> HTMLElement_dataset_get -> `, islive)

            return islive
        }
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'dataset',_dataset)
        bodaEnv.toolsFunc.console_copy(this,`-> HTMLElement_dataset_get -> `, _dataset)

        return _dataset

    }
    bodaEnv.envFunc.HTMLScriptElement_crossOrigin_set=function (){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _arg=arguments[0]
        thisNode.crossOrigin=_arg
        bodaEnv.toolsFunc.console_copy(`HTMLScriptElement_crossOrigin_set -> `, _arg)
        return _arg
    }
    bodaEnv.envFunc.HTMLScriptElement_referrerPolicy_set=function (){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _arg=arguments[0]
        thisNode.crossOrigin=_arg
        bodaEnv.toolsFunc.console_copy(`HTMLScriptElement_referrerPolicy_set -> `, _arg)
        return _arg

    }
    
    bodaEnv.envFunc.Document_readyState_get=function(){
        if (bodaEnv.memory.scriptExecDone){
            bodaEnv.toolsFunc.console_copy(`Document_readyState_get -> `, 'complete')
            return 'complete'
        }
        bodaEnv.toolsFunc.console_copy(`Document_readyState_get -> `, 'loading')

        return 'loading'
    }
    bodaEnv.envFunc.HTMLScriptElement_type_set=function(){
        let _arg=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.type=_arg
        bodaEnv.toolsFunc.console_copy(thisNode,`-> HTMLScriptElement_type_set  _arg-> `, _arg)

        return _arg
    }
    bodaEnv.envFunc.HTMLElement_onerror_get=function(){
        let _onerrors=bodaEnv.memory.asyncEvent['listener']['onerror']
        for (let _error of _onerrors){
            if (_error['self']==this){
                let _res=_error['callback']
                bodaEnv.toolsFunc.console_copy(this,`-> HTMLElement_onerror_get  -> `, _res)
                return _res
            }

        }
        bodaEnv.toolsFunc.console_copy(this,`-> HTMLElement_onerror_get  -> `, null)

        return null
    }

    bodaEnv.envFunc.DOMRect_y_get=function(){
    let thisNode=bodaEnv.memory.WeakMap.get(this)
    if (thisNode instanceof HTMLSpanElement){
        bodaEnv.toolsFunc.console_copy(thisNode,`-> DOMRect_y_get  res-> 默认返回`, 192.5)

        return 192.5
    }else{
        bodaEnv.toolsFunc.console_copy(thisNode,`-> DOMRect_y_get  res-> 错误!!默认返回`,8)

    }
    return 8
    }
    bodaEnv.envFunc.DOMRect_x_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        if (thisNode instanceof HTMLSpanElement){
            bodaEnv.toolsFunc.console_copy(thisNode,`-> DOMRect_x_get  res-> 默认返回`, 946.6666870117188)

            return 946.6666870117188
        }else{
            bodaEnv.toolsFunc.console_copy(thisNode,`-> DOMRect_x_get  res-> 错误!!默认返回`, 8)

        }
        return 8
    }
    bodaEnv.envFunc.DOMRect_height_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        if (thisNode instanceof HTMLSpanElement){
            bodaEnv.toolsFunc.console_copy(thisNode,`-> DOMRect_height_get  res-> 默认返回`, 32)

            return 32
        }else{
            bodaEnv.toolsFunc.console_copy(thisNode,`-> DOMRect_height_get  res-> 错误!!默认返回`, 1424)

        }
        return 1424
    }
    bodaEnv.envFunc.Element_clientTop_get = function () {
        // debugger
        bodaEnv.toolsFunc.console_copy(this,`-> Element_clientTop_get  res->默认返回0`, 0)
        return 0
    }
    bodaEnv.envFunc.Element_clientLeft_get = function () {
        bodaEnv.toolsFunc.console_copy(this,`-> Element_clientLeft_get  res->默认返回0`, 0)
        return 0
    }
    bodaEnv.envFunc.Element_scrollTop_get = function () {
        // debugger
        bodaEnv.toolsFunc.console_copy(this,`-> Element_scrollTop_get  res->默认返回0`, 0)
        return 0
    }
    bodaEnv.envFunc.Element_scrollLeft_get=function(){
        // debugger
        bodaEnv.toolsFunc.console_copy(this,`-> Element_scrollLeft_get  res->默认返回0`, 0)
        return 0
    }
    bodaEnv.envFunc.Node_nodeName_get=function(){
        // debugger
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.nodeName
        bodaEnv.toolsFunc.console_copy(thisNode,`-> Node_nodeName_get  res->`, _res)
        return _res
    }
    bodaEnv.envFunc.DOMRect_width_get = function () {
        // debugger
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        if (thisNode instanceof HTMLSpanElement){
            bodaEnv.toolsFunc.console_copy(thisNode,`-> DOMRect_width_get  res-> 默认返回`, 40)

            return 40
        }else{
            bodaEnv.toolsFunc.console_copy(thisNode,`-> DOMRect_width_get  res-> 错误!!默认返回`, 1424)

        }
        return 1424
    }
    bodaEnv.envFunc.Element_getBoundingClientRect = function () {
        let DomRect = new bodaEnv.memory.globlProtoObj['DOMRect']('bobo')
        bodaEnv.toolsFunc.console_copy(this ,`-> Element_getBoundingClientRect  res->`, DomRect)
        bodaEnv.memory.WeakMap.set(DomRect,this)
        return DomRect
    }
    bodaEnv.envFunc.HTMLScriptElement_async_set=function(){
        let _arg=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.async=_arg
        bodaEnv.toolsFunc.console_copy(this,`-> HTMLScriptElement_async_set -> _arg ->`,_arg);

        return _arg
    }
    bodaEnv.envFunc.Element_role_set=function(){
        let _arg=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.role=_arg
        bodaEnv.toolsFunc.console_copy(this,`-> Element_role_set -> _arg ->`,_arg);

        return _arg
    }
    bodaEnv.envFunc.HTMLElement_tabIndex_set=function(){
        let _arg=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.tabIndex=_arg
        bodaEnv.toolsFunc.console_copy(this,`-> HTMLElement_tabIndex_set -> _arg ->`,_arg);

        return _arg
    }
    bodaEnv.envFunc.Element_ariaLabel_set=function(){
        let _arg=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.ariaLabel=_arg
        bodaEnv.toolsFunc.console_copy(this,`-> Element_ariaLabel_set -> _arg ->`,_arg);

        return _arg
    }
    bodaEnv.envFunc.Element_className_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)

        let _res=thisNode.className
        bodaEnv.toolsFunc.console_copy(this,`-> Element_className_get -> `,_res);

        return _res
    }

    bodaEnv.envFunc.EventTarget_removeEventListener = function EventTarget_removeEventListener() {

        let type = arguments[0];
        let callback = arguments[1];
        // debugger
        for (let i = 0; i < bodaEnv.memory.asyncEvent.listener.length; i++) {
            if (bodaEnv.memory.asyncEvent.listener[i].callback == callback) {
                bodaEnv.toolsFunc.console_copy(`EventTarget_removeEventListener  ->`, `type->${type} -> `, `callback->${callback}`);
                bodaEnv.memory.asyncEvent.listener.splice(i, 1);
                break;
            }
        }
        

    };
    bodaEnv.envFunc.Document_querySelector=function(){
        
        let arg=arguments[0]

        let _res=bodaEnv.memory.tempDocument.querySelector(arg)
        let resNode=bodaEnv.memory.WeakMap.get(_res)?bodaEnv.memory.WeakMap.get(_res):null
        bodaEnv.toolsFunc.console_copy(`Document_querySelector -> ${arg} -> `,resNode);
        return resNode
    }
    bodaEnv.envFunc.Document_hasFocus = function () {
        bodaEnv.toolsFunc.console_copy(`Document_hasFocus ->`, `当前页面有没有获取焦点,默认返回true`);
        return true;
    };

    bodaEnv.envFunc.CSSStyleDeclaration_length_get=function(){
        // debugger
        let _length=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'length')
        bodaEnv.toolsFunc.console_copy(this ,` -> CSSStyleDeclaration_length_get  -> res -> `,_length )

        return _length

    }
    bodaEnv.envFunc.Node_childNodes_get = function () {
        let thisNode = bodaEnv.memory.WeakMap.get(this)
        // debugger
        let _childs ;
        if (this ==document){
            _childs=bodaEnv.memory.tempDocument.childNodes
            let _proto=bodaEnv.memory.WeakMap.get(_childs[0])
            if (!_proto){
                let _documentType=new DocumentType('bobo')
                bodaEnv.memory.WeakMap.set(_childs[0],_documentType)
                bodaEnv.memory.WeakMap.set(_documentType,_childs[0])

            } 
        }else{
            _childs =thisNode.children
        }
       
        
        let _nodeList = []

        let isliveClassList=bodaEnv.memory.nodeListMap.get(this)
        if (isliveClassList){
            isliveClassList.__proto__=Array.prototype
            if (isliveClassList.length==_childs.length){
                bodaEnv.toolsFunc.console_copy(thisNode,`-> Node_childNodes_get ->res -> `,isliveClassList);
                isliveClassList.__proto__=NodeList.prototype
                return isliveClassList
            }
            while(isliveClassList.length){
                isliveClassList.pop()
            }
            for(let classNum=0;classNum<_childs.length;classNum++){
                let _childnode=bodaEnv.memory.WeakMap.get(_childs[classNum])

                isliveClassList.push(_childnode)
            }
            bodaEnv.toolsFunc.console_copy(thisNode ,`-> Node_childNodes_get ->res -> `,isliveClassList);
            isliveClassList.__proto__=NodeList.prototype
            return isliveClassList
        }
        // debugger   
        if (_childs.length) {
            for (let cdnum=0;cdnum <_childs.length;cdnum++){
                let _childnode=bodaEnv.memory.WeakMap.get(_childs[cdnum])
                _nodeList.push(_childnode);
            }
        }
        bodaEnv.memory.nodeListMap.set(this,_nodeList)
        _nodeList.__proto__ = NodeList.prototype
        bodaEnv.memory.WeakMap.set(_nodeList,_childs)
        bodaEnv.memory.WeakMap.set(_childs,_nodeList)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_nodeList,'childNodes',this)
        bodaEnv.toolsFunc.console_copy(this, `-> Node_childNodes_get `, 'res- >', _nodeList)
        // debugger
        return _nodeList
    }
    bodaEnv.envFunc.Document_wasDiscarded_get = function () {
        bodaEnv.toolsFunc.console_copy(`Document_wasDiscarded_get 默认返回 false`)
        // debugger
        return false
    }
    bodaEnv.envFunc.Document_referrer_get = function () {
        // debugger
        let refer = bodaEnv.memory.document['referrer']
        bodaEnv.toolsFunc.console_copy(`Document_referrer_get res->`, refer)
        return refer
    }
    bodaEnv.envFunc.Document_currentScript_get = function () {
        // debugger
        // return document.scripts[0]
        let currentNode = bodaEnv.memory.bodaCurrentScriptElement
        if (!currentNode){
            bodaEnv.toolsFunc.console_copy(this, `-> Document_currentScript_get ->,可能是检测点 当前不处于script标签内,直接返回null`)
            return null
        }
        // debugger
        let newNode=null
        let isliveNode=bodaEnv.memory.WeakMap.get(currentNode)
        if (isliveNode){
            newNode=isliveNode
        }else{
            newNode = bodaEnv.toolsFunc.setProto(currentNode.tagName)
            bodaEnv.memory.WeakMap.set(currentNode,newNode)
            bodaEnv.memory.WeakMap.set(newNode,currentNode)
        }
        bodaEnv.toolsFunc.console_copy(this, `-> Document_currentScript_get ->可能是检测点  res ->`, newNode)
        return newNode
        
    }
    bodaEnv.envFunc.HTMLScriptElement_src_get = function () {
        // debugger
        let thisNode = bodaEnv.memory.WeakMap.get(this)
        // debugger
        let src_ = thisNode.src
        bodaEnv.toolsFunc.console_copy(`HTMLScriptElement_src_get res->`, src_)
        return src_

    }
    bodaEnv.envFunc.Document_createTextNode = function () {
        // debugger
        let arg = arguments[0]
        let textnode = bodaEnv.memory.tempDocument.createTextNode(arg)
        let newNode = bodaEnv.toolsFunc.setProto('TEXT')
        bodaEnv.memory.WeakMap.set(textnode,newNode)
        bodaEnv.memory.WeakMap.set(newNode,textnode)
        bodaEnv.toolsFunc.console_copy(this, ` -> Document_createTextNode -> res ->`, newNode)
        return newNode
    }
    bodaEnv.envFunc.HTMLStyleElement_type_set=function (){
        // debugger
        let arg=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.type=arg
        bodaEnv.toolsFunc.console_copy(`HTMLStyleElement_type_set arg-> `,arg)
        return arg
    }
    bodaEnv.envFunc.HTMLScriptElement_src_set = function () {
        let arg = arguments[0]
        // debugger
        let thisNode = bodaEnv.memory.WeakMap.get(this)
        // debugger
        // if (arg == '//g.alicdn.com/alilog/mlog/aplus_v2.js'){debugger}
        thisNode.src=arg
        // debugger
        bodaEnv.toolsFunc.console_copy(this, `-> HTMLScriptElement_src_set arg->`, arg)
        if (!bodaEnv.memory.scriptNodeNeedReads){
            bodaEnv.memory.scriptNodeNeedReads=[]
        }
        bodaEnv.memory.scriptNodeNeedReads.push(thisNode)
        return arg
    }

    bodaEnv.envFunc.MediaQueryList_matches_get = function () {
        let matches_ = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'matchMedia')
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
            case '(min-width: 400px)':
                ismatch=false
                break
            default:
                bodaEnv.toolsFunc.console_copy(`MediaQueryList_matches_get -> `,matches_,`未实现!!!!!`)
        }
        bodaEnv.toolsFunc.console_copy(`MediaQueryList_matches_get -> matches_ `,matches_, `-> res ->${ismatch}`);
        return ismatch
    }
    bodaEnv.envFunc.CSSStyleDeclaration_getPropertyValue=function (){
        let arg=arguments[0]
        if (arg=='color'){
            let thisNode=bodaEnv.memory.WeakMap.get(this)
            // debugger
            let color=thisNode.innerHTML
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
                    bodaEnv.toolsFunc.console_copy(`CSSStyleDeclaration_getPropertyValue -> `,color,`未实现!!!!!!!`)
                
            }
            bodaEnv.toolsFunc.console_copy(`CSSStyleDeclaration_getPropertyValue 可能存在color检测 !!!!!! arg ->`,arg ,` -> res_rgb ->`,colorgb)

            return colorgb
        }
        bodaEnv.toolsFunc.console_copy(`CSSStyleDeclaration_getPropertyValue arg ->`,arg ,`未实现!!!!!!!!!!!`)


    }
    bodaEnv.envFunc.HTMLIFrameElement_contentWindow_get = function () {
        // debugger
        // let thiswinIndex=bodaEnv.memory.iframe['thisWindow']['this'].indexOf(this)
        // if  (thiswinIndex!=-1){
        //     return  bodaEnv.memory.iframe['thisWindow']['this'][thiswinIndex]

        // }

        // let documentBody = bodaEnv.sionTools.getProtoAttr(document.documentElement)
        // // debugger
        // let thisnode = bodaEnv.sionTools.getProtoAttr(this) ? bodaEnv.sionTools.getProtoAttr(this) : bodaEnv.sionTools.getProtoAttr.call(this, this)

        // let isIndex = filterThisNode.indexOf(thisnode)
        // debugger
        let contentwindow_ = null
        let thisNode = bodaEnv.memory.WeakMap.get(this)
        // debugger
        let islive = 0
        let liveIframeList = bodaEnv.memory.tempDocument.getElementsByTagName('iframe').cache
        if (!liveIframeList) {
            bodaEnv.toolsFunc.console_copy(this, `-> HTMLIFrameElement_contentWindow_get ->未添加进body等 返回null -> `, null)

            return null
        }
        for (const ifELe of liveIframeList) {
            if (ifELe == thisNode) {
                islive = 1
            }
        }
        if (islive == 0) {
            bodaEnv.toolsFunc.console_copy(this, `-> HTMLIFrameElement_contentWindow_get ->未添加进body等 返回null -> `, null)
            return null
        }

        let _check=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'iframe')
        if (_check){
            bodaEnv.toolsFunc.console_copy(`HTMLIFrameElement_contentWindow_get ->res -> iframe Window`,)
            return _check
        }

        let windowIframe = new Window('bobo')
        windowIframe =bodaEnv.toolsFunc.proxyWindow(windowIframe ,`iframe_windowIframe::proxyWindow`)

        window[bodaEnv.memory.boWindowNum] =windowIframe


        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(windowIframe,'isiframe',true)

        //bodaEnv.memory.iframe["contentWindow"].push({ 'res': windowIframe, 'this': this })
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(windowIframe,'self',windowIframe)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(windowIframe,'frames',windowIframe)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(windowIframe,'num',bodaEnv.memory.boWindowNum)
        
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'iframe',windowIframe)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'num',bodaEnv.memory.boWindowNum)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'isiframe',true)
        bodaEnv.memory.boWindowNum++

        bodaEnv.toolsFunc.console_copy(`HTMLIFrameElement_contentWindow_get ->res -> iframe Window`)
        return windowIframe
    }
    bodaEnv.envFunc.Element_setAttribute=function(){
        let _k=arguments[0]
        let _v=arguments[1]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.setAttribute(_k,_v)
        bodaEnv.toolsFunc.console_copy(this, `-> Element_setAttribute ->_k : ${_k} -> _v : ${_v}`)

    }
    bodaEnv.envFunc.Element_outerHTML_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.outerHTML
        bodaEnv.toolsFunc.console_copy(this, `-> Element_outerHTML_get -> `,_res)

        return _res
    }
    bodaEnv.envFunc.Element_remove=function (){
        // debugger
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        if (!thisNode){
           return bodaEnv.toolsFunc.throwError('typeError','错误thisNode不存在!!!!!!!!!11')
        }
        thisNode.remove()
        bodaEnv.toolsFunc.console_copy(this, ` -> Element_remove`)
        let tempdomindex=bodaEnv.memory.domDocument[thisNode.nodeName].indexOf(thisNode)
        if (tempdomindex!=-1){
            bodaEnv.memory.domDocument[thisNode.nodeName].splice(tempdomindex,1)
        }
        let tempAllindex=bodaEnv.memory.domDocument.all.indexOf(thisNode)
        if (tempAllindex!=-1){
            bodaEnv.memory.domDocument.all.splice(tempAllindex,1)
        }

        
    }
    bodaEnv.envFunc.CSSRuleList_length_get=function (){
        // debugger
        let len=Object.keys(this,'bobo').length
        bodaEnv.toolsFunc.console_copy(this, ` -> CSSRuleList_length_get length-> `, len)

        return len
    }
    bodaEnv.envFunc.CSSStyleSheet_cssRules_get=function(){
        let islive = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'cssRules')
        if (islive) {
            bodaEnv.toolsFunc.console_copy(this, ` -> CSSStyleSheet_cssRules_get cache已存在返回-> `, islive)
            return islive
        }
        let rule = new bodaEnv.memory.globlProtoObj['CSSRuleList']('bobo')
        bodaEnv.toolsFunc.console_copy(this, ` -> CSSStyleSheet_cssRules_get 默认返回一个 需要根据实际进行调整!!!!!-> `,)
        bodaEnv.toolsFunc.defineProperty_bo(rule, '0', {
            value: new bodaEnv.memory.globlProtoObj['CSSStyleRule']('bobo'),
            writable: false,
            enumerable: true,
            configurable: true
        })
        rule=bodaEnv.toolsFunc.proxy2(rule,'CSSRuleList::proxy2')
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'cssRules',rule)
        return rule
    }
    bodaEnv.envFunc.HTMLStyleElement_sheet_get = function () {
    //    debugger
       let islive = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'sheet')
        if (islive) {
            bodaEnv.toolsFunc.console_copy(this, ` -> HTMLStyleElement_sheet_get cache已存在返回-> `, islive)

            return islive

        }
       let sheet = new CSSStyleSheet('bobo')
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'sheet', sheet)
        // bodaEnv.sionTools.setProtoAttr.call(sheet, sheet, thisNode)
        bodaEnv.toolsFunc.console_copy(this, ` -> HTMLStyleElement_sheet_get sheet-> `, sheet)

        return sheet
    }
    bodaEnv.envFunc.Node_insertBefore = function () {
        // debugger
        let target = arguments[0]
        let target2 = arguments[1]

        let thisNode = bodaEnv.memory.WeakMap.get(this)
        let newNode = bodaEnv.memory.WeakMap.get(target)
        let referenceNode = bodaEnv.memory.WeakMap.get(target2)?bodaEnv.memory.WeakMap.get(target2):null
        thisNode.insertBefore(newNode,referenceNode)
        if (bodaEnv.memory.domDocument[thisNode.nodeName]){
            let thisNodeindex=bodaEnv.memory.domDocument[thisNode.nodeName].indexOf(thisNode)
            if (thisNodeindex!=-1){
                if (!bodaEnv.memory.domDocument[newNode.nodeName]){
                    bodaEnv.memory.domDocument[newNode.nodeName]=[]
                }
                if (referenceNode==null){
                    ///这边实现存在问题,先不处理
                    bodaEnv.memory.domDocument[newNode.nodeName].push(newNode)
                    bodaEnv.memory.domDocument['all'].push(newNode)
                }else{
                    
                    bodaEnv.memory.domDocument[newNode.nodeName].splice(thisNodeindex,0,newNode)
                    let thisAllindex=bodaEnv.memory.domDocument['all'].indexOf(referenceNode)
                    bodaEnv.memory.domDocument['all'].splice(thisAllindex,0,newNode)
                }
            
            }
        }
        bodaEnv.toolsFunc.console_copy(this, `-> Node_insertBefore newNode->`, target, `-> referenceNode ->`, target2)

        if (thisNode.nodeName='SCRIPT'){
            bodaEnv.memory.InsertBeforeNeedDo=thisNode
        }
        // debugger
        return target

    }

    bodaEnv.envFunc.Document_head_get = function () {
        
        let _head = null
        if (bodaEnv.memory.domDocument['HEAD']) {
            let temp_head =bodaEnv.memory.domDocument['HEAD'][0]
            _head=bodaEnv.memory.WeakMap.get(temp_head)
            // debugger
        }
        // let head =chiero('head');

   
        bodaEnv.toolsFunc.console_copy(`Document_head_get -> `, `res -> `, _head);
        return _head;
        
    };
    bodaEnv.envFunc.Document_URL_get = function () {
        let _res = bodaEnv.memory.document['URL'];

        bodaEnv.toolsFunc.console_copy(`Document_URL_get res ->`,_res);
        return _res;
    };
    
    bodaEnv.envFunc.document_location_get = function () {
        bodaEnv.toolsFunc.console_copy(`document_location_get res ->location`);
        // debugger
        return bodaEnv.memory.globlProtoObj['location'];
    };
    bodaEnv.envFunc.Document_characterSet_get = function () {
        let res = bodaEnv.memory.document['characterSet'];
        bodaEnv.toolsFunc.console_copy(`Document_characterSet_get -> res ->`, res);
        return res;
    };

    bodaEnv.envFunc.Node_textContent_set=function(){
        let _arg=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.textContent=_arg
        bodaEnv.toolsFunc.console_copy(this ,'-> Node_textContent_set ->',_arg)

        return _arg
    }
    bodaEnv.envFunc.Element_clientHeight_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        
        if (thisNode.id){
            let thisStyleDic=bodaEnv.memory.styles['#'+thisNode.id]
            let clidentWid_=parseInt(thisStyleDic['height'])
            bodaEnv.toolsFunc.console_copy(this ,'-> Element_clientHeight_get ->',clidentWid_)

            return clidentWid_
            
        }else if (thisNode.nodeName=='HTML' || thisNode.nodeName=='BODY'){
            bodaEnv.toolsFunc.console_copy(this ,'-> Element_clientHeight_get 803')
            return 803
        }
        else{
            bodaEnv.toolsFunc.console_copy(this ,'-> Element_clientHeight_get 错误id外未实现 返回0')
            return 0
        }
    }
    bodaEnv.envFunc.Element_clientWidth_get=function(){
        
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        
        if (thisNode.id){
            let thisStyleDic=bodaEnv.memory.styles['#'+thisNode.id]
            let clidentWid_=parseInt(thisStyleDic['width'])
            bodaEnv.toolsFunc.console_copy(this ,'-> Element_clientWidth_get ->',clidentWid_)

            return clidentWid_
            
        }else if (thisNode.nodeName=='HTML' || thisNode.nodeName=='BODY'){
            bodaEnv.toolsFunc.console_copy(this ,'-> Element_clientWidth_get 1440')

            return 1440
        }
        else{
            bodaEnv.toolsFunc.console_copy(this ,'-> Element_clientWidth_get 错误id外未实现 返回0')
            return 0
        }

        // debugger
    }
    bodaEnv.envFunc.DOMTokenList_remove=function(){
        let _clsName=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.remove(_clsName)
        // debugger
        bodaEnv.toolsFunc.console_copy( `DOMTokenList_remove -> `,_clsName);
        let prepNode=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'classList')
        prepNode.classList
    }
    bodaEnv.envFunc.DOMTokenList_add=function(){
        let _clsName=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.add(_clsName)
        // debugger
        bodaEnv.toolsFunc.console_copy( `DOMTokenList_add -> `,_clsName);
        let prepNode=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'classList')
        prepNode.classList
    }
    bodaEnv.envFunc.Element_classList_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let tempclassList=thisNode.classList
        let _classList=[]
        let isliveClassList=bodaEnv.memory.classListMap.get(this)
        if (isliveClassList){
            isliveClassList.__proto__=Array.prototype
            if (isliveClassList.length==tempclassList.length){
                bodaEnv.toolsFunc.console_copy(`Element_classList_get ->res -> `,isliveClassList);
                isliveClassList.__proto__=DOMTokenList.prototype
                return isliveClassList
            }
            while(isliveClassList.length){
                isliveClassList.pop()
            }
            for(let classNum=0;classNum<tempclassList.length;classNum++){
                let _clsnode=bodaEnv.memory.WeakMap.get(tempclassList[classNum])

                isliveClassList.push(_clsnode)
            }
            bodaEnv.toolsFunc.console_copy(thisNode ,`-> Element_classList_get ->res -> `,isliveClassList);
            isliveClassList.__proto__=DOMTokenList.prototype
            return isliveClassList
        }
        // debugger   
        if (tempclassList.length){
            for(let classNum=0;classNum<tempclassList.length;classNum++){
                let _clsnode=bodaEnv.memory.WeakMap.get(tempclassList[classNum])
                _classList.push(_clsnode)
            }
        }
        bodaEnv.toolsFunc.console_copy(thisNode ,`-> Element_classList_get ->res -> `,_classList);
        _classList.__proto__=DOMTokenList.prototype
        bodaEnv.memory.WeakMap.set(tempclassList,_classList)
        bodaEnv.memory.WeakMap.set(_classList,tempclassList)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_classList,'classList',this)
        bodaEnv.memory.classListMap.set(this,_classList)
        return _classList
    }
    
    bodaEnv.envFunc.HTMLCanvasElement_toDataURL=function(){
        // debugger
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let canvasType=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(thisNode,'getContext')
        if (canvasType=='2d'){
            let _res=bodaEnv.memory.HTMLCanvasElement_toDataURL_canvas

            bodaEnv.toolsFunc.console_copy(this ,`-> HTMLCanvasElement_toDataURL -> '2d' -> `,_res);

            return _res
        }else if (canvasType=='webgl'){
            let _res=bodaEnv.memory.HTMLCanvasElement_toDataURL_webgl
            bodaEnv.toolsFunc.console_copy(this ,`-> HTMLCanvasElement_toDataURL -> 'webgl' -> `,_res);

            return _res
        }

        else{
            let arg0=arguments[0]
            let arg1=arguments[1]
            if ((arg0 =="image/webp" && arg1== 0) ){
                let _res='data:image/webp;base64,UklGRogCAABXRUJQVlA4WAoAAAAwAAAAKwEAlQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZBTFBIEgAAAAEHEBEREJAk/v8fRfQ/7X9DAFZQOCCAAAAAcA0AnQEqLAGWAD/9/v9/v7s2siAoA/A/iWlu4XaxG0AJ7APfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32rAAA/v8UMAAAAAAAAAA='
                bodaEnv.toolsFunc.console_copy(this ,`-> HTMLCanvasElement_toDataURL -> arg0 -> ${arg0} -> arg1 -> ${arg1}`);

                return _res
            }
            bodaEnv.toolsFunc.console_copy(this ,`-> HTMLCanvasElement_toDataURL -> ${canvasType} 错误未实现`);

        }

    }


    bodaEnv.envFunc.HTMLMediaElement_canPlayType = function HTMLMediaElement_canPlayType() {
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
                bodaEnv.toolsFunc.console_copy(`HTMLMediaElement_canPlayType `, `canplaytype->${canplaytype}未实现 !!!!!!!!!`);
        }
        bodaEnv.toolsFunc.console_copy(`HTMLMediaElement_canPlayType `, `canplaytype ->${canplaytype}`, `-> res ->${res}`);
        return res;
    };

    bodaEnv.envFunc.Document_hidden_get=function (){
        bodaEnv.toolsFunc.console_copy(`Document_hidden_get ->`, false);

        return false
    }
    bodaEnv.envFunc.Node_nodeType_get=function(){
        // debugger
        if (this ==document){
            bodaEnv.toolsFunc.console_copy(this,`-> Node_nodeType_get ->`, 9);

            return 9
        }
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.nodeType
        bodaEnv.toolsFunc.console_copy(this,`-> Node_nodeType_get ->`, _res);
        return _res
    }
    
    bodaEnv.envFunc.Node_nextSibling_get=function(){
        // debugger
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.nextSibling
        let _resNode=bodaEnv.memory.WeakMap.get(_res)
        bodaEnv.toolsFunc.console_copy(this,`-> Node_nextSibling_get ->`, _resNode);

        return _resNode
    }

    bodaEnv.envFunc.Node_firstChild_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.firstChild
        // debugger
        if (!_res){
            bodaEnv.toolsFunc.console_copy(this,`-> Node_firstChild_get ->`, null);

            return null
        }
        let _resNode=bodaEnv.memory.WeakMap.get(_res)
        if (!_resNode){
            let newNode=bodaEnv.toolsFunc.setProto(_res.nodeName)
            bodaEnv.memory.WeakMap.set(newNode,_res)
            bodaEnv.memory.WeakMap.set(_res,newNode)

            bodaEnv.toolsFunc.console_copy(this,`-> Node_firstChild_get ->`, newNode);

            return newNode
        }
        bodaEnv.toolsFunc.console_copy(this,`-> Node_firstChild_get ->`, _resNode);

        return _resNode
    }
    bodaEnv.envFunc.Element_tagName_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.tagName
        bodaEnv.toolsFunc.console_copy(`Element_tagName_get ->`, _res);

        return _res
    }
    bodaEnv.envFunc.HTMLAnchorElement_hostname_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.hostname
        bodaEnv.toolsFunc.console_copy(`HTMLAnchorElement_hostname_get ->`, _res);
        return _res

    }
    bodaEnv.envFunc.HTMLAnchorElement_host_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.host
        bodaEnv.toolsFunc.console_copy(`HTMLAnchorElement_host_get ->`, _res);
        return _res

    }
    
    bodaEnv.envFunc.HTMLAnchorElement_toString=function(){
        // debugger
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=''
        if (thisNode.href){
            bodaEnv.toolsFunc.throwError('TypeError','HTMLAnchorElement_toString  href存在值 需要主动调整!!!')
        }
        bodaEnv.toolsFunc.console_copy(`HTMLAnchorElement_toString -> 可能存在检测 !!!!!`, _res);
        return _res

    }
    bodaEnv.envFunc.HTMLAnchorElement_search_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.search
        bodaEnv.toolsFunc.console_copy(`HTMLAnchorElement_search_get ->`, _res);
        return _res

    }
    bodaEnv.envFunc.HTMLAnchorElement_hash_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.hash
        bodaEnv.toolsFunc.console_copy(`HTMLAnchorElement_hash_get ->`, _res);
        return _res

    }
    bodaEnv.envFunc.HTMLAnchorElement_pathname_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.pathname
        bodaEnv.toolsFunc.console_copy(`HTMLAnchorElement_pathname_get ->`, _res);
        return _res

    }
    bodaEnv.envFunc.HTMLAnchorElement_port_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.port
        bodaEnv.toolsFunc.console_copy(`HTMLAnchorElement_port_get ->`, _res);
        return _res

    }
    bodaEnv.envFunc.HTMLAnchorElement_protocol_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _res=thisNode.protocol
        bodaEnv.toolsFunc.console_copy(`HTMLAnchorElement_protocol_get ->`, _res);
        return _res

    }

    bodaEnv.envFunc.HTMLAnchorElement_href_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _href=thisNode.href
        bodaEnv.toolsFunc.console_copy(`HTMLAnchorElement_href_get ->`, _href);
        return _href

    }

    bodaEnv.envFunc.HTMLAnchorElement_href_set=function(){
        let arg=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.href=arg
        bodaEnv.toolsFunc.console_copy(`HTMLAnchorElement_href_set ->`, arg);
        return arg

    }

    bodaEnv.envFunc.Element_id_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        if (this instanceof HTMLFormElement){
            let thisNodeChilds=thisNode.childNodes
            for(let _child of thisNodeChilds){
                let childname=_child.getAttribute('name')
                if (childname=='id'){
                    let _childNode=bodaEnv.memory.WeakMap.get(_child)
                    bodaEnv.toolsFunc.console_copy(this,`-> Element_id_get ->id ->`, _childNode);
                    return _childNode
                }
            }
        }
        let _id=thisNode.id
        bodaEnv.toolsFunc.console_copy(this,`-> Element_id_get -> id -> `,_id);
        return _id
    }
    bodaEnv.envFunc.HTMLElement_innerText_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        if (this instanceof HTMLFormElement){
            let thisNodeChilds=thisNode.childNodes
            for(let _child of thisNodeChilds){
                let childname=_child.getAttribute('id')
                if (childname=='innerText'){
                    let _childNode=bodaEnv.memory.WeakMap.get(_child)
                    bodaEnv.toolsFunc.console_copy(this,`-> HTMLElement_innerText_get ->innerText ->`, _childNode);
                    return _childNode
                }
            }
        }
        let _innerText=thisNode.innerText
        bodaEnv.toolsFunc.console_copy(this,`-> HTMLElement_innerText_get -> id -> `,_innerText);
        return _innerText
    }



    bodaEnv.envFunc.Node_textContent_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        let thisNodeChilds=thisNode.childNodes
        for(let _child of thisNodeChilds){
            let childname=_child.getAttribute('name')
            if (childname=='textContent'){
                let _childNode=bodaEnv.memory.WeakMap.get(_child)
                bodaEnv.toolsFunc.console_copy(this,`-> Node_textContent_get ->textContent ->`, _childNode);
                return _childNode
            }
        }
        bodaEnv.toolsFunc.console_copy(this,`-> Node_textContent_get -> 未获取到结果!!!!`);
    }
    bodaEnv.envFunc.HTMLFormElement_action_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        let thisNodeChilds=thisNode.childNodes
        for(let _child of thisNodeChilds){
            let childname=_child.getAttribute('name')
            if (childname=='action'){
                let _childNode=bodaEnv.memory.WeakMap.get(_child)
                bodaEnv.toolsFunc.console_copy(this,`-> HTMLFormElement_action_get ->action ->`, _childNode);
                return _childNode
            }
        }
        bodaEnv.toolsFunc.console_copy(this,`-> HTMLFormElement_action_get -> 未获取到结果!!!!`);
    }
    bodaEnv.envFunc.HTMLInputElement_type_set=function(){
        let arg=arguments[0]
        // debugger
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        thisNode.type=arg
        bodaEnv.toolsFunc.console_copy(`HTMLInputElement_type_set ->type ->`, arg);

        return arg

    }

    bodaEnv.envFunc.HTMLInputElement_name_set=function(){
        let arg=arguments[0]
        // debugger
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        thisNode.name=arg
        bodaEnv.toolsFunc.console_copy(`HTMLInputElement_name_set ->name ->`, arg);

        return arg

    }
    bodaEnv.envFunc.HTMLFormElement_action_set=function(){
        let arg=arguments[0]
        // debugger
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.action=arg
        bodaEnv.toolsFunc.console_copy(`HTMLFormElement_action_set ->action ->`, arg);

        return arg

    }
    bodaEnv.envFunc.HTMLAllCollection_length_get = function () {
        // debugger;
        let len = bodaEnv.memory.all.length;
        // debugger
        bodaEnv.toolsFunc.console_copy(`HTMLAllCollection_length_get 长度-->`, len);
        return len;
    };

    bodaEnv.envFunc.IDBRequest_onsuccess_set = function IDBRequest_onsuccess_set() {
        let onsuccess = arguments[0];
        bodaEnv.memory.IDBRequest['onsuccess'] = onsuccess;
        bodaEnv.toolsFunc.console_copy(`IDBRequest_onsuccess_set `, `${onsuccess} `, `!!!!!!!!!未完善!!!!!!!!!!!!  `);

        return onsuccess;
    };
    bodaEnv.envFunc.IDBOpenDBRequest_onupgradeneeded_set = function IDBOpenDBRequest_onupgradeneeded_set() {
        let onupgradeneeded = arguments[0];
        bodaEnv.memory.IDBOpenDBRequest['onupgradeneeded'] = onupgradeneeded;
        bodaEnv.toolsFunc.console_copy(`IDBOpenDBRequest_onupgradeneeded_set `, `${onupgradeneeded} `, `!!!!!!!!!未完善!!!!!!!!!!!!  `);

        return onupgradeneeded;
    };
    bodaEnv.envFunc.IDBRequest_onerror_set = function IDBRequest_onerror_set() {
        let onerror = arguments[0];
        bodaEnv.memory.IDBRequest['onerror'] = onerror;
        bodaEnv.toolsFunc.console_copy(`IDBRequest_onerror_set `, `${onerror} `, `!!!!!!!!!未完善!!!!!!!!!!!!  `);

        return onerror;
    };

    bodaEnv.envFunc.HTMLAllCollection_item = function () {
        // debugger
        let item_ = arguments[0]
        let res = bodaEnv.memory.all[item_]
        bodaEnv.toolsFunc.console_copy(`HTMLAllCollection_item res->`, res)
        return res
    }
    bodaEnv.envFunc.Document_all_get = function Document_all_get() {
        let tags=[]
        // debugger
        for (let dom of bodaEnv.memory.domDocument['all']) {
                let newNode=bodaEnv.memory.WeakMap.get(dom)
                // bodaEnv.sionTools.setProtoAttr.call(newNode,newNode,dom)
                tags.push(newNode)
        }
        bodaEnv.memory.undefined.__proto__ = HTMLAllCollection.prototype
        if (tags.length !=bodaEnv.memory.all.length){
            bodaEnv.memory.all=[]
            for (let i = 0; i < tags.length; i++) {
                if (!bodaEnv.memory.undefined[i]){
                    bodaEnv.toolsFunc.defineProperty_bo(bodaEnv.memory.undefined,i,{
                        configurable:false,
                        enumerable:true,
                        value:tags[i],
                        writable:false
    
                    })
                }

                //该处属性描述符需要进行hook !!!!
                // bodaEnv.memory.undefined[i]=tags[i]
                bodaEnv.memory.all[i]=tags[i]
            }
        }
        bodaEnv.memory.undefined.__proto__[Symbol.iterator] = Array.prototype[Symbol.iterator];
        bodaEnv.toolsFunc.console_copy("Document_all_get  ", `all ->`,bodaEnv.memory.undefined)
        // a=bodaEnv.sionTools.proxy2(a,'document.all')
        return bodaEnv.memory.undefined
    }
    bodaEnv.envFunc.IDBFactory_open = function () {

        let name = arguments[0];
        let verboda = arguments[1];
        let DB = new bodaEnv.memory.globlProtoObj['IDBOpenDBRequest']("bobo");

        bodaEnv.toolsFunc.console_copy(`IDBFactory_open `, `name->${name} `, `verboda->${verboda} ->`, `res ->`, DB);
        return DB;
    };

    bodaEnv.envFunc.MutationObserver_observe = function () {
        // debugger
        let arg = arguments[0];
        if (!arg) {
            return bodaEnv.sionTools.throwError("TypeError", `Failed to execute 'observe' on 'MutationObserver': 1 argument required, but only 0 present.`);
        }
        if (!arg instanceof Node) {
            return bodaEnv.sionTools.throwError("TypeError", `Failed to execute 'observe' on 'MutationObserver': parameter 1 is not of type 'Node'.`);
        }
        bodaEnv.toolsFunc.console_copy(`MutationObserver_observe 未完善 arg->`, arguments[0], ` -> arg1 ->`, bodaEnv.toolsFunc.stringify_bo(arguments[1]));
    };
    bodaEnv.envFunc.Document_createExpression=function(){
        let arg1=arguments[0]
        let arg2=arguments[1]

        let _val=new bodaEnv.memory.globlProtoObj['XPathExpression']('bobo')
        bodaEnv.toolsFunc.console_copy(`Document_createExpression -> ${arg1} -> ${arg2} ->`,_val);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_val,'createExpression',arguments)
        return _val
    }

    bodaEnv.envFunc.Document_cookie_get = function Document_cookie_get() {

        // debugger
        if (bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'isiframe')) {
            bodaEnv.toolsFunc.console_copy(`iframe下的document获取cookie,直接返回''`);
            return '';
        }
        let jsonCookie = bodaEnv.memory.jsonCookie;
        let tempCookie = "";
        // debugger
        let flag = 0
        let fenhao = ''
        for (let  key in jsonCookie) {

            // if (key == 'hasOwnProperty_bo') {
            //   continue;
            // }
            if (flag > 0) {
                fenhao = '; '
            }
            if (key === "") {
                flag  +=1
                tempCookie += `${fenhao}${jsonCookie[key]}`;
            } else {
                flag +=1

                tempCookie += `${fenhao}${key}=${jsonCookie[key]}`;
            }
        }
        // cookie=sionobj.document.cookie
        bodaEnv.toolsFunc.console_copy(`Document_cookie_get `, `cookie -> ${tempCookie}`);
        return tempCookie;
    };
    bodaEnv.envFunc.Document_cookie_set = function Document_cookie_set() {
        let _self=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this)
        // debugger
        if (_self['isiframe']) {
            bodaEnv.toolsFunc.console_copy(`iframe下的document设置cookie,直接返回''`);
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
                if (bodaEnv.memory.jsonCookie[k]) {
                    delete bodaEnv.memory.jsonCookie[k]
                }
                bodaEnv.toolsFunc.console_copy(`Document_cookie_set -> arg -> `, arguments[0], `过期时间小于当前时间,不进行设置并且重置已有cookie`);
                // bodaEnv.toolsFunc.console_copy(`当前cookie 为 ->`, document.cookie)
                return arguments[0];
            }
        }

        if (cookieValue.indexOf("=") === -1) {
            bodaEnv.memory.jsonCookie[""] = cookieValue.trim();
        } else {
            let item = cookieValue.split("=");
            let k = item[0].trim();
            let v = item[1].trim();
            bodaEnv.memory.jsonCookie[k] = v;
        }
        // sionobj.document.cookie=cookieValue
        bodaEnv.toolsFunc.console_copy(`Document_cookie_set -> arg -> `, arguments[0])
        bodaEnv.toolsFunc.console_copy(`Document_cookie_set -> -> 过期时间 -> `, expiresTime)
        bodaEnv.toolsFunc.console_copy(`Document_cookie_set -> -> cookieValue -> `, cookieValue)
        
            // bodaEnv.toolsFunc.console_copy(`当前cookie 为 ->`, document.cookie)
        return arguments[0];;
    };
    bodaEnv.envFunc.Document_visibilityState_get = function Document_visibilityState_get() {

        bodaEnv.toolsFunc.console_copy("Document_visibilityState_get  未完善 visibilitychange事件来监听文档的可见性", 'visible');
        return 'visible';
    };
    bodaEnv.envFunc.HTMLMetaElement_content_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        let _res=thisNode.content
        bodaEnv.toolsFunc.console_copy(this,`-> HTMLMetaElement_content_get -> `,_res)

        return _res
    }
    bodaEnv.envFunc.Node_parentNode_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        let parentVal=thisNode.parentNode
        let _res=bodaEnv.memory.WeakMap.get(parentVal)
        bodaEnv.toolsFunc.console_copy(this,`-> Node_parentNode_get -> `,_res)

        return _res
    }
    bodaEnv.envFunc.Element_getAttribute=function(){
        let arg=arguments[0]
        // if (arg=='src'){debugger}
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _getAttr=thisNode.getAttribute(arg)
        bodaEnv.toolsFunc.console_copy(this,`-> Element_getAttribute -> ${arg} -> `,_getAttr)

        return _getAttr
    }
    bodaEnv.envFunc.Document_createElement=function (){
        // debugger
        let arg=arguments[0]
        let res=bodaEnv.toolsFunc.setProto(arg)
        let tempRes=bodaEnv.memory.tempDocument.createElement(arg)
        bodaEnv.memory.WeakMap.set(res,tempRes)
        bodaEnv.memory.WeakMap.set(tempRes,res)
        if (res instanceof HTMLAnchorElement){
            bodaEnv.toolsFunc.console_copy(`Document_createElement -> ${arg} -> HTMLAnchorElement`)
            // bodaEnv.toolsFunc.console_copy(res)
        }else{
            bodaEnv.toolsFunc.console_copy(`Document_createElement -> ${arg} -> `,res)

        }
        // debugger
        return res
    }
    bodaEnv.envFunc.Document_scripts_get=function(){
        // debugger
        let _scriptsCollection=document.getElementsByTagName('script','bobo')
        bodaEnv.toolsFunc.console_copy(this,`-> Document_scripts_get -> `,_scriptsCollection)
        return _scriptsCollection
    }

    bodaEnv.envFunc.Node_parentElement_get=function(){
        
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _parentEle=thisNode.parentElement
        let _result=bodaEnv.memory.WeakMap.get(_parentEle)

        bodaEnv.toolsFunc.console_copy(this,`-> Node_parentElement_get -> ${_result}`,)

        return _result


    }

    bodaEnv.envFunc.Node_removeChild=function(){
        // debugger
        let _child=arguments[0]
        let _targetNode=bodaEnv.memory.WeakMap.get(_child)
        let tarind=bodaEnv.memory.domDocument[_targetNode.nodeName].indexOf(_targetNode)
        bodaEnv.memory.domDocument[_targetNode.nodeName].splice(tarind,1)

        let tarAllind=bodaEnv.memory.domDocument.all.indexOf(_targetNode)
        bodaEnv.memory.domDocument.all.splice(tarAllind,1)

        let thisNode=bodaEnv.memory.WeakMap.get(this)
        
        let _parentEle=thisNode.removeChild(_targetNode)
        // debugger
        if (_targetNode.id){
            delete window.__proto__.__proto__[_targetNode.id]
        }
  
        // if (ee.indexOf())
        bodaEnv.toolsFunc.console_copy(this,`-> Node_removeChild -> ${_child}`,)
        // debugger
        return _child


    }


    bodaEnv.envFunc.Document_body_get=function(){
        // debugger
        if (!bodaEnv.memory.domDocument['BODY']){
            bodaEnv.toolsFunc.console_copy(this,`-> Document_body_get -> null`,)

            return null
        }
        let _thisNode=bodaEnv.memory.WeakMap.get( bodaEnv.memory.tempDocument.body)
        // let _parentEle=thisNode.parentElement
        // let _result=bodaEnv.memory.WeakMap.get(_parentEle)

        bodaEnv.toolsFunc.console_copy(this,`-> Document_body_get -> ${_thisNode}`,)

        return _thisNode


    }
    bodaEnv.envFunc.HTMLCanvasElement_width_set=function (){
        // debugger
        let _width=arguments[0]
        let thisNode= bodaEnv.memory.WeakMap.get(this)
        thisNode.width=_width
        bodaEnv.toolsFunc.console_copy(`HTMLCanvasElement_width_set -> ${_width}`,)

        return _width
    }
    bodaEnv.envFunc.HTMLCanvasElement_height_set=function (){
        // debugger
        let _height=arguments[0]
        let thisNode= bodaEnv.memory.WeakMap.get(this)
        thisNode.height=_height
        bodaEnv.toolsFunc.console_copy(`HTMLCanvasElement_height_set -> ${_height}`,)

        return _height
    }
    bodaEnv.envFunc.Node_cloneNode=function (){
        let _bool=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        //debugger
        let clone_=thisNode.cloneNode(_bool)
        let cloneProto=bodaEnv.toolsFunc.setProto(clone_.nodeName)
        let cloneChilds=clone_.childNodes
        if (cloneChilds.length){
            for (let i=0;i<cloneChilds.length;i++){
                let islivecloneChild=bodaEnv.memory.WeakMap.get(cloneChilds[i])
                if (!islivecloneChild){
                    let cloneChildProto=bodaEnv.toolsFunc.setProto(cloneChilds[i].nodeName)
                    bodaEnv.memory.WeakMap.set(cloneChilds[i],cloneChildProto)
                    bodaEnv.memory.WeakMap.set(cloneChildProto,cloneChilds[i])
                }

            }
        }
        bodaEnv.memory.WeakMap.set(clone_,cloneProto)
        bodaEnv.memory.WeakMap.set(cloneProto,clone_)

        bodaEnv.toolsFunc.console_copy(this,`-> Node_cloneNode -> ${_bool} -> ${cloneProto}`,)

        return cloneProto
    }
    bodaEnv.envFunc.Element_className_set=function (){
        // debugger
        let _className=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.className=_className
        bodaEnv.toolsFunc.console_copy(`Element_className_set -> className -> ${_className}`,)
        return _className
    }
    bodaEnv.envFunc.Element_innerHTML_set=function (){
        // debugger
        let _innerHTML=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.innerHTML=_innerHTML
        // debugger
        bodaEnv.toolsFunc.console_copy(this,` -> Element_innerHTML_set -> innerHTML -> ${_innerHTML}`,)

        let childsNodeLis=thisNode.getElementsByTagName('*').cache
        for (let child of childsNodeLis){
            let _tempNode=null
            let tempisliveChild=bodaEnv.memory.WeakMap.get(child)
            // debugger
            if (!tempisliveChild){
                _tempNode=bodaEnv.toolsFunc.setProto(child.nodeName)
                bodaEnv.memory.WeakMap.set(_tempNode,child)
                bodaEnv.memory.WeakMap.set(child,_tempNode)

            }
            // debugger
            bodaEnv.toolsFunc.SetStyleProp(child)
            if (bodaEnv.memory.domDocument[thisNode.tagName] && bodaEnv.memory.domDocument[thisNode.tagName].indexOf(thisNode)!=-1){
                if (!bodaEnv.memory.domDocument[child.tagName]){
                    bodaEnv.memory.domDocument[child.tagName.toUpperCase()]=[]
                }
                if (bodaEnv.memory.domDocument[child.tagName].indexOf(child) ==-1){
                    bodaEnv.memory.domDocument[child.tagName].push(child)
                }
              
            }
        }
        //全局bodaEnv.memory.domDocument 维护存在问题

        return _innerHTML
    }


    bodaEnv.envFunc.Document_getElementById=function(){
        let _getElementById=arguments[0]
        let idEle=bodadominoWindow.document.getElementById(_getElementById)
        
        if (!idEle){
            bodaEnv.toolsFunc.console_copy(`Document_getElementById -> id ->`,_getElementById,'-> res ->',null)

            return null
        }
        let res=bodaEnv.memory.WeakMap.get(idEle)
        bodaEnv.toolsFunc.console_copy(`Document_getElementById -> id ->`,_getElementById,'-> res ->',res)

        return res
    }
    bodaEnv.envFunc.Document_documentElement_get=function (){
        // debugger
        if (!bodaEnv.memory.domDocument['HTML']){
            bodaEnv.toolsFunc.console_copy(`Document_documentElement_get ->`,null)
            return null

        }
        let _documentElement=bodaEnv.memory.WeakMap.get(bodadominoWindow.document.documentElement)
        bodaEnv.toolsFunc.console_copy(`Document_documentElement_get ->`,_documentElement)
        return _documentElement
    }
    bodaEnv.envFunc.HTMLCanvasElement_getContext=function(){
        let _type=arguments[0]
        // debugger
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let context = null
        switch (_type) {
            case "2d":
                context = new CanvasRenderingContext2D('bobo')
                bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(thisNode, 'getContext', _type)
                bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(thisNode, 'context', context)
                bodaEnv.memory.WeakMap.set(context,thisNode)
                bodaEnv.toolsFunc.console_copy(`HTMLCanvasElement_getContext ->`, `type->${_type} `, `-> res -> ${context}`)
                break
            case "webgl":
                // context = context.getContext('2d')
                context = new WebGLRenderingContext('bobo')
                bodaEnv.memory.WeakMap.set(context,thisNode)

                bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(thisNode, 'getContext', _type)
                bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(thisNode, 'context', context)
                bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(context, 'canvas', this)

                bodaEnv.toolsFunc.console_copy(`HTMLCanvasElement_getContext ->`, `type->${_type} `, `-> res -> ${context}`)
                break
            case "webgl2":
                // context = context.getContext('2d')
                context = new WebGL2RenderingContext('bobo')
                bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(thisNode, 'getContext', _type)
                bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(thisNode, 'context', context)
                bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(context, 'canvas', this)
                bodaEnv.memory.WeakMap.set(context,thisNode)

                bodaEnv.toolsFunc.console_copy(`HTMLCanvasElement_getContext ->`, `type->${_type} `, `-> res -> ${context}`)
                break
            case 'experimental-webgl':
                context = new WebGLRenderingContext('bobo')
                bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(thisNode, 'getContext', _type)
                bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(thisNode, 'context', context)
                bodaEnv.memory.WeakMap.set(context,thisNode)

                bodaEnv.toolsFunc.console_copy(`HTMLCanvasElement_getContext ->`, `type->${_type} `, `context->${context} !!!!!!!!!未完善!!!!!!!!!!!! `)
                // bodaEnv.sionTools.setProtoAttr.call(context, "canvas", this);
                // bodaEnv.sionTools.setProtoAttr.call(this, "type", type);
                break
            default:
                bodaEnv.toolsFunc.console_copy(`HTMLCanvasElement_getContext ->`, `错误${_type}属性未实现  `)
                break
        }
        return context

    }
    bodaEnv.envFunc.HTMLImageElement_crossOrigin_set=function (){
        // debugger
        let _crossOrigin=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.crossOrigin=_crossOrigin
        bodaEnv.toolsFunc.console_copy(`HTMLImageElement_crossOrigin_set ->`,_crossOrigin)
        return _crossOrigin
    }   
    bodaEnv.envFunc.HTMLImageElement_src_set=function(){
        let _src=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.src=_src
        bodaEnv.toolsFunc.console_copy(`HTMLImageElement_src_set ->`,_src)
        return _src
    }
    bodaEnv.envFunc.HTMLElement_style_get=function(){
        let _arg=arguments[0]
        // debugger

        let isliveStyle=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'style')
        if (isliveStyle){

            bodaEnv.toolsFunc.console_copy(this ,`-> HTMLElement_style_get -> res -> `,isliveStyle)

            return isliveStyle
        }
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        let _style=bodaEnv.memory.globlProtoObj['CSSStyleDeclaration2']
        _style=bodaEnv.toolsFunc.proxyHelper(_style,'CSSStyleDeclaration2:proxyHelper')
        // debugger
        bodaEnv.toolsFunc.console_copy(this ,`-> HTMLElement_style_get -> res -> `,_style)

        // bodaEnv.memory.WeakMap.set(thisNode,_style)
        bodaEnv.memory.WeakMap.set(_style,thisNode)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'style',_style)
        return _style
    }
    bodaEnv.envFunc.Element_innerHTML_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let _innerHTML=thisNode.innerHTML
        bodaEnv.toolsFunc.console_copy(this ,`-> Element_innerHTML_get -> res -> `,_innerHTML)

        return _innerHTML
    }
    bodaEnv.envFunc.Element_id_set=function(){
        let _id=arguments[0]
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        thisNode.id=_id
        if (bodaEnv.memory.tempDocument.contains(thisNode)){
            // debugger

            if (!(window.__proto__.__proto__[_id])) window.__proto__.__proto__[_id]=this
        }
        bodaEnv.toolsFunc.console_copy(this ,`-> Element_id_set -> id -> `,_id)
        return _id

    }

    bodaEnv.envFunc.HTMLElement_offsetHeight_get=function (){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let isLiveStyle=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(thisNode)
        if (isLiveStyle['font-family']){
            let fontfamily=isLiveStyle['font-family'] //_styleObj['font-family']?_styleObj['font-family']:_styleObj['fontFamily']
            // bodaEnv.toolsFunc.console_copy(this, ` -> HTMLElement_offsetHeight_get `, ` fontFamily->${fontfamily}}`);
            let offsetheitght = bodaEnv.memory.fontsize[fontfamily.replace(/"([^"]+)"/g, "$1")][1]
            bodaEnv.toolsFunc.console_copy(this, ` -> HTMLElement_offsetHeight_get `, ` fontFamily->${fontfamily}->offsetWidth->${offsetheitght}  `);

            return offsetheitght;
        }
        //debugger

        let _height=isLiveStyle['height']?Number(isLiveStyle['height'].replace('px','')):0
        if (!(typeof _height =='number')){
            bodaEnv.toolsFunc.console_copy(`HTMLElement_offsetHeight_get -> 错误 ${_height}  类型不正确!!!!!`,)
        }

        if (bodaEnv.memory.tempDocument.getElementsByTagName(thisNode.nodeName).cache.indexOf(thisNode)==-1){
            _height=0
        }
        bodaEnv.toolsFunc.console_copy(this,`-> HTMLElement_offsetHeight_get -> _height -> `,_height)
        return _height 
    }

    bodaEnv.envFunc.HTMLElement_offsetWidth_get=function (){
        //debugger
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let isLiveStyle=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(thisNode)
        if (isLiveStyle['font-family']){

            let fontfamily=isLiveStyle['font-family'] //_styleObj['font-family']?_styleObj['font-family']:_styleObj['fontFamily']
            //bodaEnv.toolsFunc.console_copy(this, ` -> HTMLElement_offsetWidth_get `, ` fontFamily->${fontfamily}}`);
            // fontFamily=fontFamily
            let offsetWidth = bodaEnv.memory.fontsize[fontfamily.replace(/"([^"]+)"/g, "$1")][0]
            bodaEnv.toolsFunc.console_copy(this, ` -> HTMLElement_offsetWidth_get `, ` fontFamily->${fontfamily}->offsetWidth->${offsetWidth}`);
            return offsetWidth;
        }
        let _width=isLiveStyle['width']?Number(isLiveStyle['width'].replace('px','')):0
        if (!(typeof _width =='number')){
            bodaEnv.toolsFunc.console_copy(`HTMLElement_offsetWidth_get -> 错误 ${_width} 类型不正确!!!!!`,)

        }

        if (bodaEnv.memory.tempDocument.getElementsByTagName(thisNode.nodeName).cache.indexOf(thisNode)==-1){
            _width=0
        }

        // debugger
        bodaEnv.toolsFunc.console_copy(`HTMLElement_offsetWidth_get -> _width -> `,_width)
        return _width 
 
    }
    bodaEnv.envFunc.EventTarget_addEventListener=function (){
        // debugger
        let _type=arguments[0]
        let _listener=arguments[1]
        let _capture=arguments[2]
        let _event={
            'type':_type,
            'callback':_listener,
            '_capture':_capture,
            'self':this
        }
        // debugger
        switch (_type){
            case 'focus':
                // if (bodaEnv.memory.runningListern){
                //     if (!bodaEnv.memory.asyncEvent['listener2']){bodaEnv.memory.asyncEvent['listener2']=[]}

                // }else{
                    bodaEnv.memory.asyncEvent['listener']['focus'].push(_event)

                // }
                break
            case 'mousemove':
                // if (bodaEnv.memory.runningListern){
                //     if (!bodaEnv.memory.asyncEvent['listener2']){
                //             bodaEnv.memory.asyncEvent['listener2']=[]
                //         }
                // }else{
                    bodaEnv.memory.asyncEvent['listener']['mousemove'].push(_event)

                // }
                break     
            case 'mouseup':
                // if (bodaEnv.memory.runningListern){
                //     if (!bodaEnv.memory.asyncEvent['listener2']){
                //             bodaEnv.memory.asyncEvent['listener2']=[]
                //         }
                // }else{
                    bodaEnv.memory.asyncEvent['listener']['mouseup'].push(_event)


                // }
                break      
            case 'mousedown':
                // if (bodaEnv.memory.runningListern){
                //     if (!bodaEnv.memory.asyncEvent['listener2']){
                //             bodaEnv.memory.asyncEvent['listener2']=[]
                //         }
                // }else{
                    bodaEnv.memory.asyncEvent['listener']['mousedown'].push(_event)
                // }
                break   
            case 'load':
                // if (bodaEnv.memory.runningListern){
                //     if (!bodaEnv.memory.asyncEvent['listener2']){
                //             bodaEnv.memory.asyncEvent['listener2']=[]
                //         }
                // }else{
                    bodaEnv.memory.asyncEvent['listener']['load'].push(_event)
                // }
                break   
            case 'deviceorientation':
                bodaEnv.memory.asyncEvent['listener']['deviceorientation'].push(_event)
                break
            case 'message':
                bodaEnv.memory.asyncEvent['listener']['message'].push(_event)
                debugger
                break
            case 'click':
                bodaEnv.memory.asyncEvent['listener']['click'].push(_event)
                break   
            case 'input':
                bodaEnv.memory.asyncEvent['listener']['input'].push(_event)
                break  
            case 'focusout':
                bodaEnv.memory.asyncEvent['listener']['focusout'].push(_event)
                break 
            case 'focusin':
                bodaEnv.memory.asyncEvent['listener']['focusin'].push(_event)
                break  
            case 'error':
                bodaEnv.memory.asyncEvent['listener']['error'].push(_event)
                break      
            default:
                bodaEnv.toolsFunc.console_copy(`bodaEnv.memory.asyncEvent[listener] 未实现 ${_type}`)
        }
        // if (bodaEnv.memory.runningListern){
        //     if (!bodaEnv.memory.asyncEvent['listener2']){
        //         bodaEnv.memory.asyncEvent['listener2']=[]
        //     }
        //     bodaEnv.memory.asyncEvent['listener2'].push(_event)
        // }else{
        //     bodaEnv.memory.asyncEvent['listener'].push(_event)

        // }
        bodaEnv.toolsFunc.console_copy(this, `-> EventTarget_addEventListener 注册事件 ->${_type} ->`)

        // debugger
        
    }

    bodaEnv.envFunc.Document_getElementsByClassName=function(){
        let _tagName=arguments[0]
        let tempTagsEle=bodaEnv.memory.tempDocument.getElementsByClassName(_tagName).cache
        // de
        let islivecoll=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,`Document_getElementsByClassName${_tagName}`)
        if (islivecoll){
            bodaEnv.toolsFunc.console_copy(this,`-> Document_getElementsByClassName -> ${_tagName} -> `,islivecoll)
            return islivecoll
        }
        let thisNode=bodaEnv.memory.WeakMap.get(this)

        let _collection= new HTMLCollection('bobo')
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_collection,`HTMLCollection`,tempTagsEle)
        bodaEnv.toolsFunc.console_copy(this,`-> Document_getElementsByClassName -> ${_tagName} -> `,_collection)

        _collection=bodaEnv.toolsFunc.proxyHTMLCollection(_collection,'collection::proxyHTMLCollection')   
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,`Document_getElementsByClassName${_tagName}`,_collection)

        return _collection
    }
    
    bodaEnv.envFunc.Element_children_get=function(){
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        // debugger
        let isliveCollection=bodaEnv.memory.childrenCollectionMap.get(this)
        //domino children实现存在bug
        let tempTagsEle=thisNode.children
        let islivecoll=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,`Element_children_get`)
        if (islivecoll){
            bodaEnv.toolsFunc.console_copy(this,`-> Element_children_get -> `,islivecoll)
            return islivecoll
        }

        let _collection= new HTMLCollection('bobo')
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_collection,`HTMLCollection`,tempTagsEle)
        bodaEnv.toolsFunc.console_copy(this,`-> Element_children_get ->   -> `,_collection)

        _collection=bodaEnv.toolsFunc.proxyHTMLCollection(_collection,'collection::proxyHTMLCollection')   
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,`Element_children_get`,_collection)

        return _collection

    }
    bodaEnv.envFunc.Document_getElementsByTagName=function(){
        let _tagName=arguments[0].toUpperCase()
        // let _collection=[]
        // debugger
        // if (_tagName=='BASE') debugger
        let tempTagsEle=bodaEnv.memory.domDocument[_tagName]?bodaEnv.memory.domDocument[_tagName]:[]

        let islivecoll=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,`Document_getElementsByTagName${_tagName}`)
        if (islivecoll){
            bodaEnv.toolsFunc.console_copy(this,`-> Document_getElementsByTagName -> ${_tagName} -> `,islivecoll)
            return islivecoll
        }
        let thisNode=bodaEnv.memory.WeakMap.get(this)

        let _collection= new HTMLCollection('bobo')
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_collection,`HTMLCollection`,tempTagsEle)
        bodaEnv.toolsFunc.console_copy(this,`-> Document_getElementsByTagName -> ${_tagName} -> `,_collection)

        _collection=bodaEnv.toolsFunc.proxyHTMLCollection(_collection,'collection::proxyHTMLCollection')   
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,`Document_getElementsByTagName${_tagName}`,_collection)

        return _collection
    }

    bodaEnv.envFunc.Element_getElementsByTagName=function(){
        let _tagName=arguments[0].toUpperCase()
        // if (_tagName=='A')debugger
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        let tempTagsEle=thisNode.getElementsByTagName.bind(thisNode,_tagName)
        // debugger
        let islivecoll=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,`Element_getElementsByTagName${_tagName}`)
        if (islivecoll){
                bodaEnv.toolsFunc.console_copy(this,`-> Element_getElementsByTagName -> ${_tagName} -> `,islivecoll)
                return islivecoll
        }
        let _collection= new HTMLCollection('bobo')
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_collection,`HTMLCollection`,tempTagsEle)
        _collection=bodaEnv.toolsFunc.proxyHTMLCollection(_collection,'collection::proxyHTMLCollection')   
        bodaEnv.toolsFunc.console_copy(this,`-> Element_getElementsByTagName -> ${_tagName} -> `,_collection)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,`Element_getElementsByTagName${_tagName}`,_collection)
        return _collection
    }
    bodaEnv.envFunc.Node_appendChild=function (){
        // debugger
        let _appendChild=arguments[0]
        let _targetNode=bodaEnv.memory.WeakMap.get(_appendChild)
        // debugger
        if (!(_appendChild instanceof Node)){
            bodaEnv.toolsFunc.console_copy(this,`-> Node_appendChild -> appendChild -> ${_appendChild}`,)
            return bodaEnv.toolsFunc.throwError(`TypeError`,`Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.`)
        }
        //'[Node_appendChild]正在执行,错误信息HIERARCHY_REQUEST_ERR (3): the operation would yield an incorrect nodes model'
        //报错上面的原因为 thisNode 为targetNode的子节点 ,所以报错了
        let thisNode=bodaEnv.memory.WeakMap.get(this)
        try {
            thisNode.appendChild(_targetNode)

        }catch{
            return bodaEnv.toolsFunc.throwError(`DOMException`,`Failed to execute 'appendChild' on 'Node': The new child element contains the parent.`)
        }
        // debugger
        if (!bodaEnv.memory.domDocument[_targetNode.nodeName])bodaEnv.memory.domDocument[_targetNode.nodeName]=[]
        if (bodaEnv.memory.tempDocument.getElementsByTagName(_targetNode.nodeName).cache.indexOf(_targetNode)!=-1){
            if (bodaEnv.memory.domDocument[_targetNode.nodeName].indexOf(_targetNode)==-1){
                bodaEnv.memory.domDocument.all.push(_targetNode)
                bodaEnv.memory.domDocument[_targetNode.nodeName].push(_targetNode)
                if (_targetNode.childNodes.length){
                    for (let _child of _targetNode.childNodes){
                        if (typeof bodaEnv.memory.domDocument[_child.nodeName] != 'undefined'){
                            bodaEnv.memory.domDocument[_child.nodeName].push(_child)
                            bodaEnv.memory.domDocument.all.push(_child)
                        }else{
                            bodaEnv.memory.domDocument[_child.nodeName]=[]
                            bodaEnv.memory.domDocument[_child.nodeName].push(_child)
                            bodaEnv.memory.domDocument.all.push(_child)
                        }
                    }
                }
                if (_targetNode.nodeName.toUpperCase() =='IFRAME'){
                    // debugger
                    window[bodaEnv.memory.boWindowNum] = new Window('bobo')
                    window[bodaEnv.memory.boWindowNum] =bodaEnv.toolsFunc.proxyWindow(window[bodaEnv.memory.boWindowNum] ,`iframe${bodaEnv.memory.boWindowNum}::proxyWindow`)
                    // window[bodaEnv.memory.boWindowNum]._boContentWindow = true
                    // window[bodaEnv.memory.boWindowNum].self = window[bodaEnv.memory.boWindowNum]
                    // window[bodaEnv.memory.boWindowNum].frames = window[bodaEnv.memory.boWindowNum]
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(window[bodaEnv.memory.boWindowNum],'isiframe',true)

                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(window[bodaEnv.memory.boWindowNum],'self',window[bodaEnv.memory.boWindowNum])
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(window[bodaEnv.memory.boWindowNum],'frames',window[bodaEnv.memory.boWindowNum])
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(window[bodaEnv.memory.boWindowNum],'num',bodaEnv.memory.boWindowNum)
                    bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(_appendChild,'iframe',window[bodaEnv.memory.boWindowNum])

                    bodaEnv.memory.iframe['thisWindow']['this'].push(window[bodaEnv.memory.boWindowNum])
                    bodaEnv.memory.boWindowNum += 1
                }


                if (_targetNode.id){
                    window.__proto__.__proto__[_targetNode.id]=_appendChild
                }
            }
        }
        
        bodaEnv.toolsFunc.console_copy(this,`-> Node_appendChild -> appendChild -> ${_appendChild}`,)
        return _appendChild
    }
	bodaEnv.envFunc.Document_charset_get=function(){
        let _res='UTF-8'
        bodaEnv.toolsFunc.console_copy(`Document_charset_get -> _res -> ${_res}`)

        return _res
    }
    bodaEnv.envFunc.Document_compatMode_get=function(){
        let _res='CSS1Compat'
        bodaEnv.toolsFunc.console_copy(`Document_compatMode_get -> _res -> ${_res}`)

        return _res
    }
    bodaEnv.envFunc.Document_prerendering_get=function(){
        bodaEnv.toolsFunc.console_copy(`Document_prerendering_get -> _res -> ${false}`)

        return false
    }
    
})()
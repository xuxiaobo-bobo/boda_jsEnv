// 浏览器接口具体的实现
;
(function () {

    bodaEnv.envFunc.Path2D_addPath=function(){
        // debugger
        let arg=arguments[0]
        bodaEnv.toolsFunc.console_copy(`Path2D_addPath -> arg -> ${arg}`)

    }


    
    bodaEnv.envFunc.AudioNode_disconnect=function(){
        // debugger
        bodaEnv.toolsFunc.console_copy(`AudioNode_disconnect res->`)

    }
    
    bodaEnv.envFunc.AnalyserNode_getFloatFrequencyData=function(){
        // debugger
        let arg=arguments[0]
        for(let i = 0; i < arg.length; i++){
            arg[i] = -Infinity;
        }
        bodaEnv.toolsFunc.console_copy(`AnalyserNode_getFloatFrequencyData res-> 把参数全转为-Infinity `)
        return arg
    }

    bodaEnv.envFunc.AnalyserNode_frequencyBinCount_get=function(){
            // debugger
            bodaEnv.toolsFunc.console_copy(`AnalyserNode_frequencyBinCount_get res-> 默认返回`,1024)

            return 1024
    }
  
    bodaEnv.envFunc.AudioNode_numberOfOutputs_get=function (){
        bodaEnv.toolsFunc.console_copy(`AudioNode_numberOfInputs_get res->`,0)

        return 0
    }
    bodaEnv.envFunc.AudioNode_channelInterpretation_get=function (){
        bodaEnv.toolsFunc.console_copy(`AudioNode_channelCount_get res->`,'speakers')

        return 'speakers'
    }
    bodaEnv.envFunc.AudioNode_channelCountMode_get=function (){
        bodaEnv.toolsFunc.console_copy(`AudioNode_channelCount_get res->`,'explicit')

        return 'explicit'

    }
    bodaEnv.envFunc.AudioNode_channelCount_get=function (){
        bodaEnv.toolsFunc.console_copy(`AudioNode_channelCount_get res->`,2)

        return 2
    }
    bodaEnv.envFunc.AudioNode_numberOfInputs_get=function (){
        bodaEnv.toolsFunc.console_copy(`AudioNode_numberOfInputs_get res->`,1)

        return 1
    }
    bodaEnv.envFunc.AudioDestinationNode_maxChannelCount_get=function (){
        bodaEnv.toolsFunc.console_copy(`AudioDestinationNode_maxChannelCount_get res->`,2)

        return 2
    }
    bodaEnv.envFunc.BaseAudioContext_sampleRate_get=function (){
        bodaEnv.toolsFunc.console_copy(`BaseAudioContext_sampleRate_get res->`,48000)
        return 48000
    }
    bodaEnv.envFunc.WebGLRenderingContext_getShaderPrecisionFormat = function WebGLRenderingContext_getShaderPrecisionFormat() {
        let shaderType = arguments[0]
        let precisionType = arguments[1]
        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_getShaderPrecisionFormat `, `shaderType:${shaderType} precisionType:${precisionType}  `);

        if (shaderType == 35633 && precisionType == 36338) {
            let shade =new bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"]('bobo')
            // shade._boisinit=true
            // Object.setPrototypeOf(shade, bodaEnv.memory.globalobj['WebGLShaderPrecisionFormat'].prototype)
            // bodaEnv.toolsFunc.symbolProperty(shade)
            return shade
        }else if (shaderType == 35633 && precisionType == 36337){
            let shade =new bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"]('bobo')

            return shade
        }else if (shaderType == 35633 && precisionType == 36336){
            let shade =new bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"]('bobo')

            return shade
        }
        else if (shaderType == 35632 && precisionType == 36338){
            let shade =new bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"]('bobo')

            return shade
        }else if (shaderType == 35632 && precisionType == 36337){
            let shade =new bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"]('bobo')

            return shade
        }else if (shaderType == 35632 && precisionType == 36336){
            let shade =new bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"]('bobo')

            return shade
        }else if (shaderType == 35633 && precisionType == 36341){
            // debugger
            let shade =new bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"]('bobo')
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(shade, 'rangeMax', 30)
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(shade, 'rangeMin', 31)
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(shade, 'precision', 0)
            return shade
        }
        else if (shaderType == 35633 && precisionType == 36340){
            // debugger
            let shade =new bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"]('bobo')
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(shade, 'rangeMax', 30)
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(shade, 'rangeMin', 31)
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(shade, 'precision', 0)
            return shade
        }
        else if (shaderType == 35633 && precisionType == 36339){
            // debugger
            let shade =new bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"]('bobo')
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(shade, 'rangeMax', 30)
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(shade, 'rangeMin', 31)
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(shade, 'precision', 0)
            return shade
        }
        else if (shaderType == 35632 && precisionType == 36341){
            // debugger
            let shade =new bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"]('bobo')
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(shade, 'rangeMax', 30)
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(shade, 'rangeMin', 31)
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(shade, 'precision', 0)
            return shade
        }
        else if (shaderType == 35632 && precisionType == 36340){
            // debugger
            let shade =new bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"]('bobo')
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(shade, 'rangeMax', 30)
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(shade, 'rangeMin', 31)
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(shade, 'precision', 0)
            return shade
        }
        else if (shaderType == 35632 && precisionType == 36339){
            // debugger
            let shade =new bodaEnv.memory.globlProtoObj["WebGLShaderPrecisionFormat"]('bobo')
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(shade, 'rangeMax', 30)
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(shade, 'rangeMin', 31)
            bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(shade, 'precision', 0)
            return shade
        }
        else{
            bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_getShaderPrecisionFormat `, `shaderType:${shaderType} precisionType:${precisionType}  未实现..错误 `);

        }
    }


    bodaEnv.envFunc.GainNode_gain_get=function (){
        let islive=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'gain')
        if (islive){
           bodaEnv.toolsFunc.console_copy(`GainNode_gain_get cache已存在返回 -> `,islive)
           return islive
        }
        let gain=new AudioParam('bobo')
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'gain',gain)
         bodaEnv.toolsFunc.console_copy(`GainNode_gain_get ->gain -> `,gain)
         return gain
    }
    
    bodaEnv.envFunc.BaseAudioContext_createScriptProcessor=function (){
        let process=new ScriptProcessorNode('bobo')
        bodaEnv.toolsFunc.console_copy(`BaseAudioContext_createScriptProcessor res -> `,process)

        return process
    }
    bodaEnv.envFunc.BaseAudioContext_createGain=function (){
        let gain=new GainNode('bobo')
        bodaEnv.toolsFunc.console_copy(`BaseAudioContext_createGain res -> `,gain)

        return gain
    }
    bodaEnv.envFunc.BaseAudioContext_createAnalyser=function (){
        let anglyser=new AnalyserNode('bobo')
        if (arguments.length>0){
            bodaEnv.toolsFunc.console_copy(`BaseAudioContext_createAnalyser arg 未实现错误 -> `)
        }        

        bodaEnv.toolsFunc.console_copy(`BaseAudioContext_createAnalyser res -> `,anglyser)

        return anglyser
    }
    bodaEnv.envFunc.BaseAudioContext_state_get=function (){
        let state=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'close')?bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'close'):bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'suspend')
        if (state ){
            bodaEnv.toolsFunc.console_copy(`AudioContext_baseLatency_get res -> `,state)

            return state
        }
        bodaEnv.toolsFunc.console_copy(`AudioContext_baseLatency_get res -> `,"running")

        return 'running'
    }
    bodaEnv.envFunc.AudioContext_baseLatency_get=function (){
        bodaEnv.toolsFunc.console_copy(`AudioContext_baseLatency_get res -> `,0.01)

        return 0.01
    }
    bodaEnv.envFunc.OfflineAudioContext_oncomplete_set=function (){
        let arg=arguments[0]
        let sionevent={
            'self':this,
            'callback':arg
        }
        bodaEnv.memory.asyncEvent['OfflineAudioContext']['oncomplete'].push(sionevent)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'oncomplete',arg)
        bodaEnv.toolsFunc.console_copy(`OfflineAudioContext_oncomplete_set 当前func 属于事件可能需要调用arg -> `,sionevent)

        return arg
    }
    bodaEnv.envFunc.OfflineAudioContext_startRendering=function (){
        // debugger
        let islive=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'startRendering')
        if (islive){
           bodaEnv.toolsFunc.console_copy(`OfflineAudioContext_startRendering cache已存在返回 -> `,islive)
           return islive
        }
        let renderbuf=new AudioBuffer('bobo')
        let promise=new Promise((resolve, reject) => {
            resolve(renderbuf);
        });
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'startRendering',promise)

        return promise
    }
    bodaEnv.envFunc.AudioScheduledSourceNode_start=function (){
        let arg=arguments[0]
        bodaEnv.toolsFunc.console_copy(`AudioScheduledSourceNode_start arg -> `,arg)
    }
    bodaEnv.envFunc.AudioScheduledSourceNode_stop=function (){
        let arg=arguments[0]
        bodaEnv.toolsFunc.console_copy(`AudioScheduledSourceNode_stop arg -> `,arg)
    }
    bodaEnv.envFunc.BaseAudioContext_destination_get=function (){
        let islive=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'destination')
        if (islive){
           bodaEnv.toolsFunc.console_copy(`BaseAudioContext_destination_get cache已存在返回 -> `,islive)
           return islive
        }
        let destination=new AudioDestinationNode('bobo')
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'destination',destination)
         bodaEnv.toolsFunc.console_copy(`BaseAudioContext_destination_get ->destination -> `,destination)
         return destination

    }
    bodaEnv.envFunc.AudioNode_connect=function (){
        // debugger
        let res=arguments[0]
        bodaEnv.toolsFunc.console_copy(`AudioNode_connect res -> `,res)

        return res

    }
    bodaEnv.envFunc.DynamicsCompressorNode_release_get=function (){
        let islive=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'release')
         if (islive){
            bodaEnv.toolsFunc.console_copy(`DynamicsCompressorNode_release_get cache已存在返回 -> `,islive)
            return islive
         }
         let release=new AudioParam('bobo')
         bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'release',release)
         bodaEnv.toolsFunc.console_copy(`DynamicsCompressorNode_release_get ->knee -> `,release)

         return release

    }
    bodaEnv.envFunc.DynamicsCompressorNode_attack_get=function (){
        let islive=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'attack')
         if (islive){
            bodaEnv.toolsFunc.console_copy(`DynamicsCompressorNode_attack_get cache已存在返回 -> `,islive)
            return islive
         }
         let attack=new AudioParam('bobo')
         bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'attack',attack)
         bodaEnv.toolsFunc.console_copy(`DynamicsCompressorNode_attack_get ->knee -> `,attack)

         return attack

    }
    bodaEnv.envFunc.DynamicsCompressorNode_reduction_get=function (){
        bodaEnv.toolsFunc.console_copy(`DynamicsCompressorNode_reduction_get 默认返回0`)
        return 0
    }
    bodaEnv.envFunc.DynamicsCompressorNode_ratio_get=function (){
        let islive=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'ratio')
         if (islive){
            bodaEnv.toolsFunc.console_copy(`DynamicsCompressorNode_ratio_get cache已存在返回 -> `,islive)
            return islive
         }
         let ratio=new AudioParam('bobo')
         bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'ratio',ratio)
         bodaEnv.toolsFunc.console_copy(`DynamicsCompressorNode_ratio_get ->knee -> `,ratio)

         return ratio

    }
    bodaEnv.envFunc.DynamicsCompressorNode_knee_get=function (){
        let islive=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'knee')
         if (islive){
            bodaEnv.toolsFunc.console_copy(`DynamicsCompressorNode_knee_get cache已存在返回 -> `,islive)
            return islive
         }
         let knee=new AudioParam('bobo')
         bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'knee',knee)
         bodaEnv.toolsFunc.console_copy(`DynamicsCompressorNode_knee_get ->knee -> `,knee)

         return knee

    }

    bodaEnv.envFunc.DynamicsCompressorNode_threshold_get=function (){
        let islive=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'threshold')
         if (islive){
            bodaEnv.toolsFunc.console_copy(`DynamicsCompressorNode_threshold_get cache已存在返回 -> `,islive)
            return islive
         }
         let thres=new AudioParam('bobo')
         bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'threshold',thres)
         bodaEnv.toolsFunc.console_copy(`DynamicsCompressorNode_threshold_get ->thres -> `,thres)

         return thres

    }
    bodaEnv.envFunc.WebGLRenderingContext_clear=function (){
        let arg=arguments[0]
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'clear',arg)
        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_clear ->arg -> `,arg)
    }
    bodaEnv.envFunc.WebGLRenderingContext_depthFunc=function (){
        let arg=arguments[0]
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'depthFunc',arg)
        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_depthFunc ->arg -> `,arg)
    }
    bodaEnv.envFunc.WebGLRenderingContext_enable=function (){
        let arg=arguments[0]
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'enable',arg)
        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_enable ->arg -> `,arg)
    }
    bodaEnv.envFunc.WebGLRenderingContext_clearColor=function (){
        let arg=arguments[0]
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'clearColer',arg)
        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_clearColor ->arg -> `,arg)
    }
    bodaEnv.envFunc.BaseAudioContext_createDynamicsCompressor=function (){
        let dynami=new DynamicsCompressorNode('bobo')
        bodaEnv.toolsFunc.console_copy(`BaseAudioContext_createDynamicsCompressor ->res -> `,dynami)
        return dynami
    }
    bodaEnv.envFunc.AudioParam_value_set=function (){
        let arg=arguments[0]
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'value',arg)
        bodaEnv.toolsFunc.console_copy(`AudioParam_value_set ->arg -> `,arg)
        return arg
    }
    bodaEnv.envFunc.OscillatorNode_frequency_get=function (){
        if (bodaEnv.memory.cache['OscillatorNode_frequency_get']['res'] && bodaEnv.memory.cache['OscillatorNode_frequency_get']['this']==this){
            bodaEnv.toolsFunc.console_copy(`OscillatorNode_frequency_get -> cache已存在直接返回 `)

            return bodaEnv.memory.cache['OscillatorNode_frequency_get']['res']
        }
        let freq=new AudioParam('bobo')
        bodaEnv.toolsFunc.console_copy(`OscillatorNode_frequency_get ->res -> `,freq)
        bodaEnv.memory.cache['OscillatorNode_frequency_get']['res']=freq
        bodaEnv.memory.cache['OscillatorNode_frequency_get']['this']=this
        return freq
    }
    bodaEnv.envFunc.OscillatorNode_type_set=function (){
        let arg=arguments[0]
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'type',arg)
        bodaEnv.toolsFunc.console_copy(`OscillatorNode_type_set ->arg -> `,arg)

        return arg
    }
    bodaEnv.envFunc.BaseAudioContext_createOscillator=function (){
        let oscillator =new OscillatorNode('bobo')
        bodaEnv.toolsFunc.console_copy(`BaseAudioContext_createOscillator ->res -> `,oscillator)
        return oscillator
    }
    bodaEnv.envFunc.WebGL2RenderingContext_getSupportedExtensions=function (){
        // let arg=arguments[0]
        let ext=['EXT_color_buffer_float', 'EXT_color_buffer_half_float', 'EXT_disjoint_timer_query_webgl2', 'EXT_float_blend', 'EXT_texture_compression_bptc',
         'EXT_texture_compression_rgtc', 'EXT_texture_filter_anisotropic', 'EXT_texture_norm16', 'KHR_parallel_shader_compile', 
         'OES_draw_buffers_indexed', 'OES_texture_float_linear', 'OVR_multiview2', 
         'WEBGL_compressed_texture_s3tc', 'WEBGL_compressed_texture_s3tc_srgb', 'WEBGL_debug_renderer_info',
          'WEBGL_debug_shaders', 'WEBGL_lose_context', 'WEBGL_multi_draw', 'WEBGL_provoking_vertex']
        bodaEnv.toolsFunc.console_copy(`WebGL2RenderingContext_getSupportedExtensions ->res -> `,ext)
        
        return ext

    }
    bodaEnv.envFunc.WebGL2RenderingContext_canvas_get=function (){
        let cavans=new HTMLCanvasElement('bobo')
        bodaEnv.toolsFunc.console_copy(`WebGL2RenderingContext_canvas_get ->res -> `,cavans)

        return cavans
    }
    bodaEnv.envFunc.WebGL2RenderingContext_drawArrays=function (){
        bodaEnv.toolsFunc.console_copy(`WebGL2RenderingContext_drawArrays -> args ->${arguments[0]} ->${arguments[1]} ->${arguments[2]}`)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'drawArrays',arguments)
    }
    bodaEnv.envFunc.WebGL2RenderingContext_uniform2f=function (){
        bodaEnv.toolsFunc.console_copy(`WebGL2RenderingContext_uniform2f -> arg0 ->${arguments[0]} -> arg1 -> ${arguments[1]} -> arg2 -> ${arguments[2]}`)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'uniform2f',arguments)
        // return 0
    }

    bodaEnv.envFunc.WebGL2RenderingContext_vertexAttribPointer=function (){
        bodaEnv.toolsFunc.console_copy(`WebGL2RenderingContext_vertexAttribPointer ->args -> ${arguments}`)
        // return 0
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'vertexAttribPointer',arguments)

    }   

    bodaEnv.envFunc.WebGL2RenderingContext_enableVertexAttribArray=function (){
        bodaEnv.toolsFunc.console_copy(`WebGL2RenderingContext_enableVertexAttribArray -> arg ->${arguments[0]}`)
        // return 0
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'enableVertexAttribArray',arguments[0])
    }  

     bodaEnv.envFunc.WebGL2RenderingContext_getUniformLocation=function (){
        bodaEnv.toolsFunc.console_copy(`WebGL2RenderingContext_getUniformLocation -> arg0 ->${arguments[0]} -> arg1 -> ${arguments[1]}  默认返回null`)
        return  null
        // return 0
    }

    bodaEnv.envFunc.WebGL2RenderingContext_getAttribLocation=function (){
        bodaEnv.toolsFunc.console_copy(`WebGL2RenderingContext_getAttribLocation -> arg0 ->${arguments[0]} -> arg1 -> ${arguments[1]}  默认返回0`)
        return 0
    }
    bodaEnv.envFunc.WebGL2RenderingContext_useProgram=function (){
        bodaEnv.toolsFunc.console_copy(`WebGL2RenderingContext_useProgram -> arg ->  ${arguments[0]}`)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'useProgram',arguments)
    }
    bodaEnv.envFunc.WebGL2RenderingContext_linkProgram=function (){
        bodaEnv.toolsFunc.console_copy(`WebGL2RenderingContext_linkProgram -> arg ->  ${arguments[0]}`)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'linkProgram',arguments)
    }
    bodaEnv.envFunc.WebGL2RenderingContext_attachShader=function (){
        bodaEnv.toolsFunc.console_copy(`WebGL2RenderingContext_attachShader -> arg0 -> ${arguments[0]} -> arg1 -> ${arguments[1]}`)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'attachShader',arguments)
    }
    bodaEnv.envFunc.WebGL2RenderingContext_compileShader=function (){
        bodaEnv.toolsFunc.console_copy(`WebGL2RenderingContext_compileShader -> arg ->`,arguments[0])
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'compileShader',arguments[0])
    }
    bodaEnv.envFunc.WebGL2RenderingContext_shaderSource=function (){
        // let createShader=new WebGLShader('bobo')
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'shaderSource',arguments)
        bodaEnv.toolsFunc.console_copy(`WebGL2RenderingContext_shaderSource -> arg0 ->`,arguments[0],`-> arg1 ->`,arguments[1])
        // return createShader
    }
    bodaEnv.envFunc.WebGL2RenderingContext_createShader=function (){
        let createShader=new WebGLShader('bobo')
        bodaEnv.toolsFunc.console_copy(`WebGL2RenderingContext_createShader -> arg -> ${arguments[0]} -> res ->`,createShader)
        return createShader
    }

    bodaEnv.envFunc.WebGL2RenderingContext_createProgram=function (){
        let program=new WebGLProgram('bobo')
        bodaEnv.toolsFunc.console_copy(`WebGL2RenderingContext_createProgram -> -> res ->`,program)

        return program
    }
    bodaEnv.envFunc.WebGL2RenderingContext_bufferData=function (){
        
        bodaEnv.toolsFunc.console_copy(`WebGL2RenderingContext_bufferData -> arg0 -> ${arguments[0]} -> arg1 -> ${arguments[1]} -> arg2 -> ${arguments[2]}`,)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'bufferData',arguments)
        // return buf
    }

    bodaEnv.envFunc.WebGL2RenderingContext_bindBuffer=function (){
        
        bodaEnv.toolsFunc.console_copy(`WebGL2RenderingContext_bindBuffer -> arg0 -> ${arguments[0]} -> arg1 ->${arguments[1]}`)
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'bindBuffer',arguments)
        // return buf
    }
    bodaEnv.envFunc.WebGL2RenderingContext_createBuffer=function (){
        let buf=new WebGLBuffer('bobo')
        bodaEnv.toolsFunc.console_copy(`WebGL2RenderingContext_createBuffer -> res ->`,buf)
        return buf
    }
    bodaEnv.envFunc.WebGLRenderingContext_getParameter = function WebGLRenderingContext_getParameter() {
        let pname = Number(arguments[0])

        // debugger
        let resDict = {
            37446: bodaEnv.memory.WebGLRenderingContext_getParameter_37446,//'ANGLE (Intel, Intel(R) UHD Graphics 620 (0x00003EA0) Direct3D11 vs_5_0 ps_5_0, D3D11)',
            37445: 'Google Inc. (Intel)',
            3412: 8,
            3413:8,
            3414: 24,
            3411: 8,
            34047: null,
            35661: 32,
            34076: 16384,
            36349: 1024,
            34024: 16384,
            34930: 16,
            3379: 16384,
            36348: 30,
            34921: 16,
            35660: 16,
            36347: 4096,
            35724: 'WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)',
            3415: 0,
            7938: 'WebGL 1.0 (OpenGL ES 2.0 Chromium)',
            33902: new Float32Array([1,1]),
            33901: new Float32Array([1,1024]),
            3386: new Int32Array([32767,32767]),
            3410:8,
            7937:'WebKit WebGL',
            7936:'WebKit'
        }
        let resgetParameter = resDict[pname]
        if (resgetParameter === undefined) return bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_getParameter `, `${pname} 未实现`);
        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_getParameter `, `${pname}  `, `-> res ->${resgetParameter}`)
        return resgetParameter
    }
    bodaEnv.envFunc.WebGLShaderPrecisionFormat_precision_get = function WebGLShaderPrecisionFormat_precision_get() {
        let precision=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'precision')
        if (precision === undefined) precision=23

        bodaEnv.toolsFunc.console_copy(`WebGLShaderPrecisionFormat_precision_get `, precision);
        ;

        return precision
    }
    bodaEnv.envFunc.WebGLShaderPrecisionFormat_rangeMax_get = function WebGLShaderPrecisionFormat_rangeMax_get() {
        let max=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'rangeMax')?bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'rangeMax'):127
        bodaEnv.toolsFunc.console_copy(`WebGLShaderPrecisionFormat_rangeMax_get `, max);
        ;

        return max
    }
    bodaEnv.envFunc.WebGLShaderPrecisionFormat_rangeMin_get = function WebGLShaderPrecisionFormat_rangeMin_get() {
        let min=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'rangeMin')?bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this,'rangeMin'):127

        bodaEnv.toolsFunc.console_copy(`WebGLShaderPrecisionFormat_rangeMin_get `, min);
        ;

        return min
    }
    bodaEnv.envFunc.WebGLRenderingContext_getSupportedExtensions = function WebGLRenderingContext_getSupportedExtensions() {
        
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
        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_getSupportedExtensions=== `, `${SupportedExtensions}  `);
        return SupportedExtensions
    }
    bodaEnv.envFunc.WebGLRenderingContext_canvas_get = function WebGLRenderingContext_canvas_get() {
        // debugger
        var canvas_ = bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'canvas')
        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_canvas_get res->`, canvas_)
        return canvas_

    }
    bodaEnv.envFunc.WebGLRenderingContext_drawArrays = function WebGLRenderingContext_drawArrays() {
        let mode = arguments[0]
        let first = arguments[1]
        let count = arguments[2]
        ;
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'drawArrays', arguments)

        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_drawArrays `, `mode:${mode}  first:${first}  count:${count}   `);

    }
    bodaEnv.envFunc.WebGLRenderingContext_uniform2f = function WebGLRenderingContext_uniform2f() {
        let location222 = arguments[0]
        let v0 = arguments[1]
        let v1 = arguments[2]
        ;
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'uniform2f', arguments)

        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_uniform2f `, `location:${location222} v0:${v0}  v1:${v1}  `);
    }
    bodaEnv.envFunc.WebGLRenderingContext_vertexAttribPointer = function WebGLRenderingContext_vertexAttribPointer() {
        let index = arguments[0]
        let size = arguments[1]
        let type = arguments[2]
        let normalized = arguments[3]
        let stride = arguments[4]
        let offset = arguments[5]
        ;
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'vertexAttribPointer', arguments)

        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_vertexAttribPointer `, `index:${index}  size:${size} type:${type}  normalized:${normalized}  stride:${stride}  offset${offset}   `);
    }
    bodaEnv.envFunc.WebGLRenderingContext_enableVertexAttribArray = function WebGLRenderingContext_enableVertexAttribArray() {
        let index = arguments[0]; ;

        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_enableVertexAttribArray `, `index:${index}  `);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'enableVertexAttribArray', index)

    }
    bodaEnv.envFunc.WebGLRenderingContext_getUniformLocation = function WebGLRenderingContext_getUniformLocation() {
        let program = arguments[0]
        let name = arguments[1];
        ; bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_getUniformLocation `, `program:${program} name:${name}`,);
        return null
    }
    bodaEnv.envFunc.WebGLRenderingContext_getAttribLocation = function WebGLRenderingContext_getAttribLocation() {
        let program = arguments[0]
        let name = arguments[1]
        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_getAttribLocation `, `program:${program} name:${name}  `, `默认返回0`);

        ;
        return 0
    }
    bodaEnv.envFunc.WebGLRenderingContext_useProgram = function WebGLRenderingContext_useProgram() {
        let program = arguments[0]
        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_useProgram `, `program:${program}  `);
        ;
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'useProgram', program)

    }
    bodaEnv.envFunc.WebGLRenderingContext_linkProgram = function WebGLRenderingContext_linkProgram() {
        let program = arguments[0]
        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_linkProgram `, `program:${program}  `);
        ;

        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'linkProgram', program)

    }
    bodaEnv.envFunc.WebGLRenderingContext_attachShader = function WebGLRenderingContext_attachShader() {
        let program = arguments[0]
        let shader = arguments[1]
        ;

        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_attachShader `, `program:${program}  shader:${shader}   `);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'attachShader', arguments)

    }
    bodaEnv.envFunc.WebGLRenderingContext_compileShader = function WebGLRenderingContext_shaderSource() {
        let compileShader = arguments[0]
        ;

        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_compileShader `, `${compileShader}  `);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'compileShader', compileShader)

    }
    bodaEnv.envFunc.WebGLRenderingContext_shaderSource = function WebGLRenderingContext_shaderSource() {
        let shader = arguments[0]
        let source = arguments[1]
        ;

        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_shaderSource `, `shader:${shader}  source:${source}  `);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'shaderSource', arguments)
    }
    bodaEnv.envFunc.WebGLRenderingContext_createShader = function WebGLRenderingContext_createShader() {
        let type = arguments[0]
        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_createShader `, `${type}  `);
        ;

        if (type == 35633) {
            let shader = new WebGLShader('bobo')
            // Object.setPrototypeOf(shader, bodaEnv.memory.globalobj['WebGLShader'].prototype)
            return shader
        }
        else if (type == 35632) {
            let shader = new WebGLShader('bobo')
            // Object.setPrototypeOf(shader, bodaEnv.memory.globalobj['WebGLShader'].prototype)
            return shader
        }
    }
    bodaEnv.envFunc.WebGLRenderingContext_createProgram = function WebGLRenderingContext_createProgram() {
        ;

        let program = new WebGLProgram('bobo')
        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_createProgram `, `${program}  `);
        return program;
    }


    bodaEnv.envFunc.WebGLRenderingContext_bufferData = function WebGLRenderingContext_bufferData() {
        
        let r1 = arguments[0]
        let r2 = arguments[1]
        let r3 = arguments[2]
        let r4 = arguments[3]
        let r5 = arguments[4]
        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_bufferData `, `r1:${r1},r2:${r2},r3:${r3},r4:${r4},r5:${r5}  `);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, "bufferData", arguments)

    }
    bodaEnv.envFunc.WebGLRenderingContext_bindBuffer = function WebGLRenderingContext_bindBuffer() {
        
        let r1 = arguments[0]
        let r2 = arguments[1]
        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_bindBuffer `, `r1:${r1}  r2:${r2}  `);
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, "bindBuffer", arguments)
    }

    bodaEnv.envFunc.WebGLRenderingContext_createBuffer = function () {
        
        let buffer = new WebGLBuffer('bobo')
        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_createBuffer `, `${buffer}  `);

        return buffer;

    }
    bodaEnv.envFunc.CanvasRenderingContext2D_closePath=function(){
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_closePath  ->`, )
    }
    
    bodaEnv.envFunc.CanvasRenderingContext2D_rect=function(){
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_rect  ->`,arguments[0],' ',arguments[1],' ',arguments[2],' ',arguments[3], )
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_isPointInPath=function (){
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_isPointInPath  ->`,arguments[0],' ',arguments[1],' ',arguments[2],'默认返回false 需要去网站查看', )
        return false
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_drawImage=function(){
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_drawImage  ->运行这一步网站可以生成图片`, )

    }
    bodaEnv.envFunc.CanvasRenderingContext2D_putImageData=function(){
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_putImageData  ->`, )

    }
    bodaEnv.envFunc.CanvasRenderingContext2D_textBaseline_get = function () {

        let res=bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'textBaseline')
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_textBaseline_get textBaseline ->`, res)
        return res
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_shadowOffsetX_set=function (params) {
        let _shadowOffsetX=arguments[0]
        bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'shadowOffsetX',_shadowOffsetX)
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_shadowOffsetX_set _shadowOffsetX ->`, _shadowOffsetX)
        return _shadowOffsetX
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_shadowOffsetY_set=function (params) {
        let _shadowOffsetY=arguments[0]
        bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'shadowOffsetY',_shadowOffsetY)
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_shadowOffsetY_set _shadowOffsetX ->`, _shadowOffsetY)
        return _shadowOffsetY
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_getImageData=function(){
        let imgageDate=new ImageData('bobo')
        // debugger
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_getImageData imgageDate ->`, imgageDate)
        bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'getImageData',imgageDate)

        return imgageDate
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_rotate=function (params) {
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_rotate  ->`)
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_stroke=function (params) {
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_stroke  ->`)
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_strokeStyle_set=function (params) {
        let _strokeStyle=arguments[0]
        bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'strokeStyle',_strokeStyle)
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_strokeStyle_set strokeStyle ->`, _strokeStyle)
        return _strokeStyle
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_shadowBlur_set=function (params) {
        let _shadowBlur=arguments[0]
        bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'shadowBlur',_shadowBlur)
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_shadowBlur_set _shadowBlur ->`, _shadowBlur)
        return _shadowBlur
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_translate=function (params) {
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_translate ->`)
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_shadowColor_set=function (params) {
        let _shadowColor=arguments[0]
        bodaEnv.toolsFunc.getObjWeakMapProtoAttr.call(this, 'shadowColor',_shadowColor)
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_shadowColor_set _shadowColor ->`, _shadowColor)
        return _shadowColor
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_textBaseline_set = function () {
        let arg = arguments[0]

        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'textBaseline', arg)
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_textBaseline_set textBaseline ->`, arg)
        return arg
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_font_set = function () {
        let arg = arguments[0]

        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'font', arg)
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_font_set font ->`, arg)
        return arg
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_beginPath=function (){
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_beginPath ->`)
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_moveTo=function(){
        let arg1=arguments[0]
        let arg2=arguments[1]
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'moveTo', arguments)
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_moveTo ->x `, arg1,' -> y ->',arg2)
    }
    
    bodaEnv.envFunc.CanvasRenderingContext2D_lineTo=function(){
        let arg1=arguments[0]
        let arg2=arguments[1]
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'lineTo', arguments)
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_lineTo ->x `, arg1,' -> y ->',arg2)
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_arc=function(){
        let arg1=arguments[0]
        let arg2=arguments[1]
        let arg3=arguments[2]
        let arg4=arguments[3]
        let arg5=arguments[4]
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'arc', arguments)
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_arc -> arg1 arg2  arg3 arg4 arg5 `,arg1,' ',arg2,' ',arg3,' ',arg4,' ',arg5)
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_fill=function(){
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_fill -> `)
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_fillStyle_set = function () {
        let arg = arguments[0]
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'fillStyle', arg)
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_fillStyle_set fillStyle ->`, arg)
        return arg
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_globalCompositeOperation_set=function (){
        let arg=arguments[0]
        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'globalCompositeOperation', arg)
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_globalCompositeOperation_set globalCompositeOperation ->`, arg)
        return arg
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_clip=function (){
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_clip -> `)

    }


    bodaEnv.envFunc.CanvasRenderingContext2D_fillRect = function () {
        let arg = arguments[0]

        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'fillStyle', arguments)
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_fillRect fillRect ->`, arguments)
        return arg
    }
    bodaEnv.envFunc.CanvasRenderingContext2D_fillText = function () {
        let arg = arguments[0]

        bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this, 'fillText', arguments)
        bodaEnv.toolsFunc.console_copy(`CanvasRenderingContext2D_fillText fillText ->`, arguments)
        return arg
    }
    bodaEnv.envFunc.BatteryManager_level_get = function () {
        // debugger
        let _res=bodaEnv.memory.BatteryManager_level_get
        bodaEnv.toolsFunc.console_copy(`BatteryManager_level_get res-> `, _res)
        return _res
    }
    bodaEnv.envFunc.BatteryManager_charging_get = function () {
        // debugger
        bodaEnv.toolsFunc.console_copy(`BatteryManager_charging_get res-> `, true)
        return true

    }
    bodaEnv.envFunc.BatteryManager_chargingTime_get = function () {
        // debugger
        let _res=bodaEnv.memory.BatteryManager_chargingTime_get
        bodaEnv.toolsFunc.console_copy(`BatteryManager_chargingTime_get res-> `, _res)

        return _res
    }
    bodaEnv.envFunc.WebGLRenderingContext_getContextAttributes = function WebGLRenderingContext_getContextAttributes() {

        let context = {
            "alpha": true,
            "antialias": true,
            "depth": true,
            "desynchronized": false,
            "failIfMajorPerformanceCaveat": false,
            "powerPreference": "default",
            "premultipliedAlpha": true,
            "preserveDrawingBuffer": false,
            "stencil": false,
            "xrCompatible": false
        };
        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_getContextAttributes `, `context->${bodaEnv.toolsFunc.stringify_bo(context)}`);
        return context;
    };
    bodaEnv.envFunc.WebGLLoseContext_loseContext=function(){
        bodaEnv.toolsFunc.console_copy(`WebGLLoseContext_loseContext -> `)
    
    }
    bodaEnv.envFunc.WebGLRenderingContext_getExtension = function WebGLRenderingContext_getExtension() {
        
        let getExtension = arguments[0]
        bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_getExtension `, `${getExtension}  `);
        let info = { _boisinit: bodaEnv.config.isinit }
        switch (getExtension) {
            case "WEBGL_debug_renderer_info":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['WebGLDebugRendererInfo'].prototype);
              break;
          
            case "ANGLE_instanced_arrays":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['ANGLEInstancedArrays'].prototype);
              break;
          
            case "EXT_blend_minmax":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['EXTBlendMinMax'].prototype);
              break;
          
            case "EXT_color_buffer_half_float":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['EXTColorBufferHalfFloat'].prototype);
              break;
          
            case "EXT_disjoint_timer_query":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['EXTDisjointTimerQuery'].prototype);
              break;
          
            case "EXT_float_blend":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['EXTFloatBlend'].prototype);
              break;
          
            case "EXT_shader_texture_lod":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['EXTShaderTextureLOD'].prototype);
              break;
          
            case "EXT_frag_depth":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['EXTFragDepth'].prototype);
              break;
          
            case "EXT_texture_compression_bptc":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['EXTTextureCompressionBPTC'].prototype);
              break;
          
            case "EXT_texture_compression_rgtc":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['EXTTextureCompressionRGTC'].prototype);
              break;
          
            case "EXT_texture_filter_anisotropic":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['EXTTextureFilterAnisotropic'].prototype);
              break;
          
            case "WEBKIT_EXT_texture_filter_anisotropic":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['EXTTextureFilterAnisotropic'].prototype);
              break;
          
            case "EXT_sRGB":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['EXTsRGB'].prototype);
              break;
          
            case "KHR_parallel_shader_compile":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['KHRParallelShaderCompile'].prototype);
              break;
          
            case "OES_element_index_uint":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['OESElementIndexUint'].prototype);
              break;
          
            case "OES_fbo_render_mipmap":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['OESFboRenderMipmap'].prototype);
              break;
          
            case "OES_standard_derivatives":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['OESStandardDerivatives'].prototype);
              break;
          
            case "OES_texture_float":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['OESTextureFloat'].prototype);
              break;
          
            case "OES_texture_float_linear":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['OESTextureFloatLinear'].prototype);
              break;
          
            case "OES_texture_half_float":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['OESTextureHalfFloat'].prototype);
              break;
          
            case "OES_texture_half_float_linear":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['OESTextureHalfFloatLinear'].prototype);
              break;
          
            case "OES_vertex_array_object":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['OESVertexArrayObject'].prototype);
              break;
          
            case "WEBGL_color_buffer_float":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['WebGLColorBufferFloat'].prototype);
              break;
          
            case "WEBGL_compressed_texture_s3tc":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['WebGLCompressedTextureS3TC'].prototype);
              break;
          
            case "WEBKIT_WEBGL_compressed_texture_s3tc":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['WebGLCompressedTextureS3TC'].prototype);
              break;
          
            case "WEBGL_compressed_texture_s3tc_srgb":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['WebGLCompressedTextureS3TCsRGB'].prototype);
              break;
          
            case "WEBGL_debug_shaders":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['WebGLDebugShaders'].prototype);
              break;
          
            case "WEBGL_depth_texture":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['WebGLDepthTexture'].prototype);
              break;
          
            case "WEBKIT_WEBGL_depth_texture":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['WebGLDepthTexture'].prototype);
              break;
          
            case "WEBGL_draw_buffers":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['WebGLDrawBuffers'].prototype);
              break;
          
            case "WEBGL_lose_context":
            //   debugger;
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['WebGLLoseContext'].prototype);
              break;
          
            case "WEBKIT_WEBGL_lose_context":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['WebGLLoseContext'].prototype);
              break;
          
            case "WEBGL_multi_draw":
              info = Object.setPrototypeOf(info,bodaEnv.memory.globlProtoObj['WebGLMultiDraw'].prototype);
              break;
          
            default:
              bodaEnv.toolsFunc.console_copy(`WebGLRenderingContext_getExtension `,`${getExtension}属性未实现' `);
              break;
          }
        

        return info
    }
})();
  //
// WebGLRenderingContext对象

bodaEnv.memory.globlProtoObj["WebGLRenderingContext"] = function WebGLRenderingContext() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WebGLRenderingContext 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "WebGLRenderingContext");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DEPTH_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 256
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1024
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "COLOR_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16384
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "POINTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "LINES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "LINE_LOOP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "LINE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TRIANGLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TRIANGLE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TRIANGLE_FAN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ZERO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 768
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ONE_MINUS_SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 769
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 770
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ONE_MINUS_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 771
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 772
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ONE_MINUS_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 773
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 774
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ONE_MINUS_DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 775
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "SRC_ALPHA_SATURATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 776
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FUNC_ADD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32774
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BLEND_EQUATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BLEND_EQUATION_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BLEND_EQUATION_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34877
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FUNC_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32778
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FUNC_REVERSE_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32779
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BLEND_DST_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32968
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BLEND_SRC_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32969
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BLEND_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32970
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BLEND_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32971
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32769
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ONE_MINUS_CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32770
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32771
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ONE_MINUS_CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32772
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BLEND_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32773
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34962
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ELEMENT_ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34963
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34964
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ELEMENT_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34965
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STREAM_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35040
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STATIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35044
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DYNAMIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35048
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34660
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BUFFER_USAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34661
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "CURRENT_VERTEX_ATTRIB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34342
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FRONT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1028
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1029
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FRONT_AND_BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1032
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3553
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "CULL_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2884
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BLEND", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3042
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DITHER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3024
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2960
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DEPTH_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2929
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "SCISSOR_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3089
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "POLYGON_OFFSET_FILL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32823
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "SAMPLE_ALPHA_TO_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32926
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "SAMPLE_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32928
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "NO_ERROR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "INVALID_ENUM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1280
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "INVALID_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1281
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "INVALID_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1282
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "OUT_OF_MEMORY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1285
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "CW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2304
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "CCW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2305
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "LINE_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2849
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ALIASED_POINT_SIZE_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33901
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ALIASED_LINE_WIDTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33902
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "CULL_FACE_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2885
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FRONT_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2886
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DEPTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2928
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DEPTH_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2930
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DEPTH_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2931
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DEPTH_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2932
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2961
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2962
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2964
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2965
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2966
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2967
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2963
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2968
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_BACK_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34816
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_BACK_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34817
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_BACK_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34818
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_BACK_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34819
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_BACK_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36003
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_BACK_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36004
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_BACK_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36005
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "VIEWPORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2978
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "SCISSOR_BOX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3088
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "COLOR_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3106
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "COLOR_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3107
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "UNPACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3317
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "PACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3333
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "MAX_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3379
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "MAX_VIEWPORT_DIMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3386
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "SUBPIXEL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3408
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "RED_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3410
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "GREEN_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3411
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BLUE_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3412
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ALPHA_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3413
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DEPTH_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3414
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3415
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "POLYGON_OFFSET_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10752
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "POLYGON_OFFSET_FACTOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32824
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE_BINDING_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32873
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "SAMPLE_BUFFERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32936
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32937
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "SAMPLE_COVERAGE_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32938
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "SAMPLE_COVERAGE_INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32939
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "COMPRESSED_TEXTURE_FORMATS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34467
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DONT_CARE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4352
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FASTEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4353
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "NICEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4354
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "GENERATE_MIPMAP_HINT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33170
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5120
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "UNSIGNED_BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5121
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5122
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "UNSIGNED_SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5123
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5124
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "UNSIGNED_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5125
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5126
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DEPTH_COMPONENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6402
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6406
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6407
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "RGBA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6408
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "LUMINANCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6409
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "LUMINANCE_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6410
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "UNSIGNED_SHORT_4_4_4_4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32819
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "UNSIGNED_SHORT_5_5_5_1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32820
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "UNSIGNED_SHORT_5_6_5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33635
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FRAGMENT_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35632
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "VERTEX_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35633
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "MAX_VERTEX_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34921
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "MAX_VERTEX_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36347
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "MAX_VARYING_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36348
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "MAX_COMBINED_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35661
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "MAX_VERTEX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35660
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "MAX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34930
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "MAX_FRAGMENT_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36349
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "SHADER_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35663
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DELETE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35712
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "LINK_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35714
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "VALIDATE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35715
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ATTACHED_SHADERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35717
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ACTIVE_UNIFORMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35718
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ACTIVE_ATTRIBUTES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35721
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "SHADING_LANGUAGE_VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35724
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "CURRENT_PROGRAM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35725
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "NEVER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 512
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "LESS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 513
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "EQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 514
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "LEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 515
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "GREATER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 516
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "NOTEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 517
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "GEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 518
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ALWAYS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 519
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "KEEP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7680
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "REPLACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7681
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "INCR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7682
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DECR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7683
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5386
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "INCR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34055
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DECR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34056
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "VENDOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7936
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "RENDERER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7937
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7938
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9728
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9729
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "NEAREST_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9984
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "LINEAR_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9985
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "NEAREST_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9986
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "LINEAR_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9987
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE_MAG_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10240
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE_MIN_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10241
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE_WRAP_S", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10242
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE_WRAP_T", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10243
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5890
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34067
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE_BINDING_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34068
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE_CUBE_MAP_POSITIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34069
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE_CUBE_MAP_NEGATIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34070
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE_CUBE_MAP_POSITIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34071
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE_CUBE_MAP_NEGATIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34072
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE_CUBE_MAP_POSITIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34073
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE_CUBE_MAP_NEGATIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34074
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "MAX_CUBE_MAP_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34076
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33984
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33985
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33986
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33987
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33988
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33989
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33990
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33991
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33992
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33993
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33994
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33995
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33996
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33997
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33998
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33999
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34000
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE17", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34001
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE18", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34002
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE19", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34003
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE20", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34004
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE21", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34005
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE22", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34006
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE23", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34007
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE24", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34008
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE25", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34009
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE26", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34010
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE27", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34011
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE28", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34012
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE29", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34013
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE30", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34014
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "TEXTURE31", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34015
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "ACTIVE_TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34016
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10497
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "CLAMP_TO_EDGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33071
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "MIRRORED_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33648
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FLOAT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35664
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FLOAT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35665
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FLOAT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35666
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "INT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35667
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "INT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35668
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "INT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35669
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BOOL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35670
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BOOL_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35671
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BOOL_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35672
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BOOL_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35673
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FLOAT_MAT2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35674
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FLOAT_MAT3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35675
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FLOAT_MAT4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35676
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35678
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35680
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "VERTEX_ATTRIB_ARRAY_ENABLED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34338
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "VERTEX_ATTRIB_ARRAY_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34339
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "VERTEX_ATTRIB_ARRAY_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34340
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "VERTEX_ATTRIB_ARRAY_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34341
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "VERTEX_ATTRIB_ARRAY_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34922
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "VERTEX_ATTRIB_ARRAY_POINTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34373
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34975
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "IMPLEMENTATION_COLOR_READ_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35738
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "IMPLEMENTATION_COLOR_READ_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35739
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "COMPILE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35713
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "LOW_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36336
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "MEDIUM_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36337
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "HIGH_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36338
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "LOW_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36339
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "MEDIUM_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36340
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "HIGH_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36341
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36160
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "RENDERBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36161
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "RGBA4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32854
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "RGB5_A1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32855
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "RGB565", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36194
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DEPTH_COMPONENT16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33189
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_INDEX8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36168
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DEPTH_STENCIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34041
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "RENDERBUFFER_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36162
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "RENDERBUFFER_HEIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36163
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "RENDERBUFFER_INTERNAL_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36164
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "RENDERBUFFER_RED_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36176
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "RENDERBUFFER_GREEN_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36177
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "RENDERBUFFER_BLUE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36178
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "RENDERBUFFER_ALPHA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36179
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "RENDERBUFFER_DEPTH_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36180
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "RENDERBUFFER_STENCIL_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36181
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36048
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36049
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36050
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36051
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "COLOR_ATTACHMENT0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36064
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DEPTH_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36096
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36128
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "DEPTH_STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33306
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FRAMEBUFFER_COMPLETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36053
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36054
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36055
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36057
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FRAMEBUFFER_UNSUPPORTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36061
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36006
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "RENDERBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36007
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "MAX_RENDERBUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34024
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "INVALID_FRAMEBUFFER_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1286
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "UNPACK_FLIP_Y_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37440
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "UNPACK_PREMULTIPLY_ALPHA_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37441
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "CONTEXT_LOST_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37442
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "UNPACK_COLORSPACE_CONVERSION_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37443
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"], "BROWSER_DEFAULT_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37444
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "canvas", {
  configurable: true,
  enumerable: true,
  get: {
    canvas() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "canvas_get", arguments);
    }
  }.canvas,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "drawingBufferWidth", {
  configurable: true,
  enumerable: true,
  get: {
    drawingBufferWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "drawingBufferWidth_get", arguments);
    }
  }.drawingBufferWidth,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "drawingBufferHeight", {
  configurable: true,
  enumerable: true,
  get: {
    drawingBufferHeight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "drawingBufferHeight_get", arguments);
    }
  }.drawingBufferHeight,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "drawingBufferColorSpace", {
  configurable: true,
  enumerable: true,
  get: {
    drawingBufferColorSpace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "drawingBufferColorSpace_get", arguments);
    }
  }.drawingBufferColorSpace,
  set: {
    drawingBufferColorSpace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "drawingBufferColorSpace_set", arguments);
    }
  }.drawingBufferColorSpace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "unpackColorSpace", {
  configurable: true,
  enumerable: true,
  get: {
    unpackColorSpace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "unpackColorSpace_get", arguments);
    }
  }.unpackColorSpace,
  set: {
    unpackColorSpace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "unpackColorSpace_set", arguments);
    }
  }.unpackColorSpace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DEPTH_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 256
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1024
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "COLOR_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16384
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "POINTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "LINES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "LINE_LOOP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "LINE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TRIANGLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TRIANGLE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TRIANGLE_FAN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ZERO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 768
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ONE_MINUS_SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 769
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 770
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ONE_MINUS_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 771
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 772
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ONE_MINUS_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 773
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 774
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ONE_MINUS_DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 775
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "SRC_ALPHA_SATURATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 776
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FUNC_ADD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32774
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BLEND_EQUATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BLEND_EQUATION_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BLEND_EQUATION_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34877
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FUNC_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32778
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FUNC_REVERSE_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32779
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BLEND_DST_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32968
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BLEND_SRC_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32969
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BLEND_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32970
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BLEND_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32971
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32769
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ONE_MINUS_CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32770
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32771
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ONE_MINUS_CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32772
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BLEND_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32773
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34962
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ELEMENT_ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34963
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34964
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ELEMENT_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34965
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STREAM_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35040
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STATIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35044
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DYNAMIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35048
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34660
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BUFFER_USAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34661
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "CURRENT_VERTEX_ATTRIB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34342
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FRONT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1028
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1029
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FRONT_AND_BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1032
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3553
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "CULL_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2884
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BLEND", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3042
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DITHER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3024
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2960
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DEPTH_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2929
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "SCISSOR_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3089
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "POLYGON_OFFSET_FILL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32823
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "SAMPLE_ALPHA_TO_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32926
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "SAMPLE_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32928
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "NO_ERROR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "INVALID_ENUM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1280
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "INVALID_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1281
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "INVALID_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1282
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "OUT_OF_MEMORY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1285
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "CW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2304
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "CCW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2305
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "LINE_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2849
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ALIASED_POINT_SIZE_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33901
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ALIASED_LINE_WIDTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33902
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "CULL_FACE_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2885
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FRONT_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2886
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DEPTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2928
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DEPTH_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2930
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DEPTH_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2931
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DEPTH_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2932
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2961
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2962
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2964
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2965
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2966
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2967
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2963
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2968
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_BACK_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34816
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_BACK_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34817
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_BACK_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34818
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_BACK_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34819
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_BACK_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36003
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_BACK_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36004
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_BACK_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36005
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "VIEWPORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2978
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "SCISSOR_BOX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3088
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "COLOR_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3106
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "COLOR_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3107
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "UNPACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3317
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "PACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3333
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "MAX_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3379
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "MAX_VIEWPORT_DIMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3386
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "SUBPIXEL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3408
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "RED_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3410
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "GREEN_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3411
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BLUE_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3412
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ALPHA_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3413
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DEPTH_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3414
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3415
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "POLYGON_OFFSET_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10752
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "POLYGON_OFFSET_FACTOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32824
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE_BINDING_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32873
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "SAMPLE_BUFFERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32936
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32937
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "SAMPLE_COVERAGE_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32938
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "SAMPLE_COVERAGE_INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32939
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "COMPRESSED_TEXTURE_FORMATS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34467
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DONT_CARE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4352
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FASTEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4353
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "NICEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4354
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "GENERATE_MIPMAP_HINT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33170
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5120
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "UNSIGNED_BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5121
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5122
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "UNSIGNED_SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5123
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5124
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "UNSIGNED_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5125
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5126
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DEPTH_COMPONENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6402
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6406
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6407
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "RGBA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6408
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "LUMINANCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6409
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "LUMINANCE_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6410
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "UNSIGNED_SHORT_4_4_4_4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32819
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "UNSIGNED_SHORT_5_5_5_1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32820
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "UNSIGNED_SHORT_5_6_5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33635
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FRAGMENT_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35632
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "VERTEX_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35633
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "MAX_VERTEX_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34921
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "MAX_VERTEX_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36347
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "MAX_VARYING_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36348
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "MAX_COMBINED_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35661
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "MAX_VERTEX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35660
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "MAX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34930
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "MAX_FRAGMENT_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36349
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "SHADER_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35663
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DELETE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35712
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "LINK_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35714
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "VALIDATE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35715
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ATTACHED_SHADERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35717
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ACTIVE_UNIFORMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35718
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ACTIVE_ATTRIBUTES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35721
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "SHADING_LANGUAGE_VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35724
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "CURRENT_PROGRAM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35725
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "NEVER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 512
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "LESS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 513
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "EQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 514
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "LEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 515
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "GREATER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 516
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "NOTEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 517
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "GEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 518
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ALWAYS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 519
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "KEEP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7680
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "REPLACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7681
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "INCR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7682
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DECR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7683
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5386
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "INCR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34055
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DECR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34056
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "VENDOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7936
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "RENDERER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7937
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7938
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9728
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9729
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "NEAREST_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9984
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "LINEAR_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9985
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "NEAREST_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9986
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "LINEAR_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9987
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE_MAG_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10240
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE_MIN_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10241
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE_WRAP_S", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10242
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE_WRAP_T", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10243
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5890
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34067
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE_BINDING_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34068
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE_CUBE_MAP_POSITIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34069
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE_CUBE_MAP_NEGATIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34070
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE_CUBE_MAP_POSITIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34071
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE_CUBE_MAP_NEGATIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34072
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE_CUBE_MAP_POSITIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34073
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE_CUBE_MAP_NEGATIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34074
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "MAX_CUBE_MAP_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34076
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33984
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33985
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33986
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33987
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33988
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33989
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33990
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33991
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33992
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33993
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33994
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33995
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33996
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33997
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33998
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33999
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34000
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE17", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34001
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE18", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34002
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE19", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34003
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE20", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34004
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE21", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34005
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE22", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34006
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE23", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34007
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE24", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34008
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE25", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34009
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE26", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34010
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE27", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34011
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE28", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34012
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE29", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34013
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE30", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34014
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "TEXTURE31", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34015
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "ACTIVE_TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34016
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10497
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "CLAMP_TO_EDGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33071
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "MIRRORED_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33648
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FLOAT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35664
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FLOAT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35665
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FLOAT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35666
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "INT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35667
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "INT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35668
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "INT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35669
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BOOL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35670
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BOOL_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35671
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BOOL_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35672
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BOOL_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35673
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FLOAT_MAT2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35674
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FLOAT_MAT3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35675
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FLOAT_MAT4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35676
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35678
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35680
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "VERTEX_ATTRIB_ARRAY_ENABLED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34338
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "VERTEX_ATTRIB_ARRAY_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34339
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "VERTEX_ATTRIB_ARRAY_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34340
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "VERTEX_ATTRIB_ARRAY_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34341
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "VERTEX_ATTRIB_ARRAY_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34922
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "VERTEX_ATTRIB_ARRAY_POINTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34373
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34975
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "IMPLEMENTATION_COLOR_READ_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35738
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "IMPLEMENTATION_COLOR_READ_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35739
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "COMPILE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35713
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "LOW_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36336
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "MEDIUM_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36337
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "HIGH_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36338
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "LOW_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36339
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "MEDIUM_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36340
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "HIGH_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36341
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36160
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "RENDERBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36161
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "RGBA4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32854
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "RGB5_A1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32855
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "RGB565", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36194
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DEPTH_COMPONENT16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33189
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_INDEX8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36168
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DEPTH_STENCIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34041
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "RENDERBUFFER_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36162
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "RENDERBUFFER_HEIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36163
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "RENDERBUFFER_INTERNAL_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36164
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "RENDERBUFFER_RED_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36176
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "RENDERBUFFER_GREEN_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36177
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "RENDERBUFFER_BLUE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36178
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "RENDERBUFFER_ALPHA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36179
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "RENDERBUFFER_DEPTH_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36180
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "RENDERBUFFER_STENCIL_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36181
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36048
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36049
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36050
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36051
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "COLOR_ATTACHMENT0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36064
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DEPTH_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36096
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36128
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "DEPTH_STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33306
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FRAMEBUFFER_COMPLETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36053
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36054
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36055
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36057
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FRAMEBUFFER_UNSUPPORTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36061
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36006
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "RENDERBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36007
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "MAX_RENDERBUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34024
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "INVALID_FRAMEBUFFER_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1286
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "UNPACK_FLIP_Y_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37440
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "UNPACK_PREMULTIPLY_ALPHA_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37441
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "CONTEXT_LOST_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37442
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "UNPACK_COLORSPACE_CONVERSION_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37443
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "BROWSER_DEFAULT_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37444
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "activeTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    activeTexture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "activeTexture", arguments);
    }
  }.activeTexture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "attachShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    attachShader() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "attachShader", arguments);
    }
  }.attachShader
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "bindAttribLocation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bindAttribLocation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "bindAttribLocation", arguments);
    }
  }.bindAttribLocation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "bindRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bindRenderbuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "bindRenderbuffer", arguments);
    }
  }.bindRenderbuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "blendColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    blendColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "blendColor", arguments);
    }
  }.blendColor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "blendEquation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    blendEquation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "blendEquation", arguments);
    }
  }.blendEquation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "blendEquationSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    blendEquationSeparate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "blendEquationSeparate", arguments);
    }
  }.blendEquationSeparate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "blendFunc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    blendFunc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "blendFunc", arguments);
    }
  }.blendFunc
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "blendFuncSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    blendFuncSeparate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "blendFuncSeparate", arguments);
    }
  }.blendFuncSeparate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "bufferData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bufferData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "bufferData", arguments);
    }
  }.bufferData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "bufferSubData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bufferSubData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "bufferSubData", arguments);
    }
  }.bufferSubData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "checkFramebufferStatus", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    checkFramebufferStatus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "checkFramebufferStatus", arguments);
    }
  }.checkFramebufferStatus
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "compileShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    compileShader() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "compileShader", arguments);
    }
  }.compileShader
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "compressedTexImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    compressedTexImage2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "compressedTexImage2D", arguments);
    }
  }.compressedTexImage2D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "compressedTexSubImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    compressedTexSubImage2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "compressedTexSubImage2D", arguments);
    }
  }.compressedTexSubImage2D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "copyTexImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    copyTexImage2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "copyTexImage2D", arguments);
    }
  }.copyTexImage2D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "copyTexSubImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    copyTexSubImage2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "copyTexSubImage2D", arguments);
    }
  }.copyTexSubImage2D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "createBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "createBuffer", arguments);
    }
  }.createBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "createFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createFramebuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "createFramebuffer", arguments);
    }
  }.createFramebuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "createProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createProgram() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "createProgram", arguments);
    }
  }.createProgram
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "createRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createRenderbuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "createRenderbuffer", arguments);
    }
  }.createRenderbuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "createShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createShader() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "createShader", arguments);
    }
  }.createShader
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "createTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createTexture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "createTexture", arguments);
    }
  }.createTexture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "cullFace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cullFace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "cullFace", arguments);
    }
  }.cullFace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "deleteBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "deleteBuffer", arguments);
    }
  }.deleteBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "deleteFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteFramebuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "deleteFramebuffer", arguments);
    }
  }.deleteFramebuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "deleteProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteProgram() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "deleteProgram", arguments);
    }
  }.deleteProgram
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "deleteRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteRenderbuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "deleteRenderbuffer", arguments);
    }
  }.deleteRenderbuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "deleteShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteShader() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "deleteShader", arguments);
    }
  }.deleteShader
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "deleteTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteTexture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "deleteTexture", arguments);
    }
  }.deleteTexture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "depthFunc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    depthFunc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "depthFunc", arguments);
    }
  }.depthFunc
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "depthMask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    depthMask() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "depthMask", arguments);
    }
  }.depthMask
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "depthRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    depthRange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "depthRange", arguments);
    }
  }.depthRange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "detachShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    detachShader() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "detachShader", arguments);
    }
  }.detachShader
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "disable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    disable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "disable", arguments);
    }
  }.disable
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "enable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    enable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "enable", arguments);
    }
  }.enable
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "finish", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    finish() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "finish", arguments);
    }
  }.finish
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "flush", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    flush() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "flush", arguments);
    }
  }.flush
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "framebufferRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    framebufferRenderbuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "framebufferRenderbuffer", arguments);
    }
  }.framebufferRenderbuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "framebufferTexture2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    framebufferTexture2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "framebufferTexture2D", arguments);
    }
  }.framebufferTexture2D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "frontFace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    frontFace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "frontFace", arguments);
    }
  }.frontFace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "generateMipmap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    generateMipmap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "generateMipmap", arguments);
    }
  }.generateMipmap
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getActiveAttrib", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getActiveAttrib() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getActiveAttrib", arguments);
    }
  }.getActiveAttrib
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getActiveUniform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getActiveUniform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getActiveUniform", arguments);
    }
  }.getActiveUniform
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getAttachedShaders", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAttachedShaders() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getAttachedShaders", arguments);
    }
  }.getAttachedShaders
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getAttribLocation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAttribLocation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getAttribLocation", arguments);
    }
  }.getAttribLocation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getBufferParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getBufferParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getBufferParameter", arguments);
    }
  }.getBufferParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getContextAttributes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getContextAttributes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getContextAttributes", arguments);
    }
  }.getContextAttributes
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getError", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getError() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getError", arguments);
    }
  }.getError
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getExtension", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getExtension() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getExtension", arguments);
    }
  }.getExtension
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getFramebufferAttachmentParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getFramebufferAttachmentParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getFramebufferAttachmentParameter", arguments);
    }
  }.getFramebufferAttachmentParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getParameter", arguments);
    }
  }.getParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getProgramInfoLog", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getProgramInfoLog() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getProgramInfoLog", arguments);
    }
  }.getProgramInfoLog
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getProgramParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getProgramParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getProgramParameter", arguments);
    }
  }.getProgramParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getRenderbufferParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getRenderbufferParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getRenderbufferParameter", arguments);
    }
  }.getRenderbufferParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getShaderInfoLog", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getShaderInfoLog() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getShaderInfoLog", arguments);
    }
  }.getShaderInfoLog
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getShaderParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getShaderParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getShaderParameter", arguments);
    }
  }.getShaderParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getShaderPrecisionFormat", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getShaderPrecisionFormat() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getShaderPrecisionFormat", arguments);
    }
  }.getShaderPrecisionFormat
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getShaderSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getShaderSource() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getShaderSource", arguments);
    }
  }.getShaderSource
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getSupportedExtensions", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSupportedExtensions() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getSupportedExtensions", arguments);
    }
  }.getSupportedExtensions
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getTexParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTexParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getTexParameter", arguments);
    }
  }.getTexParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getUniform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getUniform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getUniform", arguments);
    }
  }.getUniform
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getUniformLocation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getUniformLocation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getUniformLocation", arguments);
    }
  }.getUniformLocation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getVertexAttrib", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getVertexAttrib() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getVertexAttrib", arguments);
    }
  }.getVertexAttrib
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "getVertexAttribOffset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getVertexAttribOffset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "getVertexAttribOffset", arguments);
    }
  }.getVertexAttribOffset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "hint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    hint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "hint", arguments);
    }
  }.hint
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "isBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "isBuffer", arguments);
    }
  }.isBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "isContextLost", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isContextLost() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "isContextLost", arguments);
    }
  }.isContextLost
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "isEnabled", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isEnabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "isEnabled", arguments);
    }
  }.isEnabled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "isFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isFramebuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "isFramebuffer", arguments);
    }
  }.isFramebuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "isProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isProgram() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "isProgram", arguments);
    }
  }.isProgram
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "isRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isRenderbuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "isRenderbuffer", arguments);
    }
  }.isRenderbuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "isShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isShader() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "isShader", arguments);
    }
  }.isShader
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "isTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isTexture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "isTexture", arguments);
    }
  }.isTexture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "lineWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    lineWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "lineWidth", arguments);
    }
  }.lineWidth
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "linkProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    linkProgram() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "linkProgram", arguments);
    }
  }.linkProgram
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "pixelStorei", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pixelStorei() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "pixelStorei", arguments);
    }
  }.pixelStorei
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "polygonOffset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    polygonOffset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "polygonOffset", arguments);
    }
  }.polygonOffset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "readPixels", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    readPixels() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "readPixels", arguments);
    }
  }.readPixels
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "renderbufferStorage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    renderbufferStorage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "renderbufferStorage", arguments);
    }
  }.renderbufferStorage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "sampleCoverage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    sampleCoverage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "sampleCoverage", arguments);
    }
  }.sampleCoverage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "shaderSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    shaderSource() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "shaderSource", arguments);
    }
  }.shaderSource
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "stencilFunc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stencilFunc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "stencilFunc", arguments);
    }
  }.stencilFunc
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "stencilFuncSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stencilFuncSeparate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "stencilFuncSeparate", arguments);
    }
  }.stencilFuncSeparate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "stencilMask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stencilMask() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "stencilMask", arguments);
    }
  }.stencilMask
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "stencilMaskSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stencilMaskSeparate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "stencilMaskSeparate", arguments);
    }
  }.stencilMaskSeparate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "stencilOp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stencilOp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "stencilOp", arguments);
    }
  }.stencilOp
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "stencilOpSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stencilOpSeparate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "stencilOpSeparate", arguments);
    }
  }.stencilOpSeparate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "texImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    texImage2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "texImage2D", arguments);
    }
  }.texImage2D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "texParameterf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    texParameterf() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "texParameterf", arguments);
    }
  }.texParameterf
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "texParameteri", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    texParameteri() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "texParameteri", arguments);
    }
  }.texParameteri
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "texSubImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    texSubImage2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "texSubImage2D", arguments);
    }
  }.texSubImage2D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "useProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    useProgram() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "useProgram", arguments);
    }
  }.useProgram
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "validateProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    validateProgram() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "validateProgram", arguments);
    }
  }.validateProgram
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "bindBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bindBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "bindBuffer", arguments);
    }
  }.bindBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "bindFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bindFramebuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "bindFramebuffer", arguments);
    }
  }.bindFramebuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "bindTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bindTexture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "bindTexture", arguments);
    }
  }.bindTexture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clear() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "clear", arguments);
    }
  }.clear
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "clearColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "clearColor", arguments);
    }
  }.clearColor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "clearDepth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearDepth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "clearDepth", arguments);
    }
  }.clearDepth
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "clearStencil", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearStencil() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "clearStencil", arguments);
    }
  }.clearStencil
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "colorMask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    colorMask() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "colorMask", arguments);
    }
  }.colorMask
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "disableVertexAttribArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    disableVertexAttribArray() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "disableVertexAttribArray", arguments);
    }
  }.disableVertexAttribArray
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "drawArrays", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    drawArrays() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "drawArrays", arguments);
    }
  }.drawArrays
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "drawElements", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    drawElements() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "drawElements", arguments);
    }
  }.drawElements
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "enableVertexAttribArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    enableVertexAttribArray() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "enableVertexAttribArray", arguments);
    }
  }.enableVertexAttribArray
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "scissor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    scissor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "scissor", arguments);
    }
  }.scissor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniform1f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform1f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniform1f", arguments);
    }
  }.uniform1f
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniform1fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform1fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniform1fv", arguments);
    }
  }.uniform1fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniform1i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform1i() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniform1i", arguments);
    }
  }.uniform1i
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniform1iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform1iv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniform1iv", arguments);
    }
  }.uniform1iv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniform2f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform2f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniform2f", arguments);
    }
  }.uniform2f
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniform2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform2fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniform2fv", arguments);
    }
  }.uniform2fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniform2i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform2i() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniform2i", arguments);
    }
  }.uniform2i
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniform2iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform2iv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniform2iv", arguments);
    }
  }.uniform2iv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniform3f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform3f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniform3f", arguments);
    }
  }.uniform3f
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniform3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform3fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniform3fv", arguments);
    }
  }.uniform3fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniform3i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform3i() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniform3i", arguments);
    }
  }.uniform3i
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniform3iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform3iv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniform3iv", arguments);
    }
  }.uniform3iv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniform4f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform4f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniform4f", arguments);
    }
  }.uniform4f
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniform4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform4fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniform4fv", arguments);
    }
  }.uniform4fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniform4i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform4i() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniform4i", arguments);
    }
  }.uniform4i
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniform4iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform4iv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniform4iv", arguments);
    }
  }.uniform4iv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniformMatrix2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniformMatrix2fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniformMatrix2fv", arguments);
    }
  }.uniformMatrix2fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniformMatrix3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniformMatrix3fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniformMatrix3fv", arguments);
    }
  }.uniformMatrix3fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "uniformMatrix4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniformMatrix4fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "uniformMatrix4fv", arguments);
    }
  }.uniformMatrix4fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "vertexAttrib1f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttrib1f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "vertexAttrib1f", arguments);
    }
  }.vertexAttrib1f
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "vertexAttrib1fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttrib1fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "vertexAttrib1fv", arguments);
    }
  }.vertexAttrib1fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "vertexAttrib2f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttrib2f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "vertexAttrib2f", arguments);
    }
  }.vertexAttrib2f
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "vertexAttrib2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttrib2fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "vertexAttrib2fv", arguments);
    }
  }.vertexAttrib2fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "vertexAttrib3f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttrib3f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "vertexAttrib3f", arguments);
    }
  }.vertexAttrib3f
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "vertexAttrib3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttrib3fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "vertexAttrib3fv", arguments);
    }
  }.vertexAttrib3fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "vertexAttrib4f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttrib4f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "vertexAttrib4f", arguments);
    }
  }.vertexAttrib4f
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "vertexAttrib4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttrib4fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "vertexAttrib4fv", arguments);
    }
  }.vertexAttrib4fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "vertexAttribPointer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttribPointer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "vertexAttribPointer", arguments);
    }
  }.vertexAttribPointer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "viewport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    viewport() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "viewport", arguments);
    }
  }.viewport
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "makeXRCompatible", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    makeXRCompatible() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGLRenderingContext"].prototype, "WebGLRenderingContext", "makeXRCompatible", arguments);
    }
  }.makeXRCompatible
});
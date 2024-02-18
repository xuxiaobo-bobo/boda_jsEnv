// WebGL2RenderingContext对象

bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"] = function WebGL2RenderingContext() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('WebGL2RenderingContext 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "WebGL2RenderingContext");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DEPTH_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 256
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1024
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16384
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "POINTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "LINES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "LINE_LOOP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "LINE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TRIANGLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TRIANGLE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TRIANGLE_FAN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ZERO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 768
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ONE_MINUS_SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 769
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 770
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ONE_MINUS_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 771
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 772
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ONE_MINUS_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 773
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 774
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ONE_MINUS_DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 775
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SRC_ALPHA_SATURATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 776
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FUNC_ADD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32774
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BLEND_EQUATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BLEND_EQUATION_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BLEND_EQUATION_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34877
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FUNC_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32778
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FUNC_REVERSE_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32779
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BLEND_DST_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32968
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BLEND_SRC_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32969
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BLEND_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32970
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BLEND_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32971
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32769
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ONE_MINUS_CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32770
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32771
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ONE_MINUS_CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32772
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BLEND_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32773
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34962
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ELEMENT_ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34963
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34964
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ELEMENT_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34965
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STREAM_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35040
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STATIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35044
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DYNAMIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35048
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34660
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BUFFER_USAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34661
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "CURRENT_VERTEX_ATTRIB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34342
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRONT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1028
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1029
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRONT_AND_BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1032
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3553
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "CULL_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2884
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BLEND", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3042
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DITHER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3024
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2960
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DEPTH_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2929
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SCISSOR_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3089
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "POLYGON_OFFSET_FILL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32823
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SAMPLE_ALPHA_TO_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32926
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SAMPLE_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32928
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "NO_ERROR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "INVALID_ENUM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1280
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "INVALID_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1281
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "INVALID_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1282
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "OUT_OF_MEMORY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1285
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "CW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2304
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "CCW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2305
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "LINE_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2849
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ALIASED_POINT_SIZE_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33901
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ALIASED_LINE_WIDTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33902
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "CULL_FACE_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2885
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRONT_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2886
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DEPTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2928
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DEPTH_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2930
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DEPTH_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2931
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DEPTH_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2932
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2961
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2962
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2964
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2965
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2966
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2967
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2963
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2968
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_BACK_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34816
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_BACK_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34817
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_BACK_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34818
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_BACK_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34819
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_BACK_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36003
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_BACK_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36004
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_BACK_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36005
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "VIEWPORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2978
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SCISSOR_BOX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3088
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3106
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3107
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNPACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3317
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "PACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3333
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3379
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_VIEWPORT_DIMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3386
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SUBPIXEL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3408
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RED_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3410
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "GREEN_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3411
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BLUE_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3412
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ALPHA_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3413
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DEPTH_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3414
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3415
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "POLYGON_OFFSET_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10752
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "POLYGON_OFFSET_FACTOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32824
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_BINDING_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32873
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SAMPLE_BUFFERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32936
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32937
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SAMPLE_COVERAGE_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32938
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SAMPLE_COVERAGE_INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32939
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COMPRESSED_TEXTURE_FORMATS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34467
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DONT_CARE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4352
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FASTEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4353
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "NICEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4354
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "GENERATE_MIPMAP_HINT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33170
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5120
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNED_BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5121
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5122
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNED_SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5123
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5124
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNED_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5125
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5126
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DEPTH_COMPONENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6402
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6406
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6407
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGBA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6408
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "LUMINANCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6409
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "LUMINANCE_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6410
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNED_SHORT_4_4_4_4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32819
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNED_SHORT_5_5_5_1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32820
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNED_SHORT_5_6_5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33635
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAGMENT_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35632
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "VERTEX_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35633
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_VERTEX_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34921
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_VERTEX_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36347
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_VARYING_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36348
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_COMBINED_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35661
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_VERTEX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35660
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34930
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_FRAGMENT_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36349
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SHADER_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35663
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DELETE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35712
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "LINK_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35714
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "VALIDATE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35715
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ATTACHED_SHADERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35717
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ACTIVE_UNIFORMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35718
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ACTIVE_ATTRIBUTES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35721
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SHADING_LANGUAGE_VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35724
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "CURRENT_PROGRAM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35725
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "NEVER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 512
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "LESS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 513
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "EQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 514
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "LEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 515
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "GREATER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 516
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "NOTEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 517
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "GEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 518
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ALWAYS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 519
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "KEEP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7680
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "REPLACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7681
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "INCR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7682
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DECR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7683
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5386
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "INCR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34055
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DECR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34056
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "VENDOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7936
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RENDERER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7937
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7938
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9728
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9729
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "NEAREST_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9984
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "LINEAR_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9985
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "NEAREST_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9986
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "LINEAR_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9987
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_MAG_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10240
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_MIN_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10241
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_WRAP_S", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10242
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_WRAP_T", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10243
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5890
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34067
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_BINDING_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34068
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_CUBE_MAP_POSITIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34069
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_CUBE_MAP_NEGATIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34070
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_CUBE_MAP_POSITIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34071
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_CUBE_MAP_NEGATIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34072
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_CUBE_MAP_POSITIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34073
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_CUBE_MAP_NEGATIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34074
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_CUBE_MAP_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34076
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33984
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33985
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33986
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33987
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33988
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33989
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33990
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33991
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33992
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33993
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33994
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33995
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33996
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33997
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33998
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33999
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34000
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE17", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34001
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE18", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34002
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE19", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34003
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE20", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34004
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE21", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34005
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE22", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34006
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE23", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34007
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE24", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34008
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE25", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34009
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE26", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34010
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE27", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34011
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE28", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34012
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE29", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34013
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE30", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34014
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE31", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34015
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ACTIVE_TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34016
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10497
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "CLAMP_TO_EDGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33071
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MIRRORED_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33648
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FLOAT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35664
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FLOAT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35665
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FLOAT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35666
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "INT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35667
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "INT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35668
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "INT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35669
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BOOL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35670
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BOOL_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35671
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BOOL_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35672
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BOOL_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35673
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FLOAT_MAT2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35674
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FLOAT_MAT3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35675
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FLOAT_MAT4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35676
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35678
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35680
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "VERTEX_ATTRIB_ARRAY_ENABLED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34338
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "VERTEX_ATTRIB_ARRAY_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34339
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "VERTEX_ATTRIB_ARRAY_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34340
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "VERTEX_ATTRIB_ARRAY_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34341
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "VERTEX_ATTRIB_ARRAY_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34922
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "VERTEX_ATTRIB_ARRAY_POINTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34373
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34975
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "IMPLEMENTATION_COLOR_READ_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35738
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "IMPLEMENTATION_COLOR_READ_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35739
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COMPILE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35713
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "LOW_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36336
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MEDIUM_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36337
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "HIGH_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36338
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "LOW_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36339
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MEDIUM_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36340
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "HIGH_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36341
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36160
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RENDERBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36161
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGBA4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32854
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGB5_A1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32855
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGB565", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36194
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DEPTH_COMPONENT16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33189
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_INDEX8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36168
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DEPTH_STENCIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34041
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RENDERBUFFER_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36162
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RENDERBUFFER_HEIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36163
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RENDERBUFFER_INTERNAL_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36164
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RENDERBUFFER_RED_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36176
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RENDERBUFFER_GREEN_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36177
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RENDERBUFFER_BLUE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36178
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RENDERBUFFER_ALPHA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36179
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RENDERBUFFER_DEPTH_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36180
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RENDERBUFFER_STENCIL_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36181
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36048
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36049
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36050
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36051
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_ATTACHMENT0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36064
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DEPTH_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36096
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36128
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DEPTH_STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33306
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_COMPLETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36053
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36054
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36055
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36057
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_UNSUPPORTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36061
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36006
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RENDERBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36007
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_RENDERBUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34024
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "INVALID_FRAMEBUFFER_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1286
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNPACK_FLIP_Y_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37440
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNPACK_PREMULTIPLY_ALPHA_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37441
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "CONTEXT_LOST_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37442
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNPACK_COLORSPACE_CONVERSION_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37443
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "BROWSER_DEFAULT_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37444
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "READ_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3074
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNPACK_ROW_LENGTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3314
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNPACK_SKIP_ROWS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3315
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNPACK_SKIP_PIXELS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3316
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "PACK_ROW_LENGTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3330
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "PACK_SKIP_ROWS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3331
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "PACK_SKIP_PIXELS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3332
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6144
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DEPTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6145
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STENCIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6146
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6403
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGB8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32849
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGBA8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32856
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGB10_A2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32857
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_BINDING_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32874
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNPACK_SKIP_IMAGES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32877
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNPACK_IMAGE_HEIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32878
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32879
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_WRAP_R", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32882
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_3D_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32883
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNED_INT_2_10_10_10_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33640
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_ELEMENTS_VERTICES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33000
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_ELEMENTS_INDICES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33001
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_MIN_LOD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33082
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_MAX_LOD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33083
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_BASE_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33084
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_MAX_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33085
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32775
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32776
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DEPTH_COMPONENT24", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33190
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_TEXTURE_LOD_BIAS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34045
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_COMPARE_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34892
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_COMPARE_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34893
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "CURRENT_QUERY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34917
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "QUERY_RESULT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34918
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "QUERY_RESULT_AVAILABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34919
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STREAM_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35041
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STREAM_COPY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35042
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STATIC_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35045
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "STATIC_COPY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35046
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DYNAMIC_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35049
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DYNAMIC_COPY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35050
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_DRAW_BUFFERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34852
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DRAW_BUFFER0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34853
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DRAW_BUFFER1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34854
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DRAW_BUFFER2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34855
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DRAW_BUFFER3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34856
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DRAW_BUFFER4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34857
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DRAW_BUFFER5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34858
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DRAW_BUFFER6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34859
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DRAW_BUFFER7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34860
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DRAW_BUFFER8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34861
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DRAW_BUFFER9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34862
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DRAW_BUFFER10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34863
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DRAW_BUFFER11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34864
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DRAW_BUFFER12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34865
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DRAW_BUFFER13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34866
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DRAW_BUFFER14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34867
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DRAW_BUFFER15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34868
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_FRAGMENT_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35657
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_VERTEX_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35658
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SAMPLER_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35679
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SAMPLER_2D_SHADOW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35682
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAGMENT_SHADER_DERIVATIVE_HINT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35723
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "PIXEL_PACK_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35051
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "PIXEL_UNPACK_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35052
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "PIXEL_PACK_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35053
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "PIXEL_UNPACK_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35055
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FLOAT_MAT2x3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35685
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FLOAT_MAT2x4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35686
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FLOAT_MAT3x2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35687
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FLOAT_MAT3x4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35688
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FLOAT_MAT4x2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35689
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FLOAT_MAT4x3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35690
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SRGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35904
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SRGB8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35905
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SRGB8_ALPHA8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35907
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COMPARE_REF_TO_TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34894
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGBA32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34836
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGB32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34837
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGBA16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34842
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGB16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34843
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "VERTEX_ATTRIB_ARRAY_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35069
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_ARRAY_TEXTURE_LAYERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35071
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MIN_PROGRAM_TEXEL_OFFSET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35076
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_PROGRAM_TEXEL_OFFSET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35077
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_VARYING_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35659
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35866
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_BINDING_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35869
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "R11F_G11F_B10F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35898
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNED_INT_10F_11F_11F_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35899
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGB9_E5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35901
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNED_INT_5_9_9_9_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35902
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TRANSFORM_FEEDBACK_BUFFER_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35967
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35968
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TRANSFORM_FEEDBACK_VARYINGS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35971
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TRANSFORM_FEEDBACK_BUFFER_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35972
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TRANSFORM_FEEDBACK_BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35973
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35976
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RASTERIZER_DISCARD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35977
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35978
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35979
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "INTERLEAVED_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35980
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SEPARATE_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35981
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TRANSFORM_FEEDBACK_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35982
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TRANSFORM_FEEDBACK_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35983
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGBA32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36208
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGB32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36209
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGBA16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36214
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGB16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36215
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGBA8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36220
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGB8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36221
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGBA32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36226
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGB32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36227
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGBA16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36232
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGB16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36233
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGBA8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36238
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGB8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36239
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RED_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36244
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGB_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36248
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGBA_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36249
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SAMPLER_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36289
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SAMPLER_2D_ARRAY_SHADOW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36292
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SAMPLER_CUBE_SHADOW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36293
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNED_INT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36294
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNED_INT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36295
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNED_INT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36296
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "INT_SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36298
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "INT_SAMPLER_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36299
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "INT_SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36300
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "INT_SAMPLER_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36303
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNED_INT_SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36306
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNED_INT_SAMPLER_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36307
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNED_INT_SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36308
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNED_INT_SAMPLER_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36311
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DEPTH_COMPONENT32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36012
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DEPTH32F_STENCIL8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36013
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FLOAT_32_UNSIGNED_INT_24_8_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36269
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33296
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33297
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_ATTACHMENT_RED_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33298
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_ATTACHMENT_GREEN_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33299
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_ATTACHMENT_BLUE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33300
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33301
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33302
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33303
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_DEFAULT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33304
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNED_INT_24_8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34042
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DEPTH24_STENCIL8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35056
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNED_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35863
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DRAW_FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36006
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "READ_FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36008
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "DRAW_FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36009
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "READ_FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36010
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RENDERBUFFER_SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36011
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36052
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_COLOR_ATTACHMENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36063
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_ATTACHMENT1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36065
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_ATTACHMENT2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36066
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_ATTACHMENT3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36067
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_ATTACHMENT4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36068
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_ATTACHMENT5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36069
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_ATTACHMENT6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36070
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_ATTACHMENT7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36071
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_ATTACHMENT8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36072
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_ATTACHMENT9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36073
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_ATTACHMENT10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36074
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_ATTACHMENT11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36075
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_ATTACHMENT12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36076
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_ATTACHMENT13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36077
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_ATTACHMENT14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36078
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COLOR_ATTACHMENT15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36079
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "FRAMEBUFFER_INCOMPLETE_MULTISAMPLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36182
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36183
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "HALF_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5131
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RG", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33319
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RG_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33320
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "R8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33321
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RG8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33323
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "R16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33325
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "R32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33326
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RG16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33327
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RG32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33328
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "R8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33329
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "R8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33330
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "R16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33331
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "R16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33332
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "R32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33333
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "R32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33334
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RG8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33335
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RG8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33336
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RG16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33337
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RG16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33338
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RG32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33339
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RG32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33340
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "VERTEX_ARRAY_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34229
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "R8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36756
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RG8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36757
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGB8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36758
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGBA8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36759
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SIGNED_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36764
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COPY_READ_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36662
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COPY_WRITE_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36663
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COPY_READ_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36662
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "COPY_WRITE_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36663
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNIFORM_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35345
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNIFORM_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35368
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNIFORM_BUFFER_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35369
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNIFORM_BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35370
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_VERTEX_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35371
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_FRAGMENT_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35373
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_COMBINED_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35374
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_UNIFORM_BUFFER_BINDINGS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35375
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_UNIFORM_BLOCK_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35376
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35377
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35379
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNIFORM_BUFFER_OFFSET_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35380
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ACTIVE_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35382
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNIFORM_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35383
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNIFORM_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35384
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNIFORM_BLOCK_INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35386
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNIFORM_OFFSET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35387
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNIFORM_ARRAY_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35388
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNIFORM_MATRIX_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35389
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNIFORM_IS_ROW_MAJOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35390
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNIFORM_BLOCK_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35391
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNIFORM_BLOCK_DATA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35392
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNIFORM_BLOCK_ACTIVE_UNIFORMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35394
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35395
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35396
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35398
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "INVALID_INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4294967295
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_VERTEX_OUTPUT_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37154
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_FRAGMENT_INPUT_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37157
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_SERVER_WAIT_TIMEOUT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37137
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "OBJECT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37138
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SYNC_CONDITION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37139
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SYNC_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37140
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SYNC_FLAGS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37141
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SYNC_FENCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37142
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SYNC_GPU_COMMANDS_COMPLETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37143
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "UNSIGNALED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37144
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SIGNALED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37145
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ALREADY_SIGNALED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37146
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TIMEOUT_EXPIRED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37147
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "CONDITION_SATISFIED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37148
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "WAIT_FAILED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37149
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SYNC_FLUSH_COMMANDS_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "VERTEX_ATTRIB_ARRAY_DIVISOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35070
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ANY_SAMPLES_PASSED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35887
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "ANY_SAMPLES_PASSED_CONSERVATIVE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36202
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "SAMPLER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35097
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "RGB10_A2UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36975
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "INT_2_10_10_10_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36255
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TRANSFORM_FEEDBACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36386
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TRANSFORM_FEEDBACK_PAUSED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36387
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TRANSFORM_FEEDBACK_ACTIVE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36388
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TRANSFORM_FEEDBACK_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36389
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_IMMUTABLE_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37167
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_ELEMENT_INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36203
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TEXTURE_IMMUTABLE_LEVELS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33503
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "TIMEOUT_IGNORED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: -1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"], "MAX_CLIENT_WAIT_TIMEOUT_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37447
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "canvas", {
  configurable: true,
  enumerable: true,
  get: {
    canvas() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "canvas_get", arguments);
    }
  }.canvas,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "drawingBufferWidth", {
  configurable: true,
  enumerable: true,
  get: {
    drawingBufferWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "drawingBufferWidth_get", arguments);
    }
  }.drawingBufferWidth,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "drawingBufferHeight", {
  configurable: true,
  enumerable: true,
  get: {
    drawingBufferHeight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "drawingBufferHeight_get", arguments);
    }
  }.drawingBufferHeight,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "drawingBufferColorSpace", {
  configurable: true,
  enumerable: true,
  get: {
    drawingBufferColorSpace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "drawingBufferColorSpace_get", arguments);
    }
  }.drawingBufferColorSpace,
  set: {
    drawingBufferColorSpace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "drawingBufferColorSpace_set", arguments);
    }
  }.drawingBufferColorSpace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "unpackColorSpace", {
  configurable: true,
  enumerable: true,
  get: {
    unpackColorSpace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "unpackColorSpace_get", arguments);
    }
  }.unpackColorSpace,
  set: {
    unpackColorSpace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "unpackColorSpace_set", arguments);
    }
  }.unpackColorSpace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DEPTH_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 256
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1024
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_BUFFER_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 16384
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "POINTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "LINES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "LINE_LOOP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "LINE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TRIANGLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TRIANGLE_STRIP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TRIANGLE_FAN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ZERO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 768
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ONE_MINUS_SRC_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 769
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 770
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ONE_MINUS_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 771
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 772
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ONE_MINUS_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 773
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 774
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ONE_MINUS_DST_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 775
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SRC_ALPHA_SATURATE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 776
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FUNC_ADD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32774
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BLEND_EQUATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BLEND_EQUATION_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32777
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BLEND_EQUATION_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34877
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FUNC_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32778
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FUNC_REVERSE_SUBTRACT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32779
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BLEND_DST_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32968
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BLEND_SRC_RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32969
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BLEND_DST_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32970
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BLEND_SRC_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32971
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32769
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ONE_MINUS_CONSTANT_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32770
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32771
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ONE_MINUS_CONSTANT_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32772
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BLEND_COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32773
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34962
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ELEMENT_ARRAY_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34963
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34964
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ELEMENT_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34965
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STREAM_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35040
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STATIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35044
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DYNAMIC_DRAW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35048
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34660
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BUFFER_USAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34661
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "CURRENT_VERTEX_ATTRIB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34342
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRONT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1028
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1029
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRONT_AND_BACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1032
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3553
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "CULL_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2884
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BLEND", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3042
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DITHER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3024
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2960
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DEPTH_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2929
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SCISSOR_TEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3089
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "POLYGON_OFFSET_FILL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32823
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SAMPLE_ALPHA_TO_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32926
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SAMPLE_COVERAGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32928
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "NO_ERROR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "INVALID_ENUM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1280
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "INVALID_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1281
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "INVALID_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1282
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "OUT_OF_MEMORY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1285
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "CW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2304
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "CCW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2305
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "LINE_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2849
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ALIASED_POINT_SIZE_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33901
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ALIASED_LINE_WIDTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33902
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "CULL_FACE_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2885
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRONT_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2886
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DEPTH_RANGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2928
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DEPTH_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2930
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DEPTH_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2931
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DEPTH_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2932
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2961
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2962
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2964
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2965
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2966
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2967
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2963
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2968
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_BACK_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34816
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_BACK_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34817
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_BACK_PASS_DEPTH_FAIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34818
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_BACK_PASS_DEPTH_PASS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34819
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_BACK_REF", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36003
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_BACK_VALUE_MASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36004
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_BACK_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36005
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "VIEWPORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2978
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SCISSOR_BOX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3088
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_CLEAR_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3106
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_WRITEMASK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3107
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNPACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3317
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "PACK_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3333
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3379
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_VIEWPORT_DIMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3386
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SUBPIXEL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3408
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RED_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3410
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "GREEN_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3411
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BLUE_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3412
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ALPHA_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3413
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DEPTH_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3414
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_BITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3415
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "POLYGON_OFFSET_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10752
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "POLYGON_OFFSET_FACTOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32824
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_BINDING_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32873
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SAMPLE_BUFFERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32936
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32937
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SAMPLE_COVERAGE_VALUE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32938
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SAMPLE_COVERAGE_INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32939
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COMPRESSED_TEXTURE_FORMATS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34467
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DONT_CARE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4352
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FASTEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4353
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "NICEST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4354
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "GENERATE_MIPMAP_HINT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33170
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5120
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNED_BYTE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5121
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5122
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNED_SHORT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5123
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5124
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNED_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5125
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5126
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DEPTH_COMPONENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6402
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6406
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6407
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGBA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6408
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "LUMINANCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6409
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "LUMINANCE_ALPHA", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6410
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNED_SHORT_4_4_4_4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32819
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNED_SHORT_5_5_5_1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32820
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNED_SHORT_5_6_5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33635
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAGMENT_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35632
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "VERTEX_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35633
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_VERTEX_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34921
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_VERTEX_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36347
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_VARYING_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36348
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_COMBINED_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35661
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_VERTEX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35660
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_TEXTURE_IMAGE_UNITS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34930
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_FRAGMENT_UNIFORM_VECTORS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36349
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SHADER_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35663
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DELETE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35712
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "LINK_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35714
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "VALIDATE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35715
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ATTACHED_SHADERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35717
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ACTIVE_UNIFORMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35718
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ACTIVE_ATTRIBUTES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35721
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SHADING_LANGUAGE_VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35724
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "CURRENT_PROGRAM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35725
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "NEVER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 512
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "LESS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 513
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "EQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 514
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "LEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 515
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "GREATER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 516
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "NOTEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 517
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "GEQUAL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 518
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ALWAYS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 519
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "KEEP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7680
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "REPLACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7681
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "INCR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7682
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DECR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7683
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "INVERT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5386
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "INCR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34055
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DECR_WRAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34056
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "VENDOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7936
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RENDERER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7937
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "VERSION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 7938
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9728
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9729
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "NEAREST_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9984
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "LINEAR_MIPMAP_NEAREST", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9985
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "NEAREST_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9986
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "LINEAR_MIPMAP_LINEAR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 9987
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_MAG_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10240
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_MIN_FILTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10241
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_WRAP_S", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10242
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_WRAP_T", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10243
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5890
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34067
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_BINDING_CUBE_MAP", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34068
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_CUBE_MAP_POSITIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34069
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_CUBE_MAP_NEGATIVE_X", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34070
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_CUBE_MAP_POSITIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34071
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_CUBE_MAP_NEGATIVE_Y", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34072
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_CUBE_MAP_POSITIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34073
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_CUBE_MAP_NEGATIVE_Z", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34074
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_CUBE_MAP_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34076
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33984
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33985
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33986
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33987
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33988
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33989
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33990
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33991
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33992
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33993
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33994
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33995
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33996
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33997
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33998
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33999
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34000
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE17", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34001
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE18", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34002
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE19", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34003
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE20", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34004
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE21", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34005
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE22", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34006
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE23", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34007
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE24", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34008
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE25", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34009
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE26", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34010
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE27", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34011
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE28", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34012
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE29", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34013
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE30", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34014
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE31", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34015
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ACTIVE_TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34016
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 10497
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "CLAMP_TO_EDGE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33071
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MIRRORED_REPEAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33648
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FLOAT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35664
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FLOAT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35665
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FLOAT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35666
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "INT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35667
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "INT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35668
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "INT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35669
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BOOL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35670
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BOOL_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35671
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BOOL_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35672
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BOOL_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35673
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FLOAT_MAT2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35674
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FLOAT_MAT3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35675
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FLOAT_MAT4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35676
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35678
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35680
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "VERTEX_ATTRIB_ARRAY_ENABLED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34338
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "VERTEX_ATTRIB_ARRAY_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34339
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "VERTEX_ATTRIB_ARRAY_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34340
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "VERTEX_ATTRIB_ARRAY_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34341
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "VERTEX_ATTRIB_ARRAY_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34922
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "VERTEX_ATTRIB_ARRAY_POINTER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34373
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34975
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "IMPLEMENTATION_COLOR_READ_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35738
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "IMPLEMENTATION_COLOR_READ_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35739
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COMPILE_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35713
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "LOW_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36336
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MEDIUM_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36337
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "HIGH_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36338
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "LOW_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36339
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MEDIUM_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36340
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "HIGH_INT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36341
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36160
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RENDERBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36161
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGBA4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32854
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGB5_A1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32855
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGB565", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36194
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DEPTH_COMPONENT16", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33189
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_INDEX8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36168
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DEPTH_STENCIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34041
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RENDERBUFFER_WIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36162
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RENDERBUFFER_HEIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36163
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RENDERBUFFER_INTERNAL_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36164
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RENDERBUFFER_RED_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36176
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RENDERBUFFER_GREEN_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36177
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RENDERBUFFER_BLUE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36178
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RENDERBUFFER_ALPHA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36179
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RENDERBUFFER_DEPTH_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36180
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RENDERBUFFER_STENCIL_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36181
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36048
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36049
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36050
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36051
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_ATTACHMENT0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36064
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DEPTH_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36096
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36128
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DEPTH_STENCIL_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33306
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_COMPLETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36053
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_INCOMPLETE_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36054
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36055
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_INCOMPLETE_DIMENSIONS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36057
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_UNSUPPORTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36061
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36006
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RENDERBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36007
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_RENDERBUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34024
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "INVALID_FRAMEBUFFER_OPERATION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1286
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNPACK_FLIP_Y_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37440
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNPACK_PREMULTIPLY_ALPHA_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37441
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "CONTEXT_LOST_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37442
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNPACK_COLORSPACE_CONVERSION_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37443
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "BROWSER_DEFAULT_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37444
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "READ_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3074
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNPACK_ROW_LENGTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3314
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNPACK_SKIP_ROWS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3315
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNPACK_SKIP_PIXELS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3316
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "PACK_ROW_LENGTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3330
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "PACK_SKIP_ROWS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3331
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "PACK_SKIP_PIXELS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3332
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6144
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DEPTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6145
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STENCIL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6146
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 6403
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGB8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32849
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGBA8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32856
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGB10_A2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32857
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_BINDING_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32874
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNPACK_SKIP_IMAGES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32877
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNPACK_IMAGE_HEIGHT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32878
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32879
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_WRAP_R", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32882
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_3D_TEXTURE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32883
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNED_INT_2_10_10_10_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33640
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_ELEMENTS_VERTICES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33000
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_ELEMENTS_INDICES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33001
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_MIN_LOD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33082
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_MAX_LOD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33083
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_BASE_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33084
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_MAX_LEVEL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33085
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MIN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32775
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 32776
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DEPTH_COMPONENT24", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33190
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_TEXTURE_LOD_BIAS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34045
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_COMPARE_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34892
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_COMPARE_FUNC", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34893
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "CURRENT_QUERY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34917
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "QUERY_RESULT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34918
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "QUERY_RESULT_AVAILABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34919
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STREAM_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35041
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STREAM_COPY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35042
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STATIC_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35045
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "STATIC_COPY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35046
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DYNAMIC_READ", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35049
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DYNAMIC_COPY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35050
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_DRAW_BUFFERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34852
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DRAW_BUFFER0", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34853
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DRAW_BUFFER1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34854
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DRAW_BUFFER2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34855
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DRAW_BUFFER3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34856
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DRAW_BUFFER4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34857
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DRAW_BUFFER5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34858
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DRAW_BUFFER6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34859
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DRAW_BUFFER7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34860
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DRAW_BUFFER8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34861
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DRAW_BUFFER9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34862
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DRAW_BUFFER10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34863
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DRAW_BUFFER11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34864
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DRAW_BUFFER12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34865
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DRAW_BUFFER13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34866
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DRAW_BUFFER14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34867
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DRAW_BUFFER15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34868
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_FRAGMENT_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35657
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_VERTEX_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35658
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SAMPLER_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35679
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SAMPLER_2D_SHADOW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35682
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAGMENT_SHADER_DERIVATIVE_HINT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35723
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "PIXEL_PACK_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35051
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "PIXEL_UNPACK_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35052
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "PIXEL_PACK_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35053
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "PIXEL_UNPACK_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35055
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FLOAT_MAT2x3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35685
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FLOAT_MAT2x4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35686
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FLOAT_MAT3x2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35687
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FLOAT_MAT3x4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35688
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FLOAT_MAT4x2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35689
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FLOAT_MAT4x3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35690
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SRGB", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35904
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SRGB8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35905
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SRGB8_ALPHA8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35907
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COMPARE_REF_TO_TEXTURE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34894
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGBA32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34836
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGB32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34837
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGBA16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34842
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGB16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34843
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "VERTEX_ATTRIB_ARRAY_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35069
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_ARRAY_TEXTURE_LAYERS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35071
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MIN_PROGRAM_TEXEL_OFFSET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35076
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_PROGRAM_TEXEL_OFFSET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35077
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_VARYING_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35659
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35866
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_BINDING_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35869
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "R11F_G11F_B10F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35898
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNED_INT_10F_11F_11F_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35899
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGB9_E5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35901
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNED_INT_5_9_9_9_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35902
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TRANSFORM_FEEDBACK_BUFFER_MODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35967
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35968
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TRANSFORM_FEEDBACK_VARYINGS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35971
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TRANSFORM_FEEDBACK_BUFFER_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35972
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TRANSFORM_FEEDBACK_BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35973
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35976
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RASTERIZER_DISCARD", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35977
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35978
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35979
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "INTERLEAVED_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35980
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SEPARATE_ATTRIBS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35981
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TRANSFORM_FEEDBACK_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35982
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TRANSFORM_FEEDBACK_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35983
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGBA32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36208
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGB32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36209
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGBA16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36214
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGB16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36215
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGBA8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36220
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGB8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36221
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGBA32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36226
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGB32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36227
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGBA16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36232
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGB16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36233
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGBA8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36238
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGB8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36239
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RED_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36244
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGB_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36248
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGBA_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36249
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SAMPLER_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36289
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SAMPLER_2D_ARRAY_SHADOW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36292
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SAMPLER_CUBE_SHADOW", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36293
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNED_INT_VEC2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36294
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNED_INT_VEC3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36295
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNED_INT_VEC4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36296
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "INT_SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36298
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "INT_SAMPLER_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36299
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "INT_SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36300
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "INT_SAMPLER_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36303
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNED_INT_SAMPLER_2D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36306
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNED_INT_SAMPLER_3D", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36307
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNED_INT_SAMPLER_CUBE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36308
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNED_INT_SAMPLER_2D_ARRAY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36311
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DEPTH_COMPONENT32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36012
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DEPTH32F_STENCIL8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36013
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FLOAT_32_UNSIGNED_INT_24_8_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36269
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33296
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33297
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_ATTACHMENT_RED_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33298
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_ATTACHMENT_GREEN_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33299
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_ATTACHMENT_BLUE_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33300
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33301
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33302
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33303
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_DEFAULT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33304
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNED_INT_24_8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34042
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DEPTH24_STENCIL8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35056
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNED_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35863
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DRAW_FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36006
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "READ_FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36008
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "DRAW_FRAMEBUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36009
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "READ_FRAMEBUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36010
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RENDERBUFFER_SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36011
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36052
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_COLOR_ATTACHMENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36063
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_ATTACHMENT1", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36065
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_ATTACHMENT2", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36066
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_ATTACHMENT3", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36067
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_ATTACHMENT4", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36068
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_ATTACHMENT5", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36069
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_ATTACHMENT6", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36070
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_ATTACHMENT7", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36071
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_ATTACHMENT8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36072
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_ATTACHMENT9", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36073
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_ATTACHMENT10", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36074
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_ATTACHMENT11", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36075
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_ATTACHMENT12", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36076
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_ATTACHMENT13", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36077
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_ATTACHMENT14", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36078
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COLOR_ATTACHMENT15", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36079
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "FRAMEBUFFER_INCOMPLETE_MULTISAMPLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36182
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_SAMPLES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36183
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "HALF_FLOAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 5131
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RG", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33319
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RG_INTEGER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33320
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "R8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33321
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RG8", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33323
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "R16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33325
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "R32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33326
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RG16F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33327
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RG32F", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33328
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "R8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33329
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "R8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33330
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "R16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33331
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "R16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33332
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "R32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33333
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "R32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33334
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RG8I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33335
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RG8UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33336
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RG16I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33337
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RG16UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33338
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RG32I", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33339
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RG32UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33340
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "VERTEX_ARRAY_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 34229
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "R8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36756
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RG8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36757
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGB8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36758
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGBA8_SNORM", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36759
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SIGNED_NORMALIZED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36764
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COPY_READ_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36662
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COPY_WRITE_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36663
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COPY_READ_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36662
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "COPY_WRITE_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36663
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNIFORM_BUFFER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35345
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNIFORM_BUFFER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35368
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNIFORM_BUFFER_START", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35369
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNIFORM_BUFFER_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35370
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_VERTEX_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35371
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_FRAGMENT_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35373
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_COMBINED_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35374
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_UNIFORM_BUFFER_BINDINGS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35375
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_UNIFORM_BLOCK_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35376
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35377
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35379
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNIFORM_BUFFER_OFFSET_ALIGNMENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35380
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ACTIVE_UNIFORM_BLOCKS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35382
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNIFORM_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35383
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNIFORM_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35384
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNIFORM_BLOCK_INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35386
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNIFORM_OFFSET", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35387
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNIFORM_ARRAY_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35388
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNIFORM_MATRIX_STRIDE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35389
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNIFORM_IS_ROW_MAJOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35390
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNIFORM_BLOCK_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35391
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNIFORM_BLOCK_DATA_SIZE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35392
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNIFORM_BLOCK_ACTIVE_UNIFORMS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35394
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35395
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35396
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35398
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "INVALID_INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4294967295
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_VERTEX_OUTPUT_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37154
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_FRAGMENT_INPUT_COMPONENTS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37157
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_SERVER_WAIT_TIMEOUT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37137
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "OBJECT_TYPE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37138
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SYNC_CONDITION", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37139
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SYNC_STATUS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37140
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SYNC_FLAGS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37141
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SYNC_FENCE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37142
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SYNC_GPU_COMMANDS_COMPLETE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37143
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "UNSIGNALED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37144
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SIGNALED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37145
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ALREADY_SIGNALED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37146
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TIMEOUT_EXPIRED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37147
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "CONDITION_SATISFIED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37148
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WAIT_FAILED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37149
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SYNC_FLUSH_COMMANDS_BIT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "VERTEX_ATTRIB_ARRAY_DIVISOR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35070
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ANY_SAMPLES_PASSED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35887
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "ANY_SAMPLES_PASSED_CONSERVATIVE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36202
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "SAMPLER_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 35097
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "RGB10_A2UI", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36975
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "INT_2_10_10_10_REV", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36255
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TRANSFORM_FEEDBACK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36386
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TRANSFORM_FEEDBACK_PAUSED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36387
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TRANSFORM_FEEDBACK_ACTIVE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36388
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TRANSFORM_FEEDBACK_BINDING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36389
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_IMMUTABLE_FORMAT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37167
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_ELEMENT_INDEX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 36203
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TEXTURE_IMMUTABLE_LEVELS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 33503
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "TIMEOUT_IGNORED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: -1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "MAX_CLIENT_WAIT_TIMEOUT_WEBGL", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 37447
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "activeTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    activeTexture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "activeTexture", arguments);
    }
  }.activeTexture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "attachShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    attachShader() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "attachShader", arguments);
    }
  }.attachShader
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "beginQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    beginQuery() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "beginQuery", arguments);
    }
  }.beginQuery
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "beginTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    beginTransformFeedback() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "beginTransformFeedback", arguments);
    }
  }.beginTransformFeedback
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "bindAttribLocation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bindAttribLocation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "bindAttribLocation", arguments);
    }
  }.bindAttribLocation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "bindBufferBase", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bindBufferBase() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "bindBufferBase", arguments);
    }
  }.bindBufferBase
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "bindBufferRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bindBufferRange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "bindBufferRange", arguments);
    }
  }.bindBufferRange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "bindRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bindRenderbuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "bindRenderbuffer", arguments);
    }
  }.bindRenderbuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "bindSampler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bindSampler() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "bindSampler", arguments);
    }
  }.bindSampler
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "bindTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bindTransformFeedback() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "bindTransformFeedback", arguments);
    }
  }.bindTransformFeedback
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "bindVertexArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bindVertexArray() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "bindVertexArray", arguments);
    }
  }.bindVertexArray
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "blendColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    blendColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "blendColor", arguments);
    }
  }.blendColor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "blendEquation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    blendEquation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "blendEquation", arguments);
    }
  }.blendEquation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "blendEquationSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    blendEquationSeparate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "blendEquationSeparate", arguments);
    }
  }.blendEquationSeparate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "blendFunc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    blendFunc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "blendFunc", arguments);
    }
  }.blendFunc
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "blendFuncSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    blendFuncSeparate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "blendFuncSeparate", arguments);
    }
  }.blendFuncSeparate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "blitFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    blitFramebuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "blitFramebuffer", arguments);
    }
  }.blitFramebuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "bufferData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bufferData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "bufferData", arguments);
    }
  }.bufferData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "bufferSubData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bufferSubData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "bufferSubData", arguments);
    }
  }.bufferSubData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "checkFramebufferStatus", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    checkFramebufferStatus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "checkFramebufferStatus", arguments);
    }
  }.checkFramebufferStatus
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "clientWaitSync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clientWaitSync() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "clientWaitSync", arguments);
    }
  }.clientWaitSync
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "compileShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    compileShader() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "compileShader", arguments);
    }
  }.compileShader
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "compressedTexImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    compressedTexImage2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "compressedTexImage2D", arguments);
    }
  }.compressedTexImage2D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "compressedTexImage3D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    compressedTexImage3D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "compressedTexImage3D", arguments);
    }
  }.compressedTexImage3D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "compressedTexSubImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    compressedTexSubImage2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "compressedTexSubImage2D", arguments);
    }
  }.compressedTexSubImage2D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "compressedTexSubImage3D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    compressedTexSubImage3D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "compressedTexSubImage3D", arguments);
    }
  }.compressedTexSubImage3D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "copyBufferSubData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    copyBufferSubData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "copyBufferSubData", arguments);
    }
  }.copyBufferSubData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "copyTexImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    copyTexImage2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "copyTexImage2D", arguments);
    }
  }.copyTexImage2D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "copyTexSubImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    copyTexSubImage2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "copyTexSubImage2D", arguments);
    }
  }.copyTexSubImage2D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "copyTexSubImage3D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    copyTexSubImage3D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "copyTexSubImage3D", arguments);
    }
  }.copyTexSubImage3D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "createBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "createBuffer", arguments);
    }
  }.createBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "createFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createFramebuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "createFramebuffer", arguments);
    }
  }.createFramebuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "createProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createProgram() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "createProgram", arguments);
    }
  }.createProgram
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "createQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createQuery() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "createQuery", arguments);
    }
  }.createQuery
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "createRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createRenderbuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "createRenderbuffer", arguments);
    }
  }.createRenderbuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "createSampler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createSampler() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "createSampler", arguments);
    }
  }.createSampler
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "createShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createShader() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "createShader", arguments);
    }
  }.createShader
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "createTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createTexture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "createTexture", arguments);
    }
  }.createTexture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "createTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createTransformFeedback() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "createTransformFeedback", arguments);
    }
  }.createTransformFeedback
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "createVertexArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createVertexArray() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "createVertexArray", arguments);
    }
  }.createVertexArray
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "cullFace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    cullFace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "cullFace", arguments);
    }
  }.cullFace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "deleteBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "deleteBuffer", arguments);
    }
  }.deleteBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "deleteFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteFramebuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "deleteFramebuffer", arguments);
    }
  }.deleteFramebuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "deleteProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteProgram() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "deleteProgram", arguments);
    }
  }.deleteProgram
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "deleteQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteQuery() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "deleteQuery", arguments);
    }
  }.deleteQuery
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "deleteRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteRenderbuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "deleteRenderbuffer", arguments);
    }
  }.deleteRenderbuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "deleteSampler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteSampler() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "deleteSampler", arguments);
    }
  }.deleteSampler
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "deleteShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteShader() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "deleteShader", arguments);
    }
  }.deleteShader
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "deleteSync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteSync() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "deleteSync", arguments);
    }
  }.deleteSync
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "deleteTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteTexture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "deleteTexture", arguments);
    }
  }.deleteTexture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "deleteTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteTransformFeedback() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "deleteTransformFeedback", arguments);
    }
  }.deleteTransformFeedback
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "deleteVertexArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deleteVertexArray() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "deleteVertexArray", arguments);
    }
  }.deleteVertexArray
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "depthFunc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    depthFunc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "depthFunc", arguments);
    }
  }.depthFunc
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "depthMask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    depthMask() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "depthMask", arguments);
    }
  }.depthMask
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "depthRange", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    depthRange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "depthRange", arguments);
    }
  }.depthRange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "detachShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    detachShader() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "detachShader", arguments);
    }
  }.detachShader
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "disable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    disable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "disable", arguments);
    }
  }.disable
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "drawArraysInstanced", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    drawArraysInstanced() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "drawArraysInstanced", arguments);
    }
  }.drawArraysInstanced
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "drawElementsInstanced", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    drawElementsInstanced() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "drawElementsInstanced", arguments);
    }
  }.drawElementsInstanced
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "drawRangeElements", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    drawRangeElements() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "drawRangeElements", arguments);
    }
  }.drawRangeElements
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "enable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    enable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "enable", arguments);
    }
  }.enable
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "endQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    endQuery() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "endQuery", arguments);
    }
  }.endQuery
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "endTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    endTransformFeedback() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "endTransformFeedback", arguments);
    }
  }.endTransformFeedback
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "fenceSync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    fenceSync() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "fenceSync", arguments);
    }
  }.fenceSync
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "finish", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    finish() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "finish", arguments);
    }
  }.finish
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "flush", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    flush() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "flush", arguments);
    }
  }.flush
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "framebufferRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    framebufferRenderbuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "framebufferRenderbuffer", arguments);
    }
  }.framebufferRenderbuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "framebufferTexture2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    framebufferTexture2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "framebufferTexture2D", arguments);
    }
  }.framebufferTexture2D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "framebufferTextureLayer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    framebufferTextureLayer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "framebufferTextureLayer", arguments);
    }
  }.framebufferTextureLayer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "frontFace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    frontFace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "frontFace", arguments);
    }
  }.frontFace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "generateMipmap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    generateMipmap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "generateMipmap", arguments);
    }
  }.generateMipmap
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getActiveAttrib", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getActiveAttrib() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getActiveAttrib", arguments);
    }
  }.getActiveAttrib
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getActiveUniform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getActiveUniform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getActiveUniform", arguments);
    }
  }.getActiveUniform
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getActiveUniformBlockName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getActiveUniformBlockName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getActiveUniformBlockName", arguments);
    }
  }.getActiveUniformBlockName
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getActiveUniformBlockParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getActiveUniformBlockParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getActiveUniformBlockParameter", arguments);
    }
  }.getActiveUniformBlockParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getActiveUniforms", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getActiveUniforms() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getActiveUniforms", arguments);
    }
  }.getActiveUniforms
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getAttachedShaders", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAttachedShaders() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getAttachedShaders", arguments);
    }
  }.getAttachedShaders
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getAttribLocation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAttribLocation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getAttribLocation", arguments);
    }
  }.getAttribLocation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getBufferParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getBufferParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getBufferParameter", arguments);
    }
  }.getBufferParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getBufferSubData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getBufferSubData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getBufferSubData", arguments);
    }
  }.getBufferSubData
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getContextAttributes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getContextAttributes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getContextAttributes", arguments);
    }
  }.getContextAttributes
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getError", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getError() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getError", arguments);
    }
  }.getError
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getExtension", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getExtension() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getExtension", arguments);
    }
  }.getExtension
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getFragDataLocation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getFragDataLocation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getFragDataLocation", arguments);
    }
  }.getFragDataLocation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getFramebufferAttachmentParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getFramebufferAttachmentParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getFramebufferAttachmentParameter", arguments);
    }
  }.getFramebufferAttachmentParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getIndexedParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getIndexedParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getIndexedParameter", arguments);
    }
  }.getIndexedParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getInternalformatParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getInternalformatParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getInternalformatParameter", arguments);
    }
  }.getInternalformatParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getParameter", arguments);
    }
  }.getParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getProgramInfoLog", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getProgramInfoLog() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getProgramInfoLog", arguments);
    }
  }.getProgramInfoLog
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getProgramParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getProgramParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getProgramParameter", arguments);
    }
  }.getProgramParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getQuery() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getQuery", arguments);
    }
  }.getQuery
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getQueryParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getQueryParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getQueryParameter", arguments);
    }
  }.getQueryParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getRenderbufferParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getRenderbufferParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getRenderbufferParameter", arguments);
    }
  }.getRenderbufferParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getSamplerParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSamplerParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getSamplerParameter", arguments);
    }
  }.getSamplerParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getShaderInfoLog", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getShaderInfoLog() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getShaderInfoLog", arguments);
    }
  }.getShaderInfoLog
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getShaderParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getShaderParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getShaderParameter", arguments);
    }
  }.getShaderParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getShaderPrecisionFormat", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getShaderPrecisionFormat() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getShaderPrecisionFormat", arguments);
    }
  }.getShaderPrecisionFormat
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getShaderSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getShaderSource() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getShaderSource", arguments);
    }
  }.getShaderSource
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getSupportedExtensions", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSupportedExtensions() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getSupportedExtensions", arguments);
    }
  }.getSupportedExtensions
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getSyncParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSyncParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getSyncParameter", arguments);
    }
  }.getSyncParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getTexParameter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTexParameter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getTexParameter", arguments);
    }
  }.getTexParameter
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getTransformFeedbackVarying", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTransformFeedbackVarying() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getTransformFeedbackVarying", arguments);
    }
  }.getTransformFeedbackVarying
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getUniform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getUniform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getUniform", arguments);
    }
  }.getUniform
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getUniformBlockIndex", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getUniformBlockIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getUniformBlockIndex", arguments);
    }
  }.getUniformBlockIndex
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getUniformIndices", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getUniformIndices() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getUniformIndices", arguments);
    }
  }.getUniformIndices
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getUniformLocation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getUniformLocation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getUniformLocation", arguments);
    }
  }.getUniformLocation
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getVertexAttrib", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getVertexAttrib() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getVertexAttrib", arguments);
    }
  }.getVertexAttrib
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "getVertexAttribOffset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getVertexAttribOffset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "getVertexAttribOffset", arguments);
    }
  }.getVertexAttribOffset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "hint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    hint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "hint", arguments);
    }
  }.hint
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "invalidateFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    invalidateFramebuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "invalidateFramebuffer", arguments);
    }
  }.invalidateFramebuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "invalidateSubFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    invalidateSubFramebuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "invalidateSubFramebuffer", arguments);
    }
  }.invalidateSubFramebuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "isBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "isBuffer", arguments);
    }
  }.isBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "isContextLost", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isContextLost() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "isContextLost", arguments);
    }
  }.isContextLost
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "isEnabled", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isEnabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "isEnabled", arguments);
    }
  }.isEnabled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "isFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isFramebuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "isFramebuffer", arguments);
    }
  }.isFramebuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "isProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isProgram() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "isProgram", arguments);
    }
  }.isProgram
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "isQuery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isQuery() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "isQuery", arguments);
    }
  }.isQuery
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "isRenderbuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isRenderbuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "isRenderbuffer", arguments);
    }
  }.isRenderbuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "isSampler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isSampler() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "isSampler", arguments);
    }
  }.isSampler
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "isShader", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isShader() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "isShader", arguments);
    }
  }.isShader
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "isSync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isSync() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "isSync", arguments);
    }
  }.isSync
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "isTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isTexture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "isTexture", arguments);
    }
  }.isTexture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "isTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isTransformFeedback() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "isTransformFeedback", arguments);
    }
  }.isTransformFeedback
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "isVertexArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isVertexArray() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "isVertexArray", arguments);
    }
  }.isVertexArray
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "lineWidth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    lineWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "lineWidth", arguments);
    }
  }.lineWidth
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "linkProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    linkProgram() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "linkProgram", arguments);
    }
  }.linkProgram
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "pauseTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pauseTransformFeedback() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "pauseTransformFeedback", arguments);
    }
  }.pauseTransformFeedback
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "pixelStorei", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pixelStorei() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "pixelStorei", arguments);
    }
  }.pixelStorei
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "polygonOffset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    polygonOffset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "polygonOffset", arguments);
    }
  }.polygonOffset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "readBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    readBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "readBuffer", arguments);
    }
  }.readBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "readPixels", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    readPixels() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "readPixels", arguments);
    }
  }.readPixels
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "renderbufferStorage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    renderbufferStorage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "renderbufferStorage", arguments);
    }
  }.renderbufferStorage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "renderbufferStorageMultisample", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    renderbufferStorageMultisample() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "renderbufferStorageMultisample", arguments);
    }
  }.renderbufferStorageMultisample
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "resumeTransformFeedback", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    resumeTransformFeedback() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "resumeTransformFeedback", arguments);
    }
  }.resumeTransformFeedback
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "sampleCoverage", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    sampleCoverage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "sampleCoverage", arguments);
    }
  }.sampleCoverage
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "samplerParameterf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    samplerParameterf() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "samplerParameterf", arguments);
    }
  }.samplerParameterf
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "samplerParameteri", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    samplerParameteri() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "samplerParameteri", arguments);
    }
  }.samplerParameteri
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "shaderSource", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    shaderSource() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "shaderSource", arguments);
    }
  }.shaderSource
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "stencilFunc", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stencilFunc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "stencilFunc", arguments);
    }
  }.stencilFunc
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "stencilFuncSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stencilFuncSeparate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "stencilFuncSeparate", arguments);
    }
  }.stencilFuncSeparate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "stencilMask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stencilMask() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "stencilMask", arguments);
    }
  }.stencilMask
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "stencilMaskSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stencilMaskSeparate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "stencilMaskSeparate", arguments);
    }
  }.stencilMaskSeparate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "stencilOp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stencilOp() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "stencilOp", arguments);
    }
  }.stencilOp
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "stencilOpSeparate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stencilOpSeparate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "stencilOpSeparate", arguments);
    }
  }.stencilOpSeparate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "texImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    texImage2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "texImage2D", arguments);
    }
  }.texImage2D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "texImage3D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    texImage3D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "texImage3D", arguments);
    }
  }.texImage3D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "texParameterf", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    texParameterf() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "texParameterf", arguments);
    }
  }.texParameterf
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "texParameteri", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    texParameteri() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "texParameteri", arguments);
    }
  }.texParameteri
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "texStorage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    texStorage2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "texStorage2D", arguments);
    }
  }.texStorage2D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "texStorage3D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    texStorage3D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "texStorage3D", arguments);
    }
  }.texStorage3D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "texSubImage2D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    texSubImage2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "texSubImage2D", arguments);
    }
  }.texSubImage2D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "texSubImage3D", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    texSubImage3D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "texSubImage3D", arguments);
    }
  }.texSubImage3D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "transformFeedbackVaryings", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    transformFeedbackVaryings() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "transformFeedbackVaryings", arguments);
    }
  }.transformFeedbackVaryings
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform1ui", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform1ui() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform1ui", arguments);
    }
  }.uniform1ui
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform2ui", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform2ui() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform2ui", arguments);
    }
  }.uniform2ui
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform3ui", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform3ui() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform3ui", arguments);
    }
  }.uniform3ui
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform4ui", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform4ui() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform4ui", arguments);
    }
  }.uniform4ui
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniformBlockBinding", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniformBlockBinding() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniformBlockBinding", arguments);
    }
  }.uniformBlockBinding
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "useProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    useProgram() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "useProgram", arguments);
    }
  }.useProgram
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "validateProgram", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    validateProgram() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "validateProgram", arguments);
    }
  }.validateProgram
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "vertexAttribDivisor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttribDivisor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "vertexAttribDivisor", arguments);
    }
  }.vertexAttribDivisor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "vertexAttribI4i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttribI4i() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "vertexAttribI4i", arguments);
    }
  }.vertexAttribI4i
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "vertexAttribI4ui", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttribI4ui() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "vertexAttribI4ui", arguments);
    }
  }.vertexAttribI4ui
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "vertexAttribIPointer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttribIPointer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "vertexAttribIPointer", arguments);
    }
  }.vertexAttribIPointer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "waitSync", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    waitSync() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "waitSync", arguments);
    }
  }.waitSync
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "bindBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bindBuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "bindBuffer", arguments);
    }
  }.bindBuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "bindFramebuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bindFramebuffer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "bindFramebuffer", arguments);
    }
  }.bindFramebuffer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "bindTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bindTexture() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "bindTexture", arguments);
    }
  }.bindTexture
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clear() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "clear", arguments);
    }
  }.clear
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "clearBufferfi", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearBufferfi() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "clearBufferfi", arguments);
    }
  }.clearBufferfi
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "clearBufferfv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearBufferfv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "clearBufferfv", arguments);
    }
  }.clearBufferfv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "clearBufferiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearBufferiv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "clearBufferiv", arguments);
    }
  }.clearBufferiv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "clearBufferuiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearBufferuiv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "clearBufferuiv", arguments);
    }
  }.clearBufferuiv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "clearColor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearColor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "clearColor", arguments);
    }
  }.clearColor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "clearDepth", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearDepth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "clearDepth", arguments);
    }
  }.clearDepth
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "clearStencil", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearStencil() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "clearStencil", arguments);
    }
  }.clearStencil
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "colorMask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    colorMask() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "colorMask", arguments);
    }
  }.colorMask
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "disableVertexAttribArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    disableVertexAttribArray() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "disableVertexAttribArray", arguments);
    }
  }.disableVertexAttribArray
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "drawArrays", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    drawArrays() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "drawArrays", arguments);
    }
  }.drawArrays
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "drawBuffers", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    drawBuffers() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "drawBuffers", arguments);
    }
  }.drawBuffers
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "drawElements", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    drawElements() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "drawElements", arguments);
    }
  }.drawElements
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "enableVertexAttribArray", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    enableVertexAttribArray() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "enableVertexAttribArray", arguments);
    }
  }.enableVertexAttribArray
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "scissor", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    scissor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "scissor", arguments);
    }
  }.scissor
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform1f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform1f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform1f", arguments);
    }
  }.uniform1f
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform1fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform1fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform1fv", arguments);
    }
  }.uniform1fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform1i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform1i() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform1i", arguments);
    }
  }.uniform1i
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform1iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform1iv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform1iv", arguments);
    }
  }.uniform1iv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform1uiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform1uiv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform1uiv", arguments);
    }
  }.uniform1uiv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform2f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform2f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform2f", arguments);
    }
  }.uniform2f
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform2fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform2fv", arguments);
    }
  }.uniform2fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform2i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform2i() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform2i", arguments);
    }
  }.uniform2i
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform2iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform2iv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform2iv", arguments);
    }
  }.uniform2iv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform2uiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform2uiv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform2uiv", arguments);
    }
  }.uniform2uiv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform3f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform3f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform3f", arguments);
    }
  }.uniform3f
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform3fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform3fv", arguments);
    }
  }.uniform3fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform3i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform3i() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform3i", arguments);
    }
  }.uniform3i
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform3iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform3iv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform3iv", arguments);
    }
  }.uniform3iv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform3uiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform3uiv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform3uiv", arguments);
    }
  }.uniform3uiv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform4f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform4f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform4f", arguments);
    }
  }.uniform4f
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform4fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform4fv", arguments);
    }
  }.uniform4fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform4i", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform4i() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform4i", arguments);
    }
  }.uniform4i
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform4iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform4iv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform4iv", arguments);
    }
  }.uniform4iv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniform4uiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniform4uiv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniform4uiv", arguments);
    }
  }.uniform4uiv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniformMatrix2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniformMatrix2fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniformMatrix2fv", arguments);
    }
  }.uniformMatrix2fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniformMatrix2x3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniformMatrix2x3fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniformMatrix2x3fv", arguments);
    }
  }.uniformMatrix2x3fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniformMatrix2x4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniformMatrix2x4fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniformMatrix2x4fv", arguments);
    }
  }.uniformMatrix2x4fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniformMatrix3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniformMatrix3fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniformMatrix3fv", arguments);
    }
  }.uniformMatrix3fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniformMatrix3x2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniformMatrix3x2fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniformMatrix3x2fv", arguments);
    }
  }.uniformMatrix3x2fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniformMatrix3x4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniformMatrix3x4fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniformMatrix3x4fv", arguments);
    }
  }.uniformMatrix3x4fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniformMatrix4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniformMatrix4fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniformMatrix4fv", arguments);
    }
  }.uniformMatrix4fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniformMatrix4x2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniformMatrix4x2fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniformMatrix4x2fv", arguments);
    }
  }.uniformMatrix4x2fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "uniformMatrix4x3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    uniformMatrix4x3fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "uniformMatrix4x3fv", arguments);
    }
  }.uniformMatrix4x3fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "vertexAttrib1f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttrib1f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "vertexAttrib1f", arguments);
    }
  }.vertexAttrib1f
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "vertexAttrib1fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttrib1fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "vertexAttrib1fv", arguments);
    }
  }.vertexAttrib1fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "vertexAttrib2f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttrib2f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "vertexAttrib2f", arguments);
    }
  }.vertexAttrib2f
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "vertexAttrib2fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttrib2fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "vertexAttrib2fv", arguments);
    }
  }.vertexAttrib2fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "vertexAttrib3f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttrib3f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "vertexAttrib3f", arguments);
    }
  }.vertexAttrib3f
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "vertexAttrib3fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttrib3fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "vertexAttrib3fv", arguments);
    }
  }.vertexAttrib3fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "vertexAttrib4f", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttrib4f() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "vertexAttrib4f", arguments);
    }
  }.vertexAttrib4f
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "vertexAttrib4fv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttrib4fv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "vertexAttrib4fv", arguments);
    }
  }.vertexAttrib4fv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "vertexAttribI4iv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttribI4iv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "vertexAttribI4iv", arguments);
    }
  }.vertexAttribI4iv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "vertexAttribI4uiv", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttribI4uiv() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "vertexAttribI4uiv", arguments);
    }
  }.vertexAttribI4uiv
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "vertexAttribPointer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vertexAttribPointer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "vertexAttribPointer", arguments);
    }
  }.vertexAttribPointer
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "viewport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    viewport() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "viewport", arguments);
    }
  }.viewport
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "makeXRCompatible", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    makeXRCompatible() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["WebGL2RenderingContext"].prototype, "WebGL2RenderingContext", "makeXRCompatible", arguments);
    }
  }.makeXRCompatible
});
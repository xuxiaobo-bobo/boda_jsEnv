{
    "targets":[
        {
            "target_name":"boda", 
            "sources":['./c++_src/main.cc'],  
            "include_dirs":['<!@(node -p "require(\'node-addon-api\').include")'],
            "dependencies":['<!(node -p "require(\'node-addon-api\').gyp")'],
            "cflags_cc":[
                "-std-c++17"
            ],
            "cflags!":["-fno-exceptions"],
            "cflags_cc!":['-fno-exceptions'],
            "defines":['NAPI_DISABLE_CPP_EXCEPTIONS']
        }
    ]
}

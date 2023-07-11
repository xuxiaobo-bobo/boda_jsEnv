//网页变量初始化

!function(){
    //网页标签初始化   
    // debugger; 
    // {"charset":"utf-8"},
    //                 {"":,"content":"IE=edge,chrome=1"},
    //                 {"name":"keywords"},
       //Plugin
    //    debugger
       bodavm.toolsPlugin.createPlugin(
        {
            "description": "Portable Document Format",
            'filename': "internal-pdf-viewer",
            'name': "PDF Viewer",
            "mimeTypes": [
                {
                    "type": "application/pdf",
                    "suffixes": "pdf",
                    "description": "Portable Document Format",
                    'itemstamp':+Date.now()
                },
                {
                    "type": 'text/pdf',
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
            ],
            'itemstamp':+Date.now()
        }
    )
    bodavm.toolsPlugin.createPlugin(
        {
            "description": "Portable Document Format",
            'filename': "internal-pdf-viewer",
            'name': "Chrome PDF Viewer",
            "mimeTypes": [
                {
                    "type": "application/pdf",
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
                {
                    "type": 'text/pdf',
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
            ]
        }
    )
    bodavm.toolsPlugin.createPlugin(
        {
            "description": "Portable Document Format",
            'filename': "internal-pdf-viewer",
            'name': "Chromium PDF Viewer",
            "mimeTypes": [
                {
                    "type": "application/pdf",
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
                {
                    "type": 'text/pdf',
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
            ]
        }
    )
    bodavm.toolsPlugin.createPlugin(
        {
            "description": "Portable Document Format",
            'filename': "internal-pdf-viewer",
            'name': "Microsoft Edge PDF Viewer",
            "mimeTypes": [
                {
                    "type": "application/pdf",
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
                {
                    "type": 'text/pdf',
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
            ]
        }
    )
    bodavm.toolsPlugin.createPlugin(
        {
            "description": "Portable Document Format",
            'filename': "internal-pdf-viewer",
            'name': "WebKit built-in PDF",
            "mimeTypes": [
                {
                    "type": "application/pdf",
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
                {
                    "type": 'text/pdf',
                    "suffixes": "pdf",
                    "description": "Portable Document Format"
                },
            ]
        }
    )


    
    // Object.defineProperty(navigator.plugins)
    bodavm.memory.userInit.canvas_webgl=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAADTZJREFUeF7tnV2IXVcVx9eeO4NIEQURLcUvVGrBolIVoQ/ePCgUBYUiUlBQFBTUhxaKgsLci4o+qIiICoqIioKIH+iD+tAZFVSMdGISMzqJTezYWBM02GqCTcmRfT8yN3fO/Tofe6+1929ec87Za/3/q7/uve7e5zjhDwVQAAWMKOCMxEmYKIACKCAAiyJAARQwowDAMmMVgaIACgAsagAFUMCMAgDLjFUEigIoALCoARRAATMKACwzVhEoCqAAwKIGUAAFzCgAsMxYRaAogAIAixpAARQwowDAMmMVgaIACgAsagAFUMCMAgDLjFUEigIoALCogcYVuFpId12k65z0Gn84D8xaAYCVtf3tJD8C1paIHHFOttsZhafmqADAytH1lnO+VsiWE+mKyLZzcqTl4Xh8RgoArIzMDpXqBLD8kH2WhqGUT38cgJW+x8EzvFZIMVVYQCu4C2kOCLDS9DVaVr5/1ZHBknD6j35WNFfSGRhgpeOlikyuFtLriGyWFBb9LBUO2Q4CYNn2T130Txaytea3NJRHxtJQnWO2AgJYtvxSH+2ThRRrIvM+FgC01LuoN0CApdcbc5H5/pWTwQxr7tdNnOPjJ+bMVRIwwFJiRAphLAss9mel4HacHABWHN2THPXqaMPoohnWKHmWhklWQbtJAax29c3q6VdH+6+WBJbXBmhlVSH1kwVY9TXkCSJyZXjgebD/agVgCf0symcVBQDWKmpx7UwFqgKLfhZFtYoCAGsVtbh2pgJPjPpXq86w6GdRVKsoALBWUYtr2wIW/SxqaykFANZSMnHRIgX+N7FhdJUe1uRz6WctUpl/B1jUQG0FfP9qbWLDaFVg0c+qbUXyDwBYyVvcfoJXRucHx6CqASyWhu3bZXoEgGXaPh3BNwwsoKXDVpVRACyVttgK6sqof9XQDGuQPP0sWzUQKlqAFUrpRMd5fLRh1MOqSWCxCz7RgqmZFsCqKWDut/+3kN6ayGYLwGJpmHtxleQPsCiKWgpcnjjw3PAMaxwX5w1rOZTWzQArLT+DZ3N54sBzS8CinxXcVb0DAiy93qiPzPevxh+caGlJyCxLfRWEDRBghdU7qdECAot+VlKVUz0ZgFVdu+zv/M/EBydanmEx08q+2oYCACwKobICEYBFP6uyW2ncCLDS8DF4FpcK6W5MnR9sq+k+lRy/GgZ3W8+AAEuPF6YiiQgs+lmmKqXZYAFWs3pm87THSg48B5ph0c/KpsoOJwqwMja/TuoKgEU/q46BRu8FWEaNix32YyUHngPPsFgaxi6CCOMDrAiiWx/S96/8htHprQwRgAW0rBfTivEDrBUF43KRS4X0OiUHniMBy1tyxDnZxpv0FQBY6XvceIa+fyUyeC3yDa+UiQgs+lmNu6zzgQBLpy+qo/r3jAPPMYHF+7NUl0xjwQGsxqTM40G+f+U/ODH+/uAkpCIDi35WBiUIsDIwuckUlQOLflaTZit8FsBSaIrmkC7NOfCsYIY1kI73wWuuoHqxAax6+mV396WpD6YqWxKO/eC8YaKVCbASNbaNtC5OfHBCaQ9rMm2g1UYRRH4mwIpsgKXhjQGLfpal4loyVoC1pFBcJvKviQ9OGJhh0c9KsGgBVoKmtpWSRWCxP6utaojzXIAVR3eTo/5zwYFnLb8SlohLP8tkxR0OGmAlYmTbafj+ld8wOu84jmJg0c9qu0ACPR9gBRLa+jAXJ17YN2srg3JgbTsnR6z7kHv8ACv3Clgy/wSA5TNlabik31ovA1hanVEW18WJ/pXRGdZYUaClrLZWCQdgraJWptf+fWLDqOEe1qR7vD/LaC0DLKPGhQz7H4X01iZe2Gd8huWlo58VsoAaHAtgNShmqo+6MLFhNJEZFv0so8UKsIwaFzLsC1Mv7EtghkU/K2QBNTgWwGpQzBQf5ftX/oMTk0dxEgKWt4x+lqHCBViGzIoRagbAop8Vo7AqjgmwKgqXy22PlrywL7EZFv0sQ8UMsAyZFSPUTIAFtGIUV4UxAVYF0XK5Zb+Q7sbo/GDCPazrdvJqZf2VDbD0exQtwv2r0t1YGx54zgFY4mTbrXHeMFrBLTEwwFpCpFwvOf/EAFaDD6ZmASxvdCF99xTp5eq59rwBlnaHIsZ3/nKGwBpD6yagFbH0Zg4NsDS6oiSm849LUbazPcFfCQ8p7p42mFTyp0wBTFFmiJZw9i9Jt+PKX9iXA7AG5w2fQT9LSz2O4wBY2hxREs/+Rel1nGzmOsMa2OD7Wc9iaaikJAdhACxNbiiK5fwF2ZLha5Elq6b7tAfXpO9uBlpaShNgaXFCWRyPPCLFrE95ZbIkvO6Iu4X/sWspT4ClxQlFceyfle5a58YDz9lsayj3Yds9j36WhhIFWBpcUBbDAFhTb2jIHFgifmn4IpaGsUsVYMV2QOH4+6eH+69YEk6Z46F1K9CKWbIAK6b6Ssfe/9Nw/xXAOmyQeyn9rJhlC7Biqq9w7LMnpLs+2n8FsEoN2nYvo58Vq3QBVizllY57dke66yUHnrPvYU365ZeGr2RpGKOEAVYM1RWP+fCDg18HDx14BlhTpvlNpXcArdClDLBCK658vId/B7CWtci9hn7Wslo1dR3AakrJRJ7z19+UH3hmhlVisF8a3sksK2TpA6yQaisf6+yvhvuvFn17MLed7nNt89B6HdAKVdoAK5TSBsY5t32wHGRbwwqG+X7WEaC1gmKVLwVYlaVL78ZzD8iWm3HgmSXhHL/9LOv1ACvEfxEAK4TKRsY497PZB54B1gwTPazuAlahShxghVJa+TinfyzdjTkHngFWybaGNwKq0GUNsEIrrnS8v/xo+MK+WbvbAdbION+vejOgilXGACuW8srGfegH8w88Zw8sv/S7G1DFLluAFdsBJeM/9L35B56zBZafUb0VUCkpU3bqajEiZhynv3PwwQmWhBNLv3sAVcy6LBubGZY2RyLEc/qb0u0sOPCczQzLL/3eAagilOFSQwKspWRK+6Iz35CttdH+q2xnWNek71127wJWmqsdYGl2J1BsZ75W/oXnbN6H5ftU7wZUgcqt1jAAq5Z89m/e/Yp0N5Y4P5jkktAv/94LqCxVMcCy5FYLse5+KUNgeVC9H1C1UE6tPxJgtS6x7gH2vnCwHFzmLQyL3uQwnompLCy/9PsgoNJdkfOjU1lXlgW1Fvve5zIAlgfVvYDKWm2yrSEFxxrOYe8zBy/sS26G5Zd+9wOqhksm6uOYYUWVP+7gu5+Ubqdz8MK+ZIDlZ1QfAlRxq6ud0QFWO7qaeOruJ4YHnsd9KfPAKkZ7qT4CrEwUYIUgAVYF0VK5Ze9jsiWjL+Qs20xf9rrgheWXf5uAKpXanJVH8LpKXVBL+f1588YX9pmcYTnpux6gslR3dWIFWHXUM3zv7keHH5xYdUOoohlW330cUBkuwUqhA6xKstm/6Y8flt761Av7TMywfEP9U4DKfgVWywBgVdPN/F279x9+YZ9qYHlQfRpQmS+8mgkArJoCWr19977DL+xTCqy++yygslpnTccNsJpW1MDzTnxAuusl779SBqy++zygMlBOQUMEWEHl1jHYAFjFcMOouqb7eC/VF4GVjmrRFQXA0uVHkGhOve/gC8/KgNV3XwZUQYrA6CAAy6hxdcI+9R51wOq7rwKqOp7mci/AysXpUZ4n3indNXdwfjDqDMv/8vd1QJVZCdZKF2DVks/ezSfergBYHlTfAlT2qid+xAArvgdBIzh5j2w5N9jlLhGa7n33bUAV1PDEBgNYiRm6KJ2TbzvoXwUDlp9RfRdQLfKGf1+sAMBarFFSV5y8+8YDz632sDyovg+okiqgyMkArMgGhBx+5y3DD07U+XzXMoefnUh/MHv7IbAK6W8OYwGsHFwe5fiHN0mvI7LZJrBEpL/xE0CVUVkFTRVgBZU77mDH7zp84LmpJaEU0n/qTwFVXIfTHx1gpe/x9QyPv+Hwgee6wPLLv5t+DqgyKqOoqQKsqPKHG3ynK91OyYHnqsDyS7+nPwCowjnISF4BgJVJHQyAVXLgeVVg+aXfM38JqDIpG3VpAix1lrQT0LE7Dz6YWqXpXhTSf/avAVU77vDUZRUAWMsqZfy6Y6+tBizfo7r5t4DKuP3JhA+wkrFydiI7r5Kum3HgedaS0C/9/F6qW34PrDIoETMpAiwzVlUPdOcVqwHLw+r5xwBVdcW5sy0FAFZbyip67s7tsw88T/Wz+i88DqgUWUcoUwoArAxKYue2+cDyfaqXnAJUGZSC+RQBlnkLFyewc2v5gWe/9LttD1AtVpArtCgAsLQ40VIcR18s3fWpA8+FSP/2M4CqJcl5bIsKAKwWxdXw6KMvkN766MCzX/q9/Byg0uALMVRTAGBV083MXQ8+V7aKQn5xx98AlRnTCHSmAgAr8eI4+hzpvfpRYJW4zdmkB7CysZpEUcC+AgDLvodkgALZKACwsrGaRFHAvgIAy76HZIAC2SgAsLKxmkRRwL4CAMu+h2SAAtkoALCysZpEUcC+Av8HwhAmtT6LhaYAAAAASUVORK5CYII=`
    // bodavm.memory.userInit.canvas_experimental_webgl="data:image/png;base64,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";

    // debugger
    // localStorage.setItem("name","123")
    // sessionStorage.setItem("name","123")
    // debugger
   
}();
// debugger

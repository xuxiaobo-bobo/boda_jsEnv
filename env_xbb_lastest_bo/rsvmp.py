#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author   : boda
# @Time     : 2023-08-08 10:34
# @File     : vmp.py
# @Project  : 爬虫
import re
import time

import requests

headers = {
    # 'Connection': 'keep-alive',
    # 'Pragma': 'no-cache',
    # 'Cache-Control': 'no-cache',
    # 'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
    # 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    # 'Referer': 'http://www.chinaunicombidding.cn',
    # 'Accept-Language': 'zh-CN,zh;q=0.9',
}
session = requests.session()
session.headers = headers
# session.proxies={
#     'https':'https://127.0.0.1:7890',
# }

def get_ck(response):
    content = re.findall('<meta content="(.*?)"', response, re.S | re.I)[0]
    ts = re.findall('<script type="text/javascript" r=\'m\'>(.*?)</script>', response, re.S | re.I)[0]
    ts_url = re.findall('src="(.*?)" r=', response, re.S | re.I)[0]

    js_code=session.get(f'http://jwxt.gzhu.edu.cn{ts_url}').text
    with open(r'D:\My_Dir2\env_xbb_lastest_bo\run\new\jwxt.gzhu.edu.cn\1.js','w',encoding='utf-8') as ff:
        ff.write(js_code)
    with open(r'D:\My_Dir2\env_xbb_lastest_bo\run\run.html','w',encoding='utf-8') as bb:
        bb.write(response)
    #11.html 复制到run.html 里面
    ck=''  #获取第一次生成的cookie
    
    '''
    Document_visibilityState_get  未完善 visibilitychange事件来监听文档的可见性visible 
    Document_cookie_set -> arg -> GW1gelwM5YZuT=0uwNUqx_2Dm4yXbJVn6sHKJhTCvEtt1Uul.97khorNHpBSwNNSlDSy2KdocNBms7ZZsrR42wR9.LKwCArT6v_wIxSyYgUTjF5XTi5mZ10SF.JFJZeUf1tEcugzM1758eD00xbJEJI0KCrN6NugS07Nuu.pOWpzuUWKnkHLpBd2t7mdX52XF8bjoXTaTpFKjYHQdzXuKY3N5DoOe47RgkrLkxqHVDbjzVFI_CkNQle0H9; path=/; expires=Tue, 15 Aug 2023 04:07:19 GMT

    '''
    # 8VPXu9fob6i3P=09xFBzHFOi8qNvp_I6srWqZOcqu3J1qsSdgVTCEvj1BrInuSeYpiXpRvUxdeZz09Y0qAHf_4phOqsZsRnVBRuq4ytqKBxLn4jK5ATQ6xIogT9Fn.32FqiCwv7tST1GxT40QHV5GHEImRoz1PH4ENHoecSdqKmgtdbjIu_k_pUNGf7nKsxnFtC.boE4rI9m_TUolg3xMB4rNkJlbtl1gUV.S6X03.30MUxBsFo1b9iTS3; path=/; expires=Sat, 26 Aug 2023 14:26:30 GMT; Secure

    session.cookies.update({'FKS1N0PCcT6ET': ck.replace('FKS1N0PCcT6ET=','')})





def get_data():
    params=''
    for _ in range(2):
        response = session.get('http://jwxt.gzhu.edu.cn/jwglxt/xtgl/login_getPublicKey.html',headers=headers,params=params)
        response.encoding=response.apparent_encoding

        response=response.text
        print(response)
        if '<meta conten' in response:
            dd=get_ck(response)
        else:
            print(response)
            break


if __name__ == '__main__':
    get_data()







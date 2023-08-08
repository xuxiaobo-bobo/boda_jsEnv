#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author   : boda
# @Time     : 2023-08-08 10:34
# @File     : vmp.py
# @Project  : 爬虫
import re
import time

import execjs
import requests

headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Referer': 'http://www.chinaunicombidding.cn',
    'Accept-Language': 'zh-CN,zh;q=0.9',
}
session = requests.session()
session.headers = headers


def get_ck(response):
    content = re.findall('<meta content="(.*?)"', response, re.S | re.I)[0]
    ts = re.findall('<script type="text/javascript" r=\'m\'>(.*?)</script>', response, re.S | re.I)[0]
    ts_url = re.findall('src="(.*?)" r=', response, re.S | re.I)[0]
    js= session.get(f'http://qikan.cqvip.com{ts_url}').text
    with open('11.html','w',encoding='utf-8') as bb:
        bb.write(response)
    #11.html 复制到run.html 里面
    ck=''  #获取第一次生成的cookie
    
    '''
    Document_visibilityState_get  未完善 visibilitychange事件来监听文档的可见性visible 
    Document_cookie_set -> arg -> GW1gelwM5YZuT=0uwNUqx_2Dm4yXbJVn6sHKJhTCvEtt1Uul.97khorNHpBSwNNSlDSy2KdocNBms7ZZsrR42wR9.LKwCArT6v_wIxSyYgUTjF5XTi5mZ10SF.JFJZeUf1tEcugzM1758eD00xbJEJI0KCrN6NugS07Nuu.pOWpzuUWKnkHLpBd2t7mdX52XF8bjoXTaTpFKjYHQdzXuKY3N5DoOe47RgkrLkxqHVDbjzVFI_CkNQle0H9; path=/; expires=Tue, 15 Aug 2023 04:07:19 GMT

    '''

    session.cookies.update({'GW1gelwM5YZuT': ck.replace('GW1gelwM5YZuT=','')})





def get_data():

    for _ in range(2):
        response = session.get('http://qikan.cqvip.com/',)
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







#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author   : boda
# @Time     : 2023-08-08 10:34
# @File     : vmp.py
# @Project  : 爬虫
import re
import time
import os
import requests

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
}
session = requests.session()
session.headers = headers


def get_ck(response):
    content = re.findall('<meta content="(.*?)"', response, re.S | re.I)[0]
    ts = re.findall('<script type="text/javascript" r=\'m\'>(.*?)</script>', response, re.S | re.I)[0]
    ts_url = re.findall('src="(.*?)" r=', response, re.S | re.I)[0]

    js_code = session.get(f'http://www.nmpa.gov.cn{ts_url}').text

    ts_path=os.getcwd()+f"\\run\\webSite\\www.nmpa.gov.cn\\{ts_url.split('/')[2].split('.')[0]}.js"
    with open(ts_path, 'w', encoding='utf-8') as ff:
        ff.write(js_code)
    # with open(r'D:\My_Dir2\bodaEnv\run\run.html', 'w', encoding='utf-8') as bb:
    #     bb.write(response)
    # print(js_code)
    ck_resp=requests.get('http://127.0.0.1:3021/cookie',params={'boHtml':response,'apiUrl':'https://www.nmpa.gov.cn/datasearch/data/nmpadata/search'}).json()
    # print(ckk)
    # 11.html 复制到run.html 里面
    ck = ck_resp['cookie']

    session.cookies.update({'NfBCSins2OywP': ck.replace('NfBCSins2OywP=', '')})


def get_data():
    params = ''
    for _ in range(2):
        response = session.get('http://www.nmpa.gov.cn', headers=headers, params=params)
        response.encoding = response.apparent_encoding

        response = response.text
        print(response)
        if '<meta conten' in response:
            dd = get_ck(response)
        else:
            print(response)
            break


if __name__ == '__main__':
    get_data()







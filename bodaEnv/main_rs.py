import os
import json
import re
import base64
from urllib.parse import urljoin,urlparse

import requests
from lxml import etree


headers = {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        }

class RSVMP:

    def fetch(self,url,apiUrl):
        session=requests.Session()
        
        response = session.get(url, headers=headers)
        # print(response.text)
        tree=etree.HTML(response.text)
        
        ts_url=tree.xpath('//script/@src')[0]
        # print(ts_url)
        ts_resp=session.get(urljoin(response.url,ts_url),headers=headers).text

        netloc_=urlparse(response.url)[1]
        if not os.path.exists(f'./run/webSite/{netloc_}'):
            os.mkdir(f'./run/webSite/{netloc_}')

        filename=re.compile(r'[\\/](?P<group>[^\\/?]+)(?:\?|$)').search(ts_url).group('group').replace('.js','')[0:-8]+'.js'
        # print(filename)
        with open (f'./run/webSite/{netloc_}/{filename}','w',encoding='utf-8') as f:
            f.write(ts_resp)

        b64conent=base64.b64encode(response.content)

        resp_=requests.get('http://127.0.0.1:3022/cookie',params={'boUrl':url,'boHtml':b64conent,'apiUrl':apiUrl}).json()
        print(resp_)

        cookie_dict = dict(item.split('=') for item in resp_['cookie'].split('; '))
        
        for cookie_name, cookie_value in cookie_dict.items():
            session.cookies.set(cookie_name, cookie_value)
        
        resp2=session.get(url, headers=headers)
        
        data ={'current': 1, 'pageSize': 10, 'modeNo': "BizAnnoVoMtable", 'pageNo': 1}

        response3 = session.get(resp_['rsurl'], headers=headers)

        print(response3.text)






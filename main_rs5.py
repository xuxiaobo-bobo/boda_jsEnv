import requests
from lxml import etree
from urllib.parse import urljoin

s=requests.session()
headers={
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Host": "www.nmpa.gov.cn",
    "Pragma": "no-cache",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
}
url='https://www.nmpa.gov.cn/datasearch/search-result.html'
req=s.get(url=url,headers=headers)
print(req.text)



# print(req.text)
with open("dccf.html", 'w', encoding="utf-8") as f:
    f.write(req.text)
paseHtml = etree.HTML(req.text)
# print(paseHtml)
jscode = ';'.join(paseHtml.xpath('//script/text()'))
jsurl = urljoin(url, paseHtml.xpath('//script/@src')[0])
# paseHtml = etree.HTML(req.text)

req = s.get(jsurl)
req.encoding = "iso-8859-1"
jstsdata = req.text

with open("dccf.js", 'w', encoding="utf-8") as f:
    f.write(jstsdata+";\n"+jscode)


cookie = ''
# cookie=''

yu = cookie.split(';')
s.cookies.set(yu[0].split('=')[0], yu[0].split('=')[1])
s.cookies.set(yu[1].split('=')[0], yu[1].split('=')[1])
print(s.cookies)
req = s.get(url,headers= {
    "Host": "www.nmpa.gov.cn",
    "Pragma": "no-cache",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
},
            # proxies = {'http': 'http://localhost:8888', 'https': 'http://localhost:8888'}
            )
req.encoding = "utf-8"
print(req.text)
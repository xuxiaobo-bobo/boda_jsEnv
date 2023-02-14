# author : b站 陈不不
import requests
from lxml import etree
from urllib.parse import urljoin

url = "http://www.fangdi.com.cn/service/service_law_detail_img2.html"
s = requests.session()
req = s.get(url, headers= {
    "Host": "www.fangdi.com.cn",
    "Connection": "keep-alive",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Accept-Language": "zh",
    "Accept-Encoding": "gzip, deflate",
    "Upgrade-Insecure-Requests": "1",
    "Cache-Control": "max-age=0",
})
req.encoding = "utf-8"

print(req.text)
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


cookie='FSSBBIl1UgzbN7Nenable=true;FSSBBIl1UgzbN7N80T=4zBDsvJZX3Qro.BuXTAJfod2bFRkdLH5gV947oyjHweH6gGcnOhYt88ijZ_71ZTXTbJ6LfXb052dAUQ7CaQQT0vl61zmyEgkJpCRjUaAW82GT5TOwtRrovMzcmamT6S2_vQWv93tR5oTnjCqHDK58HYtPdTVHjnI_RxGCYvgrzbntH8l.x_FRUdd0zNNsKAsjdyxDhP3knsbg0D_I8bUnfVH.'

# 运行到input处停止  把生成的dccf.js 和dccf.html里的内容粘贴到run.html 和jscode.js/run.js中  运行main.js,然后把生成的cookie输入 ,注意回车空格
cookie = input("输入cooKie")
# cookie=''

yu = cookie.split(';')
s.cookies.set(yu[0].split('=')[0], yu[0].split('=')[1])
s.cookies.set(yu[1].split('=')[0], yu[1].split('=')[1])
print(s.cookies)
req = s.get(url,headers= {
"Host": "www.fangdi.com.cn",
"Connection": "keep-alive",
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
"Accept-Language": "zh",
"Accept-Encoding": "gzip, deflate",
"Upgrade-Insecure-Requests": "1",
"Cache-Control": "max-age=0",
},
            # proxies = {'http': 'http://localhost:8888', 'https': 'http://localhost:8888'}
            )
req.encoding = "utf-8"
print(req.text)
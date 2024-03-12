import requests
import time

headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Sec-Fetch-Dest": "script",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
url = "https://cf.aliyun.com/nocaptcha/analyze.jsonp"



params = {
    "a": "FFFF0N0000000000ACD7",
    "t": f"FFFF0N0000000000ACD7:nc_login:{int(time.time()*1000)}:0.5842351350883199",
    "n": requests.get('http://127.0.0.1:3000/get227').json()['227'],
    "p": '{"ncbtn":"946.6666870117188|105.16667175292969|40|32|105.16667175292969|137.1666717529297|946.6666870117188|986.6666870117188","umidToken":"GCD9A6B9469E34A48B47D4895A4C2867B49CB6008178A3107C7","ncSessionID":"5e701f3e3255","et":"0"}',
    "scene": "nc_login",
    "asyn": "0",
    "lang": "cn",
    "v": "1",
    "callback": "jsonp_08334775294124646"
}
response = requests.get(url, headers=headers, params=params)

print(response.text)
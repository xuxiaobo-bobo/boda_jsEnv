# -*- coding: utf-8 -*-
import datetime
import json
import random
import uuid
import warnings
import requests
import re
import urllib3
from copy import deepcopy
from time import time

urllib3.disable_warnings()


def get_delta_time(starttime, endtime):
    """
    计算 分段的时间 segment
    """
    # ValueError: time data '2022-10-10:00' does not match format '%Y-%m-%d %H:%M:%S'
    starttime_datetime = datetime.datetime.strptime(starttime.strip(), '%Y-%m-%d')
    endtime_datetime = datetime.datetime.strptime(endtime.strip(), '%Y-%m-%d')
    gap_time = endtime_datetime - starttime_datetime
    return gap_time.days


class WHLParseShipSchedule(object):
    def obj_strip(self, obj):
        """前后去空格"""
        if isinstance(obj, list):
            return [self.obj_strip(i) for i in obj]
        elif isinstance(obj, str):
            return obj.strip()
        else:
            return obj

    def __init__(self, message):
        proxies_dict = message.get_proxies()
        self.session = requests.session()
        self.message = message
        self.spu_id = self.message.get_business_data().get("pol").get("spu_id")
        agent_domain = proxies_dict.get('agentDomain')
        proxy_host = agent_domain.split(':')[0]
        proxy_port = agent_domain.split(':')[1]
        proxy_user = proxies_dict.get('agentAccount')
        proxy_pass = proxies_dict.get('agentToken')
        if proxy_user:
            proxy_meta = "http://%s:%s@%s:%s" % (proxy_user, proxy_pass, proxy_host, proxy_port)
        else:
            proxy_meta = "http://%s:%s" % (proxy_host, proxy_port)
        self.proxies = {
            "http": proxy_meta,
            "https": proxy_meta
        }

        UA_list = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36",
    "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; GTB7.0)",
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)",
    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)",
    "Mozilla/5.0 (Windows; U; Windows NT 6.1; ) AppleWebKit/534.12 (KHTML, like Gecko) Maxthon/3.0 Safari/534.12",
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E)",
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E; SE 2.X MetaSr 1.0)",
    "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.3 (KHTML, like Gecko) Chrome/6.0.472.33 Safari/534.3 SE 2.X MetaSr 1.0",
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E)",
    "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.41 Safari/535.1 QQBrowser/6.9.11079.201",
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E) QQBrowser/6.9.11079.201",
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)",
    "Mozilla/5.0(Macintosh;U;IntelMacOSX10_6_8;en-us)AppleWebKit/534.50(KHTML,likeGecko)Version/5.1Safari/534.50",
    "Mozilla/5.0(Windows;U;WindowsNT6.1;en-us)AppleWebKit/534.50(KHTML,likeGecko)Version/5.1Safari/534.50",
    "Mozilla/5.0(compatible;MSIE9.0;WindowsNT6.1;Trident/5.0;",
    "Mozilla/4.0(compatible;MSIE8.0;WindowsNT6.0;Trident/4.0)",
    "Mozilla/4.0(compatible;MSIE7.0;WindowsNT6.0)",
    "Mozilla/4.0(compatible;MSIE6.0;WindowsNT5.1)",
    "Mozilla/5.0(Macintosh;IntelMacOSX10.6;rv:2.0.1)Gecko/20100101Firefox/4.0.1",
    "Mozilla/5.0(WindowsNT6.1;rv:2.0.1)Gecko/20100101Firefox/4.0.1",
    "Opera/9.80(Macintosh;IntelMacOSX10.6.8;U;en)Presto/2.8.131Version/11.11",
    "Opera/9.80(WindowsNT6.1;U;en)Presto/2.8.131Version/11.11",
    "Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11",
    "Mozilla/4.0(compatible;MSIE7.0;WindowsNT5.1;Maxthon2.0)",
    "Mozilla/4.0(compatible;MSIE7.0;WindowsNT5.1;TencentTraveler4.0)",
    "Mozilla/4.0(compatible;MSIE7.0;WindowsNT5.1)",
    "Mozilla/4.0(compatible;MSIE7.0;WindowsNT5.1;TheWorld)",
    "Mozilla/4.0(compatible;MSIE7.0;WindowsNT5.1;Trident/4.0;SE2.XMetaSr1.0;SE2.XMetaSr1.0;.NETCLR2.0.50727;SE2.XMetaSr1.0)",
    "Mozilla/4.0(compatible;MSIE7.0;WindowsNT5.1;360SE)",
    "Mozilla/4.0(compatible;MSIE7.0;WindowsNT5.1;AvantBrowser)",
    "Mozilla/4.0(compatible;MSIE7.0;WindowsNT5.1)"
]
        self.UA = random.choice(UA_list)
        self.url_ship = "https://eshipping.wanhai.com/cec/wdcec102_qbp.do?from_place={}&to_place={}&duration=4"
        # self.node_url = "http://vmlogin-akamai.pro.yqn.corp:33667/whl/ShipSchedule"
        self.node_url = "http://127.0.0.1:55555/whl/ShipSchedule"

    def get_session_url(self, params):
        reqs_ = requests.post(self.node_url, data=params)
        content_text = reqs_.json()
        if content_text['state'] != 200:
            return None
        end_text = content_text['data']
        cookie_get = end_text[0]
        # 返回加密的url
        url_ship_node = end_text[1]
        key, value = re.findall(r'(.+?)=(.+?);', cookie_get)[0]
        # 更新cookie

        self.session.cookies.update({key: value})
        return url_ship_node

    def get_state_page_js(self):
        for i in range(5):
            url_state = f'https://eshipping.wanhai.com/cec/?XxzDb6ATXNH0={int(time() * 1000)}#/mainpage'
            headers = {
                'User-Agent': self.UA,
            }
            self.session.cookies.clear()
            try:
                reqs_ = self.session.get(url_state, headers=headers, proxies=self.proxies, timeout=15, verify=False)
            except:
                continue
            if reqs_.status_code == 412 or reqs_.status_code == 200:
                reqs_text = reqs_.text
                content = re.findall(r'content="(.*?)">', reqs_text)[-1].split('"')[0]
                ts_js = "$_ts" + reqs_text.split("r='m'>$_ts")[-1].split("script")[0][:-2]
                eval_js = reqs_text.split('src="/FPmUmu7xCaOP/')[-1].split('.js')[0]
                h_js = f'https://eshipping.wanhai.com/FPmUmu7xCaOP/{eval_js}.js'
                # 请求接口 返回cookie和js
                params = {
                    'win_ts': ts_js,  # win对象的js
                    'content': content,  # content
                    'UA': headers['User-Agent'],  # 请求的UA 要chrome 头部带 Mozilla/
                    'h_js': h_js,  # 解析出来第二层的js文件
                }
                return params, url_state
        return None, None

    def get_schedule_list(self, pol, pod):
        url = self.url_ship.format(pol, pod)
        params, url_state = self.get_state_page_js()

        if not params:
            return None
        params['url'] = url

        headers_ship = {

            "Host": "eshipping.wanhai.com",
            "Connection": "keep-alive",
            'Accept': 'application/json, text/plain, */*',
            # "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35",
            "User-Agent": self.UA,
            "Referer": "https://eshipping.wanhai.com/cec/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
        }
        self.session.headers.update(headers_ship)

        for i in range(5):
            # 加密的链接返回重试需要从新获取吗
            try:
                url_ship_node = self.get_session_url(params)
                if not url_ship_node:
                    return None
                reqs_content = self.session.get(url_ship_node, proxies=self.proxies, timeout=15,
                                                verify=False)
            except Exception as err:

                continue
            if reqs_content.status_code == 200:
                reqs_json = reqs_content.json()
                if int(reqs_json['code']) != 200:
                    continue
                else:
                    return reqs_json
        return None

    def parse_schedule(self, response_dict):
        """解析数据"""

        schedules_list = response_dict['datas']
        last_schedule = []

        for list_index, list_info in enumerate(schedules_list):
            _segment = []
            datas = ShipScheduleDataStuct_List()
            datas.pol_name = list_info.get('plr_name')
            datas.pod_name = list_info.get('pod_name')
            datas.etd = list_info.get('plr_etd')
            datas.eta = list_info.get('pod_eta')
            datas.total_transit_time = int(list_info.get('transit_time'))

            if list_info.get("ts_port_name").strip():

                is_direct = 0
            else:
                is_direct = 1
            if is_direct == 1:
                item = ShipScheduleDataStuct_Detail()
                item.pol_name = list_info.get('plr_name')
                item.pod_name = list_info.get('dept_port_name')
                item.transit_time = datas.total_transit_time

                item.vessel = list_info.get('dept_vessel')
                item.voyage = list_info.get('dept_voyage')
                item.etd = list_info.get('pol_etd')
                item.eta = list_info.get('pod_eta')
                item.pol_name = datas.pol_name
                item.pod_name = datas.pod_name
                item.index = 1
                item.vessel = list_info.get('dept_vessel')
                item.voyage = list_info.get('dept_voyage')
                pol_info = port_info()
                pol_carrier_port_id = None
                item.is_direct = 1

                pol_info.carrier_port_id = pol_carrier_port_id
                pol_info.carrier_port_id = pol_carrier_port_id
                pol_info.port_full_name = item.pol_name

                # 获取pod信息的id
                pod_info = port_info()
                pod_carrier_port_id = None

                pod_info.carrier_port_id = pod_carrier_port_id
                pod_info.port_full_name = item.pod_name
                item.pol_info = pol_info.to_dict()
                item.pod_info = pod_info.to_dict()

                _segment.append(item.to_dict())
            else:
                item = ShipScheduleDataStuct_Detail()
                item.vessel = list_info.get('dept_vessel')
                item.voyage = list_info.get('dept_voyage')
                item.etd = list_info.get('pol_etd')
                item.eta = list_info.get('dept_date')
                item.pol_name = list_info.get("pol_name")
                item.pod_name = list_info.get("ts_port_name")
                item.transit_time = get_delta_time(item.etd, item.eta)
                item.index = 1
                item.is_direct = 0
                pol_info = port_info()
                pol_info.port_full_name = item.pol_name

                # 获取pod信息的id
                pod_info = port_info()
                pod_info.port_full_name = item.pod_name
                item.pol_info = pol_info.to_dict()
                item.pod_info = pod_info.to_dict()
                _segment.append(item.to_dict())

                item1 = ShipScheduleDataStuct_Detail()
                item1.vessel = list_info.get('arr_vessel')
                item1.voyage = list_info.get('arr_voyage')
                item1.etd = list_info.get('dept_date')
                item1.eta = list_info.get('pod_eta')
                item1.pol_name = list_info.get("ts_port_name")
                item1.pod_name = list_info.get("pod_name")
                item1.transit_time = get_delta_time(item1.etd, item1.eta)
                item1.index = 2
                item1.is_direct = 0
                pol_info = port_info()
                pol_info.port_full_name = item1.pol_name

                # 获取pod信息的id
                pod_info = port_info()
                pod_info.port_full_name = item1.pod_name
                item1.pol_info = pol_info.to_dict()
                item1.pod_info = pod_info.to_dict()
                _segment.append(item1.to_dict())

            datas.segment = _segment
            last_schedule.append(datas.to_dict())

        last_data = ShipScheduleDataStuct_BASE(self.message)  # 构造最后返回的数据

        last_data.schedule = last_schedule

        return last_data.to_dict()

    def run_server(self):
        self.busi_data = self.message.get_business_data()
        pol = self.busi_data.get('pol')
        pod = self.busi_data.get('pod')
        pol_port_code = pol['carrier_port_code']
        pod_port_code = pod['carrier_port_code']

        schedule_info = self.get_schedule_list(pol_port_code, pod_port_code)
        if not schedule_info:
            raise ValueError("requests is none")
        data_cnt = schedule_info['extraData']['count']
        if int(data_cnt) == 0:
            result = {"status": "success", "data": {}}
            return json.dumps(result, ensure_ascii=False)

        result_list = self.parse_schedule(schedule_info)
        result = {"status": "success", "data": result_list}
        return json.dumps(result, ensure_ascii=False)


class ShipScheduleDataStuct_BASE(object):
    spu_id = None
    carrier_id = None
    carrier_code = None
    batch_no = None
    log_id = None
    schedule = None

    def __init__(self, message=None):
        message = deepcopy(message)
        pol_pod = message.get_business_data()
        pol = pol_pod.get('pol')
        self.spu_id = pol.get('spu_id')
        self.carrier_id = pol.get('carrier_id')
        self.carrier_code = pol.get('carrier_code')
        self.log_id = message.get_common_data_task_id()
        self.batch_no = message.get_common_data().get('batchNo')
        self.schedule = list()

    def to_dict(self):
        not_name_list = ['__module__', '__dict__', '__weakref__', '__doc__', 'to_dict', '__init__']
        return_dict = dict()
        for k, v in self.__class__.__dict__.items():
            if k in not_name_list:
                continue
            return_dict[k] = v

        now_dict = self.__dict__.copy()
        for k, v in self.__dict__.items():
            if k not in return_dict:
                warnings.warn(f'{k} not in class define')
                now_dict.pop(k)
        return_dict.update(now_dict)
        return return_dict


class ShipScheduleDataStuct_List(object):
    group_id = None
    total_transit_time = None
    etd = None
    eta = None
    pol_name = None
    pod_name = None
    segment = None

    def __init__(self):
        self.group_id = str(uuid.uuid4())
        self.segment = list()

    def to_dict(self):
        not_name_list = ['__module__', '__dict__', '__weakref__', '__doc__', 'to_dict', '__init__']
        return_dict = dict()
        for k, v in self.__class__.__dict__.items():
            if k in not_name_list:
                continue
            return_dict[k] = v

        now_dict = self.__dict__.copy()
        for k, v in self.__dict__.items():
            if k not in return_dict:
                warnings.warn(f'{k} not in class define')
                now_dict.pop(k)
        return_dict.update(now_dict)
        return return_dict


class ShipScheduleDataStuct_Detail(object):
    index = None
    pol_name = None
    pod_name = None
    pol_info = None
    pod_info = None
    eta = None
    etd = None
    etc = None
    service_code = None
    service_name = None
    vessel = None
    voyage = None
    local_voyage = None
    transport_mode = None
    is_direct = None
    transit_time = None
    vgm_cut_off = None
    port_cut_off = None
    pol_terminal = None
    pod_terminal = None
    vessel_imo = None
    vessel_call_sign = None

    def __init__(self):
        pass

    def to_dict(self):
        not_name_list = ['__module__', '__dict__', '__weakref__', '__doc__', 'to_dict', '__init__']
        return_dict = dict()
        for k, v in self.__class__.__dict__.items():
            if k in not_name_list:
                continue
            return_dict[k] = v

        now_dict = self.__dict__.copy()
        for k, v in self.__dict__.items():
            if k not in return_dict:
                warnings.warn(f'{k} not in class define')
                now_dict.pop(k)
        return_dict.update(now_dict)
        return return_dict


class port_info(object):
    carrier_port_id = None
    carrier_port_code = None
    state_code = None
    state_name = None
    city_code = None
    city_name = None
    country_code = None
    country_name = None
    standard_port_code = None
    port_full_name = None

    def to_dict(self):
        not_name_list = ['__module__', '__dict__', '__weakref__', '__doc__', 'to_dict', '__init__']
        return_dict = dict()
        for k, v in self.__class__.__dict__.items():
            if k in not_name_list:
                continue
            return_dict[k] = v

        now_dict = self.__dict__.copy()
        for k, v in self.__dict__.items():
            if k not in return_dict:
                warnings.warn(f'{k} not in class define')
                now_dict.pop(k)
        return_dict.update(now_dict)
        return return_dict


if __name__ == '__main__':
    class Message(object):
        def __init__(self, message):
            self.busi_data = message

        def get_business_data(self):
            return self.busi_data

        def get_common_data_task_id(self):
            return '测试ID'

        def get_proxies(self):
            return {'agentDomain': 'http-proxy-t1.dobel.cn:9180', 'agentAccount': 'QRKJDUOBEIE5HHT2MK9',
                    'agentToken': '7qRfvj0O', 'agentId': 77}

        def get_common_data(self):
            return {"batchNo": 123456}

        def to_dict(self):
            return {}


    message = {"jobStrategy": "FOUR_HOUR",
               "pod": {"carrier_code": "WHL", "carrier_id": 4575, "carrier_port_code": "VNCLP",
                       "carrier_port_country_code": "VN", "carrier_port_full_name": "CAT LAI PORT HOCHIMINH",
                       "carrier_port_name": "CAT LAI PORT HOCHIMINH", "id": 932087, "port_code": "VNOCL",
                       "spu_id": 932087, "yqn_port_id": 1018323},
               "pol": {"carrier_code": "WHL", "carrier_id": 4575, "carrier_port_code": "CNSHA",
                       "carrier_port_country_code": "CN", "carrier_port_full_name": "SHANGHAI上海",
                       "carrier_port_name": "SHANGHAI", "id": 932087, "port_code": "CNSHA", "spu_id": 932087,
                       "yqn_port_id": 8951}, "sceneId": "0526_WHLParseShipSchedule"}
    message = Message(message)
    spider = WHLParseShipSchedule(message)
    data = spider.run_server()
    print(data)
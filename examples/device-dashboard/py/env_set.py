# -*- coding: utf-8 -*-
"""
Created on Thu Jan 18 07:41:01 2024

@author: husts
"""

import requests
import json

src_server = 'http://119.45.101.222:20039'
#src_server = 'http://10.8.0.30:8000'
#src_server = 'http://192.168.8.147:8000'
#src_server = 'http://192.168.2.136:8000'
src_req_url = '%s/api/env/set'%(src_server)

CTL_CMD_DONE = 0,
CTL_CMD_STDBY = 1,
CTL_CMD_STOP = 2,
CTL_CMD_RUN = 3,
CTL_CMD_SET_APS = 4,
CTL_CMD_SET_WORKMODE = 5,
# APS正值放电，负值充电
CTL_WORKMODE_SLAVE = 0,
CTL_WORKMODE_PCURV = 1,
src_s = json.dumps({"cmd":0,"param":2})
src_r = requests.get(src_req_url, headers={'Accept': 'application/json'},data=src_s)
print(src_r)
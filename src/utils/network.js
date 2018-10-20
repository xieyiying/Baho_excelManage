import axios from 'axios'
import { Toast } from 'vant'
axios.defaults.timeout = 150000

// 添加请求拦截器
axios.interceptors.request.use(config => {
    let userName = JSON.parse(localStorage.getItem('userName') || null)
    let ContentTypeArr = ['multipart/form-data']
    if (!ContentTypeArr.includes(config.headers['Content-Type'])) { // 不是form-data类型才添加公共参数
        if (config.method === 'post') { // post请求
            config.data = Object.assign({}, {userName: userName}, config.data)
        } else { // get请求
            config.params = Object.assign({}, {userName: userName}, config.params)
        }
    }
    return config
}, err => {
    Toast("请求超时！")
    return Promise.resolve(err)
})
  
  // 添加响应拦截器
axios.interceptors.response.use(res => {
    if (res.status && res.status === 200 && res.data.status === 'error') {
        return
    }
    return res
}, err => {
    if (err.response.status === 504 || err.response.status === 404) {
        Toast('服务器正在外太空遨游，请稍后再试~')
    } else if (err.response.status === 403) {
        Toast('权限不足，请联系管理员~')
    } else {
        Toast('请求失败，请稍后重试~')
    }
    return Promise.resolve(err)
})

export const httpUrl = ''

// 拦截code码
export const interceptResCode = (res, resolve) => {
    resolve(res)
}

// post请求
export const postRequest = (url, params) => {
    return new Promise((resolve) => {
        if(process.env.NODE_ENV === 'development') {
            this.httpUrl = '/api'
        }
        axios({
          method: 'post',
          url: this.httpUrl + url,
          data: params,
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then(res => {
          interceptResCode(res.data, resolve)
        })
    })
}

// get请求
export const getRequest = (url, params) => {
    return new Promise(resolve => {
        if(process.env.NODE_ENV === 'development') {
            this.httpUrl = '/api'
        }
        axios({
          method: 'get',
          url: this.httpUrl + url,
          params: params
        }).then(res => {
          interceptResCode(res.data, resolve)
        })
    })
}
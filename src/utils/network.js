import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'

export const httpUrl = process.env.NODE_ENV === 'development' ? '/api' : 'http://47.99.51.37:9001'
const username = localStorage.getItem('username')
const token = localStorage.getItem('token')

export const requestParams = 'username=' + username + '&token=' + token

// 添加请求拦截器
axios.interceptors.request.use(config => {
    let userName = localStorage.getItem('userName') || null
    let token = localStorage.getItem('token') || null
    let ContentTypeArr = ['multipart/form-data']
    if (!ContentTypeArr.includes(config.headers['Content-Type'])) { // 不是form-data类型才添加公共参数
        if (config.method === 'post') { // post请求
            config.data = Object.assign({}, {
                userName: userName,
                token: token
            }, config.data)
        } else { // get请求
            config.params = Object.assign({}, {
                userName: userName,
                token: token
            }, config.params)
        }
    }
    return config
}, err => {
    Toast("请求超时！")
    return Promise.resolve(err)
})

// 拦截code码
export const interceptResCode = (res, resolve) => {
    resolve(res)
}

// post请求
export const postRequest = (url, params) => {
    return new Promise((resolve) => {
        let requestData = {
            ...params,
            token: localStorage.getItem('token'),
            username: localStorage.getItem('username'),
        }
        axios.post(url, qs.stringify(requestData), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            console.log(err)
        })
    })
}

// get请求
export const getRequest = (url, params) => {
    return new Promise((resolve) => {
        let requestData = {
            ...params,
            token: localStorage.getItem('token'),
            username: localStorage.getItem('username'),
        }
        axios.get(url, {
            params: requestData
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            console.log(err)
        })
    })
}
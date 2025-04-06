// 封装axios

import axios from "axios";

const httpInstance = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0/',
    timeout: 5000,
})

// 拦截器
httpInstance.interceptors.request.use(
    (config) => {
        // 在请求发送之前做一些处理
        // 例如添加请求头、修改请求参数等
        return config;
    },
    (error) => {
        // 请求错误处理
        return Promise.reject(error);
    }
)

httpInstance.interceptors.response.use(
    (response) => {
        // 处理响应数据
        return response.data;
    },
    (error) => {
        // 响应错误处理
        return Promise.reject(error);
    }
)

export { httpInstance }
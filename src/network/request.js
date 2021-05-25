import axios from 'axios'
import qs from 'qs'

export function request(config){
    //创建实例
    const instance = axios.create({
        baseURL: 'http://localhost:8000',
        timeout: 5000,
        transformRequest: [function (data) {
            return qs.stringify(data);
        }]
    });
    //请求拦截器(再发送请求前做什么)
    instance.interceptors.request.use(config =>{
        return config;
    }, err =>{
        console.log(err);
    })
    //响应拦截器 (对响应数据做什么)
    instance.interceptors.response.use(res =>{
        return res.data;
    }, err =>{
        console.log(err);
    })
    //发送真正网络请求
    return instance(config)
}
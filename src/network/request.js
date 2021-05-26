import axios from 'axios'

export function request(config){
    //创建实例
    const instance = axios.create({
        // baseURL: 'http://localhost:8081',
        timeout: 5000,
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
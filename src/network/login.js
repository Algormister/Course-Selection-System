import {request} from '../network/request'
export function login(info){
    return request({
        url: '/api/login',
        method: 'post',
        data: info
    })
}
export function getterm(){
    return request({
        url: 'api/admin/getterm'
    })
}
export function getStuInfo(info){
    return request({
        url:'/api/users/getstudentinfo',
        method:'post',
        data:info
    })
}
export function getTeacherInfo(info){
    return request({
        url: '/api/users/getteacherinfo',
        method:'post',
        data:info
    })
}
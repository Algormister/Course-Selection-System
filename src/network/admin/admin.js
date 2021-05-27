import {request} from '../request'
export function addterm(info){
    return request({
        url: '/api/admin/addterm',
        method: 'post',
        data: info
    })
}
export function selectCourse(info){
    return request({
        url:'api/admin/showcourse/m',
        method: 'post',
        data: info
    })
}
export function addCourse(info){
    return request({
        url:'api/admin/addcourse',
        method:'post',
        data:info
    })
}
export function setrounds(info){
    return request({
        url:'api/admin/setrounds',
        method:'post',
        data:info
    })
}
export function updateCourse(info){
    return request({
        url: 'api/admin/updatecourse',
        method: 'post',
        data: info
    })
}
export function deleteCourse(info){
    return request({
        url:'api/admin/removecourse',
        method:'post',
        data:info
    })
}
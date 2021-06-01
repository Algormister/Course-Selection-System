import {request} from '../request'
export function getLessonInfo(info){
    return request({
        url:'/api/selectionrecords/studentgetcourse/term',
        method: 'post',
        data: info
    })
}
export function quickChoose(info){
    return request({
        url:'/api/selectionrecords/selectcourse',
        method:'post',
        data:info
    })
}
export function fuzzyQuery(info){
    return request({
        url:'/api/selectionrecords/showcourse/m',
        method:'post',
        data:info
    })
}
export function dropCourse(info){
    return request({
        url:'/api/selectionrecords/dropcourse',
        method:'post',
        data:info
    })
}
export function getGpa(info){
    return request({
        url:'/api/selectionrecords/getgpa',
        method:'post',
        data:info
    })
}
export function getAll(info){
    return request({
        url:'/api/selectionrecords/studentgetcourse/all',
        method:'post',
        data: info
    })
}
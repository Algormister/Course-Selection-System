import {request} from '../request'
export function getStuInfo(info){
    return request({
        url:'/api/teacher/getstudents',
        method:'post',
        data:info
    })
}
export function getCourse(info){
    return request({
        url: '/api/teacher/getcourses',
        method:'post',
        data:info
    })
}
export function updateUsual(info){
    return request({
        url:'api/teacher/setusualscore',
        method: 'post',
        data: info
    })
}
export function updateTest(info){
    return request({
        url: 'api/teacher/settestscore',
        method:'post',
        data:info
    })
}
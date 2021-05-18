import {request} from './request'
export function getLessonInfo(){
    return request({
        url: '/api'
    })
}
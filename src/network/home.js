import { request } from './request'
// import qs from 'qs'
export function getLessonInfo() {
    return request({
        url: '/api'
    })
}
export function post(id) {
    return request({
        url: '/api/list',
        method: 'post',
        data: id,
    })
}
import { request } from './request'
export function getLessonInfo() {
    return request({
        url: '/api'
    })
}
export function post(id) {
    return request({
        url: '/api/list',
        method: 'post',
        data: {
            id: id
        },
    })
}
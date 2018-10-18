import request from './fetch'

//定义接口进行开发

export function login(bodyparams) {
    let params = {
        url: 'index/login',
        method: 'POST',
        body: bodyparams || {}
    }
    return request(params)
}

export function register(bodyparams) {
    let params = {
        url: 'index/register',
        method: 'POST',
        body: bodyparams || {}
    }
    return request(params)
}

export function topic_add(bodyparams) {
    let params = {
        url: 'topic/add',
        method: 'POST',
        body: bodyparams || {}
    }
    return request(params)
}

export function topic_all() {
    let params = {
        url: 'topic',
        method: 'GET'
    }
    return request(params)
}

export function topic_detail(bodyparams) {
    let params = {
        url: 'detail',
        method: 'POST',
        body: bodyparams || {}
    }
    return request(params)
}

export function reply_add(bodyparams) {
    let params = {
        url: 'http://localhost:2000/api/reply/add',
        method: "POST",
        body: bodyparams || {}
    }
    return request(params)
}

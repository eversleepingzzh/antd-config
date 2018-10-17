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

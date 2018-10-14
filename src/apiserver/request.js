import request from './fetch'

//定义接口进行开发

export function login(bodyparams) {
    let params = {
        url: '/login',
        method: 'POST',
        body: bodyparams || {}
    }
    return request(params)
}

export function register(bodyparams) {
    let params = {
        url: '/register',
        method: 'POST',
        body: bodyparams || {}
    }
    return request(params)
}


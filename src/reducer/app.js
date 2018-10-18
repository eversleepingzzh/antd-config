/**
 * Created by zzh on 2018/10/14.
 */

var initialState = {
    isLogin: false,
    topics: [],
    topic_detail: {}
}

export function app(state = initialState, action) {
    switch(action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {
                isLogin:action.isLogin
            })
        case 'GET_ALL_TOPIC':
            return Object.assign({}, state, {
                topics:action.topics
            })
        case 'GET_TOPIC_DETAIL':
            return Object.assign({}, state, {
                topic_detail: action.topic_detail
            })
    }

    return state
}
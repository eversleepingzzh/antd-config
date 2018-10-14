/**
 * Created by zzh on 2018/10/14.
 */

var initialState = {
    isLogin: false
}

export default function app(state = initialState, action) {
    switch(action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {
                isLogin:action.isLogin
            })
    }

    return state
}
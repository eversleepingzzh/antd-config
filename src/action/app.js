/**
 * Created by zzh on 2018/10/14.
 */

export function appLogin(isLogin) {
    return (dispatch, getState) => {
        dispatch({
            type: 'LOGIN',
            isLogin: isLogin
        })
    }
}
/**
 * Created by zzh on 2018/10/14.
 */
import * as request from '../apiserver/request';


export function appLogin(isLogin) {
    return (dispatch, getState) => {
        dispatch({
            type: 'LOGIN',
            isLogin: isLogin
        })
    }
}

export function getTopics() {
    return (dispatch, getState) => {
        request.topic_all().then((res) => {
            dispatch({
                type: 'GET_ALL_TOPIC',
                topics: res
            })
        }).catch((err) => {
            console.log(err)
        })

    }
}

export function getTopicDetail(id) {
    return (dispatch, getState) => {
        let params = {
            topic_id: id
        }
        request.topic_detail(params).then((res) => {
            console.log(res)
            dispatch({
                type: 'GET_TOPIC_DETAIL',
                topic_detail: res
            })
        }).catch((err) => {
            console.log(err)
        })
    }
}
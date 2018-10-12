import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import * as request from '../apiserver/request';
import '../css/login.css'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            pwd: '',
            isLogin: false,
        }
    }

    handleChange(e) {
        let state = {}
        state[e.target.name] = e.target.value
        this.setState(state)
    }

    _submit() {
        request.login({
            username:this.state.name,
            password:this.state.pwd,
        }).then((res) => {
            if(res.msg === 'success') {
                this.setState({
                    isLogin: true
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        if(this.state.isLogin) {
           return  <Redirect to={"/"} />
        }
        return (
            <div className={'main'}>
                <div className={"sidebar"}></div>
                <div className={"content"}>
                    <div className="inner">
                        <div>登录</div>
                        <Input placeholder={'name'} name={"name"} value={this.state.name} type={"text"} onChange={this.handleChange.bind(this)}/>
                        <Input placeholder={'password'} name={'pwd'} value={this.state.pwd} type={"password"} onChange={this.handleChange.bind(this)}/>
                        <Button type="primary" onClick={() => {
                            this._submit()
                        }}>提交</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
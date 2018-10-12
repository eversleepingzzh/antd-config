import React, { Component } from 'react';
import { Input, Button } from 'antd';
import * as request from '../apiserver/request';
import '../css/register.css'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            pwd: '',
        }
    }

    handleChange(e) {
        let state = {}
        state[e.target.name] = e.target.value
        this.setState(state)
    }

    _submit() {
        request.register({
            username:this.state.name,
            password:this.state.pwd,
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <div className={'main'}>
                <div className={"sidebar"}></div>
                <div className={"content"}>
                    <div className="inner">
                        <div>注册</div>
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

export default Register
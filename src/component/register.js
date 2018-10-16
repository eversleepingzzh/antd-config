import React, { Component } from 'react';
import { Input, Button, message } from 'antd';
import { Redirect } from 'react-router-dom'
import * as request from '../apiserver/request';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            pwd: '',
            isRegister: false,
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
            if(res.msg == "success") {
                message.info("注册成功")
            }
            // this.setState({
            //     isRegister: true
            // })
        }).catch((err) => {
            console.log(err)
            message.info(err.rspDesc)
        })
    }
    render() {
        if(this.state.isRegister) {
            return <Redirect to={"/"} />
        }
        return (
            <div className={'main'}>
                <div className={"sidebar"}></div>
                <div className={"content"}>
                    <div className={'login_header'}>注册</div>
                    <div className="inner">
                        <div className={'flex_box mb_20'}>
                            <div className={"user_input"}>用户名</div>
                            <div className={"input_box"}>
                                <Input placeholder={'name'} name={"name"} value={this.state.name} type={"text"} onChange={this.handleChange.bind(this)}/>
                            </div>
                        </div>
                        <div className={"flex_box mb_20"}>
                            <div className={"user_input"}>密码</div>
                            <div className={"input_box"}>
                                <Input placeholder={'password'} name={'pwd'} value={this.state.pwd} type={"password"} onChange={this.handleChange.bind(this)}/>
                            </div>
                        </div>
                        <div className={'submit'}>
                            <Button type="primary" onClick={() => {
                                this._submit()
                            }}>提交</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
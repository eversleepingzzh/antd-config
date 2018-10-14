import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import * as request from '../apiserver/request';
import { appLogin } from '../action/app';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../css/login.css'


class Login extends Component {
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
        request.login({
            username:this.state.name,
            password:this.state.pwd,
        }).then((res) => {
            console.log(res)
            if(res.msg === 'success') {
                this.props.appLogin(true)
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    _test() {
        let {app} = this.props
        console.log(app)
    }

    render() {
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
                        <Button onClick={() => {
                            this._test()
                        }}>测试</Button>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appLogin: bindActionCreators(appLogin, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
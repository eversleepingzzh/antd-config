import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/navi.css'
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {getTopics} from "../action/app";

class Navigation extends Component {
    _logOut() {
        console.log('logOut')
    }
    render() {
        const { app } = this.props
        return(
            <div className={"navibar"}>
                <div className="navibar-inner">
                    {
                        app.isLogin? (
                            <div className="container">
                                <ul className="nav pull-right clearfix">
                                    <li><Link to={"/home"}>首页</Link></li>
                                    <li><Link to={"/unread"}>未读消息</Link></li>
                                    <li><Link to={"/newcomer"}>新手入门</Link></li>
                                    <li><Link to={"/api"}>API</Link></li>
                                    <li><Link to={"/about"}>关于</Link></li>
                                    <li><Link to={"/setting"}>设置</Link></li>
                                    <li onClick={() => {
                                        this._logOut()
                                    }}>退出</li>
                                </ul>
                            </div>
                        ): (
                            <div className="container">
                                <ul className="nav pull-right clearfix">
                                    <li><Link to={"/home"}>首页</Link></li>
                                    <li><Link to={"/writing"}>发表帖子</Link></li>
                                    <li><Link to={"/api"}>API</Link></li>
                                    <li><Link to={"/about"}>关于</Link></li>
                                    <li><Link to={"/setting"}>设置</Link></li>
                                    <li><Link to={"/login"}>登录</Link></li>
                                    <li><Link to={"/register"}>注册</Link></li>
                                </ul>
                            </div>
                        )
                    }
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
        getTopics: bindActionCreators(getTopics, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
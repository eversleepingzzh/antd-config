import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/navi.css'

class Navigation extends Component {
    render() {
        return(
            <div className={"navibar"}>
                <div className="navibar-inner">
                    <div className="container">
                        <ul className="nav pull-right clearfix">
                            <li><Link to={"/"}>首页</Link></li>
                            <li><Link to={"/newcomer"}>新手入门</Link></li>
                            <li><Link to={"/api"}>API</Link></li>
                            <li><Link to={"/about"}>关于</Link></li>
                            <li><Link to={"/setting"}>设置</Link></li>
                            <li><Link to={"/login"}>登录</Link></li>
                            <li><Link to={"/register"}>注册</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
    )
    }
    }

export default Navigation
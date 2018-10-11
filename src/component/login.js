import React, { Component } from 'react';
import '../css/login.css'

class Login extends Component {
    render() {
        return (
            <div className={'main'}>
                <div className={"sidebar"}></div>
                <div className={"content"}>
                    <div className="inner">
                        <form method="POST" action={"/login"}>
                            <input type="text" name="username" placeholder="user_name" /><br />
                            <input type="password" name="password" placeholder={"password"}/>
                            <button type="submit">提交</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
//框架本身
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux'
import {bindActionCreators} from "redux";
//引入组件
import Navigation from './component/navigation'
import Home from './component/home'
import Register from './component/register'
import Login from './component/login'
import Writing from './component/writing'
import Topic from './component/topic'

//引入action
import { appInit } from './action/app'

class App extends Component {
    componentDidMount() {
        this.props.appInit()
    }


    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Navigation />
                        <Route path={"/home"} component={Home}/>
                        <Route path={"/writing"} component={Writing}/>
                        <Route path={"/register"} component={Register}/>
                        <Route path={"/login"} component={Login}/>
                        <Route path={"/about"} component={About}/>
                        <Route path={"/topic/:topicId"} component={Topic}/>
                    </div>
                </Router>
            </div>
        );
    }
}

function About() {
    return (
        <div>about</div>
    )
}

function mapStateToProps(state) {
    return {
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appInit: bindActionCreators(appInit, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

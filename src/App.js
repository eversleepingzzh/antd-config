import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './component/navigation'
import Home from './component/home'
import Register from './component/register'
import Login from './component/login'
import Writing from './component/writing'

class App extends Component {
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
export default App;

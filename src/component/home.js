import React, { Component } from 'react';
import '../css/home.css'

class Home extends Component {
    render() {
        return (
            <div className={'main'}>
                <div className={"sidebar"}></div>
                <div className={"content"}></div>
            </div>
        )
    }
}

export default Home
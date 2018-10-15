import React, { Component } from 'react';
import '../css/home.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { match } = this.props
        return (
            <div className={'main'}>
                <div className={"sidebar"}>

                </div>
                <div className={"content"}>
                    <div className={"flex_box"}>
                            <div className={"tab"}>
                                <Link to={`${match.url}/all`}>全部</Link>
                            </div>
                            <div className={"tab"}>
                                <Link to={`${match.url}/excellent`}>精华</Link>
                            </div>
                            <div className={"tab"}>
                                <Link to={`${match.url}/qa`}>问答</Link>
                            </div>

                        <Route path={`${match.path}/:topicId`} component={Topic} />
                        <Route
                            exact
                            path={match.path}
                            render={() => <h3>Please select a topic.</h3>}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

export default Home
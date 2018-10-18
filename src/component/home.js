import React, { Component } from 'react';
import '../css/home.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {bindActionCreators} from "redux";
import { getTopics } from "../action/app";
import connect from "react-redux/es/connect/connect";


class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getTopics()
    }

    render() {
        const { match, app} = this.props
        const { topics } = app
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
                    <div>
                        {
                            topics.length > 0 ? (
                                topics.map((topic,index) => {
                                    return(
                                        <div key={index}>
                                            <Link to={`/topic/${topic.id}`}>
                                                <span>{topic.title}</span>
                                            </Link>
                                            <span>{topic.content}</span>
                                        </div>
                                    )
                                })
                            ): null
                        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
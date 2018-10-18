import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import { getTopicDetail } from "../action/app";
import connect from "react-redux/es/connect/connect";
import { Input, Button } from 'antd'
import * as request from '../apiserver/request';


class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reply: ''
        }
    }

    componentDidMount() {
        let { getTopicDetail } = this.props
        let { topicId } = this.props.match.params
        getTopicDetail(topicId)
    }

    handleChange(e) {
        let state = {}
        state[e.target.name] = e.target.value
        this.setState(state)
    }

    submit() {
        let { topicId } = this.props.match.params
        let params = {
            content: this.state.reply,
            topic_id: Number(topicId)
        }
        request.reply_add(params).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <Input placeholder={'发表评论'} name={"reply"} value={this.state.reply} type={"text"} onChange={this.handleChange.bind(this)}/>
                <Button onClick={this.submit.bind(this)}>
                    提交
                </Button>
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
        getTopicDetail: bindActionCreators(getTopicDetail, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)

import React, { Component } from 'react';
import { Input, Button } from 'antd'
import TextArea from "antd/es/input/TextArea";
import * as request from '../apiserver/request';

class Writing extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            content: '',
        }
    }

    handleChange(e) {
        let state = {}
        state[e.target.name] = e.target.value
        this.setState(state)
    }

    submit() {
        let params = {
            title: this.state.title,
            content: this.state.content,
        }
        request.topic_add(params).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <div className={'main'}>
                <div className={"sidebar"}></div>
                <div className={"content"}>
                    <div className={'login_header'}>发布话题</div>
                    <Input
                        placeholder={'标题字数十字以上'}
                        name={"title"}
                        value={this.state.title}
                        onChange={this.handleChange.bind(this)}
                    />
                    <TextArea
                        placeholder="Autosize height with minimum and maximum number of lines"
                        autosize={{ minRows: 2, maxRows: 6 }}
                        name={"content"}
                        value={this.state.content}
                        onChange={this.handleChange.bind(this)}
                    />
                    <Button onClick={this.submit.bind(this)}>
                        提交
                    </Button>
                </div>
            </div>
        )
    }
}

export default Writing
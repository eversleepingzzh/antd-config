import React, { Component } from 'react';
import { Button, Icon, Breadcrumb} from 'antd';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button type="primary">Button</Button><br />
                <Icon type="step-backward" theme="outlined" />
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
}

export default App;

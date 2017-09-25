import React, { Component } from 'react';
import { Avatar, Layout, Card } from 'antd';
import tzone from 'moment-timezone';

import './App.css';
import Clock from './components/Clock';

class App extends Component {
  render() {
    return (
      <Layout style={{ height: '100vh', width: '100%', backgroundColor: '#108ee9' }}>
        <h1>Tokton</h1>
        <Layout.Content style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <div className="content-center">
            <Card title="Tokyo" style={{ width: 300, textAlign: 'center' }}>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="large" />
              <Clock zone="Asia/Tokyo" />
            </Card>
            <Card title="Houston" style={{ marginTop: 20, width: 300, textAlign: 'center' }}>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="large" />
              <Clock zone="America/Rainy_River" />
            </Card>
          </div>
        </Layout.Content>
      </Layout>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { connect } from 'dva';
import { Dispatch } from 'redux';
import { ConnectType } from '@/models/connect';

interface BasicLayoutProps {
    dispatch: Dispatch;
    global: ConnectType['global'];
}

class BasicLayout extends Component<BasicLayoutProps, {}> {
    render() {
        return (
            <div>
                <p>Basic Layout</p>
                {this.props.children}
            </div>
        );
    }
}

export default connect(({ global }: ConnectType) => ({ global }))(BasicLayout);

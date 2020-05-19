import React, { Component } from 'react';
import { connect } from 'dva';
import style from './style.less';

import { Dispatch } from 'redux';
import { ConnectType } from '@/models/connect';

interface HomeProps {
    dispatch: Dispatch;
    home: ConnectType['home'];
}

interface HomeState {
    isHome: boolean;
}

// ClassicComponent传入两个类型，一个为props，一个为当前class的state。
class Home extends Component<HomeProps, HomeState> {
    state = {
        isHome: true,
    };

    componentDidMount() {

    }

    render() {
        return (
            <div className={style.home_container}>
                <p>Home</p>
            </div>
        );
    }
}

export default connect(({ home }: ConnectType) => ({ home }))(Home);

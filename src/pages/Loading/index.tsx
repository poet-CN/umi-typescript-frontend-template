import React, { Component } from 'react';
import WanPlusLogo from '@/assets/logo/wanpluslogo.png';
import style from './style.less';

export default class Loading extends Component<{}, {}> {
    render() {
        return (
            <div className={style.loading_container}>
                <div className={style.loading}>
                    <img src={WanPlusLogo} alt="加载中"/>
                    <p>努力加载中……</p>
                </div>
            </div>
        );
    }
}

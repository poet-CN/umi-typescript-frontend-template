import React, { Component } from 'react';
import { ConfigProvider } from 'antd';
import 'normalize.css/normalize.css';
import BasicLayout from './BasicLayout/';
import EmptyLayout from './EmptyLayout/';

interface LayoutProps {
    location: {
        pathname: string;
    };
}

// 将所有路由统一导入到此页面，再通过路由来判断使用哪个layout。目的是为了解决umi全局引入css和js的问题。
class Layout extends Component<LayoutProps, null> {
    componentDidUpdate(prevProps: LayoutProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    getLayout = () => {
        const { pathname } = this.props.location;
        if (pathname.indexOf('/') > -1) {
            return <BasicLayout {...this.props}/>;
        }
        return <EmptyLayout {...this.props}/>;
    };

    // ConfigProvider可以配置国际化
    render() {
        return (
            <ConfigProvider>
                {this.getLayout()}
            </ConfigProvider>
        );
    }
}

export default Layout;

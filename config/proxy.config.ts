// 接口代理配置
interface ProxyConfig {
    [key: string]: {
        target: string;
        changeOrigin?: boolean;
        pathRewrite?: {
            [key: string]: string;
        }
    };
}

const proxyConfig: ProxyConfig = {

};

export default proxyConfig;

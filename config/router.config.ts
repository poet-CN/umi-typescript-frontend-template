// 路由配置
interface RouterConfig {
    path: string;
    component?: string;
    routes?: RouterConfig[];
    exact?: boolean;
    redirect?: string;
    title?: string;
}

const routerConfig: RouterConfig[] = [
    {
        path: '/',
        component: '../layouts/index',
        routes: [
            { path: '/', component: '../pages/Home', title: '首页', exact: true },
            { path: '*', component: '../pages/NotFound', title: '未找到的页面' },
        ],
    },
];

export default routerConfig;

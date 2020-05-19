import { defineConfig } from "umi";
import routerConfig from "./config/router.config";
import proxyConfig from "./config/proxy.config";

const cdnPath = "/"; // CDN根目录

export default defineConfig(
    {
        history: { type: "hash" },
        routes: routerConfig,
        proxy: proxyConfig,
        targets: {
            ie: 10
        },
        dynamicImport: {
            loading: "@/pages/Loading"
        },
        hash: true,
        // favicon: 'favicon.ico',
        publicPath: process.env.NODE_ENV === "development" ? "/" : cdnPath
    });

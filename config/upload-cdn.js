/*
* 用途：将dist下的非index.html的文件上传到七牛cdn。
* 依赖：七牛官方的命令行工具qshell，并且用户需要将shell加入环境变量。
* 使用：node upload-cdn，或直接加入到package.json的script下。
* 配置：修改uploader.config
* 原理：登录账号后生成一个七牛的配置文件，再用qshell去读取这个配置文件，并完成上传。
* */
const { exec } = require("shelljs");
const fs = require("fs");
const path = require("path");

class uploader {
    config = {
        "ak": "", // 项目的两个密钥
        "sk": "",
        "src_dir": `${path.resolve(process.cwd(), "./dist")}`,
        "bucket": "",
        "key_prefix": "",
        "up_host": "http://upload.qiniu.com",
        "ignore_dir": false,
        "overwrite": false,
        "rescan_local": true,
        "log_file": "qnupload.log",
        "file_type": 0,
        "skip_file_prefixes": "index.html"
    };

    upload = () => {
        const { ak, sk, bucket, key_prefix } = this.config;
        console.log("=====登录七牛=====");
        exec(`qshell account ${ak} ${sk} poet`);
        delete this.config.ak;
        delete this.config.sk;
        console.log("=====登录七牛完毕=====");
        console.log("=====生成七牛配置文件=====");
        fs.writeFile(`${process.cwd()}/qn.config.json`, JSON.stringify(this.config, null, 2), err => {
            if (err) {
                return console.log(err);
            }
            console.log("=====生成七牛配置文件完毕=====");
            /* 这段代码其实没什么必要，但排查错误的时候可能会用到
            console.log("=====查找七牛上此项目现有文件=====");
            exec(`qshell listbucket ${bucket} ${key_prefix} qnlist.txt`);
            console.log("=====查找七牛上此项目现有文件完毕=====");
            console.log("=====上传至七牛cdn=====");
            */
            exec(`qshell qupload qn.config.json`);
            console.log("=====上传至七牛cdn完毕=====");
        })
    };
}

new uploader().upload();

import { message } from 'antd';

// buildQueryUrl: 将url和一个对象转化并拼接 start
export const buildQueryUrl = (url: string, param?: { [key: string]: any }) => {
    if (typeof param !== 'object') {
        return url;
    }
    let x = url;
    let ba: boolean | string;
    if (x.indexOf('?') !== -1) {
        ba = x.indexOf('?') !== url.length - 1;
    } else {
        x += '?';
        ba = false;
    }
    let builder = '';
    for (const i in param) {
        if (!param.hasOwnProperty(i)) {
            return x;
        }
        const p = `&${i}=`;
        if (param[i]) {
            const v = param[i];
            if (Object.prototype.toString.call(v) === '[object Array]') {
                for (let j = 0; j < v.length; j++) {
                    builder = builder + p + encodeURIComponent(v[j]);
                }
            } else if (typeof (v) === 'object' && Object.prototype.toString.call(v).toLowerCase() === '[object object]' && !v.length) {
                builder = builder + p + encodeURIComponent(JSON.stringify(v));
            } else {
                builder = builder + p + encodeURIComponent(v);
            }
        }
    }
    if (!ba) {
        builder = builder.substring(1);
    }
    return x + builder;
};

// buildQueryUrl end

// 校验接口请求是否含有错误码 start
interface ResponseData {
    ret: number;
    code: number;
    msg: string;
    data?: {
        [key: string]: any
    };
}
export const checkErrorCode = (res: ResponseData) => {
    const { ret, code, msg } = res;
    if (ret && code) {
        message.error(msg, 2);
        return false;
    }
    return true;
};
// 校验接口请求是否含有错误码 end

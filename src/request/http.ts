import base from '@/request/base';
import axios from 'axios';

// 设置超时时间
const instance = axios.create({
    timeout: 1000 * 10,
});
// 设置公共路径 和 Content-Type
instance.defaults.baseURL = base.baseurl;

const Fetch = ({
    url = '',
    method = 'GET',
    data = {},
    params = {},
    loading = true,
    headers = {
        'Content-Type': 'application/json',
    },
}: any) => {
    if (loading) {
        // loading
    }

    return new Promise((resolve, reject) => {
        instance({
            url,
            data,
            params,
            headers,
            method,
        })
            .then((res) => {
                resolve(res.data.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export default Fetch;

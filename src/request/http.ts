import { message } from 'ant-design-vue';
import axios, { AxiosRequestConfig } from 'axios';
import { useLoadingStore, useUserStore } from '@/store';
import base from '@/request/base';

const loadingStore = useLoadingStore();
const userStore = useUserStore();

// 设置超时时间
const instance = axios.create({
    timeout: 1000 * 10,
});
// 设置公共路径 和 Content-Type
instance.defaults.baseURL = base.baseurl;

interface AxiosConfig extends AxiosRequestConfig {
    loading?: boolean;
}

const Fetch = ({
    url = '',
    method = 'GET',
    data = {},
    params = {},
    headers = {
        'Content-Type': 'application/json',
    },
    loading = true,
}: AxiosConfig) => {
    if (loading) {
        loadingStore.showLoading();
    }

    if (userStore.token) {
        Object.assign(headers, {
            token: userStore.token,
        });
    }

    return new Promise((resolve, reject) => {
        instance({
            url,
            method,
            data,
            params,
            headers,
        })
            .then((res) => {
                loadingStore.hideLoading();
                resolve(res.data.data);
            })
            .catch((err) => {
                loadingStore.hideLoading();
                message.error('请求失败');
                reject(err);
            });
    });
};

export default Fetch;

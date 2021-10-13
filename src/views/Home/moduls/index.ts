import Vrouter from '@/router';

const route = Vrouter.currentRoute.value;
const router = Vrouter;

const outLogin = () => {
    console.log('退出登录');
    console.log(route);
    router.push('/login');
};

const homeHook = {
    outLogin,
};

export default homeHook;

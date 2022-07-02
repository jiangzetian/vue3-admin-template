import { createVNode } from 'vue';
import { DashboardOutlined, MenuOutlined, KeyOutlined } from '@ant-design/icons-vue';
// import  * as $Icon from '@ant-design/icons-vue';
const $Icon = {
    DashboardOutlined,
    MenuOutlined,
    KeyOutlined,
};

const Icon = (props: { icon: string }) => {
    const { icon } = props;
    const antIcon: { [key: string]: any } = $Icon;
    return createVNode(antIcon[icon]);
};

export default Icon;

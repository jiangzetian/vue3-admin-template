import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPersist);

app.use(router);
app.use(Antd);
app.use(pinia);
app.mount('#app');

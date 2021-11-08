import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ModalAdd from './components/ModalAdd.vue';

const app = createApp(App);

app.component('modal-add', ModalAdd);
app.use(router);
app.mount('#app');

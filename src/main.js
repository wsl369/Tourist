import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/assets/css/common.css";
import "@/assets/css/index.css";
import "@/assets/font/iconfont.css";

createApp(App).use(router).use(ElementPlus).mount("#app");

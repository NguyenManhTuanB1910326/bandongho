import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/tailwind.css";
import "./assets/style/global.css";
import "./assets/style/css.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { registerGlobalComponents } from "./utils/import.js";

const app = createApp(App);
registerGlobalComponents(app);
app.use(router);
app.mount("#app");

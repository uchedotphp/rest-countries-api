import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import "./assets/css/styles.css";
import router from "./router";
import "nprogress/nprogress.css"; //nprogress progress bar css

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

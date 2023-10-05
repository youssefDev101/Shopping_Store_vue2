import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./assets/css/styles.css";
import VueSweetalert2 from "vue-sweetalert2";
import VeeValidate from "vee-validate";

const options = {
  confirmButtonColor: "#1a1a1a",
  cancelButtonColor: "#ff7674",
};

Vue.use(VueSweetalert2, options);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");

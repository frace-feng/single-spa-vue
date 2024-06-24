import "./set-public-path";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import singleSpaVue from "single-spa-vue";
import './index.css';

Vue.config.productionTip = false;

if (!window._coworking_) {
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app2");
}

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router,
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

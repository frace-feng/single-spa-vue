import "./set-public-path";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import singleSpaVue from "single-spa-vue";

Vue.config.productionTip = false;

if (!window._coworking_) {
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
}
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router,
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export function mount(props) {
  console.log(props); // 可以在 app1 中获取到authToken参数
  return vueLifecycles.mount(props);
}
export const unmount = vueLifecycles.unmount;

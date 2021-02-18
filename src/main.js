import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/css/reset.min.css";

// import global_ from "@/components/common/Global.vue";
// Vue.prototype.GLOBAL = global_;

Vue.config.productionTip = false;

Vue.mixin({
  data() {
    return {
      windowsVH: window.innerHeight / 100
    }
  },
  created() {
    window.addEventListener("resize", this.set_vh);
  },
  destroyed() {
    window.addEventListener("resize", this.set_vh);
  },
  mounted() {
    document.documentElement.style.setProperty('--vh', this.windowsVH + 'px');
  },
  methods: {
    set_vh: function () {
      this.windowsVH = window.innerHeight / 100;
      document.documentElement.style.setProperty('--vh', this.windowsVH + 'px');
    }
 }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
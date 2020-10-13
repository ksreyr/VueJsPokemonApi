import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "@/router";
import VueCarousel from "vue-carousel";

import { VueSpinners } from "@saeris/vue-spinners";

Vue.use(VueSpinners);
Vue.use(VueCarousel);
Vue.config.productionTip = false;

new Vue({
	router: router,
	render: (h) => h(App),
}).$mount("#app");

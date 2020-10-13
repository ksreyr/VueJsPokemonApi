import Vue from "vue";
import Router from "vue-router";
import Home from "@/view/PxHome";
import Error from "@/view/PxError";
import Pokemon from "@/view/PxPokemon";
import List from "@/view/PxList";
Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "*",
			name: "Error",
			component: Error,
		},
		{
			path: "/:pokemon/:id",
			name: "Pokemon",
			component: Pokemon,
		},
		{
			path: "/List",
			name: "List",
			component: List,
		},
	],
});

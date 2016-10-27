import Vue from "vue";
import Router from "vue-router";
import Apply from "./pages/Apply";
import Home from "./pages/Home";
import Brandnew from "./pages/Brandnew";
import Brand from "./pages/Brand";
import MyGirl from "./pages/MyGirl";
import Buy from "./pages/Buy";
import Mine from "./pages/Mine";
import App from "./App";
Vue.use(Router);
new Vue({
	el : "#app",
	router : new Router({
		mode :"history",//确保服务端开放了路径访问权限
		routes : [
		{
			path : "/mygirl",
			component : MyGirl
		},
		{
			path : "/buy",
			component : Buy
		},
		{
			path:"/apply",
			component : Apply
		},
		{
			path:"/",
			component : Home
		},
		{
			path:"/brandNew",
			component : Brandnew
		},
		{
			path :"/brand",
			component : Brand
		},
		{
			path : "/me",
			component : Mine
		}]
	}),
	render : h => h(App)
});

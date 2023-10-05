import Vue from "vue";
import Vuex from "vuex";
import UsersModule from "./modules/users";
import ProductsModule from "./modules/products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    users: UsersModule,
    products: ProductsModule,
  },
});

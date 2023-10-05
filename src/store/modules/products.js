import { ProductService } from "../../helpers/productService";
import http from "../../helpers/axios";

export default {
  state: {
    productsFav: JSON.parse(localStorage.getItem("product_fav") || "[]"),
    productsCart: JSON.parse(localStorage.getItem("product_cart") || "[]"),
  },
  getters: {
    GET_FAV_PRODUCTS: (state) => {
      return state.productsFav;
    },
    GET_SIZE_FAV_PRODUCTS: (state) => {
      return state.productsFav.length;
    },
    GET_CART_PRODUCTS: (state) => {
      return state.productsCart;
    },
    GET_SIZE_CART_PRODUCTS: (state) => {
      return state.productsCart.length;
    },
  },
  mutations: {
    ADD_FAV_PRODUCTS: (state, payload) => {
      state.productsFav = ProductService.saveProductFavToLocalStorage(payload);
    },
    REMOVE_FAV_PRODUCTS: (state, payload) => {
      state.productsFav = ProductService.deleteProductFromLocalStorage(
        payload.type,
        payload.id
      );
    },
    ADD_CART_PRODUCTS: (state, payload) => {
      state.productsCart = ProductService.addProductCartByQteToLocalStorage(
        payload.product,
        payload.quantity,
        payload.size
      );
    },
    REMOVE_CART_PRODUCTS: (state, payload) => {
      state.productsCart = ProductService.deleteProductFromLocalStorage(
        payload.type,
        payload.id
      );
    },
    REMOVE_ALL_CART_PRODUCTS: (state) => {
      state.productsCart = ProductService.deleteAllProductFromLocalStorage();
    },
  },
  actions: {
    async saveProductToCart(context, payload) {
      const response = await http.post(`/carts`, payload);
      const data = await response.data;
      context.commit("REMOVE_ALL_CART_PRODUCTS");
      return data;
    },
  },
};

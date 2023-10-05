import { AuthService } from "../../helpers/authService";
import http from "../../helpers/axios";

export default {
  state: {
    currentUser: JSON.parse(localStorage.getItem("current_user") || "{}"),
  },
  getters: {
    GET_CURRENNT_USER: (state) => {
      return state.currentUser;
    },
  },
  mutations: {
    ADD_CURRENT_USER: (state, payload) => {
      state.currentUser = AuthService.saveUserInLocalStorage(payload);
    },
    SET_CURRENT_USER: (state) => {
      state.currentUser = AuthService.getCurrentUserFromLocalStorage();
    },
    DELETE_CURRENT_USER: (state) => {
      state.currentUser = AuthService.logout();
    },
  },
  actions: {
    registerUser(context, payload) {
      return http.post(`/users`, payload).then(({ data }) => {
        context.commit("ADD_CURRENT_USER", data);
      });
    },
  },
};

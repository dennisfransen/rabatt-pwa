import Vue from "vue";
import Vuex from "vuex";
import Discounts from "./discounts";
import Categories from "./categories";
import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    loader: false,
    errorMessage: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log(state.user);
    },
    setErrorMessage(state, payload) {
      state.errorMessage = payload;
    },
    setLoader(state, payload) {
      state.loader = payload;
    },
  },
  actions: {
    login({ commit }, { email, password }) {
      commit("setErrorMessage", null);
      commit("setLoader", true);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          commit("setErrorMessage", null);
          commit("setLoader", false);
          commit("setUser", user);
        })
        .catch((error) => {
          commit("setErrorMessage", error);
          commit("setLoader", false);
        });
    },
    register({ commit }, { email, password, verifyPassword }) {
      commit("setErrorMessage", null);
      commit("setLoader", true);

      if (password !== verifyPassword) {
        commit("setErrorMessage", "Password does not match");
        commit("setLoader", false);
        return;
      }

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          commit("setErrorMessage", null);
          commit("setLoader", false);
          commit("setUser", user);
        })
        .catch((error) => {
          commit("setErrorMessage", error);
          commit("setLoader", false);
        });
    },
  },
  getters: {
    getErrorMessage: (state) => {
      return state.errorMessage;
    },
    getLoader: (state) => {
      return state.loader;
    },
  },
  modules: { Discounts, Categories },
});

import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import * as firebase from "firebase/app";
import "firebase/auth";
import Discounts from "./discounts";
import Categories from "./categories";

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
    },
    setErrorMessage(state, payload) {
      state.errorMessage = payload;
    },
    setLoader(state, payload) {
      state.loader = payload;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      commit("setErrorMessage", null);
      commit("setLoader", true);
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          commit("setErrorMessage", null);
          commit("setLoader", false);
          commit("setUser", user);
          router.push("/");
        })
        .catch((error) => {
          commit("setErrorMessage", error);
          commit("setLoader", false);
        });
    },

    async register(
      { commit },
      { displayName, email, password, verifyPassword }
    ) {
      commit("setErrorMessage", null);
      commit("setLoader", true);

      if (password !== verifyPassword) {
        commit("setErrorMessage", "Password does not match");
        commit("setLoader", false);
        return;
      }

      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (user) => {
          await firebase.auth().currentUser.updateProfile({
            displayName: displayName,
          });
          return user;
        })
        .then((user) => {
          commit("setErrorMessage", null);
          commit("setLoader", false);
          commit("setUser", user);
          // router.push("/");
        })
        .catch((error) => {
          commit("setErrorMessage", error);
          commit("setLoader", false);
        });
    },

    autoLogin({ commit }, payload) {
      commit("setLoader", true);
      commit("setUser", payload);
      router.replace("/");
      commit("setLoader", false);
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      commit("setUser", null);
      router.push("/login");
    },
  },
  getters: {
    getErrorMessage: (state) => {
      return state.errorMessage;
    },
    getLoader: (state) => {
      return state.loader;
    },
    getUser(state) {
      return state.user;
    },
  },
  modules: { Discounts, Categories },
});

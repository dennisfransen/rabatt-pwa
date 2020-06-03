import * as firebase from "firebase/app";
import "firebase/firestore";

export default {
  namespaced: true,
  state: {
    categories: [],
    loader: false,
    error: null,
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    addCategory(state, category) {
      state.categories.push(category);
    },
    setLoader(state, isLoading) {
      state.loader = isLoading;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      commit("setLoader", true);
      commit("setError", null);
      await firebase
        .firestore()
        .collection("categories")
        .get()
        .then((querySnapShop) => {
          let categories = [];
          querySnapShop.forEach((doc) => {
            categories.push({
              id: doc.data().id,
              title: doc.data().title,
              icon: doc.data().icon,
              color: doc.data().color,
            });
          });
          commit("setCategories", categories);
          commit("setLoader", false);
        })
        .catch((error) => {
          commit("setLoader", false);
          commit("setError", error);
        });
    },
    async createCategory({ commit }, { title, icon, color }) {
      commit("setLoader", true);
      commit("setError", null);

      let categoryObject = {
        id: Date.now(), // Using Date.now() to produce unique id.
        title: title,
        icon: icon,
        color: color,
      };
      
      await firebase
        .firestore()
        .collection("categories")
        .add(categoryObject)
        .then(() => {
          commit("addCategory", categoryObject);
          commit("setLoader", false);
        })
        .catch((error) => {
          commit("setLoader", false);
          commit("setError", error);
        });
    },
  },
  getters: {
    getCategories: (state) => {
      return state.categories;
    },
    getFeaturedCategories: (state, getters) => {
      return getters.getCategories.slice(0, 6);
    },
    getLoader: (state) => {
      return state.loader;
    },
    getError: (state) => {
      return state.error;
    },
  },
};

import * as firebase from "firebase/app";
import "firebase/firestore";

export default {
  namespaced: true,
  state: {
    categories: [],
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    addCategory(state, category) {
      state.categories.push(category);
    },
  },
  actions: {
    async fetchCategoriesFromFirebase({ commit }) {
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
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async createCategory({ commit }, { title, icon, color }) {
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
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    getCategories: (state) => {
      return state.categories;
    },
    getFeaturedCategories(state, getters) {
      return getters.getCategories.slice(0, 6);
    },
  },
};

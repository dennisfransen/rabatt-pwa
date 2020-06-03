import * as firebase from "firebase/app";
import "firebase/firestore";

export default {
  namespaced: true,
  state: {
    discounts: [],
    discount: {},
    categorizedDiscounts: [],
  },
  mutations: {
    setDiscounts(state, payload) {
      state.discounts = payload;
    },
    setDiscount(state, { id }) {
      let discount = state.categorizedDiscounts.filter((discount) => {
        return discount.id == id;
      });
      state.discount = discount[0];
    },
    addDiscount(state, payload) {
      state.discounts.push(payload);
    },
    setCategorizeDiscounts(state, payload) {
      state.categorizedDiscounts = payload;
    },
  },
  actions: {
    async fetchDiscounts({ commit }) {
      await firebase
        .firestore()
        .collection("discounts")
        .get()
        .then((querySnapShop) => {
          let discounts = [];
          querySnapShop.forEach((doc) => {
            discounts.push({
              id: doc.data().id,
              categoryId: doc.data().categoryId,
              title: doc.data().title,
              discount: doc.data().discount,
              imageURL: doc.data().discount,
              discountDesrciption: doc.data().discount,
              qrURL: doc.data().qrURL,
              slogan: doc.data().slogan,
            });
          });
          commit("setDiscounts", discounts);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async fetchDiscountsByCategory({ commit }, { categoryId }) {
      let catId = parseInt(categoryId);

      await firebase
        .firestore()
        .collection("discounts")
        .where("categoryId", "==", catId)
        .onSnapshot(function(querySnapshot) {
          var discounts = [];
          querySnapshot.forEach((doc) => {
            discounts.push({
              id: doc.data().id,
              categoryId: doc.data().categoryId,
              title: doc.data().title,
              discount: doc.data().discount,
              imageURL: doc.data().imageURL,
              discountDesrciption: doc.data().discount,
              qrURL: doc.data().qrURL,
              slogan: doc.data().slogan,
            });
          });
          commit("setCategorizeDiscounts", discounts);
        });
    },
    async createDiscount({ commit }, discount) {
      let discountObject = {
        id: Date.now(), // Using Date.now() to produce unique id.
        categoryId: discount.categoryId,
        title: discount.title,
        discount: discount.discount,
        imageURL: "https://i.imgur.com/HNehDC9.jpg",
        discountDesrciption: discount.discountDesrciption,
        qrURL: "https://i.imgur.com/qj1Ml5K.png",
        slogan: discount.slogan,
      };

      await firebase
        .firestore()
        .collection("discounts")
        .add(discountObject)
        .then(() => {
          commit("addDiscount", discountObject);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    getDiscount: (state) => {
      return state.discount;
    },
    getDiscountsByCategory: (state) => {
      return state.categorizedDiscounts;
    },
  },
};

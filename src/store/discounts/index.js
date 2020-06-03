import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

export default {
  namespaced: true,
  state: {
    discounts: [],
    discount: {},
    categorizedDiscounts: [],
    loader: false,
    error: null,
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
    setLoader(state, isLoading) {
      state.loader = isLoading;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchDiscounts({ commit }) {
      commit("setLoader", true);
      commit("setError", null);
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
              imageURL: doc.data().imageURL,
              discountDesrciption: doc.data().discountDesrciption,
              qrURL: doc.data().qrURL,
              slogan: doc.data().slogan,
            });
          });
          commit("setDiscounts", discounts);
          commit("setLoader", false);
        })
        .catch((error) => {
          commit("setLoader", false);
          commit("setError", error);
        });
    },
    async fetchDiscountsByCategory({ commit }, { categoryId }) {
      commit("setLoader", true);
      commit("setError", null);

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
              discountDesrciption: doc.data().discountDesrciption,
              qrURL: doc.data().qrURL,
              slogan: doc.data().slogan,
            });
          });
          commit("setCategorizeDiscounts", discounts);
          commit("setLoader", false);
        });
    },
    async createDiscount({ commit }, discount) {
      commit("setLoader", true);
      commit("setError", null);

      let discountObject = {
        id: Date.now(), // Using Date.now() to produce unique id.
        categoryId: discount.categoryId,
        title: discount.title,
        discount: discount.discount,
        discountDesrciption: discount.discountDesrciption,
        qrURL: "https://i.imgur.com/cTUiPh6.png",
        slogan: discount.slogan,
      };

      let documentId;

      await firebase
        .firestore()
        .collection("discounts")
        .add(discountObject)
        .then((docRef) => {
          commit("addDiscount", discountObject);
          documentId = docRef.id;
          return documentId;
        })
        .then(async (documentId) => {
          const fileName = discount.image.name;
          const extension = fileName.slice(fileName.lastIndexOf("."));

          let storageRef = firebase
            .storage()
            .ref(`discount-images/${documentId}${extension}`);
          await storageRef.put(discount.image);
          return await storageRef.getDownloadURL();
        })
        .then((imageURL) => {
          commit("setLoader", false);
          return firebase
            .firestore()
            .collection("discounts")
            .doc(documentId)
            .update({ imageURL: imageURL });
        })
        .catch((error) => {
          console.log(error);
          commit("setLoader", false);
          commit("setError", error);
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
    getLoader: (state) => {
      return state.loader;
    },
    getError: (state) => {
      return state.error;
    },
  },
};

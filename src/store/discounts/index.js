// import * as firebase from "firebase/app";

export default {
  namespaced: true,
  state: {
    discounts: [
      {
        id: 1,
        title: "Johnny's pizzeria",
        discount: "30%",
        imageURL: "https://i.imgur.com/ZUa3YUh.jpg",
        discountDesrciption:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi porro voluptas fugit asperiores culpa.",
        qrURL: "https://i.imgur.com/y6AfgCU.png",
      },
      {
        id: 2,
        title: "H&M",
        discount: "25%",
        imageURL: "https://i.imgur.com/2ul6pa7.jpg",
        discountDesrciption:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi porro voluptas fugit asperiores culpa.",
        qrURL: "https://i.imgur.com/y6AfgCU.png",
      },
      {
        id: 0,
        title: "ICA",
        discount: "50%",
        imageURL: "https://i.imgur.com/3Z1LIuo.jpg",
        discountDesrciption:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi porro voluptas fugit asperiores culpa.",
        qrURL: "https://i.imgur.com/y6AfgCU.png",
      },
      {
        id: 3,
        title: "Kjell & Company",
        discount: "5%",
        imageURL: "https://i.imgur.com/HNehDC9.jpg",
        discountDesrciption:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi porro voluptas fugit asperiores culpa.",
        qrURL: "https://i.imgur.com/y6AfgCU.png",
      },
      {
        id: 4,
        title: "MQ",
        discount: "30%",
        imageURL: "https://i.imgur.com/ZUa3YUh.jpg",
        discountDesrciption:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi porro voluptas fugit asperiores culpa.",
        qrURL: "https://i.imgur.com/y6AfgCU.png",
      },
    ],
    discount: null,
  },
  mutations: {
    setDiscount(state, payload) {
      state.discount = payload;
    },
  },
  actions: {
    getDiscountFromFirebase({ commit, state }, { id }) {
      let discount = state.discounts.filter(discount => {
        return discount.id == id
      })

      if (discount.length < 1) return
      commit("setDiscount", discount[0]);
    },
  },
  getters: {
    getDiscountData: (state) => {
      return state.discount;
    },
    getDiscountsData: (state) => {
      return state.discounts;
    },
  },
};

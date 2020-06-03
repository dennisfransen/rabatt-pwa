// import * as firebase from "firebase/app";

export default {
  namespaced: true,
  state: {
    discounts: [
      {
        id: 0,
        categoryId: 4,
        title: "ICA",
        discount: "50%",
        imageURL: "https://i.imgur.com/3Z1LIuo.jpg",
        discountDesrciption:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi porro voluptas fugit asperiores culpa.",
        qrURL: "https://i.imgur.com/y6AfgCU.png",
        slogan: "Wintersale",
      },
      {
        id: 1,
        categoryId: 2,
        title: "Johnny's pizzeria",
        discount: "30%",
        imageURL: "https://i.imgur.com/ZUa3YUh.jpg",
        discountDesrciption:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi porro voluptas fugit asperiores culpa.",
        qrURL: "https://i.imgur.com/y6AfgCU.png",
        slogan: "Wintersale",
      },
      {
        id: 2,
        categoryId: 1,
        title: "H&M",
        discount: "25%",
        imageURL: "https://i.imgur.com/2ul6pa7.jpg",
        discountDesrciption:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi porro voluptas fugit asperiores culpa.",
        qrURL: "https://i.imgur.com/y6AfgCU.png",
        slogan: "Wintersale",
      },
      {
        id: 3,
        categoryId: 2,
        title: "Rozana",
        discount: "5%",
        imageURL: "https://i.imgur.com/HNehDC9.jpg",
        discountDesrciption:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi porro voluptas fugit asperiores culpa.",
        qrURL: "https://i.imgur.com/y6AfgCU.png",
        slogan: "Wintersale",
      },
      {
        id: 4,
        categoryId: 1,
        title: "MQ",
        discount: "30%",
        imageURL: "https://i.imgur.com/ZUa3YUh.jpg",
        discountDesrciption:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi porro voluptas fugit asperiores culpa.",
        qrURL: "https://i.imgur.com/y6AfgCU.png",
        slogan: "Wintersale",
      },
      {
        id: 5,
        categoryId: 1,
        title: "Jeans Bolaget",
        discount: "30%",
        imageURL: "https://i.imgur.com/ZUa3YUh.jpg",
        discountDesrciption:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi porro voluptas fugit asperiores culpa.",
        qrURL: "https://i.imgur.com/y6AfgCU.png",
        slogan: "Wintersale",
      },
      {
        id: 6,
        categoryId: 1,
        title: "BikBok",
        discount: "30%",
        imageURL: "https://i.imgur.com/ZUa3YUh.jpg",
        discountDesrciption:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi porro voluptas fugit asperiores culpa.",
        qrURL: "https://i.imgur.com/y6AfgCU.png",
        slogan: "Wintersale",
      },
      {
        id: 7,
        categoryId: 1,
        title: "Gina Tricot",
        discount: "30%",
        imageURL: "https://i.imgur.com/ZUa3YUh.jpg",
        discountDesrciption:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi porro voluptas fugit asperiores culpa.",
        qrURL: "https://i.imgur.com/y6AfgCU.png",
        slogan: "Summersale",
      },
      {
        id: 8,
        categoryId: 1,
        title: "Junkyard",
        discount: "30%",
        imageURL: "https://i.imgur.com/ZUa3YUh.jpg",
        discountDesrciption:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi porro voluptas fugit asperiores culpa.",
        qrURL: "https://i.imgur.com/y6AfgCU.png",
        slogan: "Summersale",
      },
      {
        id: 9,
        categoryId: 1,
        title: "Jack & Jones",
        discount: "30%",
        imageURL: "https://i.imgur.com/ZUa3YUh.jpg",
        discountDesrciption:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi porro voluptas fugit asperiores culpa.",
        qrURL: "https://i.imgur.com/y6AfgCU.png",
        slogan: "Summersale",
      },
    ],
    discount: null,
    categorizedDiscounts: null,
  },
  mutations: {
    setDiscount(state, payload) {
      state.discount = payload;
    },
    categorizeDiscounts(state, payload) {
      state.categorizedDiscounts = payload;
    },
  },
  actions: {
    fetchDiscountFromFirebase({ commit, state }, { id }) {
      let discount = state.discounts.filter((discount) => {
        return discount.id == id;
      });

      if (discount.length < 1) return;
      commit("setDiscount", discount[0]);
    },
    sortDiscountsByCategory({ commit, state }, { categoryId }) {
      let discounts = state.discounts.filter((discount) => {
        return discount.categoryId == categoryId;
      });
      commit("categorizeDiscounts", discounts);
    },
  },
  getters: {
    getDiscountData: (state) => {
      return state.discount;
    },
    getDiscountsData: (state) => {
      return state.discounts;
    },
    getAllDiscountsByCategory: (state) => {
      return state.categorizedDiscounts;
    },
  },
};

import store from "../store/index.js";

export default (to, from, next) => {
  if (store.getters.getUser) {
    next();
  } else {
    next("/login");
  }
};

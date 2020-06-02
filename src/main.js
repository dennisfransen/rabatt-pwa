import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase/app";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyD70CCuXMW0MQuFCrABFaxTMU5UGKrqgvM",
  authDomain: "discount-pwa.firebaseapp.com",
  databaseURL: "https://discount-pwa.firebaseio.com",
  projectId: "discount-pwa",
  storageBucket: "discount-pwa.appspot.com",
  messagingSenderId: "3667331521",
  appId: "1:3667331521:web:53bc8aeb831c9ad5ca4740",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

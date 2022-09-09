import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import CryptoJS from "crypto-js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    password: "",
    secret: "husien",
  },
  getters: {},
  mutations: {
    // ChangeInputhandler(state, inputname, inputpassword) {
    //   (state.name = inputname), (state.password = inputpassword);
    // },
  },
  actions: {
    async Signin(state) {
      // this.commit("ChangeInputhandler", inputname, inputpassword);
      let cryptname = CryptoJS.AES.encrypt(
        CryptoJS.enc.Base64.parse(state.state.name),
        CryptoJS.enc.Base64.parse(state.state.secret)
      ).toString();
      let cryptpass = CryptoJS.AES.encrypt(
        CryptoJS.enc.Base64.parse(state.state.password),
        CryptoJS.enc.Base64.parse(state.state.secret)
      ).toString();
      try {
        await axios
          .post("http://localhost:5000/api/v1/Login", {
            name: cryptname,
            password: cryptpass,
          })
          .then((res) => {
            console.log(res);
          });
      } catch (error) {
        console.log(error);
      }
    },
    async verify(state) {
      let cryptname = CryptoJS.AES.encrypt(
        CryptoJS.enc.Base64.parse(state.state.name),
        CryptoJS.enc.Base64.parse(state.state.secret)
      ).toString();
      let cryptpass = CryptoJS.AES.encrypt(
        CryptoJS.enc.Base64.parse(state.state.password),
        CryptoJS.enc.Base64.parse(state.state.secret)
      ).toString();
      try {
        await axios
          .post("http://localhost:5000/api/v1/verify", {
            name: cryptname,
            password: cryptpass,
          })
          .then((res) => {
            console.log(res);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});

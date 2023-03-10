import Vue from "vue";
import axios from "axios";

// axios.defaults.baseURL = "FIREBASE_URL";
// axios.defaults.headers.common["Authorization"] = "auth123";
// axios.defaults.headers.get["Accepts"] = "application/json";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: "FIREBASE_URL",
      headers: {
        get: {
          Authorization: "auth123",
        },
      },
    });

    Vue.prototype.$http.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => Promise.reject(error)
    );

    Vue.prototype.$http.interceptors.response.use(
      (response) => {
        // const arr = [];

        // for (let key in response.data) {
        //   arr.push({ id: key, ...response.data[key] });
        // }

        // response.data = arr;

        return response;
      },
      (error) => Promise.reject(error)
    );
  },
});

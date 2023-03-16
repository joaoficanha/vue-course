import Vue from "vue";
import axios from "axios";
import { API_BASE_URL } from "../global";

const success = (response) => response;

const error = (err) => {
  if (err.response.status === 401) {
    window.location = "/";
  } else {
    return Promise.reject(err);
  }
};

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.response.use(success, error);

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axiosInstance;
  },
});

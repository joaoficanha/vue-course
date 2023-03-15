import Vue from "vue";
import axios from "axios";
import { API_BASE_URL } from "../global";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        //TODO remove after creating login
        common: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikpvw6NvIFBlZHJvIEZpY2FuaGEiLCJlbWFpbCI6ImpwZmZpY2FuaGFAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY3ODkxMDg2OSwiZXhwIjoxNjc5MTcwMDY5fQ.HcgGPupy0f0Inob-_B_td5QOackZjmMOv-rTyicB-Fo",
        },
      },
    });
  },
});

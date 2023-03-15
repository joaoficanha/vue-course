import Vue from "vue";
import axios from "axios";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: "http://localhost:3000",
      headers: {
        //TODO remove after creating login
        common: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikpvw6NvIFBlZHJvIEZpY2FuaGEiLCJlbWFpbCI6ImpwZmZpY2FuaGFAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY3ODg4Njk1MywiZXhwIjoxNjc5MTQ2MTUzfQ.Lg-sBEXSREF_y6laA_6PIRhEJ_wMU_BDL5aJzgVw2Y8",
        },
      },
    });
  },
});

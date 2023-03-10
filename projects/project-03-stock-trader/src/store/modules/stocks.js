import stocks from "../../constants/stocks";

export default {
  state: {
    stocks: [],
  },
  mutations: {
    setStocks(state, payload) {
      state.stocks = payload;
    },
    randomizeStocks(state) {
      state.stocks.forEach((stock) => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.42));
      });
    },
  },
  actions: {
    buyStock(context, payload) {
      context.commit("buyStock", payload);
    },
    initStocks(context) {
      context.commit("setStocks", stocks);
    },
    randomizeStocks(context) {
      context.commit("randomizeStocks");
    },
    setStocks(context, payload) {
      context.commit("setStocks", payload);
    },
  },
  getters: {
    stocks(state) {
      return state.stocks;
    },
  },
};

export default {
  state: {
    stocks: [],
    balance: 10000,
  },
  mutations: {
    buyStock(state, payload) {
      const record = state.stocks.find((stock) => stock.id === payload.id);

      if (record) {
        record.quantity += payload.quantity;
      } else {
        state.stocks.push({
          ...payload,
        });
        state.balance -= payload.price * payload.quantity;
      }
    },
    sellStock(state, payload) {
      const record = state.stocks.find((element) => element.id == payload.id);

      if (record.quantity > payload.quantity) {
        record.quantity -= payload.quantity;
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1);
      }

      state.balance += payload.price * payload.quantity;
    },
    setPortfolioStocks(state, payload) {
      state.balance = payload.balance;
      state.stocks = payload.stocks;
    },
  },
  actions: {
    sellStock(context, payload) {
      context.commit("sellStock", payload);
    },
  },
  getters: {
    stockPortfolio(state, getters) {
      return state.stocks.map((stock) => {
        const record = getters.stocks.find((element) => element.id == stock.id);
        return {
          id: stock.id,
          quantity: stock.quantity,
          name: record.name,
          price: record.price,
        };
      });
    },
    balance(state) {
      return state.balance;
    },
  },
};

import { createStore } from 'vuex';

export default createStore({
  state: {
    error: null,
    success: null,
    infp: null,
  },
  mutations: {
    error(state, error) {
      state.error = error;
    },
    success(state, success) {
      state.success = success;
    },
    info(state, info) {
      state.info = info;
    },
  },
});

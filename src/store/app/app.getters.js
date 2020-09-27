export default {
  getCartItems({ rootState }) {
    return rootState.app.recipes;
  }
};

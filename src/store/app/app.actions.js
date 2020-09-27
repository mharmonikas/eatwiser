export default {
  addRecipe() {},
  getCartItems({ rootState }) {
    return rootState.app.recipes;
  }
};

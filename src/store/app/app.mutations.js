export default {
  addRecipe: (state, value) => {
    state.recipes.push(value)
  },
  addRecipeItem: (state, value) => (state.recipeItem = value)
};

<template>
  <v-row justify="center" class="mt-11">
    <v-col v-for="(item, i) in items" :key="i" lg="10" md="10" sm="10" xs="12">
      <v-card outlined class="eatwiser-item">
        <v-img
          class=""
          style="width: 100%;"
          :src="require(`@/assets/${item.imgPath}`)"
          lazy-src
          @error="failedToloadImage = true"
        >
          <span
            v-for="(type, ind) in item.tags"
            :key="ind"
            class="eatwiser-type"
            >{{ type }}</span
          >
        </v-img>
        <v-card-text>
          <h3 class="body-1">{{ item.name }}</h3>
          <p class="title">Description</p>
          <ul>
            <li>Cals: {{ item.cals }}</li>
          </ul>
          <p class="title mt-5">Nutrition</p>
          <ul>
            <li>Carbohydrates: {{ item.nutrition.carbohydrates }}</li>
            <li>Fat: {{ item.nutrition.fat }}</li>
            <li>Protein: {{ item.nutrition.protein }}</li>
          </ul>
          <p class="body-1 mt-10"><b>Ingredients:</b></p>
          <div class="pt-2">
            <v-chip
              v-for="(ingredient, ind) in item.ingredients"
              :key="ind"
              outlined
              class="mr-2 body-1"
              >{{ ingredient.name }} : {{ ingredient.amount }}</v-chip
            >
          </div>
          <p class="body-1 mt-10"><b>Instructions:</b></p>
          <p>{{ item.instructions }}</p>
        </v-card-text>
        <v-card-actions right>
          <v-row align="center" justify="end">
            <v-col class="text-right">
              <span small text class="caption join-group-text"
                >See details</span
              >
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "DietDetails",
  computed: {
    items() {
      return this.$store.state.app.recipes;
    }
  }
};
</script>

<style scoped></style>

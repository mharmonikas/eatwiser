<template>
  <v-row justify="center" class="mt-11">
    <v-col v-if="item" lg="10" md="10" sm="10" xs="12">
      <v-card max-height="400" tile>
        <v-img
          :src="require('@/assets/img/diet.jpg')"
          tile
          aspect-ratio="1"
          class="white--text align-end"
          max-height="400"
          gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.2)"
        >
          <v-card-text>
            <span
              v-for="(tag, i) in item.tags"
              :key="i"
              class="body font-weight-bold pa-1 white--text"
            >
              {{ tag }}
            </span>
          </v-card-text>
        </v-img>
      </v-card>
      <v-row no-gutters style="box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15)">
        <v-col xs="12" md="8" class="pt-0">
          <div id="description" class="pb-6 pa-10 tabItem">
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
                >{{ ingredient.name }}</v-chip
              >
            </div>
          </div>
        </v-col>
        <v-btn @click="book" color="primary" style="width: 100%;"
          >Order $2</v-btn
        >
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline">
              Order this diet?
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="dialog = false">
                No
              </v-btn>

              <v-btn color="green darken-1" text @click="confirmBook">
                Yes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-snackbar v-model="snackbar">
          Diet ordered successfully.

          <template v-slot:action="{ attrs }">
            <v-btn
              color="primary"
              text
              v-bind="attrs"
              @click="snackbar = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>

        <!--        <v-col>-->
        <!--          <v-card>-->
        <!--            <v-card-text>-->
        <!--              <p style="display: flex; justify-content: space-between;">-->
        <!--                <span class="title">Price</span>-->
        <!--                <span class="title font-weight-bold">$12</span>-->
        <!--              </p>-->
        <!--            </v-card-text>-->
        <!--            <v-divider></v-divider>-->
        <!--            <v-card-text class="text-center">-->
        <!--              <v-btn color="red lighten-2" outlined dark>Join this diet</v-btn>-->
        <!--            </v-card-text>-->
        <!--          </v-card>-->
        <!--          &lt;!&ndash;          <div class="pt-5 text-center body-1">&ndash;&gt;-->
        <!--          &lt;!&ndash;            <ShareNetwork&ndash;&gt;-->
        <!--          &lt;!&ndash;              network="facebook"&ndash;&gt;-->
        <!--          &lt;!&ndash;              :url="eatwiser"&ndash;&gt;-->
        <!--          &lt;!&ndash;              :title="eatwiser"&ndash;&gt;-->
        <!--          &lt;!&ndash;              :description="eatwiser && eatwiser"&ndash;&gt;-->
        <!--          &lt;!&ndash;              quote="As human beings, we share a common thread."&ndash;&gt;-->
        <!--          &lt;!&ndash;              hashtags="facilitation,eatwiser,health"&ndash;&gt;-->
        <!--          &lt;!&ndash;            >&ndash;&gt;-->
        <!--          &lt;!&ndash;              <span>&ndash;&gt;-->
        <!--          &lt;!&ndash;                <v-icon left color="primary">mdi-share-variant</v-icon>&ndash;&gt;-->
        <!--          &lt;!&ndash;                Share eatwiser&ndash;&gt;-->
        <!--          &lt;!&ndash;              </span>&ndash;&gt;-->
        <!--          &lt;!&ndash;            </ShareNetwork>&ndash;&gt;-->
        <!--          &lt;!&ndash;          </div>&ndash;&gt;-->
        <!--        </v-col>-->
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "DietDetails",
  data: () => ({
    item: {},
    price: 0,
    dialog: false,
    snackbar: false
  }),
  mounted() {
    this.$axios
      .get(
        `http://eatwiser.duckdns.org:3000/api/recipe/${this.$route.params.id}`
      )
      .then(res => {
        const vm = this;
        vm.item = res.data[0];
        console.log(vm.item[0]);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    book() {
      this.dialog = true;
    },
    confirmBook() {
      this.dialog = false;
      this.snackbar = true;
      this.$store.commit("app/addRecipe", this.item, { root: true });
      // this.$store.dispatch('app/addRecipe', this.item)
    }
  }
};
</script>

<style scoped></style>

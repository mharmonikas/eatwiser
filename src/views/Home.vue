<template>
  <v-container>
    <v-row>
      <v-col cols="12 mt-5">
        <v-text-field
          v-model="searchTerm"
          outlined
          label="Search for a meal"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <p>Diets</p>
        <v-checkbox
          v-model="tags"
          value="keto"
          class="float-left"
          label="Keto"
        ></v-checkbox>
        <v-checkbox
          v-model="tags"
          value="paleo"
          class="float-left ml-2"
          label="Paleo"
        ></v-checkbox>
        <v-checkbox
          v-model="tags"
          value="vegan"
          class="float-left ml-2"
          label="Vegan"
        ></v-checkbox>
      </v-col>
      <v-col cols="12">
        <p>Type of Meals</p>
        <v-checkbox
          v-model="tags"
          value="breakfast"
          class="float-left"
          label="Breakfast"
        ></v-checkbox>
        <v-checkbox
          v-model="tags"
          value="lunch"
          class="float-left ml-2"
          label="Lunch"
        ></v-checkbox>
        <v-checkbox
          v-model="tags"
          value="dinner"
          class="float-left ml-2"
          label="Dinner"
        ></v-checkbox>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="12">
            <v-btn @click="search" style="width: 100%;" color="primary">
              Search
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-if="items && items.length > 0">
      <v-col v-for="(item, i) in items" :key="i" xs="12" sm="6" md="4">
        <v-card
          outlined
          class="eatwiser-item"
          :to="`/diet-details/${item._id}`"
        >
          <v-img
            class=""
            :src="require(`@/assets/${item.imgPath}`)"
            @error="failedToloadImage = true"
          >
            <span
              v-for="(itemType, index) in item.tags"
              :key="index"
              class="eatwiser-type"
              >{{ itemType }}</span
            >
          </v-img>
          <v-card-text>
            <h3 class="body-1">{{ item.name }}</h3>
          </v-card-text>
          <v-card-actions right>
            <v-row align="center" justify="end">
              <v-col class="text-right">
                <span class="caption join-group-text">See details</span>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    items: [],
    searchTerm: "",
    tags: []
  }),
  mounted() {
    this.getMounted();
  },
  methods: {
    getMounted() {
      this.$axios
        .get("http://eatwiser.duckdns.org:3000/api/recipe")
        .then(res => {
          const vm = this;
          vm.items = res.data;
          console.log(vm.items);
        })
        .catch(err => {
          console.log(err);
        });
    },
    search() {
      const tags = this.tags.length ? this.tags : '';
      console.log(tags);
      this.$axios
        .post("http://eatwiser.duckdns.org:3000/api/recipe/filter", {
          tags,
          searchTerm: this.searchTerm
        })
        .then(res => {
          const vm = this;
          vm.items = res.data;
          console.log(vm.items);
        })
        .catch(err => {
          console.log(err);
        });
      // if (this.tags || this.searchTerm) {
      //   const newItems = [];
      //   this.items.forEach((item, index) => {
      //     let include = false;
      //     if (item.name.includes(this.searchTerm)) {
      //       include = true;
      //     }
      //     item.tags.forEach((tag, ind) => {
      //       if (this.tags[ind] && this.tags[ind] === tag) {
      //         include = true;
      //       }
      //     });
      //
      //     if (include) {
      //       newItems.push(this.items[index]);
      //     }
      //   });
      //   this.items = newItems;
      // } else {
      //   this.getMounted();
      // }
    }
  }
};
</script>
<style lang="scss">
.eatwiser-item {
  .eatwiser-type {
    color: #fff;
    background: #5be1c8;
    padding: 1px 4px 1px 4px;
    display: inline-block;
    position: absolute;
    right: 8px;
    font-size: 12px;
    top: 8px;
    border-radius: 2px;
  }
  .join-group-text {
    color: #5be1c8;
  }
}
</style>

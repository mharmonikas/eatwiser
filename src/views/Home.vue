<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" >
        <v-img
          :src="require('@/assets/img/eatwiser.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4" cols="12">
        <h1 class="display-2 font-weight-bold mb-3">
          Smarter way of buying food
        </h1>

        <p class="subheading font-weight-regular">
          No more running around to find ingredients of amazing recipes or
          counting your calories after each meal.
        </p>
      </v-col>

      <v-col
        col-md="8"
        offset-md="2"
        col-sm="12"
        offset-sm="0"
        col-lg="8"
        offset-lg="0"
      >
        <v-text-field outlined label="Search for a meal"></v-text-field>
      </v-col>

      <v-col cols="12">
        <p>Diets</p>
        <v-row>
          <v-col col-md="4" offset-md="4" col-sm="12" col-lg="4" offset-lg="4">
            <v-checkbox class="float-left" label="Keto"></v-checkbox>
            <v-checkbox class="float-left ml-5" label="Paleo"></v-checkbox>
            <v-checkbox class="float-left ml-5" label="Vegan"></v-checkbox>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <p>Type of Meals</p>
        <v-row class="text-center">
          <v-col col-md="4" offset-md="4" col-sm="12" col-lg="4" offset-lg="4">
            <v-checkbox class="float-left" label="Breakfast"></v-checkbox>
            <v-checkbox class="float-left ml-5" label="Lunch"></v-checkbox>
            <v-checkbox class="float-left ml-5" label="Dinner"></v-checkbox>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col
            col-md="10"
            offset-md="1"
            col-sm="12"
            col-lg="10"
            offset-lg="1"
          >
            <v-btn style="width: 100%;" color="primary">
              Search
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col col-md="4" col="sm=12">
        <v-card outlined class="circle-item" to="/diet-details">
          <v-img
            class=""
            style="width: 100%;"
            :src="require('@/assets/img/diet.jpg')"
            lazy-src
            @error="failedToloadImage = true"
          >
            <span class="circle-type">type</span>
          </v-img>
          <v-card-text>
            <h3 class="body-1">title</h3>
          </v-card-text>
          <v-card-actions right>
            <v-row align="center" justify="end">
              <v-col class="text-right">
                <span small text class="caption join-group-text">See details</span>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col col-md="4" col="sm=12">
        <v-card outlined class="circle-item">
          <v-img
            class=""
            style="width: 100%;"
            :src="require('@/assets/img/diet.jpg')"
            lazy-src
            @error="failedToloadImage = true"
          >
            <span class="circle-type">type</span>
          </v-img>
          <v-card-text>
            <h3 class="body-1">title</h3>
          </v-card-text>
          <v-card-actions right>
            <v-row align="center" justify="end">
              <v-col class="text-right">
                <span small text class="caption join-group-text">See details</span>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col col-md="4" col="sm=12">
        <v-card outlined class="circle-item">
          <v-img
            class=""
            style="width: 100%;"
            :src="require('@/assets/img/diet.jpg')"
            lazy-src
            @error="failedToloadImage = true"
          >
            <span class="circle-type">type</span>
          </v-img>
          <v-card-text>
            <h3 class="body-1">title</h3>
          </v-card-text>
          <v-card-actions right>
            <v-row align="center" justify="end">
              <v-col class="text-right">
                <span small text class="caption join-group-text">See details</span>
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
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
};
</script>
<style lang="scss">
.circle-item {
  .circle-type {
    color: #fff;
    background: #f27561;
    padding: 1px 4px 1px 4px;
    display: inline-block;
    position: absolute;
    right: 8px;
    font-size: 12px;
    top: 8px;
    border-radius: 2px;
  }
  .join-group-text {
    color: #f27561;
  }
}
</style>

<template>
  <v-app id="app">
    <v-app-bar app color="primary" dark class="mb-5">
      <router-link to="/" class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/img/eat-wiser-white.png')"
          transition="scale-transition"
          width="120"
        />

        <!--        <h2>Eatwiser</h2>-->
      </router-link>

      <v-spacer></v-spacer>

      <v-btn to="/cart" text>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="mt-11">
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  components: {},
  data: () => ({
    hideNav: false
  }),
  computed: {}
};
</script>

<style lang="scss">
body {
  margin: 0;

  a {
    font-weight: 500;
    text-decoration: none;
  }

  #app {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    color: #2c3e50;

    .new-content-available-toastr {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }

    .apple-add-to-home-screen-modal {
      position: absolute;
      bottom: 0;
      right: 0;
      top: 0;
      left: 0;
      height: fit-content;
      width: fit-content;
      margin: auto;
      z-index: 1000;
    }

    .main-wrapper {
      .page-wrapper {
        width: 60%;
        margin: auto;

        @media screen and (max-width: 1000px) {
          width: 100%;
        }
      }
    }
  }
}
</style>

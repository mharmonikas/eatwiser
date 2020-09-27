<template>
  <v-row justify="center" class="mt-11">
    <v-col lg="10" md="10" sm="10" xs="12">
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
            <p class="body font-weight-bold pa-1 white--text">
              Type
            </p>
            <p class="display-1 font-weight-bold pa-1 white--text">
              Title
            </p>
            <p class="subtitle-1 font-weight-bold pa-1 white--text">
              <v-icon color="#fff" class="mr-2">mdi-calendar</v-icon>info
            </p>
          </v-card-text>
        </v-img>
      </v-card>
      <v-row no-gutters style="box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15)">
        <v-col xs="12" md="8" class="pt-0">
          <div id="description" class="pb-6 pa-10 tabItem">
            <p class="title">Description</p>
            <p class="pr-10 body-1">
              desc
            </p>
            <p class="body-1"><b>Ingridions:</b> dd</p>
            <div class="pt-2">
              <v-chip outlined class="mr-2 body-1">dsa</v-chip>
            </div>
          </div>
        </v-col>
        <v-btn color="primary" style="width: 100%;">Order $2</v-btn>

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
  name: "DietDetails"
};
</script>

<style scoped></style>

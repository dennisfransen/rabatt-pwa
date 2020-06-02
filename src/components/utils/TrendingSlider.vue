<template>
  <v-slide-group v-model="selected" class="py-2" mandatory center-active>
    <v-slide-item v-for="trend in trends" :key="trend.title" class="green">
      <v-card
        class="mr-2 my-2"
        height="125"
        width="200"
        @click="goToTrend(trend.title)"
      >
        <v-img class="image" :src="trend.image">
          <div class="image-overlay">
            <v-container fill-height>
              <h1 class="white--text mx-auto">{{ trend.title }}</h1>
            </v-container>
          </div>
        </v-img>
      </v-card>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
  name: "TrendingSlider",
  data: () => ({
    selected: 0,
    trends: [
      { image: "https://i.imgur.com/2ul6pa7.jpg", title: "Pizza" },
      { image: "https://i.imgur.com/BTrujQY.jpg", title: "Clothing" },
      { image: "https://i.imgur.com/ZUa3YUh.jpg", title: "Restaurant" },
      { image: "https://i.imgur.com/3Z1LIuo.jpg", title: "Hamburger" },
    ],
  }),
  methods: {
    goToTrend(trend) {
      alert(trend);
    },
  },
};
</script>

<style>
.image {
  height: 125px;
  width: 200px;
}

.image-overlay {
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  z-index: 10;
}
</style>

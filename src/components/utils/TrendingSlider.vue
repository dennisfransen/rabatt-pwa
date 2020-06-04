<template>
  <v-slide-group v-model="selected" class="py-2" mandatory center-active>
    <v-slide-item
      v-for="discount in getDiscounts"
      :key="discount.id"
      class="green"
    >
      <v-card
        class="mr-2 my-2"
        height="125"
        width="200"
        @click="goToDiscount(discount.id)"
      >
        <v-img class="image" :src="discount.imageURL">
          <div class="image-overlay">
            <v-row>
              <h1
                class="white--text mx-auto text-center"
                style="line-height: 125px;"
              >
                {{ discount.title }}
              </h1>
              <h1 class="discount-location">{{ discount.discount }}</h1>
            </v-row>
          </div>
        </v-img>
      </v-card>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TrendingSlider",
  data: () => ({
    selected: 0,
  }),
  computed: {
    ...mapGetters("Discounts", ["getDiscounts"]),
  },
  methods: {
    goToDiscount(id) {
      this.$router.push(`/discounts/${id}`);
    },
  },
};
</script>

<style scoped>
.image {
  height: 125px;
  width: 200px;
}

.image-overlay {
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
  z-index: 10;
}

.discount-location {
  position: absolute;
  left: 5px;
  bottom: 5px;
  color: white;
  
}
</style>

<template>
  <div id="discounts">
    <v-sheet v-for="discount in getDiscountsByCategory" :key="discount.id" @click="goToDiscount(discount.id)">
      <v-img class="image" height="100" :src="discount.imageURL">
        <div class="image-overlay">
          <v-container fill-height>
            <v-row align="center">
              <v-col cols="8">
                <h2 class="white--text font-weight-bold">
                  {{ discount.title }}
                </h2>
                <p class="white--text body-1 font-weight-medium">
                  {{ discount.slogan }}
                </p>
              </v-col>
              <v-col cols="4">
                <h1 class="display-2 font-weight-black white--text text-end">
                  {{ discount.discount }}
                </h1>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-img>
    </v-sheet>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Discounts",
  mounted() {
    this.fetchDiscountsByCategory({categoryId: this.$route.params.id})
  },
  computed: {
    ...mapGetters("Discounts", ["getDiscountsByCategory"]),
  },
  methods: {
    ...mapActions("Discounts", ["fetchDiscountsByCategory"]),
    goToDiscount(id) {
      this.$router.push(`/discounts/${id}`);
    },
  },
};
</script>

<style scoped>
.image {
  height: 125px;
  width: 100%;
}

.image-overlay {
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  z-index: 10;
}
</style>

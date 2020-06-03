<template>
  <div id="discounts">
    <v-sheet
      v-for="discount in discounts"
      :key="discount.id"
      @click="goToDiscount(discount.id)"
    >
      <v-img class="image" height="100" :src="discount.imageURL">
        <div class="image-overlay">
          <v-container fill-height>
            <v-row align="center">
              <v-col cols="8">
                <h2 class="white--text font-weight-medium">
                  {{ discount.title }}
                </h2>
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
import { mapGetters } from "vuex";
export default {
  name: "Discounts",
  created() {
    this.populateDiscounts();
  },
  data: () => ({
    discounts: [
      {
        id: null,
        title: null,
        discount: null,
        imageURL: null,
      },
    ],
  }),
  computed: {
    ...mapGetters("Discounts", ["getDiscountsData"]),
  },
  methods: {
    populateDiscounts() {
      this.discounts = this.getDiscountsData;
    },
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

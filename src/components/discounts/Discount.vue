<template>
  <v-img class="image" :src="discount.imageURL">
    <div class="image-overlay">
      <v-container>
        <div class="py-4"></div>
        <v-img :src="discount.qrURL"></v-img>
        <div class="py-4"></div>
        <h1 class="display-2 font-weight-black white--text text-center">
          {{ discount.discount }}
        </h1>
        <div class="py-2"></div>
        <h1 class="text-center white--text display-1 font-weight-medium">
          {{ discount.title }}
        </h1>
        <div class="py-2"></div>
        <p class="body-1 white--text text-center">
          {{ discount.discountDesrciption }}
        </p>
      </v-container>
    </div>
  </v-img>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Discount",
  created() {
    this.populateDiscount();
  },
  data: () => ({
    discount: {
      id: null,
      categoryId: null,
      title: null,
      discount: null,
      imageURL: null,
      discountDesrciption: null,
      qrURL: null,
    },
  }),
  computed: {
    ...mapGetters("Discounts", ["getDiscountData"]),
  },
  methods: {
    ...mapActions("Discounts", ["fetchDiscountFromFirebase"]),
    populateDiscount() {
      this.fetchDiscountFromFirebase({ id: this.$route.params.id });
      this.discount = this.getDiscountData;
    },
  },
};
</script>

<style>
.image {
  height: 100%;
  width: 100%;
}

.image-overlay {
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  z-index: 10;
}
</style>

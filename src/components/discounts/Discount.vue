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
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Discount",
  created() {
    this.setDiscount({ id: this.$route.params.id });
    this.discount = this.getDiscount;
  },
  data: () => ({
    discount: {
      id: "",
      categoryId: "",
      title: "",
      discount: "",
      imageURL: "",
      discountDesrciption: "",
      qrURL: "",
    },
  }),
  methods: {
    ...mapMutations("Discounts", ["setDiscount"]),
  },
  computed: {
    ...mapGetters("Discounts", ["getDiscount"]),
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

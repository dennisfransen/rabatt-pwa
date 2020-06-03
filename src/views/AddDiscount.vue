<template>
  <v-container>
    <v-text-field
      type="text"
      label="Company"
      solo
      v-model="title"
    ></v-text-field>
    <v-text-field
      type="text"
      label="Slogan"
      solo
      v-model="slogan"
    ></v-text-field>
    <v-text-field
      type="text"
      label="Discount"
      solo
      v-model="discount"
    ></v-text-field>
    <v-text-field
      type="text"
      label="Discount Description"
      solo
      v-model="discountDesrciption"
    ></v-text-field>
    <v-autocomplete
      v-model="value"
      :items="categories"
      solo
      label="Category"
    ></v-autocomplete>
    <v-btn height="48" block color="accent" @click="onPressSubmit">
      Submit
    </v-btn>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AddDiscount",
  created() {
    //TODO: Check if getCategories is not empty, otherwise get categories from firebase
    this.getCategories.forEach((category) => {
      this.categories.push(category.title);
    });
  },
  data: () => ({
    title: "",
    slogan: "",
    discount: "",
    discountDesrciption: "",
    categories: [],
    value: null,
  }),
  computed: {
    ...mapGetters("Categories", ["getCategories"]),
  },
  methods: {
    ...mapActions("Discounts", ["createDiscount"]),
    onPressSubmit() {
      let cat = this.getCategories.filter(category => {
        return category.title === this.value
      })

      this.createDiscount({
        title: this.title,
        categoryId: cat[0].id,
        discount: this.discount,
        discountDesrciption: this.discountDesrciption,
        slogan: this.slogan,
      });
    },
  },
};
</script>

<style></style>

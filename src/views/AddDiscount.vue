<template>
  <v-container>
    <v-text-field type="text" label="Company *" solo v-model="title"></v-text-field>
    <v-text-field type="text" label="Slogan *" solo v-model="slogan"></v-text-field>
    <v-text-field type="text" label="Discount *" solo v-model="discount"></v-text-field>
    <v-text-field type="text" label="Discount Description *" solo v-model="discountDesrciption"></v-text-field>
    <v-file-input prepend-icon="" prepend-inner-icon="mdi-image" solo label="Banner image *" v-model="image"></v-file-input>
    <v-autocomplete v-model="value" :items="categories" solo label="Category *"></v-autocomplete>
    <v-btn height="48" block color="accent" :disabled="isValidForm" :loading="getLoader" @click="onPressSubmit">
      Submit
    </v-btn>
    <h1 v-if="getError">{{ getError }}</h1>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AddDiscount",
  async created() {
    if (this.getCategories.length < 1) {
      await this.fetchCategories();
    }
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
    image: null,
    value: null,
  }),
  computed: {
    ...mapGetters("Categories", ["getCategories", "getLoader", "getError"]),
    isValidForm() {
      return this.title === "" || this.title === undefined || this.title === null
      || this.slogan === "" || this.slogan === undefined || this.slogan === null
      || this.discount === "" || this.discount === undefined || this.discount === null
      || this.discountDesrciption === "" || this.discountDesrciption === undefined || this.discountDesrciption === null
      || this.value === "" || this.value === undefined || this.value === null
      || this.image === null;
    }
  },
  methods: {
    ...mapActions("Categories", ["fetchCategories"]),
    ...mapActions("Discounts", ["createDiscount"]),
    onPressSubmit() {
      let cat = this.getCategories.filter(category => {
        return category.title === this.value
      })

      this.createDiscount({
        title: this.title,
        categoryId: cat[0].id,
        discount: this.discount,
        image: this.image,
        discountDesrciption: this.discountDesrciption,
        slogan: this.slogan,
      });

      this.$router.replace("/")
    },
  },
};
</script>

<style></style>

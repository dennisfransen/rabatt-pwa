<template>
<v-container>
  <v-text-field type="text" label="Company" solo v-model="company"></v-text-field>
  <v-text-field type="text" label="Slogan" solo v-model="slogan"></v-text-field>
  <v-text-field type="text" label="Discount" solo v-model="discount"></v-text-field>
  <v-autocomplete v-model="value" :items="categories" solo label="Category"></v-autocomplete>
  <v-btn height="48" block color="accent">Submit</v-btn>
</v-container>
</template>

<script>
export default {
    name: "AddDiscount",
    data: () => ({
      company: "",
      slogan: "",
      discount: "",
      categories: ['Restaurants', 'Clothes', 'Pub', 'Bugs', "Car parts"],
      value: null,
    })
};
</script>

<style></style>

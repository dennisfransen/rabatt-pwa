<template>
  <v-container>
    <h1>Add Category</h1>
    <div class="py-2"></div>
    <v-text-field type="text" label="Category" solo v-model="title"></v-text-field>
    <v-text-field type="text" label="Icon" solo v-model="icon"></v-text-field>
    <v-autocomplete v-model="color" :items="colors" solo label="Color"></v-autocomplete>
    <v-btn height="48" block color="accent" @click="onPressSubmit">Submit</v-btn>
</v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {  
  name: "AddCategory",
  data: () => ({
    title: "",
    icon: "",
    colors: ["red", "blue", "green", "yellow", "orange", "purple", "teal"],
    color: "",
  }),
  methods: {
    ...mapActions("Categories", ["createCategory"]),
    onPressSubmit() {
      this.createCategory({
        title: this.title,
        icon: this.icon,
        color: this.color,
      });
    }
  }
}
</script>

<style>

</style>
<template>
  <v-container>
    <h1>Add Category</h1>
    <div class="py-2"></div>
    <v-text-field type="text" label="Category *" solo v-model="title"></v-text-field>
    <v-text-field type="text" label="Icon *" solo v-model="icon"></v-text-field>
    <v-autocomplete v-model="color" :items="colors" solo label="Color *"></v-autocomplete>
    <v-btn height="48" block color="accent" :loading="getLoader" :disabled="isValidForm" @click="onPressSubmit">Submit</v-btn>
    <h1 v-if="getError">{{ getError }}</h1>
</v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {  
  name: "AddCategory",
  data: () => ({
    title: "",
    icon: "",
    colors: ["red", "blue", "green", "yellow", "orange", "purple", "teal"],
    color: "",
  }),
  computed: {
    ...mapGetters("Categories", ["getLoader", "getError"]),
    isValidForm() {
      return this.title === "" || this.title === undefined || this.title === null
      || this.icon === "" || this.icon === undefined || this.icon === null
      || this.color === "" || this.color === undefined || this.color === null
    }
  },
  methods: {
    ...mapActions("Categories", ["createCategory"]),
    onPressSubmit() {
      this.createCategory({
        title: this.title,
        icon: this.icon,
        color: this.color,
      });
      this.$router.replace("/")
    }
  }
}
</script>

<style>

</style>
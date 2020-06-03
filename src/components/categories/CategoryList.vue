<template>
  <v-list
    :max-height="this.$vuetify.breakpoint.height - 170"
    class="overflow-y-auto"
  >
    <v-list-item
      v-for="category in getCategories"
      :key="category.title"
      @click="selectCategory(category.id)"
      dark
      :style="`background-color: ${category.color};`"
    >
      <v-list-item-icon>
        <v-icon v-text="category.icon"></v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title v-text="category.title"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CategoryList",
  created() {
    this.fetchCategoriesFromFirebase();
  },
  computed: {
    ...mapGetters("Categories", ["getCategories"]),
  },
  methods: {
    ...mapActions("Categories", ["fetchCategoriesFromFirebase"]),
    selectCategory(id) {
      this.$router.push(`/category/${id}`);
    },
  },
};
</script>

<style></style>

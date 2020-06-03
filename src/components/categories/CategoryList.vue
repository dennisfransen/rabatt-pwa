<template>
  <v-list
    :max-height="this.$vuetify.breakpoint.height - 170"
    class="overflow-y-auto"
  >
    <v-skeleton-loader
      :loading="getLoader"
      transition-group="scale-transition"
      height="100%"
      type="setences"
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
    </v-skeleton-loader>
  </v-list>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CategoryList",
  created() {
    this.fetchCategories();
  },
  computed: {
    ...mapGetters("Categories", ["getCategories", "getLoader"]),
  },
  methods: {
    ...mapActions("Categories", ["fetchCategories"]),
    selectCategory(id) {
      this.$router.push(`/category/${id}`);
    },
  },
};
</script>

<style></style>

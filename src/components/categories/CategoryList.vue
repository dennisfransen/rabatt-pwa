<template>
  <v-list :max-height="this.$vuetify.breakpoint.height" class="overflow-y-auto">
    <v-skeleton-loader
      :loading="getLoader"
      transition-group="scale-transition"
      height="100%"
      type="setences"
    >
      <v-list-item
        dark
        v-for="category in getCategories"
        :key="category.title"
        :class="`${category.color}`"
        @click="selectCategory(category.id)"
        style="height: 75px"
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
import { mapGetters } from "vuex";

export default {
  name: "CategoryList",
  computed: {
    ...mapGetters("Categories", ["getCategories", "getLoader"]),
  },
  methods: {
    selectCategory(id) {
      this.$router.push(`/category/${id}`);
    },
  },
};
</script>

<style></style>

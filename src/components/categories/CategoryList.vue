<template>
  <v-list
    :max-height="this.$vuetify.breakpoint.height - 170"
    class="overflow-y-auto"
  >
    <template v-for="category in categories">
      <v-divider v-if="category.divider" :key="category.id"></v-divider>
      <v-list-item
        v-else
        :key="category.title"
        @click="selectCategory(category.id)"
      >
        <v-list-item-icon>
          <v-icon v-text="category.icon"></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="category.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  name: "CategoryList",
  data: () => ({
    categories: [
      { id: 1, icon: "mdi-tshirt-crew", color: "accent", title: "Clothing" },
      { divider: true },
      { id: 2, icon: "mdi-food-fork-drink", color: "secondary", title: "Restaurants" },
      { divider: true },
      { id: 3, icon: "mdi-glass-mug-variant", color: "warning", title: "Pubs" },
      { divider: true },
      { id: 4, icon: "mdi-ladybug", color: "warning", title: "Bugs" },
      { divider: true },
      { id: 5, icon: "mdi-car", color: "warning", title: "Car parts" },
      { divider: true },
    ],
  }),
  methods: {
    selectCategory(id) {
      this.$router.push(`/category/${id}`)
    },
  },
};
</script>

<style></style>

<template>
  <v-list
    :max-height="this.$vuetify.breakpoint.height - 170"
    class="overflow-y-auto"
  >
    <v-list-item
      v-for="category in categories"
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
export default {
  name: "CategoryList",
  data: () => ({
    categories: [
      { id: 1, icon: "mdi-tshirt-crew", color: "purple", title: "Clothing" },
      { id: 2, icon: "mdi-food-fork-drink", color: "red", title: "Restaurants", },
      { id: 3, icon: "mdi-glass-mug-variant", color: "orange", title: "Pubs" },
      { id: 4, icon: "mdi-store", color: "green", title: "Food stores" },
      { id: 5, icon: "mdi-car", color: "teal", title: "Car parts" },
    ],
  }),
  methods: {
    selectCategory(id) {
      this.$router.push(`/category/${id}`);
    },
  },
};
</script>

<style></style>

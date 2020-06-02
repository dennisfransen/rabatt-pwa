<template>
  <v-list :max-height="this.$vuetify.breakpoint.height - 170" class="overflow-y-auto">
    <template v-for="category in categories">
      <v-divider v-if="category.divider" :key="category.title"></v-divider>
      <v-list-item
        v-else
        :key="category.title"
        @click="selectCategory(category.title)"
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
      { icon: "mdi-hamburger", color: "error", title: "Hamburger" },
      { divider: true },
      { icon: "mdi-pizza", color: "warning", title: "Pizza" },
      { divider: true },
      { icon: "mdi-cup-water", color: "secondary", title: "Water" },
      { divider: true },
      { icon: "mdi-tshirt-crew", color: "accent", title: "Clothing" },
      { divider: true },
      { icon: "mdi-food-fork-drink", color: "secondary", title: "Restaurant" },
      { divider: true },
      { icon: "mdi-glass-mug-variant", color: "warning", title: "Pub" },
      { divider: true },
      { icon: "mdi-food-croissant", color: "warning", title: "B&B" },
      { divider: true },
      { icon: "mdi-food-drumstick", color: "error", title: "Chicken" },
      { divider: true },
      { icon: "mdi-food-steak", color: "error", title: "Stake" },
      { divider: true },
      { icon: "mdi-food-variant", color: "warning", title: "Soup" },
      { divider: true },
      { icon: "mdi-ladybug", color: "warning", title: "Bugs" },
      { divider: true },
      { icon: "mdi-noodles", color: "warning", title: "Noodles" },
      { divider: true },
      { icon: "mdi-apple", color: "success", title: "Fruit" },
      { divider: true },
      { icon: "mdi-food", color: "success", title: "Frenchise" },
      { divider: true },
      { icon: "mdi-peanut", color: "warning", title: "Nuts" },
      { divider: true },
    ],
  }),
  methods: {
    selectCategory(category) {
      alert(`Category selected: ${category}`);
    },
  },
};
</script>

<style></style>

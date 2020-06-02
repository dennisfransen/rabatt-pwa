<template>
  <div>
    <TitleWithButton link="/categories">
      <template v-slot:title>Categories</template>
      <template v-slot:btn-text>See all</template>
    </TitleWithButton>
    
    <v-row>
      <v-col cols="4" v-for="(category, i) in categories.slice(0, 6)" :key="i">
        <v-card id="category-sheet" :color="category.color" @click="goToCategory(category.icon)">
          <v-container fill-height>
            <v-icon class="mx-auto" color="white" x-large>
              {{ category.icon }}
            </v-icon>
          </v-container>
        </v-card>
        <p class="text-center body-2 mt-2 mb-0">
          {{ category.title }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TitleWithButton from "@/components/utils/TitleWithButton";

export default {
  name: "Categories",
  data: () => ({
    categories: [
      { icon: "mdi-hamburger", color: "error", title: "Hamburger" },
      { icon: "mdi-pizza", color: "warning", title: "Pizza" },
      { icon: "mdi-cup-water", color: "secondary", title: "Water" },
      { icon: "mdi-tshirt-crew", color: "accent", title: "Clothing" },
      { icon: "mdi-food-fork-drink", color: "secondary", title: "Restaurant" },
      { icon: "mdi-glass-mug-variant", color: "warning", title: "Pub" },
      { icon: "mdi-food-croissant", color: "warning", title: "B&B" },
      { icon: "mdi-food-drumstick", color: "error", title: "" },
      { icon: "mdi-food-steak", color: "error", title: "" },
      { icon: "mdi-food-variant", color: "warning", title: "" },
      { icon: "mdi-ladybug", color: "warning", title: "" },
      { icon: "mdi-noodles", color: "warning", title: "" },
      { icon: "mdi-apple", color: "success", title: "" },
      { icon: "mdi-food", color: "success", title: "" },
      { icon: "mdi-peanut", color: "warning", title: "" },
    ],
  }),
  methods: {
    goToCategory(icon) {
      alert(`Going to ${icon}`);
    },
  },
  components: {
    TitleWithButton,
  },
};
</script>

<style>
#category-sheet {
  height: 90px;
  max-width: 90px;
  border-radius: 25px;
  margin: auto;
}
</style>

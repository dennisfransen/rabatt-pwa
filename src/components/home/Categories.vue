<template>
  <div>
    <TitleWithButton link="/categories">
      <template v-slot:title>Categories</template>
      <template v-slot:btn-text>See all</template>
    </TitleWithButton>

    <v-row>
      <v-col cols="4" v-for="(category, i) in categories.slice(0, 6)" :key="i">
        <v-card
          id="category-sheet"
          :color="category.color"
          @click="goToCategory(category.id)"
        >
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
      { id: 1, icon: "mdi-tshirt-crew", color: "purple", title: "Clothing" },
      { id: 2, icon: "mdi-food-fork-drink", color: "error", title: "Restaurants", },
      { id: 3, icon: "mdi-glass-mug-variant", color: "warning", title: "Pubs" },
      { id: 4, icon: "mdi-store", color: "green", title: "Food stores" },
      { id: 5, icon: "mdi-car", color: "primary", title: "Car parts" },
      { id: 6, icon: "mdi-laptop-chromebook", color: "blue", title: "Computer parts" },
      { id: 7, icon: "mdi-cupcake", color: "yellow", title: "Baking" },
      { id: 8, icon: "mdi-noodles", color: "warning", title: "Asian" },
      { id: 9, icon: "mdi-apple", color: "success", title: "Fruits" },
      { id: 10, icon: "mdi-food", color: "success", title: "Random" },
      { id: 11, icon: "mdi-peanut", color: "warning", title: "Nuts" },
    ],
  }),
  methods: {
    goToCategory(id) {
      this.$router.push(`/category/${id}`);
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

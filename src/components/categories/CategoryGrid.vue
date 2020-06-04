<template>
  <div>
    <TitleWithButton link="/categories">
      <template v-slot:title>Categories</template>
      <template v-slot:btn-text>See all</template>
    </TitleWithButton>

    <v-skeleton-loader
      :loading="getLoader"
      transition-group="scale-transition"
      height="100%"
      type="date-picker-days"
    >
      <v-row>
        <v-col
          cols="4"
          v-for="category in getFeaturedCategories"
          :key="category.id"
        >
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
    </v-skeleton-loader>
  </div>
</template>

<script>
import TitleWithButton from "@/components/utils/TitleWithButton";
import { mapGetters } from "vuex";

export default {
  name: "Categories",
  computed: {
    ...mapGetters("Categories", ["getFeaturedCategories", "getLoader"]),
  },
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

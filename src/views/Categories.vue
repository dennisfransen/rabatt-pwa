<template>
  <v-container>
    <section id="search">
      <Search />
    </section>
    <section id="category-list">
      <CategoryList />
    </section>
  </v-container>
</template>

<script>
import Search from "@/components/home/Search";
import CategoryList from "@/components/categories/CategoryList";

export default {
  name: "Categories",
  components: {
    Search,
    CategoryList,
  },
};
</script>

<style></style>

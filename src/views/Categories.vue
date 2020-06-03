<template>
  <div id="categories">
    <v-container class="pb-0">
      <section id="search">
        <Search />
      </section>
    </v-container>
    <section id="category-list">
      <CategoryList />
    </section>
  </div>
</template>

<script>
import Search from "@/components/utils/Search";
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

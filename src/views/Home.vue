<template>
  <v-container>
    <!-- <section id="search">
      <Search />
    </section> -->
    <section id="trending">
      <Trending />
    </section>
    <section id="categories">
      <CategoryGrid />
    </section>
  </v-container>
</template>

<script>
// import Search from "@/components/utils/Search";
import Trending from "@/components/home/Trending";
import CategoryGrid from "@/components/categories/CategoryGrid";

export default {
  name: "Home",
  components: {
    // Search,
    Trending,
    CategoryGrid
  },
};
</script>

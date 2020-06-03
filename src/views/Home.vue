<template>
  <v-container>
    <section id="search">
      <Search />
    </section>
    <section id="trending">
      <Trending />
    </section>
    <section id="categories">
      <Categories />
    </section>
  </v-container>
</template>

<script>
import Search from "@/components/utils/Search";
import Trending from "@/components/home/Trending";
import Categories from "@/components/home/Categories";

export default {
  name: "Home",
  components: {
    Search,
    Trending,
    Categories
  },
};
</script>

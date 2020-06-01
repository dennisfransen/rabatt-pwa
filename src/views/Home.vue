<template>
  <v-container>
    <section id="search" style="background-color: blue;">
      <Search class="mt-4"/>
    </section>
    <section id="trending" style="background-color: red;">
      <Trending />
    </section>
    <section id="categories" style="background-color: green;">
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

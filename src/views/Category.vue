<template>
  <div id="category">
    <v-container class="mb-0 pb-0">
      <Search />
    </v-container>
    <DiscountList />
  </div>
</template>

<script>
import Search from "@/components/utils/Search";
import DiscountList from "@/components/discounts/DiscountList";

export default {
  name: "Category",
  components: {
    Search,
    DiscountList,
  },
};
</script>

<style></style>

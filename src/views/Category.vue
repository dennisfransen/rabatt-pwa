<template>
  <div id="category">
    <v-container class="mb-0 pb-0">
      <Search />
    </v-container>
    <Discounts :discounts="getAllDiscountsByCategory" />
  </div>
</template>

<script>
import Search from "@/components/utils/Search";
import Discounts from "@/components/discounts/Discounts";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Category",
  created() {
    this.populateDiscounts();
  },
  data: () => ({}),
  computed: {
    ...mapGetters("Discounts", ["getAllDiscountsByCategory"]),
  },
  methods: {
    ...mapActions("Discounts", ["sortDiscountsByCategory"]),
    populateDiscounts() {
      this.sortDiscountsByCategory({ categoryId: this.$route.params.id });
    },
  },
  components: {
    Search,
    Discounts,
  },
};
</script>

<style></style>

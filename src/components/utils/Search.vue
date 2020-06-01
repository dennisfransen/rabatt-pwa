<template>
  <div id="search">
    <v-text-field
      id="search-field"
      label="Search"
      rounded
      solo
      flat
      background-color="#eeeeee"
      prepend-inner-icon="mdi-magnify"
      v-model="searchText"
    >
    </v-text-field>
  </div>
</template>

<script>
export default {
  name: "Search",
  data: () => ({
    searchText: "",
    stores: ["ICA", "Coop", "IKEA"],
  }),
  computed: {
    filteredStores() {
      return this.stores.filter((store) => {
        if (store.toLowerCase().includes(this.searchText.toLowerCase())) return store
      });
    },
  },
};
</script>

<style scoped>
#search-field {
  font-size: 42px !important;
}
</style>

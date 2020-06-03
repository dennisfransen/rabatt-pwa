<template>
  <v-sheet
    height="100"
    tile
    color="accent"
    style="border: 2px dashed black;"
    @click="goToAddDiscount"
  >
    <v-container fill-height>
      <v-icon class="mx-auto" large>mdi-tag-plus</v-icon>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "DiscountAddCard",
  methods: {
    goToAddDiscount() {
      this.$router.push("/add");
    },
  },
};
</script>

<style></style>

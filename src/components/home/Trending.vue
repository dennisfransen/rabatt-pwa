<template>
  <div>
    <v-row>
      <v-col cols="6">
        <h1>Trending</h1>
      </v-col>
      <v-col cols="6">
        <div class="text-end">
          <v-btn small rounded text to="/">See all</v-btn>
        </div>
      </v-col>
    </v-row>
    <v-slide-group v-model="selected" class="py-2" mandatory center-active>
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="mr-2"
          height="100"
          width="200"
          @click="toggle"
        >
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {
  name: "Trending",
  data: () => ({
    selected: null,
  }),
};
</script>

<style>
.no-decoration {
  text-decoration: none;
  color: black;
}
</style>

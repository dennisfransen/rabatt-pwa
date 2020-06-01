<template>
  <v-row>
    <v-col>
      <h1>
        <slot name="title"></slot>
      </h1>
    </v-col>
    <v-spacer></v-spacer>
    <v-col>
      <div class="text-end">
        <v-btn dark small rounded text :to="link" class="lightBlue">
          <slot name="btn-text"></slot>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TitleWithButton",
  props: {
    link: String,
  },
};
</script>

<style></style>

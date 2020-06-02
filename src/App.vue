<template>
  <v-app>
    <Navigationbar v-if="!isLoggedIn" />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navigationbar from "@/components/templates/Navigationbar";

export default {
  name: "App",
  computed: {
    isLoggedIn() {
      return this.$route.name === "Login" || this.$route.name === "Register";
    },
  },
  components: {
    Navigationbar,
  },
};
</script>

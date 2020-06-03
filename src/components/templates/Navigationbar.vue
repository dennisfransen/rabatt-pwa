<template>
  <div class="navigationbar">
    <v-app-bar app flat height="64" color="white">
      <v-icon v-if="isHomeRoute" @click="goToNotifications">mdi-bell</v-icon>
      <v-icon v-else @click="goToHome">mdi-chevron-left</v-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <span class="font-weight-light">dis</span>
        <span class="font-weight-bold">Count</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" right>
      <v-list nav class="py-0">
        <template v-for="(item, i) in items">
          <v-list-item :key="i" link :to="item.link">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navigationbar",
  data: () => ({
    drawer: false,
    items: [
      { title: "Home", icon: "mdi-home", link: "/" },
      { title: "Profile", icon: "mdi-account", link: "/profile" },
      { title: "Discounts", icon: "mdi-tag", link: "/discounts"}
    ],
  }),
  computed: {
    isHomeRoute() {
      return this.$route.name === "Home";
    },
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToNotifications() {
      this.$router.push("/notifications");
    },
  },
};
</script>

<style>
.profile-avatar {
  cursor: pointer;
}
</style>

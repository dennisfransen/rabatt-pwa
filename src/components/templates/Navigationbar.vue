<template>
  <div class="navigationbar">
    <v-app-bar app flat height="64" color="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>Discount-App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar class="elevation-2 profile-avatar" @click="goToProfile">
        <v-img src="https://i.imgur.com/HAcDxtn.jpg"></v-img>
      </v-avatar>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list nav class="py-0">
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
  }),
  methods: {
    goToProfile() {
      alert("Going to profile");
    },
  },
};
</script>

<style>
.profile-avatar {
  cursor: pointer;
}
</style>

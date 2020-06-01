<template>
  <div class="bottom-navigationbar">
    <v-bottom-navigation :value="activeBtn" app height="64">
      <div style="line-height: 64px">
        <v-avatar class="ml-4">
          <v-img src="https://i.imgur.com/HAcDxtn.jpg"></v-img>
        </v-avatar>
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-bottom-navigation>

    <v-navigation-drawer v-model="drawer" app right>
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
  name: "BottomNavigationbar",
  data: () => ({
    drawer: false,
    activeBtn: 1,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
  }),
};
</script>

<style></style>

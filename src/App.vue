<template>
  <v-app>
    <Navigationbar />
    <v-content>
      <router-view />
    </v-content>
    <!-- <BottomNavigationbar /> -->
  </v-app>
</template>

<script>
import Navigationbar from '@/components/templates/Navigationbar'
// import BottomNavigationbar from '@/components/templates/BottomNavigationbar'

export default {
  name: "App",
  components: {
    Navigationbar,
    // BottomNavigationbar
  }
};
</script>

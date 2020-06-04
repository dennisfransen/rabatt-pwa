<template>
  <v-container>
    <v-card flat>
      <v-toolbar flat>
        <v-toolbar-title>
          My Profile
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <h3>Username: {{ displayName }}</h3>
        <div class="py-1"></div>
        <h3>
          Email:
          <a style="color: blue" :href="email"> {{ email }}</a>
        </h3>
      </v-card-text>
      <v-card-actions>
        <v-btn block color="error" @click="logout">Logout</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Profile",
  created() {
    this.displayName = this.getUser?.displayName;
    this.email = this.getUser?.email;
  },
  data: () => ({
    displayName: "",
    email: "",
  }),
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style></style>

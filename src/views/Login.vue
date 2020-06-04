<template>
  <v-container fill-height>
    <v-progress-circular
      class="mx-auto"
      v-if="getLoader"
      size="100"
      indeterminate
      color="primary"
    ></v-progress-circular>
    <v-card v-else class="mx-auto" flat color="transparent" min-width="350">
      <p class="text-center error--text" v-if="errorMessage">
        {{ errorMessage }}
      </p>
      <h1 class="text-center font-weight-light">Hola friend</h1>
      <div class="py-2"></div>
      <v-card-text>
        <v-text-field
          type="email"
          label="Email"
          v-model="email"
          clearable
          solo
        ></v-text-field>
        <v-text-field
          type="password"
          label="Password"
          v-model="password"
          solo
          clearable
          @keyup.enter="onLoginPressed"
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="px-3">
        <v-btn color="accent" block :loading="getLoader" @click="onLoginPressed"
          >Login
        </v-btn>
      </v-card-actions>
      <v-card-text class="text-center">
        <p>
          <span>Don't have any account? </span>
          <span>
            <router-link class="secondary--text" to="/register"
              >Register here
            </router-link>
          </span>
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
  }),
  computed: {
    ...mapGetters(["getErrorMessage", "getLoader"]),
    errorMessage() {
      return this.getErrorMessage;
    },
  },
  methods: {
    ...mapActions(["login"]),
    onLoginPressed() {
      if (this.email !== "" || this.email.length > 0) {
        this.login({ email: this.email, password: this.password });
      } else {
        this.errorMessage = "Email is either blank or only uses whitespace";
      }
    },
  },
};
</script>

<style></style>

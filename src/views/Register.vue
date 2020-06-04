<template>
  <v-container fill-height>
    <v-card class="mx-auto" flat color="transparent" min-width="350">
      <p class="text-center error--text" v-if="errorMessage">
        {{ errorMessage }}
      </p>
      <h1 class="text-center font-weight-light">
        Let's get those <br />
        discounts
      </h1>
      <div class="py-2"></div>
      <v-card-text>
        <v-text-field type="text" label="Username" v-model="username" solo></v-text-field>
        <v-text-field type="email" label="Email" v-model="email" solo></v-text-field>
        <v-text-field type="password" label="Password" v-model="password" solo></v-text-field>
        <v-text-field type="password" label="Verify password" v-model="verifyPassword" solo @keyup.enter="onRegisterPressed"></v-text-field>
      </v-card-text>
      <v-card-actions class="px-3">
        <v-btn color="accent" block :loading="getLoader" @click="onRegisterPressed">
          Register
        </v-btn>
      </v-card-actions>
      <v-card-text class="text-center">
        <p>
          <span>Already have an account? </span>
          <span>
            <router-link class="secondary--text" to="/login">
              Login here
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
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
  }),
  computed: {
    ...mapGetters(["getErrorMessage", "getLoader"]),
    errorMessage() {
      return this.getErrorMessage;
    },
  },
  methods: {
    ...mapActions(["register"]),
    onRegisterPressed() {
      this.register({
        displayName: this.username,
        email: this.email,
        password: this.password,
        verifyPassword: this.verifyPassword,
      });
    },
  },
};
</script>

<style>
#login-image {
  position: absolute;
  top: 50px;
}
</style>

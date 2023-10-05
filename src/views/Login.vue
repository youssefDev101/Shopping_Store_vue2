<template>
  <section>
    <div class="container">
      <div class="header-container">
        <h1>{{ titre }}</h1>
        <h6>{{ souTitre }}</h6>
      </div>

      <div class="login-wrapper">
        <img
          src="../assets/images/contacts-us/login.svg"
          alt=""
          class="login-img"
        />
        <div class="login-content">
          <form @submit.prevent="onLogin()">
            <div class="mb-3">
              <label class="form-label"
                >Adresse e-mail <span class="text-danger">*</span></label
              >
              <input
                type="email"
                class="form-control"
                name="email"
                v-model="user.email"
                v-validate="'required|email'"
                v-bind:class="{
                  'is-invalid': submitted && errors.has('email'),
                }"
              />
              <div
                v-if="submitted && errors.has('email')"
                class="invalid-feedback"
              >
                <span>ce champs est obligatoire</span>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Mot De Passe <span class="text-danger">*</span></label
              >
              <input
                type="password"
                class="form-control"
                name="password"
                v-model="user.password"
                v-validate="'required'"
                v-bind:class="{
                  'is-invalid': submitted && errors.has('password'),
                }"
              />
              <div
                v-if="submitted && errors.has('password')"
                class="invalid-feedback"
              >
                <span>ce champs est obligatoire</span>
              </div>
            </div>
            <div class="login-container">
              <button type="submit" class="btn btn-primary">
                {{ loginBtn }}
              </button>
              <a
                class="login-link"
                @click="onNavigateToRegister()"
                rel="register"
                >{{ loginLink }}</a
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Globals from "../helpers/globals";
import { AuthService } from "../helpers/authService";

export default {
  name: "Login",
  data() {
    return {
      titre: Globals.LOGIN.TITLE,
      souTitre: Globals.LOGIN.SUB_TITLE,
      loginBtn: Globals.LOGIN.BTN_PRIMARY,
      loginLink: Globals.LOGIN.LINK_PRIMARY,
      submitted: false,
      users: [],
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onNavigateToRegister() {
      this.$router.push("/register").catch(() => {});
    },
    onLogin() {
      this.submitted = true;
      this.$validator
        .validate()
        .then((valid) => {
          if (valid) {
            AuthService.login({
              email: this.user.email,
              password: this.user.password,
            }).then((user) => {
              if (user === false) {
                this.$swal({
                  icon: "error",
                  title: "email et/ou mot de passe incorrect(s)",
                });
                return;
              }
              this.$store.commit("SET_CURRENT_USER");
              this.$router.push("/").catch(() => {});
            });
          }
        })
        .catch(() =>
          this.$swal({
            icon: "error",
            text: "Un problème est survenu avec le serveur",
          })
        );
    },
  },
};
</script>

<style scoped src="../assets/css/views/login.css"></style>

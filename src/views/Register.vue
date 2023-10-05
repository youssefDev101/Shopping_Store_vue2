<template>
  <section>
    <div class="container">
      <div class="header-container">
        <h1>{{ TITLE }}</h1>
        <h6>{{ SUB_TITLE }}</h6>
      </div>

      <div class="register-wrapper">
        <img
          src="../assets/images/contacts-us/register.svg"
          alt="register image"
          class="register-img"
        />
        <div class="register-content">
          <form @submit.prevent="onSaveUser()">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="nom" class="form-label"
                    >Nom<span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    name="firstName"
                    placeholder="votre nom"
                    v-model="user.firstName"
                    v-validate="'required'"
                    v-bind:class="{
                      'is-invalid': submitted && errors.has('firstName'),
                    }"
                  />
                  <div
                    v-if="submitted && errors.has('firstName')"
                    class="invalid-feedback"
                  >
                    <span>{{ REQUIRED_FIELD }}</span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="prenom" class="form-label"
                    >Prenom<span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="votre prenom"
                    name="lastName"
                    v-model="user.lastName"
                    v-validate="'required'"
                    v-bind:class="{
                      'is-invalid': submitted && errors.has('lastName'),
                    }"
                  />
                  <div
                    v-if="submitted && errors.has('lastName')"
                    class="invalid-feedback"
                  >
                    <span>{{ REQUIRED_FIELD }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="email" class="form-label"
                >Adresse e-mail <span class="text-danger">*</span></label
              >
              <input
                type="email"
                class="form-control"
                placeholder="votre@email.com"
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
                <span>{{ REQUIRED_FIELD }}</span>
              </div>
            </div>
            <div class="form-group">
              <label for="password" class="form-label"
                >mot de passe <span class="text-danger">*</span></label
              >
              <input
                type="password"
                class="form-control"
                placeholder="votre mot de passe"
                name="password"
                v-model="user.password"
                v-validate="'required|min:8|max:15'"
                v-bind:class="{
                  'is-invalid': submitted && errors.has('password'),
                }"
              />
              <div
                v-if="submitted && errors.has('password')"
                class="invalid-feedback"
              >
                <span>{{ INVALID_FIELD }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="street" class="form-label"
                    >Adresse de livraison<span class="text-danger"
                      >*</span
                    ></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="votre adresse de livraison"
                    name="street"
                    v-model="user.address.street"
                    v-validate="'required'"
                    v-bind:class="{
                      'is-invalid': submitted && errors.has('street'),
                    }"
                  />
                  <div
                    v-if="submitted && errors.has('street')"
                    class="invalid-feedback"
                  >
                    <span>{{ REQUIRED_FIELD }}</span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="phone" class="form-label"
                    >Telephone <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="votre numero telephone"
                    name="phone"
                    v-model="user.phone"
                    v-validate="{
                      required: true,
                      regex:
                        /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/,
                    }"
                    v-bind:class="{
                      'is-invalid': submitted && errors.has('phone'),
                    }"
                  />
                  <div
                    v-if="submitted && errors.has('phone')"
                    class="invalid-feedback"
                  >
                    <span>{{ INVALID_FIELD }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group mt-4">
              <button type="submit" class="btn btn-primary btn-block">
                {{ VALIDATE }}
              </button>
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
  name: "Register",
  data() {
    return {
      TITLE: Globals.REGISTER.TITLE,
      SUB_TITLE: Globals.REGISTER.SUB_TITLE,
      VALIDATE: Globals.REGISTER.BTN_PRIMARY,
      REQUIRED_FIELD: Globals.CONTACT_PAGE.REQUIRED_FIELD,
      INVALID_FIELD: Globals.CONTACT_PAGE.INVALID_FIELD,
      user: {
        firstName: "",
        lastName: "",
        address: {
          street: "",
        },
        email: "",
        phone: "",
        password: "",
      },
      submitted: false,
    };
  },
  methods: {
    onSaveUser() {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          AuthService.checkExistedEmail(this.user).then((user) => {
            if (user === true) {
              this.$swal({
                icon: "error",
                text: "email deja existant",
              });
              return;
            }
            this.$store.dispatch("registerUser", this.user).then(() => {
              this.cleanRegisterForm();
            });
          });
        }
      });
    },
    cleanRegisterForm() {
      this.submitted = false;
      this.user = {
        firstName: "",
        lastName: "",
        address: {
          city: "",
        },
        email: "",
        phone: "",
        city: "",
        password: "",
      };
      this.$swal({
        icon: "success",
        text: "votre compte est enregister avec success",
      });
      this.$router.push("/").catch(() => {});
    },
  },
};
</script>

<style scoped src="../assets/css/views/register.css"></style>

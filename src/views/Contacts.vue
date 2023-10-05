<template>
  <section>
    <div class="container">
      <div class="header-container">
        <h1>{{ FIELD_1 }}</h1>
      </div>
      <div class="contacts-container">
        <img src="../assets/images/contacts-us/contact-1.svg" alt="" />
        <transition name="fade">
          <div class="contact-form">
            <form @submit.prevent="sendReclamation()">
              <legend class="legend">{{ FIELD_3 }}</legend>
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
                <label for="message" class="form-label"
                  >Message <span class="text-danger">*</span></label
                >
                <textarea
                  class="form-control"
                  name="message"
                  placeholder="Comment pouvons-nous aider ?"
                  rows="10"
                  v-model="user.message"
                  v-validate="'required'"
                  v-bind:class="{
                    'is-invalid': submitted && errors.has('message'),
                  }"
                ></textarea>
                <div
                  v-if="submitted && errors.has('message')"
                  class="invalid-feedback"
                >
                  <span>{{ REQUIRED_FIELD }}</span>
                </div>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">
                  {{ SEND_MESSAGE }}
                </button>
              </div>
            </form>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import Globals from "../helpers/globals";
import http from "@/helpers/axios";
import { MailService } from "../helpers/mailService";
export default {
  name: "Contact",
  data() {
    return {
      FIELD_1: Globals.CONTACT_PAGE.TITLE,
      FIELD_2: Globals.CONTACT_PAGE.IMG,
      FIELD_3: Globals.CONTACT_PAGE.LEGENDS,
      REQUIRED_FIELD: Globals.CONTACT_PAGE.REQUIRED_FIELD,
      SEND_MESSAGE: Globals.CONTACT_PAGE.SEND_MESSAGE,
      user: {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      },
      submitted: false,
    };
  },
  methods: {
    sendReclamation() {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.saveReclamation();
          MailService.sendEmail(
            "Reclamation",
            "youssef.siyed@gmail.com",
            JSON.stringify(this.user)
          );
        }
      });
    },
    saveReclamation() {
      http
        .post(`/reclamations`, this.user)
        .then(() => {
          this.user = {};
          this.submitted = false;
          this.$swal({
            icon: "success",
            title: "Merci,votre message a été envoyé avec succès",
          });
        })
        .catch(() => {
          this.$swal({
            icon: "error",
            title: "le serveur est non disponible !!",
          });
        });
    },
  },
};
</script>
<style src="../assets/css/views/contacts.css" scoped></style>

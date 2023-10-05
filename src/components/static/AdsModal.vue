<template>
  <section>
    <div class="modal">
      <div class="modal-content">
        <span class="close" @click="onHideTheModal()">&times;</span>
        <div class="modal-container">
          <img
            src="../../assets/images/mail/mail-1.svg"
            alt="image subscription"
            class="modal-img"
          />
          <div class="modal-main">
            <h1>{{ mainTitle }}</h1>
            <h3>
              <span style="color: #ef6d6d">{{ promoTitle }}</span>
            </h3>
            <p>{{ subTitle }}</p>
          </div>
        </div>
        <form @submit.prevent="onSendMail()">
          <div class="input-group mt-1 mb-3">
            <input
              type="text"
              placeholder="Votre adresse e-mail"
              aria-label="Recipient's email"
              aria-describedby="email"
              class="form-control"
              v-validate="'required|email'"
              v-model="email"
              name="email"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              required
            />
            <button type="submit" class="btn btn-primary">OK</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Globals from "../../helpers/globals";
import { MailService } from "../../helpers/mailService";

export default {
  name: "AdsModal",
  data() {
    return {
      email: "",
      submitted: false,
      mainTitle: Globals.ADS_MODAL.TITLE,
      promoTitle: Globals.ADS_MODAL.SUB_TITLE,
      subTitle: Globals.ADS_MODAL.SMALL_TITLE,
      emailTitle: Globals.ADS_MODAL.EMAIL_TITLE,
    };
  },
  methods: {
    onHideTheModal() {
      this.$emit("onHideModal", false);
    },
    onSendMail() {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          MailService.sendEmail(
            "PROMO",
            "youssef.siyed@gmail.com",
            `ce mail ${this.email} est notifier pour une promo`
          );
          this.$swal({
            icon: "success",
            text: "vous serrez notifier sur les coupons",
          });
          this.onHideTheModal();
          this.$root.$emit("hideAdsButton", false);
        }
      });
    },
  },
};
</script>

<style scoped>
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #fefefe;
  padding: 5px 20px;
  margin: 5% auto;
  border: 1px solid #888;
  width: 40%;
  border-radius: 0rem;
}

.close {
  color: #aaa;
  background: transparent;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-img {
  width: 15rem;
  height: 15rem;
}
.modal-main {
  width: 13rem;
  padding: 1rem 1rem;
  text-align: center;
  flex-direction: column;
}
.modal-main h1 {
  font-size: 15px;
  font-family: "Nunito Sans";
  font-weight: bold;
}
.modal-main h3 {
  margin: 1rem 0rem;
  font-family: "Nunito Sans";
}

/** media Query */
@media (max-width: 600px) {
  .modal-content {
    background-color: #fefefe;
    padding: 5px 5px;
    margin: 35% auto;
    border: 1px solid #888;
    width: 90%;
    border-radius: 0rem;
  }
  .modal-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .modal-img {
    width: 10rem;
    height: 10rem;
  }
}
</style>

<template>
  <div>
    <div class="row footer-container">
      <div class="col-md-6">
        <h3>{{ footer.title }}</h3>
        <p>{{ footer.description }}</p>
        <div class="footer-container-media">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
        </div>
      </div>
      <div class="col-md-6">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Votre adresse e-mail"
            aria-label="Recipient's email"
            aria-describedby="email"
          />
          <button class="btn btn-primary" type="button">OK</button>
        </div>
      </div>
    </div>
    <div class="footer_content">
      <p>{{ footer.madeBy }}</p>
      <p>{{ footer.copyright }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footer: {
        title: "E-SHOP",
        description:
          "Donnez à vos clients un aperçu de votre collection de produits.",
        madeBy: "Made with 🖤 By E-SHOP",
        copyright: "© E-SHOP " + new Date().getFullYear(),
      },
    };
  },
};
</script>

<style scoped>
.footer-container {
  margin: 2rem 2rem 0rem 2rem;
  padding: 1rem 2rem 1rem 2rem;
}
.footer_content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.footer-container-media {
  display: flex;
  justify-content: space-between;
  width: 9%;
  margin: 1rem 0rem 0rem 0rem;
  font-size: 20px;
}
/* mobile responsive */
@media screen and (max-width: 906px) {
  .footer-container {
    margin: 2rem 2rem 0rem 2rem;
    padding: 1rem 2rem 1rem 2rem;
    text-align: center;
  }
  .footer-container-media {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 2rem 0rem 2rem 0rem;
    padding: 0rem 3rem;
    font-size: 28px;
  }
}
</style>

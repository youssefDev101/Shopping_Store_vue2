<template>
  <section>
    <div class="error-wrapper">
      <img
        :src="img"
        alt="not found image"
        srcset="../../assets/images/notFound/empty.svg"
      />
      <div>
        <h3>{{ title }}</h3>
        <button class="btn btn-primary mt-2" @click="onNavigateToShop()">
          Retour à la boutique
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Error",
  props: ["img", "title"],
  methods: {
    onNavigateToShop() {
      this.$router.push("/shop").catch(() => {});
    },
  },
};
</script>

<style scoped>
.error-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.error-wrapper img {
  width: 200px;
  height: 200px;
  margin: -2rem 0rem 2rem 0rem;
}
/* mobile responsive */
@media screen and (max-width: 906px) {
  .error-wrapper h3 {
    font-size: 18px;
    margin-bottom: 1rem;
  }
}
</style>

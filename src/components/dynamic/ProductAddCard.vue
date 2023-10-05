<template>
  <section class="text-center">
    <button
      type="button"
      class="btn btn-primary btn-card"
      @click="onAddProductToCart()"
    >
      Ajouter Au Panier
    </button>
  </section>
</template>

<script>
export default {
  name: "ProductsAddCard",
  props: {
    productCart: Object,
    productQte: String,
    productSize: String,
  },
  methods: {
    onAddProductToCart() {
      let payload = {
        product: this.productCart,
        quantity: this.productQte,
        size: this.productSize,
      };
      payload.size = payload.size === "" ? "S" : payload.size;
      payload.quantity = payload.quantity === "" ? "1" : payload.quantity;
      this.$store.commit("ADD_CART_PRODUCTS", payload);
      this.$swal({
        icon: "success",
        text: "le produit est ajouté à votre panier",
      });
    },
  },
};
</script>

<style scoped>
.btn-card {
  width: 70%;
  margin: 1rem auto 1rem auto;
}
.btn-card:hover {
  width: 70%;
  background: #757575;
}
</style>

<template>
  <button class="product-trash_ico" @click="onRemoveProductById()">
    <i class="fas fa-minus-circle"></i>
  </button>
</template>

<script>
export default {
  name: "ProductTrash",
  props: {
    id: Number,
    type: String,
  },
  methods: {
    onRemoveProductById() {
      this.$swal({
        icon: "warning",
        text: "voulez-vous supprimer ce produit",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Eliminer",
      }).then((result) => {
        if (result.isConfirmed) {
          const payload = {
            id: this.$props.id,
            type: this.$props.type,
          };
          if (this.$props.type === "product_fav") {
            this.$store.commit("REMOVE_FAV_PRODUCTS", payload);
          }
          if (this.$props.type === "product_cart") {
            this.$store.commit("REMOVE_CART_PRODUCTS", payload);
          }
        }
      });
    },
  },
};
</script>

<style scoped>
.product-trash_ico {
  font-size: 15px;
  background: transparent;
  border: none;
}
.product-trash_ico:focus {
  outline: none;
  background: transparent;
  border: none;
}
</style>

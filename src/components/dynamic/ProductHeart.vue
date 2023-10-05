<template>
  <section>
    <button type="button" @click="onAddProductToFav()" class="btn-heart">
      <i :class="[isActive ? 'far fa-heart icon-active' : 'far fa-heart']"></i>
    </button>
  </section>
</template>

<script>
export default {
  name: "ProductHeart",
  props: {
    productFav: Object,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    onAddProductToFav() {
      this.isActive = true;
      this.$store.commit("ADD_FAV_PRODUCTS", this.productFav);
      this.$swal({
        icon: "success",
        text: "le produit est ajouté à votre favorie",
      });
    },
  },
};
</script>

<style
  scoped
  src="../../assets/css/components/dynamic/productHeart.css"
></style>

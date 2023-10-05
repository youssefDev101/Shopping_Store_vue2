<template>
  <div class="product-container">
    <div class="product-card">
      <span class="product-chips">EN SOLDE</span>
      <ProductHeart v-bind:productFav="product"></ProductHeart>
      <main @click="onNavigateToProductDetails(product)">
        <img :src="product.image" class="product-img" alt="image du produit" />
        <p class="product-title">{{ product.title }}</p>
        <div class="product-price_container">
          <p class="product-price-del">
            {{ (product.price * 2).toFixed(2) }}&nbsp;Dhs
          </p>
          <p class="product-price">{{ product.price.toFixed(2) }}&nbsp;Dhs</p>
        </div>
      </main>
    </div>
    <ProductsAddCard v-bind:productCart="product"></ProductsAddCard>
  </div>
</template>

<script>
import ProductsAddCard from "../dynamic/ProductAddCard.vue";
import ProductHeart from "../dynamic/ProductHeart.vue";

export default {
  name: "ProductsCard",
  props: {
    product: Object,
  },
  components: {
    ProductsAddCard,
    ProductHeart,
  },
  methods: {
    onNavigateToProductDetails(product) {
      this.$router.push({
        path: `/products/${product.id}/${product.title}`,
      });
    },
  },
};
</script>

<style scoped src="../../assets/css/components/dynamic/productCard.css"></style>

<template>
  <section>
    <div class="product-card">
      <span class="product-chips">EN SOLDE</span>
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
  </section>
</template>

<script>
export default {
  name: "ProductsRelated",
  props: {
    product: Object,
  },
  methods: {
    onNavigateToProductDetails(product) {
      this.$emit("productRelatedDetails", product);
    },
  },
};
</script>

<style
  scoped
  src="../../assets/css/components/dynamic/productRelated.css"
></style>

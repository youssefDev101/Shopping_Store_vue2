<template>
  <section class="container">
    <div class="header-container">
      <h1>Vos Produits Favouries</h1>
    </div>
    <ProductHeartTable></ProductHeartTable>
  </section>
</template>

<script>
import ProductHeartTable from "../components/dynamic/ProductHeartTable.vue";

export default {
  name: "ProductFavorite",
  components: {
    ProductHeartTable,
  },
};
</script>

<style scoped src="../assets/css/views/productFavorite.css"></style>

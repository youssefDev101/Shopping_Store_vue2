<template>
  <section>
    <div class="container">
      <div class="header-container">
        <h1>{{ title }}</h1>
      </div>
    </div>
    <ProductCardTable></ProductCardTable>
  </section>
</template>

<script>
import Globals from "../helpers/globals";
import ProductCardTable from "../components/dynamic/ProductCardTable.vue";

export default {
  name: "ProductShop",
  components: {
    ProductCardTable,
  },
  data() {
    return {
      title: Globals.BASKET_PAGE.TITLE,
    };
  },
};
</script>

<style scoped src="../assets/css/views/productShop.css"></style>

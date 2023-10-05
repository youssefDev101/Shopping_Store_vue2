<template>
  <section class="container">
    <ol class="breadcrumb mt-4 mb-4">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link to="/shop">Shop</router-link>
      </li>
      <li class="breadcrumb-item active">{{ $route.params.title }}</li>
    </ol>
    <ProductsInfo></ProductsInfo>
  </section>
</template>

<script>
import ProductsInfo from "../components/dynamic/ProductsInfo.vue";

export default {
  name: "ProductDetails",
  components: {
    ProductsInfo,
  },
};
</script>

<style scoped></style>

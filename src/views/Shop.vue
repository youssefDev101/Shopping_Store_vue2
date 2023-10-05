<template>
  <section>
    <div class="container">
      <div class="header-container">
        <h1>{{ titre }}</h1>
        <p>{{ description }}</p>
      </div>

      <ProductsList></ProductsList>
    </div>
  </section>
</template>

<script>
import Globals from "../helpers/globals";
import ProductsList from "@/components/dynamic/ProductsList.vue";
export default {
  name: "Shop",
  components: {
    ProductsList,
  },
  data() {
    return {
      titre: Globals.SHOP_PAGE.TITLE,
      description: Globals.SHOP_PAGE.SUB_TITLE,
    };
  },
};
</script>

<style scoped src="../assets/css/views/shop.css"></style>

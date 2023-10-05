<template>
  <section>
    <Spinner v-if="loading === true"></Spinner>

    <div class="row align-items-center" v-if="loading === false">
      <div class="col-md-6 col-6">
        <p>Afficher tous les {{ products.length }} résultats</p>
      </div>
      <div class="col-md-6 col-6 text-align-right">
        <ProductSelectSort @sortBy="onSortBy"></ProductSelectSort>
        <ProductSelectLimit @limitBy="onLimitBy"></ProductSelectLimit>
      </div>
    </div>
    <hr />
    <div class="card-wrapper">
      <ProductsCard
        v-for="(product, index) in products"
        :key="index"
        v-bind:product="product"
      ></ProductsCard>
    </div>
  </section>
</template>

<script>
import http from "../../helpers/axios";
import Spinner from "@/components/static/Spinner.vue";
import ProductsCard from "@/components/dynamic/ProductsCard.vue";
import ProductSelectLimit from "@/components/dynamic/ProductSelectLimit.vue";
import ProductSelectSort from "@/components/dynamic/ProductSelectSort.vue";

export default {
  name: "ProductsList",
  components: {
    Spinner,
    ProductsCard,
    ProductSelectSort,
    ProductSelectLimit,
  },
  data() {
    return {
      loading: true,
      products: [],
    };
  },
  created() {
    this.loading = true;
    this.findAllProducts(5);
  },
  methods: {
    onSortBy(sortBy) {
      switch (sortBy) {
        case "popularity":
          this.products.sort((a, b) => b.rating.poplarity - a.rating.poplarity);
          break;
        case "rating":
          this.products.sort((a, b) => b.rating.rate - a.rating.rate);
          break;
        case "lowerPrice":
          this.products.sort((a, b) => a.price - b.price);
          break;
        case "higherPrice":
          this.products.sort((a, b) => b.price - a.price);
          break;
      }
    },
    onLimitBy(limitBy) {
      this.findAllProducts(limitBy);
    },
    findAllProducts(limitBy) {
      http
        .get(`/products?_limit=${limitBy}`)
        .then((response) => {
          this.products = response.data;
          this.loading = false;
        })
        .catch(() => {
          this.$swal({
            icon: "error",
            title: "Un problème est survenu avec le serveur",
          });
        });
    },
  },
};
</script>

<style scoped src="../../assets/css/components/dynamic/productList.css"></style>

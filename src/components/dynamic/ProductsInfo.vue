<template>
  <section class="container">
    <div class="row">
      <div class="product-container">
        <div class="col-6 col-md-6 product-responsive">
          <Spinner v-if="loading === true"></Spinner>
          <span class="product-solde">EN SOLDE</span>
          <img
            v-if="loading === false"
            :src="product.image"
            alt="image produit"
            class="product-img"
          />
        </div>
        <div class="col-6 col-md-6 product-responsive">
          <Spinner v-if="loading === true"></Spinner>
          <div class="product-content">
            <h1>{{ product.title }}</h1>
            <div class="product_price">
              <span class="product_price-old" v-if="product.price"
                >{{ (product.price * 2).toFixed(2) }}&nbsp;Dhs</span
              >
              <span class="product_price-new" v-if="product.price"
                >{{ product.price.toFixed(2) }}&nbsp;Dhs</span
              >
            </div>
            <div class="product-desc">
              <p>{{ product.description }}</p>
            </div>

            <main class="product-exchange">
              <SizeButton @productSize="getProductSize"></SizeButton>
              <QuantityButton @productQte="getProductQte"></QuantityButton>
            </main>
            <ProductsAddCard
              v-bind:productCart="product"
              v-bind:productQte="productQte"
              v-bind:productSize="productSize"
            ></ProductsAddCard>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <h1 class="product-related">produits simulaires</h1>
    <div class="product-container">
      <ProductsRelated
        v-for="(item, index) in products"
        :key="index"
        v-bind:product="item"
        @productRelatedDetails="getProductDetails"
      ></ProductsRelated>
    </div>
  </section>
</template>

<script>
import http from "../../helpers/axios";
import Spinner from "@/components/static/Spinner.vue";
import SizeButton from "@/components/static/SizeButton.vue";
import QuantityButton from "@/components/static/QuantityButton.vue";
import ProductsRelated from "@/components/dynamic/ProductsRelated.vue";
import ProductsAddCard from "@/components/dynamic/ProductAddCard.vue";

export default {
  name: "ProductsInfo",
  components: {
    Spinner,
    SizeButton,
    QuantityButton,
    ProductsAddCard,
    ProductsRelated,
  },
  data() {
    return {
      loading: true,
      productQte: "",
      productSize: "",
      productId: this.$route.params.id,
      products: [],
      product: {},
    };
  },
  created() {
    this.loading = true;
    this.getProductById(this.productId);
  },
  methods: {
    getProductById(id) {
      http
        .get(`/products/${id}`)
        .then((response) => {
          this.product = response.data;
          this.getProductByCategory();
          this.loading = false;
        })
        .catch(() => {
          this.$swal({
            icon: "error",
            title: "un probleme est produit coter serveur",
          });
        });
    },
    getProductByCategory() {
      http
        .get(`/products?categoryId=${this.product.categoryId}&_limit=6`)
        .then((response) => {
          this.products = response.data;
          this.loading = false;
        })
        .catch(() => {
          this.$swal({
            icon: "error",
            title: "un probleme est produit coter serveur",
          });
        });
    },
    getProductDetails(product) {
      this.getProductById(product.id);
    },
    getProductSize(size) {
      this.productSize = size;
    },
    getProductQte(qte) {
      this.productQte = qte;
    },
  },
};
</script>

<style scoped src="../../assets/css/components/dynamic/productInfo.css"></style>

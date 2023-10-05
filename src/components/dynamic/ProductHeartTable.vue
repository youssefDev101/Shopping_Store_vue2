<template>
  <section>
    <div class="table-responsive" v-if="productsFav.length">
      <table class="table table-hover">
        <thead>
          <tr class="text-center">
            <th>#</th>
            <th scope="col">PRODUIT</th>
            <th scope="col">TITRE</th>
            <th scope="col">PRIX</th>
            <th scope="col">QUANTITÉ</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr
            class="table-secondary"
            v-for="(product, index) in productsFav"
            :key="index"
          >
            <th class="align-middle">
              <ProductTrash
                :id="product.id"
                :type="productsType"
              ></ProductTrash>
            </th>
            <th class="align-middle">
              <img :src="product.image" class="product-img" />
            </th>
            <th class="align-middle product-font">{{ product.title }}</th>
            <th class="align-middle product-font">
              {{ product.price }}&nbsp;Dhs
            </th>
            <th class="align-middle">
              <span class="product-qte">{{ product.quantity }}</span>
            </th>
            <th class="align-middle">
              <button
                class="btn btn-primary"
                @click="onNavigateToProductDetails(product)"
              >
                voir plus
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <Error v-else :img="img" :title="title"></Error>
  </section>
</template>

<script>
import Error from "./Error.vue";
import ProductTrash from "./ProductTrash.vue";

export default {
  name: "ProductHeartTable",
  components: {
    Error,
    ProductTrash,
  },
  data() {
    return {
      img: "../../assets/images/notFound/empty.svg",
      title: "Votre carte est actuellement vide.",
      productsType: "product_fav",
    };
  },
  computed: {
    productsFav() {
      return this.$store.getters.GET_FAV_PRODUCTS;
    },
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

<style scoped>
.product-img {
  max-width: 60px;
}
.product-font {
  font-size: 0.8rem;
  font-weight: 700;
}
.product-qte {
  border: none;
  padding: 0.5rem 0.5rem;
  border-radius: 80%;
  background: var(--black);
  color: var(--light);
  font-size: 10px;
}
</style>

<template>
  <section>
    <main v-if="productsBasket.length">
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr class="text-center">
              <th>#</th>
              <th scope="col">PRODUIT</th>
              <th scope="col">TITRE</th>
              <th scope="col">PRIX</th>
              <th scope="col">QUANTITÉ</th>
              <th scope="col">TOTAL</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr
              class="table-secondary"
              v-for="(product, index) in productsBasket"
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
                {{ product.price.toFixed(2) }}&nbsp;Dhs
              </th>
              <th class="align-middle">
                <input
                  class="product-qte"
                  type="text"
                  v-model="product.quantity"
                  @change="onChangeProductQte(product)"
                />
              </th>
              <th class="align-middle product-font">
                {{ (product.quantity * product.price).toFixed(2) }}&nbsp;Dhs
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="product-coupon">
        <div class="input-group group-coupon">
          <input
            type="text"
            v-model="productCoupon"
            placeholder="Coupon code"
            aria-describedby="Coupon"
            class="form-control"
          /><button
            type="button"
            class="btn btn-primary"
            @click="onClickCouponCode()"
          >
            APPLIQUER UN COUPON
          </button>
        </div>
      </div>
      <ProductTotal :couponCode="couponCode"></ProductTotal>
    </main>
    <Error v-else :img="img" :title="title"></Error>
  </section>
</template>

<script>
import Error from "./Error.vue";
import ProductTrash from "./ProductTrash.vue";
import ProductTotal from "./ProductTotal.vue";

export default {
  name: "ProductCardTable",
  components: {
    Error,
    ProductTrash,
    ProductTotal,
  },
  data() {
    return {
      img: "../../assets/images/notFound/empty.svg",
      title: "Votre panier est actuellement vide.",
      productsType: "product_cart",
      productCoupon: "",
      couponCode: "",
    };
  },
  computed: {
    productsBasket() {
      return this.$store.getters.GET_CART_PRODUCTS;
    },
  },
  methods: {
    onChangeProductQte(products) {
      this.productChange = true;
      let payload = {
        product: products,
        quantity: products.quantity,
        size: "",
      };
      payload.size = payload.size === "" ? "S" : payload.size;
      payload.quantity = payload.quantity === "" ? "1" : payload.quantity;
      this.$store.commit("ADD_CART_PRODUCTS", payload);
    },
    onClickCouponCode() {
      this.couponCode = this.productCoupon.toUpperCase();
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
  border: 2px solid var(--black);
  border-radius: 1rem;
  width: 25%;
  text-align: center;
  font-weight: bold;
}
.product-coupon {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 0rem 2rem;
  margin: 1rem auto;
}
.group-coupon {
  width: auto;
}
</style>

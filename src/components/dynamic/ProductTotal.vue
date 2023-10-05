<template>
  <section>
    <div class="wrapper">
      <h3 class="text-center mb-5">Totalité des produits sur le panier</h3>
      <div class="wrapper-content">
        <h5>code Coupon</h5>
        <h5 class="total-price">{{ couponCode }}</h5>
      </div>
      <hr />
      <div class="wrapper-content">
        <h1>Total</h1>
        <h1 class="total-price">{{ grandTotal.toFixed(2) }}&nbsp;Dhs</h1>
      </div>
      <ProductCheckout :productCheckout="products"></ProductCheckout>
    </div>
  </section>
</template>

<script>
import Globals from "../../helpers/globals";
import ProductCheckout from "./ProductCheckout.vue";

export default {
  name: "ProductTotal",
  props: {
    couponCode: String,
  },
  components: {
    ProductCheckout,
  },
  computed: {
    products() {
      return this.$store.getters.GET_CART_PRODUCTS;
    },
    grandTotal() {
      let totalPrice = this.products.reduce((sum, i) => {
        return sum + i.price * i.quantity;
      }, 0);
      if (Globals.BASKET_PAGE.COUPON_CODE === this.$props.couponCode) {
        let couponPrice = (totalPrice * 10) / 100;
        totalPrice = totalPrice - couponPrice * 2;
      }
      return totalPrice;
    },
  },
};
</script>

<style scoped>
.wrapper {
  border: none;
  margin: 2rem 2rem 1rem 2rem;
  padding: 2rem 2rem;
  width: 50%;
  background: #f5f5f5;
}
.wrapper-content {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
/** media Query */
@media (max-width: 600px) {
  .wrapper {
    border: none;
    margin: 2rem 2rem 1rem 2rem;
    padding: 2rem 2rem;
    width: 85%;
    background: #f5f5f5;
  }
  .total-price {
    font-size: 15px;
  }
}
</style>

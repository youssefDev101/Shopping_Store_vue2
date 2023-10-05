<template>
  <section class="text-center mt-4">
    <button class="btn btn-primary btn-block" @click="onClickCheckOut()">
      Acheter
    </button>
  </section>
</template>

<script>
import { DateTimeService } from "../../helpers/dateTimeService";
export default {
  name: "ProductCheckout",
  props: {
    productCheckout: [],
  },
  data() {
    return {
      productToShop: {
        user: {
          fullname: "",
          email: "",
        },
        date: "",
        products: [],
      },
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.GET_CURRENNT_USER;
    },
    productsCartSize() {
      return this.$store.getters.GET_SIZE_CART_PRODUCTS;
    },
  },
  methods: {
    onClickCheckOut() {
      if (Object.keys(this.currentUser).length === 0) {
        this.$swal({
          icon: "warning",
          text: "veuillez vous authentifier",
        });
        this.$router.push("/login").catch(() => {});
        return;
      }
      this.assignToObject();
      this.$store
        .dispatch("saveProductToCart", this.productToShop)
        .then((data) => {
          let products = data;
          this.saveSucessCarts(products);
        });
    },
    assignToObject() {
      this.productToShop.user.fullname = `${this.currentUser.firstname}-${this.currentUser.lastname}`;
      this.productToShop.user.email = this.currentUser.email;
      this.productToShop.date = DateTimeService.dateTimeFormating(new Date());
      this.productToShop.products = this.productCheckout.map((product) => ({
        id: product.id,
        quantity: product.quantity,
      }));
    },
    saveSucessCarts(products) {
      if (Object.keys(products).length != 0) {
        this.$swal({
          icon: "success",
          title: "félicitations !",
          text: "votre commande vient d'être enregistrée.",
        });
      }
    },
  },
};
</script>

<style scoped></style>

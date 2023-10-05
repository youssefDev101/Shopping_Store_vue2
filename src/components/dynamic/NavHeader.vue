<template>
  <section>
    <AlertHeader></AlertHeader>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-nav-top">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" @click="onOpenNavbar()">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="navbar-icon-link" v-on:click="onNavigateTo('home')"
                >HOME
              </a>
            </li>
            <li class="nav-item">
              <a class="navbar-icon-link" v-on:click="onNavigateTo('shop')"
                >SHOP</a
              >
            </li>
            <li class="nav-item">
              <a class="navbar-icon-link" v-on:click="onNavigateTo('contacts')"
                >SUPPORT</a
              >
            </li>
          </ul>
          <a class="navbar-logo-shop" v-on:click="onNavigateTo('home')"
            >E-SHOP</a
          >
          <div class="d-flex">
            <div class="navbar-icon">
              <a v-on:click="onNavigateTo('favorites')"
                ><i class="fas fa-heart"></i
              ></a>
              <span class="navbar-count">{{ productsFavSizes }}</span>
            </div>
            <div class="navbar-icon">
              <a v-on:click="onNavigateTo('baskets')">
                <i class="fas fa-shopping-cart"></i
              ></a>
              <span class="navbar-count">{{ productsCartSizes }}</span>
            </div>
            <div class="navbar-icon" v-if="!currentUser">
              <a v-on:click="onNavigateTo('login')"
                ><i class="fas fa-user-circle"></i
              ></a>
            </div>
            <div class="navbar-icon" v-if="currentUser">
              <a v-on:click="onNavigateTo('logout')"
                ><i class="fas fa-sign-out-alt"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="openNavbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li>
            <a class="nav-link" v-on:click="onNavigateTo('home')">Home </a>
          </li>
          <li>
            <a class="nav-link" v-on:click="onNavigateTo('shop')">Shop</a>
          </li>
          <li>
            <a class="nav-link" v-on:click="onNavigateTo('contacts')"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
import AlertHeader from "../static/AlertHeader.vue";

export default {
  name: "Header",
  components: {
    AlertHeader,
  },
  data() {
    return {
      openNavbar: false,
    };
  },
  computed: {
    productsFavSizes() {
      return this.$store.getters.GET_SIZE_FAV_PRODUCTS;
    },
    productsCartSizes() {
      return this.$store.getters.GET_SIZE_CART_PRODUCTS;
    },
    currentUser() {
      if (Object.keys(this.$store.getters.GET_CURRENNT_USER).length === 0) {
        return false;
      }
      return true;
    },
  },
  methods: {
    onNavigateTo(page) {
      switch (page) {
        case "home":
          this.$router.push("/").catch(() => {});
          break;
        case "shop":
          this.$router.push("/shop").catch(() => {});
          break;
        case "contacts":
          this.$router.push("/contacts").catch(() => {});
          break;
        case "baskets":
          this.$router.push("/baskets").catch(() => {});
          break;
        case "favorites":
          this.$router.push("/favorites").catch(() => {});
          break;
        case "login":
          this.$router.push("/login").catch(() => {});
          break;
        case "logout":
          this.$router.push("/").catch(() => {});
          this.$store.commit("DELETE_CURRENT_USER");
          break;
      }
    },
    onOpenNavbar() {
      this.openNavbar = !this.openNavbar;
    },
  },
};
</script>

<style scoped>
.navbar-collapse {
  display: flex !important;
  flex-basis: auto;
  justify-content: space-between;
}
.navbar-icon {
  cursor: pointer;
  position: relative;
  margin: 0rem 1rem;
  font-size: 1.8rem;
  color: #55595c;
}
.navbar-icon-link {
  cursor: pointer;
  position: relative;
  margin: 0rem 1rem;
  font-size: 1rem;
  text-decoration: none;
  color: #80898f;
}
.navbar-logo-shop {
  cursor: pointer;
  display: inline-block;
  padding-top: 0.3359375rem;
  padding-bottom: 0.3359375rem;
  margin: auto;
  font-size: 1.09375rem;
  line-height: inherit;
  white-space: nowrap;
}
.nav-item {
  margin-right: 0rem;
  cursor: pointer;
}
.navbar-light .navbar-nav .nav-link {
  font-size: 15px;
  font-weight: 700;
  color: var(--black);
}
.navbar-count {
  position: absolute;
  top: -6px;
  right: -9px;
  width: 18px;
  height: 18px;
  line-height: 17px;
  color: #fff;
  background: #ff5858;
  border: 1px solid #ff5858;
  text-align: center;
  border-radius: 50%;
  font-size: 0.625rem;
}
.navbar-icon :hover {
  transform: scale(1.2);
}
/** media Query */

@media (max-width: 600px) {
  .nav-item {
    display: none;
    margin-right: 2rem;
  }
  .fixed-nav-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }
}
</style>

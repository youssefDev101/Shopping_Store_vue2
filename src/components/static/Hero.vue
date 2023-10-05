<template>
  <section class="home-section">
    <Spinner v-if="loading === true"></Spinner>
    <div class="home-hero" v-if="loading === false">
      <Circles
        color="#1a1a1a"
        height="19rem"
        width="19rem"
        right="-9%"
        top="-27%"
      ></Circles>
      <Circles
        color="#1a1a1a"
        height="21rem"
        width="21rem"
        right="85%"
        top="70%"
      ></Circles>
      <div class="container">
        <div class="home-hero-container">
          <img
            v-if="content.img"
            class="home-hero-img"
            src="@/assets/images/shop-hero-3.svg"
            alt="image sur la home page"
          />
          <div class="home-hero-content">
            <div class="home-intro">
              <h1 v-if="content.title" v-html="content.title"></h1>
              <p v-if="content.desc" v-html="content.desc"></p>
              <button
                type="button"
                class="btn btn-primary btn-lg btn-custom"
                @click="onNavigateToShop()"
              >
                {{ content.cta }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import http from "../../helpers/axios";
import Spinner from "@/components/static/Spinner.vue";
import Circles from "@/components/static/Circle.vue";

export default {
  name: "Hero",
  components: {
    Spinner,
    Circles,
  },
  data() {
    return {
      loading: true,
      content: {
        title: "",
        desc: "",
        img: "",
        cta: "",
      },
    };
  },
  created() {
    this.loading = true;
    this.getHomeData();
  },
  methods: {
    getHomeData() {
      http
        .get(`/pages/1`)
        .then((response) => {
          this.content.title = response.data.hero_home.hero_title;
          this.content.desc = response.data.hero_home.hero_description;
          this.content.img = response.data.hero_home.hero_img;
          this.content.cta = response.data.hero_home.hero_cta;
          this.loading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    onNavigateToShop() {
      this.$router.push("/shop").catch(() => {});
    },
  },
};
</script>

<style scoped>
.home-hero {
  background: var(--grey-gradient);
  padding: 1rem 0rem;
  position: relative;
  overflow: hidden;
  display: block;
}
.home-hero-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row-reverse;
  max-width: 1200px;
}
.home-hero-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.home-intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
}
.home-hero-img {
  width: 546px;
  height: 535px;
  fill: none;
}
.home-intro h1 {
  font-size: 60px;
  font-family: "Nunito Sans";
  font-weight: 800;
  text-align: start;
  margin: 0rem 0rem 2rem 0rem;
}
.home-hero p {
  font-size: 15px;
  font-family: "Nunito Sans";
  font-weight: 500;
}
.btn-custom {
  font-size: 15px;
  width: 70%;
  margin: 1rem 0rem;
}
/* mobile responsive */
@media screen and (max-width: 906px) {
  .home-hero-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .home-hero-img {
    width: 246px;
    height: 235px;
    fill: none;
  }
  .home-hero-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .home-intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .home-intro h1 {
    font-size: 3rem;
    font-family: "Nunito Sans";
    font-weight: 800;
    text-align: center;
    margin: 0rem 0rem 2rem 0rem;
  }
  .home-hero p {
    font-size: 18px;
    font-family: "Nunito Sans";
    font-weight: 500;
  }
  .btn-custom {
    font-size: 15px;
    width: 100%;
    margin: 1rem 0rem;
  }
}
</style>

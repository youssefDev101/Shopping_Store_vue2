<template>
  <section>
    <Spinner v-if="isLoading === true"></Spinner>
    <div v-if="isLoading === false" class="headercta-container">
      <div v-for="item in content" :key="item.id" class="headercta-content">
        <div
          class="headercta-cards"
          v-on:click="onNavigateToContacts(item.header_description)"
        >
          <h1><i v-bind:class="item.header_icon"></i></h1>
          <h3>{{ item.header_title }}</h3>
          <p>
            {{ item.header_description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import http from "../../helpers/axios";
import Spinner from "@/components/static/Spinner.vue";

export default {
  name: "HeaderCTA",
  components: {
    Spinner,
  },
  data() {
    return {
      isLoading: true,
      content: [],
    };
  },
  created() {
    this.isLoading = true;
    this.getContent();
  },
  methods: {
    onNavigateToContacts(description) {
      if (description != "contact@e-shop.com") {
        return "";
      }
      this.$router.push("/contacts").catch(() => {});
    },
    getContent() {
      http
        .get(`/header_cards`)
        .then((response) => {
          this.content = response.data;
          this.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
.headercta-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}
.headercta-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.headercta-cards {
  padding: 2rem 2rem;
  background: #f6f6f6;
  margin: 2rem 0rem 2rem 0rem;
  border-radius: 2rem;
  box-shadow: 0 5px 10px rgb(204 209 208 / 28%);
  min-width: 300px;
  width: 15rem;
  height: 15rem;
  text-align: center;
}
.headercta-cards h1 {
  font-size: 55px;
  margin-bottom: 1rem;
}
.headercta-cards p {
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 1rem 0rem;
}
/* mobile responsive */
@media screen and (max-width: 906px) {
  .headercta-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
}
</style>

<template>
  <section>
    <div class="form-group">
      <select
        class="form-select select-sorting"
        v-model="sortBy"
        @click="sortProductsBy(sortBy)"
      >
        <option value="" selected disabled hidden>Tri par défaut</option>
        <option value="popularity">Trier par popularité</option>
        <option value="rating">Trier par note moyenne</option>
        <option value="lowerPrice">
          Trier par prix : du plus bas au plus élevé
        </option>
        <option value="higherPrice">
          Trier par prix : du plus élevé au plus bas
        </option>
      </select>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductSelectSort",
  data() {
    return {
      sortBy: "",
    };
  },
  methods: {
    sortProductsBy(sortBy) {
      switch (sortBy) {
        case "popularity":
          this.$emit("sortBy", this.sortBy);
          break;
        case "rating":
          this.$emit("sortBy", this.sortBy);
          break;
        case "lowerPrice":
          this.$emit("sortBy", this.sortBy);
          break;
        case "higherPrice":
          this.$emit("sortBy", this.sortBy);
          break;
      }
    },
  },
};
</script>

<style scoped>
.select-sorting {
  border: 1px solid;
  padding: 1rem 1rem;
  margin: 0rem 0rem 0rem 1rem;
}
/* mobile responsive */
@media screen and (max-width: 906px) {
  .select-sorting {
    border: 1px solid;
    padding: 0rem 2rem;
    width: 50%;
  }
}
</style>

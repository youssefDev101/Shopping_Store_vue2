<template>
  <section>
    <div class="form-group">
      <select
        class="form-select select-limit"
        v-model="limitedBy"
        @click="limitedProductsBy(limitedBy)"
      >
        <option value="" selected disabled hidden>N° par défaut</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductSelectLimit",
  data() {
    return {
      limitedBy: 5,
    };
  },
  methods: {
    limitedProductsBy() {
      this.$emit("limitBy", this.limitedBy);
    },
  },
};
</script>

<style scoped>
.select-limit {
  border: 1px solid;
  padding: 1rem 1rem;
  margin: 0rem 0rem 0rem 1rem;
}
/* mobile responsive */
@media screen and (max-width: 906px) {
  .select-limit {
    border: 1px solid;
    padding: 0rem 2rem;
    width: 50%;
  }
}
</style>

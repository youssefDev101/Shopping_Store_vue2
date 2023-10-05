<template>
  <section class="section-qte">
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center select-item-size"
      >
        Quantite
        <select
          class="form-select select-size"
          v-model="productQte"
          @click="onSelectQte()"
        >
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "QuantityButton",
  data() {
    return {
      productQte: "1",
    };
  },
  methods: {
    onSelectQte() {
      this.$emit("productQte", this.productQte);
    },
  },
};
</script>

<style scoped>
.section-qte {
  width: 100%;
}
.select-size {
  height: 2rem;
  width: 60%;
  text-align: center;
}
</style>

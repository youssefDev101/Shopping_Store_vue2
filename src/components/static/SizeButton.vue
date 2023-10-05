<template>
  <section class="section-size">
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center select-item-size"
      >
        Taille
        <select
          class="form-select select-size"
          v-model="productSize"
          @click="onSelectSize()"
        >
          <option selected value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "SizeButton",
  data() {
    return {
      productSize: "S",
    };
  },
  methods: {
    onSelectSize() {
      this.$emit("productSize", this.productSize);
    },
  },
};
</script>

<style scoped>
.section-size {
  width: 100%;
}
.select-size {
  width: 60%;
  height: 2rem;
  text-align: center;
}
</style>

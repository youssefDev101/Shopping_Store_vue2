<template>
  <div :style="style" class="circle-mobile"></div>
</template>

<script>
export default {
  name: "Circles",
  props: ["color", "height", "width", "top", "right"],
  computed: {
    style() {
      return `background-color: ${this.$props.color};border: none;border-radius: 50%;width: ${this.$props.width};height: ${this.$props.height};z-index: 999;opacity: 0.5;position: absolute;top: ${this.$props.top};right: ${this.$props.right}`;
    },
  },
};
</script>

<style scoped>
/* mobile responsive */
@media screen and (max-width: 906px) {
  .circle-mobile {
    display: none;
  }
}
</style>

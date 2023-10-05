<template>
  <div class="spinner-container">
    <div class="spinner-content" role="status">
      <span class="visually-hidden"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem !important;
}
.spinner-content {
  display: inline-block;
  width: 5rem;
  height: 5rem;
  vertical-align: text-bottom;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: spinner-border 0.75s linear infinite;
  animation: spinner-border 0.75s linear infinite;
}
</style>

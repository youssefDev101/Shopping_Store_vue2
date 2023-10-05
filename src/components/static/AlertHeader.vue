<template>
  <section class="alert-section">
    <div class="alert alert-secondary alert-wrapper">
      <strong>{{ title }}</strong> {{ subTitle }}
      <a href="#" class="alert-link"></a>.
    </div>
  </section>
</template>

<script>
import Globals from "../../helpers/globals";

export default {
  name: "AlertHeader",
  data() {
    return {
      title: Globals.ALERT_HEADER.TITLE,
      subTitle: Globals.ALERT_HEADER.SUB_TITLE,
      subLink: Globals.ALERT_HEADER.SUB_LINK,
    };
  },
};
</script>

<style scoped>
.alert-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  text-align: center;
  padding: 0rem 1rem;
}
.alert-wrapper {
  padding: 0rem 0rem;
  margin: 0rem auto;
  font-size: 1rem;
  font-weight: 500;
  word-spacing: 2px;
  background: transparent;
}
/** media Query */
@media (max-width: 600px) {
  .alert-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    text-align: center;
    padding: 0rem 1rem;
    margin-bottom: 3rem;
  }
}
</style>

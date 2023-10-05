<template>
  <div>
    <Hero></Hero>
    <HeaderCTA></HeaderCTA>
    <AdsButton></AdsButton>
    <FixedButton></FixedButton>
  </div>
</template>

<script>
import Hero from "@/components/static/Hero.vue";
import HeaderCTA from "@/components/static/HeaderCTA.vue";
import FixedButton from "@/components/static/FixedButton.vue";
import AdsButton from "@/components/static/AdsButton.vue";

export default {
  name: "Home",
  components: {
    Hero,
    HeaderCTA,
    FixedButton,
    AdsButton,
  },
};
</script>

<style scoped></style>

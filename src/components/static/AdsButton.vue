<template>
  <section class="ads-section" v-if="showAdsButton">
    <button class="ads-wrapper" @click="onShowAdsModal()">
      <span
        >{{ titleFirst }}&nbsp;<span style="color: #ed6d6d">{{
          titleSecond
        }}</span
        >&nbsp;{{ titleTheird }}</span
      >
    </button>
    <AdsModal v-if="showAdsModal" @onHideModal="onHideAdsModal"> </AdsModal>
  </section>
</template>

<script>
import AdsModal from "./AdsModal.vue";
import Globals from "../../helpers/globals";

export default {
  name: "AdsButton",
  components: {
    AdsModal,
  },
  data() {
    return {
      showAdsButton: true,
      showAdsModal: false,
      titleFirst: Globals.ADS_BTN.TITLE_1,
      titleSecond: Globals.ADS_BTN.TITLE_2,
      titleTheird: Globals.ADS_BTN.TITLE_3,
    };
  },
  mounted() {
    this.$root.$on("hideAdsButton", (param) => {
      this.showAdsButton = param;
    });
  },
  methods: {
    onShowAdsModal() {
      this.showAdsModal = true;
    },
    onHideAdsModal(param) {
      this.showAdsModal = param;
    },
  },
};
</script>

<style scoped>
.ads-section {
  position: fixed;
  top: 35%;
  left: 0%;
}
.ads-wrapper {
  background: var(--black);
  color: white;
  width: 8rem;
  height: 2.5rem;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 1rem;
  margin: 0rem -3rem;
  word-spacing: 2px;
  transform: rotate(269deg);
}
</style>

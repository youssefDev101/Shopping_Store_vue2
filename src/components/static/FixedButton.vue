<template>
  <section>
    <button class="float" @click="onToogleButton()">
      <i :class="[showButton ? iconHide : iconShow]"></i>
    </button>
    <div v-if="showButton === true">
      <button class="float1" @click="onRedirectTo(linkCall)">
        <i :class="icon2"></i>
      </button>
      <button class="float2" @click="onRedirectTo(linkWhatUp)">
        <i :class="icon3"></i>
      </button>
    </div>
  </section>
</template>

<script>
import Globals from "../../helpers/globals";
export default {
  name: "FixedButton",
  data() {
    return {
      showButton: false,
      iconShow: Globals.FIXED_BTN.ICON_SHOW,
      iconHide: Globals.FIXED_BTN.ICON_HIDE,
      icon2: Globals.FIXED_BTN.ICON_2,
      icon3: Globals.FIXED_BTN.ICON_3,
      linkCall: Globals.FIXED_BTN.LINK_2,
      linkWhatUp: Globals.FIXED_BTN.LINK_3,
    };
  },
  methods: {
    onToogleButton() {
      this.showButton = !this.showButton;
    },
    onRedirectTo(link) {
      location.href = link;
    },
  },
};
</script>

<style scoped>
.float {
  position: fixed;
  cursor: pointer;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: var(--black);
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 20px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.float1 {
  position: fixed;
  cursor: pointer;
  width: 60px;
  height: 60px;
  bottom: 115px;
  right: 40px;
  background-color: var(--black);
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 20px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.float2 {
  position: fixed;
  cursor: pointer;
  width: 60px;
  height: 60px;
  bottom: 180px;
  right: 40px;
  background-color: var(--black);
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 20px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}
.my-float {
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
}
</style>

<template>
  <div
    id="app"
    :class="[mode ? 'bg-veryLightGrayColor' : 'bg-veryDarkBlueDarkColor']"
  >
    <HeaderSection v-on:currentMode="receivedMode" />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection";
export default {
  name: "app",
  components: {
    HeaderSection,
    // SearchBoxes,
  },
  data() {
    return {
      mode: true,
    };
  },
  methods: {
    receivedMode(value) {
      this.mode = value;
    },
  },
};
</script>

<style lang="scss">
// site font
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

// site font sizes
$homepageFontSize: 14px;
$detailsPageFontSize: 16px;

:root {
  font-size: $homepageFontSize;
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

.app {
  color: hsl(0, 0%, 100%);
}

.light {
  color: hsl(200, 15%, 8%);
}

body {
  font-family: "Nunito Sans", sans-serif;
}
</style>
